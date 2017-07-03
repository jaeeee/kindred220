/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

import client.MapleCharacter;
import client.MapleCharacterStat;
import client.MapleClient;
import client.items.IItem;
import client.items.ISkill;
import client.items.MapleInventoryType;
import client.skills.Skill;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import client.stats.PlayerStat;
import constants.GameConstants;
import constants.KindredConstants;
import constants.ServerConstants;
import launch.ChannelServer;
import provider.MapleData;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import scripting.NPCScriptManager;
import server.items.InventoryManipulator;
import server.maps.MapleMap;
import server.maps.MaplePortal;
import tools.ArrayMap;
import tools.Pair;
import tools.StringUtil;

public class PlayerCommand implements Command {
	private static int a;

	@Override
	public void execute(final MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
		ChannelServer cserv = c.getChannelServer();
		final MapleCharacterStat stat = c.getPlayer().getStat();
		// Map<Pair<Short, Short>, MapleInventoryType> eqs = new
		// ArrayMap<Pair<Short, Short>, MapleInventoryType>();
		if (splitted[0].equals("@clearinv")) {
			Map<Pair<Short, Short>, MapleInventoryType> eqs = new ArrayMap<Pair<Short, Short>, MapleInventoryType>();
			if (splitted[1].equals("all")) {
				for (MapleInventoryType type : MapleInventoryType.values()) {
					for (IItem item : c.getPlayer().getInventory(type)) {
						eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), type);
					}
				}
			} else if (splitted[1].equals("mounts")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIPPED)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()),
							MapleInventoryType.EQUIPPED);
				}
			} else if (splitted[1].equals("equip")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), MapleInventoryType.EQUIP);
				}
			} else if (splitted[1].equals("use")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.USE)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), MapleInventoryType.USE);
				}
			} else if (splitted[1].equals("setup")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.SETUP)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), MapleInventoryType.SETUP);
				}
			} else if (splitted[1].equals("etc")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.ETC)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), MapleInventoryType.ETC);
				}
			} else if (splitted[1].equals("cash")) {
				for (IItem item : c.getPlayer().getInventory(MapleInventoryType.CASH)) {
					eqs.put(new Pair<Short, Short>(item.getPosition(), item.getQuantity()), MapleInventoryType.CASH);
				}
			} else {
				c.getPlayer().dropMessage(6, "[all/mounts/equip/use/setup/etc/cash]");
			}
			for (Map.Entry<Pair<Short, Short>, MapleInventoryType> eq : eqs.entrySet()) {
				InventoryManipulator.removeFromSlot(c, eq.getValue(), eq.getKey().left, eq.getKey().right, false,
						false);
			}
		}
		switch (splitted[0]) {
		case "@str":
			int str = Integer.parseInt(splitted[1]);
			if (stat.getStr() + str > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < str
					|| c.getPlayer().getRemainingAp() < 0 || str < 0) {
				c.getPlayer().dropMessage(5, "An error has occurred.");
			} else {
				stat.setStr(stat.getStr() + str);
				c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - str);
				c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(PlayerStat.STR, stat.getStr());
			}
			break;
		case "@dex":
			int dex = Integer.parseInt(splitted[1]);
			if (stat.getDex() + dex > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < dex
					|| c.getPlayer().getRemainingAp() < 0 || dex < 0) {
				c.getPlayer().dropMessage(5, "An error has occurred.");
			} else {
				stat.setDex(stat.getDex() + dex);
				c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - dex);
				c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(PlayerStat.DEX, stat.getDex());
			}
			break;
		case "@int":
			int int_ = Integer.parseInt(splitted[1]);
			if (stat.getInt() + int_ > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < int_
					|| c.getPlayer().getRemainingAp() < 0 || int_ < 0) {
				c.getPlayer().dropMessage(5, "An error has occurred.");
			} else {
				stat.setInt(stat.getInt() + int_);
				c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - int_);
				c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(PlayerStat.INT, stat.getInt());
			}
			break;
		case "@luk":
			int luk = Integer.parseInt(splitted[1]);
			if (stat.getLuk() + luk > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < luk
					|| c.getPlayer().getRemainingAp() < 0 || luk < 0) {
				c.getPlayer().dropMessage(5, "An error has occurred.");
			} else {
				stat.setLuk(stat.getLuk() + luk);
				c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - luk);
				c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(PlayerStat.LUK, stat.getLuk());
			}
			break;
		case "@hp":
			int hp = Integer.parseInt(splitted[1]);
			if (stat.getHp() + hp > c.getPlayer().getMaxStats() || c.getPlayer().getRemainingAp() < hp
					|| c.getPlayer().getRemainingAp() < 0 || hp < 0) {
				c.getPlayer().dropMessage(5, "An error has occurred.");
			} else {
				stat.setHp(stat.getHp() + hp * 30);
				c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - hp);
				c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP, c.getPlayer().getRemainingAp());
				c.getPlayer().updateSingleStat(PlayerStat.HP, stat.getHp());
			}
			break;	
		case "@styler":
		case "@style":
			NPCScriptManager.getInstance().start(c, KindredConstants.STYLE_NPC);
			c.getPlayer().ea();
			break;
		case "@npc":
		case "@go":
			NPCScriptManager.getInstance().start(c, KindredConstants.WORLD_TOUR_NPC);
			c.getPlayer().ea();
			break;
		case "@dispose":
		case "@unstuck":
			c.getPlayer().ea();
			c.getPlayer().dropMessage(5, "Fixed.");
			break;
		case "@maxskills":
			int jobid = c.getPlayer().getJob();
			MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
					.getData(StringUtil.getLeftPaddedStr("" + c.getPlayer().getJob(), '0', 3) + ".img");
			final ISkill skills = null;
			byte maxLevel = 0;
			c.getPlayer().Message(7,
					ServerConstants.serverName + ">>Skills are maxed, Skill Master has been completed.");
			if (GameConstants.isDemonSlayer(c.getPlayer().getJob())) {
			}
			c.getPlayer().maxskill(3100);
			c.getPlayer().maxskill(3001);
			c.getPlayer().maxskill(3110);
			c.getPlayer().maxskill(3111);
			c.getPlayer().maxskill(3112);
			if (GameConstants.isZero(c.getPlayer().getJob())) {
				c.getPlayer().maxskill(10100);
				c.getPlayer().maxskill(10110);
				c.getPlayer().maxskill(10111);
				c.getPlayer().maxskill(10112);
				c.getPlayer().Message(5, "Skill Master has been completed");
				return;
			}
			if (c.getPlayer().getJob() == 3210) {
				c.getPlayer().changeSkillLevel(32101000, (byte) 20, (byte) 20);
				c.getPlayer().changeSkillLevel(32101001, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32101003, (byte) 20, (byte) 20);
				c.getPlayer().changeSkillLevel(32101004, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32100006, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32101005, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32100007, (byte) 5, (byte) 5);
				c.getPlayer().changeSkillLevel(32100008, (byte) 10, (byte) 10);
				return;
			}
			for (MapleData skill : data) {
				if (skill != null) {
					for (MapleData skillId : skill.getChildren()) {
						if (!skillId.getName().equals("icon")) {
							maxLevel = (byte) MapleDataTool.getIntConvert("maxLevel", skillId.getChildByPath("common"),
									0);
							if (MapleDataTool.getIntConvert("invisible", skillId, 0) == 0) { // 스킬창에
								// 안보이는
								// 스킬은
								// 올리지않음
								if (c.getPlayer().getLevel() >= MapleDataTool.getIntConvert("reqLev", skillId, 0)
										&& Integer.parseInt(skillId.getName()) != 12101022
										&& Integer.parseInt(skillId.getName()) != 12110025) {
									boolean is4number = skillId.getName().length() == 8;
									String charJob = null;
									if (is4number) {
										charJob = skillId.getName().substring(0, 4);
									} else {
										charJob = skillId.getName().substring(0, 3);
									}
									System.out.println(charJob);
									if (Integer.parseInt(charJob) == c.getPlayer().getJob()) {
										c.getPlayer().changeSkillLevel(
												SkillFactory.getSkill(Integer.parseInt(skillId.getName())), maxLevel,
												SkillFactory.getSkill(Integer.parseInt(skillId.getName())).isFourthJob()
														? maxLevel : 0);
									}
								}
							}
						}
					}
				}
			}
			c.getPlayer().saveToDB(false, false);
			break;
		case "@upgrade":
			NPCScriptManager.getInstance().start(c, KindredConstants.UPGRADE_NPC);
			c.getPlayer().ea();
			break;
		case "@exchange":
			NPCScriptManager.getInstance().start(c, KindredConstants.EXCHANGE_NPC);
			c.getPlayer().ea();
			break;
		case "@shop":
			NPCScriptManager.getInstance().start(c, KindredConstants.AIO_SHOP_NPC);
			c.getPlayer().ea();
			break;
		case "@uncap":
		case "@unlock":
			SkillFactory.getSkill(100001268).getEffect(SkillFactory.getSkill(100001268).getMaxLevel())
					.applyTo(c.getPlayer());
			c.getPlayer().dropMessage(6, "Damage cap lifted.");
			break;
		case "@learn":
		case "@skill":
			NPCScriptManager.getInstance().start(c, KindredConstants.SKILL_VENDOR);
			c.getPlayer().ea();
			break;
		case "@home":
		case "@fm":
			 MapleMap target = cserv.getMapFactory().getMap(KindredConstants.KINDRED_HOME);
			    MaplePortal targetPortal = target.getPortal(0);
				c.getPlayer().changeMap(target, targetPortal);
