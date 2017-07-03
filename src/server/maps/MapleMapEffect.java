/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.maps;

import client.MapleClient;
import packet.creators.MainPacketCreator;
import packet.transfer.write.Packet;

public class MapleMapEffect {

    private String msg;
    private int itemId;
    private boolean active = true;

    public MapleMapEffect(String msg, int itemId) {
	this.msg = msg;
	this.itemId = itemId;
    }

    public void setActive(boolean active) {
	this.active = active;
    }

    public Packet makeDestroyData() {
	return MainPacketCreator.removeMapEffect();
    }

    public Packet makeStartData() {
	return MainPacketCreator.startMapEffect(msg, itemId, active);
    }

    public void sendStartData(MapleClient c) {
	c.getSession().write(MainPacketCreator.startMapEffect(msg, itemId, active));
    }
}
