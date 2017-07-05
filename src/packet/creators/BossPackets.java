package packet.creators;

import java.util.List;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import server.bosses.ObtacleAtom;
/**
 *
 * @author syonkr
 */
public class BossPackets {
    
    public static Packet removeObtacleAtomBomb(int objectid){
        WritingPacket mplew = new WritingPacket();
        mplew.writeShort(SendPacketOpcode.REMOVE_OBTACLE_ATOM.getValue());
        mplew.writeInt(objectid);
        return mplew.getPacket();
    } // ������ �����ع����� �ɼ����� ��� ������

    public static Packet spawnObtacleAtomBomb(List<ObtacleAtom> bombs){
        WritingPacket mplew = new WritingPacket();
        mplew.writeShort(SendPacketOpcode.SPAWN_OBTACLE_ATOM.getValue());
        mplew.writeInt(bombs.size());
        byte unk = 0;
        mplew.write(unk);
        if (unk == 1) {
            // ���ǰ���Ʈ 4��°�����������ϱ��� ��ź�������³�� ����
            mplew.writeInt(300); //from Effect.img/BasicEff/ObtacleAtomCreate/%d
            mplew.write(0); // ����
            mplew.writeInt(0); //���� x ��ġ
            mplew.writeInt(0); // ���� y ��ġ
            mplew.writeInt(0); // ����Ʈ�� x
            mplew.writeInt(0); // ����Ʈ�� y
        }
        for (ObtacleAtom bomb : bombs) {
            mplew.write(1);
            mplew.writeInt(bomb.getTypeNum());
            mplew.writeInt(bomb.getObjectId());
            mplew.writeInt(bomb.getPositionX());
            mplew.writeInt(bomb.getPositionY());
            mplew.writeInt(bomb.getMaxSpeed());
            mplew.writeInt(bomb.getAcceleration());
            mplew.writeInt(bomb.getUnk());
            mplew.writeInt(bomb.getExplodeSpeed());
            mplew.writeInt(bomb.getDamagePercent());
            mplew.writeInt(bomb.getSpawnDelay());
            mplew.writeInt(bomb.getDistance());
            mplew.writeInt(bomb.getAngle());
        }
        return mplew.getPacket();
    } 
}
