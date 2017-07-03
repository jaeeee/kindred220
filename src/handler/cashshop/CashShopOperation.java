/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package handler.cashshop;

import constants.ServerConstants;
import constants.GameConstants;
import client.MapleClient;
import client.MaplePet;
import client.MapleCharacter;
import client.items.*;
import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import launch.CashShopServer;
import launch.ChannelServer;
import launch.helpers.ChracterTransfer;
import packet.creators.CashPacket;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import server.items.*;
import tools.CurrentTime;
import tools.Pair;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import server.quest.MapleQuest;

public class CashShopOperation {

    public static void LeaveCS(final ReadingMaple rh, final MapleClient ha, final MapleCharacter hp) {
	final CashShopServer cs = CashShopServer.getInstance();
	cs.getPlayerStorage().deregisterPlayer(hp);
	ha.updateLoginState(MapleClient.LOGIN_SERVER_TRANSITION, ha.getSessionIPAddress());
	ChannelServer.getInstance(ha.getChannel()).ChannelChange_Data(new ChracterTransfer(hp), hp.getId(), ha.getChannel());
	ha.getSession().write(MainPacketCreator.getChannelChange(ServerConstants.basePorts+(ha.getChannel()), ServerConstants.getServerHost(ha)));
	hp.saveToDB(false, true);
        try {
            if (hp.getCashInventory() != null) {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = con.prepareStatement("DELETE FROM inventoryitems WHERE accountid = ? AND type = ?");
                ps.setInt(1, ha.getAccID());
                ps.setInt(2, ItemFactory.getType(ItemFactory.InventoryType.CASHSHOP));
                ps.executeUpdate();
                ps.close();
                hp.getCashInventory().saveToDB();
            } else {
                System.err.println("ĳ�ü� �κ��丮�� �� �����Ͱ� �߻��Ͽ� ������ �����߽��ϴ�.");
            }
        } catch (SQLException e) {
                    e.printStackTrace();
        }
	ha.setPlayer(null);
        ha.isCS = false;
    }

    public static final void EnterCS(final int playerid, final MapleClient ha) {
	final CashShopServer cs = CashShopServer.getInstance();
	final ChracterTransfer transfer = cs.getPlayerStorage().getPendingCharacter(playerid);
        
	MapleCharacter chr = MapleCharacter.ReconstructChr(transfer, ha, false);
	ha.setPlayer(chr);
	ha.setAccID(chr.getAccountID());
        ha.isCS = true;

	final int state = ha.getLoginState();
	boolean allowLogin = true;
	if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
            if (!ChannelServer.isCharacterListConnected(ha.loadCharacterNames(), false)) {
		    allowLogin = true;
            }
	}
	if (!allowLogin) {
	    ha.setPlayer(null);
	    ha.getSession().close();
	    return;
	}
	ha.updateLoginState(MapleClient.LOGIN_LOGGEDIN, ha.getSessionIPAddress());

	cs.getPlayerStorage().registerPlayer(chr);

