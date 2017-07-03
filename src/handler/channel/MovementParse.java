/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import constants.ServerConstants;
import packet.transfer.read.ReadingMaple;
import server.maps.AnimatedHinaMapObject;
import server.movement.*;
import java.awt.Point;
import java.util.ArrayList;
import java.util.List;

public class MovementParse {

    public static final List<LifeMovementFragment> parseMovement(final ReadingMaple rh) {
        String Originalrh = rh.toString();
        final List<LifeMovementFragment> res = new ArrayList<LifeMovementFragment>();
        final byte numCommands = rh.readByte();
        for (byte i = 0; i < numCommands; i++) {
            final byte command = rh.readByte();
            switch (command) {
                case 0: //일반이동 - 확실
                case 7: //순간이동
                case 8: //확실 
                case 18: //데슬
                case 65: //테스트.
                {
                    final short xpos = rh.readShort();
                    final short ypos = rh.readShort();
                    final short xwobble = rh.readShort();
                    final short ywobble = rh.readShort();
                    final short unk = rh.readShort();
                    final short xoffset = rh.readShort();
                    final short yoffset = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final AbsoluteLifeMovement alm = new AbsoluteLifeMovement(command, new Point(xpos, ypos), duration, newstate);
                    alm.setUnk(unk);
                    alm.setPixelsPerSecond(new Point(xwobble, ywobble));
                    alm.setOffset(new Point(xoffset, yoffset));
                    res.add(alm);
                    break;
                }
                case 1: //점프 - 확실
                case 2: //점프류
                case 22: //확실
                case 71: //테스트.
                case 66: //테스트.
                {
                    final short xmod = rh.readShort();
                    final short ymod = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final RelativeLifeMovement rlm = new RelativeLifeMovement(command, new Point(xmod, ymod), duration, newstate);
                    res.add(rlm);
                    break;
                }
                case 12:// 확실
                    res.add(new ChangeEquipSpecialAwesome(command, rh.readByte()));
                    break;
                case 11:// 확실
                case 13:// 확실
                case 14:// 확실
                case 17:
                case 19:
                case 20://확실
                case 24://확실
                case 25://확실
                case 26://확실
                case 3: //확실
                case 4: //확실
                case 5: //확실
                case 6: //확실
                case 9: //확실
                case 10: //확실
                case 50://확실
                {
                    final short xpos = rh.readShort();
                    final short ypos = rh.readShort();
                    final short unk = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final ChairMovement cm = new ChairMovement(command, new Point(xpos, ypos), duration, newstate);
                    cm.setUnk(unk);
                    res.add(cm);
                    break;
                }
                case 23: //확실
                case 27: //확실
                case 28: //확실
                case 29: //확실
                case 30: //확실
                case 31: //확실
                case 32: //확실
                case 33: //확실
                case 34: //확실
                case 35: //확실
                case 36: //확실
                case 37: //확실
                case 38: //확실
                case 39: //확실
                case 40: //확실
                case 41: //확실
                case 42: //확실
                case 43: //확실
                case 44: //확실
                case 116: //테스트.
                {
                    final byte newstate = rh.readByte();
                    final short unk = rh.readShort();
                    final AranMovement am = new AranMovement(command, new Point(0, 0), unk, newstate);
                    res.add(am);
                    break;
                }
                case 99:
                {
                    final long unk1 = rh.readLong();
                    final byte unk = rh.readByte();
                    final short xpos = rh.readShort();
                    final short ypos = rh.readShort();
                    final short xwobble = rh.readShort();
                    final short ywobble = rh.readShort();
                    TestMovement tm = new TestMovement(command, new Point(xpos, ypos), 0, 0);
                    tm.setUnk1(unk1);
                    tm.setUnk(unk);
                    tm.setWobblePos(new Point(xwobble, ywobble));
                    break;
                }
                case 48: // 엔젤릭버스터 - 매지컬 리프트
                case 49: //스트라이커 - 승천
                {
                    final int movetype = rh.readInt();
                    final short xpos = rh.readShort();
                    final short ypos = rh.readShort();
                    final short xwobble = rh.readShort();
                    final short ywobble = rh.readShort();
                    final short unk = rh.readShort();
                    final short xoffset = rh.readShort();
                    final short yoffset = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final AngelicBusterMovement abm = new AngelicBusterMovement(command, new Point(xpos, ypos), duration, newstate);
                    abm.setMoveType(movetype);
                    abm.setPixelsPerSecond(new Point(xwobble, ywobble));
                    abm.setOffset(new Point(xoffset, yoffset));
                    abm.setUnk(unk);
                    res.add(abm);
                    break;
                }
                case 15: //확실
                {
                    final short xpos = rh.readShort();
                    final short ypos = rh.readShort();
                    final short xwobble = rh.readShort();
                    final short ywobble = rh.readShort();
                    final short unk = rh.readShort();
                    final short fh = rh.readShort();
                    final short xoffset = rh.readShort();
                    final short yoffset = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final JumpDownMovement jdm = new JumpDownMovement(command, new Point(xpos, ypos), duration, newstate);
                    jdm.setUnk(unk);
                    jdm.setPixelsPerSecond(new Point(xwobble, ywobble));
                    jdm.setOffset(new Point(xoffset, yoffset));
                    jdm.setFH(fh);
                    res.add(jdm);
                    break;
                }
                default:
                    if (ServerConstants.showPackets) {
                        System.out.println("Remaining : " + (numCommands - res.size()) + " New type of movement ID : " + command + ", packet : " + Originalrh);   
                    }
                    return null;
            }
        }
        if (numCommands != res.size()) {
            return null; // Probably hack
        }
        return res;
    }

    public static final void updatePosition(final List<LifeMovementFragment> movement, final AnimatedHinaMapObject target, final int yoffset) {
        for (final LifeMovementFragment move : movement) {
            if (move instanceof LifeMovement) {
                if (move instanceof AbsoluteLifeMovement) {
                    Point position = ((LifeMovement) move).getPosition();
                    position.y += yoffset;
                    target.setPosition(position);
                }
                target.setStance(((LifeMovement) move).getNewstate());
            }
        }
    }
}