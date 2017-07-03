/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.shops;

import client.MapleClient;
import client.MapleCharacter;
import client.items.Item;
import packet.creators.PlayerShopPacket;
import server.maps.MapleMapObjectType;
import java.util.ArrayList;
import java.util.List;
import server.items.InventoryManipulator;

public class MapleCharacterShop extends AbstractPlayerStore {

    private boolean open;
    private MapleCharacter owner;
    private List<String> bannedList = new ArrayList<String>();

    public MapleCharacterShop(MapleCharacter owner, int itemId, String desc) {
	super(owner, owner.getId(), owner.getAccountID(), owner.getPosition(), itemId, desc, 3);
	this.owner = owner;
	open = false;
    }

    @Override
    public void buy(MapleClient c, int item, short quantity) {
	MapleCharacterShopItem pItem = items.get(item);
	if (pItem.bundles > 0) {
	    owner.getClient().getSession().write(PlayerShopPacket.shopItemUpdate(this));
	}
    }

    @Override
    public byte getShopType() {
	return IMapleCharacterShop.PLAYER_SHOP;
    }

    @Override
    public void closeShop(boolean saveItems, boolean remove) {
        MapleCharacter owner = getMCOwner();
        getMCOwner().getClient().getSession().write(PlayerShopPacket.shopErrorMessage(10, 3, 0)); //ªÛ¡°¿Ã ¥›«˚Ω¿¥œ¥Ÿ.
        removeAllVisitors(3, -2);
        
        getMap().removeMapObject(this);
        for (MapleCharacterShopItem items : getItems()) {
            saveItems(); 
            break;
        }
        owner.setPlayerShop(null);
        update();
    }

    public void banPlayer(String name) {
	if (!bannedList.contains(name)) {
	    bannedList.add(name);
	}
	for (int i = 0; i < 3; i++) {
	    MapleCharacter chr = getVisitor(i);
	    if (chr.getName().equals(name)) {
		chr.getClient().getSession().write(PlayerShopPacket.shopErrorMessage(5, 1, 0x11));
		chr.setPlayerShop(null);
		removeVisitor(chr);
	    }
	}
    }

    @Override
    public void setOpen(boolean open) {
	this.open = open;
    }

    @Override
    public boolean isOpen() {
	return open;
    }

    public boolean isBanned(String name) {
	if (bannedList.contains(name)) {
	    return true;
	}
	return false;
    }

    public MapleCharacter getMCOwner() {
	return owner;
    }

    @Override
    public MapleMapObjectType getType() {
	return MapleMapObjectType.SHOP;
    }

    @Override
    public void sendSpawnData(MapleClient client) {
    }

    @Override
    public void sendDestroyData(MapleClient client) {
    }

    @Override
    public String send() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
}
