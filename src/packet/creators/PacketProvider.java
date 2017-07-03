/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package packet.creators;

import constants.GameConstants;
import client.MapleClient;
import client.MaplePet;
import client.MapleCharacter;
import client.MapleQuestStatus;
import client.items.*;
import client.skills.InnerSkillValueHolder;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import client.stats.EquipStats;
import client.stats.GlobalBuffStat;
import launch.holder.MapleCoolDownValueHolder;
import packet.transfer.write.WritingPacket;
import server.items.ItemInformation;
import server.movement.LifeMovementFragment;
import server.shops.AbstractPlayerStore;
import server.shops.IMapleCharacterShop;
import server.shops.MapleShopItem;
import tools.BitTools;
import tools.HexTool;
import tools.KoreanDateUtil;
import tools.StringUtil;
import tools.Triple;
import java.util.Map.Entry;
import java.util.*;
import packet.transfer.write.Packet;
import server.items.MapleRing;
import server.quest.MapleQuest;
import tools.Pair;
import tools.RandomStream.Randomizer;

public class PacketProvider {

    public static final byte unk1[] = new byte[]{(byte) 0x00, (byte) 0x40, (byte) 0xE0, (byte) 0xFD};
    public static final byte unk2[] = new byte[]{(byte) 0x3B, (byte) 0x37, (byte) 0x4F, (byte) 0x01};
    public final static long FT_UT_OFFSET = 116445060000000000L; //KST   (GMT + 9:00)

    public final static long MAX_TIME = 150842304000000000L; //00 80 05 BB 46 E6 17 02
    public final static long ZERO_TIME = 94354848000000000L; //00 40 E0 FD 3B 37 4F 01
    public final static long PERMANENT = 150841440000000000L; // 00 C0 9B 90 7D E5 17 02

    public static final long getKoreanTimestamp(final long realTimestamp) {
        return getTime(realTimestamp);
    }

    public static final long getTime(long realTimestamp) {
        if (realTimestamp == -1) {
            return MAX_TIME;
        } else if (realTimestamp == -2) {
            return ZERO_TIME;
        } else if (realTimestamp == -3) {
            return PERMANENT;
        }
        return ((realTimestamp * 10000) + FT_UT_OFFSET);
    }
    
