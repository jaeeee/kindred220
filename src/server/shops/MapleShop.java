/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.shops;

import constants.GameConstants;
import client.MapleClient;
import client.MaplePet;
import client.items.IItem;
import client.items.Item;
import client.items.MapleInventoryType;
import client.skills.SkillFactory;
import database.MYSQL;
import packet.creators.MainPacketCreator;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import tools.CurrentTime;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class MapleShop {
    private static final Set<Integer> rechargeableItems = new LinkedHashSet<Integer>();
    private int id;
    private int npcId;
    private List<MapleShopItem> items;

    static {
	rechargeableItems.add(2070000);
	rechargeableItems.add(2070001);
	rechargeableItems.add(2070002);
	rechargeableItems.add(2070003);
	rechargeableItems.add(2070004);
	rechargeableItems.add(2070005);
	rechargeableItems.add(2070006);
	rechargeableItems.add(2070007);
	rechargeableItems.add(2070008);
	rechargeableItems.add(2070009);
	rechargeableItems.add(2070010);
	rechargeableItems.add(2070011);
	rechargeableItems.add(2070012);
	rechargeableItems.add(2070013);
        rechargeableItems.add(2070023); //플레임 표창
        rechargeableItems.add(2070024);    // 무한의 수리검
        rechargeableItems.add(2070026);
        
	rechargeableItems.add(2330000);
	rechargeableItems.add(2330001);
	rechargeableItems.add(2330002);
	rechargeableItems.add(2330003);
	rechargeableItems.add(2330004);
	rechargeableItems.add(2330005);
	rechargeableItems.add(2330008);
        rechargeableItems.add(2330016);
        
	rechargeableItems.add(2331000); // Capsules
	rechargeableItems.add(2332000); // Capsules
    }

    /** Creates a new instance of MapleShop */
    public MapleShop(int id, int npcId) {
	this.id = id;
	this.npcId = npcId;
	items = new LinkedList<MapleShopItem>();
    }

    public void addItem(MapleShopItem item) {
	items.add(item);
    }

    public void sendShop(MapleClient c) {
        if (items == null) {
            System.out.println("[Reminder] There are no items in this shop.");
            return;
        }
	c.getPlayer().setShop(this);
	c.getSession().write(MainPacketCreator.getNPCShop(c, getNpcId(), items));
    }

    public void buy(MapleClient c, int itemId, short quantity) {
       
        int x = 0, index = -1;
        for (IItem i : c.getPlayer().getRebuyList()) {
            if (i.getItemId() == itemId) {
                index = x;
                break;
            }
            x++;
        }
        if (index >= 0) {
            ItemInformation ii = ItemInformation.getInstance();
            final IItem i = c.getPlayer().getRebuyList().get(index);
            final int price = (int) Math.max(Math.ceil(ii.getPrice(itemId) * (GameConstants.isRechargable(itemId) ? 1 : i.getQuantity())), 0);
            if (price >= 0 && c.getPlayer().getMeso() >= price) {
                if (InventoryManipulator.checkSpace(c, itemId, i.getQuantity(), i.getOwner())) {
                    c.getPlayer().gainMeso(-price, false);
                    InventoryManipulator.addbyItem(c, i);
                    c.getPlayer().getRebuyList().remove(index);
                    c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, index));
                } else {
                    c.getPlayer().dropMessage(1, "Inventory is full.");
                    c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, -1));
                }
            } else {
                c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, -1));
            }
            return;
        }
	MapleShopItem item = findById(itemId);
	if (item != null && item.getPrice() > 0 && item.getPriceQuantity() == 0) {
	    if (c.getPlayer().getMeso() >= item.getPrice() * quantity) {
		if (InventoryManipulator.checkSpace(c, itemId, (short) (quantity * item.getQuantity()), "")) {
		    if (GameConstants.isPet(itemId)) {
			InventoryManipulator.addById(c, itemId, (short) (quantity * item.getQuantity()), null, MaplePet.createPet(itemId, System.currentTimeMillis() + ((long) (item.getPeriod()) * ((long) 86400000))),0,CurrentTime.getAllCurrentTime()+"에 "+c.getPlayer().getName()+"에서 호출된 "+getId()+" 상점에서 구매한 아이템.");
		    } else {
			ItemInformation ii = ItemInformation.getInstance();
			if (GameConstants.isRechargable(itemId)){
			    quantity = ii.getSlotMax(c, item.getItemId());
			    c.getPlayer().gainMeso(-(item.getPrice()), false);
			    InventoryManipulator.addById(c, itemId, (short) (quantity * item.getQuantity()), null, null, item.getPeriod() <= 0 ? 0 : ((item.getPeriod() * 60L * 1000L) + System.currentTimeMillis()), CurrentTime.getAllCurrentTime()+"에 "+getId()+" 상점에서 구매한 아이템.");
			} else {
			    c.getPlayer().gainMeso(-(item.getPrice() * quantity), false);
			    c.getPlayer().gainItem(itemId, quantity, true, item.getPeriod() <= 0 ? 0 : ((item.getPeriod() * 60L * 1000L) + System.currentTimeMillis()), "상점에서 구입한 아이템");
			}
		    }
		} else {
		    c.getPlayer().dropMessage(1, "Not enough space in your inventory.");
		}
		c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, -1));
	    }
	} else if (item != null && item.getPrice() > 0 && item.getPriceQuantity() > 0) {
	    if (c.getPlayer().haveItem(item.getPrice(), item.getPriceQuantity() * quantity, false, true)) {
		if (InventoryManipulator.checkSpace(c, itemId, (short) (quantity * item.getQuantity()), "")) {
		    if (GameConstants.isPet(itemId)) {
			InventoryManipulator.addById(c, itemId, (short) (quantity * item.getQuantity()), null, MaplePet.createPet(itemId, System.currentTimeMillis() + ((long) (item.getPeriod()) * ((long) 86400000))), 0, CurrentTime.getAllCurrentTime()+"에 "+getId()+" 상점에서 구매한 아이템.");
		    } else {
			ItemInformation ii = ItemInformation.getInstance();
			if (GameConstants.isRechargable(itemId)){
			    quantity = ii.getSlotMax(c, item.getItemId());
			    InventoryManipulator.removeById(c, GameConstants.getInventoryType(item.getPrice()), item.getPrice(), item.getPriceQuantity(), false, false);
			    InventoryManipulator.addById(c, itemId, (short) (quantity * item.getQuantity()), null, null, item.getPeriod() <= 0 ? 0 : ((item.getPeriod() * 60L * 1000L) + System.currentTimeMillis()), CurrentTime.getAllCurrentTime()+"에 "+getId()+" 상점에서 구매한 아이템.");
			} else {
                            InventoryManipulator.removeById(c, GameConstants.getInventoryType(item.getPrice()), item.getPrice(), item.getPriceQuantity() * quantity, false, false);
			    InventoryManipulator.addById(c, itemId, (short) (quantity * item.getQuantity()), null, null, item.getPeriod() <= 0 ? 0 : ((item.getPeriod() * 60L * 1000L) + System.currentTimeMillis()), CurrentTime.getAllCurrentTime()+"에 "+getId()+" 상점에서 구매한 아이템.");
			}
		    }
		} else {
		    c.getPlayer().dropMessage(1, "Not enough space in your inventory.");
		}
		c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, -1));
	    }
	}
    }

    public void sell(MapleClient c, MapleInventoryType type, byte slot, short quantity) {
	if (quantity == 0xFFFF || quantity == 0) {
	    quantity = 1;
	}
	IItem item = c.getPlayer().getInventory(type).getItem(slot);

	if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
	    quantity = item.getQuantity();
	}
	short iQuant = item.getQuantity();
	if (iQuant == 0xFFFF) {
	    iQuant = 1;
	}
	final ItemInformation ii = ItemInformation.getInstance();
	if (quantity <= iQuant && iQuant > 0) {
            IItem itemm = item.copy();
                itemm.setQuantity((short) quantity);
            c.getPlayer().getRebuyList().add(itemm);
	    InventoryManipulator.removeFromSlot(c, type, slot, quantity, false);
            //c.getPlayer().getInventory(type).removeItem(slot, quantity, false);
	    double price;
	    if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
		price = ii.getWholePrice(item.getItemId()) / (double) ii.getSlotMax(c, item.getItemId());
	    } else {
		price = ii.getPrice(item.getItemId());
	    }
	    final int recvMesos = (int) Math.max(Math.ceil(price * quantity), 0);
	    if (price != -1 && recvMesos > 0) {
		c.getPlayer().gainMeso(recvMesos, false);
            }
	    c.send(MainPacketCreator.confirmShopTransactionAdditional(getNpcId(), items, this, c));
	}
    }

    public void recharge(final MapleClient c, final byte slot) {
	final IItem item = c.getPlayer().getInventory(MapleInventoryType.USE).getItem(slot);

	if (item == null || (!GameConstants.isThrowingStar(item.getItemId()) && !GameConstants.isBullet(item.getItemId()))) {
	    return;
	}
	final ItemInformation ii = ItemInformation.getInstance();
	short slotMax = ii.getSlotMax(c, item.getItemId());
	final int skill = GameConstants.getMasterySkill(c.getPlayer().getJob());

	if (skill != 0) {
	    slotMax += c.getPlayer().getSkillLevel(SkillFactory.getSkill(skill)) * 10;
	}
	if (item.getQuantity() < slotMax) {
	    final int price = (int) Math.round(ii.getPrice(item.getItemId()) * (slotMax - item.getQuantity()));
	    if (c.getPlayer().getMeso() >= price) {
		item.setQuantity(slotMax);
		c.getSession().write(MainPacketCreator.updateInventorySlot(MapleInventoryType.USE, (Item) item, false));
		c.getPlayer().gainMeso(-price, false, true, false);
		c.getSession().write(MainPacketCreator.confirmShopTransaction((byte) 0, -1));
	    }
	}
    }

    protected MapleShopItem findById(int itemId) {
	for (MapleShopItem item : items) {
	    if (item.getItemId() == itemId)
		return item;
	}
	return null;
    }

    public static MapleShop createFromDB(int id, boolean isShopId) {
	MapleShop ret = null;
	int shopId;

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement(isShopId ? "SELECT * FROM shops WHERE shopid = ?" : "SELECT * FROM shops WHERE npcid = ?");
	    
	    ps.setInt(1, id);
	    ResultSet rs = ps.executeQuery();
	    if (rs.next()) {
		shopId = rs.getInt("shopid");
		ret = new MapleShop(shopId, rs.getInt("npcid"));
		rs.close();
		ps.close();
	    } else {
		rs.close();
		ps.close();
		return null;
	    }
	    ps = con.prepareStatement("SELECT * FROM shopitems WHERE shopid = ? ORDER BY position ASC");
	    ps.setInt(1, shopId);
	    rs = ps.executeQuery();
	    List<Integer> recharges = new ArrayList<Integer>(rechargeableItems);
	    while (rs.next()) {
		if (GameConstants.isThrowingStar(rs.getInt("itemid")) || GameConstants.isBullet(rs.getInt("itemid"))) {
		    MapleShopItem starItem = new MapleShopItem((short) 1, rs.getInt("itemid"), rs.getInt("price"), rs.getInt("pricequantity"), (byte) rs.getInt("Tab"), rs.getInt("quantity"), rs.getInt("period"));
		    ret.addItem(starItem);
		    if (rechargeableItems.contains(starItem.getItemId())) {
			recharges.remove(Integer.valueOf(starItem.getItemId()));
		    }
		} else {
		    ret.addItem(new MapleShopItem((short) 1000, rs.getInt("itemid"), rs.getInt("price"), rs.getInt("pricequantity"), (byte) rs.getInt("Tab"), rs.getInt("quantity"), rs.getInt("period")));
		}
	    }
	    for (Integer recharge : recharges) {
		ret.addItem(new MapleShopItem((short) 1000, recharge.intValue(), 0, 0, (byte) 0, 0, 0));
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Could not load shop" + e);
	}
	return ret;
    }

    public int getNpcId() {
	return npcId;
    }

    public int getId() {
	return id;
    }
}