/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package constants;

import client.MapleCharacter;
import client.MapleCharacterStat;
import client.items.IEquip;
import client.items.ISkill;
import client.items.MapleInventoryType;
import client.items.MapleWeaponType;
import client.skills.Skill;
import client.skills.SkillFactory;
import client.stats.BuffStats;
import client.stats.DiseaseStats;
import database.MYSQL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import server.maps.MapleMapObjectType;
import tools.Pair;
import tools.RandomStream.Randomizer;
import java.util.*;
import server.items.ItemInformation;

public class GameConstants {

	public static final List<MapleMapObjectType> rangedMapobjectTypes = Arrays.asList(MapleMapObjectType.ITEM,
			MapleMapObjectType.MONSTER, MapleMapObjectType.DOOR, MapleMapObjectType.REACTOR, MapleMapObjectType.SUMMON,
			MapleMapObjectType.NPC, MapleMapObjectType.MIST);
	public static final int[] itemBlock = { 2340000, 2049100, 4001129, 2040037, 2040006, 2040007, 2040303, 2040403,
			2040506, 2040507, 2040603, 2040709, 2040710, 2040711, 2040806, 2040903, 2041024, 2041025, 2043003, 2043103,
			2043203, 2043303, 2043703, 2043803, 2044003, 2044103, 2044203, 2044303, 2044403, 2044503, 2044603, 2044908,
			2044815, 2044019, 2044703 };
	public static final int[] rankC = { 70000000, 70000001, 70000002, 70000003, 70000004, 70000005, 70000006, 70000007,
			70000008, 70000009, 70000010, 70000011, 70000012, 70000013 };
	public static final int[] rankB = { 70000014, 70000015, 70000016, 70000017, 70000018, 70000021, 70000022, 70000023,
			70000024, 70000025, 70000026 };
	public static final int[] rankA = { 70000027, 70000028, 70000029, 70000030, 70000031, 70000032, 70000033, 70000034,
			70000035, 70000036, 70000039, 70000040, 70000041, 70000042 };
	public static final int[] rankS = { 70000043, 70000044, 70000045, 70000047, 70000048, 70000049, 70000050, 70000051,
			70000052, 70000053, 70000054, 70000055, 70000056, 70000057, 70000058, 70000059, 70000060, 70000061,
			70000062 };
	private static int[] dmgskinitem = { 2431965, 2431966, 2431967, 2432131, 2432153, 2432154, 2432207, 2432354,
			2432355, 2432465, 2432479, 2432526, 2432532, 2432592, 2432640, 2432710, 2432836, 2432973, 2433063, 2433456,
			2433178, 2433715, 2433804, 5680343, 2433913, 2433980, 2433981, 2433990, 2433919, 2434248, 2434273, 2434274,
			2434390, 2434391, 5680365 };
	private static int[] dmgskinnum = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23,
			24, 25, 26, 27, 28, 29, 32, 34, 35, 36, 38, 39, 40 };
	public static final int PENDANT_SLOT = 122700;
	private static final int[] cumulativeTraitExp = { 20, 46, 80, 124, 181, 255, 351, 476, 639, 851, 1084, 1340, 1622,
			1932, 2273, 2648, 3061, 3515, 4014, 4563, 5128, 5710, 6309, 6926, 7562, 8217, 8892, 9587, 10303, 11040,
			11788, 12547, 13307, 14089, 14883, 15689, 16507, 17337, 18179, 19034, 19902, 20783, 21677, 22584, 23505,
			24440, 25399, 26362, 27339, 28331, 29338, 30360, 31397, 32450, 33519, 34604, 35705, 36823, 37958, 39110,
			40279, 41466, 32671, 43894, 45135, 46395, 47674, 48972, 50289, 51626, 52967, 54312, 55661, 57014, 58371,
			59732, 61097, 62466, 63839, 65216, 66597, 67982, 69371, 70764, 72161, 73562, 74967, 76376, 77789, 79206,
			80627, 82052, 83481, 84914, 86351, 87792, 89237, 90686, 92139, 93596, 96000 };
	public static final long[] exp = { 1, 15, 34, 57, 92, // 5
			135, 372, 560, 840, 1242, // 10
			1242, 1242, 1242, 1242, 1242, // 15
			1490, 1788, 2145, 2574, 3088, // 20
			3705, 4446, 5335, 6402, 7682, // 25
			9218, 11061, 13273, 15927, 19112, // 30
			19112, 19112, 19112, 19112, 19112, // 35
			22934, 27520, 33024, 39628, 47553, // 40
			51357, 55465, 59902, 64694, 69869, // 45
			75458, 81494, 88013, 95054, 102658, // 50
			110870, 119739, 129318, 139663, 150836, // 55
			162902, 175934, 190008, 205208, 221624, // 60
			221624, 221624, 221624, 221624, 221624, // 65
			239353, 258501, 279181, 301515, 325636, // 70
			351686, 379820, 410205, 443021, 478462, // 75
			511954, 547790, 586135, 627164, 671065, // 80
			718039, 768301, 822082, 879627, 941200, // 85
			1007084, 1077579, 1153009, 1233719, 1320079, // 90
			1412484, 1511357, 1617151, 1730351, 1851475, // 95
			1981078, 2119753, 2268135, 2426904, 2596787, // 100
			2596787, 2596787, 2596787, 2596787, 2596787, // 105
			2778562, 2973061, 3181175, 3403857, 3642126, // 110
			3897074, 4169869, 4461759, 4774082, 5108267, // 115
			5465845, 5848454, 6257845, 6695894, 7164606, // 120
			7666128, 8202756, 8776948, 9391334, 10048727, // 125
			10752137, 11504786, 12310121, 13171829, 14093857, // 130
			15080426, 16136055, 17265578, 18474168, 19767359, // 135,
			21151074, 22631649, 24215864, 25910974, 27724742, // 140
			29665473, 31742056, 33963999, 36341478, 38885381, // 145
			41607357, 44519871, 47636261, 50970799, 54538754, // 150
			58356466, 62441418, 66812317, 71489179, 76493421, // 155
			81847960, 87577317, 93707729, 100267270, 107285978, // 160
			113723136, 120546524, 127779315, 135446073, 143572837, // 165
			152187207, 161318439, 170997545, 181257397, 192132840, // 170
			203660810, 215880458, 228833285, 242563282, 257117078, // 175
			272544102, 288896748, 306230552, 324604385, 344080648, // 180
			364725486, 386609015, 409805555, 434393888, 460457521, // 185
			488084972, 517370070, 548412274, 581317010, 616196030, // 190
			653167791, 692357858, 733899329, 777933288, 824609285, // 195
			874085842, 926530992, 982122851, 1041050222, 1103513235, // 200
			2207026470L, 2648431764L, 3178118116L, 3813741739L, 4576490086L, // 205
			5491788103L, 6590145723L, 7908174867L, 9489809840L, 11387771808L, // 210
			24142076232L, 25590600805L, 27126036853L, 28753599064L, 30478815007L, // 215
			32307543907L, 34245996541L, 36300756333L, 38478801712L, 40787529814L, // 220
			84838062013L, 88231584493L, 91760847872L, 95431281786L, 99248533057L, // 225
			103218474379L, 107347213354L, 111641101888L, 116106745963L, 120751015801L, // 230
			246332072234L, 251258713678L, 256283887951L, 261409565710L, 266637757024L, // 235
			271970512164L, 277409922407L, 282958120855L, 288617283272L, 294389628937L, // 240
			594667050452L, 600613720956L, 606619858165L, 612686056746L, 618812917313L, // 245
			625001046846L, 631251056950L, 637563567519L, 643939203194L, 650378595225L, 0L }; // 250};
	private static final int[] closeness = { 0, 1, 3, 6, 14, 31, 60, 108, 181, 287, 434, 632, 891, 1224, 1642, 2161,
			2793, 3557, 4467, 5542, 6801, 8263, 9950, 11882, 14084, 16578, 19391, 22547, 26074, 30000 };
	public static int[] soulItemid = { 2591010, 2591011, 2591012, 2591013, 2591014, 2591015, 2591016, 2591017, 2591018,
			2591019, 2591020, 2591021, 2591022, 2591023, 2591024, 2591025, 2591026, 2591027, 2591028, 2591029, 2591030,
			2591031, 2591032, 2591033, 2591034, 2591035, 2591036, 2591037, 2591038, 2591039, 2591040, 2591041, 2591042,
			2591043, 2591044, 2591045, 2591046, 2591047, 2591048, 2591049, 2591050, 2591051, 2591052, 2591053, 2591054,
			2591055, 2591056, 2591057, 2591058, 2591059, 2591060, 2591061, 2591062, 2591063, 2591064, 2591065, 2591066,
			2591067, 2591068, 2591069, 2591070, 2591071, 2591072, 2591073, 2591074, 2591075, 2591076, 2591077, 2591078,
			2591079, 2591080, 2591081, 2591082, 2591085, 2591086, 2591087, 2591088, 2591089, 2591090, 2591091, 2591092,
			2591093, 2591094, 2591095, 2591096, 2591097, 2591098, 2591099, 2591100, 2591101, 2591102, 2591103, 2591104,
			2591105, 2591106, 2591107, 2591108, 2591109, 2591110, 2591111, 2591112, 2591113, 2591114, 2591115, 2591116,
			2591117, 2591118, 2591119, 2591120, 2591121, 2591122, 2591123, 2591124, 2591125, 2591126, 2591127, 2591128,
			2591129, 2591130, 2591131, 2591132, 2591133, 2591134, 2591135, 2591136, 2591137, 2591138, 2591139, 2591140,
			2591141, 2591142, 2591143, 2591144, 2591145, 2591146, 2591147, 2591148, 2591149, 2591150, 2591151, 2591152,
			2591153, 2591154, 2591155, 2591156, 2591157, 2591158, 2591159, 2591160, 2591161, 2591162, 2591163, 2591164,
			2591165, 2591166, 2591167, 2591168, 2591169, 2591170, 2591171, 2591172, 2591173, 2591174, 2591175, 2591176,
			2591177, 2591178, 2591179, 2591180, 2591181, 2591182, 2591183, 2591184, 2591185, 2591186, 2591187, 2591188,
			2591189, 2591190, 2591191, 2591192, 2591193, 2591194, 2591195, 2591196, 2591197, 2591198, 2591199, 2591200,
			2591201, 2591202, 2591203, 2591204, 2591205, 2591206, 2591207, 2591208, 2591209, 2591210, 2591211, 2591212,
			2591213, 2591214, 2591215, 2591216, 2591217, 2591218, 2591219, 2591220, 2591221, 2591222, 2591223, 2591224,
			2591225, 2591226, 2591227, 2591228, 2591229, 2591230, 2591231, 2591232, 2591233, 2591234, 2591235, 2591236,
			2591237, 2591238, 2591239, 2591240, 2591241, 2591242, 2591243, 2591244, 2591245, 2591246, 2591247, 2591248,
			2591249, 2591250, 2591251, 2591252, 2591253, 2591254, 2591255, 2591256, 2591257, 2591258, 2591259, 2591260,
			2591261, 2591262, 2591263, 2591264, 2591265, 2591266, 2591267, 2591268, 2591269, 2591270, 2591271, 2591272,
			2591273, 2591274, 2591275, 2591276, 2591277, 2591278, 2591279, 2591288, 2591289, 2591290, 2591291, 2591292,
			2591293, 2591294, 2591295, 2591296, 2591297, 2591298, 2591299, 2591300, 2591301, 2591302, 2591303, 2591304,
			2591305, 2591306, 2591307, 2591308, 2591309, 2591310, 2591311, 2591312, 2591313, 2591314, 2591315, 2591316,
			2591317, 2591318, 2591319, 2591320, 2591321, 2591322, 2591323, 2591324, 2591325, 2591326, 2591327, 2591328,
			2591329, 2591330, 2591331, 2591332, 2591333, 2591334, 2591335, 2591336, 2591337, 2591338, 2591339, 2591340,
			2591341, 2591342, 2591343, 2591344, 2591345, 2591346, 2591347, 2591348, 2591349, 2591350, 2591351, 2591352,
			2591353, 2591354, 2591355, 2591356, 2591357, 2591358, 2591359, 2591360, 2591361, 2591362, 2591363, 2591364,
			2591365, 2591366, 2591367, 2591368, 2591369, 2591370, 2591371, 2591372, 2591373, 2591374, 2591375, 2591376,
			2591377, 2591378, 2591379, 2591380, 2591381 };
	public static short[] soulPotentials = { 177, 102, 103, 104, 131, 132, 201, 101, 102, 103, 104, 131, 132, 201, 105,
			106, 107, 108, 133, 134, 202, 105, 106, 107, 108, 133, 134, 202, 109, 110, 111, 112, 135, 136, 203, 113,
			114, 115, 116, 204, 151, 152, 137, 403, 603, 121, 122, 123, 124, 206, 155, 156, 139, 403, 603, 117, 118,
			119, 120, 207, 153, 154, 138, 403, 603, 167, 168, 169, 170, 208, 171, 172, 177, 0, 0, 0, 0, 101, 102, 103,
			104, 131, 132, 201, 101, 102, 103, 104, 131, 132, 201, 105, 106, 107, 108, 133, 134, 202, 105, 106, 107,
			108, 133, 134, 202, 109, 110, 111, 112, 135, 136, 203, 113, 114, 115, 116, 204, 151, 152, 137, 117, 118,
			119, 120, 207, 153, 154, 138, 121, 122, 123, 124, 206, 155, 156, 139, 101, 102, 103, 104, 131, 132, 201,
			163, 164, 165, 166, 210, 151, 152, 175, 0, 101, 102, 103, 104, 131, 132, 201, 163, 164, 165, 166, 210, 151,
			152, 175, 167, 168, 169, 170, 208, 171, 172, 177, 179, 180, 181, 182, 183, 184, 201, 185, 186, 187, 188,
			205, 153, 154, 189, 0, 179, 180, 181, 182, 183, 184, 201, 185, 186, 187, 188, 205, 153, 154, 189, 109, 110,
			111, 112, 135, 136, 203, 117, 118, 119, 120, 207, 153, 154, 138, 0, 109, 110, 111, 112, 135, 136, 203, 117,
			118, 119, 120, 205, 153, 154, 138, 101, 102, 103, 104, 131, 132, 201, 167, 168, 169, 170, 208, 173, 172,
			177, 0, 101, 102, 103, 104, 131, 132, 201, 167, 168, 169, 170, 208, 173, 172, 177, 167, 168, 169, 170, 208,
			171, 172, 177, 0, 121, 186, 187, 188, 205, 153, 154, 189, 0, 185, 186, 187, 188, 207, 153, 154, 189, 0, 185,
			186, 187, 188, 205, 153, 154, 189, 0, 185, 186, 187, 188, 207, 153, 154, 189, 0, 185, 186, 187, 188, 206,
			153, 154, 189, 0, 121, 186, 187, 188, 205, 153, 154, 189, 185, 186, 187, 188, 205, 153, 154, 189, 185, 186,
			187, 188, 205, 153, 154, 189, 185, 186, 187, 188, 207, 153, 154, 189, 185, 186, 187, 188, 206, 153, 154,
			189 };
	private static final int[] mountexp = { 0, 6, 25, 50, 105, 134, 196, 254, 263, 315, 367, 430, 543, 587, 679, 725,
			897, 1146, 1394, 1701, 2247, 2543, 2898, 3156, 3313, 3584, 3923, 4150, 4305, 4550 };
	private static final int[] guildexp = { 0, 20000, 160000, 540000, 1280000, 2500000, 4320000, 6860000, 10240000,
			14580000 };
	private static final int[] professionexp = { 0, 250, 600, 1050, 1600, 2250, 3000, 3850, 4900, 5850,
			Integer.MAX_VALUE };
	private static final int[] pot = { 1, 100, 400, 700, 1000 };
	public static final int JAIL = 180000002;
	public static final int QUICK_SLOT = 123000;
	public static final int OMOK_SCORE = 122200;
	public static final int MATCH_SCORE = 122210;

	public static int getTimelessRequiredEXP(final int level) {
		return (70 + (level * 10)) * 10000000;
	}

	public static int getReverseRequiredEXP(final int level) {
		return (60 + (level * 5)) * 10000000;
	}

	public static final long getExpNeededForLevel(final int level) {
		return exp[level];
	}

	public static final int getClosenessNeededForLevel(final int level) {
		return closeness[level - 1];
	}

	public static final int getProfessionExpNeededForLevel(final int level) {
		return professionexp[level];
	}

	public static final int getPotExpNeededForLevel(final int level) {
		return pot[level];
	}

	public static final double maxViewRangeSq() {
		return /* 1000 * 1000; */ Double.POSITIVE_INFINITY; // 800 * 800
	}

	public static final double maxRange() {
		return Double.POSITIVE_INFINITY;
	}

	public static final boolean isJobFamily(final int baseJob, final int currentJob) {
		return currentJob >= baseJob && currentJob / 100 == baseJob / 100;
	}

	public static final boolean isKOC(final int job) {
		return job >= 1000 && job < 2000;
	}

	public static final boolean isAran(final int job) {
		return job >= 2000 && job <= 2112 && job != 2001;
	}

	public static final boolean isAdventurer(final int job) {
		return job >= 0 && job < 1000;
	}

	public static final boolean isNightWalker(final int job) {
		return job == 1400 || (job >= 1400 && job <= 1412);
	}

	public static final boolean isReturnCygNus(final int job) {
		return job == 1000 || (job >= 1500 && job <= 1512);
	}

	public final static boolean isForceIncrease(int skillid) {
		switch (skillid) {
		case 24100003:
		case 24120002:
		case 31000004:
		case 31001006:
		case 31001007:
		case 31001008:

		case 30010166:
		case 30011167:
		case 30011168:
		case 30011169:
		case 30011170:
			return true;
		}
		return false;
	}

	public static final boolean isLinkedAttackSkill(final int id) {
		switch (id) {
		case 21110007:
		case 21110008:
		case 21120009:
		case 21120010:
		case 4321001:
			return true;
		}
		return false;
	}

	public static final int getLinkedBuffSkill(final int id) {
		switch (id) {
		case 61120008:
			return 61111008;
		case 11121011:
		case 11121012:
			return 11121005;
		}
		return id;
	}

	public static final int getLinkedAttackSkill(final int id) {
		switch (id) {
		case 21110007:
		case 21110008:
			return 21110002;
		case 21120009:
		case 21120010:
			return 21120002;
		case 4321001:
			return 4321000;
		case 33101008:
			return 33101004;
		case 35101009:
		case 35101010:
			return 35100008;
		case 35121013:
			return 35120013;
		case 35121011:
			return 35121009;
		case 35111009:
		case 35111010: // »õÆ²¶óÀÌÆ®
			return 35111001;
		case 35100004:
			return 35101004;
		case 32001007:
		case 32001008:
		case 32001009:
		case 32001010:
		case 32001011:
			return 32001001;
		case 5300007:
			return 5301001;
		case 5320011:
			return 5321004;
		case 23101007:
			return 23101001;
		case 23111010:
		case 23111009:
			return 23111008;
		case 31001006:
		case 31001007:
		case 31001008:
			return 31000004;
		case 27120211:
			return 27121201; // ¸ð´× ½ºÅ¸Æú
		case 61001004:
		case 61001005:
		case 61110212:
		case 61120219:
			return 61001000; // µå·¡°ï½½·¡½Ã
		case 61110211:
		case 61120007:
		case 61121217:
			return 61101002; // Àª¿Àºê¼Òµå
		case 61111215:
			return 61001101; // ÇÃ·¹ÀÓ ¼¦
		case 61111217:
			return 61101101; // ÇÇ¾î½º ·¯½¬
		case 61111216:
			return 61101100; // ÀÓÆÑÆ® ¿þÀÌºê
		case 61111219:
			return 61111101; // Ã¼ÀÎÇ®¸µ
		case 61111113:
		case 61111218:
			return 61111100; // À®ºñÆ® - Ä¿¸Çµå
		case 61121201:
			return 61121100; // ±â°¡½½·¡¼Å
		case 61121203:
			return 61121102; // ºí·ç½ºÆ®¸¯
		case 61110009:
			return 61111003; // ¸®°ÔÀÎ ½ºÆ®·À½º
		case 61121116:
			return 61121104; // ¼Òµå½ºÆ®¶óÀÌÅ© - ÆøÆÈ
		case 61121223:
			return 61121221; // ¼Òµå ½ºÆ®¶óÀÌÅ© - ÆøÆÈ
		case 61121221:
			return 61121104; // ¼Òµå ½ºÆ®¶óÀÌÅ©
		case 65101006:
			return 65101106;
		case 65121007:
		case 65121008:
			return 65121101;
		case 61111220:
			return 61121105; // ÀÎÆÛ³Î ºê·¹½º
		/* Ä«ÀÌÀú Á¾·á */
		case 65111007: // ¼Ò¿ï ½ÃÄ¿
			return 65111100;
		case 4100012: // ¸¶Å© ¿Àºê ¾î½Ø½Å
			return 4100011;
		case 24121010:
			return 24121003;
		case 24111008:
			return 24111006;
		case 5001008:
			return 5001005;
		case 61120008:
			return 61111008;
		case 51100006:
			return 51101006;
		case 31011004:
		case 31011005:
		case 31011006:
		case 31011007:
			return 31011000;
		case 31201007:
		case 31201008:
		case 31201009:
		case 31201010:
			return 31201000;
		case 31211007:
		case 31211008:
		case 31211009:
		case 31211010:
			return 31211000;
		case 31221009:
		case 31221010:
		case 31221011:
		case 31221012:
			return 31221000;
		case 31211011:
			return 31211002;
		case 31221014:
			return 31221001;
		case 25100010:
			return 25100009;
		case 25120115:
			return 25120110;
		case 36101008:
		case 36101009:
			return 36101000;
		case 36111009:
		case 36111010:
			return 36111000;
		case 36121011:
		case 36121012:
			return 36121001;
		case 35100009:
			return 35100009;
		case 2121055:
			return 2121052;
		case 11121055:
			return 11121052;
		case 1120017:
			return 1121008;
		case 25000003:
			return 25001002;
		case 25000001:
			return 25001000;
		case 25100001:
			return 25101000;
		case 25110001:
		case 25110002:
		case 25110003:
			return 25111000;
		case 25120001:
		case 25120002:
		case 25120003:
			return 25121000;
		case 95001000:
			return 3111013; // ¾Ö·Î¿ì ÇÃ·¡ÅÍ
		case 4210014: // ¸Þ¼Ò ÀÍ½ºÇÃ·ÎÁ¯
			return 4211006;
		case 101000102: // ¾îµå¹ê½ºµå ÆÄ¿ö ½ºÅÒÇÁ(Ãæ°ÝÆÄ)
			return 101000101;
		/* ³ªÀÌÆ®¿öÄ¿ ½ÃÀÛ */
		case 14101021:
			return 14101020; // Æ®¸®ÇÃ ½º·Î¿ì
		case 14111021:
			return 14111020; // Äõµå·¯ÇÃ ½º·Î¿ì
		case 14111023:
			return 14111022; // ½ºÅ¸´õ½ºÆ®
		case 14121002:
			return 14121001; // ÄýÅÍÇÃ ½º·Î¿ì
		/* ³ªÀÌÆ®¿öÄ¿ Á¾·á */
		}
		return id;
	}

	public static final boolean SoulMoonSkill(final int skillid) {
		switch (skillid) {
		case 11101022:
		case 11111022:
		case 11121005:
		case 11121011:
		case 11121012:
			return true;
		}
		return false;
	}

	public static final int getBOF_ForJob(final int job) {
		if (isAdventurer(job)) {
			return 12;
		} else if (isKOC(job)) {
			return 10000012;
		} else if (isEvan(job)) {
			return 20010012;
		} else if (isMercedes(job)) {
			return 20020012;
		} else if (isDemonSlayer(job) || isDemonAvenger(job)) {
			return 30010012;
		} else if (isDemonAvenger(job)) {
			return 30010012;
		} else if (isXenon(job)) {
			return 30020012;
		} else if (isResistance(job)) {
			return 30000012;
		} else if (isAran(job)) {
			return 20000012;
		} else if (isMikhail(job)) {
			return 50000012;
		} else if (isPhantom(job)) {
			return 20030012;
		} else if (isLuminous(job)) {
			return 20040012;
		} else if (isKaiser(job)) {
			return 60000012;
		} else if (isAngelicBuster(job)) {
			return 60010012;
		} else if (isZero(job)) {
			return 100000012;
		}
		return 12;
	}

	public static final int getBOE_ForJob(final int job) {
		if (isAdventurer(job)) {
			return 73;
		} else if (isKOC(job)) {
			return 10000073;
		} else if (isEvan(job)) {
			return 20010073;
		} else if (isMercedes(job)) {
			return 20020073;
		} else if (isDemonSlayer(job) || isDemonAvenger(job)) {
			return 30010073;
		} else if (isDemonAvenger(job)) {
			return 30010073;
		} else if (isXenon(job)) {
			return 30020073;
		} else if (isResistance(job)) {
			return 30000073;
		} else if (isAran(job)) {
			return 20000073;
		} else if (isMikhail(job)) {
			return 50000073;
		} else if (isPhantom(job)) {
			return 20030073;
		} else if (isLuminous(job)) {
			return 20040073;
		} else if (isKaiser(job)) {
			return 60000073;
		} else if (isAngelicBuster(job)) {
			return 60010073;
		} else if (isZero(job)) {
			return 100000073;
		}
		return 73;
	}

	public static final boolean isElementAmp_Skill(final int skill) {
		switch (skill) {
		case 2110001:
		case 2210001:
		case 12110001:
		case 22150000:
			return true;
		}
		return false;
	}

	public static final int getJobShortValue(int job) {
		if (job >= 1000) {
			job -= (job / 1000) * 1000;
		}
		job /= 100;
		if (job == 4) { // For some reason dagger/ claw is 8.. IDK
			job *= 2;
		} else if (job == 3) {
			job += 1;
		} else if (job == 5) {
			job += 11; // 16
		}
		return job;
	}

	public static final boolean isUsingStarJob(final int job) {
		switch (job) {
		case 1400:
		case 1410:
		case 1411:
		case 1412:
		case 400:
		case 410:
		case 411:
		case 412:
			return true;
		}
		return false;
	}

	public static final boolean isUsingArrowForBowJob(final int job) {
		switch (job) {
		case 300:
		case 310:
		case 311:
		case 312:
		case 1312:
		case 1311:
		case 1310:
		case 1300:
			return true;
		}
		return false;
	}

	public static final boolean isUsingArrowForCrossBowJob(final int job) {
		switch (job) {
		case 300:
		case 320:
		case 321:
		case 322:
		case 3312:
		case 3311:
		case 3310:
		case 3300:
			return true;
		}
		return false;
	}

	public static final boolean isUsingBulletJob(final int job) {
		switch (job) {
		case 500:
		case 520:
		case 521:
		case 522:
		case 3500:
		case 3510:
		case 3511:
		case 3512:
			return true;
		}
		return false;
	}

	public static final boolean isCSSaleLock(final int itemId) {
		// disabled cs items
		switch (itemId) {
		case 5044000:
		case 5680193:
		case 5680194:
		case 9103281:
		case 9103282:
		case 9103283:
		case 9103284:
		case 9103280:
		case 9103333:
		case 9103332:
		case 5044001:
		case 5044002:
		case 5044006:
		case 5044007:
		case 5077000:
		case 5062005:
		case 5062006:
		case 5062009:
		case 5062010:
		case 5062090:
		case 5062100:
		case 5062103:
		case 5062200:
		case 5062201:
		case 5062500:
		case 5062501:
		case 5062800:
		case 5062801:
		case 5490000:
		case 5490001:
		case 1002140:
		case 5140000:
		case 5140001:
		case 5140002:
		case 5140003:
		case 5140004:
		case 5830000:
		case 5830001:
		case 5830002:
		case 5680145:
		case 5680146:
		case 5680147:
		case 5680148:
		case 5680149:
		case 5680150:
		case 5680151:
		case 5680155:
		case 5502009:
			return true;
		}
		return false;
	}

	public static final boolean isBullet(final int itemId) {
		final int id = itemId / 10000;
		if (id == 233) {
			return true;
		} else {
			return false;
		}
	}

	public static final boolean isThrowingStar(final int itemId) { // ÀÛ¾÷ÀÚ by. ´Þ´Ô
		final int id = itemId / 10000;
		if (id == 207) {
			return true;
		} else {
			return false;
		}
	}

	public static final boolean isRechargable(final int itemId) {
		final int id = itemId / 10000;
		switch (id) {
		case 233:
		case 207:
			return true;
		}
		return false;
	}

	public static final boolean isStar(final int itemId) {
		final int id = itemId / 10000;
		switch (id) {
		case 207:
			return true;
		}
		return false;
	}

	public static final int getMasterySkill(final int job) {
		if (job >= 1410 && job <= 1412) { // ³ªÀÌÆ® ¿öÄ¿
			return 14100000;
		} else if (job >= 410 && job <= 412) { // ¾î½Ø½Å
			return 4100000;
		} else if (job >= 520 && job <= 522) { // °Ç½½¸µ°Å
			return 5200000;
		}
		return 0;
	}

	public static final boolean isOverall(final int itemId) {
		return itemId >= 1050000 && itemId < 1060000;
	}

	public static final boolean isCore(final int itemId) {
		final int id = itemId / 100000;
		if (id == 36) {
			return true;
		} else {
			return false;
		}
	}

	public static final boolean isPet(final int itemId) {
		return itemId >= 5000000 && itemId <= 5000999;
	}

	public static final int getPetBuff(final int itemId) {
		switch (itemId) {
		// ¸¶Á·
		case 5000228:
		case 5000229:
		case 5000230:
		case 5000231:
		case 5000232:
		case 5000233:
			return 7;
		// µå·¡°ï
		case 5000243:
		case 5000244:
		case 5000245:
			return 20;
		// °õµ¹ÀÌ
		case 5000249:
		case 5000250:
		case 5000251:
			return 26;
		// ÆßÅ²Àè
		case 5000256:
		case 5000257:
		case 5000258:
			return 29;
		// ÄÚ¾Ë¶ó
		case 5000271:
		case 5000272:
		case 5000273:
			return 56;
		// ´Ù¶÷Áã
		case 5000275:
		case 5000276:
		case 5000277:
			return 63;
		case 5000281:
		case 5000282:
		case 5000283:
			return 73;
		case 5000290:
		case 5000291:
		case 5000292:
			return 77;
		case 5000239:
			return 13;
		case 5000240:
			return 17;
		case 5000293:
		case 5000294:
		case 5000295:
			return 81;
		case 5000296:
		case 5000297:
		case 5000298:
			return 98;
		case 5000309:
		case 5000310:
		case 5000311:
			return 101;
		case 5000352:
		case 5000353:
		case 5000354:
			return 166;
		case 5000365:
		case 5000366:
		case 5000367:
			return 288;
		case 5000375:
		case 5000376:
		case 5000377:
			return 295;
		}
		return 0;
	}

	public static final boolean isArrowForCrossBow(final int itemId) {
		return itemId >= 2061000 && itemId < 2062000;
	}

	public static final boolean isArrowForBow(final int itemId) {
		return itemId >= 2060000 && itemId < 2061000;
	}

	public static final boolean isMagicWeapon(final int itemId) {
		final int s = itemId / 10000;
		return s == 137 || s == 138;
	}

	public static final boolean isWeapon(final int itemId) {
		return (itemId >= 1212000 && itemId < 1500000) || (itemId >= 1520000 && itemId < 1540000);
	}

	public static final MapleInventoryType getInventoryType(final int itemId) {
		final byte type = (byte) (itemId / 1000000);
		if (type < 1 || type > 5) {
			return MapleInventoryType.UNDEFINED;
		}
		return MapleInventoryType.getByType(type);
	}

	public static final MapleWeaponType getWeaponType(final int itemId) {
		int cat = itemId / 10000;
		cat = cat % 100;
		switch (cat) {
		case 21:
			return MapleWeaponType.PLANE;
		case 22:
			return MapleWeaponType.SOULSHOOTER;
		case 23:
			return MapleWeaponType.DESPERADO;
		case 30:
			return MapleWeaponType.SWORD1H;
		case 31:
			return MapleWeaponType.AXE1H;
		case 32:
			return MapleWeaponType.BLUNT1H;
		case 33:
			return MapleWeaponType.DAGGER;
		case 34:
			return MapleWeaponType.KATARA;
		case 35:
			return MapleWeaponType.JS;
		case 36:
			return MapleWeaponType.CAIN;
		case 37:
			return MapleWeaponType.WAND;
		case 38:
			return MapleWeaponType.STAFF;
		case 40:
			return MapleWeaponType.SWORD2H;
		case 41:
			return MapleWeaponType.AXE2H;
		case 42:
			return MapleWeaponType.BLUNT2H;
		case 43:
			return MapleWeaponType.SPEAR;
		case 44:
			return MapleWeaponType.POLE_ARM;
		case 45:
			return MapleWeaponType.BOW;
		case 46:
			return MapleWeaponType.CROSSBOW;
		case 47:
			return MapleWeaponType.CLAW;
		case 48:
			return MapleWeaponType.KNUCKLE;
		case 49:
			return MapleWeaponType.GUN;
		case 50:
		case 51:
			return MapleWeaponType.GATHERTOOL;
		case 52:
			return MapleWeaponType.DUALBOW;
		case 53:
			return MapleWeaponType.HANDCANNON;
		case 56:
			return MapleWeaponType.SWORD;
		case 57:
			return MapleWeaponType.TEDO;
		}
		return MapleWeaponType.NOT_A_WEAPON;
	}

	public static final boolean isShield(final int itemId) {
		int cat = itemId / 10000;
		cat = cat % 100;
		return cat == 9;
	}

	public static final boolean isEquip(final int itemId) {
		return itemId / 1000000 == 1;
	}

	public static boolean isZeroWeapon(int itemId) {
		return (isAlphaWeapon(itemId) || isBetaWeapon(itemId));
	}

	public static boolean isBetaWeapon(int itemId) {
		return itemId / 10000 == 156;
	}

	public static boolean isAlphaWeapon(int itemId) {
		return itemId / 10000 == 157;
	}

	public static final boolean isCleanSlate(int itemId) {
		return itemId / 100 == 20490;
	}

	public static final boolean isChaosScroll(int itemId) {
		return itemId / 100 == 20491;
	}

	public static final boolean isTwoHanded(final int itemId) {
		switch (getWeaponType(itemId)) {
		case AXE2H:
		case GUN:
		case KNUCKLE:
		case BLUNT2H:
		case BOW:
		case CLAW:
		case CROSSBOW:
		case POLE_ARM:
		case SPEAR:
		case SWORD2H:
			return true;
		default:
			return false;
		}
	}

	public static final boolean isTownScroll(final int id) {
		return id >= 2030000 && id < 2030020;
	}

	public static final boolean isGun(final int id) {
		return id >= 1492000 && id <= 1500000;
	}

	public static final boolean isUse(final int id) {
		return id >= 2000000 && id <= 2490000;
	}

	public static final boolean isSummonSack(final int id) {
		return id / 10000 == 210;
	}

	public static final boolean isMonsterCard(final int id) {
		return id / 10000 == 238;
	}

	public static final boolean isSpecialCard(final int id) {
		return id / 100 >= 2388;
	}

	public static final int getCardShortId(final int id) {
		return id % 10000;
	}

	public static final boolean isGem(final int id) {
		return id >= 4250000 && id <= 4251402;
	}

	public static final boolean isCustomQuest(final int id) {
		if (id > 99999) {
			return true;
		}
		switch (id) {
		case 7200: // Papulatus record and count
		case 20022: // Cygnus tutor quest
		case 20021: // Cygnus tutor quest
		case 20020: // Cygnus tutor quest
			return true;
		}
		return false;
	}

	public static final int getTaxAmount(final long meso) {
		if (meso >= 100000000) {
			return (int) Math.round(0.06 * meso);
		} else if (meso >= 25000000) {
			return (int) Math.round(0.05 * meso);
		} else if (meso >= 10000000) {
			return (int) Math.round(0.04 * meso);
		} else if (meso >= 5000000) {
			return (int) Math.round(0.03 * meso);
		} else if (meso >= 1000000) {
			return (int) Math.round(0.018 * meso);
		} else if (meso >= 100000) {
			return (int) Math.round(0.008 * meso);
		}
		return 0;
	}

	public static final int EntrustedStoreTax(final int meso) {
		if (meso >= 100000000) {
			return (int) Math.round(0.03 * meso);
		} else if (meso >= 25000000) {
			return (int) Math.round(0.025 * meso);
		} else if (meso >= 10000000) {
			return (int) Math.round(0.02 * meso);
		} else if (meso >= 5000000) {
			return (int) Math.round(0.015 * meso);
		} else if (meso >= 1000000) {
			return (int) Math.round(0.009 * meso);
		} else if (meso >= 100000) {
			return (int) Math.round(0.004 * meso);
		}
		return 0;
	}

	public static final short getSummonAttackDelay(final int id) {
		switch (id) {
		case 15001004: // Lightning
		case 14001005: // Darkness
		case 13001004: // Storm
		case 12001004: // Flame
		case 11001004: // Soul
		case 3221005: // Freezer
		case 3211005: // Golden Eagle
		case 3121006: // Phoenix
		case 3111005: // Silver Hawk
		case 2321003: // Bahamut
		case 2221005: // Infrit
		case 2211011:
		case 2121005: // Elquines
			return 3030;
		case 5211001: // Octopus
		case 5211002: // Gaviota
		case 5220002: // Support Octopus
			return 1530;
		case 3211002: // Puppet
		case 3111002: // Puppet
		case 1301013: // Beholder
		case 61111002: // ÆäÆ®¸® ÆÄÀÌµå
		case 3221014:
		case 22171052: // ¼­¸Õ¿À´Ð½ºµå·¡°ï
			return 0;
		}

		return 3030;
	}

	public static final short getAttackDelay(final int id) {
		switch (id) { // Assume it's faster(2)
		case 3111009: // Storm of Arrow
		case 13111002: // Storm of Arrow
		case 5221004: // Rapidfire
		case 4221016: // Assassinate?
		case 5201006: // Recoil shot/ Back stab shot
			return 120;
		case 13101005: // Storm Break
			return 360;
		case 5001003: // Double Fire
			return 390;
		case 5001001: // Straight/ Flash Fist
		case 15001001: // Straight/ Flash Fist
		case 1321003: // Rush
		case 1221007: // Rush
		case 1121006: // Rush
			return 450;
		case 5211004: // Flamethrower
		case 5211005: // Ice Splitter
			return 480;
		case 0: // Normal Attack, TODO delay for each weapon type
		case 5111002: // Energy Blast
		case 15101005: // Energy Blast
		case 1001004: // Power Strike
		case 11001002: // Power Strike
		case 1001005: // Slash Blast
		case 11001003: // Slash Blast
		case 1311005: // Sacrifice
		case 1321015:
			return 570;
		case 3111006: // Strafe
		case 311004: // Arrow Rain
		case 13111000: // Arrow Rain
		case 3111003: // Inferno
		case 3101005: // Arrow Bomb
		case 4001344: // Lucky Seven
		case 14001004: // Lucky seven
		case 4121007: // Triple Throw
		case 14111005: // Triple Throw
		case 4111004: // Shadow Meso
		case 4101005: // Drain
		case 4211004: // Band of Thieves
		case 4201004: // Steal
		case 4001334: // Double Stab
		case 5221007: // Battleship Cannon
		case 1211002: // Charged blow
		case 2301002: // Heal
		case 1311003: // Dragon Fury : Spear
		case 1311004: // Dragon Fury : Pole Arm
		case 3211006: // Strafe
		case 3211004: // Arrow Eruption
		case 3211003: // Blizzard Arrow
		case 3201005: // Iron Arrow
		case 3221001: // Piercing
		case 4111005: // Avenger
		case 14111002: // Avenger
		case 5201001: // Invisible shot
		case 5101004: // Corkscrew Blow
		case 15101003: // Corkscrew Blow
		case 1121008: // Brandish
		case 11111004: // Brandish
			return 600;
		case 5201004: // Blank Shot/ Fake shot
		case 5211000: // Burst Fire/ Triple Fire
		case 5001002: // Sommersault Kick
		case 15001002: // Sommersault Kick
		case 4221007: // Boomerang Stab
		case 1311001: // Spear Crusher, 16~30 pts = 810
		case 1311002: // PA Crusher, 16~30 pts = 810
		case 2221006: // Chain Lightning
			return 660;
		case 4121008: // Ninja Storm
		case 4201005: // Savage blow
		case 5211006: // Homing Beacon
		case 5221008: // Battleship Torpedo
		case 5101002: // Backspin Blow
		case 2001005: // Magic Claw
		case 12001003: // Magic Claw
		case 2001004: // Energy Bolt
		case 2301005: // Holy Arrow
		case 2121001: // Big Bang
		case 2221001: // Big Bang
		case 2321001: // Big Bang
		case 2321007: // Angel's Ray
		case 2101004: // Fire Arrow
		case 12101002: // Fire Arrow
		case 2101005: // Poison Breath
		case 2121003: // Fire Demon
		case 2221003: // Ice Demon
		case 2121006: // Paralyze
		case 2201005: // Thunderbolt
		case 2201004: // Cold Beam
		case 5121005: // Snatch
		case 12111006: // Fire Strike
		case 11101004: // Soul Blade
			return 750;
		case 15111007: // Shark Wave
		case 2111006: // Elemental Composition
		case 2211006: // Elemental Composition
			return 810;
		case 13111006: // Wind Piercing
		case 4211002: // Assaulter
		case 5101003: // Double Uppercut
			return 900;
		case 5121003: // Energy Orb
		case 2311004: // Shining Ray
		case 2211002: // Ice Strike
			return 930;
		case 13111007: // Wind Shot
			return 960;
		case 14101006: // Vampire
		case 4121003: // Showdown
		case 4221003: // Showdown
			return 1020;
		case 12101006: // Fire Pillar
			return 1050;
		case 5121001: // Dragon Strike
			return 1060;
		case 2211003: // Thunder Spear
		case 1311006: // Dragon Roar
			return 1140;
		case 11111006: // Soul Driver
			return 1230;
		case 2111003: // Poison Mist
			return 1320;
		case 5111006: // Shockwave
		case 15111003: // Shockwave
		case 2111002: // Explosion
			return 1500;
		case 5121007: // Barrage
		case 15111004: // Barrage
			return 1830;
		case 5221003: // Ariel Strike
		case 5121004: // Demolition
			return 2160;
		case 2321008: // Genesis
			return 2700;
		case 2121007: // Meteor Shower
		case 10001011: // Meteo Shower
		case 2221007: // Blizzard
			return 3060;
		}
		// TODO delay for final attack, weapon type, swing,stab etc
		return 330; // Default usually
	}

	public static final byte gachaponRareItem(final int id) {
		switch (id) {
		case 2340000: // White Scroll
		case 2049100: // Chaos Scroll
		case 2049000: // Reverse Scroll
		case 2049001: // Reverse Scroll
		case 2049002: // Reverse Scroll
		case 2040006: // Miracle
		case 2040007: // Miracle
		case 2040303: // Miracle
		case 2040403: // Miracle
		case 2040506: // Miracle
		case 2040507: // Miracle
		case 2040603: // Miracle
		case 2040709: // Miracle
		case 2040710: // Miracle
		case 2040711: // Miracle
		case 2040806: // Miracle
		case 2040903: // Miracle
		case 2041024: // Miracle
		case 2041025: // Miracle
		case 2043003: // Miracle
		case 2043103: // Miracle
		case 2043203: // Miracle
		case 2043303: // Miracle
		case 2043703: // Miracle
		case 2043803: // Miracle
		case 2044003: // Miracle
		case 2044103: // Miracle
		case 2044203: // Miracle
		case 2044303: // Miracle
		case 2044403: // Miracle
		case 2044503: // Miracle
		case 2044603: // Miracle
		case 2044908: // Miracle
		case 2044815: // Miracle
		case 2044019: // Miracle
		case 2044703: // Miracle
		case 1372039: // Elemental wand lvl 130
		case 1372040: // Elemental wand lvl 130
		case 1372041: // Elemental wand lvl 130
		case 1372042: // Elemental wand lvl 130
		case 1092049: // Dragon Khanjar
			return 2;
		case 1382037: // Blade Staff
		case 1102084: // Pink Gaia Cape
		case 1102041: // Pink Adventurer Cape
		case 1402044: // Pumpkin Lantern
		case 1082149: // Brown Work glove
		case 1102086: // Purple Gaia Cape
		case 1102042: // Purple Adventurer Cape

		case 3010065: // Pink Parasol
		case 3010064: // Brown Sand Bunny Cushion
		case 3010063: // Starry Moon Cushion
		case 3010068: // Teru Teru Chair
		case 3010054: // Baby Bear's Dream
		case 3012001: // Round the Campfire
		case 3012002: // Rubber Ducky Bath
		case 3010020: // Portable Meal Table
		case 3010041: // Skull Throne
			return 2;
		}
		return 0;
	}

	public final static int[] goldrewards = { 1402037, 1, // Rigbol Sword
			2290096, 1, // Maple Warrior 20
			2290049, 1, // Genesis 30
			2290041, 1, // Meteo 30
			2290047, 1, // Blizzard 30
			2290095, 1, // Smoke 30
			2290017, 1, // Enrage 30
			2290075, 1, // Snipe 30
			2290085, 1, // Triple Throw 30
			2290116, 1, // Areal Strike
			1302059, 3, // Dragon Carabella
			2049100, 1, // Chaos Scroll
			2340000, 1, // White Scroll
			1092049, 1, // Dragon Kanjar
			1102041, 1, // Pink Cape
			1432018, 3, // Sky Ski
			1022047, 3, // Owl Mask
			3010051, 1, // Chair
			3010020, 1, // Portable meal table
			2040914, 1, // Shield for Weapon Atk

			1432011, 3, // Fair Frozen
			1442020, 3, // HellSlayer
			1382035, 3, // Blue Marine
			1372010, 3, // Dimon Wand
			1332027, 3, // Varkit
			1302056, 3, // Sparta
			1402005, 3, // Bezerker
			1472053, 3, // Red Craven
			1462018, 3, // Casa Crow
			1452017, 3, // Metus
			1422013, 3, // Lemonite
			1322029, 3, // Ruin Hammer
			1412010, 3, // Colonian Axe

			1472051, 1, // Green Dragon Sleeve
			1482013, 1, // Emperor's Claw
			1492013, 1, // Dragon fire Revlover

			1382050, 1, // Blue Dragon Staff
			1382045, 1, // Fire Staff, Level 105
			1382047, 1, // Ice Staff, Level 105
			1382048, 1, // Thunder Staff
			1382046, 1, // Poison Staff

			1332032, 4, // Christmas Tree
			1482025, 3, // Flowery Tube

			4001011, 4, // Lupin Eraser
			4001010, 4, // Mushmom Eraser
			4001009, 4, // Stump Eraser

			2030008, 5, // Bottle, return scroll
			1442012, 4, // Sky Snowboard
			1442018, 3, // Frozen Tuna
			2040900, 4, // Shield for DEF
			2000005, 10, // Power Elixir
			2000004, 10, // Elixir
			4280000, 4 }; // Gold Box
	public final static int[] silverrewards = { 1002452, 3, // Starry Bandana
			1002455, 3, // Starry Bandana
			2290084, 1, // Triple Throw 20
			2290048, 1, // Genesis 20
			2290040, 1, // Meteo 20
			2290046, 1, // Blizzard 20
			2290074, 1, // Sniping 20
			2290064, 1, // Concentration 20
			2290094, 1, // Smoke 20
			2290022, 1, // Berserk 20
			2290056, 1, // Bow Expert 30
			2290066, 1, // xBow Expert 30
			2290020, 1, // Sanc 20
			1102082, 1, // Black Raggdey Cape
			1302049, 1, // Glowing Whip
			2340000, 1, // White Scroll
			1102041, 1, // Pink Cape
			1452019, 2, // White Nisrock
			4001116, 3, // Hexagon Pend
			4001012, 3, // Wraith Eraser
			1022060, 2, // Foxy Racoon Eye

			1432011, 3, // Fair Frozen
			1442020, 3, // HellSlayer
			1382035, 3, // Blue Marine
			1372010, 3, // Dimon Wand
			1332027, 3, // Varkit
			1302056, 3, // Sparta
			1402005, 3, // Bezerker
			1472053, 3, // Red Craven
			1462018, 3, // Casa Crow
			1452017, 3, // Metus
			1422013, 3, // Lemonite
			1322029, 3, // Ruin Hammer
			1412010, 3, // Colonian Axe

			1002587, 3, // Black Wisconsin
			1402044, 1, // Pumpkin lantern
			2101013, 4, // Summoning Showa boss
			1442046, 1, // Super Snowboard
			1422031, 1, // Blue Seal Cushion
			1332054, 3, // Lonzege Dagger
			1012056, 3, // Dog Nose
			1022047, 3, // Owl Mask
			3012002, 1, // Bathtub
			1442012, 3, // Sky snowboard
			1442018, 3, // Frozen Tuna
			1432010, 3, // Omega Spear
			1432036, 1, // Fishing Pole
			2000005, 10, // Power Elixir
			2000004, 10, // Elixir
			4280001, 4 }; // Silver Box
	public static final int[] fishingReward = { 0, 80, // Meso
			1, 60, // EXP
			2022179, 1, // Onyx Apple
			1302021, 5, // Pico Pico Hammer
			1072238, 1, // Voilet Snowshoe
			1072239, 1, // Yellow Snowshoe
			2049100, 1, // Chaos Scroll
			1302000, 3, // Sword
			1442011, 1, // Surfboard
			4000517, 8, // Golden Fish
			4000518, 25, // Golden Fish Egg
			4031627, 2, // White Bait (3cm)
			4031628, 1, // Sailfish (120cm)
			4031630, 1, // Carp (30cm)
			4031631, 1, // Salmon(150cm)
			4031632, 1, // Shovel
			4031633, 2, // Whitebait (3.6cm)
			4031634, 1, // Whitebait (5cm)
			4031635, 1, // Whitebait (6.5cm)
			4031636, 1, // Whitebait (10cm)
			4031637, 2, // Carp (53cm)
			4031638, 2, // Carp (60cm)
			4031639, 1, // Carp (100cm)
			4031640, 1, // Carp (113cm)
			4031641, 2, // Sailfish (128cm)
			4031642, 2, // Sailfish (131cm)
			4031643, 1, // Sailfish (140cm)
			4031644, 1, // Sailfish (148cm)
			4031645, 2, // Salmon (166cm)
			4031646, 2, // Salmon (183cm)
			4031647, 1, // Salmon (227cm)
			4031648, 1, // Salmon (288cm)
			4031629, 1 // Pot
	};

	public static List<Integer> getHPBoostSkill() {
		List<Integer> ret = new ArrayList<Integer>();
		// ret.add(25000105);
		ret.add(0000110);
		ret.add(1001003);
		ret.add(1000006);
		ret.add(4100006);
		ret.add(4200006);
		ret.add(4310004);
		ret.add(3111010);
		ret.add(3211010);
		ret.add(4110008);
		ret.add(4210013);
		ret.add(4330008);
		ret.add(1120036);
		ret.add(1220036);
		ret.add(1320036);
		ret.add(2120036);
		ret.add(2220036);
		ret.add(2320036);
		ret.add(3120006);
		ret.add(3120036);
		ret.add(3220005);
		ret.add(3220036);
		ret.add(4120036);
		ret.add(4220036);
		ret.add(4340036);
		ret.add(5100009);
		ret.add(5120036);
		ret.add(5220036);
		ret.add(11000005);
		ret.add(11000023);
		ret.add(11120036);
		ret.add(13120036);
		ret.add(14110009);
		ret.add(15000008);
		ret.add(15120007);
		ret.add(15120036);
		ret.add(21120004);
		ret.add(21120036);
		ret.add(20010194);
		ret.add(22131001);
		ret.add(22170036);
		ret.add(32100008);
		ret.add(32120009);
		ret.add(32120036);
		ret.add(33120036);
		ret.add(35120000);
		ret.add(35120036);
		ret.add(5310007);
		ret.add(5320036);
		ret.add(23120036);
		ret.add(31000003);
		ret.add(24120036);
		ret.add(31120036);
		ret.add(27120036);
		ret.add(51000000);
		ret.add(51120036);
		ret.add(60000222);
		ret.add(61100007);
		ret.add(61110007);
		ret.add(65110005);
		ret.add(61120036);
		ret.add(65120036);
		ret.add(31220036);
		ret.add(36101003);
		ret.add(36100007);
		ret.add(36110007);
		ret.add(36120010);
		ret.add(36120036);
		ret.add(101100203);
		ret.add(100000279);
		return ret;
	}

	public static List<Integer> getMPBoostSkill() {
		List<Integer> ret = new ArrayList<Integer>();
		// ret.add(25000105);
		ret.add(2000006);
		ret.add(1120037);
		ret.add(1220037);
		ret.add(2120037);
		ret.add(1320037);
		ret.add(2220037);
		ret.add(2320037);
		ret.add(3220037);
		ret.add(4120037);
		ret.add(3120037);
		ret.add(4340037);
		ret.add(4220037);
		ret.add(5120037);
		ret.add(5220037);
		ret.add(11120037);
		ret.add(12000005);
		ret.add(13120037);
		ret.add(15120037);
		ret.add(21120037);
		ret.add(22170037);
		ret.add(32120037);
		ret.add(33120037);
		ret.add(35120037);
		ret.add(5320037);
		ret.add(23120037);
		ret.add(31120037);
		ret.add(24120037);
		ret.add(27120037);
		ret.add(51120037);
		ret.add(61120037);
		ret.add(65120037);
		ret.add(31220037);
		ret.add(36120037);
		return ret;
	}

	public static int isJobById(int job) {
		return job * 10000;
	}

	public static final boolean isEvan(final int job) {
		return job == 2001 || (job >= 2200 && job <= 2218);
	}

	public static boolean isLuminous(int job) {
		return job == 2004 || (job >= 2700 && job <= 2712);
	}

	public static boolean isKaiser(int job) {
		return job == 6000 || (job >= 6100 && job <= 6112);
	}

	public static boolean isMorph1(int job) {
		return ((job == 6100) || (job == 6110));
	}

	public static boolean isMorph2(int job) {
		return ((job == 6111) || (job == 6112));
	}

	public static boolean isDemonSlayer(int job) {
		return job == 3001 || (job >= 3100 && job <= 3112);
	}

	public static boolean isZero(int job) {
		return job == 10000 || (job >= 10100 && job <= 10112);
	}

	public static boolean isEunWol(int job) {
		return job == 2005 || (job >= 2500 && job <= 2512);
	}

	public static boolean isDemonAvenger(int job) {
		return job == 3101 || (job >= 3120 && job <= 3122);
	}

	public static boolean isABYTE(int job) {
		switch (job) {
		case 10000:
		case 10100:
		case 10110:
		case 10111:
		case 10112:
			return true;
		}
		return false;
	}

	public static boolean isXenon(int job) {
		return job == 3002 || (job >= 3600 && job <= 3612);
	}

	public static boolean isResistance(int job) {
		return job >= 3000 && job <= 3512;
	}

	public static boolean isWildHunter(int job) {
		return job >= 3300 && job <= 3312;
	}

	public static boolean isMercedes(int job) {
		return job == 2002 || (job >= 2300 && job <= 2312);
	}

	public static boolean isDualBlade(int job) {
		return job >= 430 && job <= 434;
	}

	public static boolean isPhantom(int job) {
		return job == 2003 || (job >= 2400 && job <= 2412);
	}

	public static boolean isMikhail(int job) {
		return job == 5000 || (job >= 5100 && job <= 5112);
	}

	public static boolean isMechanic(int job) {
		return job >= 3500 && job <= 3512;
	}

	public static boolean isAngelicBuster(int job) {
		return job == 6500 || (job >= 6500 && job <= 6512);
	}

	public static boolean isExtendedSPJob(int job) {
		switch (job) {
		/* ÃÊº¸ÀÚ */
		case 0:
			/* Àü»ç */
		case 100:
		case 110:
		case 111:
		case 112:
		case 120:
		case 121:
		case 122:
		case 130:
		case 131:
		case 132:

			/* ¸¶¹ý»ç */
		case 200:
		case 210:
		case 211:
		case 212:
		case 220:
		case 221:
		case 222:
		case 230:
		case 231:
		case 232:

			/* ±Ã¼ö */
		case 300:
		case 310:
		case 311:
		case 312:
		case 320:
		case 321:
		case 322:

			/* µµÀû */
		case 400:
		case 410:
		case 411:
		case 412:
		case 420:
		case 421:
		case 422:

			/* µà¾ó ºí·¹ÀÌµå */
		case 430:
		case 431:
		case 432:
		case 433:
		case 434:

			/* ÇØÀû */
		case 500:
		case 510:
		case 511:
		case 512:
		case 520:
		case 521:
		case 522:

			/* Ä³³í½´ÅÍ */
		case 501:
		case 530:
		case 531:
		case 532:

			/* ¾Æ¶õ */
		case 2000:
		case 2100:
		case 2110:
		case 2111:
		case 2112:

			/* ¿¡¹Ý */
		case 2001:
		case 2200:
		case 2210:
		case 2211:
		case 2212:
		case 2213:
		case 2214:
		case 2215:
		case 2216:
		case 2217:
		case 2218:

			/* ¸Þ¸£¼¼µ¥½º */
		case 2002:
		case 2300:
		case 2310:
		case 2311:
		case 2312:

			/* ÆÒÅÒ */
		case 2003:
		case 2400:
		case 2410:
		case 2411:
		case 2412:

			/* Àº¿ù */
		case 2005:
		case 2500:
		case 2510:
		case 2511:
		case 2512:

			/* µ¥¸ó¾îº¥Á® */
		case 3101:
		case 3120:
		case 3121:
		case 3122:

			/* Á¦³í */
		case 3002:
		case 3600:
		case 3610:
		case 3611:
		case 3612:

			/* ³ªÀÌÆ®¿öÄ¿ */
		case 1400:
		case 1410:
		case 1411:
		case 1412:

			/* µ¥¸ó½½·¹ÀÌ¾î */
		case 3001:
		case 3100:
		case 3110:
		case 3111:
		case 3112:

			/* ¹ÌÇÏÀÏ */
		case 5000:
		case 5100:
		case 5110:
		case 5111:
		case 5112:

			/* ·¹Áö½ºÅÁ½º °è¿­ */
		case 3000:
		case 3200:
		case 3210:
		case 3211:
		case 3212:
		case 3300:
		case 3310:
		case 3311:
		case 3312:
		case 3500:
		case 3510:
		case 3511:
		case 3512:

			/* ·ç¹Ì³Ê½º */
		case 2004:
		case 2700:
		case 2710:
		case 2711:
		case 2712:

			/* Ä«ÀÌÀú */
		case 6000:
		case 6100:
		case 6110:
		case 6111:
		case 6112:

			/* ¿£Á©¸¯¹ö½ºÅÍ */
		case 6001:
		case 6500:
		case 6510:
		case 6511:
		case 6512:

			/* ÇÃ·¹ÀÓ À§ÀÚµå */
		case 1200:
		case 1210:
		case 1211:
		case 1212:

			/* ¼Ò¿ï ¸¶½ºÅÍ */
		case 1000:
		case 1100:
		case 1110:
		case 1111:
		case 1112:

			/* ³ªÀÌÆ®¿öÄ¿ */
		case 1500:
		case 1510:
		case 1511:
		case 1512:

			/* À©µå ºê·¹ÀÌÄ¿ */
		case 1300:
		case 1310:
		case 1311:
		case 1312:

			/* Á¦·Î */
		case 10000:
		case 10100:
		case 10110:
		case 10111:
		case 10112:
			return true;
		default:
			return false;
		}
	}

	public final static int getSkillBook(final int job) {
		if (job >= 1110 && job <= 1112) {
			return job - 1109;
		}
		if (job >= 1310 && job <= 1312) {
			return job - 1309;
		}
		if (job >= 1510 && job <= 1512) {
			return job - 1509;
		}
		if (job >= 2210 && job <= 2218) {
			return job - 2209;
		}
		if (job >= 2310 && job <= 2312) {
			return job - 2309;
		}
		if (job >= 2410 && job <= 2412) {
			return job - 2409;
		}
		if (job >= 2710 && job <= 2712) {
			return job - 2709;
		}
		if (job >= 3110 && job <= 3112) {
			return job - 3109;
		}
		if (job >= 3120 && job <= 3122) {
			return job - 3119;
		}
		if (job >= 3210 && job <= 3212) {
			return job - 3209;
		}
		if (job >= 3310 && job <= 3312) {
			return job - 3309;
		}
		if (job >= 3510 && job <= 3512) {
			return job - 3509;
		}
		if (job >= 3610 && job <= 3612) {
			return job - 3609;
		}
		if (job >= 5110 && job <= 5112) {
			return job - 5109;
		}
		if (job >= 6110 && job <= 6112) {
			return job - 6109;
		}
		if (job >= 6510 && job <= 6512) {
			return job - 6509;
		}
		if (job >= 10110 && job <= 10112) {
			return job - 10109;
		}
		return 0;
	}

	public final static int getSkillBookForSkill(final int skillid) {
		return getSkillBook(skillid / 10000);
	}

	public static boolean isRing(int itemId) {
		return itemId >= 1112000 && itemId < 1113000;
	}

	public static boolean isEffectRing(int itemid) {
		return isFriendshipRing(itemid) || isCrushRing(itemid) || isMarriageRing(itemid);
	}

	public static boolean isMarriageRing(int itemId) {
		switch (itemId) {
		case 1112803:
		case 1112806:
		case 1112807:
		case 1112809:
			return true;
		}
		return false;
	}

	public static boolean isFriendshipRing(int itemId) {
		switch (itemId) {
		case 1112800:
		case 1112801:
		case 1112802:
		case 1112810:
		case 1112811:
		case 1112812:
		case 1112816:
		case 1112817:
		case 1049000:
			return true;
		}
		return false;
	}

	public static boolean isCrushRing(int itemId) {
		switch (itemId) {
		case 1112001:
		case 1112002:
		case 1112003:
		case 1112005:
		case 1112006:
		case 1112007:
		case 1112012:
		case 1112015:
		case 1048000:
		case 1048001:
		case 1048002:
			return true;
		}
		return false;
	}

	public static final boolean isKatara(int itemId) {
		return itemId / 10000 == 134;
	}

	public static final boolean isJS(int itemId) {
		final int id = itemId / 100;
		if (id == 13525) {
			return true;
		} else {
			return false;
		}
	}

	public static final boolean isMagnum(final int itemId) {
		final int id = itemId / 100;
		if (id == 13527) {
			return true;
		} else {
			return false;
		}
	}

	public static final boolean isInvisibleKatara(int itemId) {
		return itemId == 1342069;
	}

	public static final boolean isDagger(int itemId) {
		return itemId / 10000 == 133;
	}

	public static final boolean isApplicableSkill(int skil) {
		return skil < 22190000 && (skil % 10000 < 8000 || skil % 10000 > 8003); // no
																				// additional/resistance/db/decent
																				// skills
	}

	public static final boolean isApplicableSkill_(int skil) { // not applicable
																// to saving but
																// is more of
																// temporary
		return skil >= 90000000 || (skil % 10000 >= 8000 && skil % 10000 <= 8003);
	}

	public static final boolean isEvanDragonItem(final int itemId) {
		return itemId >= 1940000 && itemId < 1980000; // 194 = mask, 195 =
														// pendant, 196 = wings,
														// 197 = tail
	}

	public static byte[] getServerIp(String ip) {
		byte[] serverIp = new byte[4];
		for (int i = 0; i < 4; ++i) {
			serverIp[i] = (byte) Short.parseShort(ip.split("\\.")[i]);
		}
		return serverIp;
	}

	public static boolean isTablet(int itemId) {
		return itemId / 100 < 20478 && itemId / 100 >= 20470;
	}

	public static boolean isMagicHourglass(int itemId) {
		return itemId / 10000 == 550;
	}

	public static int getSuccessTablet(final int scrollId, final int level) {
		if (scrollId % 1000 / 100 == 2) { // 2047_2_00 = armor, 2047_3_00 =
											// accessory

			switch (level) {
			case 0:
				return 70;
			case 1:
				return 55;
			case 2:
				return 43;
			case 3:
				return 33;
			case 4:
				return 26;
			case 5:
				return 20;
			case 6:
				return 16;
			case 7:
				return 12;
			case 8:
				return 10;
			default:
				return 7;
			}
		} else if (scrollId % 1000 / 100 == 3) {
			switch (level) {
			case 0:
				return 70;
			case 1:
				return 35;
			case 2:
				return 18;
			case 3:
				return 12;
			default:
				return 7;
			}
		} else {
			switch (level) {
			case 0:
				return 70;
			case 1:
				return 50; // -20

			case 2:
				return 36; // -14

			case 3:
				return 26; // -10

			case 4:
				return 19; // -7

			case 5:
				return 14; // -5

			case 6:
				return 10; // -4

			default:
				return 7; // -3

			}
		}
	}

	public static int getCurseTablet(final int scrollId, final int level) {
		if (scrollId % 1000 / 100 == 2) { // 2047_2_00 = armor, 2047_3_00 =
											// accessory

			switch (level) {
			case 0:
				return 10;
			case 1:
				return 12;
			case 2:
				return 16;
			case 3:
				return 20;
			case 4:
				return 26;
			case 5:
				return 33;
			case 6:
				return 43;
			case 7:
				return 55;
			case 8:
				return 70;
			default:
				return 100;
			}
		} else if (scrollId % 1000 / 100 == 3) {
			switch (level) {
			case 0:
				return 12;
			case 1:
				return 18;
			case 2:
				return 35;
			case 3:
				return 70;
			default:
				return 100;
			}
		} else {
			switch (level) {
			case 0:
				return 10;
			case 1:
				return 14; // +4
			case 2:
				return 19; // +5
			case 3:
				return 26; // +7
			case 4:
				return 36; // +10
			case 5:
				return 50; // +14
			case 6:
				return 70; // +20
			default:
				return 100; // +30

			}
		}
	}

	public static int getMaxLevelImp(int lifeid) {
		switch (lifeid) {
		case 1000:
		case 2000:
			return 8;
		case 3000:
		case 3001:
			return 4;
		case 3002:
		case 3003:
			return 2;
		}
		return 1;
	}

	public static boolean isAccessory(final int itemId) {
		return (itemId >= 1010000 && itemId < 1040000) || (itemId >= 1122000 && itemId < 1153000)
				|| (itemId >= 1112000 && itemId < 1113000);
	}

	public static boolean isEquipScroll(int scrollId) {
		return scrollId / 100 == 20493 && scrollId != 2049360 && scrollId != 2049361;
	}

	public static boolean isEpicScroll(int scrollId) {
		return scrollId / 100 == 20497;
	}

	public static boolean isPotentialScroll(int scrollId) {
		return scrollId / 100 == 20494;
	}

	public static boolean isEditionalScroll(int scrollId) {
		return scrollId / 100 == 20493;
	}

	public static boolean isRebirhFireScroll(int scrollId) {
		return scrollId / 100 == 20487;
	}

	public static boolean isProstyScroll(int scrollId) {
		switch (scrollId) {
		case 2046991:
		case 2046964:
		case 2046965:
		case 2047801:
		case 2047914:
		case 2047915:
		case 2046841:
		case 2046842:
		case 2046967:
		case 2046971:
		case 2047803:
		case 2047917:
		case 2047814:
			return true;
		}
		return false;
	}

	public static boolean isEightRockScroll(int scrollId) { // 8Õ¥ ÁÖ¹®¼­
		return scrollId / 1000 == 2046;
	}

	public static int getOptionType(final int itemId) {
		int id = itemId / 10000;
		if (isWeapon(itemId) || ((int) (itemId / 1000)) == 1099) {
			return 10; // ¹«±â
		} else if (id == 109 || id == 110 || id == 113) {
			return 20; // ¹æÆÐ & ¸ÁÅä & º§Æ®
		} else if (isAccessory(itemId)) {
			return 40; // ¾Ç¼¼»ç¸®
		} else if (id == 100) {
			return 51; // Åõ±¸
		} else if (id == 104 || id == 106) {
			return 52; // »óÀÇ, ÇÑ¹ú¿Ê
		} else if (id == 105) {
			return 53; // ÇÏÀÇ
		} else if (id == 108) {
			return 54; // Àå°©
		} else if (id == 107) {
			return 55;
		}
		return 0;
	}

	public static boolean isSpecialScroll(final int scrollId) {
		switch (scrollId) {
		case 2040727: // Spikes on show
		case 2041058: // Cape for Cold protection
		case 5064000:
		case 5064003: // ½´Æä¸®¾ó
		case 2531000: // ÇÁ·ÎÅØÆ®
		case 5064100:
		case 2532000: // ¼¼ÀÌÇÁÆ¼
		case 5064300: // ¸®Ä¿¹ö¸®
		case 5063000:
		case 2530000:
		case 2530001:
		case 2530002: // ·°Å°µ¥ÀÌ
		case 5064200: // ÀÌ³ë¼¾Æ®
			return true;
		}
		return false;
	}

	public static boolean isSpecialCSScroll(final int scrollId) {
		switch (scrollId) {
		case 5064000:
		case 5064003: // ½´Æä¸®¾ó
		case 5064100:
		case 5064300: // ¸®Ä¿¹ö¸®
		case 5063100:
		case 5063000:
		case 5064200: // ÀÌ³ë¼¾Æ®
			return true;
		}
		return false;
	}

	public static boolean isAccessoryScroll(int itemId) {
		return itemId / 100 == 20492;
	}

	public static boolean canScroll(final int itemId) {
		return itemId / 100000 != 19 && itemId / 100000 != 16 || itemId / 1000 == 1672; // no
																						// mech/taming/dragon
	}

	public static int getChaosNumber(int itemId) {
		return itemId == 2049116 || itemId == 2049153 ? 10 : 5;
	}

	public static int getMountItem(final int sourceid, MapleCharacter player) {
		if (sourceid == 33001001) {
			switch (player.getLevel()) { // ÀÓ½Ã ¾ÆÁ÷ Àç±Ô¾î ÀüÀÓ
			case 10:
				return 1932015;
			case 20:
				return 1932030;
			case 30:
				return 1932031;
			case 40:
				return 1932032;
			case 50:
				return 1932033;
			case 60:
				return 1932036;
			default:
				return 0;
			}
		}
		return getMountItemEx(sourceid);
	}

	public static int checkMountItem(final int sourceid) {
		if (sourceid == 33001001) {
			return 1932005; // Just a check only, so doesn't matter
		}
		return getMountItemEx(sourceid);
	}

	public static int getJaguarIdByMob(int mob) {
		switch (mob) {
		case 9304004:
			return 1932033;
		case 9304003:
			return 1932032;
		case 9304002:
			return 1932031;
		case 9304001:
			return 1932030;
		case 9304000:
			return 1932015;
		case 9304005:
			return 1932036;
		case 9304006:
			return 1932100;
		}
		return 0;
	}

	public static boolean isJaguarMob(int mob) {
		return getJaguarIdByMob(mob) != 0;
	}

	public static int getJaguarType(MapleCharacter hp) {
		if (hp.getKeyValue2("CapturedJaguar") == -1) {
			hp.setKeyValue2("CapturedJaguar", 0);
		}
		int mobid = hp.getKeyValue2("CapturedJaguar");
		if (mobid > 0) {
			mobid = mobid - 9303999;
		}
		return mobid * 10;
	}

	public static boolean isBeginnerJob(final int job) {
		return job == 0 || job == 1 || job == 1000 || job == 2000 || job == 2001 || job == 3000 || job == 3001
				|| job == 3002 || job == 2002 || job == 2003 || job == 5000 || job == 2004 || job == 6000 || job == 6001
				|| job == 10000;
	}

	public static boolean isAswanMap(int mapId) {
		if (mapId >= 262020000 && mapId <= 262023130) {
			return true;
		}
		return false;
	}

	public static boolean isAngel(int sourceid) {
		return isBeginnerJob(sourceid / 10000) && (sourceid % 10000 == 1085 || sourceid % 10000 == 1087
				|| sourceid % 10000 == 1090 || sourceid % 10000 == 1179);
	}

	public static boolean isServerReady() {
		return SkillFactory.cached;
	}

	public static boolean isReverseItem(int itemId) {
		switch (itemId) {
		case 1002790:
		case 1002791:
		case 1002792:
		case 1002793:
		case 1002794:
		case 1082239:
		case 1082240:
		case 1082241:
		case 1082242:
		case 1082243:
		case 1052160:
		case 1052161:
		case 1052162:
		case 1052163:
		case 1052164:
		case 1072361:
		case 1072362:
		case 1072363:
		case 1072364:
		case 1072365:

		case 1302086:
		case 1312038:
		case 1322061:
		case 1332075:
		case 1332076:
		case 1372045:
		case 1382059:
		case 1402047:
		case 1412034:
		case 1422038:
		case 1432049:
		case 1442067:
		case 1452059:
		case 1462051:
		case 1472071:
		case 1482024:
		case 1492025:

		case 1342012:
		case 1942002:
		case 1952002:
		case 1962002:
		case 1972002:
		case 1532016:
		case 1522017:
			return true;
		default:
			return false;
		}
	}

	public static boolean isTimelessItem(int itemId) {
		switch (itemId) {
		case 1032031: // shield earring, but technically
		case 1102172:
		case 1002776:
		case 1002777:
		case 1002778:
		case 1002779:
		case 1002780:
		case 1082234:
		case 1082235:
		case 1082236:
		case 1082237:
		case 1082238:
		case 1052155:
		case 1052156:
		case 1052157:
		case 1052158:
		case 1052159:
		case 1072355:
		case 1072356:
		case 1072357:
		case 1072358:
		case 1072359:
		case 1092057:
		case 1092058:
		case 1092059:

		case 1122011:
		case 1122012:

		case 1302081:
		case 1312037:
		case 1322060:
		case 1332073:
		case 1332074:
		case 1372044:
		case 1382057:
		case 1402046:
		case 1412033:
		case 1422037:
		case 1432047:
		case 1442063:
		case 1452057:
		case 1462050:
		case 1472068:
		case 1482023:
		case 1492023:
		case 1342011:
		case 1532015:
		case 1522016:
			// raven.
			return true;
		default:
			return false;
		}
	}

	public static boolean isAngelicBlessSkill(int skill) {
		switch (skill % 10000) {
		case 1085: // ¿£Á©¸¯ ºí·¹½º
		case 1087: // ´ÙÅ© ¿£Á©¸¯ ºí·¹½º
		case 1090: // ´«²É ¿£Á©¸¯ ºí·¹½º
		case 1179: // È­ÀÌÆ® ¿£Á©¸¯ ºí·¹½º
			return true;
		}
		return false;
	}

	public static boolean isAngelicBlessBuff(int skill) {
		switch (skill % 1000) {
		case 86: // ¿£Á©¸¯ ºí·¹½º
		case 88: // ´ÙÅ© ¿£Á©¸¯ ºí·¹½º
		case 91: // ´«²É ¿£Á©¸¯ ºí·¹½º
		case 180: // È­ÀÌÆ® ¿£Á©¸¯ ºí·¹½º
			return true;
		}
		return false;
	}

	public static boolean isAngelicBlessBuffEffectItem(int skill) {
		switch (skill) {
		case 2022746: // ¿£Á©¸¯ ºí·¹½º
		case 2022747: // ´ÙÅ© ¿£Á©¸¯ ºí·¹½º
		case 2022764: // ´«²É ¿£Á©¸¯ ºí·¹½º
		case 2022823: // È­ÀÌÆ® ¿£Á©¸¯ ºí·¹½º
			return true;
		}
		return false;
	}

	public static boolean isSaintSaverSkill(int skill) {
		switch (skill) {
		case 80001034:
		case 80001035:
		case 80001036:
			return true;
		}
		return false;
	}

	public static List<BuffStats> getBroadcastBuffs() {
		List<BuffStats> ret = new ArrayList<BuffStats>();
		ret.add(BuffStats.BLUE_AURA);
		ret.add(BuffStats.COMBO);
		ret.add(BuffStats.CYCLONE);
		ret.add(BuffStats.DARKSIGHT);
		ret.add(BuffStats.DARK_AURA);
		ret.add(BuffStats.DARK_SPECULATION);
		ret.add(BuffStats.FINAL_CUT);
		ret.add(BuffStats.HOLY_SHELL);
		ret.add(BuffStats.LIGHTNING_CHARGE);
		ret.add(BuffStats.WK_CHARGE);
		ret.add(BuffStats.YELLOW_AURA);
		ret.add(BuffStats.WATER_SHIELD);
		ret.add(BuffStats.SHADOWPARTNER);
		ret.add(BuffStats.MORPH);
		ret.add(BuffStats.MECH_CHANGE);
		ret.add(BuffStats.ITEM_EFFECT);
		ret.add(BuffStats.INFLATION);
		ret.add(BuffStats.SAINT_SAVER);
		ret.add(BuffStats.WIND_WALK);
		return ret;
	}

	public static List<Pair<DiseaseStats, Integer>> getBroadcastDebuffs() {
		List<Pair<DiseaseStats, Integer>> ret = new ArrayList<Pair<DiseaseStats, Integer>>();
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.CURSE, 123));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.STUN, 123));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.POISON, 125));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.SEAL, 120));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.DARKNESS, 121));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.WEAKEN, 122));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.SLOW, 126));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.MORPH, 172));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.SEDUCE, 128));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.ZOMBIFY, 133));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.FREEZE, 137));
		ret.add(new Pair<DiseaseStats, Integer>(DiseaseStats.TORNADO, 173));
		return ret;
	}

	public static boolean ¿ë»çÀÇÀÇÁö(int ½ºÅ³) {
		switch (½ºÅ³) {
		case 22171004:
		case 1121011:
		case 1221012:
		case 1321010:
		case 2121008:
		case 2221008:
		case 2321009:
		case 3121009:
		case 3221008:
		case 4121009:
		case 4221008:
		case 4341008:
		case 5121008:
		case 5221010:
		case 21121008:
		case 32121008:
		case 33121008:
		case 35121008:
		case 36121009:
		case 24121009:
		case 23121008:
		case 25121211:
		case 27121010: // ·ç¹Ì³Ê½º
		case 61121015: // Ä«ÀÌÀú
		case 65121010: // ¿£Á©¸¯¹ö½ºÅÍ
			return true;
		}
		return false;
	}

	public static final List<Integer> ¿ë»çÀÇÀÇÁö() {
		final List<Integer> ret = new ArrayList<Integer>();
		ret.add(22171004);
		ret.add(1121011);
		ret.add(1221012);
		ret.add(1321010);
		ret.add(2121008);
		ret.add(2221008);
		ret.add(2321009);
		ret.add(3121009);
		ret.add(4341008);
		ret.add(3221008);
		ret.add(4121009);
		ret.add(4221008);
		ret.add(5121008);
		ret.add(5221010);
		ret.add(5321006);
		ret.add(21121008);
		ret.add(32121008);
		ret.add(33121008);
		ret.add(35121008);
		ret.add(36121009);
		ret.add(25121211);
		ret.add(24121009);
		ret.add(23121008);
		ret.add(27121010); // ·ç¹Ì³Ê½º
		ret.add(61121015); // Ä«ÀÌÀú
		ret.add(65121010); // ¿£Á©¸¯¹ö½ºÅÍ
		return ret;
	}

	public static boolean isProfessionSkill(int skillid) {
		return skillid >= 92000000 && skillid <= 92999999;
	}

	public static int getTraitExpNeededForLevel(final int level) {
		if (level < 0 || level >= cumulativeTraitExp.length) {
			return Integer.MAX_VALUE;
		}
		return cumulativeTraitExp[level];
	}

	public static int getTraitLevel(final int exp) {
		int leftExp = exp;
		int level = 1;
		while (leftExp >= getTraitExpNeededForLevel(level)) {
			level++;
		}
		return level;
	}

	public static int getDamageSkinNumberByItem(int itemid) {
		for (int i = 0; i < dmgskinitem.length; i++) {
			if (dmgskinitem[i] == itemid) {
				return dmgskinnum[i];
			}
		}
		return -1;
	}

	public static int getDamageSkinItemByNumber(int num) {
		for (int i = 0; i < dmgskinnum.length; i++) {
			if (dmgskinnum[i] == num) {
				return dmgskinitem[i];
			}
		}
		return -1;
	}

	public static Integer[] getDamageSkinsTradeBlock() {
		ArrayList<Integer> skins = new ArrayList<>();
		for (int i = 0; i < dmgskinitem.length; i++) {
			if (ItemInformation.getInstance().isOnlyTradeBlock(dmgskinitem[i])) {
				skins.add(dmgskinitem[i]);
			}
		}
		Integer list[] = new Integer[skins.size()];
		return skins.toArray(list);
	}

	public static int getRandomProfessionReactorByRank(int rank) {
		int base1 = 100000;
		int base2 = 200000;
		if (Randomizer.nextBoolean()) {
			if (rank == 1) {
				base1 += Randomizer.rand(0, 7);
			} else if (rank == 2) {
				base1 += Randomizer.rand(4, 9);
			} else if (rank == 3) {
				if (Randomizer.rand(0, 4) == 1) {
					base1 += 11;
				} else {
					base1 += Randomizer.rand(0, 9);
				}
			}
			return base1;
		} else {
			if (rank == 1) {
				base2 += Randomizer.rand(0, 7);
			} else if (rank == 2) {
				base2 += Randomizer.rand(4, 9);
			} else if (rank == 3) {
				if (Randomizer.rand(0, 6) == 1) {
					base2 += 11;
				} else {
					base2 += Randomizer.rand(0, 9);
				}
			}
			return base2;
		}
	}

	public static final List<Integer> getHiddenSkill() {
		final List<Integer> ret = new ArrayList<Integer>();
		ret.add(11110005);
		ret.add(11111006);
		ret.add(11111008);
		ret.add(12111003);
		ret.add(12111007);
		ret.add(12111004);
		ret.add(13111002);
		ret.add(13110003);
		ret.add(13110009);
		ret.add(14111010);
		ret.add(14110004);
		ret.add(15111011);
		ret.add(15111004);
		ret.add(15111005);
		ret.add(100001261);
		ret.add(100000267);
		ret.add(100001272);
		ret.add(100001274);
		ret.add(100001283);
		ret.add(100000280);
		ret.add(100001005);
		return ret;
	}

	public static int getBossReturnMap(int map) {

		switch (map) {
		case 280030000:
		case 280030100:
		case 280030001:
			return 280090000;
		case 240060200: // È¥Å×ÀÏ
		case 240060201: // Ä«¿À½ºÈ¥Å×ÀÏ
			return 240050500;
		case 270050100: // ÇÎÅ©ºó
			return 270050300;
		case 220080001: // ÆÄÇ®
			return 220080000;
		case 230040420: // ÇÇ¾Æ´©½º
			return 230040400;
		case 240020101: // ±×¸®ÇÁ
		case 240020401: // ¸¶´¨
			return 240000000;
		case 271040100: // ½Ã±×³Ê½º
			return 271040200;
		}
		return -1;
	}

	public static boolean isExceptionBanMapId(int map) { // Ä¿´×½ºÄù¾î 3~4Ãþ
		switch (map) {
		case 103040200:
		case 103040201:
		case 103040202:
		case 103040203:
			return true;
		}
		return false;
	}

	public static int getEquipExpPercentage(IEquip e) {
		if (e.getItemLevel() == 0) {
			return 0;
		}
		int exp = e.getItemEXP();
		int level = e.getItemLevel();
		int needexp = GameConstants.getTimelessRequiredEXP(level);
		double percent = (((double) exp / (double) needexp) * 10000000D);
		// System.out.println(e.getItemId() + " : LEVEL "+level +" EXP "+exp + "
		// NEEDEXP "+needexp +" PERCENTAGE "+percent);
		return (int) percent;
	}

	public static int[] getInnerSkillbyRank(int rank) {
		if (rank == 0) {
			return rankC;
		} else if (rank == 1) {
			return rankB;
		} else if (rank == 2) {
			return rankA;
		} else if (rank == 3) {
			return rankS;
		} else {
			return null;
		}
	}

	// ¿¥ÆÛ·¯½º 70°³
	private static int[] aswanRecipes = { 2510483, 2510484, 2510485, 2510486, 2510487, 2510488, 2510489, 2510490,
			2510491, 2510492, 2510493, 2510494, 2510495, 2510496, 2510497, 2510498, 2510499, 2510500, 2510501, 2510502,
			2510503, 2510504, 2510505, 2510506, 2510507, 2510508, 2510509, 2510510, 2510511, 2510512, 2510513, 2510514,
			2510515, 2510516, 2510517, 2510518, 2510519, 2510520, 2510521, 2510522, 2510523, 2510524, 2510525, 2510526,
			2510527, 2511153, 2511154, 2511155 };
	// ÄÁÄõ·¯½º 15°³
	private static int[] aswanScrolls = { 2046060, 2046061, 2046062, 2046063, 2046064, 2046065, 2046066, 2046067,
			2046068, 2046069, 2046141, 2046142, 2046143, 2046144, 2046145, 2046519, 2046520, 2046521, 2046522, 2046523,
			2046524, 2046525, 2046526, 2046527, 2046528, 2046529, 2046530, 2046701, 2046702, 2046703, 2046704, 2046705,
			2046706, 2046707, 2046708, 2046709, 2046710, 2046711, 2046712 };
	private static Pair[] useItems = { new Pair<Integer, Integer>(2002010, 500),
			new Pair<Integer, Integer>(2002006, 600), new Pair<Integer, Integer>(2002007, 600),
			new Pair<Integer, Integer>(2002008, 600), new Pair<Integer, Integer>(2002009, 600),
			new Pair<Integer, Integer>(2022003, 770), new Pair<Integer, Integer>(2022000, 1155),
			new Pair<Integer, Integer>(2001001, 2300), new Pair<Integer, Integer>(2001002, 4000),
			new Pair<Integer, Integer>(2020012, 4680), new Pair<Integer, Integer>(2020013, 5824),
			new Pair<Integer, Integer>(2020014, 8100), new Pair<Integer, Integer>(2020015, 10200),
			new Pair<Integer, Integer>(2000007, 5), new Pair<Integer, Integer>(2000000, 5),
			new Pair<Integer, Integer>(2000008, 48), new Pair<Integer, Integer>(2000001, 48),
			new Pair<Integer, Integer>(2000009, 96), new Pair<Integer, Integer>(2000002, 96),
			new Pair<Integer, Integer>(2000010, 20), new Pair<Integer, Integer>(2000003, 20),
			new Pair<Integer, Integer>(2000011, 186), new Pair<Integer, Integer>(2000006, 186),
			new Pair<Integer, Integer>(2050000, 200), new Pair<Integer, Integer>(2050001, 200),
			new Pair<Integer, Integer>(2050002, 300), new Pair<Integer, Integer>(2050003, 500) };
	// ÄÁÄõ·¯½º µî±Þ * 10°³
	private static int[] circulators = { 2700000, 2700100, 2700200, 2700300, 2700400, 2700500, 2700600, 2700700,
			2700800, 2700900, 2701000 };

	public static int[] getAswanRecipes() {
		return aswanRecipes;
	}

	public static int[] getAswanScrolls() {
		return aswanScrolls;
	}

	public static Pair[] getUseItems() {
		return useItems;
	}

	public static int[] getCirculators() {
		return circulators;
	}

	public static int getBeginnerJobCode(int job) {
		if (isAdventurer(job)) {
			return 0;
		} else if (isKOC(job)) {
			return 1000;
		} else if (isAran(job)) {
			return 2000;
		} else if (isEvan(job)) {
			return 2001;
		} else if (isMercedes(job)) {
			return 2002;
		} else if (isPhantom(job)) {
			return 2003;
		} else if (isLuminous(job)) {
			return 2004;
		} else if (isDemonSlayer(job) || isDemonAvenger(job)) {
			return 3001;
		} else if (isXenon(job)) {
			return 3002;
		} else if (isMikhail(job)) {
			return 5000;
		} else if (isKaiser(job)) {
			return 6000;
		} else if (isAngelicBuster(job)) {
			return 6001;
		} else if (isResistance(job)) {
			return 3000;
		} else if (isZero(job)) {
			return 10000;
		}
		return 0;
	}

	public static int getMaxLevelmip(int lifeid) {
		switch (lifeid) {
		case 1000:
		case 2000:
			return 8;
		case 3000:
		case 3001:
			return 4;
		case 3002:
		case 3003:
			return 2;
		}
		return 1;
	}

	public static int isLightSkillsGaugeCheck(int skillid) {
		switch (skillid) {
		case 20041226: // ½ºÆåÆ®·² ¶óÀÌÆ® (±âº» Á÷¾÷)
			return 110;
		case 27001100: // Æ®À®Å¬ ÇÃ·¡½¬
			return 123;
		case 27101100: // ½ÇÇÇµå ·£¼­
			return 225;
		case 27101101: // ÀÎ¹ÙÀÌ·¯ºô·¯Æ¼
			return 30;
		case 27111100: // ½ºÆåÆ®·² ¶óÀÌÆ®
			return 155;
		case 27111101: // »þÀÎ ¸®µ©¼Ç
			return 50;
		case 27121100: // ¶óÀÌÆ® ¸®ÇÃ·º¼Ç
			return 264;
		default:
			return 0;
		}
	}

	public static int isDarkSkillsGaugeCheck(int skillid) {
		switch (skillid) {
		case 27001201: // ´ÙÅ© Æú¸µ
			return 140;
		case 27101202: // º¸ÀÌµå ÇÁ·¹¼Å
			return 73;
		case 27111202: // ³ì½ºÇÇ¾î
			return 210;
		case 27121201: // ¸ð´× ½ºÅ¸Æú
			return 10;
		case 27121202: // ¾ÆÆ÷Ä®¸³½º
			return 397;
		default:
			return 0;
		}
	}

	public static boolean isLightSkills(int skillid) {
		switch (skillid) {
		case 20041226: // ½ºÆåÆ®·² ¶óÀÌÆ® (±âº» Á÷¾÷)
		case 27001100: // Æ®À®Å¬ ÇÃ·¡½¬
		case 27101100: // ½ÇÇÇµå ·£¼­
		case 27111100: // ½ºÆåÆ®·² ¶óÀÌÆ®
		case 27121100: // ¶óÀÌÆ® ¸®ÇÃ·º¼Ç
			return true;
		}
		return false;
	}

	public static boolean isDarkSkills(int skillid) {
		switch (skillid) {
		case 27001201: // ´ÙÅ© Æú¸µ
		case 27101202: // º¸ÀÌµå ÇÁ·¹¼Å
		case 27111202: // ³ì½ºÇÇ¾î
		case 27121201: // ¸ð´× ½ºÅ¸Æú
		case 27121202: // ¾ÆÆ÷Ä®¸³½º
			return true;
		}
		return false;
	}

	public static boolean isRecoveryIncSkill(final int id) {
		switch (id) {
		case 1110000:
		case 2000000:
		case 1210000:
		case 21100009:
		case 51110000:
		case 61110006:
		case 11110000:
		case 4100002:
		case 4200001:
			return true;
		}
		return false;
	}

	public static int getRecoverySkill(final int jobId) {
		switch (jobId) {
		case 11:
			return 1110000;
		case 20:
			return 2000000;
		case 12:
			return 1210000;
		case 41:
			return 4100002;
		case 42:
			return 4200001;
		case 211:
			return 21100009;
		case 511:
			return 51110000;
		case 611:
			return 61110006;
		case 111:
			return 11110000;
		default:
			return 0;
		}
	}

	public static int getSkillLevel(final int level) {
		if (level >= 70 && level < 120) {
			return 2;
		} else if (level >= 120 && level < 200) {
			return 3;
		} else if (level == 200) {
			return 4;
		}
		return 1;
	}

	public static int[] owlItems = new int[] { 1082002, // work gloves
			2070005, 2070006, 1022047, 1102041, 2044705, 2340000, // white
																	// scroll
			2040017, 1092030, 2040804 };

	public static int getGuildExpNeededForLevel(final int level) {
		if (level < 0 || level >= guildexp.length) {
			return Integer.MAX_VALUE;
		}
		return guildexp[level];
	}

	public static boolean isNoDelaySkill(int skillId) {
		return skillId == 5100015 || skillId == 3111011 || skillId == 3211012 || skillId == 21101003
				|| skillId == 15100004 || skillId == 33101004 || skillId == 32111010 || skillId == 2111007
				|| skillId == 2201009 || skillId == 2211007 || skillId == 2311007 || skillId == 35121005
				|| skillId == 35111004 || skillId == 35121013 || skillId == 35121003 || skillId == 22150004
				|| skillId == 22181004 || skillId == 11101002 || skillId == 13101002 || skillId == 33111011;
	}

	public static int getMPEaterForJob(final int job) {
		switch (job) {
		case 210:
		case 211:
		case 212:
			return 2100000;
		case 220:
		case 221:
		case 222:
			return 2200000;
		case 230:
		case 231:
		case 232:
			return 2300000;
		}
		return 2100000; // Default, in case GM
	}

	public static int getVenomSkill(int job) {
		switch ((int) (job / 10)) {
		case 41:
			return 4110011;
		case 42:
			return 4210010;
		case 43:
			return 4320005;
		case 141:
			return 14110004;
		}
		return 0;
	}

	public static int getFatalVenomSkill(int job) {
		switch ((int) (job / 10)) {
		case 41:
			return 4120011;
		case 42:
			return 4220011;
		case 43:
			return 4340012;
		}
		return 0;
	}

	public static int HyperJob(MapleCharacter chr) {
		if (chr.getJob() >= 0) {
			return chr.getJob();
		}
		return 000;
	}

	public static List<Integer> getHyperSkill(MapleCharacter chr) {
		List<Integer> ret = new ArrayList<>();
		for (int i = 30; i < 53; i++) {
			ret.add(chr.getJob() * 10000 + i);
		}
		for (int i = 1052; i < 1057; i++) {
			ret.add(chr.getJob() * 10000 + i);
		}
		if (chr.getJob() == 2218) {
			for (int i = 1052; i < 1057; i++) {
				ret.add(2217 * 10000 + i);
			}
		}
		if (chr.getJob() == 10112) {
			ret.add(100000267);
			ret.add(100000276);
			ret.add(100000277);
			ret.add(100001261);
			ret.add(100001274);
			ret.add(100001272);
			ret.add(100001283);
			ret.add(100001005);
		}
		return ret;
	}

	public static List<Integer> Àº¿ùÇÏÀÌÆÛ() {
		List<Integer> ret = new ArrayList<>();
		for (int i = 25120133; i < 25120155; i++) {
			ret.add(i);
		}
		ret.add(25121030);
		ret.add(25121131);
		ret.add(25121132);
		return ret;
	}

	public static boolean isWindBreaker(int job) {
		return job == 1000 || (job >= 1300 && job <= 1312);
	}

	public static List<Integer> getHyperSkill(int job) {
		List<Integer> ret = new ArrayList<>();
		for (int i = 30; i < 53; i++) {
			ret.add(job * 10000 + i);
		}
		for (int i = 1052; i < 1057; i++) {
			ret.add(job * 10000 + i);
		}
		if (job == 2218) {
			for (int i = 1052; i < 1057; i++) {
				ret.add(2217 * 10000 + i);
			}
		}
		if (job == 10112) {
			ret.add(100000267);
			ret.add(100000276);
			ret.add(100000277);
			ret.add(100001261);
			ret.add(100001274);
			ret.add(100001272);
			ret.add(100001283);
			ret.add(100001005);
		}
		return ret;
	}

	public static List<Integer> getZeroSkill(MapleCharacter chr) {
		List<Integer> ret = new ArrayList<>();
		// Á¦·Î 1Â÷
		ret.add(101001100);
		ret.add(101001200);
		for (int i = 100; i < 103; i++) {
			ret.add(101000000 + i);
		}
		for (int i = 200; i < 203; i++) {
			ret.add(101000000 + i);
		}
		// Á¦·Î 2Â÷
		ret.add(101101100);
		ret.add(101101200);
		for (int i = 100; i < 102; i++) {
			ret.add(101100000 + i);
		}
		for (int i = 200; i < 203; i++) {
			ret.add(101100000 + i);
		}
		// Á¦·Î 3Â÷
		ret.add(101111100);
		ret.add(101111200);
		for (int i = 101; i < 104; i++) {
			ret.add(101110000 + i);
		}
		for (int i = 200; i < 205; i++) {
			ret.add(101110000 + i);
		}
		// Á¦·Î 4Â÷
		ret.add(101121100);
		ret.add(101121200);
		for (int i = 100; i < 110; i++) {
			ret.add(101120000 + i);
		}
		for (int i = 200; i < 207; i++) {
			ret.add(101120000 + i);
		}
		return ret;
	}

	public static List<Integer> getZeroSkill(int job) {
		List<Integer> ret = new ArrayList<>();
		// Á¦·Î 1Â÷
		ret.add(101001100);
		ret.add(101001200);
		for (int i = 100; i < 103; i++) {
			ret.add(101000000 + i);
		}
		for (int i = 200; i < 203; i++) {
			ret.add(101000000 + i);
		}
		// Á¦·Î 2Â÷
		ret.add(101101100);
		ret.add(101101200);
		for (int i = 100; i < 102; i++) {
			ret.add(101100000 + i);
		}
		for (int i = 200; i < 203; i++) {
			ret.add(101100000 + i);
		}
		// Á¦·Î 3Â÷
		ret.add(101111100);
		ret.add(101111200);
		for (int i = 101; i < 104; i++) {
			ret.add(101110000 + i);
		}
		for (int i = 200; i < 205; i++) {
			ret.add(101110000 + i);
		}
		// Á¦·Î 4Â÷
		ret.add(101121100);
		ret.add(101121200);
		for (int i = 100; i < 110; i++) {
			ret.add(101120000 + i);
		}
		for (int i = 200; i < 207; i++) {
			ret.add(101120000 + i);
		}
		return ret;
	}

	public static boolean isHyperFourthJob(int job) {
		switch (job) {
		case 112:
		case 122:
		case 132:
		case 212:
		case 222:
		case 232:
		case 312:
		case 322:
		case 412:
		case 422:
		case 512:
		case 532:
		case 1512:
		case 2112:
		case 2218:
		case 2217:
		case 2312:
		case 2412:
		case 2512:
		case 2712:
		case 3112:
		case 3122:
		case 3212:
		case 3312:
		case 3512:
		case 3612:
		case 5112:
		case 6112:
		case 6512:
		case 10112:
			return true;
		}
		return false;
	}

	public static boolean isDropEffect(int effect) {
		return (effect >= 1 && effect <= 4);
	}

	public final static boolean SurfaceDamageSkillLink(int skillid) {
		switch (skillid) {
		case 12121001:
		case 12120011:
		case 4221016:
		case 4221052:
		case 12121055:
		case 35121013:
			return true;
		}
		return false;
	}

	public static boolean isSoulEnchanter(int scrollId) {
		return scrollId / 100 == 25900;
	}

	public static boolean isSoulScroll(int scrollId) {
		return scrollId / 1000 == 2591;
	}

	public static short getSoulName(int soulid) {
		return (short) (soulid - 2591000 + 1);
	}

	public static short getSoulEnchanter(int itemid) {
		return 10;
	}

	public static short getSoulPotential(int soulid) {
		short potential = 0;
		for (int i = 0; i < soulItemid.length; i++) {
			if (soulItemid[i] == soulid) {
				potential = soulPotentials[i];
				break;
			}
		}
		return potential;
	}

	public static int getSoulSkill(int soulid) {
		int skillid = 0;
		switch (soulid) {
		case 2591045:
		case 2591046:
		case 2591047:
		case 2591048:
		case 2591049:
		case 2591050:
		case 2591051:
		case 2591052:
		case 2591053:
		case 2591054:
		case 2591124:
		case 2591125:
		case 2591126:
		case 2591127:
		case 2591128:
		case 2591129:
		case 2591130:
		case 2591131:
			skillid = 80001210;
			break;
		case 2591031:
		case 2591032:
		case 2591033:
		case 2591034:
		case 2591035:
		case 2591036:
		case 2591037:
		case 2591110:
		case 2591111:
		case 2591112:
		case 2591113:
		case 2591114:
		case 2591115:
		case 2591116:
			skillid = 80001012;
			break;
		case 2591017:
		case 2591018:
		case 2591019:
		case 2591020:
		case 2591021:
		case 2591022:
		case 2591023:
		case 2591096:
		case 2591097:
		case 2591098:
		case 2591099:
		case 2591100:
		case 2591101:
		case 2591102:
			skillid = 80001213;
			break;
		case 2591024:
		case 2591025:
		case 2591026:
		case 2591027:
		case 2591028:
		case 2591030:
		case 2591103:
		case 2591104:
		case 2591105:
		case 2591106:
		case 2591107:
		case 2591108:
		case 2591109:
			skillid = 80001214;
			break;
		case 2591065:
		case 2591066:
		case 2591067:
		case 2591068:
		case 2591069:
		case 2591070:
		case 2591071:
		case 2591072:
		case 2591073:
		case 2591074:
		case 2591132:
		case 2591133:
		case 2591134:
		case 2591135:
		case 2591136:
		case 2591137:
		case 2591138:
		case 2591139:
			skillid = 80001215;
			break;
		case 2591155:
		case 2591156:
		case 2591157:
		case 2591158:
		case 2591159:
		case 2591160:
		case 2591161:
		case 2591162:
		case 2591171:
		case 2591172:
		case 2591173:
		case 2591174:
		case 2591175:
		case 2591176:
		case 2591177:
		case 2591178:
			skillid = 80001216;
			break;
		case 2591010:
		case 2591011:
		case 2591012:
		case 2591013:
		case 2591014:
		case 2591015:
		case 2591016:
		case 2591089:
		case 2591090:
		case 2591091:
		case 2591092:
		case 2591093:
		case 2591094:
		case 2591095:
			skillid = 80001217;
			break;
		case 2591038:
		case 2591039:
		case 2591040:
		case 2591041:
		case 2591042:
		case 2591043:
		case 2591044:
		case 2591117:
		case 2591118:
		case 2591119:
		case 2591120:
		case 2591121:
		case 2591122:
		case 2591123:
			skillid = 80001218;
			break;
		case 2591055:
		case 2591056:
		case 2591057:
		case 2591058:
		case 2591059:
		case 2591060:
		case 2591061:
		case 2591062:
		case 2591063:
		case 2591064:
		case 2591140:
		case 2591141:
		case 2591142:
		case 2591143:
		case 2591144:
		case 2591145:
		case 2591146:
		case 2591147:
			skillid = 80001219;
			break;
		case 2591085:
			skillid = 80001267;
			break;
		case 2591075:
		case 2591076:
		case 2591077:
		case 2591078:
		case 2591079:
		case 2591080:
		case 2591081:
		case 2591082:
		case 2591179:
		case 2591180:
		case 2591181:
		case 2591182:
		case 2591183:
		case 2591184:
		case 2591185:
		case 2591186:
			skillid = 80001266;
			break;
		case 2591086:
			skillid = 80001268;
			break;
		case 2591087:
			skillid = 80001269;
			break;
		case 2591088:
			skillid = 80001270;
			break;
		case 2591148:
		case 2591149:
		case 2591150:
		case 2591151:
		case 2591152:
		case 2591153:
		case 2591154:
		case 2591164:
		case 2591165:
		case 2591166:
		case 2591167:
		case 2591168:
		case 2591169:
		case 2591170:
			skillid = 80001273;
			break;
		case 2591163:
			skillid = 80001274;
			break;
		case 2591187:
		case 2591188:
		case 2591189:
		case 2591190:
		case 2591191:
		case 2591192:
		case 2591193:
		case 2591203:
		case 2591204:
		case 2591205:
		case 2591206:
		case 2591207:
		case 2591208:
		case 2591209:
			skillid = 80001280;
			break;
		case 2591194:
		case 2591195:
		case 2591196:
		case 2591197:
		case 2591198:
		case 2591199:
		case 2591200:
		case 2591201:
		case 2591210:
		case 2591211:
		case 2591212:
		case 2591213:
		case 2591214:
		case 2591215:
		case 2591216:
		case 2591217:
			skillid = 80001281;
			break;
		case 2591202:
			skillid = 80001282;
			break;
		case 2591218:
		case 2591219:
		case 2591220:
		case 2591221:
		case 2591222:
		case 2591223:
		case 2591224:
		case 2591234:
		case 2591235:
		case 2591236:
		case 2591237:
		case 2591238:
		case 2591239:
		case 2591240:
			skillid = 80001321;
			break;
		case 2591225:
		case 2591226:
		case 2591227:
		case 2591228:
		case 2591229:
		case 2591230:
		case 2591231:
		case 2591232:
		case 2591241:
		case 2591242:
		case 2591243:
		case 2591244:
		case 2591245:
		case 2591246:
		case 2591247:
		case 2591248:
			skillid = 80001322;
			break;
		case 2591233:
			skillid = 80001323;
			break;
		case 2591249:
		case 2591250:
		case 2591251:
		case 2591252:
		case 2591253:
		case 2591254:
		case 2591255:
		case 2591265:
		case 2591266:
		case 2591267:
		case 2591268:
		case 2591269:
		case 2591270:
			skillid = 80001339;
			break;
		case 2591256:
		case 2591257:
		case 2591258:
		case 2591259:
		case 2591260:
		case 2591261:
		case 2591262:
		case 2591263:
		case 2591272:
		case 2591273:
		case 2591274:
		case 2591275:
		case 2591276:
		case 2591277:
		case 2591278:
		case 2591279:
			skillid = 80001340;
			break;
		case 2591264: // mag mag
			skillid = 80001341;
			break;
		case 2591288:
		case 2591289:
		case 2591290:
		case 2591291:
		case 2591292:
		case 2591293:
		case 2591294:
		case 2591295:
			skillid = 80001395;
			break;
		case 2591296:
			skillid = 80001396;
			break;
		case 2591297:
		case 2591298:
		case 2591299:
		case 2591300:
		case 2591301:
		case 2591302:
		case 2591303:
		case 2591304:
		case 2591342:
		case 2591343:
		case 2591344:
		case 2591345:
		case 2591346:
		case 2591347:
		case 2591348:
		case 2591349:
			skillid = 80001493;
			break;
		case 2591305:
			skillid = 80001494;
			break;
		case 2591306:
		case 2591307:
		case 2591308:
		case 2591309:
		case 2591310:
		case 2591311:
		case 2591312:
		case 2591313:
		case 2591350:
		case 2591351:
		case 2591352:
		case 2591353:
		case 2591354:
		case 2591355:
		case 2591356:
		case 2591357:
			skillid = 80001495;
			break;
		case 2591314:
			skillid = 80001496;
			break;
		case 2591315:
		case 2591316:
		case 2591317:
		case 2591318:
		case 2591319:
		case 2591320:
		case 2591321:
		case 2591322:
		case 2591358:
		case 2591359:
		case 2591360:
		case 2591361:
		case 2591362:
		case 2591363:
		case 2591364:
		case 2591365:
			skillid = 80001497;
			break;
		case 2591323:
			skillid = 80001498;
			break;
		case 2591324:
		case 2591325:
		case 2591326:
		case 2591327:
		case 2591328:
		case 2591329:
		case 2591330:
		case 2591331:
		case 2591366:
		case 2591367:
		case 2591368:
		case 2591369:
		case 2591370:
		case 2591371:
		case 2591372:
		case 2591373:
			skillid = 80001499;
			break;
		case 2591332:
			skillid = 80001500;
			break;
		case 2591333:
		case 2591334:
		case 2591335:
		case 2591336:
		case 2591337:
		case 2591338:
		case 2591339:
		case 2591340:
		case 2591374:
		case 2591375:
		case 2591376:
		case 2591377:
		case 2591378:
		case 2591379:
		case 2591380:
		case 2591381:
			skillid = 80001501;
			break;
		case 2591341:
			skillid = 80001502;
			break;
		case 2591419: // regular lotus souls
		case 2591420:
		case 2591421:
		case 2591422:
		case 2591423:
		case 2591424:
		case 2591425:
		case 2591426:
			skillid = 80001696;
			break;
		case 2591427: // magnificent lotus soul
			skillid = 80001697;
			break;
		case 2591029:
		case 2591083:
		case 2591084:
		case 2591271:
		case 2591280:
		case 2591281:
		case 2591282:
		case 2591283:
		case 2591284:
		case 2591285:
		case 2591286:
		case 2591287:
		}
		return skillid;
	}

	public static int getHonorable(final int itemId) {
		switch (itemId) {
		case 2591085:
			return 80001267; // Áö¿ÁºÒ ÀçÃ¼±â(¹ß·Ï)
		case 2591086:
			return 80001268;// ¹Ý·¹¿Â
		case 2591087:
			return 80001269;// ÇÎÅ©ºó
		case 2591088:
			return 80001270;// ½Ã±×³Ê½º
		case 2591202:
			return 80001282;// ¾ÆÄ«ÀÌ·³
		case 2591163:
			return 80001274;// ÀÚÄñ
		case 2591233:
			return 80001323;// Èú¶ó
		case 2591264:
			return 80001341;// ¸Å±×³Ê½º
		case 2591296:
			return 80001396;// ¹«¸£¹«¸£
		case 2591305:
			return 80001494;// ¸ðÄ«µò
		case 2591314:
			return 80001496;// Ä«¸®¾ÆÀÎ
		case 2591323:
			return 80001498;// cq57
		case 2591332:
			return 80001500;// ÁÙ¶óÀÌ
		case 2591341:
			return 80001502;// ÇÃ·¹µå
		case 2591427:
			return 80001697; // lotus enraged
		default:
			return 0;
		}
	}

	public static int getTheSidTower(int i) {
		switch (i) {
		case 992001000:
			return 1;
		case 992002000:
			return 2;
		case 992003000:
			return 3;
		case 992004000:
			return 4;
		case 992005000:
			return 5;
		case 992006000:
			return 6;
		case 992007000:
			return 7;
		case 992008000:
			return 8;
		case 992009000:
			return 9;
		case 992010000:
			return 10;
		case 992011000:
			return 11;
		case 992012000:
			return 12;
		case 992013000:
			return 13;
		case 992014000:
			return 14;
		case 992015000:
			return 15;
		case 992016000:
			return 16;
		case 992017000:
			return 17;
		case 992018000:
			return 18;
		case 992019000:
			return 19;
		case 992020000:
			return 20;
		case 992021000:
			return 21;
		case 992022000:
			return 22;
		case 992023000:
			return 23;
		case 992024000:
			return 24;
		case 992025000:
			return 25;
		case 992026000:
			return 26;
		case 992027000:
			return 27;
		case 992028000:
			return 28;
		case 992029000:
			return 29;
		case 992030000:
			return 30;
		case 992031000:
			return 31;
		case 992032000:
			return 32;
		case 992033000:
			return 33;
		case 992034000:
			return 34;
		case 992035000:
			return 35;
		case 992036000:
			return 36;
		case 992037000:
			return 37;
		case 992038000:
			return 38;
		case 992039000:
			return 39;
		case 992040000:
			return 40;
		case 992041000:
			return 41;
		case 992042000:
			return 42;
		case 992043000:
			return 43;
		case 992044000:
			return 44;
		case 992045000:
			return 45;
		case 992046000:
			return 46;
		case 992047000:
			return 47;
		case 992048000:
			return 48;
		case 992049000:
			return 49;
		case 992050000:
			return 50;
		}
		return 0;
	}

	public static int getTheSidMap(int i) {
		switch (i) {
		case 1:
			return 992001000;
		case 2:
			return 992002000;
		case 3:
			return 992003000;
		case 4:
			return 992004000;
		case 5:
			return 992005000;
		case 6:
			return 992006000;
		case 7:
			return 992007000;
		case 8:
			return 992008000;
		case 9:
			return 992009000;
		case 10:
			return 992010000;
		case 11:
			return 992011000;
		case 12:
			return 992012000;
		case 13:
			return 992013000;
		case 14:
			return 992014000;
		case 15:
			return 992015000;
		case 16:
			return 992016000;
		case 17:
			return 992017000;
		case 18:
			return 992018000;
		case 19:
			return 992019000;
		case 20:
			return 992020000;
		case 21:
			return 992021000;
		case 22:
			return 992022000;
		case 23:
			return 992023000;
		case 24:
			return 992024000;
		case 25:
			return 992025000;
		case 26:
			return 992026000;
		case 27:
			return 992027000;
		case 28:
			return 992028000;
		case 29:
			return 992029000;
		case 30:
			return 992030000;
		case 31:
			return 992031000;
		case 32:
			return 992032000;
		case 33:
			return 992033000;
		case 34:
			return 992034000;
		case 35:
			return 992035000;
		case 36:
			return 992036000;
		case 37:
			return 992037000;
		case 38:
			return 992038000;
		case 39:
			return 992039000;
		case 40:
			return 992040000;
		case 41:
			return 992041000;
		case 42:
			return 992042000;
		case 43:
			return 992043000;
		case 44:
			return 992044000;
		case 45:
			return 992045000;
		case 46:
			return 992046000;
		case 47:
			return 992047000;
		case 48:
			return 992048000;
		case 49:
			return 992049000;
		case 50:
			return 992050000;
		}
		return 0;
	}

	public static String getTheSidName(String name) {
		try {
			Connection con = MYSQL.getConnection();
			PreparedStatement ps = con.prepareStatement("SELECT * FROM thesid WHERE name = ?");
			ps.setString(1, name);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				return rs.getString("name");
			}
			rs.close();
		} catch (SQLException ex) {
			return null;
		}
		return null;
	}

	public static void setTheSid(int floor, int time, String name, MapleCharacter chr) {
		if (getTheSidName(chr.getName()) == null) {
			try {
				Connection con = MYSQL.getConnection();
				PreparedStatement ps = null;
				String query = "INSERT into `thesid` (`name`, `floor`, `time`, `gm`) VALUES ('";
				query = new StringBuilder().append(query).append(name).toString();
				query = new StringBuilder().append(query).append("', '").toString();
				query = new StringBuilder().append(query).append(floor).toString();
				query = new StringBuilder().append(query).append("', '").toString();
				query = new StringBuilder().append(query).append(time).toString();
				query = new StringBuilder().append(query).append("', '").toString();
				query = new StringBuilder().append(query).append(0).toString();
				query = new StringBuilder().append(query).append("')").toString();
				ps = con.prepareStatement(query);
				ps.executeUpdate();
				ps.close();
			} catch (SQLException ex) {

			}
		} else {
			try {
				Connection con = MYSQL.getConnection();
				PreparedStatement ps = con
						.prepareStatement("UPDATE thesid SET floor = ?, time = ?, gm = ? WHERE name = ?");
				ps.setInt(1, floor);
				ps.setInt(2, time);
				ps.setInt(3, 0);
				ps.setString(4, name);
				ps.executeUpdate();
				ps.close();
			} catch (SQLException ex) {

			}
		}
		System.out.println(time);
	}

	public static int getTheSid(int type) throws SQLException {
		// type = 1 : Ãþ¼ö
		// type = 2 : ¸ÊÄÚµå
		int b = 0;
		ResultSet con = MYSQL.getConnection()
				.prepareStatement("SELECT * FROM thesid WHERE id = 0 ORDER BY number DESC LIMIT 1").executeQuery();
		while (con.next()) {
			if (type == 1) {
				b = con.getInt("number");
			} else if (type == 2) {
				b = con.getInt("mapid");
			}
		}
		return b;
	}

	public static int getTheSidMob(int i) {
		if (i == 50) {
			return 9309205;
		} else if (i == 40) {
			return 9309200;
		} else if (i == 30) {
			return 9309203;
		} else if (i == 20) {
			return 9309207;
		} else if (i == 10) {
			return 9309201;
		} else {
			return 0;
		}
	}

	/**
	 * @³¡
	 */
	public static final int getLinkedAranSkill(final int id) {
		switch (id) {
		case 21110007:
		case 21110008:
			return 21110002;
		case 21120009:
		case 21120010:
			return 21120002;
		case 4321001:
			return 4321000;
		case 33101006:
		case 33101007:
			return 33101005;
		case 33101008:
			return 33101004;
		case 35101009:
		case 35101010:
			return 35100008;
		case 35121013:
			return 35111004;
		case 41110008:
			return 41001001;
		case 35121011:
			return 35121009;
		case 35111009:
		case 35111010: //
			return 35111001;
		case 35100004:
			return 35101004;
		case 35001001:
			return 35101009;
		case 32001007:
		case 32001008:
		case 32001009:
		case 32001010:
		case 32001011:
			return 32001001;
		case 5300007:
			return 5301001;
		case 5320011:
			return 5321004;
		case 23101007:
			return 23101001;
		case 23111010:
		case 23111009:
			return 23111008;
		case 31001006:
		case 31001007:
		case 31001008:
			return 31000004;
		// ï¿½Æ·ï¿½ï¿½ï¿½ï¿½Í·ï¿½Ì³Ê½ï¿?
		case 27120211:
			return 27121201; // ï¿½ï¿½ï¿?ï¿½ï¿½Å¸ï¿½ï¿½
		// ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ì³Ê½ï¿?
		// ï¿½Æ·ï¿½ï¿½ï¿½ï¿½ï¿½Ä«ï¿½ï¿½ï¿½ï¿½
		// case 60000220:
		// case 60000221:
		// return 60000219;
		case 61001004:
		case 61001005:
		case 61110212:
		case 61120219:
			return 61001000; // ï¿½å·¡ï¿½ï½½ï¿½ï¿½ï¿½ï¿½
		case 61111113:
			return 61111100; // ï¿½ï¿½ï¿½ï¿½Æ® - Ä¿ï¿½Çµï¿½
		case 61121201:
			return 61121100; // ï¿½â°¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½
		case 61121203:
			return 61121102; // ï¿½ï¿½ç½ºÆ?¿½ï¿?
		case 61110009:
			return 61111003; // ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ï¿½ï¿½Æ®ï¿½ï¿½ï¿½ï¿½
		case 61121217:
			return 61120007; // ¾îµå¹ê½ºµå ¿ù¿Àºê¼Òµå
		case 61121116:
			return 61121104; // ï¿½Òµå½ºÆ®ï¿½ï¿½ï¿½ï¿½Å© - ï¿½ï¿½ï¿½ï¿½
		case 65101006:
			return 65101106;
		case 65121007:
		case 65121008:
			return 65121101;
		// case 61120018:
		// return 61121105;
		// Ä«ï¿½ï¿½ï¿½ï¿½
		case 65111007: // ï¿½Ò¿ï¿½ ï¿½ï¿½Ä¿
			return 65111100;
		case 24121010:
			return 24121003;
		case 24111008:
			return 24111006;
		case 61120008:
			return 61111008;
		case 51100006:
			return 51101006;
		case 31011004:
		case 31011005:
		case 31011006:
		case 31011007:
			return 31011000;
		case 31201007:
		case 31201008:
		case 31201009:
		case 31201010:
			return 31201000;
		case 31211007:
		case 31211008:
		case 31211009:
		case 31211010:
			return 31211000;
		case 31221009:
		case 31221010:
		case 31221011:
		case 31221012:
			return 31221000;
		case 31211011:
			return 31211002;
		case 31221014:
			return 31221001;
		case 36101008:
		case 36101009:
			return 36101000;
		case 36111009:
		case 36111010:
			return 36111000;
		case 36121011:
		case 36121012:
			return 36121001;
		case 35100009:
			return 35100009;
		case 2121055:
			return 2121052;
		}
		return id;
	}

	public static boolean iskaiser_Transfiguration_Skill(int id) {
		Skill skill = (Skill) SkillFactory.getSkill(getLinkedAranSkill(id));
		if ((skill.getId() == 61111114) || (skill.getId() == 61121015) || (skill.getId() == 61121116)
				|| (skill.getId() == 61120018) || (skill.getId() == 61001004) || (skill.getId() == 61001005)
				|| (skill.getId() == 61110009) || (skill.getId() == 61111113) || (skill.getId() == 61120008)) {
			return true;
		}
		return false;
	}

	public static final boolean isMist(int sourceid) {
		return (sourceid == 2111003 || sourceid == 100001261 || sourceid == 2311011 || sourceid == 35121010
				|| sourceid == 4221006 || sourceid == 14111006 || sourceid == 22181002 || sourceid == 22161003
				|| sourceid == 32121006 || sourceid == 4121015 || sourceid == 61121105 || sourceid == 36121007
				|| sourceid == 25111206 || sourceid == 80001431); // poison
																	// mist,
																	// smokescreen
																	// and flame
																	// gear
	}

	public static final boolean isSuperior(final int itemId) {
		return (itemId >= 1102471 && itemId <= 1102485) || (itemId >= 1072732 && itemId <= 1072747)
				|| (itemId >= 1132164 && itemId <= 1132178) || (itemId >= 1122241 && itemId <= 1122245)
				|| (itemId >= 1082543 && itemId <= 1082547);
	}

	public static int getEmpress_ForJob(int job) {
		return MapleCharacterStat.getSkillByJob(73, job);
	}

	public static int getMountItemEx(int buffid) {
		final int riding = 1932000;
		switch (buffid) {
		case 1204: // ¹èÆ²½±
			return riding + 0;
		case 80001163: // ½ºÆäÀÌ½º½±
			return riding + 2;
		case 80001449: // ½ºÆäÀÌ½º½±2
			return riding + 225;
		case 80001450: // ¿ÀÅä¹ÙÀÌ2
			return riding + 226;
		case 80001451: // ½´Æ®2
			return riding + 227;
		case 80001026: // ºøÀÚ·ç ok
			return riding + 5;
		case 80001003: // ¸ñ¸¶ ok
			return riding + 6;
		case 80001004: // ¾Ç¾î ok
			return riding + 7;
		case 80001005: // ¿ÀÅä¹ÙÀÌ (°¥»ö) ok
			return riding + 8;
		case 80001006: // ¿ÀÅä¹ÙÀÌ (ºÐÈ«»ö) ok
			return riding + 9;
		case 80001007: // ±¸¸§ ok
			return riding + 11;
		case 80001008: // ÁøÂ¥ ¹ß·Ï ok
			return riding + 10;
		case 80001009: // ·¹ÀÌ½ÌÄ« ok
			return riding + 13;
		case 80001010: // ÇÇ½Ã¹æ È£¶ûÀÌ ok
			return riding + 14;
		case 80001011: // ¹Ì½ºÆ® ¹ß·Ï (ÀüÃ¼¸ð½À) ok
			return riding + 12;
		case 80001013: // ÁÖÈ²¹ö¼¸ ok
			return riding + 23;
		case 80001014: // ºÒÅ¸´Â ¸» ok
			return riding + 25;
		case 80001015: // Å¸Á¶ ok
			return riding + 26;
		case 80001016: // ÇÎÅ©°õ ¿­±â±¸ ok
			return riding + 27;
		case 80001017: // ÆÄ¶û ·Îº¿ ok
			return riding + 28;
		case 80001018: // ¿ÀÅä¹ÙÀÌ (»¡°­»ö) ok
			return riding + 34;
		case 80001019: // ÆÄ¿öµå ½´Æ® ok
			return riding + 35;
		case 80001020: // ¶óÀÌ¾ðÅ· ok
			return riding + 41;
		case 80001021: // ºí·ç ½ºÄí´õ ok
			return riding + 43;
		case 80001022: // ·çµ¹Çª °³»ß´ë ok
			return riding + 44;
		case 80001023: // º¹ÁÖ¸Ó´Ï ok
			return riding + 48;
		case 80001027: // ³ª¹« ºñÇà±â ok
			return riding + 49;
		case 80001028: // »¡°£ ºñÇà±â ok
			return riding + 50;
		case 80001038: // È²±Ý Àå½Ä ¹è ok
			return riding + 53;
		case 80001030: // ´ß ok
			return riding + 54;
		case 80001031: // ºÎ¾ûÀÌ ok
			return riding + 55;
		case 80001032: // ÆÄ¶û ÀÚµ¿Â÷ ok
			return riding + 56;
		case 80001033: // Ä«´Ï¹ß ¶óÀÌµù ok
			return riding + 57;
		case 80001044: // ²¿¸¶Åä±â ok
			return riding + 90;
		case 80001082: // È²¼Ò ok
			return riding + 93;
		case 80001083: // ¼ö·¹²ÛÅä³¢ ok
			return riding + 94;
		case 80001084: // ½Ã¹ß¹«¼­¿îÅä³¢ ok
			return riding + 95;
		case 80001090: // ÃßÀå¸äµÅÁö ok
			return riding + 96;
		case 80001137: // °ËÀººÎ¾ûÀÌ ok
			return riding + 110;
		case 80001144: // ·ùÈ£¼ö·¹²Û ok
			return riding + 113;
		case 80001148: // »¡°£ºØºØÂ÷ ok
			return riding + 114;
		case 80001149: // ¸ÚÁø ·Îº¿ ok
			return riding + 115;
		case 80001198: // µå·¡°í´ÏÄ« ok
			return riding + 140;
		case 80001220: // ÆÒÅÒ ok
			return riding + 143;
		case 80001221: // ¾Æ¸®¾Æ ok
			return riding + 144;
		case 80001228: // Àç±Ô¾î ok
			return riding + 148;
		case 80001237: // ºí·¢¿ÍÀÌ¹ø ok
			return riding + 153;
		case 80001243: // ¿Ü¹ßÀÚÀü°Å ok
			return riding + 156;
		case 80001244: // °Ü¿ï¿Õ±¹ ok
			return riding + 157;
		case 80001246: // ´Þ ok
			return riding + 159;
		case 80001257: // ÇÎÅ©ºó µÕµÕ ok
			return riding + 161;
		case 80001258: // ºí·¢ºó µÕµÕ ok
			return riding + 162;
		case 80001261: // ¾î¶² ÀÌ»óÇÑ³â ok
			return riding + 164;
		case 80001285: // Ç³¼± µÕµÕ ok
			return riding + 167;
		case 80001289: // µ¥ºñÁ¸ ok
			return riding + 170;
		case 80001290: // ½Åºñ¸ñ¸¶ ok
			return riding + 171;
		case 80001292: // ¾î¸°¿ÕÀÚ ok
			return riding + 173;
		case 80001302: // °ËÀº µå·¡°ï ok
			return riding + 178;
		case 80001304: // ¸äµÅÁö ok
			return riding + 179;
		case 80001305: // Àººû°¥±â ok
			return riding + 180;
		case 80001306: // ·¹µå µå¶óÄÚ ok
			return riding + 181;
		case 80001307: // Æ¼Æ¼¾Æ³ª ok
			return riding + 182;
		case 80001308: // Æ¼Æ¼¿À ok
			return riding + 183;
		case 80001309: // ½ÅÁ¶ ok
			return riding + 184;
		case 80001312: // ·ùÈ£ 1 ok
			return riding + 187;
		case 80001313: // ·ùÈ£ 2 ok
			return riding + 188;
		case 80001314: // ·ùÈ£ 3 ok
			return riding + 189;
		case 80001315: // ·ùÈ£ 4 ok
			return riding + 190;
		case 80001316: // ¿¡¹Ý 1 ok
			return riding + 191;
		case 80001317: // ¿¡¹Ý 2 ok
			return riding + 192;
		case 80001318: // ¿¡¹Ý 3 ok
			return riding + 193;
		case 80001319: // ÇÏÀÌ¿¡³ª ok
			return riding + 194;
		case 80001327: // ´ö´ö ok
			return riding + 198;
		case 80001331: // º¸¼® ¼½½º ok
			return riding + 199;
		case 80001336: // ÇÏ¾áº´¾Æ¸® ok
			return riding + 200;
		case 80001338: // Àå³­°¨ ok
			return riding + 201;
		case 80001333: // »¡°£±ÙµÎ¿î ok
			return riding + 205;
		case 80001347: // ¾Ç¸¶³â ok
			return riding + 207;
		case 80001348: // ÈüÇÕ ok
			return riding + 208;
		case 80001353: // ¾Ç¸¶³â2 ok
			return riding + 211;
		case 80001413: // Àï¹Ý ok
			return riding + 219;
		case 80001421: // ¸¶Â÷ ok
			return riding + 221;
		case 80001423: // º§·ë ok
			return riding + 222;
		case 80001445: // ºû³¯°³ ok
			return riding + 242;
		case 80001447: // ¾îµÒ³¯°³ ok
			return riding + 243;
		case 80001484: // ºÎÃ÷ ok
			return riding + 235;
		case 80001508: // ¾óÀ½¸» ok
			return riding + 244;
		case 80001345:// ÇìÄ«ÅæÁÖ¸Ô
			return riding + 204;
		case 80001199:// µ¶¼öÀ¸¸® ´ëÃ³
			return riding + 256;
		case 80001490: // ³ªÀ¸¸® ´ëÃ³
			return riding + 259;
		case 80001491: // Çï¸®ÄßÅÍ ´ëÃ³
			return riding + 258;
		case 80001505: // Áö°¢Çß´ç
			return riding + 251;
		case 80001492: // ²Ü²Ü³ªºñ
			return riding + 249;
		case 80001503: // Åõ¸í¹ß·Ï
			return riding + 12;
		case 80001531: // ÀÌ»óÇÑ¸»
			return riding + 253;
		case 80001549: // ¸ÞÀÌÇÃÂ÷?
			return riding + 254;
		case 80001550: // ÆÒ´õ
			return riding + 255;
		case 80001355:// µ¹°í·¡
			return riding + 212;
		case 80001411:// Á»ºñÆ®·°
			return riding + 218;
		case 80001552: // µ¶¼öÀ¸¸®
		case 80001553:
			return +256;
		case 80001554: // Çï¸®ÄßÅÍ?
		case 80001555:
			return +258;
		case 80001557:// ³ªÀ¸¸®
		case 80001558:
			return +259;
		default:
			return 0;
		}
	}

	public static boolean È¯»ýÀÇºÒ²É¾ÆÀÌÅÛ(int id) {
		int itemid[] = { 1000000 };
		for (Integer s : itemid) {
			if (s == id) {
				return true;
			}
		}
		return false;
	}

	public static String PVP·©Å©(int a) {
		String name = "";
		if (a >= 1000) {
			name = "Ã§¸°Àú(Challenger)";
		} else if (a >= 800) {
			name = "´ÙÀÌ¾Æ¸óµå(Diamond)";
		} else if (a >= 500) {
			name = "ÇÃ·¹Æ¼³Ñ(Platinum)";
		} else if (a >= 300) {
			name = "°ñµå(Gold)";
		} else if (a >= 100) {
			name = "½Ç¹ö(Silver)";
		} else if (a > 0) {
			name = "ºê·ÐÁî(Bronze)";
		} else {
			name = "¸¶½ºÅÍ";
		}
		return name;
	}

	public static boolean ¿¥ºí·½(int code) {
		int itemid[] = { 1182000, 1182001, 1182002, 1182003, 1182005, 1182006, 1182007, 1182009, 1182010, 1182011,
				1182019, 1182021, 1182022, 1182023, 1182053, 1182056, 1182058, 1182059, 1182061, 1182062, 1182063,
				1182064, 1182066, 1182067, 1182069, 1182071, 1190000, 1190001 };
		for (Integer id : itemid) {
			if (id == code) {
				return true;
			}
		}
		return false;
	}
}
