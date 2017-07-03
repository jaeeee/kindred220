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

public class ChangeEquipSpecialAwesome implements LifeMovementFragment {

    private int type, wui;

    public ChangeEquipSpecialAwesome(int type, int wui) {
	this.type = type;
	this.wui = wui;
    }

    @Override
    public void serialize(WritingPacket packet) {
	packet.write(type);
	packet.write(wui);
    }

    @Override
    public Point getPosition() {
	return new Point(0, 0);
    }
}
