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

public abstract class AbstractHinaMapObject implements MapleMapObject {
    private Point position = new Point();
    private int objectId;

    @Override
    public abstract MapleMapObjectType getType();

    @Override
    public Point getPosition() {
	return new Point(position);
    }

    @Override
    public void setPosition(Point position) {
	this.position.x = position.x;
	this.position.y = position.y;
    }

    @Override
    public int getObjectId() {
	return objectId;
    }

    @Override
    public void setObjectId(int id) {
	this.objectId = id;
    }

    public Point getTruePosition() {
        return position;
    }
}
