/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.movement;

import packet.transfer.write.WritingPacket;
import java.awt.Point;

public class UnknownMovement extends AbstractLifeMovement {

    private Point pixelsPerSecond;
    private int unk;
    private int fh;

    public UnknownMovement(int type, Point position, int duration, int newstate) {
	super(type, position, duration, newstate);
    }

    public Point getPixelsPerSecond() {
	return pixelsPerSecond;
    }

    public void setPixelsPerSecond(Point wobble) {
	this.pixelsPerSecond = wobble;
    }

    public int getUnk() {
	return unk;
    }

    public void setUnk(int unk) {
	this.unk = unk;
    }

    public int getFH() {
	return fh;
    }

    public void setFH(int fh) {
	this.fh = fh;
    }

    @Override
    public void serialize(WritingPacket packet) {
	packet.write(getType());
	packet.writeShort(unk);
	packet.writeShort(getPosition().x);
	packet.writeShort(getPosition().y);
	packet.writeShort(pixelsPerSecond.x);
	packet.writeShort(pixelsPerSecond.y);
	packet.writeShort(fh);
	packet.write(getNewstate());
	packet.writeShort(getDuration());
    }
}
