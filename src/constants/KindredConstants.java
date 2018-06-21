package constants;

public class KindredConstants {

	/**
	 * General Server Settings
	 * 
	 * Setting USING_SETTINGS to false will bypass the rates defined in the
	 * properties file.
	 */

	public static boolean USING_SETTINGS = false; // using Settings.properties file

	public static int EXP_RATE = 5;

	public static int MESO_RATE = 3;

	public static int DROP_RATE = 1;

	/**
	 * Content Settings
	 * 
	 * Please define exclusions in the global drop table in the BUFFED_DROPS
	 * array.
	 */

	public static byte[] BUFFED_CHANNELS = { 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 };

	public static int[] BUFFED_DROPS = { 1112663, 1052882, 1152174, 1073030, 1004422, 1102775, 1102794, 1082637,
			1073032, 1152177, 1004424, 1102795, 1082638, 1052888, 1073033, 1004425, 1102796, 1082639, 1052889, 1073034,
			1672040, 1662044, 1662043, 1662036, 1662035, 1082543, 1662044, 1662045, 1662046, 1142006, 3700334, 1112585,
			1112586, 1212115, 1242116, 2049153, 1152155, 1113055, 1302333, 1312199, 1322250, 1332274, 1362135, 1432214,
			1442268, 1452252, 1462239, 1472261, 1492231, 1522138, 1532144, 1342101, 1122150, 2070024, 1152176, 1004423,
			2431404 };

	/**
	 * Custom NPCs for Reference
	 */

	public static final int UPGRADE_NPC = 9000133;

	public static int STYLE_NPC = 1012117;

	public static int WORLD_TOUR_NPC = 1012000;

	public static int EXCHANGE_NPC = 1540326;

	public static int AIO_SHOP_NPC = 9000189;

	public static int SKILL_VENDOR = 9072200;

	public static int AUCTION_NPC = 9030300;

	public static int KINDRED_HOME = 910000000;

}
