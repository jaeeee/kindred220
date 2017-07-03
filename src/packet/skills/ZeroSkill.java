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
import client.items.IItem;
import constants.GameConstants;
import java.awt.Point;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.HexTool;

/**
 *
 * @author 호야
 */
public class ZeroSkill {
    
    public static Packet ScrollStart() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_SCROLL_START.getValue());
        
        return packet.getPacket();
    }
    
    public static Packet Scroll(int scroll) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_SCROLL.getValue());
        packet.writeShort(1);
        packet.write(0);
        packet.writeInt(scroll);
        
        return packet.getPacket();
    }
    
    public static Packet Open(int type) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_WEAPON.getValue());
        packet.writeInt(type);
        packet.writeInt((type == 1) ? 100000 : 50000);
        packet.writeInt((type == 1) ? 600 : 500);
        packet.writeShort(0);
        
        return packet.getPacket();
    }
    
    public static Packet WeaponInfo(int type, int level, int action, int weapon) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_WEAPONINFO.getValue());
        packet.write(0);
        packet.write(action);
        packet.writeInt(type);
        packet.writeInt(level);
        packet.writeInt(weapon + 10001);
        packet.writeInt(weapon + 1);
        
        return packet.getPacket();
    }
    
    public static Packet WeaponUpgradeSuccess() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_UPGRADE_SU.getValue());
        packet.writeShort(1);
        
        return packet.getPacket();
    }
    
    public static Packet WeaponLevelUp() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_UPGRADE.getValue());
        packet.write(0);
        
        return packet.getPacket();
    }
    
    public static Packet NPCTalk(String txt) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.NPC_TALK.getValue());
        packet.write(3);
        packet.writeInt(0);
        packet.writeShort(0);
        packet.writeShort(0x24);
        packet.writeInt(2400010); // 2400009 남자, 2400010 여자
        packet.writeMapleAsciiString(txt);
        packet.write(HexTool.getByteArrayFromHexString("00 01"));
        
        return packet.getPacket();
    }
    
    public static Packet ZeroTag(MapleCharacter chr, byte Gender) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_TAG.getValue());
        packet.writeShort(0xC7);
        packet.write(Gender);
        packet.writeInt(chr.getStat().getHp());
        packet.writeInt(chr.getStat().getMp() > 100 ? 100 : chr.getStat().getMp());
        packet.writeInt(chr.getStat().getMaxHp());
        packet.writeInt(chr.getStat().getMaxMp() > 100 ? 100 : chr.getStat().getMaxMp());
        
        return packet.getPacket();
    }
    
    public static Packet TagTip(MapleCharacter chr, int type) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.UPDATE_STATS.getValue());
        packet.write(0);
        packet.writeInt(0x4000);
        packet.writeInt(chr.getStat().getMaxHp());
        packet.write(1);
        packet.writeShort(type);
        
        return packet.getPacket();
    }
    
    public static Packet genderUpdate() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_OPTION.getValue());
        packet.writeInt(1);
        packet.write(1);
        
        return packet.getPacket();
    }
    
    public static Packet MultiTag(MapleCharacter chr) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_MUITTAG.getValue());
        packet.writeInt(chr.getId());
        if (chr.getGender() == 0 && chr.getSecondGender() == 1) {
            PacketProvider.addPlayerLooks(packet, chr, false);
        } else {
            PacketProvider.addPlayerLooksZero(packet, chr, false);
        }
        return packet.getPacket();
    }
    
    public static Packet Clothes(int value) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_TAG.getValue());
        packet.write(0);
        packet.write(1);
        packet.writeInt(value);
        
        return packet.getPacket();
    }
    
    public static Packet Reaction() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MODIFY_INVENTORY_ITEM.getValue());
        packet.write(0);
        packet.writeShort(0);

        return packet.getPacket();
    }
    
    public static Packet shockWave(int skillid, int delay, int direction, Point position) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ZERO_SHOCKWAVE.getValue());
        packet.writeInt(skillid);
        packet.writeInt(101000102);
        packet.writeInt(56);
        packet.writeInt(delay);
        packet.writeInt(0);
        packet.write(direction);
        packet.writePos(position);
        
        return packet.getPacket();
    }
}
