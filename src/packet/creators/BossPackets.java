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
    } // 강제로 제거해버리니 될수잇음 사용 ㄴㄴ해

    public static Packet spawnObtacleAtomBomb(List<ObtacleAtom> bombs){
        WritingPacket mplew = new WritingPacket();
        mplew.writeShort(SendPacketOpcode.SPAWN_OBTACLE_ATOM.getValue());
        mplew.writeInt(bombs.size());
        byte unk = 0;
        mplew.write(unk);
        if (unk == 1) {
            // 디멘션게이트 4번째엿던가시작하기전 폭탄떨어지는놈들 스폰
            mplew.writeInt(300); //from Effect.img/BasicEff/ObtacleAtomCreate/%d
            mplew.write(0); // ㅁㄹ
            mplew.writeInt(0); //스폰 x 위치
            mplew.writeInt(0); // 스폰 y 위치
            mplew.writeInt(0); // 떨어트림 x
            mplew.writeInt(0); // 떨어트림 y
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
