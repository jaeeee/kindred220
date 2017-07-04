/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.life;

import constants.ServerConstants;
import database.MYSQL;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import provider.WzXML.MapleDataType;
import tools.Pair;
import tools.StringUtil;
import java.awt.Point;
import java.io.File;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

public class MapleLifeProvider {

	private static final MapleDataProvider data = MapleDataProviderFactory.getDataProvider(new File("wz/Mob.wz"));
	private static final MapleDataProvider stringDataWZ = MapleDataProviderFactory
			.getDataProvider(new File("wz/String.wz"));
	private static final MapleDataProvider etcDataWZ = MapleDataProviderFactory.getDataProvider(new File("wz/Etc.wz"));
	private static final MapleData mobStringData = stringDataWZ.getData("Mob.img");
	private static final MapleData npcStringData = stringDataWZ.getData("Npc.img");
	private static final MapleData npclocData = etcDataWZ.getData("NpcLocation.img");
	private static Map<Integer, MapleMonsterStats> monsterStats = new HashMap<Integer, MapleMonsterStats>();
	private static Map<Integer, Integer> NPCLoc = new HashMap<Integer, Integer>();

	public static AbstractLoadedMapleLife getLife(int id, String type) {
		if (type.equalsIgnoreCase("n")) {
			return getNPC(id);
		} else if (type.equalsIgnoreCase("m")) {
			return getMonster(id);
		} else {
			System.err.println("Unknown Life type: " + type + "");
			return null;
		}
	}

	public static int getNPCLocation(int npcid) {
		if (NPCLoc.containsKey(npcid)) {
			return NPCLoc.get(npcid);
		}
		final int map = MapleDataTool.getIntConvert(Integer.toString(npcid) + "/0", npclocData);
		NPCLoc.put(npcid, map);
		return map;
	}

