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
import client.MapleClient;
import constants.GameConstants;
import launch.ChannelServer;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;
import tools.HexTool;
import tools.RandomStream.Randomizer;

public class UIPacket {
    
     public static String itemid[];
    public static String num[];
    
    public static Packet showInfo(String msg) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.TOP_MSG.getValue());
	packet.writeMapleAsciiString(msg);
        
	return packet.getPacket();
    }
    
    public static Packet greenShowInfo(String msg) {
	final WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.GREEN_SHOW_INFO.getValue());
        packet.write(0);
	packet.writeMapleAsciiString(msg);
        packet.write(1); // 0 = Lock 1 = Clear
        
	return packet.getPacket();
    }
    
    public static Packet detailShowInfo(String msg, boolean RuneSystem) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.DETAIL_SHOW_INFO.getValue());
        packet.writeInt(3); //color
        packet.writeInt(RuneSystem ? 0x11 : 0x14); //width
        packet.writeInt(RuneSystem ? 0 : 0x0F); //heigh
        packet.writeInt(0); //Unk
        packet.writeMapleAsciiString(msg);
        
        return packet.getPacket();
  }
    
    public static Packet getItemTopMsg(int itemid, String msg) {
        final WritingPacket wb = new WritingPacket();
        wb.writeShort(SendPacketOpcode.MID_MSG.getValue());
        wb.writeInt(itemid);
        wb.writeMapleAsciiString(msg);
        
        return wb.getPacket();
    }
    
    public static Packet clearMidMsg() {
        WritingPacket mplew = new WritingPacket();
        mplew.writeShort(SendPacketOpcode.CLEAR_MID_MSG.getValue());

        return mplew.getPacket();
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

    
    public static Packet getStatusMsg(int itemid) {
	WritingPacket packet = new WritingPacket();

	// Temporary transformed as a dragon, even with the skill ......
	packet.writeShort(SendPacketOpcode.SHOW_STATUS_INFO.getValue());
	packet.write(7);
	packet.writeInt(itemid);

	return packet.getPacket();
    }

   public static Packet getSPMsg(byte sp, short job) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SHOW_STATUS_INFO.getValue());
	packet.write(4);
	packet.writeShort(job);
	packet.write(sp);

	return packet.getPacket();
    }

    public static Packet getGPMsg(int itemid) {
	WritingPacket packet = new WritingPacket();

	// Temporary transformed as a dragon, even with the skill ......
	packet.writeShort(SendPacketOpcode.SHOW_STATUS_INFO.getValue());
	packet.write(7);
	packet.writeInt(itemid);

	return packet.getPacket();
    }
    
    public static final Packet MapNameDisplay(final int mapid) {
	final WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.BOSS_ENV.getValue());
	packet.write(0x4);
	packet.writeMapleAsciiString("maplemap/enter/" + mapid);

	return packet.getPacket();
    }

    public static final Packet showWZEffect(final String data, int value) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.SHOW_ITEM_GAIN_INCHAT.getValue());
	packet.write(value == 0 ? 0x16 : 0x19);
	packet.writeMapleAsciiString(data);
	packet.writeInt(value);
	return packet.getPacket();
    }
    
    public static final Packet broadcastWZEffect(final int cid, final String data, int value) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.SHOW_FOREIGN_EFFECT.getValue());
        packet.writeInt(cid);
	packet.write(value == 0 ? 0x15 : 0x18);
	packet.writeMapleAsciiString(data);
	packet.writeInt(value);
	return packet.getPacket();
    }  
    
    public static final Packet showWZEffect(final String data) {
	return showWZEffect(data, 0);
    }

    public static Packet summonHelper(boolean summon) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SUMMON_HINT.getValue());
	packet.write(summon ? 1 : 0);

	return packet.getPacket();
    }

    public static Packet summonMessage(int type) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SUMMON_HINT_MSG.getValue());
	packet.write(1);
	packet.writeInt(type);
	packet.writeInt(7000); // probably the delay

	return packet.getPacket();
    }

    public static Packet summonMessage(String message) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SUMMON_HINT_MSG.getValue());
	packet.write(0);
	packet.writeMapleAsciiString(message);
	packet.writeInt(200); // IDK
	packet.writeShort(0);
	packet.writeInt(10000); // Probably delay

	return packet.getPacket();
    }

    public static Packet IntroDisableUI(boolean enable) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.DISABLE_UI.getValue());
        packet.write(enable ? 1 : 0);
        if (enable) {
             packet.writeShort(1);
        }
        return packet.getPacket();
    }
    
    public static final Packet AchievementRatio(int value) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ACHIVEMENT_RATIO.getValue());
        packet.writeInt(value);

        return packet.getPacket();
    }
        
    public static final Packet MapleStar(MapleClient c, MapleCharacter chr, MapleCharacter chr1, int star1, int star2) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MAPLE_CHAT.getValue());
        packet.write(8);
        if (star1 > 0) {
            chr = MapleCharacter.loadCharFromDB(star1, c, true);
            packet.write(1);
            packet.writeInt(chr.getId());
            packet.writeInt(chr.getFame());
            packet.write(HexTool.getByteArrayFromHexString("00 90 E2 14 E5 5D CF 01"));
            packet.writeMapleAsciiString(chr.getName());
            PacketProvider.addPlayerLooks(packet, chr, true);
            if (star2 > 0) {
                chr1 = MapleCharacter.loadCharFromDB(star2, c, true);
                packet.write(1);
                packet.writeInt(chr1.getId());
                packet.writeInt(chr1.getFame());
                packet.write(HexTool.getByteArrayFromHexString("40 8D 47 19 E4 5D CF 01"));
                packet.writeMapleAsciiString(chr1.getName());
                PacketProvider.addPlayerLooks(packet, chr1, true);
            }
        }
        return packet.getPacket();
    }
    
    public static final Packet MapleChat(MapleClient c, MapleCharacter chr,MapleCharacter chr1, int rank1, int rank2, int type) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.MAPLE_CHAT.getValue());
        packet.write(7);
        if (rank1 > 0) {
            chr = MapleCharacter.loadCharFromDB(rank1, c, true);
            packet.write(1);
            packet.writeInt(chr.getId());
            packet.writeInt(chr.getFame());
            packet.write(HexTool.getByteArrayFromHexString("00 90 E2 14 E5 5D CF 01"));
            packet.writeMapleAsciiString(chr.getName());
            PacketProvider.addPlayerLooks(packet, chr, true);
        if (rank2 > 0) {
            chr1 = MapleCharacter.loadCharFromDB(rank2, c, true);
            packet.write(1);
            packet.writeInt(chr1.getId());
            packet.writeInt(chr1.getFame());
            packet.write(HexTool.getByteArrayFromHexString("40 8D 47 19 E4 5D CF 01"));
            packet.writeMapleAsciiString(chr1.getName());
            PacketProvider.addPlayerLooks(packet, chr1, true);
            }
        }
        return packet.getPacket();
    }

    public static final Packet OpenUI(int value) {  
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.OPEN_WINDOW.getValue());
        packet.write(value);
        
	return packet.getPacket();
    }
    
    public static final Packet showSpecialMapEffect(int type, int action, String music, String back) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SPECIAL_MAP_EFFECT.getValue());
        packet.writeInt(type);
        packet.writeInt(action);
        packet.writeMapleAsciiString(music);
        if (back != null) {
          packet.writeMapleAsciiString(back);
        }
        return packet.getPacket();
    }

    public static final Packet cancelSpecialMapEffect() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.SPECIAL_MAP_EFFECT.getValue());
        packet.writeLong(0);
        
        return packet.getPacket();
  }

    public static final Packet playSpecialMapSound(String sound) {
      WritingPacket packet = new WritingPacket();
      packet.writeShort(SendPacketOpcode.SPECIAL_MAP_SOUND.getValue());
      packet.writeMapleAsciiString(sound);
      
      return packet.getPacket();
    }
    
    public static final Packet eliteBossNotice(int type, int mapid, int mobid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.ELITE_BOSS_NOTICE.getValue());
        packet.write(type);
        if (type == 1) {
            packet.writeInt(mapid);
        } else if (type == 2) {
            packet.writeInt(mapid);
            packet.writeInt(mobid);
            packet.write(HexTool.getByteArrayFromHexString("20 75 1A 00"));
        }
        return packet.getPacket();
    }
    
    public static Packet showPopupMessage(final String msg) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.POPUP_MSG.getValue());
        packet.writeMapleAsciiString(msg);
        packet.write(1);
        
        return packet.getPacket();
    }
    
        public static Packet showFishingUI() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.FISHING.getValue());
        packet.writeLong(5);
        return packet.getPacket();
    }
}