    public static void addZeroQuestInfo(final WritingPacket w, final MapleCharacter chr) {
        w.write(HexTool.getByteArrayFromHexString("01 AE 00 5F A0 00 00 F6 09 01 00 31 00 00 01 00 30 A1 9E 01 00 31 BF A0 00 00 82 1E 06 00 30 30 30 30 30 30 84 1C 00 00 42 9E 01 00 35 84 9C 01 00 31 A2 9E 01 00 31 4C 75 09 00 31 33 30 30 30 30 30 30 30 45 9C 01 00 31 65 7C 08 00 31 33 2F 30 38 2F 30 32 62 9F 01 00 31 A3 9E 01 00 31 03 9F 01 00 31 4D 75 05 00 73 74 61 72 74 44 9E 01 00 30 66 7C 01 00 31 C5 1D 00 00 63 9F 01 00 31 A4 9E 01 00 31 02 A1 01 00 31 04 9F 01 00 31 47 9C 01 00 31 64 9F 01 00 32 C3 A0 00 00 03 A1 01 00 33 05 9F 01 00 31 53 71 00 00 65 9F 01 00 30 A6 9E 01 00 31 8A 1B 09 00 33 32 32 30 30 30 31 30 30 06 9F 01 00 31 C1 04 01 00 30 50 75 08 00 31 33 2F 30 38 2F 30 32 22 04 00 00 2A 1C 00 00 A7 9E 01 00 31 4A 1C 01 00 30 6B 1B 01 00 30 07 9F 01 00 31 A8 1E 09 00 32 34 30 30 33 30 31 30 32 51 75 08 00 31 33 2F 30 38 2F 30 32 6C 7A 00 00 AD 79 00 00 A8 9E 01 00 31 4B 1C 08 00 31 33 2F 30 38 2F 30 33 08 9F 01 00 31 56 71 00 00 4B 9C 01 00 31 6B 7C 00 00 8E 79 00 00 66 A1 01 00 35 E4 43 01 00 30 A9 9E 01 00 31 63 25 01 00 30 09 9F 01 00 31 57 71 00 00 EA 1E 01 00 30 B9 4F 01 00 30 E5 43 01 00 30 2D 1C 01 00 30 18 51 01 00 30 0A 9F 01 00 31 62 67 00 00 EB 1E 08 00 31 33 2F 30 37 2F 33 30 2E 1C 04 00 31 30 34 34 23 67 00 00 9B 0F 01 00 30 0B 9F 01 00 31 EC 1E 01 00 32 2F 1C 01 00 30 6F 1C 01 00 31 0C 9F 01 00 31 82 69 01 00 33 ED 1E 08 00 31 33 2F 30 38 2F 30 32 30 1C 01 00 30 70 1C 08 00 31 33 2F 30 38 2F 30 32 57 75 08 00 31 33 2F 30 38 2F 30 32 31 1C 08 00 31 33 2F 30 38 2F 30 33 38 75 00 00 32 1C 01 00 31 17 37 09 00 32 34 30 30 30 30 30 30 30 72 1C 01 00 30 59 75 08 00 31 33 2F 30 38 2F 30 32 D6 79 01 00 30 B3 9C 01 00 31 3B 75 00 00 13 9D 01 00 31 9B 35 01 00 33 E6 0A 01 00 31 0A 07 00 00 90 A0 00 00 B4 9C 01 00 31 0D 44 09 00 32 34 30 30 30 30 30 30 30 D7 79 01 00 30 45 2C 01 00 33 64 2D 01 00 30 14 9D 01 00 31 C5 2C 08 00 31 33 2F 30 38 2F 30 32 88 69 01 00 36 98 79 06 00 30 34 38 35 30 30 B5 9C 01 00 31 15 9D 01 00 31 A9 29 03 00 31 38 31 C6 2C 01 00 30 B6 9C 01 00 31 16 9D 01 00 31 AA 29 00 00 B7 9C 01 00 31 F5 7E 00 00 17 9D 01 00 31 8B 69 01 00 31 77 9D 01 00 31 B1 A3 00 00 DB 79 01 00 30 18 9D 01 00 31 39 7C 00 00 78 9D 01 00 31 96 7F 00 00 7A 1C 01 00 30 19 9D 01 00 31 7C 7A 02 00 6F 6E 79 9D 01 00 31 F8 1E 01 00 31 18 1F 01 00 30 B3 A3 03 00 32 31 34 7A 9D 01 00 31 F9 1E 08 00 31 33 2F 30 38 2F 30 32 19 1F 08 00 31 33 2F 30 38 2F 30 33 DE 79 00 00 37 A1 01 00 33 AD 2B 00 00 5C 7C 09 00 32 34 30 30 30 30 30 30 30 7B 9D 01 00 31 DB 9D 01 00 31 3B 9E 01 00 31 5D 7C 00 00 7C 9D 01 00 30 A0 79 03 00 30 30 32 1B 1F 01 00 30 AD 0D 00 00 3C 9E 01 00 31 AF 2B 00 00 DC 1E 00 00 7D 9D 01 00 31 1C 1F 08 00 31 33 2F 30 38 2F 30 33 DD 9D 01 00 31 21 7A 09 00 31 30 31 30 30 30 30 30 30 B7 04 09 00 32 34 30 30 30 30 30 30 30 3D 9E 01 00 31 DD 1E 01 00 32 B8 A3 01 00 30 DE 9D 01 00 31 47 75 01 00 31 3E 9E 01 00 31 DF 9D 01 00 31 48 75 01 00 31 3F 9E 01 00 31 E0 9D 01 00 31 94 0A 01 00 31 B0 0E 00 00 4D 71 00 00 49 75 01 00 31 40 9E 01 00 31 B3 2B 00 00 82 9C 01 00 32 A0 9E 01 00 31 BE A0 00 00 0E 51 06 00 C5 BD BB F6 C1 DF 38 67 00 00 4A 75 01 00 31 41 9E 01 00 31 01 6E 01 26 7F 00 E8 CC A4 26 91 CE 01 EA 7E 00 B0 AB D1 18 8F CE 01 EB 7E 00 5C CF CD 1F 8F CE 01 EC 7E 00 5E 33 57 21 8F CE 01 ED 7E 00 A4 F6 7A 21 8F CE 01 EE 7E 00 30 7D C2 21 8F CE 01 EF 7E 00 76 40 E6 21 8F CE 01 F0 7E 00 4E B6 ED 26 8F CE 01 F1 7E 00 4E B6 ED 26 8F CE 01 F2 7E 00 C4 93 2F 28 8F CE 01 F3 7E 00 0A 57 53 28 8F CE 01 F4 7E 00 22 64 E2 28 8F CE 01 A8 43 00 54 E2 89 2B 8F CE 01 A9 43 00 54 E2 89 2B 8F CE 01 AA 43 00 54 E2 89 2B 8F CE 01 AB 43 00 54 E2 89 2B 8F CE 01 AC 43 00 54 E2 89 2B 8F CE 01 AE 43 00 54 E2 89 2B 8F CE 01 AF 43 00 54 E2 89 2B 8F CE 01 B0 43 00 54 E2 89 2B 8F CE 01 B1 43 00 54 E2 89 2B 8F CE 01 B2 43 00 54 E2 89 2B 8F CE 01 D3 43 00 64 60 A5 EA 8F CE 01 D4 43 00 B4 16 C6 2D 8F CE 01 B6 04 00 34 E8 B6 36 8F CE 01 BF 43 00 6C 92 FA 3D 8F CE 01 08 07 00 E2 52 B5 D8 8A CE 01 09 07 00 6E D9 FC D8 8A CE 01 BD 04 00 C4 DA A4 10 90 CE 01 BF 04 00 C4 DA A4 10 90 CE 01 FF 09 00 68 27 06 29 8F CE 01 AC 0D 00 D0 71 C2 DC 8A CE 01 AC 0E 00 26 B6 17 EA 8D CE 01 AD 0E 00 10 0D 12 EB 8D CE 01 AE 0E 00 86 EA 53 EC 8D CE 01 AF 0E 00 12 71 9B EC 8D CE 01 9A 0F 00 D2 22 ED 62 90 CE 01 40 9C 00 70 05 DC 96 83 CE 01 41 9C 00 FC 8B 23 97 83 CE 01 89 1B 00 08 87 3D B2 83 CE 01 42 9C 00 88 12 6B 97 83 CE 01 43 9C 00 5A 5C D6 97 83 CE 01 44 9C 00 B8 2C 89 98 83 CE 01 A4 9C 00 4C E6 D7 B0 83 CE 01 A5 9C 00 C2 C3 19 B2 83 CE 01 A6 9C 00 F2 DD 37 B3 83 CE 01 A7 9C 00 DC 34 32 B4 83 CE 01 A8 9C 00 68 BB 79 B4 83 CE 01 A9 9C 00 26 C0 68 B7 83 CE 01 AA 9C 00 6C 83 8C B7 83 CE 01 AB 9C 00 84 90 1B B8 83 CE 01 08 9D 00 4A 25 30 C1 83 CE 01 AC 9C 00 84 90 1B B8 83 CE 01 09 9D 00 4A 25 30 C1 83 CE 01 AD 9C 00 2A 88 7B BA 83 CE 01 0A 9D 00 20 37 AE C4 83 CE 01 AE 9C 00 70 4B 9F BA 83 CE 01 0B 9D 00 66 FA D1 C4 83 CE 01 AF 9C 00 2E 50 8E BD 83 CE 01 0C 9D 00 06 52 1C 0A 84 CE 01 72 9C 00 A2 83 83 99 83 CE 01 B0 9C 00 2E 50 8E BD 83 CE 01 0D 9D 00 E6 57 49 15 84 CE 01 73 9C 00 46 17 5A 9A 83 CE 01 0E 9D 00 56 95 75 59 84 CE 01 74 9C 00 46 17 5A 9A 83 CE 01 0F 9D 00 86 AF 93 5A 84 CE 01 6C 9D 00 F2 3B 08 66 84 CE 01 00 9F 00 F6 F1 39 76 88 CE 01 75 9C 00 90 A2 90 9D 83 CE 01 10 9D 00 30 6F 06 60 84 CE 01 6D 9D 00 7E C2 4F 66 84 CE 01 76 9C 00 C0 BC AE 9E 83 CE 01 11 9D 00 BC F5 4D 60 84 CE 01 6E 9D 00 0A 49 97 66 84 CE 01 01 9F 00 90 EF 31 22 89 CE 01 77 9C 00 92 06 1A 9F 83 CE 01 12 9D 00 78 96 B3 61 84 CE 01 6F 9D 00 50 0C BB 66 84 CE 01 78 9C 00 FC 2E 05 A9 83 CE 01 70 9D 00 40 8F 51 6C 84 CE 01 B0 1D 00 88 0E 8C 29 B6 CE 01 60 9F 00 6C 75 73 D7 8A CE 01 79 9C 00 E6 85 FF A9 83 CE 01 71 9D 00 D0 DD AB 6F 84 CE 01 61 9F 00 B2 38 97 D7 8A CE 01 7A 9C 00 2C 49 23 AA 83 CE 01 72 9D 00 A2 27 17 70 84 CE 01 7B 9C 00 5C 63 41 AB 83 CE 01 73 9D 00 90 46 24 74 84 CE 01 D0 9D 00 BA 63 0E CA 84 CE 01 7C 9C 00 18 04 A7 AC 83 CE 01 74 9D 00 DE 99 6D 7A 84 CE 01 D1 9D 00 46 EA 55 CA 84 CE 01 7D 9C 00 5E C7 CA AC 83 CE 01 75 9D 00 86 81 DD C5 84 CE 01 D2 9D 00 32 1A 05 4A 85 CE 01 00 A0 00 C4 70 7C 25 86 CE 01 7E 9C 00 02 5B A1 AD 83 CE 01 76 9D 00 86 81 DD C5 84 CE 01 D3 9D 00 04 64 70 4A 85 CE 01 E2 9F 00 50 0C BB 66 84 CE 01 01 A0 00 D6 F4 50 33 86 CE 01 7F 9C 00 1A 68 30 AE 83 CE 01 D4 9D 00 AC BF 59 4E 85 CE 01 C4 9F 00 B8 2C 89 98 83 CE 01 E3 9F 00 A2 27 17 70 84 CE 01 02 A0 00 BA 38 6E 83 87 CE 01 D5 9D 00 7E 09 C5 4E 85 CE 01 CF 1E 00 46 9B F3 9D 8F CE 01 C5 9F 00 46 17 5A 9A 83 CE 01 E4 9F 00 90 46 24 74 84 CE 01 03 A0 00 2C 94 60 A5 87 CE 01 D6 9D 00 28 C9 37 54 85 CE 01 C6 9F 00 92 06 1A 9F 83 CE 01 E5 9F 00 DE 99 6D 7A 84 CE 01 04 A0 00 CC 02 06 B5 87 CE 01 D7 9D 00 6E 8C 5B 54 85 CE 01 34 9E 00 06 6B DB 5D 85 CE 01 C7 9F 00 2C 49 23 AA 83 CE 01 E6 9F 00 86 81 DD C5 84 CE 01 D8 9D 00 BC DF A4 5A 85 CE 01 35 9E 00 68 03 A1 61 85 CE 01 C8 9F 00 5E C7 CA AC 83 CE 01 D9 9D 00 BC DF A4 5A 85 CE 01 36 9E 00 F4 89 E8 61 85 CE 01 B4 1E 00 C8 3A F3 B1 87 CE 01 C9 9F 00 1A 68 30 AE 83 CE 01 37 9E 00 2E 98 B5 6A 85 CE 01 D4 1E 00 C6 9A 9A 3B 8F CE 01 00 A1 00 32 BD E6 5B 85 CE 01 1B 1E 00 5C 03 F6 13 B7 CE 01 38 9E 00 3C F7 58 87 85 CE 01 01 A1 00 74 B8 F7 58 85 CE 01 39 9E 00 98 06 64 98 85 CE 01 0A A0 00 CC A5 E7 C6 87 CE 01 3A 9E 00 3E 2D 2C F4 85 CE 01 EC 9F 00 46 EA 55 CA 84 CE 01 0B A0 00 F8 9A D4 D6 87 CE 01 22 A1 00 CE 63 79 68 85 CE 01 60 A1 00 E0 01 BF 8E 87 CE 01 98 9E 00 C4 70 7C 25 86 CE 01 CE 9F 00 C2 C3 19 B2 83 CE 01 ED 9F 00 04 64 70 4A 85 CE 01 0C A0 00 3E 01 DA E8 87 CE 01 23 A1 00 B0 2A 4E 63 85 CE 01 61 A1 00 A8 9D 3E AB 87 CE 01 99 9E 00 D6 F4 50 33 86 CE 01 CF 9F 00 68 BB 79 B4 83 CE 01 EE 9F 00 7E 09 C5 4E 85 CE 01 0D A0 00 F6 F1 39 76 88 CE 01 05 A1 00 48 66 EC 5A 85 CE 01 24 A1 00 2A D0 A2 67 85 CE 01 62 A1 00 34 24 86 AB 87 CE 01 9A 9E 00 BA 38 6E 83 87 CE 01 D0 9F 00 84 90 1B B8 83 CE 01 EF 9F 00 6E 8C 5B 54 85 CE 01 0E A0 00 90 EF 31 22 89 CE 01 C8 A0 00 16 D0 37 C9 84 CE 01 25 A1 00 70 93 C6 67 85 CE 01 63 A1 00 94 58 C2 AD 87 CE 01 C0 A1 00 E2 52 B5 D8 8A CE 01 9B 9E 00 14 87 D1 A4 87 CE 01 D1 9F 00 70 4B 9F BA 83 CE 01 F0 9F 00 BC DF A4 5A 85 CE 01 C9 A0 00 5C 93 5B C9 84 CE 01 26 A1 00 AA A1 93 70 85 CE 01 64 A1 00 94 58 C2 AD 87 CE 01 9C 9E 00 A0 0D 19 A5 87 CE 01 D2 9F 00 2E 50 8E BD 83 CE 01 CA A0 00 82 2D 44 7B 84 CE 01 27 A1 00 90 30 7B 6E 85 CE 01 65 A1 00 12 C6 29 B5 87 CE 01 9D 9E 00 2C 94 60 A5 87 CE 01 CB A0 00 C8 F0 67 7B 84 CE 01 28 A1 00 1E 1B 4C 70 85 CE 01 9E 9E 00 FA B8 9A B4 87 CE 01 CC A0 00 0E B4 8B 7B 84 CE 01 29 A1 00 1E 1B 4C 70 85 CE 01 86 A1 00 FE 23 8F C9 87 CE 01 9F 9E 00 CC 02 06 B5 87 CE 01 FC 9E 00 E2 4E ED C5 87 CE 01 2A A1 00 AA A1 93 70 85 CE 01 87 A1 00 32 06 C0 CD 87 CE 01 FD 9E 00 CC A5 E7 C6 87 CE 01 14 A0 00 B2 38 97 D7 8A CE 01 2B A1 00 E8 1A 55 8E 85 CE 01 88 A1 00 FE 23 8F C9 87 CE 01 FE 9E 00 F8 9A D4 D6 87 CE 01 F6 9F 00 F4 89 E8 61 85 CE 01 2C A1 00 60 5C 20 91 85 CE 01 89 A1 00 C2 54 1A D1 87 CE 01 FF 9E 00 3E 01 DA E8 87 CE 01 D8 9F 00 4A 25 30 C1 83 CE 01 F7 9F 00 2E 98 B5 6A 85 CE 01 2D A1 00 E8 1A 55 8E 85 CE 01 8A A1 00 12 69 0B C7 87 CE 01 2E A1 00 1A 99 FC 90 85 CE 01 F0 A0 00 4A B2 68 CD 84 CE 01 D9 9F 00 66 FA D1 C4 83 CE 01 F8 9F 00 3C F7 58 87 85 CE 01 8B A1 00 A0 53 DC C8 87 CE 01 2F A1 00 E8 1A 55 8E 85 CE 01 F1 A0 00 D6 38 B0 CD 84 CE 01 F9 9F 00 98 06 64 98 85 CE 01 DA 9F 00 56 95 75 59 84 CE 01 8C A1 00 5A 90 B8 C8 87 CE 01 30 A1 00 2E DE 78 8E 85 CE 01 F2 A0 00 C0 8F AA CE 84 CE 01 FA 9F 00 3E 2D 2C F4 85 CE 01 DB 9F 00 86 AF 93 5A 84 CE 01 8D A1 00 FA FE 5D D8 87 CE 01 31 A1 00 EE E9 D2 A4 85 CE 01 F3 A0 00 C0 04 D6 4B 85 CE 01 DC 9F 00 78 96 B3 61 84 CE 01 8E A1 00 FC 62 E7 D9 87 CE 01 32 A1 00 34 AD F6 A4 85 CE 01 F4 A0 00 64 98 AC 4C 85 CE 01 8F A1 00 FA FE 5D D8 87 CE 01 33 A1 00 76 A8 07 A2 85 CE 01 F5 A0 00 F0 1E F4 4C 85 CE 01 90 A1 00 42 26 0B DA 87 CE 01 34 A1 00 1E 04 F1 A5 85 CE 01 F6 A0 00 AA 5B D0 4C 85 CE 01 91 A1 00 FA FE 5D D8 87 CE 01 54 A1 00 98 1E 71 27 86 CE 01 35 A1 00 70 93 C6 67 85 CE 01 F7 A0 00 7A 41 B2 4B 85 CE 01 92 A1 00 FA FE 5D D8 87 CE 01 55 A1 00 98 1E 71 27 86 CE 01 36 A1 00 70 93 C6 67 85 CE 01 F8 A0 00 06 C8 F9 4B 85 CE 01 93 A1 00 9A 85 10 77 88 CE 01 56 A1 00 10 60 3C 2A 86 CE 01 F9 A0 00 E6 CD 26 57 85 CE 01 94 A1 00 FA B9 4C 79 88 CE 01 57 A1 00 26 09 42 29 86 CE 01 38 A1 00 1E 04 F1 A5 85 CE 01 FA A0 00 86 99 EA 54 85 CE 01 95 A1 00 9A 85 10 77 88 CE 01 58 A1 00 98 1E 71 27 86 CE 01 FB A0 00 C6 30 72 50 85 CE 01 96 A1 00 40 7D 70 79 88 CE 01 59 A1 00 84 20 6A 12 87 CE 01 3A A1 00 1E 04 F1 A5 85 CE 01 FC A0 00 98 7A DD 50 85 CE 01 97 A1 00 56 26 76 78 88 CE 01 C5 A3 00 2E 0A CB 99 83 CE 01 5A A1 00 C8 51 4E 7C 87 CE 01 3B A1 00 56 3A BB F4 85 CE 01 FD A0 00 98 7A DD 50 85 CE 01 98 A1 00 10 63 52 78 88 CE 01 C6 A3 00 74 CD EE 99 83 CE 01 5B A1 00 26 22 01 7D 87 CE 01 FE A0 00 44 9E D9 57 85 CE 01 99 A1 00 56 26 76 78 88 CE 01 B8 A1 00 06 53 CE CE 84 CE 01 FF A0 00 A2 6E 8C 58 85 CE 01 5C A1 00 E8 61 CA 76 86 CE 01 9A A1 00 D6 B2 55 22 89 CE 01 B9 A1 00 4C 16 F2 CE 84 CE 01 5D A1 00 E0 01 BF 8E 87 CE 01 BA A1 00 92 D9 15 CF 84 CE 01 C9 A3 00 BA 90 12 9A 83 CE 01 5E A1 00 9A 3E 9B 8E 87 CE 01 BB A1 00 06 53 CE CE 84 CE 01 5F A1 00 98 DA 11 8D 87 CE 01 BC A1 00 5A EA C0 68 85 CE 01 BD A1 00 84 F0 4F F4 85 CE 01 BE A1 00 CC 02 06 B5 87 CE 01 BF A1 00 D6 B2 55 22 89 CE 01 AF A3 00 4C 16 F2 CE 84 CE 01 B0 A3 00 92 D9 15 CF 84 CE 01 B2 A3 00 4C 16 F2 CE 84 CE 01 B4 A3 00 60 2B 54 AE 83 CE 01 67 65 00 E0 3A BE 78 A1 CE 01 B5 A3 00 60 2B 54 AE 83 CE 01 90 65 00 8A 5A C2 D8 91 CE 01 54 65 00 9E CA DE 1C 8F CE 01 2B 67 00 FA 5F 44 D9 8A CE 01 54 67 00 9A C9 6F 11 87 CE 01 A5 29 00 3E 65 D6 37 8D CE 01 53 29 00 FC 7B A6 2D 89 CE 01 1E 69 00 A0 1F FA 97 83 CE 01 B4 2B 00 86 E6 8B D9 8A CE 01 BD 2B 00 A0 1F FA 97 83 CE 01 BE 2B 00 E6 E2 1D 98 83 CE 01 BF 2B 00 86 E6 8B D9 8A CE 01 79 2C 00 8C DA 7D 9A 83 CE 01 6A 30 00 E6 E2 1D 98 83 CE 01 6B 30 00 E6 E2 1D 98 83 CE 01 6C 30 00 E6 E2 1D 98 83 CE 01 A0 36 00 6C 3E 7B 58 84 CE 01 A1 36 00 6C 3E 7B 58 84 CE 01 C0 36 00 FA 5F 44 D9 8A CE 01 C1 36 00 14 3C 94 A9 83 CE 01 A3 36 00 E6 E2 1D 98 83 CE 01 A4 36 00 2E DD C6 C9 84 CE 01 20 37 00 D4 48 A0 84 84 CE 01 50 35 00 26 FE E1 78 A1 CE 01 21 37 00 74 A0 EA C9 84 CE 01 30 75 00 18 E5 5E 9E 8F CE 01 A6 36 00 90 8D 99 5C 85 CE 01 22 37 00 50 99 F3 72 85 CE 01 A7 36 00 66 FA D1 C4 83 CE 01 23 37 00 CA B3 73 F4 85 CE 01 32 75 00 5E A8 82 9E 8F CE 01 A8 36 00 C8 7F 04 11 87 CE 01 24 37 00 A0 B0 FA B6 87 CE 01 33 75 00 5E A8 82 9E 8F CE 01 25 37 00 D6 B2 55 22 89 CE 01 34 75 00 A4 6B A6 9E 8F CE 01 AA 36 00 24 25 8A 18 8F CE 01 35 75 00 EA 2E CA 9E 8F CE 01 AB 36 00 9A A5 AD 2B 8F CE 01 36 75 00 76 B5 11 9F 8F CE 01 AC 36 00 18 E7 C2 27 91 CE 01 28 37 00 6C 4C 37 1A 8F CE 01 37 75 00 BC 78 35 9F 8F CE 01 AD 36 00 18 E7 C2 27 91 CE 01 29 37 00 0A B5 23 DB 8F CE 01 AE 36 00 3E 39 84 2C 8F CE 01 39 75 00 1A 49 E8 9F 8F CE 01 3A 75 00 EE F6 DC A1 8F CE 01 B1 36 00 6E 25 8F 7A A1 CE 01 6B 37 00 9A 77 9A 78 A1 CE 01 0F 37 00 CC 9D FA 82 93 CE 01 14 37 00 88 02 EE 2D 89 CE 01 80 79 00 8A AE 9E DC 8A CE 01 B9 36 00 CC 44 01 C6 84 CE 01 16 37 00 E6 E2 1D 98 83 CE 01 81 79 00 94 A2 4D E4 8A CE 01 9B 36 00 54 E2 89 2B 8F CE 01 F8 36 00 E6 E2 1D 98 83 CE 01 82 79 00 94 A2 4D E4 8A CE 01 9D 36 00 6C 3E 7B 58 84 CE 01 9E 36 00 6C 3E 7B 58 84 CE 01 1E 37 00 78 67 4B 08 84 CE 01 62 7A 00 CC AD 77 EC 8D CE 01 1F 37 00 78 67 4B 08 84 CE 01 63 7A 00 2C E2 B3 EE 8D CE 01 64 7A 00 2C E2 B3 EE 8D CE 01 08 7A 00 70 41 4E ED 8D CE 01 65 7A 00 8A B2 66 EF 8D CE 01 09 7A 00 70 41 4E ED 8D CE 01 66 7A 00 D0 75 8A EF 8D CE 01 0A 7A 00 B6 04 72 ED 8D CE 01 67 7A 00 00 90 A8 F0 8D CE 01 68 7A 00 46 53 CC F0 8D CE 01 69 7A 00 30 AA C6 F1 8D CE 01 6A 7A 00 60 C4 E4 F2 8D CE 01 6B 7A 00 78 D1 73 F3 8D CE 01 94 79 00 DA 65 71 E4 8A CE 01 95 79 00 20 29 95 E4 8A CE 01 97 79 00 40 9D 0D 2E 8F CE 01 C7 7B 00 8C DA 7D 9A 83 CE 01 7C 79 00 D0 71 C2 DC 8A CE 01 7D 79 00 4E DF 29 E4 8A CE 01 7E 79 00 4E DF 29 E4 8A CE 01 9D 79 00 3C A9 A8 1F 91 CE 01 7F 79 00 44 EB 7A DC 8A CE 01 6C 7C 00 54 0D 2A 72 8C CE 01 12 7D 00 C6 54 D7 17 8F CE 01 13 7D 00 88 0E 8C 29 B6 CE 01 5A 7C 00 08 68 F5 A3 8F CE 01 5B 7C 00 4E 2B 19 A4 8F CE 01"));  
    }

