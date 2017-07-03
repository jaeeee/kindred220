/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.life;

import client.MapleClient;
import packet.creators.MainPacketCreator;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;
import server.shops.MapleShopFactory;

public class MapleNPC extends AbstractLoadedMapleLife {

    protected final MapleNPCStats stats;
    private boolean custom = false;
    private boolean temp = false;

    public MapleNPC(final int id, final MapleNPCStats stats) {
	super(id);
	this.stats = stats;
    }

    public final boolean hasShop() {
	return MapleShopFactory.getInstance().getShopForNPC(getId()) != null;
    }

    public final void sendShop(final MapleClient c) {
	MapleShopFactory.getInstance().getShopForNPC(getId()).sendShop(c);
    }

    @Override
    public void sendSpawnData(final MapleClient client) {
        if (!temp) {
            client.getSession().write(MainPacketCreator.spawnNPC(this, true));
            client.getSession().write(MainPacketCreator.spawnNPCRequestController(this, true));
        }
    }

    @Override
    public final void sendDestroyData(final MapleClient client) {
	client.getSession().write(MainPacketCreator.removeNPC(getObjectId()));
    }

    @Override
    public MapleMapObjectType getType() {
	return MapleMapObjectType.NPC;
    }
    
    public void broadcastPacket(MapleMap map) {
        if (!temp) {
            map.broadcastMessage(MainPacketCreator.spawnNPC(this, true));
            map.broadcastMessage(MainPacketCreator.spawnNPCRequestController(this, true));
        }
	
    }

    public final String getName() {
	return stats.getName();
    }
    
    public final void setName(String name) {
	stats.setName(name);
    }

    public final boolean isCustom() {
	return custom;
    }

    public final void setCustom(final boolean custom) {
	this.custom = custom;
    }
    
    public final boolean isTemp() {
	return temp;
    }

    public final void setTemp(final boolean temp) {
	this.temp = temp;
    }
    
    public final MapleNPCStats getNPCStats() {
        return stats;
    }
}
