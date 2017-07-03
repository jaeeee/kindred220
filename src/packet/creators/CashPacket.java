package packet.creators;

import constants.GameConstants;
import java.sql.SQLException;
import java.sql.ResultSet;
import client.MapleClient;
import client.MapleCharacter;
import client.items.Equip;
import client.items.IItem;
import client.items.Item;
import client.items.MapleInventoryType;
import handler.channel.InventoryHandler;
import packet.transfer.write.Packet;
import packet.opcode.SendPacketOpcode;
import tools.HexTool;
import packet.transfer.write.WritingPacket;
import server.items.CashItemInfo;
import tools.Pair;
import java.util.List;
import launch.LoginServer;
import server.shops.HiredMerchant;
import server.shops.MapleCharacterShopItem;

public class CashPacket {
private static final byte[] warpCS = HexTool.getByteArrayFromHexString("1F 00 8B 77 8E 06 04 00 00 00 00 00 00 00 0A 00 00 00 8C 77 8E 06 04 00 00 00 00 00 00 00 0A 00 00 00 C0 84 91 06 04 00 00 80 FF FF FF FF 2C 10 00 00 00 00 01 C1 84 91 06 04 00 00 00 00 00 00 00 10 0E 00 00 C2 84 91 06 04 00 00 80 FF FF FF FF 84 12 00 00 00 00 01 C3 84 91 06 04 00 00 80 FF FF FF FF 34 17 00 00 00 00 01 C4 84 91 06 04 00 00 80 FF FF FF FF 7C 0B 00 00 00 00 01 C5 84 91 06 04 00 00 80 FF FF FF FF 24 09 00 00 00 00 01 C6 84 91 06 04 00 00 00 00 00 00 00 78 0F 00 00 36 0E 27 07 04 00 00 00 00 00 00 00 E0 10 00 00 37 0E 27 07 04 00 00 00 00 00 00 00 10 0E 00 00 BB 94 28 07 04 00 00 00 00 00 00 00 F8 16 00 00 BC 94 28 07 04 00 00 00 00 00 00 00 2C 10 00 00 27 A5 BF 07 04 00 00 00 00 00 00 00 2E 22 00 00 3E A5 BF 07 04 00 00 00 00 00 00 00 DA 2F 00 00 3F A5 BF 07 04 00 00 00 00 00 00 00 34 3A 00 00 40 A5 BF 07 04 00 00 00 00 00 00 00 08 52 00 00 50 A5 BF 07 04 00 00 80 FF FF FF FF DC 05 00 00 00 00 01 53 A5 BF 07 04 00 00 00 00 00 00 00 DC 05 00 00 54 A5 BF 07 04 00 00 00 00 00 00 00 10 0E 00 00 D0 C3 59 08 04 00 00 00 00 00 00 00 4E 0C 00 00 D1 C3 59 08 04 00 00 00 00 00 00 00 C0 08 00 00 D2 C3 59 08 04 00 00 00 00 00 00 00 06 09 00 00 D3 C3 59 08 04 00 00 80 FF FF FF FF 92 09 00 00 00 00 01 3F D0 5C 08 04 00 00 00 00 00 00 00 34 08 00 00 40 D0 5C 08 04 00 00 00 00 00 00 00 34 08 00 00 41 D0 5C 08 04 00 00 00 00 00 00 00 34 08 00 00 42 D0 5C 08 04 00 00 00 00 00 00 00 06 09 00 00 43 D0 5C 08 04 00 00 00 00 00 00 00 AA 0A 00 00 89 56 5E 08 04 00 00 00 00 00 00 00 D6 06 00 00 EA DC 5F 08 04 00 00 00 00 00 00 00 32 05 00 00 00 00 19 00 00 00 4B 6D 54 00 07 00 00 00 E5 2E 31 01 E6 2E 31 01 E7 2E 31 01 E8 2E 31 01 E9 2E 31 01 EA 2E 31 01 EB 2E 31 01 53 6D 54 00 05 00 00 00 27 2F 31 01 28 2F 31 01 29 2F 31 01 2A 2F 31 01 2B 2F 31 01 64 6D 54 00 05 00 00 00 D1 70 64 08 CD 70 64 08 CE 70 64 08 CF 70 64 08 D0 70 64 08 4C 6D 54 00 06 00 00 00 19 63 3D 01 02 63 3D 01 05 63 3D 01 06 63 3D 01 0A 63 3D 01 0C 63 3D 01 54 6D 54 00 04 00 00 00 78 F6 41 01 79 F6 41 01 7A F6 41 01 7B F6 41 01 55 6D 54 00 09 00 00 00 2F 2F 31 01 30 2F 31 01 31 2F 31 01 32 2F 31 01 33 2F 31 01 34 2F 31 01 35 FE FD 02 36 FE FD 02 37 FE FD 02 5D 6D 54 00 05 00 00 00 3D 63 3D 01 3E 63 3D 01 3F 63 3D 01 40 63 3D 01 41 63 3D 01 66 6D 54 00 05 00 00 00 D2 70 64 08 D3 70 64 08 D4 70 64 08 D5 70 64 08 D6 70 64 08 4E 6D 54 00 05 00 00 00 06 2F 31 01 07 2F 31 01 09 2F 31 01 0A 2F 31 01 A7 2E 31 01 56 6D 54 00 08 00 00 00 CE 2E 31 01 CF 2E 31 01 D0 2E 31 01 D1 2E 31 01 D2 2E 31 01 D3 2E 31 01 D4 2E 31 01 D5 2E 31 01 5E 6D 54 00 03 00 00 00 91 F6 41 01 92 F6 41 01 93 F6 41 01 4F 6D 54 00 05 00 00 00 18 2F 31 01 19 2F 31 01 1A 2F 31 01 1B 2F 31 01 1C 2F 31 01 6F 6D 54 00 08 00 00 00 12 C4 59 08 13 C4 59 08 14 C4 59 08 15 C4 59 08 16 C4 59 08 17 C4 59 08 18 C4 59 08 19 C4 59 08 5F 6D 54 00 05 00 00 00 71 2F 31 01 72 2F 31 01 73 2F 31 01 74 2F 31 01 75 2F 31 01 60 6D 54 00 04 00 00 00 B7 C3 59 08 B8 C3 59 08 B9 C3 59 08 BA C3 59 08 48 6D 54 00 08 00 00 00 CE 2E 31 01 CF 2E 31 01 D0 2E 31 01 D1 2E 31 01 D2 2E 31 01 D3 2E 31 01 D4 2E 31 01 D5 2E 31 01 50 6D 54 00 03 00 00 00 75 F6 41 01 76 F6 41 01 77 F6 41 01 49 6D 54 00 06 00 00 00 03 63 3D 01 04 63 3D 01 07 63 3D 01 08 63 3D 01 09 63 3D 01 0B 63 3D 01 51 6D 54 00 05 00 00 00 1F 2F 31 01 20 2F 31 01 21 2F 31 01 22 2F 31 01 23 2F 31 01 71 6D 54 00 06 00 00 00 7A C3 59 08 1A C4 59 08 7B C3 59 08 7C C3 59 08 7D C3 59 08 7E C3 59 08 59 6D 54 00 04 00 00 00 4E A1 98 00 4F A1 98 00 50 A1 98 00 51 A1 98 00 62 6D 54 00 06 00 00 00 C3 C3 59 08 C4 C3 59 08 C5 C3 59 08 C6 C3 59 08 C7 C3 59 08 C8 C3 59 08 4A 6D 54 00 05 00 00 00 CC 3B 58 08 CD 3B 58 08 CE 3B 58 08 26 3C 58 08 CF 3B 58 08 6A 6D 54 00 05 00 00 00 5D C3 59 08 5E C3 59 08 03 C3 59 08 60 C3 59 08 61 C3 59 08 5A 6D 54 00 03 00 00 00 81 F6 41 01 82 F6 41 01 83 F6 41 01 2A 00 00 00 02 D0 DE F3 08 00 95 D1 F0 08 00 24 58 F2 08 02 E1 85 23 0A 04 B9 85 23 0A 04 BA 85 23 0A 04 01 86 23 0A 04 FA 85 23 0A 04 35 0C 25 0A 02 80 77 8E 06 04 7D 85 23 0A 04 7E 85 23 0A 0B 8E FE 21 0A 0B 8D FE 21 0A 04 96 77 8E 06 04 98 77 8E 06 01 96 D1 F0 08 04 20 58 F2 08 04 32 0C 25 0A 04 33 0C 25 0A 04 34 0C 25 0A 02 48 0E 27 07 02 4A 0E 27 07 02 8B FE 21 0A 03 8C A4 BF 07 04 A6 85 23 0A 04 A7 85 23 0A 02 0D A5 BF 07 02 0B A5 BF 07 04 3E 2B C1 07 04 3A 0E 27 07 04 3B 0E 27 07 04 53 A5 BF 07 04 54 A5 BF 07 04 4D 2B C1 07 04 4E 2B C1 07 04 4F 2B C1 07 04 A8 94 28 07 04 AA 94 28 07 04 37 2B C1 07 04 2F 2B C1 07 04 3D 2B C1 07 05 00 00 00 04 84 FE 21 0A 04 85 FE 21 0A 04 86 FE 21 0A 04 87 FE 21 0A 04 88 FE 21 0A 03 00 00 00 04 00 B7 CE BE E2 42 00 B4 F5 BF ED B4 F5 20 BF B9 BB DA B0 ED 20 B8 DA C1 F8 20 C4 B3 B8 AF C5 CD B8 A6 20 BF F8 C7 D8 BF E4 3F 20 B1 D7 20 BA F1 B9 FD C0 CC 20 B1 C3 B1 DD C7 CF B8 E9 20 2D 2D 2D 2D 2D 3E 20 C5 AC B8 AF 0B 00 B8 C5 C1 F6 C4 C3 20 C7 CF C7 C1 53 00 C7 C7 B9 F6 C0 C7 20 C1 A4 BB F3 C0 BB 20 C7 E2 C7 D8 21 20 C7 C7 B9 F6 C0 C7 20 BC F8 B0 A3 BF A1 B4 C2 21 20 C1 C1 C0 BA 20 BE C6 C0 CC C5 DB C0 CC 20 C3 A3 BE C6 BF C3 20 B0 A1 B4 C9 BC BA C0 CC 20 B4 F5 BA ED B7 CE 20 55 50 B5 CB B4 CF B4 D9 2E 12 00 B8 DE C0 CC C7 C3 20 B7 CE BE E2 20 BD BA C5 B8 C0 CF 3E 00 B0 AD B7 C2 C7 D1 20 BF C9 BC C7 C0 CC 20 BA D9 BE EE C0 D6 B4 C2 20 B1 E2 B0 A3 C7 D1 C1 A4 20 C6 AF B1 DE 20 BE C6 C0 CC C5 DB B5 E9 C0 BB 20 B3 F5 C4 A1 C1 F6 20 B8 B6 BC BC BF E4 2E 57 C8 30 23 00 00 00 80 26 00 00 00 78 00 00 00 55 C8 30 23 00 00 00 80 14 00 00 00 78 00 00 00 5B C8 30 23 69 00 00 80 1A 00 00 00 79 00 00 00 59 C8 30 23 00 00 00 80 16 00 00 00 78 00 00 00 5F C8 30 23 65 00 00 80 18 00 00 00 79 00 00 00 5D C8 30 23 6D 00 00 80 20 00 00 00 78 00 00 00 43 C8 30 23 00 00 00 80 46 00 00 00 78 00 00 00 41 C8 30 23 00 00 00 80 24 00 00 00 79 00 00 00 47 C8 30 23 69 00 00 80 1E 00 00 00 78 00 00 00 45 C8 30 23 00 00 00 80 22 00 00 00 79 00 00 00 4B C8 30 23 00 00 00 80 2A 00 00 00 68 00 00 00 49 C8 30 23 69 00 00 80 06 00 00 00 68 00 00 00 4F C8 30 23 00 00 00 80 32 00 00 00 78 00 00 00 4D C8 30 23 00 00 00 80 2C 00 00 00 78 00 00 00 B3 C9 30 23 70 00 00 80 42 00 00 00 74 00 00 00 B1 C9 30 23 00 00 00 80 30 00 00 00 74 00 00 00 B7 C9 30 23 74 00 00 80 2E 00 00 00 79 00 00 00 B5 C9 30 23 69 00 00 80 34 00 00 00 79 00 00 00 BB C9 30 23 00 00 00 80 3E 00 00 00 78 00 00 00 B9 C9 30 23 00 00 00 80 38 00 00 00 78 00 00 00 BF C9 30 23 69 00 00 80 02 00 00 00 74 00 00 00 BD C9 30 23 00 00 00 80 3C 00 00 00 74 00 00 00 A3 C9 30 23 00 00 00 80 3A 00 00 00 79 00 00 00 A1 C9 30 23 70 00 00 80 40 00 00 00 79 00 00 00 A7 C9 30 23 00 00 00 80 28 00 00 00 68 00 00 00 A5 C9 30 23 74 00 00 80 44 00 00 00 68 00 00 00 AB C9 30 23 69 00 00 80 4A 00 00 00 78 00 00 00 A9 C9 30 23 00 00 00 80 5A 00 00 00 78 00 00 00 AF C9 30 23 00 00 00 80 48 00 00 00 78 00 00 00 AD C9 30 23 69 00 00 80 4C 00 00 00 79 00 00 00 93 C9 30 23 00 00 00 80 4E 00 00 00 79 00 00 00 91 C9 30 23 00 00 00 80 36 00 00 00 78 00 00 00 97 C9 30 23 70 00 00 80 52 00 00 00 78 00 00 00 95 C9 30 23 00 00 00 80 54 00 00 00 78 00 00 00 9B C9 30 23 00 00 00 80 56 00 00 00 79 00 00 00 99 C9 30 23 69 00 00 80 58 00 00 00 79 00 00 00 9F C9 30 23 00 00 00 80 5E 00 00 00 68 00 00 00 9D C9 30 23 00 00 00 80 FF FF 00 00 68 00 00 00 83 C9 30 23 69 00 00 80 7C 00 00 00 30 00 00 00 81 C9 30 23 00 00 00 80 02 00 00 00 30 00 00 00 87 C9 30 23 65 00 00 80 50 00 00 00 30 00 00 00 85 C9 30 23 71 00 00 80 64 00 00 00 30 00 00 00 8B C9 30 23 00 00 00 80 66 00 00 00 31 00 00 00 89 C9 30 23 00 00 00 80 68 00 00 00 31 00 00 00 8F C9 30 23 69 00 00 80 6A 00 00 00 32 00 00 00 8D C9 30 23 00 00 00 80 6C 00 00 00 32 00 00 00 F3 C9 30 23 00 00 00 80 6E 00 00 00 33 00 00 00 F1 C9 30 23 69 00 00 80 70 00 00 00 33 00 00 00 F7 C9 30 23 00 00 00 80 72 00 00 00 34 00 00 00 F5 C9 30 23 65 00 00 80 74 00 00 00 34 00 00 00 FB C9 30 23 71 00 00 80 76 00 00 00 35 00 00 00 F9 C9 30 23 00 00 00 80 78 00 00 00 35 00 00 00 FF C9 30 23 00 00 00 80 7A 00 00 00 36 00 00 00 C5 0F 00 00 69 00 6E 00 50 00 00 50 37 8C F1 00 E0 FD 7D 0F E0 7D BB 0C A4 C2 30 D1 20 00 08 B8 A8 BC 20 00 3A 00 20 00 31 00 5D 00 5C 00 6E 00 C8 B9 44 C7 D0 C5 1C C1 20 00 E0 AC F5 AC 44 BE 89 D5 74 C7 20 00 00 AC A5 B2 5C D5 20 00 E4 C0 74 C7 DD B2 20 00 8C BC EC B8 44 C7 20 00 C0 D0 E0 AC 20 00 23 00 63 00 E4 B9 B0 C6 20 00 60 BE 78 B9 20 00 8D C1 C4 B3 23 00 5C B8 20 00 74 C7 D9 B3 69 D5 C8 B2 E4 B2 2E 00 20 00 23 00 63 00 D4 C6 DC B4 F5 B9 D0 C5 1C C1 20 00 D0 C6 58 D5 94 B2 20 00 A9 BA 01 C8 C0 C9 7C B9 20 00 54 B3 14 BE 74 D0 AD B9 23 00 58 D5 74 BA 20 00 24 B1 44 BE 8C AC 74 C7 58 C1 44 C7 20 00 30 B5 7C B7 20 00 74 D5 F9 B2 20 00 04 C7 58 CE 4C AE C0 C9 20 00 90 C7 D9 B3 3C C7 00 00 05 00 6E E5 8A 00 23 FE 8F 06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 F4 01 00 00 08 01 00 00 03 00 00 00 1A 51 33 01 22 51 33 01 FF FF FF FF FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 6F E5 8A 00 24 FE 8F 06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 F4 01 00 00 5E 01 00 00 03 00 00 00 1A 51 33 01 22 51 33 01 FF FF FF FF FF FF FF FF 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 E3 62 54 00 CC 84 91 06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 64 00 00 00 63 00 00 00 0B 00 00 00 1A 51 33 01 1A 51 33 01 0E 00 00 00 12 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 E2 62 54 00 C7 84 91 06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 64 00 00 00 51 00 00 00 0B 00 00 00 1B 51 33 01 1B 51 33 01 0E 00 00 00 12 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 B6 B8 11 00 00 00 00 08 46 4D 00 C3 84 91 06 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 00 00 00 64 00 00 00 39 00 00 00 0B 00 00 00 1C 51 33 01 1C 51 33 01 0E 00 00 00 12 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 00");
    public static Packet warpCS(MapleClient c) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPEN.getValue());
        PacketProvider.addPlayerInfo(packet, c.getPlayer(), true);
        packet.write(warpCS);
	return packet.getPacket();
    }

    public static Packet useCharm(byte charmsleft, byte daysleft) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SHOW_ITEM_GAIN_INCHAT.getValue());
	packet.write(9);
	packet.write(1);
	packet.write(charmsleft);
	packet.write(daysleft);

	return packet.getPacket();
    }

    public static Packet itemExpired(int itemid) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.SHOW_STATUS_INFO.getValue());
	packet.write(2);
	packet.writeInt(itemid);

	return packet.getPacket();
    }

    public static Packet GoldenHammer(boolean start, boolean success) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.HAMMER_EFFECT.getValue());
        if (start) {
            packet.write(0);
            packet.writeInt(1);
        } else {
            packet.write(2);
            packet.writeInt(success ? 0 : 1);
        }

        return packet.getPacket();
    }

    public static Packet changePetName(MapleCharacter chr, String newname, int slot) {
        WritingPacket mplew = new WritingPacket();
        mplew.writeShort(SendPacketOpcode.PET_NAMECHANGE.getValue());

        mplew.writeInt(chr.getId());
        mplew.writeInt(0); //notsure
        mplew.writeMapleAsciiString(newname);
        mplew.writeInt(slot);

        return mplew.getPacket();
    }

    public static Packet showNotes(ResultSet notes, int count) throws SQLException {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.SHOW_NOTES.getValue());
	packet.write(3);
	packet.write(count);
	for (int i = 0; i < count; i++) {
	    packet.writeInt(notes.getInt("id"));
	    packet.writeMapleAsciiString(notes.getString("from"));
	    packet.writeMapleAsciiString(notes.getString("message"));
	    packet.writeLong(PacketProvider.getKoreanTimestamp(notes.getLong("timestamp")));
	    packet.write(0);
	    notes.next();
	}
	return packet.getPacket();
    }

    public static Packet useChalkboard(final int charid, final String msg) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CHALKBOARD.getValue());

	packet.writeInt(charid);
	if (msg == null) {
	    packet.write(0);
	} else {
	    packet.write(1);
	    packet.writeMapleAsciiString(msg);
	}

	return packet.getPacket();
    }

    public static Packet getTrockRefresh(MapleCharacter chr, byte vip, boolean delete) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.TROCK_LOCATIONS.getValue());
	packet.write(delete ? 2 : 3);
	packet.write(vip);
        chr.sendPacketTrock(packet, vip);
        
	return packet.getPacket();
    }

    public static Packet sendWishList(MapleCharacter chr, boolean update) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.write(0x0A); //1.2.203+
	int[] list = chr.getWishlist();
	for (int i = 0; i < 12; i++) {
	    packet.writeInt(list[i] != -1 ? list[i] : 0);
	}
	return packet.getPacket();
    }

    public static Packet showNXMapleTokens(MapleCharacter chr) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CS_UPDATE.getValue());
	packet.writeInt(chr.getCSPoints(1)); // NXCash
	packet.writeInt(chr.getCSPoints(2)); // MPoint
        packet.writeInt(0);
        
	return packet.getPacket();
    }

    public static Packet showBoughtCSItem(IItem item, int sn, int accid) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x0E); //1.2.203+
        addCashItemInformation(packet, item, accid, sn);
        packet.writeInt(0);
        
	return packet.getPacket();
    }
    
    public static Packet showBoughtPendentSlot(int data) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x5F); //1.2.203+
        packet.writeInt(data);
        packet.writeInt(0);
        
	return packet.getPacket();
    }
    
    public static Packet showBoughtCSPackages(List<Pair<Integer, CashItemInfo>> item, List<IItem> items, int accid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x48); //1.2.203+
        packet.write(item.size());
        int i = 0;
        for (Pair<Integer, CashItemInfo> p : item) {
            if (GameConstants.getInventoryType(p.getRight().getId()).equals(MapleInventoryType.EQUIP)) {
                Equip equip = (Equip) items.get(i);
                addCashItemInformation(packet, equip, accid, p.getLeft());
            } else {
                Item itemr = (Item) items.get(i);
                addCashItemInformation(packet, itemr, accid, p.getLeft());
            }
            i++;
        }
        packet.write0(6);
        
        return packet.getPacket();
    }
    
    public static Packet wrongSecondPassword() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x99);
        packet.write(0xBC);
        
        return packet.getPacket();
    }
    
    public static Packet wrongIDCode() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x99);
        packet.write(0xBB);
        
        return packet.getPacket();
    }
    
    public static Packet payBackItem(int point, int id) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x89); // 9A ¡æ 83
        packet.writeLong(id);
        packet.writeInt(point);
        packet.writeInt(0);
        
        return packet.getPacket();
    }
    
    public static Packet showRandomReward(int uniqueid, IItem item, short slot) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0xA7);
        packet.writeInt(uniqueid);
        packet.writeInt(0);
        packet.writeInt(0);
        PacketProvider.addItemInfo(packet, item, true, true, null);
        packet.writeShort(slot);
        packet.writeInt(0);
        
        return packet.getPacket();
    }

    public static Packet showCashInventory(MapleClient c) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.write(0x6); //1.2.203+
        packet.write(0); //1.2.174+
	packet.writeShort(c.getPlayer().getCashInventory().getInventory().size()); //CashInventory Size
        for (IItem item : c.getPlayer().getCashInventory().getInventory()) {
            addCashItemInformation(packet, item, c.getAccID(), item.getUniqueId());
        }
        if (c.getPlayer().getCashInventory().getInventory().size() > 0) {
             packet.writeInt(0);
        }
	packet.writeShort(c.getPlayer().getStorage().getSlots());
	packet.writeInt(c.getChrSlot()); //Ä³¸¯ÅÍ ½½·Ô
        packet.writeShort(c.getChrSlot());
     
	return packet.getPacket();
    }

    public static Packet takeOutFromCashInventory(IItem item, short position) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x21); //1.2.203+
        packet.write(0);
        packet.writeShort(position);
        PacketProvider.addItemInfo(packet, item, true, true, null);
        packet.writeInt(0);
        
        return packet.getPacket();
    }
    
    public static Packet putIntoCashInventory(IItem item, int accid) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x23); //1.2.203+
        addCashItemInformation(packet, item, accid, -1);
        
        return packet.getPacket();
    }
    
    public static void addCashItemInformation(WritingPacket packet, IItem item, int accid, int sn) { 
       packet.writeLong(item.getUniqueId());
       packet.writeLong(accid);
       packet.writeInt(item.getItemId());
       packet.writeInt(sn);
       packet.writeShort(item.getQuantity());
       packet.writeAsciiString(item.getGiftFrom(), 13);
       packet.writeLong(PacketProvider.MAX_TIME);
       for(int i = 0; i < 26; i++)
           packet.write(0);
           packet.write(PacketProvider.unk1);
           packet.write(PacketProvider.unk2);
           for(int i = 0; i < 16; i++)
                packet.write(0);
    }

    public static Packet showBoughtCSQuestItem(short position, int itemid) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.writeInt(0x191); //1.2.192+_
	packet.write(0);
	packet.writeShort(1);
	packet.write(position);
	packet.write(0);
	packet.writeInt(itemid);
        
	return packet.getPacket();
    }

    public static Packet wrongCouponCode() {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.write(0x54);
	packet.write(0xB9);

	return packet.getPacket();
    }

    public static Packet showCouponRedeemedItem(int itemid) {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.writeShort(0x3E);
	packet.writeInt(0);
	packet.writeInt(1);
	packet.writeShort(1);
	packet.writeShort(0x1A);
	packet.writeInt(itemid);
	packet.writeInt(0);

	return packet.getPacket();
    }
    
    public static Packet readyToPurchase() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x5F); //1.2.203+
        packet.writeInt(0);
        packet.writeInt(1);
        
        return packet.getPacket();
    }
    
    public static Packet sendCSFail(int err) {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x7F);
        packet.write(err);

        return packet.getPacket();
    }
    
    public static Packet sendPendont() {
        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
        packet.write(0x1F);
        packet.writeShort(0);
        packet.writeShort(0x1E);

        return packet.getPacket();
    }

    public static Packet enableUse() {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CHANNEL_SELECTED.getValue());
	packet.write(1);
	packet.writeInt(0);
        
	return packet.getPacket();
    }
    
    public static Packet showGifts() {
	WritingPacket packet = new WritingPacket();

	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.write(0x8); //1.2.203+
	packet.writeShort(0);

	return packet.getPacket();
    }
    
    public static Packet enableUse3(MapleCharacter c) {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CS_OPERATION.getValue());
	packet.write(0x5); //1.2.203+
        packet.writeInt(1);
        packet.write(0);
        
	return packet.getPacket();
    }
    
    public static Packet getCSCody() {
	WritingPacket packet = new WritingPacket();
	packet.writeShort(SendPacketOpcode.CS_CODY.getValue());
        packet.writeInt(0);
        packet.writeInt(0);
        packet.writeInt(0);
        
        return packet.getPacket();
    }
    
    public static Packet getOwlOpen() {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.OWL_OF_MINERVA.getValue());
        packet.write(9);
        packet.write(GameConstants.owlItems.length);
        for (int i : GameConstants.owlItems) {
            packet.writeInt(i); //these are the most searched items. too lazy to actually make
        }
        return packet.getPacket();
    }

    public static Packet getOwlSearched(final int itemSearch, final List<HiredMerchant> hms) {
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.OWL_OF_MINERVA.getValue());
        packet.write(8);
        packet.writeInt(0);
        packet.writeInt(itemSearch);
        int size = 0;

        for (HiredMerchant hm : hms) {
            size += hm.searchItem(itemSearch).size();
        }
        packet.writeInt(size);
        for (HiredMerchant hm : hms) {
            final List<MapleCharacterShopItem> items = hm.searchItem(itemSearch);
            for (MapleCharacterShopItem item : items) {
                packet.writeMapleAsciiString(hm.getOwnerName());
                packet.writeInt(hm.getMap().getId());
                packet.writeMapleAsciiString(hm.getDescription());
                packet.writeInt(item.item.getQuantity()); //I THINK.
                packet.writeInt(item.bundles); //I THINK.
                packet.writeInt(item.price);
                switch (InventoryHandler.OWL_ID) {
                    case 0:
                        packet.writeInt(hm.getOwnerId()); //store ID
                        break;
                    case 1:
                        packet.writeInt(hm.getStoreId());
                        break;
                    default:
                        packet.writeInt(hm.getObjectId());
                        break;
                }
                packet.write(hm.getFreeSlot() == -1 ? 1 : 0);
                packet.write(GameConstants.getInventoryType(itemSearch).getType()); //position?
                if (GameConstants.getInventoryType(itemSearch) == MapleInventoryType.EQUIP) {
                    PacketProvider.addItemInfo(packet, item.item, true, true, null);
                }
            }
        }
        return packet.getPacket();
    }
    
    public static Packet getOwlMessage(final int msg) {
        WritingPacket packet = new WritingPacket(3);
        packet.writeShort(SendPacketOpcode.OWL_RESULT.getValue());
        packet.write(msg);
        return packet.getPacket();
    }

    public static Packet pendantSlot(boolean p) { 
        WritingPacket packet = new WritingPacket();
        packet.writeShort(SendPacketOpcode.PENDANT_SLOT.getValue());
        packet.write(p ? 1 : 0);
        return packet.getPacket();
    }
}