    public static void addStartedQuestInfo(final WritingPacket w, final MapleCharacter chr) {
        final List<MapleQuestStatus> started = chr.getStartedQuests();
        w.write(1);
        w.writeShort(started.size());

        for (final MapleQuestStatus q : started) {
            w.writeShort(q.getQuest().getId());
            w.writeMapleAsciiString(q.getCustomData() != null ? q.getCustomData() : "");
        }
    }
    
    public static void addCompletedQuestInfo(final WritingPacket w, final MapleCharacter chr) {
        final List<MapleQuestStatus> completed = chr.getCompletedQuests();
        int time;
        w.write(1);
        w.writeShort(completed.size());
        for (final MapleQuestStatus q : completed) {
            w.writeShort(q.getQuest().getId());
            time = KoreanDateUtil.getQuestTimestamp(q.getCompletionTime());
            w.writeInt(time); // maybe start time? no effect.
            w.writeInt(time); // completion time
        }
    }

    public static void addPlayerInfo(final WritingPacket packet, final MapleCharacter chr, boolean cashshop) {
        for(int i = 0; i < 8; i++)
            packet.write(0xFF);
        packet.write(0);
        for(int i = 0; i < 12; i++)
            packet.write(0xFF);
        packet.writeInt(0);
        packet.writeShort(0);
        PacketProvider.addPlayerStats(packet, chr, true);
        packet.write(chr.getBuddylist().getCapacity());
        
        /* 정령의 축복 */
        if (chr.getBlessOfFairyOrigin() != null) {
            packet.write(1);
            packet.writeMapleAsciiString(chr.getBlessOfFairyOrigin());
        } else {
            packet.write(0);
        }
        
        /* 여제의 축복 */
        if (chr.getBlessOfEmpressOrigin() != null) {
            packet.write(1);
            packet.writeMapleAsciiString(chr.getBlessOfEmpressOrigin());
        } else {
            packet.write(0);
        }
        
        packet.write(0); //여제의 강화
        addMoneyInfo(packet, chr);
        addInventoryInfo(packet, chr);
        addSkillInfo(packet, chr);
        addCoolDownInfo(packet, chr);
        if(GameConstants.isZero(chr.getJob())) {
            addZeroQuestInfo(packet, chr);
        } else {
            addStartedQuestInfo(packet, chr);
            addCompletedQuestInfo(packet, chr);
        }
        
        addUnkInfo(packet, chr);
        addRingInfo(packet, chr);
        addRocksInfo(packet, chr);
        chr.QuestInfoPacket(packet);
        
        packet.writeShort(0);
        packet.write(1); //1.2.192+
        
        if (GameConstants.isWildHunter(chr.getJob())) {
            addWildHunterInfo(packet, chr);
        } else if (GameConstants.isZero(chr.getJob())) {
            chr.getStat().ZeroData(packet, chr);             
        }
    
        chr.getSteelSkills().connectData(packet, chr);
        
        packet.writeLong(0);
        if (!GameConstants.isZero(chr.getJob())) {
            packet.writeInt(0);
        }
        
        PacketProvider.addInnerStats(packet, chr);
        
        packet.writeLong(0);
        packet.write0(3);
        
        PacketProvider.addHonorInfo(packet, chr);
        
        if (GameConstants.isAngelicBuster(chr.getJob())) {
            packet.writeInt(21173); 
            packet.writeInt(37141); 
            packet.writeInt(1051291); //dressup suit cant unequip
            packet.write(0);
        } else {
            packet.write0(13);
        }
        
        packet.writeInt(-1);
        packet.write0(13);
        addMonsterLife(packet, chr);
        packet.writeInt(1);
        packet.writeInt(10);
        packet.writeLong(0);
        packet.write(0);
        packet.write(unk1);
        packet.write(unk2);
        packet.writeInt(0);
        packet.write(0);
        packet.writeInt(0); //1.2.220+
    }

