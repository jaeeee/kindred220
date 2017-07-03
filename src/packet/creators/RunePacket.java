/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package packet.creators;

import client.MapleCharacter;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import server.maps.MapleRune;

/**
 *
 * 
 */
public class RunePacket {
        
    public static Packet spawnRune(MapleRune rune, boolean respawn) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(respawn ? SendPacketOpcode.RESPAWN_RUNE.getValue() : SendPacketOpcode.SPAWN_RUNE.getValue());
        packet.writeInt(1);
        packet.writeInt(rune.getRuneType());
        packet.writeInt(rune.getPositionX());
        packet.writeInt(rune.getPositionY());
        packet.write(0);
        
        return packet.getPacket();
    }
    
    public static Packet removeRune(MapleRune rune, MapleCharacter chr) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.REMOVE_RUNE.getValue());
        packet.writeInt(0);
        packet.writeInt(chr.getId());
        
        return packet.getPacket();
    }
    
    public static Packet RuneAction(int type, int time) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.RUNE_ACTION.getValue());
        packet.writeInt(type);
        packet.writeInt(time);
        
        return packet.getPacket();
    }
    
    public static Packet showRuneEffect(int type) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.RUNE_EFFECT.getValue());
        packet.writeInt(type);
        
        return packet.getPacket();
    }
}