	ha.getSession().write(CashPacket.warpCS(ha));
	ha.getSession().write(CashPacket.enableUse());
        ha.getSession().write(CashPacket.enableUse3(ha.getPlayer()));
	ha.getSession().write(CashPacket.showCashInventory(ha));
        ha.getSession().write(CashPacket.sendWishList(chr, false));
        ha.getSession().write(CashPacket.getCSCody());
	ha.getSession().write(CashPacket.showGifts());
        ha.getSession().write(CashPacket.showNXMapleTokens(chr));
    }

     public static final void CSUpdate(ReadingMaple rh, final MapleClient ha, final MapleCharacter chr) {      
	ha.getSession().write(CashPacket.getCSCody());
        ha.getSession().write(CashPacket.showNXMapleTokens(chr));
     }
    public static final void CSUsing(final MapleClient pa) {
        pa.getSession().write(CashPacket.readyToPurchase());
    }
    
    public static void MemberShop(MapleClient ha) {
        ha.getSession().write(CashPacket.showNXMapleTokens(ha.getPlayer()));
    }

    public static final void CouponCode(String code, final MapleClient ha) {
        ha.getSession().write(CashPacket.showNXMapleTokens(ha.getPlayer()));
        
        code = code.toUpperCase();
	int valid = getNXCodeData(code.toUpperCase(), "valid");
	int type = -1;
	int item = -1;
        List<String> list = getUsedAccountNames(code);
        String usersIP = getIPByAccount(ha.getAccountName());
        for (String ipchecker : list) {
            if (usersIP.equals(getIPByAccount(ipchecker))) {
                list.add(ha.getAccountName());
                break;
            }
        }
        StringBuilder ready = new StringBuilder();
        validCheck:
        if (valid > 0) {
            if (list.contains(ha.getAccountName())) {
                ha.getSession().write(MainPacketCreator.serverNotice(1, "�̹� �� ������ ����Ͻ� ����� �ֽ��ϴ�."));
                break validCheck;
            }
            for (String ied : list) ready.append(ied).append(",");
            ready.append(ha.getAccountName());
            type = getNXCodeData(code, "type");
            item = getNXCodeData(code, "item");
            setNXCodeData(code, valid - 1, ready.toString());
	    switch (type) {
		case 1: //�ؽ� ĳ��
		case 2: //������ ����Ʈ
		    ha.getPlayer().modifyCSPoints(type, item, false);
                    ha.getSession().write(MainPacketCreator.serverNotice(1, item + (type == 1 ? " ĳ��" : " ������ ����Ʈ") + "�� ȹ���߽��ϴ�!"));
		    break;
		case 3: //�޼�
		    ha.getPlayer().gainMeso(item, false);
                    ha.getSession().write(MainPacketCreator.serverNotice(1, item + " �޼Ҹ� ȹ���߽��ϴ�!"));
		    break;
		case 4: //������
		    InventoryManipulator.addById(ha, item, (short) 1, null, null, 0, "ĳ�ü����� �������� ���� ������");
		    ha.getSession().write(CashPacket.showCouponRedeemedItem(item));
		    break;
	    }
	    ha.getSession().write(CashPacket.showNXMapleTokens(ha.getPlayer()));
	} else {
	    ha.getSession().write(CashPacket.wrongCouponCode());
	}
	ha.getSession().write(CashPacket.enableUse());
	ha.getSession().write(CashPacket.showCashInventory(ha));
	ha.getSession().write(CashPacket.showGifts());

    }

    public static int getNXCodeData(String code, String get) {
        int getsetgo = -1;
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT `" + get + "` FROM nxcode WHERE code = ?");
            ps.setString(1, code);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                getsetgo = rs.getInt(get);
            }
            rs.close();
            ps.close();
	} catch (SQLException e) {  e.printStackTrace();}
        return getsetgo;
    }

    public static List<String> getUsedAccountNames(String code) {
        List<String> ret = new ArrayList<String>();
        String getsetgo = "";
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT `user` FROM nxcode WHERE code = ?");
            ps.setString(1, code);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                getsetgo = rs.getString("user");
            }
            rs.close();
            ps.close();
	} catch (SQLException e) {  }
        if (getsetgo != null && getsetgo.length() > 0)
            for (String daeporobalsa : getsetgo.split(","))
                ret.add(daeporobalsa);
        return ret;
    }

    public static String getIPByAccount(String accountname) {
        String getsetgo = "/127.0.0.1";
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("SELECT `ip` FROM account WHERE name = ?");
            ps.setString(1, accountname);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                getsetgo = rs.getString("ip");
            }
            rs.close();
            ps.close();
	} catch (SQLException e) {  }
        return getsetgo;
    }

    public static void setNXCodeData(String code, int validSet, String usedSet) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE nxcode SET `user` = ?, `valid` = ? WHERE code = ?");
            ps.setString(1, usedSet);
            ps.setInt(2, validSet);
            ps.setString(3, code);
            ps.execute();
            ps.close();
	} catch (SQLException e) {  }
    }

    public static final void BuyCashItem(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	final int action = rh.readByte();
        if (action == 3) { 
	    int point = rh.readShort() +1;
            rh.skip(1); //1.2.220+
            int sn = rh.readInt();
	    final CashItemInfo item = CashItemFactory.getInstance().getItem(sn);
            if (item == null) {
                c.send(MainPacketCreator.serverNotice(1, "������ �����Ͱ� �������� �ʽ��ϴ�. ������ �� ���� �������Դϴ�."));
            }
            if (GameConstants.isCSSaleLock(item.getId()) || (item.getId() >= 5030000 && item.getId() <= 5030028)) {
                c.getSession().write(MainPacketCreator.serverNotice(1, "����� �������� ���Ű� �Ұ����� �������Դϴ�."));
                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                return;
            }

	    if (item != null && chr.getCSPoints(point) >= item.getPrice()) {
                chr.modifyCSPoints(point, -item.getPrice(), false);

                IItem tem = null;
                if (GameConstants.isEquip(item.getId())) {
                    Equip equip = new Equip(item.getId(), (short) 1, (short) 0);
                    if (item.getPeriod() > 0)
                        equip.setExpiration(System.currentTimeMillis() + ((long) (item.getPeriod()) * ((long) 86400000)));
                        equip.setCash(true);
                        tem = equip.copy();
                } else {
                    Item itemr = new Item(item.getId(), (short) 1, (short) (item.getCount()), (short) 0);
                    itemr.setCash(true);
                    if (GameConstants.isPet(item.getId())) {
                        MaplePet pet = MaplePet.createPet(item.getId(), System.currentTimeMillis() + ((long) (item.getPeriod()) * ((long) 86400000)));
                        itemr.setPet(pet);
                        itemr.setUniqueId(pet.getUniqueId());
                    }
                    if (item.getPeriod() > 0)
                        itemr.setExpiration(System.currentTimeMillis() + ((long) (item.getPeriod()) * ((long) 86400000)));
                        tem = itemr.copy();
                }
                if (chr.getCashInventory() == null || item == null) {
                    c.send(MainPacketCreator.serverNotice(1, "ĳ�þ������� �����ϴ� ���߿� ������ �߻��Ͽ����ϴ�!"));
                    return;
                }
                if (tem != null) {
                    tem.setGMLog(CurrentTime.getAllCurrentTime()+"�� "+c.getPlayer().getName()+"��(��) ĳ�ü����� ������ ������");
                    chr.getCashInventory().addItem(tem);
                    c.getSession().write(CashPacket.showBoughtCSItem(tem, sn, c.getAccID()));
                } else {
                    c.send(MainPacketCreator.serverNotice(1, "ĳ�þ������� �����ϴ� ���߿� ������ �߻��Ͽ����ϴ�!"));
                    return;
                }
	    }
	} else if (action == 5) { // Wishlist
	    chr.clearWishlist();
	    int[] wishlist = new int[12];
	    for (int i = 0; i < 12; i++) {
		wishlist[i] = rh.readInt();
	    }
            chr.setWishList(wishlist);
	    c.getSession().write(CashPacket.sendWishList(chr, true));
	} else if (action == 6) { // Increase inv
	    rh.skip(1);
	    final boolean coupon = rh.readByte() > 0;
	    if (coupon) {
		final MapleInventoryType type = getInventoryType(rh.readInt());
		if (chr.getCSPoints(1) >= 12000 && chr.getInventory(type).getSlotLimit() < 96) {
		    chr.modifyCSPoints(1, -12000, false);
		    chr.getInventory(type).addSlot((byte) 8);
                    chr.inventoryslot_changed = true;
		    chr.dropMessage(1, "�κ��丮 ������ �÷Ƚ��ϴ�. ���� "+chr.getInventory(type).getSlotLimit()+" ������ �Ǿ����ϴ�.\r\n\r\nĳ�ü����� �÷��� ������ �ٷ� ������ �ʾƵ� �����δ� �÷�������, ĳ�ü����� �����ø� ���������� ������ �þ�� �� �� �ֽ��ϴ�.");
		} else {
		    chr.dropMessage(1, "������ �� �̻� �ø� �� �����ϴ�.");
		}
	    } else {
		final MapleInventoryType type = MapleInventoryType.getByType(rh.readByte());

		if (chr.getCSPoints(1) >= 8000 && chr.getInventory(type).getSlotLimit() < 96) {
		    chr.modifyCSPoints(1, -8000, false);
		    chr.getInventory(type).addSlot((byte) 4);
                    chr.inventoryslot_changed = true;
		    chr.dropMessage(1, "�κ��丮 ������ �÷Ƚ��ϴ�. ���� "+chr.getInventory(type).getSlotLimit()+" ������ �Ǿ����ϴ�.\r\n\r\nĳ�ü����� �÷��� ������ �ٷ� ������ �ʾƵ� �����δ� �÷�������, ĳ�ü����� �����ø� ���������� ������ �þ�� �� �� �ֽ��ϴ�.");
		} else {
		    chr.dropMessage(1, "������ �� �̻� �ø� �� �����ϴ�.");
		}
            }
	} else if (action == 7) { // Increase slot space
	    if (chr.getCSPoints(1) >= 8000 && chr.getStorage().getSlots() < 6) {
		chr.modifyCSPoints(1, -8000, false);
		chr.getStorage().increaseSlots((byte) 4);
		chr.dropMessage(1, "â������ �÷Ƚ��ϴ�. ���� â�� ������ "+chr.getStorage().getSlots()+"ĭ �Դϴ�.");
	    } else {
		chr.dropMessage(1, "������ �� �̻� �ø� �� �����ϴ�.");
	    }
        } else if (action == 8) {
            rh.skip(4);
            if (chr.getCSPoints(1) >= 6900 && chr.getClient().getChrSlot() < 30) {
                chr.modifyCSPoints(1, -6900, false);
                chr.getClient().addChrSlot(1, chr.getAccountID());
                chr.dropMessage(1, "ĳ���ͽ����� �÷Ƚ��ϴ�. \r\n���� ĳ���� ������ " + chr.getClient().getChrSlot() + "ĭ �Դϴ�.");
            } else {
                chr.dropMessage(1, "������ �̹� �ִ�ġ�ų� ĳ�ð� ���� �մϴ�.");
                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                return;
            }
        } else if (action == 10) { //...9 = pendant slot expansion
            rh.skip(5);
            c.getSession().write(CashPacket.sendPendont());
	} else if (action == 49) { // ���Ʈ ���� �߰�
             int data = rh.readInt();
             c.getSession().write(CashPacket.showBoughtPendentSlot(data));
             c.getPlayer().getQuestNAdd(MapleQuest.getInstance(GameConstants.PENDANT_SLOT)).setCustomData("" + (System.currentTimeMillis() + ((1) * 24 * 60 * 60 * 1000 )));
	} else if (action == 14) { //ĳ�ü����� ������ ������
            MapleCashInventory csinv = chr.getCashInventory();
            int uniqueid = rh.readInt();
            IItem item = csinv.findByCashId(uniqueid);
            if (item == null) {
                c.getPlayer().message(1, "������ �߻��߽��ϴ�! �ش� ĳ�þ������� �߰����� ���߽��ϴ�. GM���� ������ �ּ���.");
                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                return;
            }
            item.setCash(true);
            short slot = InventoryManipulator.addFromDrop(c, item, false);
            if (slot == -1) {
                c.getPlayer().message(1, "�������� ���� ������ �����մϴ�.");
                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                return;
            }
            csinv.removeItemByCashId(uniqueid);
            c.send(CashPacket.takeOutFromCashInventory(item, slot));
        } else if (action == 15) { //ĳ�ü����� ������ �ֱ�
            IItem item = null;
            MapleInventory inv = null;
            short slot = -1;
            int uniqueid = rh.readInt();
            for (MapleInventory iv : c.getPlayer().getInventorys()) {
                item = iv.findByUniqueId(uniqueid);
                if (item != null) {
                    slot = item.getPosition();
                    inv = iv;
                    break;
                }
            }
            MapleCashInventory csinv = c.getPlayer().getCashInventory();
            if (item != null) {
                csinv.addItem(item);
                c.send(CashPacket.putIntoCashInventory(item, c.getAccID()));
                if (item.getPet() != null) {
                    c.getPlayer().removePet(item.getPet(), false);
                }
                inv.removeSlot(slot);
            } else {
                c.send(MainPacketCreator.serverNotice(1, "�ش� ĳ�þ������� �߰����� ���߽��ϴ�."));
            }
        } else if (action == 31) { //���̹� ������ ������ - 30% ����
            String password = rh.readMapleAsciiString();
            int uniqueid = rh.readInt();
            MapleCashInventory csinv = c.getPlayer().getCashInventory();
            IItem item = csinv.findByCashId(uniqueid);
            CashItemInfo cii = CashItemFactory.getInstance().getItemInfoFromItemId(item.getItemId());
            if (cii == null) {
                c.getPlayer().message(1, "ĳ�þ����� ������ ã�� ���߽��ϴ�.");
                return;
            }
            int payback = (int) (cii.getPrice() * 0.3);
            c.getPlayer().modifyCSPoints(2, payback, false);
            csinv.removeItemByCashId(uniqueid);
            c.send(CashPacket.payBackItem(payback, uniqueid));
        }
        else if (action == 30 || action == 36) {
	    final int idate = rh.readInt();
	    final int toCharge = rh.readInt();
	    final CashItemInfo item = CashItemFactory.getInstance().getItem(rh.readInt());
	    final String recipient = rh.readMapleAsciiString();
	    final String msg = rh.readMapleAsciiString();
	    final int year = idate / 10000;
	    final int month = (idate - year * 10000) / 100;
	    final int day = idate - year * 10000 - month * 100;
	    Calendar cal = Calendar.getInstance();
	    cal.setTimeInMillis(0);
	    cal.set(year, month - 1, day);
        } else if (action == 35) {
	    int point = rh.readByte()+1;
            int id = rh.readInt();
	    final CashItemInfo item = CashItemFactory.getInstance().getItem(id);
            if (id == 170000004) {
                if (chr.getKeyValue("firstcashbuy") != null) {
                    c.getPlayer().message(1, "�����ϽǷ��� ��Ű���� �ߺ� ���Ű� �Ұ����� ��Ű�� �Դϴ�.");
                    c.getSession().write(CashPacket.showNXMapleTokens(chr));
                    return;
                } else {
                    chr.setKeyValue("firstcashbuy", "ok");
                }
            }
            try {
                if (item != null && chr.getCSPoints(point) >= item.getPrice()) {
                        chr.modifyCSPoints(point, -item.getPrice(), false);
                        List<Pair<Integer, CashItemInfo>> packs = CashItemFactory.getInstance().getPackages(item.getId());
                        List<IItem> itemss = new ArrayList<IItem>();
                        for (Pair<Integer, CashItemInfo> p : packs) {
                            IItem tem;
                            if (p.getRight() == null) {
                                c.getPlayer().message(1, "������ ������ ����� �ҷ����� ���߽��ϴ�.");
                                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                                return;
                            }
                            if (GameConstants.isEquip(p.getRight().getId())) {
                                Equip equip = new Equip(p.getRight().getId(), (short) 1, (short) 0);
                                equip.setCash(true);
                                if (p.getRight().getPeriod() != 0)
                                    equip.setExpiration(System.currentTimeMillis() + (item.getPeriod() * 86400 * 1000));
                                tem = equip.copy();
                            } else {
                                Item itemr = new Item(p.getRight().getId(), (short) 1, (short) p.getRight().getCount(), (short) 0);
                                itemr.setCash(true);
                                if (GameConstants.isPet(p.getRight().getId())) {
                                    MaplePet pet = MaplePet.createPet(p.getRight().getId(), System.currentTimeMillis() + ((long) (p.getRight().getPeriod()) * ((long) 86400000)));
                                    itemr.setPet(pet);
                                    itemr.setUniqueId(pet.getUniqueId());
                                }
                                if (p.getRight().getPeriod() > 0)
                                    itemr.setExpiration(System.currentTimeMillis() + ((long) (p.getRight().getPeriod()) * ((long) 86400000)));
                                tem = itemr.copy();
                            }
                            if (chr.getCashInventory() == null) {
                                System.out.println("ĳ�� �κ��丮�� ��");
                            } else if (tem == null) {
                                System.out.println("�������� ��");
                            }
                            if (tem != null) {
                                tem.setGMLog(CurrentTime.getAllCurrentTime()+"�� "+chr.getName()+"�� ĳ�ü����� ������ ������");
                            }
                            chr.getCashInventory().addItem(tem);
                            itemss.add(tem);
                        }
                        c.getSession().write(CashPacket.showBoughtCSPackages(packs, itemss, action));
                } else if (item == null) {
                    c.getPlayer().message(1, "������ ������ ã�� ���߽��ϴ�.");
                } else if (chr.getCSPoints(point) <= item.getPrice()) {
                    c.getPlayer().message(1, "�ʿ��� ĳ�� �Ǵ� ������ ����Ʈ�� �����մϴ�.");
                }
            } catch (Exception e) {
                if (!ServerConstants.realese) e.printStackTrace();
            }

	} else if (action == 37) {
	    final CashItemInfo item = CashItemFactory.getInstance().getItem(rh.readInt());

	    if (item != null && chr.getMeso() >= item.getPrice()) {
		if (ItemInformation.getInstance().isQuestItem(item.getId())) {
		    if (chr.getInventory(GameConstants.getInventoryType(item.getId())).getNextFreeSlot() > -1) {
			chr.gainMeso(-item.getPrice(), false);
			InventoryManipulator.addById(c, item.getId(), (short) item.getCount(), null, null, 0, CurrentTime.getAllCurrentTime()+"�� ĳ�ü����� ����Ʈ ������ ���ŷ� ���� ������.");
			c.getSession().write(CashPacket.showBoughtCSQuestItem(chr.getInventory(MapleInventoryType.ETC).findById(item.getId()).getPosition(), item.getId()));
		    }
		}
	    }
        } else if (action == 47) { // ������Ʈ
            c.getSession().write(CashPacket.showNXMapleTokens(chr));
            return;
        } else if (action == 48) {
            c.getSession().write(CashPacket.readyToPurchase());
	} else if (action == 61) {
            int uniqueid = rh.readInt();
            MapleCashInventory csinv = chr.getCashInventory();
            IItem item = csinv.findByCashId(uniqueid);
            if (item == null) {
                c.getPlayer().message(1, "������ �߻��߽��ϴ�! �ش� ĳ�þ������� �߰����� ���߽��ϴ�. GM���� ������ �ּ���.");
                c.getSession().write(CashPacket.showNXMapleTokens(chr));
                return;
            }
            int reward = 0;
            switch (item.getItemId()) {
                case 5533026: { //10�ֳ� ���ڻ���
                    int[] items = {1003873, 1003874, 1003875, 1003876, 1003877, 1003878};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533008: { //�������� ���� ����
                    int[] items = {1102376, 1102377, 1102378};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533018: { //�ƿ�� ���� ����
                    int[] items = {1102451, 1102452, 1102453};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533017: { //ȯ�󹫱����
                    int[] items = {1702361, 1702362, 1702363, 1702364};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533011: { //��ũ ������ ����
                    int[] items = {1003398, 1003399, 1003400, 1003401, 1003402};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533012: { //�Ķ���̽� ��������
                    int[] items = {1102385, 1102386, 1102389, 1102390};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
                case 5533002: { //�������� ���� ����
                    int[] items = {1702269, 1702270, 1702271, 1702272, 1702273};
                    reward = items[(int) Math.floor(Math.random() * items.length)];
                    break;
                }
            }
            if (reward != 0) {
                
                IItem tem = null;
                if (GameConstants.isEquip(reward)) {
                    Equip equip = new Equip(reward, (short) 1, (short) 0);
                    equip.setCash(true);
                    tem = equip.copy();
                } else {
                    Item itemr = new Item(reward, (short) 1, (short) /*item.getCount()*/1, (short) 0);
                    itemr.setCash(true);
                    if (GameConstants.isPet(reward)) {
                        MaplePet pet = MaplePet.createPet(reward, itemr.getExpiration());
                        itemr.setPet(pet);
                        itemr.setUniqueId(pet.getUniqueId());
                    }
                    tem = itemr.copy();
                }
                if (chr.getCashInventory() == null || item == null) {
                    c.send(MainPacketCreator.serverNotice(1, "ĳ�þ������� �����ϴ� ���߿� ������ �߻��Ͽ����ϴ�!"));
                    return;
                }
                if (tem != null) {
                    tem.setGMLog(CurrentTime.getAllCurrentTime()+"�� "+c.getPlayer().getName()+"��(��) ĳ�ü����� ������ ������");
                    tem.setCash(true);
                    short slot = InventoryManipulator.addFromDrop(c, tem, false);
                    if (slot == -1) {
                        c.getPlayer().message(1, "�������� ���� ������ �����մϴ�.");
                        c.getSession().write(CashPacket.showNXMapleTokens(chr));
                        return;
                    }
                    csinv.removeItemByCashId(uniqueid);
                    c.getSession().write(CashPacket.showRandomReward(uniqueid, tem, slot));
                } else {
                    c.send(MainPacketCreator.serverNotice(1, "ĳ�þ������� �����ϴ� ���߿� ������ �߻��Ͽ����ϴ�!"));
                    return;
                }
            } else {
                c.send(MainPacketCreator.serverNotice(1, "���ǵ��� ���� �����Դϴ�."));
            }
        } else {
           // System.out.println("New Action: " + action + " Remaining: " + rh.toString());
        }
	c.getSession().write(CashPacket.showNXMapleTokens(chr));
    }
    
    public static final void doCSPackets(MapleClient c) {
        c.getSession().write(CashPacket.showCashInventory(c));
        c.getSession().write(CashPacket.showNXMapleTokens(c.getPlayer()));
        c.getSession().write(CashPacket.enableUse());
        c.getPlayer().getCashInventory().checkExpire(c); 
    }

    private static final MapleInventoryType getInventoryType(final int id) {
	switch (id) {
            case 10100177:
	    case 40200012:
		return MapleInventoryType.EQUIP;
            case 10100175:
	    case 40200013:
		return MapleInventoryType.USE;
            case 10100174:
	    case 40200015:
		return MapleInventoryType.ETC;
            case 10100176:
            case 40200099:
                return MapleInventoryType.SETUP;
	    default:
		return MapleInventoryType.UNDEFINED;
	}
    }
}