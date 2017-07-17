/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleCharacter;
import client.MapleCharacterStat;
import client.MapleClient;
import client.items.*;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.stats.BuffStats;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import client.stats.PlayerStat;
import community.MaplePartyCharacter;
import constants.GameConstants;
import constants.ServerConstants;
import handler.skill.CygnusHandler;
import handler.skill.ExplorerHandler;

import java.awt.Point;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import packet.creators.MainPacketCreator;
import packet.creators.MobPacket;
import packet.creators.TheSidPacket;
import packet.creators.UIPacket;
import packet.skills.AngelicBusterSkill;
import packet.skills.KaiserSkill;
import packet.transfer.read.ReadingMaple;
import server.items.ItemInformation;
import server.life.Element;
import server.life.MapleMonster;
import server.life.MapleMonsterStats;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import server.maps.MapleWorldMapItem;
import tools.ArrayMap;
import tools.AttackPair;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer.EtcTimer;

public class DamageParse {

	public static MapleClient c;

	public DamageParse(MapleClient c) {
		DamageParse.c = c;
	}

	public MapleClient getClient() {
		return c;
	}

	public static void doHideAndSeek(MapleCharacter player, AttackInfo attack, boolean catched) {
		for (MapleCharacter attackedPlayers : player.getMap().getNearestPvpChar(player.getPosition(), 91, 40,
				attack.animation >= 0 ? true : false,
				Collections.unmodifiableCollection(player.getMap().getCharacters()))) {
			if (attackedPlayers.isAlive() && attackedPlayers.isCatched && player.isCatching) {
				CatchPlayer(player, attackedPlayers);
			}
		}
	}

	public static void CatchPlayer(MapleCharacter player, MapleCharacter catched) {

		player.getMap().broadcastMessage(MainPacketCreator.showGatherComplete(player.getId(), true));
		player.getMap().broadcastMessage(MainPacketCreator.serverNotice(6,
				"[술래잡기] 늑대 " + player.getName() + "님이 양 " + catched.getName() + "님을 잡으셨습니다."));
		catched.getStat().setHp(0);
		catched.updateSingleStat(PlayerStat.HP, 0);
		boolean alliveCatched = false;
		for (MapleCharacter chr : player.getMap().getCharacters()) {
			if (chr.isAlive() && chr.isCatched) {
				alliveCatched = true;
				break;
			}
		}
		if (!alliveCatched) {
			player.getMap().stopCatch();
			for (MapleCharacter chr : player.getMap().getCharacters()) {
				chr.getStat().setHp(chr.getStat().getMaxHp());
				chr.updateSingleStat(PlayerStat.HP, chr.getStat().getHp());
				if (chr.isCatching) {
					chr.changeMap(chr.getClient().getChannelServer().getMapFactory().getMap(109090200),
							chr.getClient().getChannelServer().getMapFactory().getMap(109090200).getPortalSP().get(0));
				} else {
					chr.changeMap(chr.getClient().getChannelServer().getMapFactory().getMap(109090101),
							chr.getClient().getChannelServer().getMapFactory().getMap(109090101).getPortalSP().get(0));
				}
			}
			player.getMap().broadcastMessage(
					MainPacketCreator.serverNotice(1, "양들이 모두 잡혀서 늑대가 승리하였습니다!\r\n모든 분들은 게임 보상맵으로 이동 됩니다."));
		}
	}

	public static void applyAttack(AttackInfo attack, ISkill theSkill, final MapleCharacter player, int attackCount,
			SkillStatEffect effect, AttackType attack_type) {
		MapleMap map = player.getMap();
		if (player.getMapId() == 109090300) {
			doHideAndSeek(player, attack, true);
			return;
		}
		if (player.isEquippedSoulWeapon() && attack.skill == player.getEquippedSoulSkill()) {
			player.checkSoulState(true);
		}
		if (player.getBuffedValue(BuffStats.WIND_WALK) != null) { // 윈드워크 은신해제
			player.cancelEffectFromBuffStat(BuffStats.WIND_WALK, -1);
		}
		if (player.getBuffedValue(BuffStats.DARKSIGHT) != null && player.getSkillLevel(4330001) > 0) { // 어드밴스드
																										// 다크사이트
																										// 은신해제
			if (!SkillFactory.getSkill(4330001).getEffect(player.getSkillLevel(4330001)).makeChanceResult()) {
				player.cancelEffectFromBuffStat(BuffStats.DARKSIGHT, 4330001);
			}
		}
		if (GameConstants.isAran(player.getJob()) && attack.skill != 0) {
			player.useComboSkill(attack.skill);
		}

//		if (player.getSkillLevel(4100011) > 0) {
//			SkillStatEffect eff = SkillFactory.getSkill(4100011).getEffect(player.getSkillLevel(4100011));
//			if (eff.makeChanceResult()) {
//				for (Map.Entry z : effect.getMonsterStati().entrySet()) {
//					for (AttackPair ap : attack.allDamage) {
//						final MapleMonster monster = player.getMap().getMonsterByOid(ap.objectid);
//						monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.MARKOF, 1), SkillFactory.getSkill(4120018), null, false), false, 5000, false);
//					}
//				}
//			}
//
//			int bulletCount = eff.getBulletCount();
//			for (AttackPair ap : attack.allDamage) {
//				final MapleMonster source = player.getMap().getMonsterByOid(ap.objectid);
//
//				final MonsterStatusEffect check = source.getBuff(MonsterStatus.MARKOF);
//
//				if (check != null && check.getSkill().getId() == 4100011 && check.getOwnerId() == player.getId()) { // :3
//					final List<MapleMapObject> objs = player.getMap().getMapObjectsInRange(player.getPosition(), 500000,
//							Arrays.asList(MapleMapObjectType.MONSTER));
//					final List<MapleMonster> monsters = new ArrayList<>();
//					for (int i = 0; i < bulletCount; i++) {
//						int rand = Randomizer.rand(0, objs.size() - 1);
//						if (objs.size() < bulletCount) {
//							if (i < objs.size()) {
//								monsters.add((MapleMonster) objs.get(i));
//							}
//						} else {
//							monsters.add((MapleMonster) objs.get(rand));
//							objs.remove(rand);
//						}
//					}
//					final List<Point> points = new ArrayList<>();
//					for (MapleMonster mob : monsters) {
//						points.add(mob.getPosition());
//					}
//					player.getMap().broadcastMessage(MainPacketCreator.giveMarkOfTheif(player.getId(), source.getObjectId(),
//							4100012, monsters, player.getPosition(), monsters.get(0).getPosition(), 2070005));
//				}
//			}
//		}
		if (GameConstants.isNightLord(player.getJob()) && player.getSkillLevel(4100011) > 0
				&& attack.skill != 4100012) { // assassin's
			// mark
			SkillStatEffect eff = SkillFactory.getSkill(4100011).getEffect(player.getSkillLevel(4100011));
			int bulletCount = eff.getBulletCount();
			for (AttackPair ap : attack.allDamage) {
				final MapleMonster source = player.getMap().getMonsterByOid(ap.objectid);
				 final MonsterStatusEffect check =
				 source.getBuff(MonsterStatus.MARKOF);
				 if (check != null) {
//					 System.out.println("yes");
				final List<MapleMapObject> objs = player.getMap().getMapObjectsInRange(player.getPosition(), 500000,
						Arrays.asList(MapleMapObjectType.MONSTER));
				final List<MapleMonster> monsters = new ArrayList<>();
				for (int i = 0; i < bulletCount; i++) {
					int rand = Randomizer.rand(0, objs.size() - 1);
					if (objs.size() < bulletCount) {
						if (i < objs.size()) {
							monsters.add((MapleMonster) objs.get(i));
						}
					} else {
						monsters.add((MapleMonster) objs.get(rand));
						objs.remove(rand);
					}
				}
				// if (monsters.size() <= 0) {
				// MainPacketCreator.resetActions();
				// return;
				// }
				final List<Point> points = new ArrayList<>();
				for (MapleMonster mob : monsters) {
					points.add(mob.getPosition());
				}
				player.getMap().broadcastMessage(MainPacketCreator.giveMarkOfTheif(player.getId(), source.getObjectId(),
						4100012, monsters, player.getPosition(), monsters.get(0).getPosition(), 2070006));
				player.send(MainPacketCreator.giveMarkOfTheif(player.getId(), source.getObjectId(), 4100012, monsters,
						player.getPosition(), monsters.get(0).getPosition(), 2070006));
				 } else {
//					 System.out.println("nah dude");
				 }
			}
		}
		


		if (attack.skill == 4211006) { // meso explosion
			for (AttackPair oned : attack.allDamage) {
				if (oned.attack != null) {
					continue;
				}
				MapleMapObject mapobject = map.getMapObject(oned.objectid);

				if (mapobject != null && mapobject.getType() == MapleMapObjectType.ITEM) {
					MapleWorldMapItem mapitem = (MapleWorldMapItem) mapobject;

					if (mapitem.getMeso() > 0) {
						if (mapitem.isPickedUp()) {
							return;
						}
						map.removeMapObject(mapitem);
						map.broadcastMessage(MainPacketCreator.explodeDrop(mapitem.getObjectId()));
						mapitem.setPickedUp(true);
					} else {
						return;
					}
				} else {
					return; // etc explosion, exploding nonexistant things, etc.
				}
			}
		}

		int fixeddmg;
		long totDamage = 0, totDamageToOneMonster = 0;
		MapleCharacterStat stats = player.getStat();

		byte overallAttackCount; // Tracking of Shadow Partner additional
									// damage.
		MapleMonster monster;
		MapleMonsterStats monsterstats;
		int mobs = 0;

		for (final AttackPair mob : attack.allDamage) {
			int mdmg = 0;
			monster = map.getMonsterByOid(mob.objectid);
			for (Pair<Integer, Boolean> dmg : mob.attack) {
				mdmg += dmg.left;
			}
			if (monster.getMobMaxHp() - mdmg < 0) {
				mobs++;
			}
		}

		for (final AttackPair oned : attack.allDamage) {
			monster = map.getMonsterByOid(oned.objectid);
			if (monster != null) {
				totDamageToOneMonster = 0;
				monsterstats = monster.getStats();
				fixeddmg = monsterstats.getFixedDamage();
				overallAttackCount = 0; // Tracking of Shadow Partner additional
										// damage.

				if (player.haveItem(3994514, 1, false, true)) {
					if (monster.getStats().getLevel() + 20 > player.getLevel()
							&& monster.getStats().getLevel() - 20 <= player.getLevel()) {
						player.getStat().addSaintSaver(1);
					}
				}
				if (GameConstants.isKaiser(player.getJob())) {
					if (!player.isFinalFiguration) {
						player.getClient().send(KaiserSkill.giveMorphGauge(player.getStat().addMorph(40)));
					}
				} else if (GameConstants.isLuminous(player.getJob())) {
					Integer Gauge = player.getBuffedValue(BuffStats.LUMINOUS_GAUGE);
					if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == null
							|| player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == -1) {
						if (GameConstants.isDarkSkills(attack.skill)) {
							player.getSunfireBuffedValue(20040216, attack.skill, Gauge);
						} else {
							player.getEclipseBuffedValue(20040217, attack.skill, Gauge);
						}
					} else {
						if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040216) {
							player.getSunfireBuffedValue(20040216, attack.skill, Gauge);
						} else if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040217) {
							player.getEclipseBuffedValue(20040217, attack.skill, Gauge);
						}
					}
				}
				Integer eachd;
				for (Pair<Integer, Boolean> eachde : oned.attack) {
					eachd = eachde.left;
					overallAttackCount++;
					if (fixeddmg != -1) {
						if (monsterstats.getOnlyNoramlAttack()) {
							eachd = attack.skill != 0 ? 0 : fixeddmg;
						} else {
							eachd = fixeddmg;
						}
					} else {
						if (monsterstats.getOnlyNoramlAttack()) {
							eachd = attack.skill != 0 ? 0 : eachd;
						}
					}
					totDamageToOneMonster += eachd;
				}
				totDamage += totDamageToOneMonster;
				player.checkMonsterAggro(monster);