//			MapleMap target = c.getChannelServer().getMapFactory().getMap(101050010);
//			MaplePortal targetPortal = null;
//			c.getPlayer().changeMap(target, targetPortal);
			break;
		case "@commands":
		case "@help":
			c.getPlayer().dropMessage(6,
					"Commands: @home/@fm, @str, @dex, @int, @luk, @hp, @style/styler, @go/npc, @unstuck/dispose, @clearinv [all/equip/use/etc/setup], @maxskills, @upgrade, @exchange, @shop, @unlock/@uncap, @learn/@skill, @commands/@help");
			break;
		default:
			break;
		}
		// if (splitted[0].equals("@str")) {
		// int str = Integer.parseInt(splitted[1]);
		// final MapleCharacterStat stat = c.getPlayer().getStat();
		//
		// if (stat.getStr() + str > c.getPlayer().getMaxStats() ||
		// c.getPlayer().getRemainingAp() < str
		// || c.getPlayer().getRemainingAp() < 0 || str < 0) {
		// c.getPlayer().dropMessage(5, "An error has occurred.");
		// } else {
		// stat.setStr(stat.getStr() + str);
		// c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - str);
		// c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP,
		// c.getPlayer().getRemainingAp());
		// c.getPlayer().updateSingleStat(PlayerStat.STR, stat.getStr());
		// }
		// } else if (splitted[0].equals("@Dongjeop")) {
		// int users = 0;
		// for (ChannelServer csev : ChannelServer.getAllInstances()) {
		// users += csev.getPlayerStorage().getAllCharacters().size();
		// }
		// c.getPlayer().dropMessage(5,
		// "Now" + ServerConstants.serverName + "East Receptionist:" + users +
		// "The people");
		// } else if (splitted[0].equals("@int")) {
		// int int_ = Integer.parseInt(splitted[1]);
		// final MapleCharacterStat stat = c.getPlayer().getStat();
		//
		// if (stat.getInt() + int_ > c.getPlayer().getMaxStats() ||
		// c.getPlayer().getRemainingAp() < int_
		// || c.getPlayer().getRemainingAp() < 0 || int_ < 0) {
		// c.getPlayer().dropMessage(5, "An error has occurred.");
		// } else {
		// stat.setInt(stat.getInt() + int_);
		// c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - int_);
		// c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP,
		// c.getPlayer().getRemainingAp());
		// c.getPlayer().updateSingleStat(PlayerStat.INT, stat.getInt());
		// }
		// } else if (splitted[0].equals("@dex")) {
		// int dex = Integer.parseInt(splitted[1]);
		// final MapleCharacterStat stat = c.getPlayer().getStat();
		//
		// if (stat.getDex() + dex > c.getPlayer().getMaxStats() ||
		// c.getPlayer().getRemainingAp() < dex
		// || c.getPlayer().getRemainingAp() < 0 || dex < 0) {
		// c.getPlayer().dropMessage(5, "An error has occurred.");
		// } else {
		// stat.setDex(stat.getDex() + dex);
		// c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - dex);
		// c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP,
		// c.getPlayer().getRemainingAp());
		// c.getPlayer().updateSingleStat(PlayerStat.DEX, stat.getDex());
		// }
		// } else if (splitted[0].equals("@luk")) {
		// int luk = Integer.parseInt(splitted[1]);
		// final MapleCharacterStat stat = c.getPlayer().getStat();
		//
		// if (stat.getLuk() + luk > c.getPlayer().getMaxStats() ||
		// c.getPlayer().getRemainingAp() < luk
		// || c.getPlayer().getRemainingAp() < 0 || luk < 0) {
		// c.getPlayer().dropMessage(5, "An error has occurred.");
		// } else {
		// stat.setLuk(stat.getLuk() + luk);
		// c.getPlayer().setRemainingAp(c.getPlayer().getRemainingAp() - luk);
		// c.getPlayer().updateSingleStat(PlayerStat.AVAILABLEAP,
		// c.getPlayer().getRemainingAp());
		// c.getPlayer().updateSingleStat(PlayerStat.LUK, stat.getLuk());
		// }
		// } else {
		// c.getPlayer().dropMessage(6,
		// "[all/mounts/equipt/use/setup/etc/cash]");
		// }
		// for (Map.Entry<Pair<Short, Short>, MapleInventoryType> eq :
		// eqs.entrySet()) {
		// InventoryManipulator.removeFromSlot(c, eq.getValue(),
		// eq.getKey().left, eq.getKey().right, false,
		// false);
		// }
		// } else if (splitted[0].equals("@backupequipment")) {
		// RepairEquip re = new RepairEquip();
		//
		// if
		// (c.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot()
		// < 36) {
		// c.getPlayer().Message("Please free up space again, given the Devices
		// tab Khan 36 or more.");
		// return;
		// }
		// if (re.saveRepairEquip(c.getPlayer())) {
		// c.getPlayer().Message("I store the equipment items.");
		// } else {
		// c.getPlayer().Message("Failed to save query error");
		// }
		// } else if (splitted[0].equals("@huntingpokeop")) {
		// NPCScriptManager.getInstance().start(c, 9001009);
		// } else if (splitted[0].equals("@recoveryapplication")) {
		// RepairEquip re = new RepairEquip();
		//
		// if (re.gainRepairEquip(c.getPlayer())) {
		// c.getPlayer().Message("The operator has obtained a license from the
		// recovery items.");
		// } else {
		// c.getPlayer().Message("Operators do not have permission from the
		// recovered items.");
		// }
		//
		// } else if (splitted[0].equals("@maekdemoff")) {
		// c.getPlayer().changeSkillLevel(100001268, (byte) 1, (byte) 1);
		// c.getPlayer().giveBuff(100001268, 30);
		//
		// c.getPlayer().dropShowInfo(ServerConstants.serverName + "Maekdem the
		// release has been completed.");
		// } else if (splitted[0].equals("@maxskills")) {
		// int jobid = c.getPlayer().getJob();
		// MapleData data =
		// MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
		// .getData(StringUtil.getLeftPaddedStr("" + c.getPlayer().getJob(),
		// '0', 3) + ".img");
		// final ISkill skills = null;
		// byte maxLevel = 0;
		// c.getPlayer().Message(7,
		// ServerConstants.serverName + ">>Skills are maxed, Skill Master has
		// been completed.");
		// if (GameConstants.isDemonSlayer(c.getPlayer().getJob())) {
		// }
		// c.getPlayer().maxskill(3100);
		// c.getPlayer().maxskill(3001);
		// c.getPlayer().maxskill(3110);
		// c.getPlayer().maxskill(3111);
		// c.getPlayer().maxskill(3112);
		// if (GameConstants.isZero(c.getPlayer().getJob())) {
		// c.getPlayer().maxskill(10100);
		// c.getPlayer().maxskill(10110);
		// c.getPlayer().maxskill(10111);
		// c.getPlayer().maxskill(10112);
		// c.getPlayer().Message(5, "Skill Master has been completed");
		// return;
		// }
		// if (c.getPlayer().getJob() == 3210) {
		// c.getPlayer().changeSkillLevel(32101000, (byte) 20, (byte) 20);
		// c.getPlayer().changeSkillLevel(32101001, (byte) 10, (byte) 10);
		// c.getPlayer().changeSkillLevel(32101003, (byte) 20, (byte) 20);
		// c.getPlayer().changeSkillLevel(32101004, (byte) 10, (byte) 10);
		// c.getPlayer().changeSkillLevel(32100006, (byte) 10, (byte) 10);
		// c.getPlayer().changeSkillLevel(32101005, (byte) 10, (byte) 10);
		// c.getPlayer().changeSkillLevel(32100007, (byte) 5, (byte) 5);
		// c.getPlayer().changeSkillLevel(32100008, (byte) 10, (byte) 10);
		// return;
		// }
		// for (MapleData skill : data) {
		// if (skill != null) {
		// for (MapleData skillId : skill.getChildren()) {
		// if (!skillId.getName().equals("icon")) {
		// maxLevel = (byte) MapleDataTool.getIntConvert("maxLevel",
		// skillId.getChildByPath("common"),
		// 0);
		// if (MapleDataTool.getIntConvert("invisible", skillId, 0) == 0) { //
		// 스킬창에
		// // 안보이는
		// // 스킬은
		// // 올리지않음
		// if (c.getPlayer().getLevel() >= MapleDataTool.getIntConvert("reqLev",
		// skillId, 0)
		// && Integer.parseInt(skillId.getName()) != 12101022
		// && Integer.parseInt(skillId.getName()) != 12110025) {
		// boolean is4number = skillId.getName().length() == 8;
		// String charJob = null;
		// if (is4number) {
		// charJob = skillId.getName().substring(0, 4);
		// } else {
		// charJob = skillId.getName().substring(0, 3);
		// }
		// System.out.println(charJob);
		// if (Integer.parseInt(charJob) == c.getPlayer().getJob()) {
		// c.getPlayer().changeSkillLevel(
		// SkillFactory.getSkill(Integer.parseInt(skillId.getName())), maxLevel,
		// SkillFactory.getSkill(Integer.parseInt(skillId.getName())).isFourthJob()
		// ? maxLevel : 0);
		// }
		// }
		// }
		// }
		// }
		// }
		// }
		// c.getPlayer().saveToDB(false, false);
		// } else if (splitted[0].equals("@save")) {
		// NPCScriptManager.getInstance().dispose(c);
		// MapleMonsterProvider.getInstance().clearDrops();
		// ReactorScriptManager.getInstance().clearDrops();
		// c.getPlayer().dropMessage(5, "[NOTE] Saved successfully.");
		// } else if (splitted[0].equals("@expedition")) {
		// if (c.getPlayer().getParty() == null) {
		// c.getPlayer().dropMessage(5, "There is no joined the party.");
		// return;
		// }
		// if (c.getPlayer().getParty().getExpedition() == null) {
		// c.getPlayer().dropMessage(5, "There is no joined the expedition.");
		// return;
		// }
		// if (c.getPlayer().getParty().getExpedition().getLastBossMap() == -1)
		// {
		// c.getPlayer().dropMessage(5, "Currently Fellowship is not the boss of
		// the catch.");
		// return;
		// }
		// if (c.getPlayer().getParty().getExpedition().getLastBossChannel() ==
		// -1) {
		// c.getPlayer().dropMessage(5, "Currently Fellowship is not the boss of
		// the catch.");
		// return;
		// }
		// if (c.getPlayer().getParty().getExpedition().getLastBossChannel() !=
		// c.getChannel()) {
		// c.getPlayer().dropMessage(5, "The expedition is different and you are
		// holding the boss channel.");
		// return;
		// }
		// if
		// (c.getPlayer().getParty().getExpedition().containDeadChar(c.getPlayer().getId()))
		// {
		// c.getPlayer().dropMessage(5, "Japdeon death of the boss and can not
		// re-enter.");
		// return;
		// }
		// if (c.getPlayer().getParty().getExpedition().isBossKilled()) {
		// c.getPlayer().dropMessage(5, "Since then already killed the boss, you
		// can not re-enter.");
		// return;
		// }
		// MapleMap map = c.getChannelServer().getMapFactory()
		// .getMap(c.getPlayer().getParty().getExpedition().getLastBossMap());
		// c.getPlayer().changeMap(map, map.getPortal(0));
		// switch (map.getId()) {
		// case 280030000:
		// case 280030001:
		// c.getPlayer().send(MainPacketCreator.musicChange("Bgm06/FinalFight"));
		// break;
		// case 240060200: // 혼테일
		// case 240060201: // 카오스혼테일
		// c.getPlayer().send(MainPacketCreator.musicChange("Bgm14/HonTale"));
		// break;
		// case 220080001: // 파풀
		// c.getPlayer().send(MainPacketCreator.musicChange("Bgm09/TimeAttack"));
		// break;
		// }
		// } else if (splitted[0].equals("@home") ||
		// splitted[0].equals("@henesys") || splitted[0].equals("@town")) {
		// if (c.getPlayer().getMapId() == 123456789) {
		// c.getPlayer().dropMessage(1, "Impossible in fishing. Please use the
		// portal.");
		// return;
		// }
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001 || (jobid == 10112 && c.getPlayer().getMapId() ==
		// ServerConstants.startMap)) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// if (c.getPlayer().getMapId() == 141040000 || c.getPlayer().getMapId()
		// == 910340500
		// || c.getPlayer().getMapId() == 980000010 || c.getPlayer().getMapId()
		// == 240050200
		// || c.getPlayer().getMapId() == 272000600 || c.getPlayer().getMapId()
		// == 921160400) {
		// c.getPlayer().dropMessage(5, "[System] the boss, you can not move
		// during raids.");
		// return;
		// }
		// if (GameConstants.getTheSidMap(c.getPlayer().getMapId()) != 0) {
		// c.getPlayer().dropMessage(5, "[System] you can not move more during
		// seed used.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(100000000);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@fm")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(910000000);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@casino")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(310000004);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@fishing")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000
		// || c.getPlayer().getMapId() == 123456789) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(123456789);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@jaguar")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(931000500);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().reloadChar();
		// c.getPlayer().changeMap(target, targetPortal);
		// c.getPlayer().ea();
		// } else if (splitted[0].equals("@gmmap")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000) {
		// c.getPlayer().dropMessage(1,
		// "Beginners will not be able to move the Hennessy throw in jail or &&
		// map Henesys not be moved.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(180000000);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@jakbang")) {
		// int jobid = c.getPlayer().getJob();
		// if (jobid == 0 || jobid == 1000 || jobid == 2000 || jobid == 2001 ||
		// jobid == 2002 || jobid == 2003
		// || jobid == 2004 || jobid == 3000 || jobid == 3001 || jobid == 5000
		// || jobid == 6000
		// || jobid == 6001) {
		// } else if (c.getPlayer().getMapId() == 980000010 ||
		// c.getPlayer().getMapId() == 141040000
		// || c.getPlayer().getMapId() == 123456789) {
		// c.getPlayer().dropMessage(1,
		// "The novice can not go to jail or jakbang && map can not be less
		// Bangi-dong.");
		// return;
		// }
		// MapleMap target =
		// c.getChannelServer().getMapFactory().getMap(184848484);
		// MaplePortal targetPortal = null;
		// if (splitted.length > 1) {
		// try {
		// targetPortal = target.getPortal(Integer.parseInt(splitted[1]));
		// } catch (IndexOutOfBoundsException e) {
		// // noop, assume the gm didn't know how many portals there
		// // are
		// c.getPlayer().dropMessage(5, "It does not have the value of the
		// portal.");
		// } catch (NumberFormatException a) {
		// // noop, assume that the gm is drunk
		// }
		// }
		// if (targetPortal == null) {
		// targetPortal = target.getPortal(0);
		// }
		// c.getPlayer().changeMap(target, targetPortal);
		// } else if (splitted[0].equals("@lek")) {
		// NPCScriptManager.getInstance().dispose(c);
		// c.getSession().write(MainPacketCreator.resetActions());
		// } else if (splitted[0].equals("@help") ||
		// splitted[0].equals("@command")) {
		// c.getPlayer().dropMessage(5, "The available commands are as
		// follows:");
		// c.getPlayer().dropMessage(5,
		// "@str, @dex, @int, @luk <Take number>: You can take a mouse click
		// instead of the thermostat.");
		// c.getPlayer().dropMessage(5, "@expedition: Move to the last map you
		// were the boss of the raid expedition.");
		// c.getPlayer().dropMessage(5, "@lek : We should not use anything other
		// than an attack, such as chat.");
		// c.getPlayer().dropMessage(5, "@save : Save to force the current
		// character.");
		// c.getPlayer().dropMessage(5,
		// "@henesys @home @town : " + ServerConstants.serverName + " Square
		// will move the Hennessy throw.");
		// c.getPlayer().dropMessage(5,
		// "@clearinv : Clears all items in the selected inventory
		// [all/mounts/equipt/use/setup/etc/cash].");
		// c.getPlayer().dropMessage(5, "@maxskills : The current master of his
		// profession skills.");
		// c.getPlayer().dropMessage(5, "@secondaryweaponoff : Disable the
		// secondary weapon is being mounted.");
		// c.getPlayer().dropMessage(5, "@auction : Call the auction house
		// caretaker of a rich egg.");
		// c.getPlayer().dropMessage(5, "@style : Opens NPC for styling.");
		// c.getPlayer().dropMessage(5, "@reloadstats : With HP, MP that is not
		// erased when it is filled.");
		// c.getPlayer().dropMessage(5,
		// "@후원포인트선물 : You can gift a sponsorship point is currently owned by
		// another user.");
		// c.getPlayer().dropMessage(5, "@fishing : The instructions that go to
		// the fishing spot");
		// c.getPlayer().dropMessage(5, "@glass : The instructions that receive
		// the vitreous");
		// c.getPlayer().dropMessage(5, "@캐시 금액 : The instruction cache that can
		// charge. Up to ? 900,000");
		// c.getPlayer().dropMessage(5, "@casino : The command to go to the
		// casino.");
		// c.getPlayer().dropMessage(5, "@jaguar : Move to a place where catch
		// wild jaguar hunter");
		// c.getPlayer().dropMessage(5, "@ Recovery Application : The
		// instructions apply to recovery:");
		// c.getPlayer().dropMessage(5, "@backupequipment : The backup equipment
		// is the command to apply:");
		// c.getPlayer().dropMessage(5,
		// "@huntingpokeop : NPC level up is a floater instructions to go to the
		// hunting grounds are fast pokeop:");
		// c.getPlayer().dropMessage(5, "~To say : Full Chat");
		// } else if (splitted[0].equals("@cash")) {
		// if (splitted[1].equals("")) {
		// c.getPlayer().dropMessage(1, "Please enter the amount you charge.");
		// c.getPlayer().ea();
		// return;
		// }
		// if (splitted[1].contains("-")) {
		// c.getPlayer().dropMessage(1, "You can charge more than one from the
		// cache.");
		// c.getPlayer().ea();
		// return;
		// }
		// int meso = 0;
		// try {
		// meso = (Integer.parseInt(splitted[1]) * 100);
		// } catch (Exception ex) {
		// c.getPlayer().dropMessage(1, "The numbers can be input.");
		// c.getPlayer().ea();
		// return;
		// }
		// if (c.getPlayer().getMeso() >= meso) {
		// if (Integer.parseInt(splitted[1]) >= 900000) {
		// c.getPlayer().dropMessage(1, "More than 900,000 caches can not be
		// charged.");
		// c.getPlayer().ea();
		// return;
		// }
		// c.getPlayer().gainMeso(-meso, true);
		// c.getPlayer().modifyCSPoints(1, Integer.parseInt(splitted[1]), true);
		// c.getPlayer().dropMessage(1, Integer.parseInt(splitted[1]) + "The
		// cache has been charged.");
		// c.getPlayer().ea();
		// }
		// } else if (splitted[0].equals("@recommender")) {
		// NPCScriptManager.getInstance().dispose(c);
		// NPCScriptManager.getInstance().start(c, 1540012);
		// } else if (splitted[0].equals("@secondaryweaponoff")) {
		// IEquip equip = null;
		// equip = (IEquip)
		// c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((byte)
		// -10);
		// if (equip == null) {
		// c.getPlayer().Message(1, "The secondary weapon does not exist, you
		// are seated.");
		// c.getSession().write(MainPacketCreator.resetActions());
		// return;
		// }
		// c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot((byte)
		// -10);
		// c.getPlayer().equipChanged();
		// InventoryManipulator.addFromDrop(c, equip, false);
		// c.getPlayer().getStat().recalcLocalStats();
		// c.getPlayer().send(MainPacketCreator.getPlayerInfo(c.getPlayer()));
		// MapleMap currentMap = c.getPlayer().getMap();
		// currentMap.removePlayer(c.getPlayer());
		// currentMap.addPlayer(c.getPlayer());
		// } else if (splitted[0].equals("@auction")) {
		// NPCScriptManager.getInstance().start(c, 9030300);
		// c.getPlayer().ea();
		// } else if (splitted[0].equals("@style")) {
		// NPCScriptManager.getInstance().start(c, KindredConstants.STYLE_NPC);
		// c.getPlayer().ea();
		// } else if (splitted[0].equals("@rebirth")) {
		// if (GameConstants.isZero(c.getPlayer().getJob())) {
		// NPCScriptManager.getInstance().start(c, 1540422);
		// return;
		// }
		// NPCScriptManager.getInstance().start(c, 3000144);
		// c.getPlayer().ea();
		// } else if (splitted[0].equals("@glass")) {
		// NPCScriptManager.getInstance().start(c, 9000002);
		// c.getPlayer().ea();
		// } else if (splitted[0].equals("@hupogift")) {
		// MapleCharacter who =
		// c.getChannelServer().getPlayerStorage().getCharacterByName(splitted[1]);
		// final int rc = Integer.parseInt(splitted[2]);
		// if (who != null) {
		// if (rc > 0) {
		// if (c.getPlayer().getRC() > rc) {
		// who.gainRC(rc);
		// who.dropMessage(6, "[알림] " + c.getPlayer().getName() + "님으로부터 " + rc
		// + "후원포인트를 획득했습니다.");
		// c.getPlayer().dropMessage(5, "[알림] " + splitted[1] + "님에게 " + rc +
		// "후원포인트를 지급했습니다.");
		// } else {
		// c.getSession().write(MainPacketCreator.getGMText(20, "[알림] 선물하실 포인트가
		// 부족합니다."));
		// }
		// } else {
		// c.getSession().write(MainPacketCreator.getGMText(20, "[알림] 선물하실 포인트가
		// 0포인트보다 작습니다."));
		// }
		// } else {
		// c.getPlayer().dropMessage(5, "대상 플레이어를 발견하지 못했습니다.");
		// }
		// } else if (splitted[0].equals("@Reloadstats")) {
		// MapleCharacter player = c.getPlayer();
		// player.getStat().recalcLocalStats();
		// c.getPlayer().dropMessage(5, "[NOTE] it has completed stat reload.");
		// }
	}

	@Override
	public CommandDefinition[] getDefinition() {
		return new CommandDefinition[] {
				new CommandDefinition("str", "<Raise the amount> ", " You can take the stats instead of a mouse click.",
						0),
				new CommandDefinition("dex", "", "", 0), new CommandDefinition("int", "", "", 0),
				new CommandDefinition("luk", "", "", 0), new CommandDefinition("hp", "", "", 0),
				new CommandDefinition("style", "", "", 0),
				new CommandDefinition("styler", "", "", 0), new CommandDefinition("npc", "", "", 0),
				new CommandDefinition("go", "", "", 0), new CommandDefinition("unstuck", "", "", 0),
				new CommandDefinition("dispose", "", "", 0), new CommandDefinition("maxskills", "", "", 0),
				new CommandDefinition("clearinv", "", "", 0), new CommandDefinition("upgrade", "", "", 0),
				new CommandDefinition("exchange", "", "", 0), new CommandDefinition("commands", "xxx", "", 0),
				new CommandDefinition("help", "x", "xx", 0), new CommandDefinition("shop", "", "", 0),
				new CommandDefinition("uncap", "", "", 0), new CommandDefinition("unlock", "", "", 0),
				new CommandDefinition("learn", "", "", 0), new CommandDefinition("skill", "", "", 0),
				new CommandDefinition("fm", "a", "z", 0), new CommandDefinition("home", "a", "z", 0) };
	}

	private static class RepairEquip {

		public RepairEquip() {
		}

		private boolean saveRepairEquip(MapleCharacter player) {
			throw new UnsupportedOperationException("Not supported yet."); // To
																			// change
																			// body
																			// of
																			// generated
																			// methods,
																			// choose
																			// Tools
																			// |
																			// Templates.
		}

		private boolean gainRepairEquip(MapleCharacter player) {
			throw new UnsupportedOperationException("Not supported yet."); // To
																			// change
																			// body
																			// of
																			// generated
																			// methods,
																			// choose
																			// Tools
																			// |
																			// Templates.
		}
	}
}