	public static MapleMonster getMonster(int mid) {
		MapleMonsterStats stats = monsterStats.get(Integer.valueOf(mid));

		if (stats == null) {
			MapleData monsterData = data.getData(StringUtil.getLeftPaddedStr(Integer.toString(mid) + ".img", '0', 11));
			if (monsterData == null) {
				return null;
			}
			MapleData monsterInfoData = monsterData.getChildByPath("info");

			stats = new MapleMonsterStats();
			if (mid == 8860000) { //ark
				stats.setHp((long) 3000000000L);
			} else if (mid == 8850011) { //emp
				stats.setHp((long) 63000000000L);
			} else if (mid == 8880010) { //mag
				stats.setHp((long) 50000000000L);
//			} else if (mid == 8240099) { //lotus
//				stats.setHp((long) 10000000000000L);
			} else {
				stats.setHp(MapleDataTool.getIntConvert("maxHP", monsterInfoData));
			}
			stats.setMp(MapleDataTool.getIntConvert("maxMP", monsterInfoData, 0));
			stats.setExp(MapleDataTool.getIntConvert("exp", monsterInfoData, 0));
			stats.setLevel((short) MapleDataTool.getIntConvert("level", monsterInfoData));
			stats.setRemoveAfter(MapleDataTool.getIntConvert("removeAfter", monsterInfoData, 0));
			stats.setrareItemDropLevel((byte) MapleDataTool.getIntConvert("rareItemDropLevel", monsterInfoData, 0));
			stats.setFixedDamage(MapleDataTool.getIntConvert("fixedDamage", monsterInfoData, -1));
			stats.setOnlyNormalAttack(MapleDataTool.getIntConvert("onlyNormalAttack", monsterInfoData, 0) > 0);
			stats.setRealBoss(MapleDataTool.getIntConvert("hpTagBgcolor", monsterInfoData, 0) > 0);
			stats.setBoss(MapleDataTool.getIntConvert("boss", monsterInfoData, 0) > 0 || mid == 8810018
					|| (mid >= 8810118 && mid <= 8810122) || mid == 9410066);
			stats.setExplosiveReward(MapleDataTool.getIntConvert("explosiveReward", monsterInfoData, 0) > 0);
			stats.setFfaLoot(MapleDataTool.getIntConvert("publicReward", monsterInfoData, 0) > 0);
			stats.setUndead(MapleDataTool.getIntConvert("undead", monsterInfoData, 0) > 0);
			stats.setName(MapleDataTool.getString(mid + "/name", mobStringData, "MISSINGNO"));
			stats.setBuffToGive(MapleDataTool.getIntConvert("buff", monsterInfoData, -1));
			stats.setFriendly(MapleDataTool.getIntConvert("damagedByMob", monsterInfoData, 0) > 0);
			stats.setCP((byte) MapleDataTool.getIntConvert("getCP", monsterInfoData, 0));
			stats.setPhysicalDefense((short) MapleDataTool.getIntConvert("PDDamage", monsterInfoData, 0));
			stats.setMagicDefense((short) MapleDataTool.getIntConvert("MDDamage", monsterInfoData, 0));
			stats.setEva((short) MapleDataTool.getIntConvert("eva", monsterInfoData, 0));
			stats.setCharismaEXP(MapleDataTool.getIntConvert("charismaEXP", monsterInfoData, 0));
			stats.setChangeableMob(MapleDataTool.getIntConvert("changeableMob", monsterInfoData, 0) == 1);
//			stats.setChangeableMob(true);
			stats.setMad(MapleDataTool.getIntConvert("MADamage", monsterInfoData, 0));
			stats.setPad(MapleDataTool.getIntConvert("PADamage", monsterInfoData, 0));
			stats.setAcc(MapleDataTool.getIntConvert("acc", monsterInfoData, 0));
			stats.setSpeed(MapleDataTool.getIntConvert("speed", monsterInfoData, 0));
			if (MapleDataTool.getLongConvert("finalmaxHP", monsterInfoData) > 0L) {
				stats.setFinalMaxHP(MapleDataTool.getLongConvert("finalmaxHP", monsterInfoData));
			}
			final MapleData selfd = monsterInfoData.getChildByPath("selfDestruction");
			if (selfd != null) {
				stats.setSelfDHP(MapleDataTool.getIntConvert("hp", selfd, 0));
				stats.setSelfD((byte) MapleDataTool.getIntConvert("action", selfd, -1));
			} else {
				stats.setSelfD((byte) -1);
			}

			final MapleData firstAttackData = monsterInfoData.getChildByPath("firstAttack");
			if (firstAttackData != null) {
				if (firstAttackData.getType() == MapleDataType.FLOAT) {
					stats.setFirstAttack(Math.round(MapleDataTool.getFloat(firstAttackData)) > 0);
				} else {
					stats.setFirstAttack(MapleDataTool.getInt(firstAttackData) > 0);
				}
			}
			if (stats.isBoss() || isDmgSponge(mid)) {
				if (monsterInfoData.getChildByPath("hpTagColor") == null
						|| monsterInfoData.getChildByPath("hpTagBgcolor") == null) {
					stats.setTagColor(0);
					stats.setTagBgColor(0);
				} else {
					stats.setTagColor(MapleDataTool.getIntConvert("hpTagColor", monsterInfoData));
					stats.setTagBgColor(MapleDataTool.getIntConvert("hpTagBgcolor", monsterInfoData));
				}
			}

			final MapleData banishData = monsterInfoData.getChildByPath("ban");
			if (banishData != null) {
				stats.setBanishInfo(new BanishInfo(MapleDataTool.getString("banMsg", banishData),
						MapleDataTool.getInt("banMap/0/field", banishData, -1),
						MapleDataTool.getString("banMap/0/portal", banishData, "sp")));
			}

			final MapleData reviveInfo = monsterInfoData.getChildByPath("revive");
			if (reviveInfo != null) {
				List<Integer> revives = new LinkedList<Integer>();
				for (MapleData bdata : reviveInfo) {
					revives.add(MapleDataTool.getInt(bdata));
				}
				stats.setRevives(revives);
			}

			final MapleData monsterSkillData = monsterInfoData.getChildByPath("skill");
			if (monsterSkillData != null) {
				int i = 0;
				List<Pair<Integer, Integer>> skills = new ArrayList<Pair<Integer, Integer>>();
				while (monsterSkillData.getChildByPath(Integer.toString(i)) != null) {
					skills.add(new Pair<Integer, Integer>(
							Integer.valueOf(MapleDataTool.getInt(i + "/skill", monsterSkillData, 0)),
							Integer.valueOf(MapleDataTool.getInt(i + "/level", monsterSkillData, 0))));
					i++;
				}
				stats.setSkills(skills);
			}

			decodeElementalString(stats, MapleDataTool.getString("elemAttr", monsterInfoData, ""));

			// Other data which isn;t in the mob, but might in the linked data

			final int link = MapleDataTool.getIntConvert("link", monsterInfoData, 0);
			stats.setInvincible(MapleDataTool.getIntConvert("invincible", monsterInfoData, 0) == 1);

			if (link != 0) { // Store another copy, for faster processing.
				monsterData = data.getData(StringUtil.getLeftPaddedStr(link + ".img", '0', 11));
				monsterInfoData = monsterData.getChildByPath("info");
			}
			stats.setLink(link);

			for (MapleData idata : monsterData) {
				if (idata.getName().equals("fly")) {
					stats.setFly(true);
					stats.setMobile(true);
					break;
				} else if (idata.getName().equals("move")) {
					stats.setMobile(true);
				} else if (idata.getName().equals("invincible")) {
					stats.setInvincible(true);
				}
			}

			byte hpdisplaytype = -1;
			if (!stats.isInvincible()) {
				if (stats.getTagColor() > 0) {
					hpdisplaytype = 0;
				} else if (stats.isFriendly()) {
					hpdisplaytype = 1;
				} else if (mid >= 9300184 && mid <= 9300215) { // Mulung TC mobs
					hpdisplaytype = 2;
				} else if (!stats.isBoss() || // 보스 아님
						(mid >= 9800000 && mid <= 9800124) || // 몬스터파크
						(mid >= 9302044 && mid <= 9302048)) { // 아스완
					hpdisplaytype = 3;
				}
			}
			stats.setHPDisplayType(hpdisplaytype);

			monsterStats.put(Integer.valueOf(mid), stats);
		}
		return new MapleMonster(mid, stats);
	}

