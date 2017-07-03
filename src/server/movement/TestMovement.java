/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package server.movement;

import java.awt.Point;
import packet.transfer.write.WritingPacket;

/**
 *
 * @author PC
 */
public class TestMovement extends AbstractLifeMovement {

    private long unk1;
    private byte unk;
    private Point wobble;
    
    public TestMovement(int type, Point position, int duration, int newstate) {
        super(type, position, duration, newstate);
    }

    public void setUnk1(long unk) {
        this.unk1 = unk;
    }
    
    public void setUnk(byte unk) {
        this.unk = unk;
    }
    
    public void setWobblePos(Point pos) {
        this.wobble = pos;
    }

    @Override
    public void serialize(WritingPacket packet) {
        packet.write(getType());
        packet.writeLong(unk1);
        packet.write(unk);
        packet.writePos(getPosition());
        packet.writePos(wobble);
    }
}