    public static final void addWildHunterInfo(final WritingPacket packet, final MapleCharacter chr) {
        packet.writeLong(0);
        packet.write(GameConstants.getJaguarType(chr));
        for (int i = 0; i < 3; i++) {
            packet.writeInt(0);
        }
    }
    
    public static final void addUnkInfo(final WritingPacket packet, final MapleCharacter chr) {
        short size = 0;
        
        packet.writeShort(size);
        for (int i = 0; i < size; i++) {
            packet.writeInt(0);
            packet.writeInt(0);
            packet.writeInt(0);
            packet.writeInt(0);
            packet.writeInt(0);
        }
    }
    
    public static final void addMoneyInfo(final WritingPacket packet, final MapleCharacter chr) {
        packet.writeLong(chr.getMeso()); //Mesos
    }
    
    public static final void addHonorInfo(final WritingPacket packet, final MapleCharacter chr) {
        packet.writeInt(chr.getInnerExp()); //honor exp
        packet.writeInt(chr.getInnerLevel()); //honor level
    }
    
    public static void addRingInfo(final WritingPacket packet, final MapleCharacter chr) {
        Triple<List<MapleRing>, List<MapleRing>, List<MapleRing>> aRing = chr.getRings(true);
        List<MapleRing> cRing = aRing.getFirst();
        packet.writeShort(cRing.size());
        for (MapleRing ring : cRing) {
            packet.writeInt(ring.getPartnerChrId());
            packet.writeAsciiString(ring.getPartnerName(), 13);
            packet.writeLong(ring.getRingId());
            packet.writeLong(ring.getPartnerRingId());
        }
        List<MapleRing> fRing = aRing.getSecond();
        packet.writeShort(fRing.size());
        for (MapleRing ring : fRing) {
            packet.writeInt(ring.getPartnerChrId());
            packet.writeAsciiString(ring.getPartnerName(), 13);
            packet.writeLong(ring.getRingId());
            packet.writeLong(ring.getPartnerRingId());
            packet.writeInt(ring.getItemId());
        }
        List<MapleRing> mRing = aRing.getThird();
        packet.writeShort(mRing.size());
        int marriageId = 30000;
        for (MapleRing ring : mRing) {
            packet.writeInt(marriageId);
            packet.writeInt(chr.getId());
            packet.writeInt(ring.getPartnerChrId());
            packet.writeShort(3);
            packet.writeInt(ring.getItemId());
            packet.writeInt(ring.getItemId());
            packet.writeAsciiString(chr.getName(), 13);
            packet.writeAsciiString(ring.getPartnerName(), 13);
        }
    }
    
    public static final void addSkillInfo(final WritingPacket w, final MapleCharacter chr) {
        w.write(1);
        /*
        * 우선 패킷상으로는 스킬인포를 처리안한후 인게임시 DB에있는 스킬정보를 불러온후 패킷처리를 하게함.
        * 그 결과 재접속시 파일의 끝 현상이 사라짐.
        */
        w.writeShort(0); //Skill Size.
    }
   
    private static boolean isFortyJob(int job) {
        if (job / 10 == 43) {
            return job == 434;
        } else if (job / 100 == 22) {
            return job == 2219;
        } else {
            return job / 100 % 10 > 0 && job % 10 == 2;
        }
    }

    public static int checkHyper(int skillid) {
        final int job = skillid / 10000;
        if (!isFortyJob(job)) {
            return -2; //is not FortyJob
        }
        final int compare = skillid % 1000;
        if (30 <= compare && compare <= 52) {
            return 0; //passive
        } else if (53 <= compare && compare <= 60 || 30 <= compare && compare <= 32) {
            return 1; //active
        }
        return -1; //is not Hyper
    }

    public static final void addCoolDownInfo(final WritingPacket w, final MapleCharacter chr) {
        w.writeShort(0);
        w.writeShort(chr.getAllCooldowns().size());
        for (final MapleCoolDownValueHolder cooling : chr.getAllCooldowns()) {
            w.writeInt(cooling.skillId);
            w.writeInt((int) (cooling.length + cooling.startTime - System.currentTimeMillis()) / 1000);
        }
    }

    public static final void addRocksInfo(final WritingPacket w, final MapleCharacter chr) {
        chr.sendPacketTrock(w);
    }

    public static final void addInnerStats(final WritingPacket w, final MapleCharacter player) {
        final List<InnerSkillValueHolder> skills = player.getInnerSkills();
        w.writeShort(skills.size());
        for (int i = 0; i < skills.size(); ++i) {
            w.write(i + 1);
            w.writeInt(skills.get(i).getSkillId()); //스킬 id
            w.write(skills.get(i).getSkillLevel()); //옵션 (x값, 최대값 = maxLevel)
            w.write(skills.get(i).getRank());
        }
    }