	public static final void decodeElementalString(MapleMonsterStats stats, String elemAttr) {
		for (int i = 0; i < elemAttr.length(); i += 2) {
			stats.setEffectiveness(Element.getFromChar(elemAttr.charAt(i)),
					ElementalEffectiveness.getByNumber(Integer.valueOf(String.valueOf(elemAttr.charAt(i + 1)))));
		}
	}

	private static final boolean isDmgSponge(final int mid) {
		switch (mid) {
		case 8810018:
		case 8810118:
		case 8810119:
		case 8810120:
		case 8810121:
		case 8810122:
		case 8820010:
		case 8820011:
		case 8820012:
		case 8820013:
		case 8820014:
		case 8820110:
		case 8820111:
		case 8820112:
		case 8820113:
		case 8820114:
			return true;
		}
		return false;
	}

	public static MapleNPC getNPC(final int nid) {
		final String name = MapleDataTool.getString(nid + "/name", npcStringData, "MISSINGNO");
		return new MapleNPC(nid, new MapleNPCStats(name));
	}

	public static MaplePlayerNPC getPlayerNPC(final int nid) {
		MapleNPCStats stats = new MapleNPCStats("");
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			Connection con = MYSQL.getConnection();
			ps = con.prepareStatement("SELECT * FROM `playernpcs` WHERE id = " + nid);
			rs = ps.executeQuery();
			rs.next();
			stats.setCY(rs.getInt("y"));
			stats.setName(rs.getString("name"));
			stats.setFH(0);
			stats.setRX0(rs.getInt("x") - 50);
			stats.setRX1(rs.getInt("x") + 50);
			// System.out.println("x : "+rs.getInt("x")+" y : "+rs.getInt("y")+"
			// name : "+rs.getString("name")+" hair : "+rs.getInt("hair")+" face
			// : "+rs.getInt("face")+" skin : "+rs.getByte("skin")+" dir :
			// "+rs.getByte("dir"));
			// System.out.println("x : "+(npc.getRx0() + 50)+" y :
			// "+npc.getCy()+" name : "+npc.getName()+" hair : "+npc.getHair()+"
			// face : "+npc.getFace()+" skin : "+npc.getSkin()+" dir :
			// "+npc.getDirection());

			// System.out.println("Equip Size : "+equips.size());
			MaplePlayerNPC npc = new MaplePlayerNPC(nid, stats);
			npc.setHair(rs.getInt("hair"));
			npc.setFace(rs.getInt("face"));
			npc.setSkin(rs.getByte("skin"));
			npc.setDirection(rs.getByte("dir"));
			npc.setPosition(new Point(rs.getInt("x"), stats.getCY()));
			ps.close();
			rs.close();
			ps = con.prepareStatement("SELECT * FROM `playernpcs_equip` WHERE npcid = " + nid);
			rs = ps.executeQuery();
			Map<Byte, Integer> equips = new LinkedHashMap<Byte, Integer>();

			while (rs.next()) {
				equips.put(rs.getByte("equippos"), rs.getInt("equipid"));
			}
			npc.setEquips(equips);
			rs.close();
			ps.close();
			return npc;
		} catch (Exception ex) {
			if (!ServerConstants.realese)
				ex.printStackTrace();
		} finally {
			try {
				if (ps != null) {
					ps.close();
				}
				if (rs != null) {
					rs.close();
				}
			} catch (SQLException ignore) {

			}
		}
		return null;
	}
}