				ISkill venom = null;
				SkillStatEffect venomEffect = null;
				MonsterStatusEffect monsterStatusEffect;
				boolean fatal = false;
				if (player.getSkillLevel(GameConstants.getFatalVenomSkill(player.getJob())) > 0) {
					venom = SkillFactory.getSkill(GameConstants.getFatalVenomSkill(player.getJob()));
					venomEffect = venom.getEffect(player.getSkillLevel(venom));
					fatal = true;
				} else if (player.getSkillLevel(GameConstants.getVenomSkill(player.getJob())) > 0) {
					venom = SkillFactory.getSkill(GameConstants.getVenomSkill(player.getJob()));
					venomEffect = venom.getEffect(player.getSkillLevel(venom));
				}

				if (player.getSkillLevel(1200014) > 0) {
					int skillid[] = { 1201011, 1201012, 1211004, 1211006, 1211008 };
					if (player.GetCount() < 5) {
						for (int i = 0; i < skillid.length; i++) {
							if (attack.skill == skillid[i]) {
								if (player.GetSkillid() != skillid[i]) {
									player.SetSkillid(attack.skill);
									if (player.GetSkillid() != 0) {
										player.AddCount(1);
										player.send(MainPacketCreator.ElementalCharge(player.GetCount(), 1200014));
									}
								}
							}
						}
					}
				}

