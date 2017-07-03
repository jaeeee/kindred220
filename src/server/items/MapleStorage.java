/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.items;

import constants.ServerConstants;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import constants.GameConstants;
import client.MapleClient;
import client.items.IItem;
import client.items.ItemFactory;
import client.items.MapleInventoryType;
import database.MYSQL;
import database.MYSQLException;
import packet.creators.MainPacketCreator;
import tools.Pair;

public class MapleStorage {

    private int id;
    private List<IItem> items;
    private List<IItem> oldItems;
    private long meso;
    private byte slots;
    private boolean changed = false;
    public boolean iscompose = false;
    private Map<MapleInventoryType, List<IItem>> typeItems = new HashMap<MapleInventoryType, List<IItem>>();
    private int accid;
    private int lastNPC;
    
    
    private MapleStorage(int id, byte slots, long meso, int accid) {
	this.id = id;
	this.slots = slots;
	this.items = new LinkedList<IItem>();
        this.oldItems = new LinkedList<IItem>();
	this.meso = meso;
        this.accid = accid;
    }
    
    public int getAccId() {
        return accid;
    }
    
    public static int create(int id) throws SQLException {
	Connection con = MYSQL.getConnection();
	PreparedStatement ps = con.prepareStatement("INSERT INTO storages (accountid, slots, meso) VALUES (?, ?, ?)", MYSQL.RETURN_GENERATED_KEYS);
	ps.setInt(1, id);
	ps.setInt(2, 4);
	ps.setLong(3, 0);
	ps.executeUpdate();

	int storageid;
	ResultSet rs = ps.getGeneratedKeys();
	if (rs.next()) {
	    storageid = rs.getInt(1);
	    ps.close();
	    rs.close();
	    return storageid;
	}
	ps.close();
	rs.close();
	throw new MYSQLException("Inserting char failed.");
    }

    public static MapleStorage loadStorage(int id) {
	MapleStorage ret = null;
	int storeId;
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT * FROM storages WHERE accountid = ?");
	    ps.setInt(1, id);
	    ResultSet rs = ps.executeQuery();

	    if (rs.next()) {
		storeId = rs.getInt("storageid");
		ret = new MapleStorage(storeId, rs.getByte("slots"), rs.getLong("meso"), id);
		rs.close();
		ps.close();
                ItemFactory.loadItemsFromStorage(ret);
	    } else {
		storeId = create(id);
		ret = new MapleStorage(storeId, (byte) 4, 0, id);
	    }
	} catch (SQLException ex) {
	    System.err.println("Error loading storage" + ex);
	}
	return ret;
    }

    public void saveToDB() {
        if(!changed) {
            return;
        } try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE storages SET slots = ?, meso = ? WHERE storageid = ?");
	    ps.setInt(1, slots);
	    ps.setLong(2, meso);
            ps.setInt(3, id);
	    ps.executeUpdate();
	    ps.close();
           
            ps = con.prepareStatement("DELETE FROM inventoryitems WHERE accountid = ? AND type = ?");
	    ps.setInt(1, accid);
            ps.setInt(2, ItemFactory.getType(ItemFactory.InventoryType.STORAGE));
	    ps.executeUpdate();
	    ps.close();

            ItemFactory.saveItemsFromStorage(this);
	} catch (Exception ex) {
	    System.err.println("Error saving storage" + ex);
	}
    }

    public IItem takeOut(byte slot) {
	changed = true;
	IItem ret = items.remove(slot);
	MapleInventoryType type = GameConstants.getInventoryType(ret.getItemId());
	typeItems.put(type, new ArrayList<IItem>(filterItems(type)));
	return ret;
    }

    public void store(IItem item) {
	changed = true;
	items.add(item);
	MapleInventoryType type = GameConstants.getInventoryType(item.getItemId());
	typeItems.put(type, new ArrayList<IItem>(filterItems(type)));
    }

    public List<IItem> getItems() {
	return items;
    }

    private List<IItem> filterItems(MapleInventoryType type) {
	List<IItem> ret = new LinkedList<IItem>();

	for (IItem item : items) {
	    if (GameConstants.getInventoryType(item.getItemId()) == type) {
		ret.add(item);
	    }
	}
	return ret;
    }
    
    public void arrange() { //i believe gms does by itemID
        Collections.sort(items, new Comparator<IItem>() {

            @Override
            public int compare(IItem o1, IItem o2) {
                if (o1.getItemId() < o2.getItemId()) {
                    return -1;
                } else if (o1.getItemId() == o2.getItemId()) {
                    return 0;
                } else {
                    return 1;
                }
            }
        });
        for (MapleInventoryType type : MapleInventoryType.values()) {
            typeItems.put(type, items);
        }
    }

    public byte getSlot(MapleInventoryType type, byte slot) {
	byte ret = 0;
	for (IItem item : items) {
	    if (item == typeItems.get(type).get(slot)) {
		return ret;
	    }
	    ret++;
	}
	return -1;
    }
    
    public void send2ndPWChecking(MapleClient c, int npcId, boolean compose) {
        lastNPC = npcId;
        iscompose = compose;
        c.getSession().write(MainPacketCreator.get2ndPWChecking(true));
    }

    public void sendStorage(MapleClient c) {
        if (!iscompose) { // Celphis
            Collections.sort(items, new Comparator<IItem>() {
                @Override
                public int compare(IItem o1, IItem o2) {
                    if (GameConstants.getInventoryType(o1.getItemId()).getType() < GameConstants.getInventoryType(o2.getItemId()).getType()) {
                        return -1;
                    } else if (GameConstants.getInventoryType(o1.getItemId()) == GameConstants.getInventoryType(o2.getItemId())) {
                        return 0;
                    } else {
                        return 1;
                    }
                }
            });
            for (MapleInventoryType type : MapleInventoryType.values()) {
                typeItems.put(type, new ArrayList<IItem>(items));
            }
            c.getSession().write(MainPacketCreator.getStorage(lastNPC, slots, items, meso));
        } else {
            oldItems.addAll(items);
            items = new LinkedList<IItem>();
            c.getSession().write(MainPacketCreator.getStorage(lastNPC, (byte) 3, items, 0));
        }
    }
    
    public void update(MapleClient c) {
        c.getSession().write(MainPacketCreator.arrangeStorage(slots, items, true));
    }

    public void sendStored(MapleClient c, MapleInventoryType type) {
	c.getSession().write(MainPacketCreator.storeStorage(slots, type, typeItems.get(type)));
    }

    public void sendTakenOut(MapleClient c, MapleInventoryType type) {
	c.getSession().write(MainPacketCreator.takeOutStorage(slots, type, typeItems.get(type)));
    } 
    
    public long getMeso() {
	return meso;
    }

    public void setMeso(long meso) {
	if (meso < 0) {
	    return;
	}
        changed = true;
	this.meso = meso;
    }

    public void sendMeso(MapleClient c) {
	c.getSession().write(MainPacketCreator.mesoStorage(slots, meso));
    }

    public boolean isFull() {
	return items.size() >= slots;
    }

    public int getSlots() {
	return slots;
    }

    public void increaseSlots(byte gain) {
        changed = true;
	this.slots += gain;
    }

    public void setSlots(byte set) {
        changed = true;
	this.slots = set;
    }

    public void close() {
        if (iscompose) {
            items.clear();
            items.addAll(oldItems);
            oldItems.clear();
        }
	typeItems.clear();
    }
}
