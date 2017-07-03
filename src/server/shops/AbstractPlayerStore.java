package server.shops;

import client.MapleCharacter;
import client.MapleClient;
import client.items.IItem;
import client.items.ItemFactory;
import constants.GameConstants;
import constants.ServerConstants;
import database.MYSQL;
import java.awt.Point;
import java.io.PrintStream;
import java.lang.ref.WeakReference;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import launch.ChannelServer;
import launch.holder.MaplePlayerHolder;
import packet.creators.MiniGamePacket;
import packet.creators.PlayerShopPacket;
import packet.transfer.write.Packet;
import server.maps.AbstractHinaMapObject;
import server.maps.MapleMap;
import server.maps.MapleWorldMapProvider;
import tools.Pair;

public abstract class AbstractPlayerStore extends AbstractHinaMapObject
        implements IMapleCharacterShop {

    private boolean open;
    private String ownerName;
    private String des;
    private MapleCharacter chr = null;
    private int ownerId;
    private int owneraccount;
    private int itemId;
    private int channel;
    private int map;
    private AtomicInteger meso = new AtomicInteger(0);
    protected WeakReference<MapleCharacter>[] chrs;
    protected List<MapleCharacterShopItem> items = new LinkedList();
    private List<String> visitors = new LinkedList();
    protected List<BoughtItem> bought = new LinkedList();
    protected List<Pair<String, Byte>> messages = new LinkedList();

    protected String password = "";

    public AbstractPlayerStore(MapleCharacter owner, int ownerId, int ownerAccId, Point pos, int itemId, String desc, int slots) {
        setPosition(pos);
        this.ownerName = owner.getName();
        this.chr = owner;
        this.ownerId = ownerId;
        this.owneraccount = ownerAccId;
        this.itemId = itemId;
        this.des = desc;
        this.open = false;
        this.map = owner.getMapId();
        this.channel = owner.getClient().getChannel();
        this.chrs = new WeakReference[slots];
        for (int i = 0; i < this.chrs.length; i++) {
            this.chrs[i] = new WeakReference(null);
        }
    }

    public void broadcastToVisitors(Packet packet) {
        broadcastToVisitors(packet, true);
    }

    public void broadcastToVisitors(Packet packet, boolean owner) {
        for (WeakReference chr : this.chrs) {
            if ((chr != null) && (chr.get() != null)) {
                ((MapleCharacter) chr.get()).getClient().getSession().write(packet);
            }
        }
        if (owner) {
            getMCOwner().getClient().getSession().write(packet);
        }
    }

    public void broadcastToVisitors(Packet packet, int exception) {
        for (WeakReference chr : this.chrs) {
            if ((chr != null) && (chr.get() != null) && (getVisitorSlot((MapleCharacter) chr.get()) != exception)) {
                ((MapleCharacter) chr.get()).getClient().getSession().write(packet);
            }
        }
        if ((getShopType() != 6) && (getMCOwner() != null) && (exception != this.ownerId)) {
            getMCOwner().getClient().getSession().write(packet);
        }
    }

    public int getMeso() {
        return this.meso.get();
    }

    public void setMeso(int meso) {
        this.meso.set(meso);
    }

    public void setOpen(boolean open) {
        this.open = open;
    }

    public boolean isOpen() {
        return this.open;
    }

    public boolean saveItems() {
        if (getShopType() != 1) {
            return false;
        }
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("DELETE FROM hiredmerch WHERE accountid = ? OR characterid = ?");
            ps.setInt(1, this.owneraccount);
            ps.setInt(2, this.ownerId);
            ps.executeUpdate();
            ps.close();
            ps = con.prepareStatement("INSERT INTO hiredmerch (characterid, accountid, Mesos, time) VALUES (?, ?, ?, ?)", 1);
            ps.setInt(1, this.ownerId);
            ps.setInt(2, this.owneraccount);
            ps.setLong(3, this.meso.get());
            ps.setLong(4, System.currentTimeMillis());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();
            if (!rs.next()) {
                rs.close();
                ps.close();
                throw new RuntimeException("Error, adding merchant to DB");
            }
            int packageid = rs.getInt(1);
            rs.close();
            ps.close();
            List iters = new ArrayList();

            for (MapleCharacterShopItem pItems : this.items) {
                if ((pItems.item != null) && (pItems.bundles > 0) && ((pItems.item.getQuantity() > 0) || (GameConstants.isRechargable(pItems.item.getItemId())))) {
                    IItem item = pItems.item.copy();
                    item.setQuantity((short) (item.getQuantity() * pItems.bundles));
                    iters.add(new Pair(item, GameConstants.getInventoryType(item.getItemId())));
                }
            }
            ItemFactory.saveItemsFromMerchant(new Pair(Integer.valueOf(packageid), iters));
            return true;
        } catch (SQLException se) {
            se.printStackTrace();
        }
        return false;
    }

    public boolean saveItems(HiredMerchant hired) {
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement del = con.prepareStatement("SELECT PackageId FROM hiredmerch WHERE characterid = ?");
            del.setInt(1, this.ownerId);
            ResultSet rss = del.executeQuery();
            del = con.prepareStatement("DELETE FROM hiredmerch WHERE PackageId = ?");
            PreparedStatement del2 = con.prepareStatement("DELETE FROM hiredmerchantsaves WHERE id = ?");

            PreparedStatement del3 = con.prepareStatement("DELETE FROM hiredmerchantsaveitems WHERE merchid = ?");
            while (rss.next()) {
                del.setInt(1, rss.getInt("PackageId"));
                del.executeUpdate();
                del2.setInt(1, rss.getInt("PackageId"));
                del2.executeUpdate();

                PreparedStatement gc = con.prepareStatement("SELECT uniqueid FROM hiredmerchantsaveitems WHERE merchid = ?");
                gc.setInt(1, rss.getInt("PackageId"));
                ResultSet gcRs = gc.executeQuery();
                PreparedStatement delitem = con.prepareStatement("DELETE FROM inventoryitems WHERE uniqueid = ?");
                while (gcRs.next()) {
                    delitem.setInt(1, gcRs.getInt("uniqueid"));
                    delitem.executeUpdate();
                }
                delitem.close();

                del3.setInt(1, rss.getInt("PackageId"));
                del3.executeUpdate();
            }
            del.close();

            PreparedStatement ps = con.prepareStatement("INSERT INTO hiredmerch (characterid, accountid, Mesos, time) VALUES (?, ?, ?, ?)", 1);
            ps.setInt(1, this.ownerId);
            ps.setInt(2, this.owneraccount);
            ps.setInt(3, this.meso.get());
            ps.setLong(4, System.currentTimeMillis());

            ps.executeUpdate();

            ResultSet rs = ps.getGeneratedKeys();
            rs.next();
            int packageid = rs.getInt(1);
            rs.close();
            ps.close();

            PreparedStatement hiredSave = con.prepareStatement("INSERT INTO hiredmerchantsaves VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            hiredSave.setInt(1, packageid);
            hiredSave.setString(2, getDescription());
            hiredSave.setInt(3, getItemId());
            hiredSave.setString(4, getOwnerName());
            hiredSave.setInt(5, getOwnerId());
            hiredSave.setInt(6, getOwnerAccId());
            hiredSave.setInt(7, getPosition().x);
            hiredSave.setInt(8, getPosition().y);
            hiredSave.setInt(9, hired.getMap().getId());
            hiredSave.setInt(10, hired.getChannel());
            hiredSave.setLong(11, hired.getStartTime());
            hiredSave.setInt(12, getMeso());
            hiredSave.executeUpdate();
            hiredSave.close();

            List itemlist = new ArrayList();
            int i = 0;
            for (MapleCharacterShopItem pItems : this.items) {
                if (pItems.bundles <= 0) {
                    continue;
                }
                IItem t = pItems.item.copy();
                t.setQuantity(pItems.item.getQuantity());
                try {
                    PreparedStatement save1 = con.prepareStatement("INSERT INTO hiredmerchantsaveitems VALUES (?, ?, ?, ?, ?)");
                    save1.setInt(1, i);
                    save1.setInt(2, packageid);
                    save1.setInt(3, t.getUniqueId());
                    save1.setShort(4, pItems.bundles);
                    save1.setInt(5, pItems.price);
                    save1.executeUpdate();
                    save1.close();
                } catch (Exception e) {
                    System.err.println("[오류] 고용상점 아이템을 재소환 dB에 저장하는 도중 오류 발생.");
                    if (!ServerConstants.realese) {
                        e.printStackTrace();
                    }
                }
                itemlist.add(t);
                i++;
            }
            ItemFactory.saveItemsFromMerchant(new Pair(Integer.valueOf(packageid), itemlist));
            return true;
        } catch (SQLException se) {
            if (!ServerConstants.realese) {
                se.printStackTrace();
            }
        }
        return false;
    }

    public MapleCharacter getVisitor(int num) {
        return (MapleCharacter) this.chrs[num].get();
    }

    public void addVisitor(MapleCharacter visitor) {
        int i = getFreeSlot();
        if (i > 0) {
            if ((getShopType() == 3) || (getShopType() == 4)) {
                broadcastToVisitors(MiniGamePacket.getMiniGameNewVisitor(visitor, i, (MapleMiniGame) this));
            } else if ((getShopType() == 6) || (getShopType() == 5)) {
                broadcastToVisitors(PlayerShopPacket.shopVisitorAdd(visitor, i));
            }
            this.chrs[(i - 1)] = new WeakReference(visitor);
            if (!isOwner(visitor)) {
                this.visitors.add(visitor.getName());
            }
            if (i == 3) {
                update();
            }
        }
    }

    public void update() {
        if (getShopType() == 6) {
            ((HiredMerchant) this).getMap().broadcastMessage(PlayerShopPacket.updateHiredMerchant((HiredMerchant) this));
        } else if (getMCOwner() != null) {
            getMCOwner().getMap().broadcastMessage(PlayerShopPacket.sendPlayerShopBox(getMCOwner()));
        }
    }

    public void removeVisitor(MapleCharacter visitor) {
        byte slot = getVisitorSlot(visitor);
        boolean shouldUpdate = getFreeSlot() == -1;
        if (slot > 0) {
            broadcastToVisitors(PlayerShopPacket.shopVisitorLeave(slot), slot);
            this.chrs[(slot - 1)] = new WeakReference(null);
            if (shouldUpdate) {
                update();
            }
        }
    }

    public byte getVisitorSlot(MapleCharacter visitor) {
        for (byte i = 0; i < this.chrs.length; i = (byte) (i + 1)) {
            if ((this.chrs[i] != null) && (this.chrs[i].get() != null) && (((MapleCharacter) this.chrs[i].get()).getId() == visitor.getId())) {
                return (byte) (i + 1);
            }
        }
        if (visitor.getId() == this.ownerId) {
            return 0;
        }
        return -1;
    }

    public MapleCharacter getMCOwnerChannel() {
        return ChannelServer.getInstance(this.channel).getPlayerStorage().getCharacterById(this.ownerId);
    }

    public MapleCharacter getMCOwner() {
        return getMap().getCharacterById(this.chr, this.ownerId);
    }

    public MapleMap getMap() {
        return ChannelServer.getInstance(this.channel).getMapFactory().getMap(this.map);
    }

    public void removeAllVisitors(int error, int type) {
        for (int i = 0; i < this.chrs.length; i++) {
            MapleCharacter visitor = getVisitor(i);
            if (visitor != null) {
                if (type != -1) {
                    visitor.getClient().getSession().write(PlayerShopPacket.shopErrorMessage(28, 1, 5));
                }
                broadcastToVisitors(PlayerShopPacket.shopVisitorLeave(getVisitorSlot(visitor)), getVisitorSlot(visitor));
                visitor.setPlayerShop(null);
                this.chrs[i] = new WeakReference(null);
            }
        }
        update();
    }

    public String getOwnerName() {
        return this.ownerName;
    }

    public int getOwnerId() {
        return this.ownerId;
    }

    public int getOwnerAccId() {
        return this.owneraccount;
    }

    public String getDescription() {
        if (this.des == null) {
            return "";
        }
        return this.des;
    }

    public List<Pair<Byte, MapleCharacter>> getVisitors() {
        List chrz = new LinkedList();
        for (byte i = 0; i < this.chrs.length; i = (byte) (i + 1)) {
            if ((this.chrs[i] != null) && (this.chrs[i].get() != null)) {
                chrz.add(new Pair(Byte.valueOf((byte) (i + 1)), this.chrs[i].get()));
            }
        }
        return chrz;
    }

    public List<MapleCharacterShopItem> getItems() {
        return this.items;
    }

    public void addItem(MapleCharacterShopItem item) {
        this.items.add(item);
    }

    public boolean removeItem(int item) {
        return false;
    }

    public void removeFromSlot(int slot) {
        this.items.remove(slot);
    }

    public byte getFreeSlot() {
        for (byte i = 0; i < this.chrs.length; i = (byte) (i + 1)) {
            if ((this.chrs[i] == null) || (this.chrs[i].get() == null)) {
                return (byte) (i + 1);
            }
        }
        return -1;
    }

    public int getGameType() {
        if (getShopType() == 6) {
            return 5;
        }
        if (getShopType() == 3) {
            return 1;
        }
        if (getShopType() == 4) {
            return 2;
        }
        return 0;
    }

    public int getItemId() {
        return this.itemId;
    }

    public boolean isOwner(MapleCharacter chr) {
        return (chr.getId() == this.ownerId) && (chr.getName().equals(this.ownerName));
    }

    public List<BoughtItem> getBoughtItems() {
        return this.bought;
    }

    public int getMaxSize() {
        return this.chrs.length + 1;
    }

    public int getSize() {
        return getFreeSlot() == -1 ? getMaxSize() : getFreeSlot();
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }

    public List<Pair<String, Byte>> getMessages() {
        return this.messages;
    }

    public static final class BoughtItem {

        public int id;
        public int quantity;
        public int totalPrice;
        public String buyer;

        public BoughtItem(int id, int quantity, int totalPrice, String buyer) {
            this.id = id;
            this.quantity = quantity;
            this.totalPrice = totalPrice;
            this.buyer = buyer;
        }
    }
}
