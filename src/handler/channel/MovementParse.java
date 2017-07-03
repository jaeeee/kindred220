/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
                case 0: //�Ϲ��̵� - Ȯ��
                case 7: //�����̵�
                case 8: //Ȯ�� 
                case 18: //����
                case 65: //�׽�Ʈ.
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
                case 1: //���� - Ȯ��
                case 2: //������
                case 22: //Ȯ��
                case 71: //�׽�Ʈ.
                case 66: //�׽�Ʈ.
                {
                    final short xmod = rh.readShort();
                    final short ymod = rh.readShort();
                    final byte newstate = rh.readByte();
                    final short duration = rh.readShort();
                    final RelativeLifeMovement rlm = new RelativeLifeMovement(command, new Point(xmod, ymod), duration, newstate);
                    res.add(rlm);
                    break;
                }
                case 12:// Ȯ��
                    res.add(new ChangeEquipSpecialAwesome(command, rh.readByte()));
                    break;
                case 11:// Ȯ��
                case 13:// Ȯ��
                case 14:// Ȯ��
                case 17:
                case 19:
                case 20://Ȯ��
                case 24://Ȯ��
                case 25://Ȯ��
                case 26://Ȯ��
                case 3: //Ȯ��
                case 4: //Ȯ��
                case 5: //Ȯ��
                case 6: //Ȯ��
                case 9: //Ȯ��
                case 10: //Ȯ��
                case 50://Ȯ��
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
                case 23: //Ȯ��
                case 27: //Ȯ��
                case 28: //Ȯ��
                case 29: //Ȯ��
                case 30: //Ȯ��
                case 31: //Ȯ��
                case 32: //Ȯ��
                case 33: //Ȯ��
                case 34: //Ȯ��
                case 35: //Ȯ��
                case 36: //Ȯ��
                case 37: //Ȯ��
                case 38: //Ȯ��
                case 39: //Ȯ��
                case 40: //Ȯ��
                case 41: //Ȯ��
                case 42: //Ȯ��
                case 43: //Ȯ��
                case 44: //Ȯ��
                case 116: //�׽�Ʈ.
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
                case 48: // ������������ - ������ ����Ʈ
                case 49: //��Ʈ����Ŀ - ��õ
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
                case 15: //Ȯ��
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