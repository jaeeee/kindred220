/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.creators;

import client.MapleAndroid;
import client.MapleCharacter;
import client.items.IItem;
import client.items.MapleInventoryType;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import server.movement.LifeMovementFragment;
import java.awt.Point;
import java.util.List;
import server.items.ItemInformation;

/**
 *
 * @author 에반테이르
 */
public class AndroidPacket {
    public static Packet spawnAndroid(MapleCharacter chr, MapleAndroid android) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ANDROID_SPAWN.getValue());
        packet.writeInt(chr.getId());
        packet.write(ItemInformation.getInstance().getAndroid(android.getItemId())); //type of android, 1-4
        packet.writePos(android.getPosition());
        packet.write(android.getStance());
        packet.writeShort(0); //no idea, FH or something
        packet.writeShort(android.getSkinColor());
        packet.writeShort(android.getHair() - 30000);
        packet.writeShort(android.getFace() - 20000);
        packet.writeMapleAsciiString(android.getName());
        for (short i = -1200; i > -1207; i--) {
            final IItem item = chr.getInventory(MapleInventoryType.EQUIPPED).getItem(i);
            packet.writeInt(item != null ? item.getItemId() : 0);
        }
        return packet.getPacket();
    }
    
    public static Packet deactivateAndroid(int cid) {
        final WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ANDROID_DEACTIVATED.getValue());
        packet.writeInt(cid);
        
        return packet.getPacket();
    }
    
    
    public static Packet removeAndroid(int cid, int animation) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ANDROID_REMOVE.getValue());
        packet.writeInt(cid);
        packet.write(animation);
        packet.writeInt(0);
        
        return packet.getPacket();
    }
    
    
    public static Packet moveAndroid(int cid, Point pos, List<LifeMovementFragment> res) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.ANDROID_MOVE.getValue());
        packet.writeInt(cid);
        packet.writeInt(0); //v192
        packet.writePos(pos);
        packet.writeInt(Integer.MAX_VALUE);
        PacketProvider.serializeMovementList(packet, res);
        
        return packet.getPacket();
    }

    public static Packet showAndroidEmotion(int cid, int animation) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.ANDROID_EMOTION.getValue());
        packet.writeInt(cid);
        packet.write(0);
        packet.write(animation);
        
        return packet.getPacket();
    }
}