				if (player.getSkillLevel(100000267) > 0) {
					switch (attack.skill) {
					case 101001200:
					case 101000200:
					case 101000201:
					case 101101200:
					case 101100200:
					case 101100201:
					case 101111200:
					case 101110200:
					case 101110202:
					case 101110203:
					case 101120201:
					case 101120202:
					case 101120204:
						if (player.getSkillLevel(100000276) < 10) {
							player.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(101120207, 3)); // 이펙트
							player.changeSkillLevel(100000276, (byte) (player.getSkillLevel(100000276) + 1),
									(byte) (player.getSkillLevel(100000276) + 1));
						}
						SkillStatEffect eff = SkillFactory.getSkill(100000276)
								.getEffect(player.getSkillLevel(100000276));
						eff.applyTo(player);
						if (player.rapidtimer1 != null) {
							player.rapidtimer1.cancel(false);
							player.rapidtimer1 = null;
						}
						player.cancelRapidTime((byte) 1);
						break;
					case 101001100:
					case 101000100:
					case 101000101:
					case 101101100:
					case 101100100:
					case 101100101:
					case 101111100:
					case 101110100:
					case 101110102:
					case 101110103:
					case 101120101:
					case 101120102:
					case 101120104:
						if (player.getSkillLevel(100000277) < 10) {
							player.RapidTimeCount++;
							player.changeSkillLevel(100000277, (byte) (player.getSkillLevel(100000277) + 1),
									(byte) (player.getSkillLevel(100000277) + 1));
						}
						SkillStatEffect eff2 = SkillFactory.getSkill(100000277)
								.getEffect(player.getSkillLevel(100000277));
						eff2.applyTo(player);
						if (player.rapidtimer2 != null) {
							player.rapidtimer2.cancel(false);
							player.rapidtimer2 = null;
						}
						player.cancelRapidTime((byte) 2);
						break;
					}
				}
				if (GameConstants.isAdventureJob(player.getJob())) {
                   ExplorerHandler.AdventureAttack(player, monster, attack, 2070006);
                } 
				if (GameConstants.isKOC(player.getJob())) {
					CygnusHandler.CygnusAttack(player, monster, attack);
					// System.out.println("boom handle");
				}
				if (player.getSkillLevel(3210013) > 0) {
					SkillStatEffect sse = SkillFactory.getSkill(3210013).getEffect(player.getSkillLevel(3210013));
					sse.applyTo(player);
				}
				if (player.getSkillLevel(36110003) > 0) {
					ISkill skill = SkillFactory.getSkill(36110003);
					SkillStatEffect effs = skill.getEffect(player.getSkillLevel(skill));
					if (player.getLastCombo() + 5000 < System.currentTimeMillis()) {
						player.acaneAim = 0;
						player.clearDamageMeters();
					}
					if (effs.makeChanceResult()) {
						player.setLastCombo(System.currentTimeMillis());
						if (player.acaneAim < 3) {
							player.acaneAim++;
						}
						Map<MonsterStatus, Integer> stat = new ArrayMap<MonsterStatus, Integer>();
						stat.put(MonsterStatus.DARKNESS, effs.getX());
						stat.put(MonsterStatus.TRIANGLE_FOMATION, player.acaneAim);
						monsterStatusEffect = new MonsterStatusEffect(stat, skill, null, false);
						monster.applyStatus(player, monsterStatusEffect, false, effs.getDuration(), true);
					}
				}

				/* 픽파킷 */
				if (player.getBuffedValue(BuffStats.PICKPOCKET) != null) {
					switch (attack.skill) {
					case 0:
					case 4001334: // 더블 스탭
					case 4201004: // 스틸
					case 4201005: // 새비지 블로우
					case 4211002: // 무스펠 하임
					case 4211011: // 엣지 카니발
					case 4221016: // 암살
					case 4221007: // 부메랑 스탭
					case 4221010:
						handlePickPocket(player, monster, oned);
						break;
					}
				}

				if (totDamageToOneMonster > 0) {
					if (attack.skill == 4201004) { // Steal
						monster.handleSteal(player);
					}
					if (GameConstants.isDemonSlayer(player.getJob())) { // 포스 흡수
						player.handleForceGain(monster.getObjectId(), attack.skill);
					}
					if (player.getSkillLevel(30010111) > 0) { // 데쓰 커스
						SkillStatEffect effs = SkillFactory.getSkill(30010111).getEffect(1);
						if (effs.makeChanceResult()) {
							if (!monster.getStats().isBoss() && player.getMapId() != 900000000
									&& player.getMapId() != 109040004) { // 보스가
																			// 아니어야함.
								totDamageToOneMonster = 999999999;
								player.addHP((long) (player.getStat().getCurrentMaxHp() * (effs.getX() / 100.0D))); // 체력
																													// 회복
							}
						}
					}
					if (attack.skill == 27121303) {
						if (!monster.getStats().isBoss()) {
							totDamageToOneMonster = 999999999;
						}
					}
					if (GameConstants.isLuminous(player.getJob())) {
						SkillStatEffect dkeffect = player.getBuffedSkillEffect(BuffStats.DARK_CRESSENDOR, 27121005);
						if (dkeffect != null) {
							if (player.getLastCombo() + 5000 < System.currentTimeMillis()) {
								player.acaneAim = 0;
								player.clearDamageMeters();
							}

							if (dkeffect.makeChanceResult()) {
								player.setLastCombo(System.currentTimeMillis());
								if (player.acaneAim <= 29) {
									player.acaneAim++;
									dkeffect.applyTo(player);
								}
							}
						}
					}
					if (player.getJob() == 422) {
						int critical = player.acaneAim;
						if (attack.skill > 0) {
							player.send(packet.creators.MainPacketCreator.CriticalGrowing(critical));
						}
						if (player.acaneAim <= 23) {
							player.acaneAim++;
						}
					}
					if (player.getJob() == 422) {
						if (player.getSkillLevel(4221013) > 0) {
							for (int i = 0; i < 6; i++) {
								if (attack.skill > 0) {
									player.send(packet.creators.MainPacketCreator.KillingPoint(i));
								}
							}
						}
					}
					if (player.getJob() >= 310 && player.getJob() <= 312) {
						if (player.getSkillLevel(3101009) > 0) {
							if (attack.skill > 0) {
								if (player.QuiverCallCount == 2 && player.getQuiverArrowCount(1) <= 0
										&& player.getQuiverArrowCount(1) > -10) {
									player.setQuiverArrowCount(1, player.getQuiverArrowCount(1) - 1);
									player.send(MainPacketCreator.QuiverKartrige(player, 1,
											player.getQuiverArrowCount(1), true));
									if (player.getBuffedValue(BuffStats.ADVANCED_QUIVER) != null) {
										if (Randomizer.nextInt(100) < 70) {
											long recover = (long) (totDamageToOneMonster * (30 / 100.0D));
											player.addHP(recover);
										}
									} else {
										if (Randomizer.nextInt(100) < 50) {
											long recover = (long) (totDamageToOneMonster * (20 / 100.0D));
											player.addHP(recover);
										}
									}
								} else if (player.QuiverCallCount == 3 && player.getQuiverArrowCount(2) <= 0
										&& player.getQuiverArrowCount(2) > -10) {
									player.setQuiverArrowCount(2, player.getQuiverArrowCount(2) - 1);
									player.send(MainPacketCreator.QuiverKartrige(player, 2,
											player.getQuiverArrowCount(2), true));
									if (Randomizer.nextInt(100) < 90) {
										monster.applyStatus(player,
												new MonsterStatusEffect(
														Collections.singletonMap(MonsterStatus.POISON, 1),
														SkillFactory.getSkill(3101009), null, false),
												true, (long) 5 * 1000, false);
									}
								} else if (player.QuiverCallCount == 4 && player.getQuiverArrowCount(3) <= 0
										&& player.getQuiverArrowCount(3) > -10) {
									player.setQuiverArrowCount(3, player.getQuiverArrowCount(3) - 1);
									player.send(MainPacketCreator.QuiverKartrige(player, 3,
											player.getQuiverArrowCount(3), true));
									if (player.getBuffedValue(BuffStats.ADVANCED_QUIVER) != null) {
										if (Randomizer.nextInt(100) < 60) {
											player.send(MainPacketCreator.giveMagicArrow(player));
										}
									} else {
										if (Randomizer.nextInt(100) < 30) {
											player.send(MainPacketCreator.giveMagicArrow(player));
										}
									}
								}
							}
						}
					}
					if (player.getSkillLevel(5100015) > 0) {
						if (attack.skill > 0) {
							final int count = player.acaneAim + 1;
							if ((!player.EnergyCharge) && (count * 350 < 9800)) {
								player.send(MainPacketCreator.giveEnergyCharge(count * 350, 9800));
								player.acaneAim++;
							} else if ((!player.EnergyCharge) && (count * 350 == 9800)) {
								player.EnergyCharge = true;
								player.send(MainPacketCreator.giveEnergyChargeMaximum(5120018, 10000));
								player.send(MainPacketCreator.giveForeignEnergyCharge(player.getId(), 10000, -1));
							} else if ((player.EnergyCharge) && (count * 350 >= 700) && (count * 350 <= 9800)) {
								player.send(MainPacketCreator.giveEnergyChargeCooling(5120018, count * 350));
								player.acaneAim--;
							} else {
								player.EnergyCharge = false;
								player.acaneAim = 0;
							}
						}
					}
					// int currentBat = 0;
					// for (MapleSummon summon : player.getSummons().values()) {
					// if (summon.getSkill() == 14000027) {
					// currentBat++;
					// }
					// }
					// if (GameConstants.isNightWalker(player.getJob()) &&
					// player.getSkillLevel(14000027) > 0
					// && attack.targets > 0 && Randomizer.isSuccess(30)) {
					// int BatLimit = player.getSkillLevel(14000027) > 0 ?
					// player.getSkillLevel(14100027) > 0
					// ? player.getSkillLevel(14110029) > 0 ?
					// player.getSkillLevel(14120008) > 0 ? 5 : 4 : 3
					// : 2 : 0;
					// if (currentBat < BatLimit) {
					// if (currentBat > 0) {
					// final List<MapleMapObject> monstersInRange =
					// c.getPlayer().getMap()
					// .getMapObjectsInRange(c.getPlayer().getPosition(),
					// 1000000.0,
					// Arrays.asList(MapleMapObjectType.MONSTER));
					// if (monstersInRange.size() > 0) {
					// int random = Randomizer.rand(0, monstersInRange.size());
					// player.getMap().broadcastMessage(MainPacketCreator.giveShadowBat(player.getId(),
					// monstersInRange.get(random).getObjectId(),
					// player.getTruePosition()));
					// monstersInRange.remove(random);
					// }
					// }
					// if (currentBat < 3) {
					// SkillStatEffect batskill =
					// SkillFactory.getSkill(14000027)
					// .getEffect(player.getSkillLevel(14000027));
					// MapleSummon summon = new MapleSummon(player, 14000027,
					// player.getPosition(),
					// batskill.getSummonMovementType());
					// player.getMap().spawnSummon(summon, true,
					// batskill.getDuration());
					// player.getSummons().put(14000027, summon);
					// }
					// }
					// }
					if (player.getJob() >= 1500 && player.getJob() <= 1512) {
						SkillStatEffect dkeffect = player.getBuffedSkillEffect(BuffStats.LIGHTNING, 15001022);
						if (dkeffect != null) {
							int prop = player.getSkillLevel(15001022), maxcount = 1;
							if (player.getJob() >= 1500 && player.getJob() <= 1512) {
								if (player.getSkillLevel(15001023) > 0) {
									prop += player.getSkillLevel(15001023);
									maxcount++;
								}
							}
							if (player.getJob() >= 1510 && player.getJob() <= 1512) {
								if (player.getSkillLevel(15100025) > 0) {
									prop += player.getSkillLevel(15100025);
									maxcount++;
								}
							}
							if (player.getJob() >= 1511 && player.getJob() <= 1512) {
								if (player.getSkillLevel(15110026) > 0) {
									prop += player.getSkillLevel(15110026);
									maxcount++;
								}
							}
							if (player.getJob() == 1512) {
								if (player.getSkillLevel(15120008) > 0) {
									prop += player.getSkillLevel(15120008);
									maxcount++;
								}
							}
							if (player.getLastCombo() + 30000 < System.currentTimeMillis()) {
								player.acaneAim = 0;
								player.clearDamageMeters();
							}

							if (Randomizer.nextInt(99) < prop) {
								player.setLastCombo(System.currentTimeMillis());
								if (player.acaneAim < maxcount) {
									player.acaneAim++;
									dkeffect.applyTo(player);
								}
							}
						}
					}

					if (player.getSkillLevel(4330007) > 0) { // 바이탈 스틸
						SkillStatEffect effects = SkillFactory.getSkill(4330007)
								.getEffect(player.getSkillLevel(4330007));
						if (effects.makeChanceResult()) {
							long fhp = (long) (totDamageToOneMonster / effects.getX());
							long shp = (long) (player.getStat().getCurrentMaxHp() / 100.0D) * 20;
							if (fhp > shp) { // 자신의 HP의 15%이상은 흡수 불가
								fhp = shp;
							}
							player.addHP(fhp);
						}
					}

					for (IItem item : player.getInventory(MapleInventoryType.EQUIPPED)) {
						Equip equip = (Equip) item;
						if (equip.getState() > 1) {
							int[] potentials = { equip.getPotential1(), equip.getPotential2(), equip.getPotential3(),
									equip.getPotential4(), equip.getPotential5() };
							ItemInformation ii = ItemInformation.getInstance();
							StructPotentialItem pot;
							for (int i : potentials) {
								if (i > 0) {
									pot = ii.getPotentialInfo(i).get(ii.getReqLevel(equip.getItemId()) / 10);
									if (pot != null && pot.prop > 0) {
										if (Randomizer.nextInt(100) <= pot.prop) {
											switch (i) {
											case 10201:
											case 20201:
												player.addHP(pot.HP);
												break;
											case 10202:
											case 20206:
												player.addMP(pot.MP);
												break;
											case 10221:
												// 시간을 잘몰라서 5초라 생각하고 구현
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.POISON,
																		(int) pot.level),
														SkillFactory.getSkill(90001003), null, false), false,
														(long) 5 * 1000, false);
												break;
											case 10226:
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.STUN,
																		(int) pot.level),
														SkillFactory.getSkill(90001001), null, false), false,
														(long) 5 * 1000, false);
												break;
											case 10231:
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.SPEED,
																		(int) pot.level),
														SkillFactory.getSkill(90001002), null, false), false,
														(long) 5 * 1000, false);
												break;
											case 10236:
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.DARKNESS,
																		(int) pot.level),
														SkillFactory.getSkill(90001004), null, false), false,
														(long) 5 * 1000, false);
												break;
											case 10241:
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.FREEZE,
																		(int) pot.level),
														SkillFactory.getSkill(90001006), null, false), false,
														(long) 5 * 1000, false);
												break;
											case 10246:
												monster.applyStatus(player,
														new MonsterStatusEffect(
																Collections.singletonMap(MonsterStatus.SEAL,
																		(int) pot.level),
														SkillFactory.getSkill(90001005), null, false), false,
														(long) 5 * 1000, false);
												break;
											}
										}
									}
								}
							}
						}
					}

					if (player.getBuffedValue(BuffStats.VAMPIRIC_TOUCH) != null && totDamageToOneMonster <= 999999
							&& totDamageToOneMonster > 0) { // 뱀피릭 터치
						SkillStatEffect effs = SkillFactory.getSkill(31121002)
								.getEffect(player.getSkillLevel(31121002));
						if (player.getParty() == null) {
							long recover = (long) (totDamageToOneMonster * (effs.getX() / 100.0D));
							Math.min(recover, (long) (player.getStat().getCurrentMaxHp() * 0.03D));
							player.addHP(recover);
						} else {
							for (MaplePartyCharacter hpc : player.getParty().getMembers()) {
								if (hpc.isOnline() && hpc.getMapid() == player.getMapId()) {
									MapleCharacter pchar = player.getClient().getChannelServer().getPlayerStorage()
											.getCharacterById(hpc.getId());
									if (pchar != null) {
										long recover = (long) (totDamageToOneMonster * (effs.getX() / 100.0D));
										Math.min(recover, (long) (pchar.getStat().getCurrentMaxHp() * 0.03D));
										pchar.addHP(recover);
									}
								}
							}
						}
					}
					/* 엔젤릭버스터 스킬 비활성 */
					if (GameConstants.isAngelicBuster(player.getJob())) {
						switch (attack.skill) {
						case 65001100: // 버블 스타
						case 65101100: // 스팅 익스플로전
						case 65111101: // 폴링 스타
						case 65121100: // 프라이멀 로어
						case 65121101: // 트리니티
							player.getClient().send(AngelicBusterSkill.lockSkill(attack.skill));
							player.getClient().send(MainPacketCreator.resetActions());
							break;
						}
					}

					/* 소울 리차지 */
					if (GameConstants.isAngelicBuster(player.getJob())) {
						for (AttackPair a : attack.allDamage) {
							if (a.attack.get(0).getLeft() > 0) {
								int prop = SkillFactory.getSkill(attack.skill)
										.getEffect(
												player.getSkillLevel(GameConstants.getLinkedAttackSkill(attack.skill)))
										.getOnActive();
								switch (attack.skill) {
								case 65111007: // 소울 시커 (공격)
									if (Randomizer.rand(0, 100) <= 30) {
										player.getClient().send(AngelicBusterSkill.unlockSkill());
										player.getClient().send(AngelicBusterSkill.showRechargeEffect());
										player.ea();
									}
									break;

								default:
									if (Randomizer.rand(0, 100) <= prop) {
										player.getClient().send(AngelicBusterSkill.unlockSkill());
										player.getClient().send(AngelicBusterSkill.showRechargeEffect());
										player.ea();
									}
									break;
								}
								break;
							}
						}
					}

					if (player.getSkillLevel(30010112) > 0) { // 데몬스퓨리 보스에서 포스
																// 흡수.
						if (monster.getStats().isBoss()) {
							stats.addForce(SkillFactory.getSkill(30010112).getEffect(1).getX());
						}
					}

					if (attack.skill != 24120002 && attack.skill != 24100003) {
						if (player.getSkillLevel(24120002) > 0) { // 느와르 카르트
							if (SkillFactory.getSkill(24120002).getEffect(player.getSkillLevel(24120002))
									.makeChanceResult() && Randomizer.isSuccess(20)) {
								player.addCardStack(1);
								int cardid = player.addCardStackRunningId();
								player.getMap().broadcastMessage(player, MainPacketCreator
										.absorbingCardStack(player.getId(), cardid, 24120002, false, 1), true);

							}
						} else if (player.getSkillLevel(24100003) > 0) { // 블랑
																			// 카르트
							if (SkillFactory.getSkill(24100003).getEffect(player.getSkillLevel(24100003))
									.makeChanceResult() && Randomizer.isSuccess(20)) {
								player.addCardStack(1);
								int cardid = player.addCardStackRunningId();
								player.getMap().broadcastMessage(player, MainPacketCreator
										.absorbingCardStack(player.getId(), cardid, 24100003, false, 1), true);
							}
						}
					}
				}

				if (totDamageToOneMonster > 0) {
					// 트라이플링 윔 trifling wind
					if (GameConstants.isWindBreaker(player.getJob()) && attack.skill != 13120003
							&& attack.skill != 13120010 && attack.skill != 13110022 && attack.skill != 13110027
							&& attack.skill != 13100022 && attack.skill != 13100027) {
						// if (attack.skill != 13120003 && attack.skill !=
						// 13120010 && attack.skill != 13110022 && attack.skill
						// != 13110027 && attack.skill != 13100022 &&
						// attack.skill != 13100027) {
						int percent = 0, count = 0, skillid = 0, type = 0;
						if (player.getSkillLevel(SkillFactory.getSkill(13120003)) > 0) {
							if (Randomizer.nextInt(100) < 85) {
								skillid = 13120003;
								type = 1;
							} else {
								skillid = 13120010;
								type = 1;
							}
							count = Randomizer.rand(1, 5);
							percent = 20;
						} else if (player.getSkillLevel(SkillFactory.getSkill(13110022)) > 0) {
							if (Randomizer.nextInt(100) < 90) {
								skillid = 13110022;
								type = 1;
							} else {
								skillid = 13110027;
								type = 1;
							}
							count = Randomizer.rand(1, 4);
							percent = 10;
						} else if (player.getSkillLevel(SkillFactory.getSkill(13100022)) > 0) {
							if (Randomizer.nextInt(100) < 95) {
								skillid = 13100022;
								type = 1;
							} else {
								skillid = 13100027;
								type = 1;
							}
							count = Randomizer.rand(1, 3);
							percent = 5;
						}
						for (MapleMapObject ob : player.getMap().getAllMonster()) {
							MapleMonster mob = (MapleMonster) ob;
							if (ob != null && ((mob.getPosition().getX() + 597) >= player.getPosition().getX())
									&& ((mob.getPosition().getX() - 597) <= player.getPosition().getX())
									&& ((mob.getPosition().getY() + 480) >= player.getPosition().getY())
									&& ((mob.getPosition().getY() - 480) <= player.getPosition().getY())) {
								if (Randomizer.nextInt(100) < percent) {
									player.getMap().broadcastMessage(player, MainPacketCreator.TrifleWorm(
											player.getId(), skillid, count, mob.getObjectId(), type), false);
									player.send(MainPacketCreator.TrifleWorm(player.getId(), skillid, count,
											mob.getObjectId(), type));
								}
							}
						}
					}
				}

				if (attack.skill == 1221009) { // 블래스트
					if (SkillFactory.getSkill(1221009).getEffect(player.getSkillLevel(1221009)).makeChanceResult()) {
						if (!monster.getStats().isBoss()) {
							if (totDamageToOneMonster > 0) {
								totDamageToOneMonster = 99999999;
							}
						}
					}
				}

				if (attack.skill == 1321012) { // 다크 임페일
					int y = 0;
					int z = 0;
					if (SkillFactory.getSkill(1321012).getEffect(player.getSkillLevel(1321012)).makeChanceResult()) {
						if (!monster.getStats().isBoss()) {
							if (player.getSkillLevel(1321012) > 0) {
								y = SkillFactory.getSkill(3110001).getEffect(player.getSkillLevel(1321012)).getY();
								z = SkillFactory.getSkill(3110001).getEffect(player.getSkillLevel(1321012)).getZ();
							} else if (Randomizer.nextInt(100) < y) {
								totDamageToOneMonster = 99999999;
							}
						}
					}
				}
				if (player.getSkillLevel(1310009) > 0) { // 드래곤 저지먼트
					SkillStatEffect eff = SkillFactory.getSkill(1310009).getEffect(player.getSkillLevel(1310009));
					if (eff.makeChanceResult()) {
						player.addHP((int) Math.min((totDamageToOneMonster * (eff.getX() / 100.0D)),
								player.getStat().getCurrentMaxHp() / 2)); // 체력
																			// 회복
					}
				}
				if (player.getSkillLevel(31010002) > 0) { // 앱졸브 라이프
					SkillStatEffect eff = SkillFactory.getSkill(31010002).getEffect(player.getSkillLevel(31010002));
					if (eff.makeChanceResult()) {
						if (player.exeedCount
								/ 2 > ((player.getSkillLevel(31210006) > 0 ? player.getSkillLevel(31210006) + 5 : 0)
										+ eff.getX())) {
							player.addHP((int) Math.min(
									(totDamageToOneMonster * ((((player.getSkillLevel(31210006) > 0
											? player.getSkillLevel(31210006) + 5 : 0) + eff.getX())
									- ((int) (player.exeedCount / 2))) / 100.0D)) * -1,
									player.getStat().getCurrentMaxHp() / 2)); // 체력
																				// 차감
						} else {
							player.addHP((int) Math.min(
									(totDamageToOneMonster * ((((player.getSkillLevel(31210006) > 0
											? player.getSkillLevel(31210006) + 5 : 0) + eff.getX())
									- ((int) (player.exeedCount / 2))) / 100.0D)),
									player.getStat().getCurrentMaxHp() / 2)); // 체력
																				// 회복
						}
					}
				}

				if (player.isEquilibrium()) {
					if (GameConstants.isLightSkills(attack.skill)) {
						player.addHP((int) Math.min((totDamageToOneMonster * (1 / 100.0D)),
								player.getStat().getCurrentMaxHp() / 2)); // 체력
																			// 회복
					}
				}

				if (attack.skill == 1221011 || attack.skill == 21120006) { // 생츄어리
																			// or
																			// 콤보
																			// 템페스트
					totDamageToOneMonster = (int) (monster.getStats().isBoss() ? 500000 : (monster.getHp() - 1));
				}

				if (attack.skill == 3111008) { // 애로우
					int x = SkillFactory.getSkill(3111008).getEffect(player.getSkillLevel(3111008)).getX();
					long recoverhp = (int) (player.getStat().getCurrentMaxHp() * (x / 100.0D));
					recoverhp = Math.min(recoverhp, player.getStat().getCurrentMaxHp() / 2);
					recoverhp = (int) Math.min(recoverhp, monster.getMobMaxHp());
					player.addHP(recoverhp);
				}

				if (attack.skill == 33111006) { // 클로우 컷
					int x = SkillFactory.getSkill(33111006).getEffect(player.getSkillLevel(33111006)).getX();
					long recoverhp = (long) (player.getStat().getCurrentMaxHp() * (x / 100.0D));
					recoverhp = Math.min(recoverhp, (long) (player.getStat().getCurrentMaxHp() * 0.15D));
					recoverhp = Math.min(recoverhp, monster.getMobMaxHp());
					player.addHP(recoverhp);
				}

				if (attack.skill == 5011002) { // 기간틱 백스탭
					SkillStatEffect eff = SkillFactory.getSkill(5011002).getEffect(player.getSkillLevel(5011002));
					if (eff.makeChanceResult()) {
						monsterStatusEffect = new MonsterStatusEffect(
								Collections.singletonMap(MonsterStatus.SPEED, eff.getSkillStats().getStats("z")),
								SkillFactory.getSkill(5011002), null, false);
						monster.applyStatus(player, monsterStatusEffect, false, eff.getDuration(), false);
					}
				}

				if (attack.skill == 5221016) {
					if (!monster.getStats().isBoss()) {
						if (totDamageToOneMonster > 0) {
							totDamageToOneMonster = 99999999;
						}
					}
				}

				if (player.getSkillLevel(13111006) > 0) { // 윈드 피어싱
					int x = 0;
					if (player.getSkillLevel(13110006) > 0) {
						x = SkillFactory.getSkill(13110006).getEffect(player.getSkillLevel(13110006)).getX();
					}
					long recoverhp = (long) (player.getStat().getCurrentMaxHp() * (x / 100.0D));
					recoverhp = Math.min(recoverhp, player.getStat().getCurrentMaxHp());
					recoverhp = (long) Math.min(recoverhp, monster.getMobMaxHp());
					player.addHP(recoverhp);
				}

				if (player.getBuffedValue(BuffStats.OAK_ROULETTE) != null) {
					// 오크통 룰렛 효과
					int oakid = player.getBuffedValue(BuffStats.OAK_ROULETTE).intValue();
					SkillStatEffect eff = SkillFactory.getSkill(5311004).getEffect(player.getSkillLevel(5311004));
					if (!monster.getStats().isBoss()) {
						if (oakid == 4) { // 암흑 확률 상승
							if (Randomizer.nextInt(100) < eff.getX()) {
								monsterStatusEffect = new MonsterStatusEffect(
										Collections.singletonMap(MonsterStatus.DARKNESS, 1),
										SkillFactory.getSkill(5311004), null, false);
								monster.applyStatus(player, monsterStatusEffect, false,
										eff.getSkillStats().getStats("v") * 1000 * 1000, false);
							}
						} else if (oakid == 3) { // 슬로우 확률 상승
							if (Randomizer.nextInt(100) < eff.getX()) {
								monsterStatusEffect = new MonsterStatusEffect(
										Collections.singletonMap(MonsterStatus.SPEED,
												eff.getSkillStats().getStats("u")),
										SkillFactory.getSkill(5311004), null, false);
								monster.applyStatus(player, monsterStatusEffect, false,
										eff.getSkillStats().getStats("v") * 1000, false);
							}
						} else if (oakid == 2) { // 스턴 확률 상승
							if (Randomizer.nextInt(100) < eff.getX()) {
								monsterStatusEffect = new MonsterStatusEffect(
										Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(5311004),
										null, false);
								monster.applyStatus(player, monsterStatusEffect, false,
										eff.getSkillStats().getStats("v") * 1000, false);
							}
						} else if (oakid == 1) { // 결빙 확률 상승 (20%)
							if (Randomizer.nextInt(100) < eff.getY()) {
								monsterStatusEffect = new MonsterStatusEffect(
										Collections.singletonMap(MonsterStatus.FREEZE, 1),
										SkillFactory.getSkill(5311004), null, false);
								monster.applyStatus(player, monsterStatusEffect, false,
										eff.getSkillStats().getStats("v") * 1000, false);
							}
						}
					}
				}

				if (player.getJob() == 511 || player.getJob() == 512 || player.getJob() == 1511) { // 스턴
																									// 마스터리
					if (player.getSkillLevel(5110000) > 0) {
						SkillStatEffect eff = SkillFactory.getSkill(5110000).getEffect(player.getSkillLevel(5110000));
						if (Randomizer.nextInt(100) < eff.getSkillStats().getStats("subProp")) {
							monsterStatusEffect = new MonsterStatusEffect(
									Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(5110000),
									null, false);
							monster.applyStatus(player, monsterStatusEffect, false, 3000, false);
						}
					}
					if (player.getSkillLevel(15110010) > 0) {
						SkillStatEffect eff = SkillFactory.getSkill(15110010).getEffect(player.getSkillLevel(15110010));
						if (Randomizer.nextInt(100) < eff.getSkillStats().getStats("subProp")) {
							monsterStatusEffect = new MonsterStatusEffect(
									Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(15110010),
									null, false);
							monster.applyStatus(player, monsterStatusEffect, false, 3000, false);
						}
					}
					if (player.getSkillLevel(27101101) > 0) {
						SkillStatEffect eff = SkillFactory.getSkill(27101101).getEffect(player.getSkillLevel(27101101));
						if (Randomizer.nextInt(100) < eff.getSkillStats().getStats("subProp")) {
							monsterStatusEffect = new MonsterStatusEffect(
									Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(27101101),
									null, false);
							monster.applyStatus(player, monsterStatusEffect, false, 3000, false);
						}
					}
				}

				if (player.getSkillLevel(3110001) > 0 || player.getSkillLevel(3210001) > 0
						|| player.getSkillLevel(13110009) > 0) { // 모탈 블로우
					if (!monster.getStats().isBoss()) {
						if (monster.getHp() < monster.getMobMaxHp() * 0.3D) {
							int y = 0;
							int z = 0;
							if (player.getSkillLevel(3110001) > 0) {
								y = SkillFactory.getSkill(3110001).getEffect(player.getSkillLevel(3110001)).getY();
								z = SkillFactory.getSkill(3110001).getEffect(player.getSkillLevel(3110001)).getZ();
							} else if (player.getSkillLevel(3210001) > 0) {
								y = SkillFactory.getSkill(3210001).getEffect(player.getSkillLevel(3210001)).getY();
								z = SkillFactory.getSkill(3210001).getEffect(player.getSkillLevel(3210001)).getZ();
							} else if (player.getSkillLevel(13110009) > 0) {
								y = SkillFactory.getSkill(13110009).getEffect(player.getSkillLevel(13110009)).getY();
								z = SkillFactory.getSkill(13110009).getEffect(player.getSkillLevel(13110009)).getZ();
							}
							if (Randomizer.nextInt(100) < y) { // 즉사효과 발동
								totDamageToOneMonster = 99999999;
								long recoverhp = (long) (player.getStat().getCurrentMaxHp() * (z / 100.0D));
								int recovermp = (int) (player.getStat().getCurrentMaxMp() * (z / 100.0D));
								player.addHP(recoverhp);
								player.addMP(recovermp);
							}
						}
					}
				}

				if (player.getBuffedValue(BuffStats.COMBO_DRAIN, 32101004) != null) {
					ISkill skill = SkillFactory.getSkill(32101004);
					player.addHP(Math.min(totDamage / 5,
							(totDamage * skill.getEffect(player.getSkillLevel(skill)).getX()) / 100));
				}
				if (player.getBuffedValue(BuffStats.COMBO_DRAIN, 1321054) != null) {
					ISkill skill = SkillFactory.getSkill(1321054);
					player.addHP(Math.min(totDamage / 5,
							(totDamage * skill.getEffect(player.getSkillLevel(skill)).getX()) / 100));
				}
				// effects
				switch (attack.skill) {
				case 5211006:
				case 5220011:// homing
				case 22151002: {// killer wing
					player.setLinkMid(attack.skill, monster.getObjectId());
					break;
				}
				case 4341002: {
					if (Randomizer.rand(1, 30) <= effect.getZ()) {
						totDamageToOneMonster = 99999999;
					}
					break;
				}
				case 21000004: // Combo Smash
				case 21100007: // Combo Fenrir
				case 21000002: // Double attack
				case 21100001: // Triple Attack
				case 21100002: // Pole Arm Push
				case 21100004: // Pole Arm Smash
				case 21110002: // Full Swing
				case 21110003: // Pole Arm Toss
				case 21110004: // Fenrir Phantom
				case 21110006: // Whirlwind
				case 21110007: // (hidden) Full Swing - Double Attack
				case 21110008: // (hidden) Full Swing - Triple Attack
				case 21120002: // Overswing
				case 21120005: // Pole Arm finale
				case 21120006: // Tempest
				case 21120009: // (hidden) Overswing - Double Attack
				case 21120010: // (hidden) Overswing - Triple Attack
				case 21101003: // 바디 프레셔
				{
					if (player.getBuffedValue(BuffStats.WK_CHARGE) != null) {
						ISkill skill = SkillFactory.getSkill(21101006);
						SkillStatEffect eff = skill.getEffect(player.getSkillLevel(skill));
						monster.applyStatus(player,
								new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SPEED, eff.getX()),
										skill, null, false),
								false, eff.getY() * 1000, false);
					}
					if (player.getBuffedValue(BuffStats.BODY_PRESSURE) != null) {
						ISkill skill = SkillFactory.getSkill(21101003);
						SkillStatEffect eff = skill.getEffect(player.getSkillLevel(skill));
						if (eff.makeChanceResult()) {
							monster.applyStatus(player,
									new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.NEUTRALISE, 1),
											skill, null, false),
									false, eff.getX() * 1000, false);
						}
					}
					if (player.getBuffedValue(BuffStats.COMBO_DRAIN) != null) {
						ISkill skill = SkillFactory.getSkill(21100005);
						player.addHP(Math.min(totDamage / 5,
								(totDamage * skill.getEffect(player.getSkillLevel(skill)).getX()) / 100));
					}
					if (attack.skill == 21100002) {
						SkillStatEffect effzs = SkillFactory.getSkill(21100002)
								.getEffect(player.getSkillLevel(21100002));
						if (effzs.makeChanceResult() && !monster.getStats().isBoss()) {
							monsterStatusEffect = new MonsterStatusEffect(
									Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(21100002),
									null, false);
							monster.applyStatus(player, monsterStatusEffect, false, effzs.getDuration(), false);
						}
					}
					if (attack.skill == 21120006) {
						SkillStatEffect effzs = SkillFactory.getSkill(21120006)
								.getEffect(player.getSkillLevel(21120006));
						monsterStatusEffect = new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1),
								SkillFactory.getSkill(21120006), null, false);
						monster.applyStatus(player, monsterStatusEffect, false, effzs.getDuration(), false);
					}
					break;
				}
				default: // passives attack bonuses
					if (totDamageToOneMonster > 0) {
						if (player.getBuffedValue(BuffStats.BLIND) != null) {
							if (player.getJob() >= 3311 && player.getJob() <= 3312) {
								ISkill skill = SkillFactory.getSkill(33111004);
								SkillStatEffect eff = skill.getEffect(player.getSkillLevel(33111004));
								if (eff.makeChanceResult()) {
									monsterStatusEffect = new MonsterStatusEffect(
											Collections.singletonMap(MonsterStatus.DARKNESS, eff.getX()), skill, null,
											false);
									monster.applyStatus(player, monsterStatusEffect, false, eff.getY() * 1000, false);
									MonsterStatusEffect monsterStatusEffect2 = new MonsterStatusEffect(Collections
											.singletonMap(MonsterStatus.WDEF, -eff.getSkillStats().getStats("v")),
											skill, null, false);
									monster.applyStatus(player, monsterStatusEffect2, false, eff.getY() * 1000, false);
									MonsterStatusEffect monsterStatusEffect3 = new MonsterStatusEffect(Collections
											.singletonMap(MonsterStatus.MDEF, -eff.getSkillStats().getStats("w")),
											skill, null, false);
									monster.applyStatus(player, monsterStatusEffect3, false, eff.getY() * 1000, false);
								}
							}
						} else if (player.getBuffedValue(BuffStats.HAMSTRING) != null) {
							ISkill skill = SkillFactory.getSkill(3121007);
							SkillStatEffect eff = skill.getEffect(player.getSkillLevel(skill));

							if (eff.makeChanceResult()) {
								monsterStatusEffect = new MonsterStatusEffect(
										Collections.singletonMap(MonsterStatus.SPEED, eff.getX()), skill, null, false);
								monster.applyStatus(player, monsterStatusEffect, false, eff.getY() * 1000, false);
							}
						} else if (player.getJob() == 121 || player.getJob() == 122) { // WHITEKNIGHT
							if (player.getBuffedValue(BuffStats.WK_CHARGE) != null && attack.skill == 1211002) {
								int charged = player.getBuffedSkillEffect(BuffStats.WK_CHARGE).getSourceId();
								ISkill chargedSkill = SkillFactory.getSkill(charged);
								if (chargedSkill.getEffect(player.getSkillLevel(charged)).makeChanceResult()) {
									long time = -1;
									MonsterStatusEffect mobEff = null;

									if (charged == 1201012) { // 블리자드 차지 -> 빙결
										mobEff = new MonsterStatusEffect(
												Collections.singletonMap(MonsterStatus.FREEZE, 1), chargedSkill, null,
												false);
										time = chargedSkill.getEffect(player.getSkillLevel(charged)).getY();
									}
									if (charged == 1201011) { // 플레임 차지 -> 화염
										mobEff = new MonsterStatusEffect(
												Collections.singletonMap(MonsterStatus.POISON,
														chargedSkill.getEffect(player.getSkillLevel(charged))
																.getSkillStats().getStats("dot")),
												chargedSkill, null, false);
										time = chargedSkill.getEffect(player.getSkillLevel(charged)).getSkillStats()
												.getStats("dotTime");
									}
									if (charged == 1211008) { // 라이트닝 차지 -> 기절
										mobEff = new MonsterStatusEffect(
												Collections.singletonMap(MonsterStatus.STUN, 1), chargedSkill, null,
												false);
										time = chargedSkill.getEffect(player.getSkillLevel(charged)).getY();
									}
									if (charged == 1221004) { // 디바인 차지 -> 봉인
										mobEff = new MonsterStatusEffect(
												Collections.singletonMap(MonsterStatus.SEAL, 1), chargedSkill, null,
												false);
										time = chargedSkill.getEffect(player.getSkillLevel(charged)).getY();
									}
									if (mobEff != null && !monster.getStats().isBoss()) {
										monster.applyStatus(player, mobEff, false, time, false);
									}
								}
							}

							if (attack.skill == 1211002 && player.getOriginSkillLevel(1220010) > 0
									&& !monster.getStats().isBoss()) {
								SkillStatEffect effz = SkillFactory.getSkill(1220010)
										.getEffect(player.getSkillLevel(1220010));
								if (effz.makeChanceResult()) { // 어드밴스드 차지 즉사효과
																// 발동!
									totDamageToOneMonster = 99999999;
								}
							}

						}
					}
					break;
				}
				/* 더 시드 소스 시작 */
				if ((monster.getId() == 9309044 || monster.getId() == 9309045)
						&& !player.getMap().getnewTheSidClear(2)) {
					float a = 0;
					long b = 0;
					String c = null;
					if (player.getMap().getDamage() < 5000000000L) {
						player.getMap().setDamage(false, totDamageToOneMonster);
						if (player.getMap().getDamage() >= 1000000000) {
							a = player.getMap().getDamage() / 100000000;
							b = (long) a;
							if (b > 50) {
								c = "50 억";
							} else {
								c = b + " 억";
							}
						} else if (player.getMap().getDamage() >= 100000000) {
							a = player.getMap().getDamage() / 100000000;
							b = (long) a;
							c = b + " 억";
						} else if (player.getMap().getDamage() >= 10000000) {
							a = player.getMap().getDamage() / 10000;
							b = (long) a;
							c = b + " 만";
						} else if (player.getMap().getDamage() >= 1000000) {
							a = player.getMap().getDamage() / 10000;
							b = (long) a;
							c = b + " 만";
						} else if (player.getMap().getDamage() >= 100000) {
							a = player.getMap().getDamage() / 10000;
							b = (long) a;
							c = b + " 만";
						} else if (player.getMap().getDamage() >= 10000) {
							a = player.getMap().getDamage() / 10000;
							b = (long) a;
							c = b + " 만";
						} else if (player.getMap().getDamage() >= 1000) {
							a = player.getMap().getDamage() / 1000;
							b = (long) a;
							c = b + " 천";
						} else if (player.getMap().getDamage() >= 100) {
							a = player.getMap().getDamage() / 100;
							b = (long) a;
							c = b + " 백";
						} else if (player.getMap().getDamage() >= 10) {
							a = player.getMap().getDamage() / 10;
							b = (long) a;
							c = b + " 십";
						}
						player.getMap().broadcastMessage(UIPacket.clearMidMsg());
						player.getMap().broadcastMessage(UIPacket.greenShowInfo("누적데미지 " + c + " / 50억"));
					} else {
						player.getMap().broadcastMessage(
								TheSidPacket.TheSidMessage("잠시뒤에 또다른 몬스터가 나올거야!! 긴장을 늦추지 말아줘!", 3000));
						player.getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
						player.getMap().setTheSidClear(2, true);
						player.getMap().killAllMonsters(true);
						player.getMap().startTheSid(4);
					}
				}
				/* 더 시드 소스 끝 */
				if (effect != null && effect.getMonsterStati().size() > 0) {
					if (effect.makeChanceResult()) {
						try {
							monster.applyStatus(player,
									new MonsterStatusEffect(effect.getMonsterStati(), theSkill, null, false),
									effect.isPoison(), effect.getDuration(), false);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}

				if (monster.getBuff(MonsterStatus.WEAPON_DAMAGE_REFLECT) != null) {
					player.addHP(-(7000 + Randomizer.nextInt(8000))); // this is
																		// what
																		// it
																		// seems
																		// to
																		// be?
				}

				try {
					if (mobs > 2) {
						long comboexp = (monster.getStats().getExp() / 6) * ServerConstants.defaultExpRate;
						 player.send(MainPacketCreator.multikill(mobs,
						 comboexp));
						player.gainExp(comboexp, false, false, false);
					}
					monster.damage(player, totDamageToOneMonster, true);
				} catch (Exception e) {
					if (!ServerConstants.realese) {
						e.printStackTrace();
					}
				}
			} else {
				player.send(MobPacket.killMonster(oned.objectid, 1, GameConstants.isAswanMap(player.getMapId())));
			}
		}

		if (player.getMapId() == 101050000) {
			if (attack.skill != 0) {
				player.changeMap(player.getClient().getChannelServer().getMapFactory().getMap(101050010),
						player.getClient().getChannelServer().getMapFactory().getMap(101050010).getPortalSP().get(0));
				player.Message(6, "마을에서는 스킬을 사용하시면 안됩니다");
			}
		}

		if (effect != null) {
			if (attack.skill != 0 && attack.targets > 0 && attack.skill != 4331003 && attack.skill != 4341052) {
				if (attack.skill != 31121005 && effect.getSourceId() != 31011000 && effect.getSourceId() != 31201000
						&& effect.getSourceId() != 31211000 && effect.getSourceId() != 31221000) { // 메타모포시스
																									// 재사용
																									// 방지
					effect.applyTo(player, attack.position);
				}
			}
		}
	}

	public static void applyAttackMagic(AttackInfo attack, ISkill theSkill, MapleCharacter player,
			SkillStatEffect effect) {

		MapleCharacterStat stats = player.getStat();

		Element element = player.getBuffedValue(BuffStats.ELEMENT_RESET) != null ? Element.NEUTRAL
				: theSkill.getElement();

		int fixeddmg;
		long totDamage = 0, totDamageToOneMonster = 0;
		byte overallAttackCount;
		MapleMonsterStats monsterstats;
		final ISkill eaterSkill = SkillFactory.getSkill(GameConstants.getMPEaterForJob(player.getJob()));
		final int eaterLevel = player.getSkillLevel(eaterSkill);

		MapleMap map = player.getMap();
		Integer eachd;
		int mobs = 0;

		for (final AttackPair mob : attack.allDamage) {
			MapleMonster monster = map.getMonsterByOid(mob.objectid);
			int mdmg = 0;
			monster = map.getMonsterByOid(mob.objectid);
			for (Pair<Integer, Boolean> dmg : mob.attack) {
				mdmg += dmg.left;
			}
			if (monster.getMobMaxHp() - mdmg < 0) {
				mobs++;
			}
		}

		for (AttackPair oned : attack.allDamage) {
			MapleMonster monster = map.getMonsterByOid(oned.objectid);
			if (monster != null) {
				totDamageToOneMonster = 0;
				monsterstats = monster.getStats();
				fixeddmg = monsterstats.getFixedDamage();
				overallAttackCount = 0;

				if (player.haveItem(3994514, 1, false, true) && monster.getStats() != null
						&& monster.getStats().getLevel() + 20 > player.getLevel()
						&& monster.getStats().getLevel() - 20 <= player.getLevel()) {
					player.getStat().addSaintSaver(1);
				}

				for (Pair<Integer, Boolean> eachde : oned.attack) {
					eachd = eachde.left;
					overallAttackCount++;
					if (eachd >= player.getStat().getMaxAttack() * 7.2f) {
						String name = SkillFactory.getSkillName(attack.skill);
						float multiplier = 1.0f;
						if (theSkill != null && attack.skill != 0) {
							multiplier = theSkill.getEffect(player.getSkillLevel(attack.skill)).getDamage() / 100.0f;
						}
						eachd = Randomizer.rand((int) (player.getStat().getMinAttack() * multiplier),
								(int) (player.getStat().getMaxAttack() * multiplier));
					}
					totDamageToOneMonster += eachd;
				}

				totDamage += totDamageToOneMonster;
				player.checkMonsterAggro(monster);

				if ((attack.skill == 2301002) && (!monsterstats.getUndead())) {
					return;
				}

				if (GameConstants.isLuminous(player.getJob())) {
					Integer Gauge = player.getBuffedValue(BuffStats.LUMINOUS_GAUGE);
					if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == null
							|| player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == -1) {
						if (GameConstants.isDarkSkills(attack.skill)) {
							player.getSunfireBuffedValue(20040216, attack.skill, Gauge);
						} else {
							player.getEclipseBuffedValue(20040217, attack.skill, Gauge);
						}
					} else {
						if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040216) {
							player.getSunfireBuffedValue(20040216, attack.skill, Gauge);
						} else if (player.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040217) {
							player.getEclipseBuffedValue(20040217, attack.skill, Gauge);
						}
					}
				}
				if (totDamageToOneMonster > 0) {
					if (player.getJob() == 221 || player.getJob() == 222) {
						if (player.getSkillLevel(2210000) > 0) { // 익스트림 매직 :
																	// 썬/콜
							if (attack.skill > 0) { // 평타는 효과 대상에서 제외
								final MapleMonster mob = monster;
								final SkillStatEffect eff = SkillFactory.getSkill(2210000)
										.getEffect(player.getSkillLevel(2210000));
								if (Randomizer.nextInt(100) < eff.getY()) { // y값
																			// =
																			// 즉사가
																			// 터질
																			// 확률이므로,
																			// 확률계산을
																			// 해서
																			// 확률을
																			// 통과한다면,
									if (mob.getHp() < (int) (mob.getHp() * (eff.getX() / 100.0D))) { // x값을
																										// 통해
																										// x퍼센트의
																										// 체력보다
																										// 낮은지
																										// 확인.
										if (!monster.getStats().isBoss()) { // 만약
																			// 통과한다면,
																			// 해당
																			// 몬스터는
																			// 보스가
																			// 아니어야함.
											totDamageToOneMonster = 999999999;
										}
									}
								}
							}
						}
					}

					if (player.isEquilibrium()) {
						if (GameConstants.isLightSkills(attack.skill)) {
							player.addHP((long) Math.min((totDamageToOneMonster * (1 / 100.0D)),
									player.getStat().getCurrentMaxHp() / 2)); // 체력
																				// 회복
						}
					}

					try { // 속성 효과.
						for (IItem item : player.getInventory(MapleInventoryType.EQUIPPED)) {
							Equip equip = (Equip) item;
							if (equip.getState() > 1) {
								int[] potentials = { equip.getPotential1(), equip.getPotential2(),
										equip.getPotential3(), equip.getPotential4(), equip.getPotential5() };
								ItemInformation ii = ItemInformation.getInstance();
								StructPotentialItem pot;
								for (int i : potentials) {
									if (i > 0) {
										pot = ii.getPotentialInfo(i).get(ii.getReqLevel(equip.getItemId()) / 10);
										if (pot != null && pot.prop > 0) {
											if (Randomizer.nextInt(100) <= pot.prop) {
												switch (i) {
												case 10201:
												case 20201:
													player.addHP(pot.HP);
													break;
												case 10202:
												case 20206:
													player.addMP(pot.MP);
													break;
												case 10221:
													// 시간을 잘몰라서 5초라 생각하고 구현
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.POISON,
																			(int) pot.level),
															SkillFactory.getSkill(90001003), null, false), false,
															(long) 5 * 1000, false);
													break;
												case 10226:
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.STUN,
																			(int) pot.level),
															SkillFactory.getSkill(90001001), null, false), false,
															(long) 5 * 1000, false);
													break;
												case 10231:
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.SPEED,
																			(int) pot.level),
															SkillFactory.getSkill(90001002), null, false), false,
															(long) 5 * 1000, false);
													break;
												case 10236:
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.DARKNESS,
																			(int) pot.level),
															SkillFactory.getSkill(90001004), null, false), false,
															(long) 5 * 1000, false);
													break;
												case 10241:
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.FREEZE,
																			(int) pot.level),
															SkillFactory.getSkill(90001006), null, false), false,
															(long) 5 * 1000, false);
													break;
												case 10246:
													monster.applyStatus(player,
															new MonsterStatusEffect(
																	Collections.singletonMap(MonsterStatus.SEAL,
																			(int) pot.level),
															SkillFactory.getSkill(90001005), null, false), false,
															(long) 5 * 1000, false);
													break;
												}
											}
										}
									}
								}
							}
						}

						if (player.getJob() == 222 || player.getJob() == 212 || player.getJob() == 232) { // 아케인
																											// 에임
							int[] skills = { 2120010, 2220010, 2320011 };
							for (int d : skills) {
								if (player.getSkillLevel(d) > 0) {
									if (player.getLastCombo() + 5000 < System.currentTimeMillis()) {
										player.acaneAim = 0;
										player.clearDamageMeters();
									}
									if (SkillFactory.getSkill(d).getEffect(player.getSkillLevel(d))
											.makeChanceResult()) {
										player.setLastCombo(System.currentTimeMillis());
										if (player.acaneAim < 5) {
											player.acaneAim++;
										}
										SkillFactory.getSkill(d).getEffect(player.getSkillLevel(d)).applyTo(player);
									}
								}
							}
						}

						if (GameConstants.isLuminous(player.getJob())) {
							SkillStatEffect dkeffect = player.getBuffedSkillEffect(BuffStats.DARK_CRESSENDOR, 27121005);
							if (dkeffect != null) {
								if (player.getLastCombo() + 5000 < System.currentTimeMillis()) {
									player.acaneAim = 0;
									player.clearDamageMeters();
								}

								if (dkeffect.makeChanceResult()) {
									player.setLastCombo(System.currentTimeMillis());
									if (player.acaneAim <= 29) {
										player.acaneAim++;
										dkeffect.applyTo(player);
									}
								}
							}
						}

					} catch (Exception e) {
						if (!ServerConstants.realese) {
							e.printStackTrace();
						}
					}

					if (monster.getBuff(MonsterStatus.MAGIC_DAMAGE_REFLECT) != null) {
						player.addHP(-(7000 + Randomizer.nextInt(8000))); // this
																			// is
																			// what
																			// it
																			// seems
																			// to
																			// be?
					}

					try { // 몬스터 2마리 이상 겉뎀 수정 및 멀티킬 소스.
						if (mobs > 2) {
							long comboexp = monster.getStats().getExp() / 6 * ServerConstants.defaultExpRate;
							 player.send(MainPacketCreator.multikill(mobs,
							 comboexp));
							player.gainExp(comboexp, false, false, false);
						}
						monster.damage(player, totDamageToOneMonster, true);
					} catch (Exception e) {
						if (!ServerConstants.realese) {
							e.printStackTrace();
						}
					}

					switch (attack.skill) {
					case 2221003:
						monster.setTempEffectiveness(Element.FIRE,
								theSkill.getEffect(player.getSkillLevel(theSkill)).getDuration());
						break;
					case 2121003:
						monster.setTempEffectiveness(Element.ICE,
								theSkill.getEffect(player.getSkillLevel(theSkill)).getDuration());
						break;
					}

					if ((effect != null) && (effect.getMonsterStati().size() > 0) && (effect.makeChanceResult())) {
						try {
							monster.applyStatus(player,
									new MonsterStatusEffect(effect.getMonsterStati(), theSkill, null, false),
									effect.isPoison(), effect.getDuration(), false);
						} catch (Exception e) {
							e.printStackTrace();
						}
					}

					int[] venomskills = { 4110011, 4210010, 4320005, 4120005, 4120011, 4220005, 4220011, 4340001,
							4340012, 14110004 };
					for (int i : venomskills) {
						if (i == 4110011) {
							if (player.getSkillLevel(4120011) > 0) {
								i = 4120011;
							}
						} else if (i == 4210010) {
							if (player.getSkillLevel(4220011) > 0) {
								i = 4220011;
							}
						}
						final ISkill skill = SkillFactory.getSkill(i);
						if (player.getSkillLevel(skill) > 0) {
							final SkillStatEffect venomEffect = skill.getEffect(player.getSkillLevel(skill));
							monster = map.getMonsterByOid(oned.objectid);
							if (venomEffect.makeChanceResult() && monster != null) {
								monster.applyStatus(player,
										new MonsterStatusEffect(
												Collections.singletonMap(MonsterStatus.POISON,
														venomEffect.getSkillStats().getStats("dot")),
										SkillFactory.getSkill(i), null, false), true, venomEffect.getDuration(), false);
							}
							break;
						}
					}
					int[] skills = { 4120005, 4120011, 4220005, 4220011, 4340001, 4340012 };
					for (int i : skills) {
						ISkill skill = SkillFactory.getSkill(i);
						if (player.getSkillLevel(skill) > 0) {
							SkillStatEffect venomEffect = skill.getEffect(player.getSkillLevel(skill));
							if (!venomEffect.makeChanceResult()) {
								break;
							}
							monster.applyStatus(player,
									new MonsterStatusEffect(
											Collections.singletonMap(MonsterStatus.POISON, Integer.valueOf(1)),
											SkillFactory.getSkill(i), null, false),
									true, venomEffect.getDuration(), false);
							break;
						}
					}

					/* 더 시드 소스 시작 */
					if ((monster.getId() == 9309044 || monster.getId() == 9309045)
							&& !player.getMap().getnewTheSidClear(2)) {
						float a = 0;
						long b = 0;
						String c = null;
						if (player.getMap().getDamage() < 5000000000L) {
							player.getMap().setDamage(false, totDamageToOneMonster);
							if (player.getMap().getDamage() >= 1000000000) {
								a = player.getMap().getDamage() / 100000000;
								b = (long) a;
								if (b > 50) {
									c = "50 억";
								} else {
									c = b + " 억";
								}
							} else if (player.getMap().getDamage() >= 100000000) {
								a = player.getMap().getDamage() / 100000000;
								b = (long) a;
								c = b + " 억";
							} else if (player.getMap().getDamage() >= 10000000) {
								a = player.getMap().getDamage() / 10000;
								b = (long) a;
								c = b + " 만";
							} else if (player.getMap().getDamage() >= 1000000) {
								a = player.getMap().getDamage() / 10000;
								b = (long) a;
								c = b + " 만";
							} else if (player.getMap().getDamage() >= 100000) {
								a = player.getMap().getDamage() / 10000;
								b = (long) a;
								c = b + " 만";
							} else if (player.getMap().getDamage() >= 10000) {
								a = player.getMap().getDamage() / 10000;
								b = (long) a;
								c = b + " 만";
							} else if (player.getMap().getDamage() >= 1000) {
								a = player.getMap().getDamage() / 1000;
								b = (long) a;
								c = b + " 천";
							} else if (player.getMap().getDamage() >= 100) {
								a = player.getMap().getDamage() / 100;
								b = (long) a;
								c = b + " 백";
							} else if (player.getMap().getDamage() >= 10) {
								a = player.getMap().getDamage() / 10;
								b = (long) a;
								c = b + " 십";
							}
							player.getMap().broadcastMessage(UIPacket.clearMidMsg());
							player.getMap().broadcastMessage(UIPacket.greenShowInfo("누적데미지 " + c + " / 50억"));
						} else {
							player.getMap().broadcastMessage(
									TheSidPacket.TheSidMessage("잠시뒤에 또다른 몬스터가 나올거야!! 긴장을 늦추지 말아줘!", 3000));
							player.getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
							player.getMap().setTheSidClear(2, true);
							player.getMap().killAllMonsters(true);
							player.getMap().startTheSid(4);
						}
					}
					/* 더 시드 소스 끝 */
					if (player.getBuffedValue(BuffStats.COMBO_DRAIN, 32101004) != null) { // 콤보
																							// 드레인
						ISkill skill = SkillFactory.getSkill(32101004);
						player.addHP((Math.min(totDamage / 5,
								(totDamage * skill.getEffect(player.getSkillLevel(skill)).getX()) / 100)));
					}
					if (eaterLevel > 0) {
						eaterSkill.getEffect(eaterLevel).applyPassive(player, monster);
					}
				}
			}
		}
		if (attack.skill != 2301002) {
			effect.applyTo(player);
		}

		if (player.getMapId() == 100000000) {
			if (attack.skill != 0) {
				player.changeMap(player.getClient().getChannelServer().getMapFactory().getMap(100000003),
						player.getClient().getChannelServer().getMapFactory().getMap(100000003).getPortalSP().get(0));
				player.Message(6, "마을에서는 스킬을 사용하시면 안됩니다");
			}
		}
	}

	private static void handlePickPocket(final MapleCharacter player, final MapleMonster mob, AttackPair oned) {
		ISkill skill = SkillFactory.getSkill(4211003);
		SkillStatEffect s = skill.getEffect(player.getSkillLevel(skill));
		for (final Pair<Integer, Boolean> eachde : oned.attack) {
			final Integer eachd = eachde.left;
			if (s.makeChanceResult()) {
				EtcTimer.getInstance().schedule(new Runnable() {
					@Override
					public void run() {
						player.getMap().spawnMesoDrop(1,
								new Point((int) (mob.getPosition().getX() + Randomizer.nextInt(100) - 50),
										(int) (mob.getPosition().getY())),
								mob, player, true, (byte) 0);
					}
				}, 100L);
			}
		}
	}

	public static AttackInfo parseDmgAsura(ReadingMaple rh) {
		AttackInfo ret = new AttackInfo();

		rh.skip(1);
		ret.tbyte = rh.readByte();
		ret.targets = (byte) ((ret.tbyte >>> 4) & 0xF);
		ret.hits = (byte) (ret.tbyte & 0xF);
		ret.skill = rh.readInt();

		rh.skip(7); // ORDER [4] bytes on v.79, [4] bytes on v.80, [1] byte on
					// v.82, [6] byte on 160, [7] byte on 169

		ret.display = rh.readByte(); // Always zero?
		ret.animation = rh.readByte(); // unk
		rh.skip(5); // Weapon class
		ret.speed = rh.readByte(); // Confirmed
		ret.lastAttackTickCount = 0; // Ticks

		rh.skip(8);

		ret.allDamage = new ArrayList<AttackPair>();

		int oid = 0, damage = 0;
		List<Pair<Integer, Boolean>> allDamageNumbers;

		for (int i = 0; i < ret.targets; i++) {
			oid = rh.readInt();
			rh.skip(20); // added MonsterID
			allDamageNumbers = new ArrayList<Pair<Integer, Boolean>>();

			for (int j = 0; j < ret.hits; j++) {
				damage = rh.readInt();
				allDamageNumbers.add(new Pair<Integer, Boolean>(Integer.valueOf(damage), false));
			}
			rh.skip(8); // CRC of monster [Wz Editing]
			ret.allDamage.add(new AttackPair(Integer.valueOf(oid), allDamageNumbers));
		}
		ret.position = rh.readPos();
		return ret;
	}

	public static AttackInfo parseDmgMa(ReadingMaple rh) {
		AttackInfo ret = new AttackInfo();

		rh.skip(1);
		ret.tbyte = rh.readByte();
		ret.targets = (byte) ((ret.tbyte >>> 4) & 0xF);
		ret.hits = (byte) (ret.tbyte & 0xF);
		ret.skill = rh.readInt();
		ret.skillLevel = rh.readByte();
		rh.skip(6); // SET By sch2307
		switch (ret.skill) {
		case 2121001: // Big Bang
		case 2221001:
		case 2321001:
			ret.charge = rh.readInt();
			break;
		default:
			ret.charge = -1;
			break;
		}
		ret.display = rh.readByte(); // Always zero?
		ret.animation = rh.readByte();
		rh.skip(4);
		ret.speed = rh.readByte(); // Confirmed
		rh.skip(4); // Weapon subclass
		rh.skip(5); // 0
		int oid, damage;
		List<Pair<Integer, Boolean>> allDamageNumbers;
		ret.allDamage = new ArrayList<AttackPair>();

		for (int i = 0; i < ret.targets; i++) {
			oid = rh.readInt();
			rh.skip(20);
			allDamageNumbers = new ArrayList<Pair<Integer, Boolean>>();
			for (int j = 0; j < ret.hits; j++) {
				damage = rh.readInt();
				allDamageNumbers.add(new Pair<Integer, Boolean>(Integer.valueOf(damage), false));
			}
			rh.skip(8);// CRC of monster [Wz Editing]
			ret.allDamage.add(new AttackPair(Integer.valueOf(oid), allDamageNumbers));
		}
		rh.skip(4);
		rh.skip(1);
		return ret;
	}

	public static final AttackInfo Modify_AttackCrit(final AttackInfo attack, final MapleCharacter player,
			final int type, final SkillStatEffect effect) {
		if (attack.skill != 4211006 && attack.skill != 3211003 && attack.skill != 4111004) { // blizz
																								// +
																								// shadow
																								// meso
																								// +
																								// m.e
																								// no
																								// crits
			final int CriticalRate = player.getStat().passive_sharpeye_rate() + (effect == null ? 0 : effect.getCr());
			final boolean shadow = player.getBuffedValue(BuffStats.SHADOWPARTNER) != null && (type == 1 || type == 2);
			final List<Integer> damages = new ArrayList<Integer>(), damage = new ArrayList<Integer>();
			int hit, toCrit, mid_att;
			boolean isCritical = false;
			for (AttackPair p : attack.allDamage) {
				if (p.attack != null) {
					hit = 0;
					mid_att = shadow ? (p.attack.size() / 2) : p.attack.size();
					// grab the highest hits
					toCrit = attack.skill == 4221016 || attack.skill == 3221007 || attack.skill == 23121003
							|| attack.skill == 4331006 || attack.skill == 21120005 ? mid_att : 0;
					if (toCrit == 0) {
						for (Pair<Integer, Boolean> eachd : p.attack) {
							if (!eachd.right && hit < mid_att) {
								if (eachd.left > 999999 || Randomizer.nextInt(100) < CriticalRate) {
									toCrit++;
									isCritical = true;
								}
								damage.add(eachd.left);
							}
							hit++;
						}
						if (toCrit == 0) {
							damage.clear();
							continue; // no crits here
						}
						Collections.sort(damage); // least to greatest
						for (int i = damage.size(); i > damage.size() - toCrit; i--) {
							damages.add(damage.get(i - 1));
						}
						damage.clear();
					}
					hit = 0;
					for (Pair<Integer, Boolean> eachd : p.attack) {
						if (!eachd.right) {
							if (attack.skill == 4221016) { // assassinate never
															// crit first 3,
															// always crit last
								eachd.right = hit == 3;
							} else if (attack.skill == 3221007 || attack.skill == 23121003 || attack.skill == 21120005
									|| attack.skill == 4331006 || attack.skill == 5221016 || eachd.left > 999999) { // snipe
																													// always
																													// crit
								eachd.right = true;
							} else if (hit >= mid_att) { // shadowpartner copies
															// second half to
															// first half
								eachd.right = p.attack.get(hit - mid_att).right;
							} else {
								// rough calculation
								eachd.right = damages.contains(eachd.left);
							}
							if (eachd.right) {
								isCritical = true;
							}
						}
						hit++;
					}
					damages.clear();
				}
			}
			if (isCritical) {
				if (player.getJob() == 422 && player.dualBrid == 0 && player.acaneAim < 5) {
					player.send(MainPacketCreator.OnOffFlipTheCoin(true));
					player.acaneAim++;
					player.dualBrid = 1;
				}
			}
		}
		return attack;
	}

	public static AttackInfo parseDmgOrb(ReadingMaple lea) {
		AttackInfo ret = new AttackInfo();
		lea.skip(13);
		ret.tbyte = lea.readByte();
		ret.targets = (byte) ((ret.tbyte >>> 4) & 0xF);
		ret.hits = (byte) (ret.tbyte & 0xF);
		ret.skill = lea.readInt();
		ret.skillLevel = lea.readByte();
		lea.skip(7);
		ret.display = lea.readByte();
		ret.animation = lea.readByte();
		lea.skip(5);
		ret.speed = lea.readByte(); // Confirmed
		ret.lastAttackTickCount = lea.readInt(); // Ticks
		ret.csstar = (byte) lea.readInt();
		ret.slot = (byte) lea.readInt();
		int damage, oid;
		List<Pair<Integer, Boolean>> allDamageNumbers;
		ret.allDamage = new ArrayList<AttackPair>();

		for (int i = 0; i < ret.targets; i++) {
			oid = lea.readInt();
			lea.skip(20); // added MonsterID
			allDamageNumbers = new ArrayList<Pair<Integer, Boolean>>();
			for (int j = 0; j < ret.hits; j++) {
				damage = lea.readInt();
				allDamageNumbers.add(new Pair<Integer, Boolean>(Integer.valueOf(damage), false));
			}
			lea.skip(4);
			lea.skip(4);
			ret.allDamage.add(new AttackPair(Integer.valueOf(oid), allDamageNumbers));
		}
		ret.position = lea.readPos();
		return ret;
	}

	public static AttackInfo parseDmgM(ReadingMaple lea, boolean after, boolean touchAttack) {
		AttackInfo ret = new AttackInfo();
		int type = lea.readByte();
		ret.tbyte = lea.readByte();
		ret.targets = (byte) ((ret.tbyte >>> 4) & 0xF);
		ret.hits = (byte) (ret.tbyte & 0xF);
		ret.skill = lea.readInt();
		ret.skillLevel = lea.readByte();
		lea.skip(7); // SET By sch2307
		switch (ret.skill) {
		case 5201002: // Gernard
		case 5101012:
		case 15101010:
		case 14111006: // Poison bomb
		case 4341002:
		case 4341003:
		case 5301001:
		case 5300007:
		case 24121000: // 얼티밋 드라이브
		case 24121005: // 템페스트 오브 카드
		case 25111005:
		case 25121030:
		case 27101202: // 보이드 프레셔
		case 27111100: // 스펙트럴 라이트
		case 14111023:
		case 27121201: // 모닝 스타폴
		case 27120211:
		case 31001000: // 데빌 사이더
		case 31101000: // 소울 이터
		case 31111005: // 데모닉 브레스
		case 32121003: // 싸이클론
		case 61111100: // 윙비트
		case 65121003: // 소울 레조넌스
		case 65121052: // 슈퍼 노바
		case 2221012:
		case 31201001:
		case 31211001:
		case 36101001:
		case 36121000:
		case 4221052:
		case 2221052:
		case 11121052:
		case 5101014:
		case 5121013:
		case 1311011:
		case 101110101:
		case 12121054:
		case 101110102:
		case 101110104:
		case 101120200:
		case 14111022:
		case 11121055:
		case 14101021:
			ret.charge = lea.readInt();
			break;
		default:
			ret.charge = 0;
			break;
		}
		if (after) {
			lea.skip(4);
		}
		if ((ret.skill == 14000028) || (ret.skill == 14000029) || (ret.skill == 11121055) || (ret.skill == 14111022)
				|| (ret.skill == 14121004) || (ret.skill == 14111023) || (ret.skill == 14121052)) {
			lea.skip(4);
		}
		if (ret.skill == 101000102) {
			lea.skip(1);
		}
		ret.display = lea.readByte(); // Always zero?
		ret.animation = lea.readByte(); // unk
		if (touchAttack) {// 바디프레셔, 텔마 등
			lea.skip(4);
		} else {
			lea.skip(5); // Weapon class
		}
		ret.speed = lea.readByte(); // Confirmed
		ret.lastAttackTickCount = 0; // Ticks
		lea.skip(8);
		if (ret.skill == 4210014) {
			lea.skip(4);
		}
		if (!touchAttack && ret.skill != 4210014 && ret.skill != 11121055) {
			lea.skip(4);
		}
		if (ret.skill == 14000028 || ret.skill == 14000029 || ret.skill == 14111022 || ret.skill == 14111023
				|| ret.skill == 14121004 || ret.skill == 14121052) {
			lea.skip(2);
		}
		if (ret.skill == 14101021) {
			lea.skip(1);
		}
		if (GameConstants.isABYTE(ret.skill / 10000)) {
			lea.skip(1);
		}
		ret.allDamage = new ArrayList<AttackPair>();
		int oid, damage;
		List<Pair<Integer, Boolean>> allDamageNumbers;

		for (int i = 0; i < ret.targets; i++) {
			oid = lea.readInt();
			lea.skip(20); // added MonsterID
			allDamageNumbers = new ArrayList<Pair<Integer, Boolean>>();

			for (int j = 0; j < ret.hits; j++) {
				damage = lea.readInt();
				allDamageNumbers.add(new Pair<Integer, Boolean>(Integer.valueOf(damage), false));
			}
			lea.skip(8); // CRC of monster [Wz Editing]
			ret.allDamage.add(new AttackPair(Integer.valueOf(oid), allDamageNumbers));
		}
		ret.position = lea.readPos();
		return ret;
	}

	public static AttackInfo parseDmgR(MapleCharacter chr, ReadingMaple lea) {
		AttackInfo ret = new AttackInfo();

		lea.skip(2); // 1.2.201+
		ret.tbyte = lea.readByte();
		ret.targets = (byte) ((ret.tbyte >>> 4) & 0xF);
		ret.hits = (byte) (ret.tbyte & 0xF);
		ret.skill = lea.readInt();
		ret.skillLevel = lea.readByte();
		lea.skip(7); // SET By sch2307
		switch (ret.skill) {
		case 3101008:
		case 3111013:
		case 3120019:
		case 3121004:
		case 3121020:
		case 3221001:
		case 4341052:
		case 5220023:
		case 5221004:
		case 5221022:
		case 5310011:
		case 5311002:
		case 5311010:
		case 13111002:
		case 13111020:
		case 13121001:
		case 23121000:
		case 33121009:
		case 35001001:
		case 35101009:
		case 60011216:
		case 14001020:
		case 14101020:
		case 14101021:
		case 14111022:
		case 14111023:
		case 14111020:
		case 14111021:
		case 14121001:
		case 14121002:
		case 14121003:
			lea.skip(4); // extra 4 bytesra 4 bytes
			break;
		}

		ret.charge = -1;
		ret.unk = lea.readByte();
		ret.display = lea.readByte();
		ret.animation = lea.readByte();
		lea.skip(5);
		if ((ret.skill == 5221022) || (ret.skill == 5220023)) {
			lea.readInt();
			lea.readInt();
		}
		if ((ret.skill == 5310011) || (ret.skill == 5311010)) {
			lea.readInt();
		}
		if ((ret.skill == 101000202) || (ret.skill == 101100202) || (ret.skill == 101120200)
				|| (ret.skill == 101110204)) {
			lea.readByte();
		}
		if (ret.skill == 23111001 || ret.skill == 36111010) {
			lea.readInt();
			lea.readInt();
			lea.readInt();
		}
		if (ret.skill == 3111013 || ret.skill == 95001000) {
			lea.readInt();
			lea.readInt();
		}
		ret.speed = lea.readByte(); // Confirmed
		ret.lastAttackTickCount = lea.readInt(); // Ticks
		ret.csstar = (byte) lea.readInt();
		ret.slot = (byte) lea.readInt();
		ret.AOE = lea.readByte();
		int damage, oid;
		List<Pair<Integer, Boolean>> allDamageNumbers;
		ret.allDamage = new ArrayList<AttackPair>();

		for (int i = 0; i < ret.targets; i++) {
			oid = lea.readInt();
			lea.skip(20); // added MonsterID

			allDamageNumbers = new ArrayList<Pair<Integer, Boolean>>();
			for (int j = 0; j < ret.hits; j++) {
				damage = lea.readInt();
				allDamageNumbers.add(new Pair<Integer, Boolean>(Integer.valueOf(damage), false));
			}
			lea.skip(8);
			ret.allDamage.add(new AttackPair(Integer.valueOf(oid), allDamageNumbers));
		}
		ret.position = lea.readPos();
		if (ret.skill == 13111020) {
			lea.skip(4);
		}
		return ret;
	}
}
