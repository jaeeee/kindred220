/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.movement;

import packet.transfer.write.WritingPacket;
import java.awt.Point;

public class FlashMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond;

    public FlashMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

	public Point getPixelsPerSecond() {
		return pixelsPerSecond;
	}

	public void setPixelsPerSecond(Point ye) {
		this.pixelsPerSecond = ye;
	}

    @Override
    public void serialize(WritingPacket packet) {
        packet.write(getType());
	packet.writePos(getPosition());
	packet.writePos(pixelsPerSecond);
        packet.write(getNewstate());
        packet.writeShort(getDuration());
    }
}
