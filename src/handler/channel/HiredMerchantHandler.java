/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import constants.ServerConstants;
import constants.GameConstants;
import client.MapleClient;
import client.MapleCharacter;
import client.items.IItem;
import client.items.ItemFactory;
import client.items.MapleInventoryType;
import database.MYSQL;
import launch.ChannelServer;
import launch.world.WorldConnected;
import packet.creators.PlayerShopPacket;
import packet.transfer.read.ReadingMaple;
import server.items.InventoryManipulator;
import server.items.MerchItemPackage;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import packet.creators.MainPacketCreator;

public class HiredMerchantHandler {

    public static final void UseHiredMerchant(final ReadingMaple rh, final MapleClient c) {
	if (c.getPlayer().getMap().allowPersonalShop()) {
	    final byte state = checkExistance(c.getAccID());

	    switch (state) {
		case 1:
		    c.getPlayer().dropMessage(1, "프레드릭에게 먼저 물건을 찾아가세요.");
		    break;
		case 0:
		    boolean merch = true;
                    merch = WorldConnected.hasMerchant(c.getAccID());
		    if (!merch) {
			c.getSession().write(PlayerShopPacket.sendTitleBox());
		    } else {
			c.getPlayer().dropMessage(1, "이미 고용상점이 열려 있습니다.");
		    }
		    break;
		default:
		    c.getPlayer().dropMessage(1, "An unknown error occured.");
		    break;
	    }
	} else {
	    c.getSession().close();
	}
    }
    public static void displayMerch(MapleClient c) {
        int conv = c.getPlayer().getConversation();
        boolean merch = WorldConnected.hasMerchant(c.getPlayer().getAccountID());
        MerchItemPackage pack;
        if (merch) {
            c.getPlayer().dropMessage(1, "고용상인을 닫고 다시 시도해 주십시오");
            c.getPlayer().setConversation(0);
        } else if (c.getChannelServer().isShutdown()) {
            c.getPlayer().dropMessage(1, "셧다운이 진행중이므로 이용하실수 없습니다.");
            c.getPlayer().setConversation(0);
        } else if (conv == 3) {
            pack = loadItemFrom_Database(c.getPlayer().getId());
            if (pack == null) {
                c.getPlayer().dropMessage(1, "보관중인 아이템이 없습니다.");
                c.getPlayer().setConversation(0);
            } else {
                c.getSession().write(PlayerShopPacket.merchItemStore_ItemData(pack));
            }
        }
        c.getSession().write(MainPacketCreator.resetActions());
    }
    private static final byte checkExistance(final int accid) {
	Connection con = MYSQL.getConnection();
	try {
	    PreparedStatement ps = con.prepareStatement("SELECT * from hiredmerch where accountid = ?");
	    ps.setInt(1, accid);

	    if (ps.executeQuery().next()) {
		ps.close();
		return 1;
	    }
	    ps.close();
	    return 0;
	} catch (SQLException se) {
	    return -1;
	}
    }

    public static final void MerchantItemStore(final ReadingMaple rh, final MapleClient c) {
	final byte operation = rh.readByte();

	switch (operation) {
	    case 23: {
		final String SPW = rh.readMapleAsciiString();
                if (!c.getSecondPassword().equals(SPW)) {
                    c.send(PlayerShopPacket.merchItem_checkSPW(false));
                    c.getPlayer().ea();
                    return;
                }
		final int conv = c.getPlayer().getConversation();
		if (conv == 3) { // Hired Merch
		    final MerchItemPackage pack = loadItemFrom_Database(c.getPlayer().getId());
                    boolean opened = false;
                    for (ChannelServer cserv : ChannelServer.getAllInstances()) {
                        if (cserv.constainsMerchant(c.getAccID())) {
                            opened = true;
                            break;
                        }
                    }
		c.getSession().write(PlayerShopPacket.merchItemStore_ItemData(pack));
		}
		break;
	    }
	  case 29: {
		c.getSession().write(PlayerShopPacket.merchItemStore((byte) 0x29));
		break;
	    }
	  case 30: {
		if (c.getPlayer().getConversation() != 3) {
		    return;
		}
		final MerchItemPackage pack = loadItemFrom_Database(c.getPlayer().getId());
		if (deletePackage(c.getPlayer().getId(), pack.getPackageid())) {
                    c.getPlayer().gainMeso(pack.getMesos(), false);
                    for (IItem item : pack.getItems()) {
                        InventoryManipulator.addFromDrop(c, item, false);
                    }
                    c.getPlayer().dropMessage(1, "아이템을 모두 찾았습니다.");
                    c.getSession().write(PlayerShopPacket.merchItem_Message((byte) 0x22));
                    c.getSession().write(MainPacketCreator.resetActions());
                } else {
                    c.getSession().write(MainPacketCreator.resetActions());
                }
            break;
            }
	    case 31: { // Exit
		c.getPlayer().setConversation(0);
		break;
	    }
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
	}
    }

    private static final boolean check(final MapleCharacter chr, final MerchItemPackage pack) {
	if (chr.getMeso() + pack.getMesos() < 0) {
	    return false;
	}
	byte eq = 0, use = 0, setup = 0, etc = 0, cash = 0;
	for (IItem item : pack.getItems()) {
	    final MapleInventoryType invtype = GameConstants.getInventoryType(item.getItemId());
	    if (invtype == MapleInventoryType.EQUIP) {
		eq++;
	    } else if (invtype == MapleInventoryType.USE) {
		use++;
	    } else if (invtype == MapleInventoryType.SETUP) {
		setup++;
	    } else if (invtype == MapleInventoryType.ETC) {
		etc++;
	    } else if (invtype == MapleInventoryType.CASH) {
		cash++;
	    }
	}
	if (chr.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() <= eq
		|| chr.getInventory(MapleInventoryType.USE).getNumFreeSlot() <= use
		|| chr.getInventory(MapleInventoryType.SETUP).getNumFreeSlot() <= setup
		|| chr.getInventory(MapleInventoryType.ETC).getNumFreeSlot() <= etc
		|| chr.getInventory(MapleInventoryType.CASH).getNumFreeSlot() <= cash) {
	    return false;
	}
	return true;
    }

    public static final boolean deletePackage(final int charid, int packageId) {
	final Connection con = MYSQL.getConnection();

	try {
	    PreparedStatement ps = con.prepareStatement("DELETE from hiredmerch where characterid = ?");
	    ps.setInt(1, charid);
	    ps.execute();
	    ps.close();
            ItemFactory.deleteMerchantItem(packageId);
	    return true;
	} catch (SQLException e) {
	    return false;
	}
    }

    public static final MerchItemPackage loadItemFrom_Database(final int charid) {
	final Connection con = MYSQL.getConnection();

	try {
	    PreparedStatement ps = con.prepareStatement("SELECT * from hiredmerch where characterid = ?");
	    ps.setInt(1, charid);

	    ResultSet rs = ps.executeQuery();

	    if (!rs.next()) {
		ps.close();
		rs.close();
		return null;
	    }
	    final int packageid = rs.getInt("PackageId");

	    final MerchItemPackage pack = new MerchItemPackage();
	    pack.setPackageid(packageid);
	    pack.setMesos(rs.getInt("Mesos"));
	    pack.setSentTime(rs.getLong("time"));
	    ps.close();
	    rs.close();
            ItemFactory.loadItemsFromMerchant(pack);
            
	    return pack;
	} catch (SQLException e) {
	    if (!ServerConstants.realese) e.printStackTrace();
	    return null;
	}
    }
}
