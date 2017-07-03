/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.shops;

import client.MapleClient;
import client.MapleCharacter;
import client.items.IItem;
import client.items.ItemFlag;
import constants.GameConstants;
import launch.ChannelServer;
import packet.creators.PlayerShopPacket;
import server.items.InventoryManipulator;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;
import tools.Timer.WorldTimer;
import java.awt.Point;
import java.util.LinkedList;
import java.util.List;

public class HiredMerchant extends AbstractPlayerStore {

    private MapleMap map;
    private int channel, storeid;
    private long start;
    private List <String> blacklist = new LinkedList<String>();
    private List <String> visitors = new LinkedList<String>();

    public HiredMerchant(MapleCharacter owner, int ownerId, int ownerAccId, Point pos, int map, int channel, int itemId, String desc) {
	super(owner, ownerId, ownerAccId, pos, itemId, desc, 6);
	start = System.currentTimeMillis();
	this.map = ChannelServer.getInstance(channel).getMapFactory().getMap(map);
	this.channel = channel;
	WorldTimer.getInstance().schedule(new Runnable() {
	    @Override
	    public void run() {
		closeShop(true, true);
	    }
	}, (long) ((start + 1000 * 60 * 60 * 24) - System.currentTimeMillis()));
    }
    
    public HiredMerchant(MapleCharacter owner, int ownerId, int ownerAccId, Point pos, int map, int channel, int itemId, String desc, long startTime) {
	super(owner, ownerId, ownerAccId, pos, itemId, desc, 6);
	start = startTime;
	this.map = ChannelServer.getInstance(channel).getMapFactory().getMap(map);
	this.channel = channel;
	WorldTimer.getInstance().schedule(new Runnable() {
	    @Override
	    public void run() {
		closeShop(true, true);
	    }
	}, (long) ((start + 1000 * 60 * 60 * 24) - System.currentTimeMillis()));
    }
    
    @Override
    public byte getShopType() {
	return IMapleCharacterShop.HIRED_MERCHANT;
    }

    public final void setStoreid(final int storeid) {
	this.storeid = storeid;
    }
    
    
    public List<MapleCharacterShopItem> searchItem(final int itemSearch) {
        final List<MapleCharacterShopItem> itemz = new LinkedList<MapleCharacterShopItem>();
        for (MapleCharacterShopItem item : items) {
            if (item.item.getItemId() == itemSearch && item.bundles > 0) {
                itemz.add(item);
            }
        }
        return itemz;
    }

    @Override
    public void buy(MapleClient c, int item, short quantity) {
	final MapleCharacterShopItem pItem = items.get(item);
	final IItem shopItem = pItem.item;
	final IItem newItem = shopItem.copy();
	final short perbundle = newItem.getQuantity();
	newItem.setQuantity((short) (quantity * perbundle));
	short flag = newItem.getFlag();
	if (ItemFlag.KARMA_EQ.check(flag)) {
	    newItem.setFlag((short) (flag - ItemFlag.KARMA_EQ.getValue()));
	} else if (ItemFlag.KARMA_USE.check(flag) && !GameConstants.isEquip(newItem.getItemId())) {
	    newItem.setFlag((short) (flag - ItemFlag.KARMA_USE.getValue()));
	} else if (ItemFlag.TRADE_ON_ACCOUNT.check(flag)) {
            newItem.setFlag((short) (flag - ItemFlag.TRADE_ON_ACCOUNT.getValue()));
        }
	if (InventoryManipulator.addFromDrop(c, newItem, false) != -1) {
	    pItem.bundles -= quantity; // Number remaining in the store
            bought.add(new BoughtItem(newItem.getItemId(), quantity, (pItem.price * quantity), c.getPlayer().getName()));
	    final int gainmeso = getMeso() + (pItem.price * quantity);
	    setMeso(gainmeso - GameConstants.EntrustedStoreTax(gainmeso));
	    c.getPlayer().gainMeso(-pItem.price * quantity, false);
            c.getPlayer().saveToDB(false,false);
            saveItems(this);
	} else {
	    c.getPlayer().dropMessage(1, "�κ��丮�� �� á���ϴ�.");
	}
    }

    @Override
    public void closeShop(boolean saveItems, boolean remove) {
	if (saveItems) {
	    saveItems(this);
	}
	if (remove) {
	    ChannelServer.getInstance(channel).removeMerchant(this);
	    map.broadcastMessage(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
	}
	map.removeMapObject(this);
	map = null;
    }

    public int getTimeLeft() {
	return (int) ((System.currentTimeMillis() - start) / 1000);
    }
    
    public long getStartTime() {
        return start;
    }

    public MapleMap getMap() {
	return map;
    }

    public final int getStoreId() {
	return storeid;
    }

    @Override
    public MapleMapObjectType getType() {
	return MapleMapObjectType.HIRED_MERCHANT;
    }

    @Override
    public void sendDestroyData(MapleClient client) {
	client.getSession().write(PlayerShopPacket.destroyHiredMerchant(getOwnerId()));
    }

    @Override
    public void sendSpawnData(MapleClient client) {
	client.getSession().write(PlayerShopPacket.spawnHiredMerchant(this));
    }
    
    public final boolean isInBlackList(final String bl) {
        return blacklist.contains(bl);
    }

    public final void addBlackList(final String bl) {
        blacklist.add(bl);
    }

    public final void removeBlackList(final String bl) {
        blacklist.remove(bl);
    }

    public final void sendBlackList(final MapleClient c) {
        c.send(PlayerShopPacket.merchantBlackListView(blacklist));
    }

    public final void sendVisitor(final MapleClient c) {
        c.send(PlayerShopPacket.merchantVisitorView(visitors));
    }
    
    public final int getChannel() {
        return ChannelServer.getInstance(channel).getChannel();
    }

    @Override
    public String send() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
