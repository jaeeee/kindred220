/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.skills;

import client.MapleCharacter;
import client.MapleCharacterStat;
import client.stats.BuffStats;
import java.util.Collections;
import java.util.List;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.HexTool;
import tools.Triple;

/**
 *
 * @author home
 */
public class DemonPacket {
        public static Packet giveDemonAvengerPower(MapleCharacterStat stats, List<Triple<BuffStats, Integer, Boolean>> statups) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongMask(packet, statups);
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(3);
                packet.writeInt(0);
                packet.writeInt(-1);
            }
        }
        packet.writeInt(0);
        packet.write(0);
        packet.writeInt(stats.getHp());
        packet.writeLong(0);
        packet.write(0);
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 익시드스킬 구현버프
     * 
     * @param skillid - 스킬 아이디
     * @param statups - 버프스탯 값
     * @return - 패킷값을 가짐
     */
    public static Packet giveDemonAvengerExceed(int skillid, int overload, List<Triple<BuffStats, Integer, Boolean>> statups) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0x80000000000000L);
        packet.writeLong(0);
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(overload);
                packet.writeInt(skillid);
                packet.writeInt(-1);
            }
        }
        packet.write0(18); //1.2.220+
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 익시드스킬 시전버프
     * 
     * @param skillid - 스킬아이디
     * @param time - 버프시간
     * @param statups - 버프스탯 값
     * @return - 패킷값을 가짐
     */
    public static Packet giveExceedSkill(int skillid, int time, List<Triple<BuffStats, Integer, Boolean>> statups) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0x80000000000000L);
        packet.writeLong(0);
        for (Triple<BuffStats, Integer, Boolean> statup : statups) {
            if (!statup.getThird()) {
                packet.writeShort(statup.getSecond().shortValue());
                packet.writeInt(skillid);
                packet.writeInt(time);
            }
        }
        packet.write0(18); //1.2.220+
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 디아볼릭 리커버리 구현패킷
     * 
     * @param skillid - 아직 완벽하게 분석하지 못했으므로 스킬아이디만 입력.
     * @return - 패킷값을 가짐
     */
    public static Packet giveDiabolicRecovery(int skillid, int time) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        packet.writeLong(0x4000000L);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0x400000000000000L);
        packet.writeLong(0);
        packet.writeShort(5);
        packet.writeInt(skillid);
        packet.writeInt(time);
        packet.write0(9); //1.2.220+
        packet.writeInt(1);
        packet.writeInt(skillid);
        packet.writeInt(40);
        packet.write(HexTool.getByteArrayFromHexString("13 60 03 11"));
        packet.writeInt(1);
        packet.writeInt(180000);
        packet.writeInt(1000);
        packet.writeInt(1);
        packet.write(0);
        
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 익시드스킬 캔슬구현패킷
     * 
     * @return - 패킷값을 가짐
     */
    public static Packet cancelExceedSkill() {
        final WritingPacket packet = new WritingPacket();
        final List<Triple<BuffStats, Integer, Boolean>> statups = Collections.singletonList(new Triple<>(BuffStats.DEMON_EX_BUFF, 0, false));
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeDemonMask(packet, statups);
        
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 익시드버프 캔슬구현패킷
     * 
     * @return - 패킷값을 가짐
     */
    public static Packet cancelDemonAvengerExceed() {
        final WritingPacket packet = new WritingPacket();
        final List<Triple<BuffStats, Integer, Boolean>> statups = Collections.singletonList(new Triple<>(BuffStats.EXCEED_CANCEL, 0, false));
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeDemonMask(packet, statups);
        
        return packet.getPacket();
    }
    
    /**
     * 데몬어벤져 디아볼릭 리커버리 캔슬구현패킷
     * 
     * @return - 패킷값을 가짐
     */
    public static Packet cancelDiabolicRecovery() {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0x800000L);
        packet.writeLong(0);
        
        return packet.getPacket();
    }
}