    public static void addInventoryInfo(WritingPacket w, MapleCharacter chr) {
        w.writeLong(0); //1.2.201+
        
        w.writeInt(chr.getId());
        w.write0(29); 
        w.writeShort(0); //1.2.220+
        w.write(chr.getInventory(MapleInventoryType.EQUIP).getSlotLimit()); //equip slots
        w.write(chr.getInventory(MapleInventoryType.USE).getSlotLimit()); //use slots
        w.write(chr.getInventory(MapleInventoryType.SETUP).getSlotLimit()); //set-up slots
        w.write(chr.getInventory(MapleInventoryType.ETC).getSlotLimit()); //etc slots
        w.write(chr.getInventory(MapleInventoryType.CASH).getSlotLimit()); //cash slots

        MapleQuestStatus stat = chr.getQuestNoAdd(MapleQuest.getInstance(GameConstants.PENDANT_SLOT));
        if (stat != null && stat.getCustomData() != null && Long.parseLong(stat.getCustomData()) > System.currentTimeMillis()) {
            w.write(new byte[]{0, (byte) 0xC0, (byte) 0xEC, (byte) 0x3A, (byte) 0xD2, (byte) 0xB3, (byte) 0xFF, 1});
        } else {
            w.write(unk1);
            w.write(unk2);
        }
        w.write(0);

        MapleInventory iv = chr.getInventory(MapleInventoryType.EQUIPPED);
        Collection<IItem> equippedC = iv.list();
        List<IItem> equipped = new ArrayList<IItem>(equippedC.size());

        for (IItem item : equippedC) {
            equipped.add((IItem) item);
        }
        /* 장착중인 아이템 시작 */ 
        Collections.sort(equipped);
        for (IItem item : equipped) {
            if (item.getPosition() < 0 && item.getPosition() > -100) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 장착중인 아이템 종료 */
        w.writeShort(0);
        /* 장착중인 캐시아이템 시작 */
        for (IItem item : equipped) {
            if (item.getPosition() <= -100 && item.getPosition() > -1000) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 장착중인 캐시아이템 종료 */
        w.writeShort(0);
        /* 장비 인벤토리 시작 */
        iv = chr.getInventory(MapleInventoryType.EQUIP);
        for (IItem item : iv.list()) {
            addItemInfo(w, item, false, false, null);
        }
        /* 장비 인벤토리종료 */
        w.writeShort(0);
        /* 에반 장비 인벤토리 시작 */
        for (IItem item : equipped) {
            if (item.getPosition() <= -1000 && item.getPosition() > -1100) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 에반 장비 인벤토리 종료 */
        w.writeShort(0);
        /* 메카닉 장비 인벤토리 시작 */
        for (IItem item : equipped) {
            if (item.getPosition() <= -1100 && item.getPosition() > -1200) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 메카닉 장비 인벤토리 종료 */
        w.writeShort(0);
        /* 안드로이드 장비 인벤토리 시작 */
        for (IItem item : equipped) {
            if (item.getPosition() <= -1200 && item.getPosition() > -1300) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 안드로이드 장비 인벤토리 종료 */
        w.writeShort(0);
        for (IItem item : equipped) {
            if (item.getPosition() <= -1300 && item.getPosition() > -1400) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 드레스업 캐쉬 종료 */
        w.writeShort(0); //v169
        w.writeShort(0); //v182
        for (IItem item : equipped) {
            if (item.getPosition() <= -1500 && item.getPosition() > -2000) {
                addItemInfo(w, item, false, false, null);
            }
        }
        /* 제로 베타 옷 종료 */
        w.writeShort(0); //v183
        w.writeShort(0); //v193
        w.writeShort(0); //v201
        /* 소비 인벤토리 시작 */
        iv = chr.getInventory(MapleInventoryType.USE);
        for (IItem item : iv.list()) {
            addItemInfo(w, item, false, false, null);
        }
        /* 소비 인벤토리 종료 */
        w.write(0);
        /* 설치 인벤토리 시작 */
        iv = chr.getInventory(MapleInventoryType.SETUP);
        for (IItem item : iv.list()) {
            addItemInfo(w, item, false, false, null);
        }
        /* 설치 인벤토리 종료 */
        w.write(0);
        /* 기타 인벤토리 시작 */
        iv = chr.getInventory(MapleInventoryType.ETC);
        for (IItem item : iv.list()) {
            addItemInfo(w, item, false, false, chr);
        }
        /* 기타 인벤토리 종료 */
        w.write(0);
        /* 캐시 인벤토리 시작 */
        iv = chr.getInventory(MapleInventoryType.CASH);
        for (IItem item : iv.list()) {
            addItemInfo(w, item, false, false, chr);
        }
        /* 캐시 인벤토리 종료 */
        w.write(0);
        w.writeInt(0);
        w.writeInt(chr.getExtendedSlots().size());
        for (int i = 0; i < chr.getExtendedSlots().size(); i++) {
            w.writeInt(i);
            w.writeInt(chr.getInventory(MapleInventoryType.ETC).findByUniqueId(chr.getExtendedSlot(i)).getItemId());
            for (IItem item : chr.getInventory(MapleInventoryType.ETC).list()) {
                if (item.getPosition() > (i * 100 + 100) && item.getPosition() < (i * 100 + 200)) {
                    addItemInfo(w, item, false, false, false, true, chr);
                }
            }
            w.writeInt(-1);
        }
        w.writeLong(0); //1.2.173+
        w.write(0); //1.2.173+
    }

    public static final void addPlayerStats(final WritingPacket w, final MapleCharacter chr, final boolean ingame) {
        w.writeInt(chr.getId()); // character id
        w.writeAsciiString(chr.getName(), 13);
        w.write(chr.getGender()); // gender (0 = male, 1 = female)
        w.write(chr.getSkinColor()); // skin color
        w.writeInt(chr.getFace()); // face
        w.writeInt(chr.getHair()); // hair
        w.write(0xFF); //1.2.220+ 스타포스 관련 패킷 추정.
        w.writeShort(0); //1.2.220+ 스타포스 관련 패킷 추정.
        w.write(chr.getLevel()); // level
        w.writeShort(chr.getJob()); // job
        chr.getStat().connectData(w);
        w.writeShort(chr.getRemainingAp()); // remaining ap
        if (GameConstants.isExtendedSPJob(chr.getJob())) {
            w.write(chr.getRemainingSpSize());
            for (int i = 0; i < chr.getRemainingSps().length; i++) {
                if (chr.getRemainingSp(i) > 0) {
                    w.write(i + 1);
                    w.writeInt(chr.getRemainingSp(i));
                }
            }
        } else {
            w.writeShort(chr.getRemainingSp()); // remaining sp
        }
        w.writeLong(chr.getExp()); // exp
        w.writeInt(chr.getFame()); // fame
        w.writeShort(chr.getWP());
        w.writeShort(GameConstants.isDemonAvenger(chr.getJob()) ? 1 : 0);
        w.writeInt(chr.getMapId()); // current map id
        w.write(chr.getInitialSpawnpoint()); // spawnpoint
        w.write(chr.getSubcategory());
        w.write(0);
        if (GameConstants.isDemonSlayer(chr.getJob()) || GameConstants.isDemonAvenger(chr.getJob()) || GameConstants.isXenon(chr.getJob())) {
            w.writeInt(chr.getSecondFace());
        }
        w.write(0);
        w.writeInt(chr.getClient().getLastConnection());
        addAdditionalStats(w, chr);
        w.write(0);
        w.write(unk1);
        w.write(unk2);
        if (ingame) {
            w.writeInt(0);    //배틀 경험치
            w.write(10);      //배틀 등급
            w.writeInt(0);    //보유 배틀 포인트 (BP)
            w.write(5);       //고정
            w.write(5);       //156 new
            w.writeInt(0);
            w.write(0);
            w.write(unk2);
            w.write(unk1);
            w.write0(86);
            w.write(unk2);
            w.write(unk1);
        } else {
            w.writeInt(0);
            w.write(0xDB);
            w.writeInt(9);
            w.write(0);
            w.write(1);
            w.writeInt(0);
            w.write(0);
            w.write(unk2);
            w.write(unk1);
            w.write0(86); // 1.2.180 new
            w.write(unk2);
            w.write(unk1);
        }
    }

    public static void addAdditionalStats(WritingPacket w, MapleCharacter chr) {
        w.writeInt(chr.getStat().getAmbition()); //카리스마
        w.writeInt(chr.getStat().getInsight());  //통찰력
        w.writeInt(chr.getStat().getWillPower());//의지
        w.writeInt(chr.getStat().getDiligence());//손재주
        w.writeInt(chr.getStat().getEmpathy());  //감성
        w.writeInt(chr.getStat().getCharm());    //매력
        w.writeShort(chr.getTodayCharisma());     //오늘의 카리스마
        w.writeShort(chr.getTodayInsight());     //오늘의 통찰력
        w.writeShort(chr.getTodayWillPower());     //오늘의 의지
        w.writeShort(chr.getTodayDiligence());     //오늘의 손재주
        w.writeShort(chr.getTodayEmpathy());     //오늘의 감성
        w.writeShort(chr.getTodayCharm());     //오늘의 매력
    }
    
    public static void addMonsterLife(WritingPacket packet, MapleCharacter chr) {
        packet.write(HexTool.getByteArrayFromHexString("06 00 BB FD BC BA C1 DF"));
        packet.write0(29);
    }

    public static void addPlayerLooks(final WritingPacket w, final MapleCharacter chr, final boolean mega) {
        w.write(chr.getGender());
        if ((chr.getGender() == 0 && chr.getSecondGender() == 1) && GameConstants.isZero(chr.getJob())) { // 알파를 addPlayerLooks에서 처리하는 경우.
            w.write(chr.getSkinColor());
            w.writeInt(chr.getFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getHair());
        } else if ((chr.getGender() == 1 && chr.getSecondGender() == 0) && GameConstants.isZero(chr.getJob())) { //베타를 addPlayerLooks에서 처리하는 경우.
            w.write(chr.getSecondSkinColor());
            w.writeInt(chr.getSecondFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getSecondHair());
        } else { //제로 이외 직업군 or 제로 직업군 오류.
            w.write(chr.getSkinColor());
            w.writeInt(chr.getFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getHair());
        }

        final Map<Short, Integer> myEquip = new LinkedHashMap<Short, Integer>();
        final Map<Short, Integer> maskedEquip = new LinkedHashMap<Short, Integer>();
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);

        for (final IItem item : equip.list()) {
            short pos_ = 0; 
            if (GameConstants.isZero(chr.getJob()) && chr.getSecondGender() == 0) {
                if (item.getPosition() <= -1499 && item.getPosition() >= -1508) {
                    pos_ = BetaSlot(item.getPosition());
                }
            }
            IEquip item_ = (IEquip) item;
            short pos = pos_ == 0 ? (short) (item.getPosition() * -1) : pos_;
            if ((!GameConstants.isZero(chr.getJob())
                   || (chr.getSecondGender() == 1 && pos != 10) 
                   || (chr.getSecondGender() == 0 && pos != 11))) { 
                if (pos < 100 && myEquip.get(pos) == null) {
                    String lol = ((Integer) item.getItemId()).toString();
                    String ss = lol.substring(0, 3);
                    int moru = Integer.parseInt(ss + ((Integer) item_.getPotential7()).toString());
                    myEquip.put(pos, item_.getPotential7() != 0 ? moru : item.getItemId());
                } else if (pos > 100 && pos != 111) { 
                    pos -= 100;
                    if (myEquip.get(pos) != null) {
                        maskedEquip.put(pos, myEquip.get(pos));
                    }
                    String lol = ((Integer) item.getItemId()).toString();
                    String ss = lol.substring(0, 3);
                    int moru = Integer.parseInt(ss + ((Integer) item_.getPotential7()).toString());
                    myEquip.put(pos, item_.getPotential7() != 0 ? moru : item.getItemId());
                } else if (myEquip.get(pos) != null) {
                    maskedEquip.put(pos, item.getItemId());
                }   
            }
        }

        for (final Entry<Short, Integer> entry : myEquip.entrySet()) {
            w.write(entry.getKey());
            w.writeInt(entry.getValue());
        }
        w.write(0xFF); // end of visible items

        /* masked items */
        for (final Entry<Short, Integer> entry : maskedEquip.entrySet()) {
            w.write(entry.getKey());
            w.writeInt(entry.getValue());
        }
        w.write(0xFF); // ending markers

        IItem cWeapon = equip.getItem((byte) -111);
        IItem weapon = equip.getItem((byte) -11);
        IItem sWeapon = equip.getItem((byte) -10);
        w.writeInt(cWeapon != null ? cWeapon.getItemId() : 0);
        w.writeInt(weapon != null ? weapon.getItemId() : 0); 
        w.writeInt(sWeapon != null && (!GameConstants.isZero(chr.getJob())) ? sWeapon.getItemId() : 0); 
        w.write(0);
        for (int i = 0; i < 3; i++) {
            if (chr.getPet(i) != null) {
                w.writeInt(chr.getPet(i).getPetItemId());
            } else {
                w.writeInt(0);
            }
        }
        if (GameConstants.isDemonSlayer(chr.getJob()) || GameConstants.isDemonAvenger(chr.getJob()) || GameConstants.isXenon(chr.getJob())) {
            w.writeInt(chr.getSecondFace());
        }
        if (GameConstants.isZero(chr.getJob())) { 
            w.write(chr.getSecondGender());
        }
       w.writeShort(0); //1.2.220+
    }
    
    public static void addPlayerLooksZero(final WritingPacket w, final MapleCharacter chr, final boolean mega) {
        w.write(chr.getSecondGender());
        if ((chr.getGender() == 0 && chr.getSecondGender() == 1) && GameConstants.isZero(chr.getJob())) { //베타를 addPlayerLooksZero에서 처리하는 경우.
            w.write(chr.getSecondSkinColor());
            w.writeInt(chr.getSecondFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getSecondHair());
        } else if ((chr.getGender() == 1 && chr.getSecondGender() == 0) && GameConstants.isZero(chr.getJob())) { //알파를 addPlayerLooksZero에서 처리하는 경우.
            w.write(chr.getSkinColor());
            w.writeInt(chr.getFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getHair());
        } else { //제로 오류.
            w.write(chr.getSecondSkinColor());
            w.writeInt(chr.getSecondFace());
            w.writeInt(chr.getJob());
            w.write(mega ? 0 : 1);
            w.writeInt(chr.getSecondHair());
        }
       
        final Map<Short, Integer> myEquip = new LinkedHashMap<Short, Integer>();
        final Map<Short, Integer> maskedEquip = new LinkedHashMap<Short, Integer>();
        MapleInventory equip = chr.getInventory(MapleInventoryType.EQUIPPED);
        

        for (final IItem item : equip.list()) {
            short pos_ = 0;
            if (GameConstants.isZero(chr.getJob()) && chr.getSecondGender() == 1) {
                if (item.getPosition() <= -1499 && item.getPosition() >= -1508) {
                    pos_ = BetaSlot(item.getPosition());
                }
            }
            IEquip item_ = (IEquip) item;
            short pos = pos_ == 0 ? (short) (item.getPosition() * -1) : pos_;
            if ((!GameConstants.isZero(chr.getJob())
                   || (chr.getSecondGender() == 1 && pos != 11) 
                   || (chr.getSecondGender() == 0 && pos != 10))) {
                if (pos < 100 && myEquip.get(pos) == null) {
                    String lol = ((Integer) item.getItemId()).toString();
                    String ss = lol.substring(0, 3);
                    int moru = Integer.parseInt(ss + ((Integer) item_.getPotential7()).toString());
                    myEquip.put(pos, item_.getPotential7() != 0 ? moru : item.getItemId());
                } else if (pos > 100 && pos != 111) {
                    pos -= 100;
                    if (myEquip.get(pos) != null) {
                        maskedEquip.put(pos, myEquip.get(pos));
                    }
                    String lol = ((Integer) item.getItemId()).toString();
                    String ss = lol.substring(0, 3);
                    int moru = Integer.parseInt(ss + ((Integer) item_.getPotential7()).toString());
                    myEquip.put(pos, item_.getPotential7() != 0 ? moru : item.getItemId());
                } else if (myEquip.get(pos) != null) {
                    maskedEquip.put(pos, item.getItemId());
                }
            }
        }
        
        for (final Entry<Short, Integer> entry : myEquip.entrySet()) {
            w.write(entry.getKey());
            w.writeInt(entry.getValue());
        }
        w.write(0xFF); // end of visible items

        /* masked items */
        for (final Entry<Short, Integer> entry : maskedEquip.entrySet()) {
            w.write(entry.getKey());
            w.writeInt(entry.getValue());
        }
        w.write(0xFF); // ending markers

        IItem cWeapon = equip.getItem((short) -111); 
        IItem weapon = equip.getItem((byte) -11);
        IItem sWeapon = equip.getItem((byte) -10);
        w.writeInt(cWeapon != null ? cWeapon.getItemId() : 0);
        w.writeInt(weapon != null ? weapon.getItemId() : 0); 
        w.writeInt(sWeapon != null && (!GameConstants.isZero(chr.getJob())) ? sWeapon.getItemId() : 0); 
        w.write(GameConstants.isMercedes(chr.getJob()) ? 1 : 0);
        for (int i = 0; i < 3; i++) {
            if (chr.getPet(i) != null) {
                w.writeInt(chr.getPet(i).getPetItemId());
            } else {
                w.writeInt(0);
            }
        }
        if (GameConstants.isZero(chr.getJob())) {
            w.write(chr.getGender());
        }
       w.writeShort(0); //1.2.220+
    }
    
    public static short BetaSlot(short slot) {
        switch (slot) {
            case -1500:
                return -100;
            case -1501:
                return -101;
            case -1499:
                return -102;
            case -1502:
                return -103;
            case -1504:
                return -104;
            case -1507:
                return -105;
            case -1508:
                return -106;
            case -1505:
                return -107;
            case -1503:
                return -108;
            case -1506:
                return -110;
        }
        return 0;
    }

    public static final void addExpirationTime(final WritingPacket w, final long time) {
        if (time != -1) {
            w.write(242);
            w.write(127);
            w.writeInt(KoreanDateUtil.getItemTimestamp(time));
            w.write(1);
        } else {
            w.writeShort(1408); // 80 05
            w.writeInt(400967355);
            w.write(2);
        }
    }

    public static final void addStarForceItemInfo(final WritingPacket w, final IItem item) {
        addItemInfo(w, item, true, true, false, false, null);
    }

    public static final void addItemInfo(final WritingPacket w, final IItem item, final boolean zeroPosition, final boolean leaveOut, final MapleCharacter chr) {
        addItemInfo(w, item, zeroPosition, leaveOut, false, false, chr);
    }

    public static final void addItemInfo(final WritingPacket w, final IItem item, final boolean zeroPosition, final boolean leaveOut, final boolean trade, final MapleCharacter chr) {
        addItemInfo(w, item, zeroPosition, leaveOut, trade, false, chr);
    }
    
    public static final void addItemInfo(final WritingPacket w, final IItem item, final boolean zeroPosition, final boolean leaveOut, final boolean trade, final boolean bagSlot, final MapleCharacter chr) {
        short pos = item.getPosition();
        if (zeroPosition) {
            if (!leaveOut) {
                w.write(0);
            }
        } else {
            if (pos <= -1) {
                pos *= -1;
                if (pos > 100 && pos < 1000) {
                    pos -= 100;
                }
            }
            if (bagSlot) {
                w.writeInt((pos % 100) - 1);
            } else if (!trade && item.getType() == 1) {
                w.writeShort(pos);
            } else {
                w.write(pos);
            }
        }
        w.write(item.getPet() != null ? 3 : item.getType());
        w.writeInt(item.getItemId());

        if (item.getPet() != null) { // Pet
            final MaplePet pet = item.getPet();
            addPetItemInfo(chr, w, pet, true, false);
            return;
        } else if (item.isCash()) {
            w.write(1);
            w.writeLong(item.getUniqueId());
            w.writeLong(getTime(item.getExpiration() <= System.currentTimeMillis() ? -1 : item.getExpiration()));
        } else {
            w.write(0);
            w.writeLong(getTime(item.getExpiration() <= System.currentTimeMillis() ? -1 : item.getExpiration()));
        }
        w.writeInt(chr == null ? -1 : chr.getExtendedSlots().indexOf(item.getUniqueId()));

        if (item.getType() == 1) {
            final Equip equip = (Equip) item;
            int equipStats = 0;
            /* <150제 아이템 보공,방무 시작>*/
            if(equip.getItemId() == 1003797 || equip.getItemId() == 1003798 || equip.getItemId() == 1003799 || equip.getItemId() == 1003800 || equip.getItemId() == 1003801
                    || equip.getItemId() == 1042254 || equip.getItemId() == 1042255 || equip.getItemId() == 1042256 || equip.getItemId() == 1042257 || equip.getItemId() == 1042258
                    || equip.getItemId() == 1062165 || equip.getItemId() == 1062166 || equip.getItemId() == 1062167 || equip.getItemId() == 1062168 || equip.getItemId() == 1062169) {
                equip.setIgnoreWdef((short)10);                
            }
            if(equip.getItemId() == 1432167 || equip.getItemId() == 1212063 || equip.getItemId() == 1222058 || equip.getItemId() == 1232057 || equip.getItemId() == 1242060
                   || equip.getItemId() == 1242061 || equip.getItemId() == 1302275 || equip.getItemId() == 1312153 || equip.getItemId() == 1322203 || equip.getItemId() == 1332225
                    || equip.getItemId() == 1342082 || equip.getItemId() == 1362090 || equip.getItemId() == 1372177 || equip.getItemId() == 1382208 || equip.getItemId() == 1402196
                    || equip.getItemId() == 1412135 || equip.getItemId() == 1422140 || equip.getItemId() == 1432167 || equip.getItemId() == 1442223 || equip.getItemId() == 1452205
                    || equip.getItemId() == 1462193 || equip.getItemId() == 1472214 || equip.getItemId() == 1482168 || equip.getItemId() == 1492179 || equip.getItemId() == 1522094
                    || equip.getItemId() == 1532098) {
                equip.setBossDamage((byte) 30);
                equip.setIgnoreWdef((short)10);
            }
            /* <150제 아이템 보공,방무 종료>*/
            try {
                for (EquipStats equipstat : EquipStats.values()) {
                    switch (equipstat.name()) {
                        case "UPGRADE": {
                            equipStats |= equip.getUpgradeSlots() > 0 ? EquipStats.UPGRADE.getValue() : 0;
                            break;
                        }
                        case "LEVEL":
                            equipStats |= equip.getLevel() > 0 ? EquipStats.LEVEL.getValue() : 0;
                            break;
                        case "STR":
                            equipStats |= equip.getStr() > 0 ? EquipStats.STR.getValue() : 0;
                            break;
                        case "DEX":
                            equipStats |= equip.getDex() > 0 ? EquipStats.DEX.getValue() : 0;
                            break;
                        case "INT":
                            equipStats |= equip.getInt() > 0 ? EquipStats.INT.getValue() : 0;
                            break;
                        case "LUK":
                            equipStats |= equip.getLuk() > 0 ? EquipStats.LUK.getValue() : 0;
                            break;
                        case "HP":
                            equipStats |= equip.getHp() > 0 ? EquipStats.HP.getValue() : 0;
                            break;
                        case "MP":
                            equipStats |= equip.getMp() > 0 ? EquipStats.MP.getValue() : 0;
                            break;
                        case "WATK":
                            equipStats |= equip.getWatk() > 0 ? EquipStats.WATK.getValue() : 0;
                            break;
                        case "MATK":
                            equipStats |= equip.getMatk() > 0 ? EquipStats.MATK.getValue() : 0;
                            break;
                        case "WDEF":
                            equipStats |= equip.getWdef() > 0 ? EquipStats.WDEF.getValue() : 0;
                            break;
                        case "MDEF":
                            equipStats |= equip.getMdef() > 0 ? EquipStats.MDEF.getValue() : 0;
                            break;
                        case "ACC":
                            equipStats |= equip.getAcc() > 0 ? EquipStats.ACC.getValue() : 0;
                            break;
                        case "AVOID":
                            equipStats |= equip.getAvoid() > 0 ? EquipStats.AVOID.getValue() : 0;
                            break;
                        case "HANDS":
                            equipStats |= equip.getHands() > 0 ? EquipStats.HANDS.getValue() : 0;
                            break;
                        case "SPEED":
                            equipStats |= equip.getSpeed() > 0 ? EquipStats.SPEED.getValue() : 0;
                            break;
                        case "JUMP":
                            equipStats |= equip.getJump() > 0 ? EquipStats.JUMP.getValue() : 0;
                            break;
                        case "FLAG":
                            equipStats |= equip.getFlag() > 0 ? EquipStats.FLAG.getValue() : 0;
                            break;
                        case "ITEMLEVEL":
                            equipStats |= equip.getItemLevel() != 0 ? EquipStats.ITEMLEVEL.getValue() : 0;
                            break;
                        case "ITEMEXP":
                            equipStats |= equip.getItemEXP() > 0 ? EquipStats.ITEMEXP.getValue() : 0;
                            break;
                        case "DURABILITY":
                            equipStats |= equip.getDurability() != -1 ? EquipStats.DURABILITY.getValue() : 0;
                            break;
                        case "HAMMER":
                            equipStats |= equip.getViciousHammer() > 0 ? EquipStats.HAMMER.getValue() : 0;
                            break;
                        case "DOWNLEVEL":
                            equipStats |= equip.getDownLevel() > 0 ? EquipStats.DOWNLEVEL.getValue() : 0;
                            break;
                        case "BOSSDAMAGE":
                            equipStats |= equip.getBossDamage() > 0 ? EquipStats.BOSSDAMAGE.getValue() : 0;
                            break;
                        case "IGNOREWDEF":
                            equipStats |= equip.getIgnoreWdef() > 0 ? EquipStats.IGNOREWDEF.getValue() : 0;
                            break;
                    }
                }
                w.writeInt(equipStats);
                for (EquipStats equipstat : EquipStats.values()) {
                    switch (equipstat.name()) {
                        case "UPGRADE": {
                            w.write(equip.getUpgradeSlots() > 0 ? equip.getUpgradeSlots() : -88888);
                            break;
                        }
                        case "LEVEL":
                            w.write(equip.getLevel() > 0 ? equip.getLevel() : -88888);
                            break;
                        case "STR":
                            w.writeShort(equip.getStr() > 0 ? equip.getStr() : -88888);
                            break;
                        case "DEX":
                            w.writeShort(equip.getDex() > 0 ? equip.getDex() : -88888);
                            break;
                        case "INT":
                            w.writeShort(equip.getInt() > 0 ? equip.getInt() : -88888);
                            break;
                        case "LUK":
                            w.writeShort(equip.getLuk() > 0 ? equip.getLuk() : -88888);
                            break;
                        case "HP":
                            w.writeShort(equip.getHp() > 0 ? equip.getHp() : -88888);
                            break;
                        case "MP":
                            w.writeShort(equip.getMp() > 0 ? equip.getMp() : -88888);
                            break;
                        case "WATK":
                            w.writeShort(equip.getWatk() > 0 ? equip.getWatk() : -88888);
                            break;
                        case "MATK":
                            w.writeShort(equip.getMatk() > 0 ? equip.getMatk() : -88888);
                            break;
                        case "WDEF":
                            w.writeShort(equip.getWdef() > 0 ? equip.getWdef() : -88888);
                            break;
                        case "MDEF":
                            w.writeShort(equip.getMdef() > 0 ? equip.getMdef() : -88888);
                            break;
                        case "ACC":
                            w.writeShort(equip.getAcc() > 0 ? equip.getAcc() : -88888);
                            break;
                        case "AVOID":
                            w.writeShort(equip.getAvoid() > 0 ? equip.getAvoid() : -88888);
                            break;
                        case "HANDS":
                            w.writeShort(equip.getHands() > 0 ? equip.getHands() : -88888);
                            break;
                        case "SPEED":
                            w.writeShort(equip.getSpeed() > 0 ? equip.getSpeed() : -88888);
                            break;
                        case "JUMP":
                            w.writeShort(equip.getJump() > 0 ? equip.getJump() : -88888);
                            break;
                        case "FLAG":
                            w.writeShort(equip.getFlag() > 0 ? equip.getFlag() : -88888);
                            break;
                        case "ITEMLEVEL":
                            w.write(equip.getItemLevel() != 0 ? equip.getItemLevel() : -88888);
                            break;
                        case "ITEMEXP":
                            w.writeLong(GameConstants.getEquipExpPercentage(equip) > 0 ? GameConstants.getEquipExpPercentage(equip) : -88888);
                            break;
                        case "DURABILITY":
                            w.writeInt(equip.getDurability() != -1 ? equip.getDurability() : -88888);
                            break;
                        case "HAMMER":
                            w.writeInt(equip.getViciousHammer() > 0 ? equip.getViciousHammer() : -88888);
                            break;
                        case "DOWNLEVEL":
                            w.write(equip.getDownLevel() > 0 ? equip.getDownLevel() : -88888);
                            break;
                        case "BOSSDAMAGE":
                            w.write(equip.getBossDamage() > 0 ? equip.getBossDamage() : -88888);
                            break;
                        case "IGNOREWDEF":
                            w.write(equip.getIgnoreWdef() > 0 ? equip.getIgnoreWdef() : -88888);
                            break;
                    }
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
            int value = 4;
            if (equip.getAllDamageP() != 0) {
                value += 1;
            }
            if (equip.getAllStatP() != 0) {
                value += 2;
            }
            if (equip.getFire() >= 0) {
                value += 8;
            }
            //if (equip.getStarForce() > 0) {
            //    value += 16;
            if (equip.getEnhance() > 25) {
            value += 16;
            }
            w.writeInt(value);
            if (equip.getAllDamageP() != 0) {
                w.write(equip.getAllDamageP());
            }
            if (equip.getAllStatP() != 0) {
                w.write(equip.getAllStatP());
            }
            w.write(equip.getFire()); 
            if (equip.getFire() >= 0) {
                w.writeInt(Randomizer.nextInt());
                w.writeInt(0);
            }
            //if (equip.getStarForce() > 0) {
            //    w.writeInt(equip.getStarForce());
            if (equip.getEnhance() > 25) {
            w.writeShort(0x100);
            w.write(0);
            w.write(0);
            }
            w.writeMapleAsciiString(equip.getOwner());
            w.write(equip.getState()); 
            w.write(equip.getEnhance() > 25 ? equip.getEnhance() - 25 : equip.getEnhance());
            w.writeShort(equip.getPotential1()); 
            w.writeShort(equip.getPotential2()); 
            w.writeShort(equip.getPotential3()); 
            w.writeShort(equip.getPotential4());
            w.writeShort(equip.getPotential5());
            w.writeShort(equip.getPotential6()); 
            w.writeShort(equip.getPotential7()); 
            if (!equip.isCash()) {
                w.writeLong(-1);
            }
            w.writeLong(getTime(-2));
            w.writeInt(-1); 
            w.writeLong(0);
            w.writeLong(getTime(-2));
            w.write0(16);
            w.writeShort(equip.getSoulName());
            w.writeShort(equip.getSoulEnchanter());
            w.writeShort(equip.getSoulPotential());
        } else {
            w.writeShort(item.getQuantity());
            w.writeMapleAsciiString(item.getOwner());
            w.writeShort(item.getFlag());
            if (GameConstants.isThrowingStar(item.getItemId()) || GameConstants.isBullet(item.getItemId())) {
                w.writeInt(2);
                w.writeShort(0x54);
                w.write(0);
                w.write(0x34);
            }
        }
    }
    
    public static final void addCoreInfo(WritingPacket w, MapleCharacter player) {
        int[] items = {3600100, 3600101, 3600102, 3600103, 3600104, 3600204};
        int[] quantity = { 1, 2, 3, 4, 5, 6 };

        w.writeShort(0);
    }

    public static final void addPetItemInfo(final MapleCharacter player, final WritingPacket w, MaplePet pet, boolean unequip, boolean petLoot) {
        w.write(1);
        w.writeLong(pet.getUniqueId());
        w.writeLong(getTime(-1));
        w.writeInt(-1);
        w.writeAsciiString(pet.getName(), 13);
        w.write(pet.getLevel());
        w.writeShort(pet.getCloseness());

        w.write(pet.getFullness());
        w.writeLong(getTime(pet.getExpireDate()));
        w.writeShort(0);
        w.writeShort(pet.getSkillValue());
        w.writeShort(0);
        w.writeInt((petLoot || unequip) ? 0 : 0x20000);
        w.write(unequip ? 0 : player.getPetIndex(pet) + 1);
        w.writeInt(pet.getBuffSkillId());
        w.writeInt(-1); //+168
        w.writeShort(100);
    }

    public static final void serializeMovementList(final WritingPacket packet, final List<LifeMovementFragment> moves) {
        packet.write(moves.size());
        for (LifeMovementFragment move : moves) {
            move.serialize(packet);
        }
    }

    public static final void addInteraction(final WritingPacket packet, IMapleCharacterShop shop) {
        packet.write(shop.getShopType());
        packet.writeInt(((AbstractPlayerStore) shop).getObjectId());
        packet.writeMapleAsciiString(shop.getDescription());
        if (shop.getShopType() != IMapleCharacterShop.HIRED_MERCHANT) {
            packet.write(shop.getPassword().length() > 0 ? 1 : 0); //password = false
        }
        packet.write(shop.getItemId() % 10);
        packet.write(shop.getSize());
        packet.write(shop.getMaxSize()); //full slots... 4 = 4-1=3 = has slots, 1-1=0 = no slots
        if (shop.getShopType() != IMapleCharacterShop.HIRED_MERCHANT) {
            packet.write(shop.isOpen() ? 0 : 1);
        }
    }

    public static final <D extends GlobalBuffStat> void writeLongMask(WritingPacket packet, List<Triple<D, Integer, Boolean>> statups) {
        long firstmask = 0;
        long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
        long zeromask = 0;
        long negativemask = 0;
        for (Triple<D, Integer, Boolean> statup : statups) {
            if (statup.getFirst().getIndex() == 1) {
                firstmask |= statup.getFirst().getValue();       
            } else if (statup.getFirst().getIndex() == 2) {
                secondmask |= statup.getFirst().getValue();       
            } else if (statup.getFirst().getIndex() == 3) {
                thirdmask |= statup.getFirst().getValue();
            } else if (statup.getFirst().getIndex() == 4) {
                forthmask |= statup.getFirst().getValue();
            } else if (statup.getFirst().getIndex() == 0) {
                zeromask |= statup.getFirst().getValue();
            } else if (statup.getFirst().getIndex() == -1) {
                negativemask |= statup.getFirst().getValue();
            }
        }
        packet.writeLong(negativemask);
        packet.writeLong(zeromask);
        packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
    }
    
    public static <D extends GlobalBuffStat> void writeDemonMask(WritingPacket packet, List<Triple<D, Integer, Boolean>> statups) {
	long firstmask = 0;
	long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
	for (Triple<D, Integer, Boolean> statup : statups) {
	    if (statup.getFirst().getIndex() == 1) {
		firstmask |= statup.getFirst().getValue();
	    } else if (statup.getFirst().getIndex() == 2) {
		secondmask |= statup.getFirst().getValue();
	    } else if (statup.getFirst().getIndex() == 3) {
		thirdmask |= statup.getFirst().getValue();
	    } else if (statup.getFirst().getIndex() == 4) {
		forthmask |= statup.getFirst().getValue();
	    }
	}
        packet.writeLong(0);
	packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
        packet.writeInt(0);
    }

    public static final <T extends GlobalBuffStat> void writeLongSingleMask(WritingPacket packet, T statups) {
        long firstmask = 0;
        long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
        long zeromask = 0;
        if (statups.getIndex() == 1) {
            firstmask |= statups.getValue();
        } else if (statups.getIndex() == 2) {
            secondmask |= statups.getValue();
        } else if (statups.getIndex() == 3) {
            thirdmask |= statups.getValue();
        } else if (statups.getIndex() == 4) {
            forthmask |= statups.getValue();
        } else if (statups.getIndex() == 0) {
            zeromask |= statups.getValue();
        }
        packet.writeLong(0); //v192
        packet.writeLong(zeromask);
        packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
    }

    public static final <TD extends GlobalBuffStat> void writeSingleLongMaskFromSet(WritingPacket packet, Set<TD> statups) {
        long firstmask = 0;
        long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
        for (TD statup : statups) {
            if (statup.getIndex() == 1) {
                firstmask |= statup.getValue();
            } else if (statup.getIndex() == 2) {
                secondmask |= statup.getValue();
            } else if (statup.getIndex() == 3) {
                thirdmask |= statup.getValue();
            } else if (statup.getIndex() == 4) {
                forthmask |= statup.getValue();
            }
        }
        packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
    }

    public static final <T extends GlobalBuffStat> void writeLongMaskFromList(WritingPacket packet, List<T> statups) {
        long firstmask = 0;
        long secondmask = 0;
        long thirdmask = 0;
        long forthmask = 0;
        long zeromask = 0;
        long negativemask = 0;
        
        for (GlobalBuffStat statup : statups) {
            if (statup.getIndex() == 1) {
                firstmask |= statup.getValue();
            } else if (statup.getIndex() == 2) {
                secondmask |= statup.getValue();
            } else if (statup.getIndex() == 3) {
                thirdmask |= statup.getValue();
            } else if (statup.getIndex() == 4) {
                forthmask |= statup.getValue();
            } else if (statup.getIndex() == 0) {
                zeromask |= statup.getValue();
            } else if (statup.getIndex() == -1) {
                negativemask |= statup.getValue();
            }
        }
        packet.writeLong(negativemask);
        packet.writeLong(zeromask);
        packet.writeLong(firstmask);
        packet.writeLong(secondmask);
        packet.writeLong(thirdmask);
        packet.writeLong(forthmask);
    }

    public static final void addShopItemInfo(final WritingPacket packet, MapleShopItem item, MapleClient c, final IItem i, int sid) {
            packet.writeInt(item.getItemId());
            packet.writeInt(item.getPriceQuantity() > 0 ? 0 : item.getPrice());
            packet.writeInt(item.getPriceQuantity() > 0 ? item.getPrice() : 0);
            packet.writeInt(item.getPriceQuantity());
            packet.writeInt(item.getPeriod()); //Period  1min = 1, 1days = 1440
            packet.write0(30); //1.2.201+
            packet.write(unk1);
            packet.write(unk2);
            packet.write(HexTool.getByteArrayFromHexString("00 80 05 BB 46 E6 17 02"));
            packet.writeInt(item.getTab());
            packet.writeInt(item.getTab() == 1 && sid == 9010040 ? 1 : 0); //isHiddenPotential
            packet.write0(5); //1.2.201+
            if (!GameConstants.isThrowingStar(item.getItemId()) && !GameConstants.isBullet(item.getItemId())) {
                packet.writeShort(item.getQuantity() > 1 ? item.getQuantity() : 1);
                packet.writeShort(item.getBuyable());
            } else {
                packet.writeAsciiString("333333");
                packet.writeShort(BitTools.doubleToShortBits(ItemInformation.getInstance().getPrice(item.getItemId())));
                packet.writeShort(ItemInformation.getInstance().getSlotMax(c, item.getItemId()));
            }
            packet.write(i == null ? 0 : 1);
            if (i != null) {
                addItemInfo(packet, i, true, true, c.getPlayer());
        }
    }
}
