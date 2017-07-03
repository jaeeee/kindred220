/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package packet.skills;

import client.stats.BuffStats;
import packet.creators.PacketProvider;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.HexTool;

public class AdventurerSkill {
    
    public static Packet giveBeholderDominant(int buffid1, int buffid2, int buffid3) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.BEHOLDER);
        
        packet.writeShort(1);
        packet.writeInt(buffid1); //1301013
        packet.writeInt(344117);
        packet.writeInt(0);
        packet.write(4);
        packet.writeInt(buffid2); //1311013
        if (buffid3 == 1311014) {
            packet.writeInt(1311014);
            packet.writeInt(0);
        }
        packet.write0(12);
        packet.writeShort(1);
        packet.write0(3);

        return packet.getPacket();
    }
    
    public static Packet CancelHeholderBuff() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
        PacketProvider.writeLongSingleMask(packet, BuffStats.BEHOLDER);
        
        return packet.getPacket();
    }
    
    public static Packet giveParashock(int skillid, int skillLevel) {
      WritingPacket packet = new WritingPacket();
      packet.writeShort(SendPacketOpcode.GIVE_BUFF.getValue());
      packet.write(HexTool.getByteArrayFromHexString("00 00 00 80 00 00 00 40"));
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0x400000);
      packet.writeShort(skillLevel);
      packet.writeInt(skillid);
      packet.write(HexTool.getByteArrayFromHexString("67 62 39 8B"));
      packet.writeInt(0);
      packet.writeShort(280);
      packet.writeInt(0);
      packet.writeInt(1);
      packet.writeInt(skillid);
      packet.writeInt(20);
      packet.write(HexTool.getByteArrayFromHexString("37 AD C6 74"));
      packet.writeInt(2);
      packet.writeInt(8000);
      packet.writeInt(1);
      packet.writeInt(skillid);
      packet.write(HexTool.getByteArrayFromHexString("EC FF FF FF"));
      packet.write(HexTool.getByteArrayFromHexString("37 AD C6 74"));
      packet.writeInt(2);
      packet.writeInt(8000);
      packet.write(0);
      packet.writeLong(0);

      return packet.getPacket();
    }

    public static Packet CancelShock() {
      WritingPacket packet = new WritingPacket();
      packet.writeShort(SendPacketOpcode.CANCEL_BUFF.getValue());
      packet.write(HexTool.getByteArrayFromHexString("00 00 00 80 00 00 00 40"));
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0);
      packet.writeLong(0x400000);
      packet.writeLong(0);

      return packet.getPacket();
    }
}