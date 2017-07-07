/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package launch;

import constants.ServerConstants;
import constants.programs.DatabaseBackup;
import constants.programs.DatabaseGarbageCollector;
import constants.programs.HighRanking;
import constants.programs.RewardScroll;
import constants.programs.AutoReboot;
import constants.programs.ControlUnit;
import constants.subclasses.QuickMove;
import constants.subclasses.setScriptableNPC;
import database.MYSQL;
import java.io.IOException;
import java.lang.management.MemoryMXBean;
import java.lang.management.MemoryUsage;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import launch.helpers.MapleCacheData;
import launch.world.WorldConnected;
import packet.creators.TheSidPacket;
import server.items.CashItemFactory;
import server.life.MapleMonsterProvider;
import tools.Commands;
import tools.Timer.WorldTimer;

public final class Start {

	public static long START = System.currentTimeMillis();
	public static String path = "";

	public static void StartTimer() {
		tools.Timer.WorldTimer.getInstance().start();
		tools.Timer.EtcTimer.getInstance().start();
		tools.Timer.MapTimer.getInstance().start();
		tools.Timer.CloneTimer.getInstance().start();
		tools.Timer.EventTimer.getInstance().start();
		tools.Timer.BuffTimer.getInstance().start();
		tools.Timer.PingTimer.getInstance().start();
		tools.Timer.ShowTimer.getInstance().start();
	}

	public static void main(String args[]) throws IOException {
		MemoryTest();
		StartTimer();
		try {
			Connection con = MYSQL.getConnection();
			PreparedStatement del = con.prepareStatement("DELETE FROM acceptip");
			del.executeUpdate();
			del.close();
		} catch (SQLException ex) {
			ex.printStackTrace();
		}
		LoginServer.startServer();
		ChannelServer.startServer();
		CashShopServer.startServer();
		CashItemFactory.getInstance();
		Start.clean();
		Start.RecnErrItemDel();
		Start.LuletCashing();
		MapleCacheData mc = new MapleCacheData();
		mc.startCacheData();
		HighRanking.getInstance().startTasking();
		QuickMove.doMain();
		setScriptableNPC.doMain();
		WorldConnected.misticFieldOpen();
		RewardScroll.getInstance();
		Start.startGC();
		MapleMonsterProvider.getInstance().retrieveGlobal();
		DatabaseGarbageCollector.main(args);
//		DatabaseBackup.getInstance().startTasking();
		AutoReboot.main(args);
		ControlUnit.main(args);// ÀÚµ¿¸®º×
		System.out.println("GlobalDrop Thread Start!!");
		Commands.main(args);
	}

	public static void MemoryTest() {
		WorldTimer tMan = WorldTimer.getInstance();
		Runnable r = new Runnable() {
			public void run() {
				MemoryMXBean mmb = java.lang.management.ManagementFactory.getMemoryMXBean();
				MemoryUsage mem = mmb.getHeapMemoryUsage();
				System.out.println("[MemoryWatcher] Current Memory Usage : " + mem.getUsed() / 1024 + "K / Max : "
						+ mem.getMax() / 1024 + "K");
			}
		};
		tMan.register(r, 150000);
	}

	public static void startGC() {
		System.out.println("[NOTE] The system cleanup program will begin 30 minutes to give the current part time.");
		WorldTimer tMan = WorldTimer.getInstance();
		Runnable r = new Runnable() {
			public void run() {
				constants.ServerConstants.isResourceDispose = true;
				long start = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
				System.gc();
				float end = Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory();
				constants.ServerConstants.isResourceDispose = false;
				System.out.println("[NOTE] Unused memory on the system clean-up program "
						+ (Math.round((start - end) / (1024 * 1024))) + "Organize MB.");
			}
		};
		tMan.register(r, 1800000);
	}

	public static void clean() {
		try {
			int nu = 0;
			PreparedStatement ps;
			Calendar ocal = Calendar.getInstance();
			ps = MYSQL.getConnection().prepareStatement("SELECT * FROM acheck WHERE day = 1");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				String key = rs.getString("keya");
				String day = ocal.get(ocal.YEAR) + "" + (ocal.get(ocal.MONTH) + 1) + "" + ocal.get(ocal.DAY_OF_MONTH);
				String da[] = key.split("_");
				if (!da[0].equals(day)) {
					ps = MYSQL.getConnection().prepareStatement("DELETE FROM acheck WHERE keya = ?");
					ps.setString(1, key);
					ps.executeUpdate();
					nu++;
				}
			}
			System.out.println("[System] " + nu + "Delete the two entries recorded.");
			ps.close();
		} catch (SQLException ex) {
		}
	}

	public static void RecnErrItemDel() {
		try {
			int i = 0;
			ResultSet sql = MYSQL.getConnection()
					.prepareStatement("SELECT * FROM inventoryitems WHERE itemid = " + 5000312).executeQuery();
			while (sql.next()) {
				MYSQL.getConnection().prepareStatement("DELETE FROM inventoryitems WHERE itemid = " + 5000312)
						.executeUpdate();
				i++;
			}
			System.out.println("[System] " + i + "Removal of the reconnect error prone items.");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void LuletCashing() {
		String itemid = "";
		String num = "";
		try {
			ResultSet sql = MYSQL.getConnection().prepareStatement("SELECT * FROM rolling").executeQuery();
			while (sql.next()) {
				itemid += sql.getInt("itemid") + ",";
				num += sql.getInt("num") + ",";
			}
		} catch (SQLException ex) {
			System.out.println("¿¡·¯ : " + ex);
		}
		TheSidPacket.itemid = itemid.split(",");
		TheSidPacket.num = num.split(",");
		System.out.println("[System] " + itemid.length() + "Dolrimpan more cache items.");
	}
}