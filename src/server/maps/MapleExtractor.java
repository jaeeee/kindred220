/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.maps;

import client.MapleClient;
import client.MapleCharacter;
import packet.creators.MainPacketCreator;

/**
 *
 * @author �������̸�
 */
public class MapleExtractor extends AbstractHinaMapObject {
    public int owner, timeLeft, itemId, fee;
    public long startTime;
    public String ownerName;

    public MapleExtractor(MapleCharacter owner, int itemId, int fee, int timeLeft) {
        super();
        this.owner = owner.getId();
        this.itemId = itemId;
        this.fee = fee;
        this.ownerName = owner.getName();
        this.startTime = System.currentTimeMillis();
        this.timeLeft = timeLeft;
        setPosition(owner.getPosition());
        
    }

    public int getTimeLeft() { //tbh idk if this is even right, lol
        return timeLeft;
    }

    @Override
    public void sendSpawnData(MapleClient client) {
        client.getSession().write(MainPacketCreator.makeExtractor(owner, ownerName, getPosition(), getTimeLeft(), itemId, fee));
    }

    @Override
    public void sendDestroyData(MapleClient client) {
        client.getSession().write(MainPacketCreator.removeExtractor(this.owner));
    }

    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.EXTRACTOR;
    }
}
