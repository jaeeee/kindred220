/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.creators;

import database.MYSQL;
import java.sql.ResultSet;
import java.sql.SQLException;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.RandomStream.Randomizer;

/**
 *
 * @author 최주원
 */

public class TheSidPacket {
    
    public static String itemid[];
    public static String num[];
    
    public static Packet TheSidRank() {
        WritingPacket packet = new WritingPacket();
        try {
            ResultSet rank = MYSQL.getConnection().prepareStatement("SELECT * FROM thesid WHERE gm = 0 ORDER BY time AND floor DESC LIMIT 10").executeQuery();
            packet.writeShort(SendPacketOpcode.THE_SID_RANK.getValue());
            int i = 0;
            while (rank.next()) {
                i++;
            }
            rank.close();
            packet.writeInt(i);
            ResultSet rank1 = MYSQL.getConnection().prepareStatement("SELECT * FROM thesid WHERE gm = 0 ORDER BY time AND floor DESC LIMIT 10").executeQuery();
            while (rank1.next()) {
                packet.Hex("88 9F 11 02 B2 8D 2F 00");
                packet.writeAsciiString(rank1.getString("name"), 13);
                packet.writeInt(rank1.getInt("floor"));
                packet.writeLong(rank1.getInt("time"));
                packet.Hex("E0 20 93 1B 70 50 CF 01");
            }
            rank1.close();
        } catch (SQLException ex) {
        }
        return packet.getPacket();
    }
    
    public static Packet TheSidItem(int i) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SHOW_ITEM_GAIN_INCHAT.getValue());
        packet.write(18);
        packet.writeInt(i);
        packet.write(0);
        
        return packet.getPacket();
    }
    
    public static Packet TopMessage(String a, int id, int delay) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.THE_SID_MESSAGE.getValue());
        packet.writeMapleAsciiString(a);
        packet.writeInt(id);
        packet.writeInt(delay);
        packet.write(1);
        
        return packet.getPacket();
    }

    public static Packet TheSidMessage(String a, int delay) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.THE_SID_MESSAGE.getValue());
        packet.writeMapleAsciiString(a);
        packet.writeInt(147);
        packet.writeInt(delay);//delay
        packet.write(1);
        
        return packet.getPacket();
    }

    public static Packet TheSidReward(int a, int cleartime, int point, int exp, int itemid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.THE_SID_REWARD.getValue());
        packet.writeInt(a);
        packet.writeInt(cleartime);
        packet.writeInt(point);
        packet.writeInt(exp);
        packet.writeInt(itemid);
        packet.writeInt(a);
        
        return packet.getPacket();
    }
    
    public static Packet TheSidItem() {
       WritingPacket packet = new WritingPacket();
       packet.writeShort(SendPacketOpcode.THE_SID_ITEM.getValue());
       packet.writeShort(7);
       packet.writeInt(2028272);
       packet.write(1);
       packet.writeInt(itemid.length);
       for(int i = 0; i < itemid.length; i ++) {
           packet.writeInt(Integer.parseInt(itemid[Randomizer.nextInt(itemid.length)]));
       }
       return packet.getPacket();
    }
    
    public static Packet TheSidTimer(int time, int cleartime) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.THE_SID_TIMER.getValue());
        packet.writeInt(1);
        packet.writeInt(0);
        packet.writeInt(time);
        packet.writeInt(0);
        packet.writeInt(cleartime);
        
        return packet.getPacket();
    }
}
