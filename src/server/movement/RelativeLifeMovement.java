/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.movement;

import packet.transfer.write.WritingPacket;
import java.awt.Point;

public class RelativeLifeMovement extends AbstractLifeMovement {

    public RelativeLifeMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

    @Override
    public void serialize(WritingPacket packet) {
	packet.write(getType());
	packet.writeShort(getPosition().x);
	packet.writeShort(getPosition().y);
	packet.write(getNewstate());
	packet.writeShort(getDuration());
    }
}
