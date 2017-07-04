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
import client.skills.SkillStatEffect;
import client.stats.BuffStats;
import handler.channel.MapleMechDoor;

import java.awt.Point;
import java.util.Collections;
import java.util.List;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.HexTool;
import tools.RandomStream.Randomizer;
import tools.Triple;

/**
 *
 * @author Developer
 */
public class MechanicSkill {

    public static Packet giveProtoType(int skillid, int bufflength, int mountid) {
        WritingPacket packet = new WritingPacket();
        int statup = 0;
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        packet.writeLong(0x100000L);
        packet.writeLong(0);
        packet.writeLong(0x3B00000L);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(BuffStats.MONSTER_RIDING.getValue());
        for (int i = 0; i < 5; i++) {
            if ((i == 0) || (i == 1)) {
                statup = 1200;
            } else if (i == 2) {
                statup = 0x28;
            } else {
                statup = 1000;
            }
                packet.writeInt(statup);
                packet.writeInt(skillid);
                packet.writeInt(bufflength);
        }
        packet.writeInt(0);
        packet.write0(5);
        packet.writeInt(mountid);
        packet.writeInt(skillid);
        
        packet.write(0);
        packet.writeInt(0);
        packet.writeInt(1);
        packet.writeInt(skillid);
        packet.writeInt(20);
        packet.write(HexTool.getByteArrayFromHexString("60 2D 77 4A"));
        packet.writeLong(0);
        packet.writeInt(0);
        packet.write(1);
        packet.writeInt(11);
        packet.write(0);
        
        return packet.getPacket();
    }

    public static Packet cancelPrototype() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        packet.writeLong(0x5100020L);
        packet.writeLong(0x8000000000L);
        packet.writeLong(0x3B00000L);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(BuffStats.MONSTER_RIDING.getValue());
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeShort(284);
        
        return packet.getPacket();
    }

    public static Packet cancelFlameLauncher() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.write(8);
        
        return packet.getPacket();
    }

    public static Packet cancelMisileTangk() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.write(30);
        
        return packet.getPacket();
    }

    public static Packet cancelHeavyMachineGun() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.write(11);
        
        return packet.getPacket();
    }

    /**
     * 메카닉 캔슬모션
     *
     * @param skillId - 패킷값 구분
     * @return - 패킷값을 보냄.
     */
    public static Packet cancelMechMotion(int skillId) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SHOW_ITEM_GAIN_INCHAT.getValue());
        packet.write(1);
        packet.writeInt(skillId);
        packet.write(184);
        packet.write(0x1E);
        packet.write(1);
        
        return packet.getPacket();
    }

    /**
     * 메카닉 캔슬액션
     *
     * @param skillId - 패킷값 구분
     * @return - 패킷값을 보냄.
     */
    public static Packet cancelMechAction(int skillId) {
        WritingPacket packet = new WritingPacket();
        final List<Triple<BuffStats, Integer, Boolean>> statups = Collections.singletonList(new Triple<>(BuffStats.MECH_CHANGE, 0, false));
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongMask(packet, statups);
        packet.write(skillId == 35120013 ? 0x14 : skillId == 35110004 ? 0x0E : 0x0E);
        
        return packet.getPacket();
    }

    /**
     * 메카닉 미사일탱크 → 헤비머신건 변환패킷.
     *
     * @param skillId - 스킬아이디를 패킷에 이용함.
     * @return - 패킷값을 보냄.
     */
    public static Packet giveMisileToHeavy(int skillId) {
        WritingPacket packet = new WritingPacket();
        final List<Triple<BuffStats, Integer, Boolean>> statups = Collections.singletonList(new Triple<>(BuffStats.MECH_CHANGE, 0, false));
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongMask(packet, statups);
        packet.writeShort(0x14);
        packet.writeInt(skillId);
        packet.writeInt(-1);
        packet.write0(19);
        
        return packet.getPacket();
    }

    /**
     * 메카닉 헤비머신건 → 미사일탱크 변환패킷.
     *
     * @param skillId
     * @return
     */
    public static Packet giveSpecialToMisile(int skillId) {
        WritingPacket packet = new WritingPacket();
        final List<Triple<BuffStats, Integer, Boolean>> statups = Collections.singletonList(new Triple<>(BuffStats.MECH_CHANGE, 0, false));
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        packet.writeInt(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0x80000000000L);
        packet.writeLong(0);
        packet.writeInt(0);
        packet.writeShort(0x14);
        packet.writeInt(skillId);
        packet.writeInt(-1);
        packet.write0(9);
        packet.writeInt(0);
        packet.write(0);
        packet.write(0x19);
        packet.writeInt(0);
        
        return packet.getPacket();
    }

    public static Packet giveCancelHeavy(int skillId) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.writeShort(0x14);
        packet.writeInt(skillId);
        packet.writeInt(-1);
        packet.write0(14);
        packet.write(0x0B);
        packet.writeInt(0);
        
        return packet.getPacket();
    }

    public static Packet giveCancelMisile(int skillId) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.writeShort(0x14);
        packet.writeInt(skillId);
        packet.writeInt(-1);
        packet.write0(19);
        
        return packet.getPacket();
    }

    /**
     * 메카닉 오픈게이트 소환 패킷
     *
     * @param door - 메카닉의 오픈게이트 클래스를 불러옴.
     * @param active - 작동하는지 안하는지 여부를 물음.
     * @return - 패킷값을 보냄.
     */
    public static Packet mechDoorSpawn(MapleMechDoor door, boolean active) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MECH_DOOR_SPAWN.getValue());
        packet.write(active ? 0 : 1);
        packet.writeInt(door.getOwnerId());
        packet.writePos(door.getTruePosition());
        packet.write(door.getId());
        packet.writeInt(door.getPartyId());
        
        return packet.getPacket();
    }

    /**
     * 메카닉 오픈게이트 취소 패킷
     *
     * @param door - 메카닉의 오픈게이트 클래스를 불러옴.
     * @param active - 작동하는지 안하는지 여부를 물음.
     * @return - 패킷값을 보냄.
     */
    public static Packet mechDoorRemove(MapleMechDoor door, boolean active) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MECH_DOOR_REMOVE.getValue());
        packet.write(active ? 0 : 1);
        packet.writeInt(door.getOwnerId());
        packet.write(door.getId());
        
        return packet.getPacket();
    }

    /**
     * 메카닉 포탈구현패킷
     *
     * @param pos - 현재 플레이어의 위치.
     * @return - 패킷값을 보냄.
     */
    public static Packet mechPortal(Point pos) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SPAWN_PORTAL.getValue());
        packet.writePos(pos);
        
        return packet.getPacket();
    }

    public static Packet showMechTrans(MapleCharacter chr, int value, int skillid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_FOREIGN_BUFF.getValue());
        packet.writeInt(chr.getId());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.writeShort(value);
        packet.writeInt(skillid);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.writeLong(0);
        packet.write(0);
        
        return packet.getPacket();
    }

    public static Packet cancelMechTrans(MapleCharacter chr) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_FOREIGN_BUFF.getValue());
        packet.writeInt(chr.getId());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECH_CHANGE);
        packet.write(1);
        
        return packet.getPacket();
    }
    
    
    /**
     * 메카닉 위장색
     *
     */
    public static Packet MechanicMetalArmorCamouflage(int id, int time) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.MECHANIC_CAMOUFLAGE);
        packet.writeShort(id);
        packet.writeInt(30000227);
        packet.writeInt(time);
        packet.write0(18);
        return packet.getPacket();
    }
}