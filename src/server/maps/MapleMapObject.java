/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.maps;

import java.awt.Point;

import client.MapleClient;

public interface MapleMapObject {

    public int getObjectId();

    public void setObjectId(final int id);

    public MapleMapObjectType getType();

    public Point getPosition();

    public void setPosition(final Point position);

    public void sendSpawnData(final MapleClient client);

    public void sendDestroyData(final MapleClient client);
}
