/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.life;

import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ScheduledFuture;

import client.stats.DiseaseStats;
import client.stats.BuffStats;
import client.MapleCharacter;
import client.MapleClient;
import client.skills.SkillFactory;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import constants.GameConstants;
import constants.ServerConstants;
import client.items.*;
import launch.ChannelServer;
import community.MapleParty;
import community.MaplePartyCharacter;
import java.awt.Rectangle;
import launch.world.WorldCommunity;
import scripting.EventInstanceManager;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;
import tools.Pair;
import packet.creators.MainPacketCreator;
import packet.creators.MobPacket;
import packet.creators.UIPacket;
import server.items.ItemInformation;
import server.maps.MapleMapObject;
import tools.RandomStream.Randomizer;
import tools.Timer;
import tools.Timer.BuffTimer;
import tools.Timer.ShowTimer;

public class MapleMonster extends AbstractLoadedMapleLife {

	private MapleMonsterStats stats;
	private OverrideMonsterStats ostats = null;
	private int mp;
	private long hp, finalmaxhp;
	private boolean bossreal;
	private byte venom_counter;
	private MapleMap map;
	private MapleMonster sponge;
	private int stolen = -1; // monster can only be stolen ONCE
	private int linkoid = 0, lastNode = -1, linkCID = 0; // Just a reference for
															// monster EXP
															// distribution
															// after dead
	private MapleCharacter highestDamageChar = null;
	private WeakReference<MapleCharacter> controller = new WeakReference<MapleCharacter>(null);
	private boolean fake, dropsDisabled, controllerHasAggro, controllerKnowsAboutAggro, statChanged;
	private final Collection<AttackerEntry> attackers = new LinkedList<AttackerEntry>();
	private EventInstanceManager eventInstance;
	private MonsterListener listener = null;
	private final Map<MonsterStatus, MonsterStatusEffect> stati = new LinkedHashMap<MonsterStatus, MonsterStatusEffect>();
	private Map<Integer, Long> usedSkills;
	private List<Integer> reflections = new LinkedList<Integer>();
	private int elitetype = 0x70; // 기본값
	private boolean elitemonster;
	private boolean eliteboss;
	private int EliteHP;
	private int EliteMHP;
	private int EBID;
	private int bossnew;
	private int width, height;
	private transient ScheduledFuture<?> PoisonTime = null;

	public MapleMonster(final int id, final MapleMonsterStats stats) {
		super(id);
		initWithStats(stats);
	}

	public MapleMonster(final MapleMonster monster) {
		super(monster);
		initWithStats(monster.stats);
	}

	private final void initWithStats(final MapleMonsterStats stats) {
		setStance(5);
		this.stats = stats;
		hp = stats.getHp();
		finalmaxhp = stats.getFinalMaxHP();
		mp = stats.getMp();
		venom_counter = 0;
		fake = false;
		dropsDisabled = false;

		if (stats.getNoSkills() > 0) {
			usedSkills = new HashMap<Integer, Long>();
		}
	}

	public final MapleMonsterStats getStats() {
		return stats;
	}

	public final void disableDrops() {
		this.dropsDisabled = true;
	}

	public final boolean dropsDisabled() {
		return dropsDisabled;

	}

	public final void setStatChanged(boolean d) {
		this.statChanged = d;
	}

	public final boolean isStatChanged() {
		return statChanged;
	}

	public final void setSponge(final MapleMonster mob) {
		sponge = mob;
	}

	public final void setMap(final MapleMap map) {
		this.map = map;
	}

	public final long getHp() {
		return hp;
	}

	public final void setHp(long hp) {
		this.hp = hp;
	}

	public final long getMobMaxHp() {
		if (ostats != null) {
			return ostats.getHp();
		}
		return stats.getHp();
	}

	public final boolean isFinalBoss() {
		return finalmaxhp > 0;
	}

	public final long getFinalMaxHP() {
		if (ostats != null) {
			return ostats.getHp();
		}
		return finalmaxhp;
	}

	public final void setFinalMaxHP(long fmhp) {
		this.finalmaxhp = fmhp;
	}

	public final long getMobFinalMaxHP() {
		if (ostats != null) {
			return ostats.getHp();
		}
		return stats.getFinalMaxHP();
	}

	public final int getMp() {
		return mp;
	}

	public final void setMp(int mp) {
		if (mp < 0) {
			mp = 0;
		}
		this.mp = mp;
	}

	public final int getMobMaxMp() {
		if (ostats != null) {
			return ostats.getMp();
		}
		return stats.getMp();
	}

	public final int getMobExp() {
		if (ostats != null) {
			return ostats.getExp();
		}
		return stats.getExp();
	}

	public final void setOverrideStats(final OverrideMonsterStats ostats) {
		this.ostats = ostats;
		this.hp = ostats.getHp();
		this.mp = ostats.getMp();
	}

	public final MapleMonster getSponge() {
		return sponge;
	}

	public final byte getVenomMulti() {
		return venom_counter;
	}

	public final void setVenomMulti(final byte venom_counter) {
		this.venom_counter = venom_counter;
	}

	public final int getComboExp(int i) {
		if (i >= 999) {
			return 10;
		} else if (i >= 400 && i <= 998) {
			return 8;
		} else if (i >= 200 && i <= 399) {
			return 5;
		} else if (i >= 100 && i <= 199) {
			return 3;
		} else if (i >= 50 && i <= 99) {
			return 2;
		} else if (i >= 2 && i <= 49) {
			return 1;
		} else {
			return 0;
		}
	}

	public final void damage(final MapleCharacter from, long damage, final boolean updateAttackTime) {
		if (damage <= 0 || !isAlive()) {
			return;
		}
		AttackerEntry attacker = null;

		if (from.getParty() != null) {
			attacker = new PartyAttackerEntry(from.getParty().getId(), from.getClient().getChannelServer());
		} else {
			attacker = new SingleAttackerEntry(from, from.getClient().getChannelServer());
		}
		boolean replaced = false;
		for (final AttackerEntry aentry : attackers) {
			if (aentry.equals(attacker)) {
				attacker = aentry;
				replaced = true;
				break;
			}
		}
		if (!replaced) {
			attackers.add(attacker);
		}
		if (map.getChannel() == 1 || map.getChannel() == 10 || map.getChannel() == 11 || map.getChannel() == 12
				|| map.getChannel() == 13 || map.getChannel() == 14 || map.getChannel() == 15 || map.getChannel() == 16
				|| map.getChannel() == 17 || map.getChannel() == 18 || map.getChannel() == 19) { // buffed
																									// channel
			damage = damage / 10;
		}
		long rDamage = Math.max(0, Math.min(damage, hp));
		attacker.addDamage(from, rDamage, updateAttackTime);
		// map.broadcastMessage(, packet, repeatToSource);
		if (stats.getSelfD() != -1) {
			hp -= rDamage;
			if (hp > 0) {
				if (hp < stats.getSelfDHp()) { // HP is below the selfd level
					map.killMonster(this, from, false, false, stats.getSelfD());
				} else { // Show HP
					if (stats.isInvincible()) {
						for (final AttackerEntry mattacker : attackers) {
							for (final AttackingMapleCharacter cattacker : mattacker.getAttackers()) {
								if (cattacker.getAttacker().getMap() == from.getMap()) { // current
																							// attacker
																							// is
																							// on
																							// the
																							// map
																							// of
																							// the
																							// monster
									if (cattacker.getLastAttackTime() >= System.currentTimeMillis() - 4000) {
										cattacker.getAttacker().getClient().getSession().write(MobPacket.showMonsterHP(
												getObjectId(), (int) Math.ceil((hp * 100.0) / getMobMaxHp())));
									}
								}
							}
						}
					}
				}
			} else { // Character killed it without explosing :(
				map.killMonster(this, from, true, false, (byte) 1);

			}
		} else {
			if (sponge != null) {
				if (sponge.hp > 0) { // If it's still alive, dont want
										// double/triple rewards
					// Sponge are always in the same map, so we can use this.map
					// The only mob that uses sponge are PB/HT
					sponge.hp -= rDamage;

					if (sponge.hp <= 0) {
						map.killMonster(sponge, from, true, false, (byte) 1);

					} else {
						map.broadcastMessage(MobPacket.showBossHP(sponge));
					}
				}
			}
			if (hp > 0) {
				hp -= rDamage;
				if (this.getMobMaxHp() > 1000000000) {
					for (MapleCharacter d : map.getCharacters()) {
						d.send(UIPacket.detailShowInfo("HP: " + hp + " /" + this.getMobMaxHp(), false));
					}
				}
				// System.out.println("i hate programming " + hp + "/" +
				// this.getMobMaxHp());
				switch (stats.getHPDisplayType()) {
				case 0:
					// send boss hp here
					map.broadcastMessage(MobPacket.showBossHP(this), this.getPosition());
					// ((MapleCharacter) map.getAllPlayer())
					// .send(UIPacket.detailShowInfo("HP: " + hp + " /" +
					// this.getMobMaxHp(), false));
					System.out.println(hp + "/" + this.getMobMaxHp());
					break;
				case 1:
					map.broadcastMessage(MobPacket.damageFriendlyMob(this, damage), this.getPosition());
					break;
				case 2:
					map.broadcastMessage(
							MobPacket.showMonsterHP(getObjectId(), (int) Math.ceil((hp * 100.0) / getMobMaxHp())));
					from.mulung_EnergyModify(true);
					break;
				case 3:
					for (final AttackerEntry mattacker : attackers) {
						for (final AttackingMapleCharacter cattacker : mattacker.getAttackers()) {
							if (cattacker.getAttacker().getMap() == from.getMap()) { // current
																						// attacker
																						// is
																						// on
																						// the
																						// map
																						// of
																						// the
																						// monster
								if (cattacker.getLastAttackTime() >= System.currentTimeMillis() - 4000) {
									cattacker.getAttacker().getClient().getSession().write(MobPacket.showMonsterHP(
											getObjectId(), (int) Math.ceil((hp * 100.0) / getMobMaxHp())));
								}
							}
						}
					}
					break;
				}

				// ((MapleCharacter) map.getAllPlayer())
				// .send(UIPacket.detailShowInfo("HP: " + hp + " /" +
				// this.getMobMaxHp(), false));
				// System.out.println(hp + "/" + this.getMobMaxHp());
				if (hp <= 0) {
					map.killMonster(this, from, true, false, (byte) 1);
				}
			}
		}
	}

	public final void changeableMob(MapleCharacter chr) {
		if (getStats().isChangeableMob()) {
			double rate = chr.getLevel() / (double) getStats().getLevel();
			if (chr.getLevel() >= 150) {
				rate = rate * rate;
			}
			getStats().setHp((int) (getStats().getHp() * rate));
			setHp((int) (getHp() * rate));
			getStats().setMp((int) (getStats().getMp() * rate));
			setMp((int) (getMp() * rate));
			getStats().setPad((int) (getStats().getPad() * rate));
			getStats().setMad((int) (getStats().getMad() * rate));
			getStats().setPhysicalDefense((short) (getStats().getPhysicalDefense() * rate));
			getStats().setMagicDefense((short) (getStats().getMagicDefense() * rate));
			getStats().setAcc((int) (getStats().getAcc() * rate));
			getStats().setEva((short) (getStats().getEva() + chr.getLevel() / 2));
			getStats().setPushed((int) (getStats().getPushed() * rate));
			getStats().setLevel(chr.getLevel());
			setStatChanged(true);
		}
	}

	public final void heal(final long hp, final int mp, final boolean broadcast) {
		final long TotalHP = getHp() + hp;
		final int TotalMP = getMp() + mp;

		if (TotalHP >= getMobMaxHp()) {
			setHp(getMobMaxHp());
		} else {
			setHp(TotalHP);
		}
		if (TotalMP >= getMp()) {
			setMp(getMp());
		} else {
			setMp(TotalMP);
		}
		if (broadcast) {
			map.broadcastMessage(MobPacket.healMonster(getObjectId(), (int) hp));
		} else if (sponge != null) { // else if, since only sponge doesn't
										// broadcast
			sponge.hp += hp;
		}
	}

	private final void giveExpToCharacter(final MapleCharacter attacker, int exp, final boolean highestDamage,
			final int numExpSharers, final byte pty, final byte Class_Bonus_EXP_PERCENT) {
		if (highestDamage) {
			if (eventInstance != null) {
				eventInstance.monsterKilled(attacker, this);
			} else {
				final EventInstanceManager em = attacker.getEventInstance();
				if (em != null) {
					em.monsterKilled(attacker, this);
				}
			}
			highestDamageChar = attacker;
		}
		if (exp > 0) {
			int originExp = exp;
			final MonsterStatusEffect ms = stati.get(MonsterStatus.SHOWDOWN);
			if (ms != null) {
				exp += (int) (originExp * (ms.getStati().get(MonsterStatus.SHOWDOWN) / 100.0D));
			}
			final Integer holySymbol = attacker.getBuffedValue(BuffStats.HOLY_SYMBOL);
			if (holySymbol != null) {
				exp += (int) (originExp * (holySymbol.doubleValue() / 100.0D));
			}
			int Class_Bonus_EXP = 0;
			if (Class_Bonus_EXP_PERCENT > 0) {
				Class_Bonus_EXP = (int) ((float) (originExp / 100) * Class_Bonus_EXP_PERCENT);
			}
			if (attacker.hasDisease(DiseaseStats.CURSE)) {
				exp /= 2;
			}
			if (map.getChannel() == 1 || map.getChannel() == 10 || map.getChannel() == 11 || map.getChannel() == 12
					|| map.getChannel() == 13 || map.getChannel() == 14 || map.getChannel() == 15 || map.getChannel() == 16
					|| map.getChannel() == 17 || map.getChannel() == 18 || map.getChannel() == 19) { // buffed
																										// channel
				exp *= 10;
			}
			attacker.gainExpMonster(exp, true, highestDamage, pty, Class_Bonus_EXP);
		}
		attacker.mobKilled(getId());
	}

	public final MapleCharacter killBy(final MapleCharacter killer) {
		int totalBaseExp = (int) (Math.min(Integer.MAX_VALUE,
				(getMobExp()/* * (killer.getLevel() <= 10 ? 1 : exp) */)));
		AttackerEntry highest = null;
		long highdamage = 0;
		/**
		 * @author Daniel Random Maple Points system
		 */
		double random = Math.random() * 3 + 1;
		int amount = 3;
		double random2 = Math.random() * 6 + 1;
		amount *= (int) random2 * getStats().getLevel() / 10;
		if ((int) random == 2) {		
			killer.modifyCSPoints(2, amount, true);
			killer.send(UIPacket.detailShowInfo("Gained " + amount + " Maple Points", false));
			if (map.getChannel() == 1 || map.getChannel() == 10 || map.getChannel() == 11 || map.getChannel() == 12
					|| map.getChannel() == 13 || map.getChannel() == 14 || map.getChannel() == 15 || map.getChannel() == 16
					|| map.getChannel() == 17 || map.getChannel() == 18 || map.getChannel() == 19) { // buffed
					double randomB = Math.random() * getStats().getLevel() + 1;	// channel
					int finale = (int) randomB;
				killer.send(UIPacket.detailShowInfo("[Buffed channel bonus]: " + finale + " Maple Points", false));
				killer.modifyCSPoints(2, finale, true);
			}
		}
		/**
		 * End of Maple Points system
		 */
		for (final AttackerEntry attackEntry : attackers) {
			if (attackEntry.getDamage() > highdamage) {
				highest = attackEntry;
				highdamage = attackEntry.getDamage();
			}
		}
		int baseExp;
		for (final AttackerEntry attackEntry : attackers) {
			baseExp = (int) Math.ceil(totalBaseExp * ((double) attackEntry.getDamage() / getMobMaxHp()));
			attackEntry.killedMob(killer.getMap(), baseExp, attackEntry == highest);
		}
		final MapleCharacter controll = controller.get();
		if (controll != null) { // this can/should only happen when a hidden gm
								// attacks the monster
			controll.getClient().getSession().write(
					MobPacket.stopControllingMonster(getObjectId(), GameConstants.isAswanMap(killer.getMapId())));
			controll.stopControllingMonster(this);
		}

		spawnRevives(killer.getMap());
		if (eventInstance != null) {
			eventInstance.unregisterMonster(this);
			eventInstance = null;
		}
		sponge = null;

		if (listener != null) {
			listener.monsterKilled();
		}

		final MapleCharacter ret = highestDamageChar;
		highestDamageChar = null; // may not keep hard references to chars
									// outside of PlayerStorage or MapleMap
		return ret;
	}

	public int getLinkOid() {
		return linkoid;
	}

	public void setLinkOid(int lo) {
		this.linkoid = lo;
	}

	public final void spawnRevives(final MapleMap map) {
		final List<Integer> toSpawn = stats.getRevives();

		if (toSpawn == null) {
			return;
		}
		MapleMonster spongy = null;
		switch (getId()) {
		case 8820002:
		case 8820003:
		case 8820004:
		case 8820005:
		case 8820006:
		case 8820102:
		case 8820103:
		case 8820104:
		case 8820105:
		case 8820106:
		case 8840000:
		case 6160003:
		case 8850011:
			break;
		case 8810118:
		case 8810119:
		case 8810120:
		case 8810121: // must update sponges
			for (final int i : toSpawn) {
				final MapleMonster mob = MapleLifeProvider.getMonster(i);

				mob.setPosition(getPosition());
				if (eventInstance != null) {
					eventInstance.registerMonster(mob);
				}
				if (dropsDisabled()) {
					mob.disableDrops();
				}
				switch (mob.getId()) {
				case 8810119:
				case 8810120:
				case 8810121:
				case 8810122:
					spongy = mob;
					break;
				}
			}
			if (spongy != null && map.getMonsterById(spongy.getId()) == null) {
				map.spawnMonster(spongy, -2);
				for (MapleMapObject mon : map.getAllMonster()) {
					MapleMonster mons = (MapleMonster) mon;
					if (mons.getObjectId() != spongy.getObjectId()
							&& (mons.getSponge() == this || mons.getLinkOid() == this.getObjectId())) { // sponge
																										// was
																										// this,
																										// please
																										// update
						mons.setSponge(spongy);
					}
				}
			}
			break;
		case 8810026:
		case 8810130:
		case 8820008:
		case 8820009:
		case 8820010:
		case 8820011:
		case 8820012:
		case 8820013:
		case 8820108:
		case 8820109:
		case 8820110:
		case 8820111:
		case 8820112:
		case 8820113: {
			final List<MapleMonster> mobs = new ArrayList<MapleMonster>();

			for (final int i : toSpawn) {
				final MapleMonster mob = MapleLifeProvider.getMonster(i);

				mob.setPosition(getPosition());
				if (eventInstance != null) {
					eventInstance.registerMonster(mob);
				}
				if (dropsDisabled()) {
					mob.disableDrops();
				}
				switch (mob.getId()) {
				case 8810018: // Horntail Sponge
				case 8810118:
				case 8820009: // PinkBeanSponge0
				case 8820010: // PinkBeanSponge1
				case 8820011: // PinkBeanSponge2
				case 8820012: // PinkBeanSponge3
				case 8820013: // PinkBeanSponge4
				case 8820014: // PinkBeanSponge5
				case 8820109: // PinkBeanSponge0
				case 8820110: // PinkBeanSponge1
				case 8820111: // PinkBeanSponge2
				case 8820112: // PinkBeanSponge3
				case 8820113: // PinkBeanSponge4
				case 8820114: // PinkBeanSponge5
					spongy = mob;
					break;
				default:
					mobs.add(mob);
					break;
				}
			}
			if (spongy != null && map.getMonsterById(spongy.getId()) == null) {
				map.spawnMonster(spongy, -2);

				for (final MapleMonster i : mobs) {
					map.spawnMonster(i, -2);
					i.setSponge(spongy);
				}
			}
			break;
		}
		case 8820014:
		case 8820114: {
			for (final int i : toSpawn) {
				final MapleMonster mob = MapleLifeProvider.getMonster(i);

				if (eventInstance != null) {
					eventInstance.registerMonster(mob);
				}
				mob.setPosition(getPosition());
				if (dropsDisabled()) {
					mob.disableDrops();
				}
				map.spawnMonster(mob, -2);
			}
			break;
		}
		default: {
			for (final int i : toSpawn) {
				final MapleMonster mob = MapleLifeProvider.getMonster(i);

				if (eventInstance != null) {
					eventInstance.registerMonster(mob);
				}
				mob.setPosition(getPosition());
				if (dropsDisabled()) {
					mob.disableDrops();
				}
				map.spawnRevives(mob, this.getObjectId());

				if (mob.getId() == 9300216) {
					map.broadcastMessage(MainPacketCreator.environmentChange("Dojang/clear", 5));
					map.broadcastMessage(MainPacketCreator.environmentChange("dojang/end/clear", 12));
				}
			}
			break;
		}
		}
	}

	public final boolean isAlive() {
		return hp > 0 || finalmaxhp > 0;
	}

	public final MapleCharacter getController() {
		return controller.get();
	}

	public final void setController(final MapleCharacter controller) {
		this.controller = new WeakReference<MapleCharacter>(controller);
	}

	public final void switchController(final MapleCharacter newController, final boolean immediateAggro) {
		final MapleCharacter controllers = getController();
		if ((controllers == newController) && (!this.elitemonster)) {
			return;
		} else if ((controllers != null) && (!this.elitemonster)) {
			controllers.stopControllingMonster(this);
			controllers.getClient().getSession().write(MobPacket.stopControllingMonster(getObjectId(),
					GameConstants.isAswanMap(newController.getMapId())));
		}
		if (this.elitemonster) {
			newController.controlEliteMonster(this, true);
		} else {
			newController.controlMonster(this, getId() != 8220028 ? immediateAggro : false, -1, 0);
		}
		setController(newController);
		if (immediateAggro && getId() != 8220028) {
			setControllerHasAggro(true);
		}
		setControllerKnowsAboutAggro(false);
	}

	public final void addListener(final MonsterListener listener) {
		this.listener = listener;
	}

	public final boolean isControllerHasAggro() {
		return controllerHasAggro;
	}

	public final void setControllerHasAggro(final boolean controllerHasAggro) {
		this.controllerHasAggro = controllerHasAggro;
	}

	public final boolean isControllerKnowsAboutAggro() {
		return controllerKnowsAboutAggro;
	}

	public final void setControllerKnowsAboutAggro(final boolean controllerKnowsAboutAggro) {
		this.controllerKnowsAboutAggro = controllerKnowsAboutAggro;
	}

	@Override
	public final void sendSpawnData(final MapleClient client) {
		if (!isAlive()) {
			return;
		}
		if (client == null) {
			return;
		}
		if (client.getPlayer() == null) {
			return;
		}
		if (this == null) {
			return;
		}
		if (this.isEliteMonster()) {
			client.getSession().write(MobPacket.spawnEliteMonster(this, -1, false, false, false));
		} else {
			client.getSession().write(MobPacket.spawnMonster(this, -1, fake ? 0xfc : 0, 0,
					GameConstants.isAswanMap(client.getPlayer().getMapId())));
		}
	}

	@Override
	public final void sendDestroyData(final MapleClient client) {
		client.getSession().write(
				MobPacket.killMonster(getObjectId(), 0, GameConstants.isAswanMap(client.getPlayer().getMapId())));
	}

	@Override
	public final String toString() {
		final StringBuilder sb = new StringBuilder();

		sb.append(stats.getName());
		sb.append("(");
		sb.append(getId());
		sb.append(") HP: ");
		sb.append(stats.getFinalMaxHP() > 0 ? finalmaxhp : getHp());
		sb.append("/ ");
		sb.append(stats.getFinalMaxHP() > 0 ? stats.getFinalMaxHP() : getMobMaxHp());
		sb.append(",MP : ");
		sb.append(getMp());
		sb.append("/ ");
		sb.append(getMobMaxMp());
		sb.append(" (살아있음: ");
		sb.append(isAlive());
		sb.append(" 오브젝트id: ");
		sb.append(getObjectId());
		sb.append(") || 컨트롤러 이름 : ");
		final MapleCharacter chr = controller.get();
		sb.append(chr != null ? chr.getName() : "없음");
		sb.append(" FinalMaxHP 여부: ");
		sb.append(isFinalBoss() ? "예" : "아니오");

		return sb.toString();
	}

	@Override
	public final MapleMapObjectType getType() {
		return MapleMapObjectType.MONSTER;
	}

	public final EventInstanceManager getEventInstance() {
		return eventInstance;
	}

	public final void setEventInstance(final EventInstanceManager eventInstance) {
		this.eventInstance = eventInstance;
	}

	public final int getStatusSourceID(final MonsterStatus status) {
		final MonsterStatusEffect effect = stati.get(status);
		if (effect != null) {
			return effect.getSkill().getId();
		}
		return -1;
	}

	public final ElementalEffectiveness getEffectiveness(final Element e) {
		if (stati.size() > 0 && stati.get(MonsterStatus.DOOM) != null) {
			return ElementalEffectiveness.NORMAL; // like blue snails
		}
		return stats.getEffectiveness(e);
	}

	public final void applyStatus(final MapleCharacter from, final MonsterStatusEffect status, final boolean poison,
			final long duration, final boolean venom) {
		if (!isAlive()) {
			return;
		}

		switch (stats.getEffectiveness(status.getSkill().getElement())) {
		case IMMUNE:
		case STRONG:
			return;
		case NORMAL:
		case WEAK:
			break;
		default:
			return;
		}
		// compos don't have an elemental (they have 2 - so we have to hack
		// here...)
		final int statusSkill = status.getSkill().getId();
		switch (statusSkill) {
		case 2111006: { // FP compo
			switch (stats.getEffectiveness(Element.POISON)) {
			case IMMUNE:
			case STRONG:
				return;
			}
			break;
		}
		case 2211006: { // IL compo
			switch (stats.getEffectiveness(Element.ICE)) {
			case IMMUNE:
			case STRONG:
				return;
			}
			break;
		}
		case 4110011:
		case 4120005:
		case 4220005:
		case 14110004: {
			switch (stats.getEffectiveness(Element.POISON)) {
			case WEAK:
				return;
			}
			break;
		}
		}
		final Map<MonsterStatus, Integer> statis = status.getStati();
		if (stats.isBoss()) {
			if (!(statis.containsKey(MonsterStatus.SPEED) && statis.containsKey(MonsterStatus.NINJA_AMBUSH)
					&& statis.containsKey(MonsterStatus.WATK))) {
				return;
			}
		}
		for (MonsterStatus stat : statis.keySet()) {
			final MonsterStatusEffect oldEffect = stati.get(stat);
			if (oldEffect != null) {
				oldEffect.removeActiveStatus(stat);
				if (oldEffect.getStati().size() == 0) {
					oldEffect.cancelTask();
					oldEffect.cancelPoisonSchedule();
				}
			}
		}
		final BuffTimer BuffTimer = Timer.BuffTimer.getInstance();
		final Runnable cancelTask = new Runnable() {

			@Override
			public final void run() {
				if (isAlive()) {
					map.broadcastMessage(MobPacket.cancelMonsterStatus(getObjectId(), statis), getPosition());
					if (getController() != null && !getController().isMapObjectVisible(MapleMonster.this)) {
						getController().getClient().getSession()
								.write(MobPacket.cancelMonsterStatus(getObjectId(), statis));
					}
					for (final MonsterStatus stat : statis.keySet()) {
						stati.remove(stat);
					}
					setVenomMulti((byte) 0);
				}
				status.cancelPoisonSchedule();
			}
		};
		int poisonDamage = 0;
		if (statis.get(MonsterStatus.POISON) != null) {
			poisonDamage = venom ? statis.get(MonsterStatus.POISON)
					: (int) (from.getStat().getMaxAttack() * (statis.get(MonsterStatus.POISON) / 100.0D));
		}
		if ((poison) && (getHp() > 1)) {
			status.setValue(MonsterStatus.FREEZE, Integer.valueOf(poisonDamage));
			status.setPoisonSchedule(
					BuffTimer.register(new PoisonTask(poisonDamage, from, status, cancelTask, false), 1000, 1000),
					poisonDamage);
		} else if ((poison) && (getHp() <= 1)) { // 모험가 개편 이후, HP 1 이하 몹은 얼도록
													// 설정.
			status.setValue(MonsterStatus.FREEZE, 1);
		} else if (venom) {
			status.setValue(MonsterStatus.POISON, Integer.valueOf(poisonDamage));
			status.setPoisonSchedule(BuffTimer.getInstance()
					.register(new PoisonTask(poisonDamage, from, status, cancelTask, false), 1000, 1000), poisonDamage);
		} else if (statusSkill == 2121006 || statusSkill == 4111003) { // 페럴
																		// 라이즈,
																		// 쉐도우
																		// 웹.
			status.setPoisonSchedule(BuffTimer.getInstance()
					.schedule(new PoisonTask(poisonDamage, from, status, cancelTask, true), 3500), poisonDamage);
		}
		for (final MonsterStatus stat : statis.keySet()) {
			stati.put(stat, status);
		}

		for (Entry<MonsterStatus, Integer> e : status.getStati().entrySet()) {
			Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
			MonsterStatusEffect eff = new MonsterStatusEffect(p, status.getSkill(), status.getMobSkill(),
					status.isMonsterSkill());
			eff.setOwnerId(from.getId());
			if ((poison && getHp() > 1) || venom) { // 모험가 개편 이후, HP 1 이하 몹은 얼도록
													// 설정.
				stati.put(MonsterStatus.POISON, eff);
				map.broadcastMessage(MobPacket.applyPoison(getObjectId(), eff.getOwnerId(), status.getSkill().getId(),
						poisonDamage, 20), getPosition());
			} else {
				map.broadcastMessage(MobPacket.applyMonsterStatus(getObjectId(), eff), getPosition());
			}
		}

		if (getController() != null && !getController().isMapObjectVisible(this)) {
			for (MonsterStatusEffect mse : stati.values()) {
				for (Entry<MonsterStatus, Integer> e : mse.getStati().entrySet()) {
					Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
					MonsterStatusEffect eff = new MonsterStatusEffect(p, status.getSkill(), status.getMobSkill(),
							status.isMonsterSkill());
					getController().getClient().getSession().write(MobPacket.applyMonsterStatus(getObjectId(), eff));
				}
			}
		}
		ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelTask, duration);
		status.setCancelTask(schedule);
	}

	public final void cancelStatus(final MonsterStatus stat) {
		if (stat == MonsterStatus.SUMMON) {
			return;
		}
		final MonsterStatusEffect mse = stati.get(stat);
		if (mse == null || !isAlive()) {
			return;
		}
		mse.cancelPoisonSchedule();
		final MapleCharacter con = getController();
		if (con != null) {
			map.broadcastMessage(con, MobPacket.cancelMonsterStatus(getObjectId(), stat), getPosition());
			con.getClient().getSession().write(MobPacket.cancelMonsterStatus(getObjectId(), stat));
		} else {
			map.broadcastMessage(MobPacket.cancelMonsterStatus(getObjectId(), stat));
		}
		stati.remove(stat);
	}

	public final void cancelSingleStatus(final MonsterStatusEffect stat) {
		if (stat == null || stat.getStati().containsKey(MonsterStatus.SUMMON) || !isAlive()) {
			return;
		}
		if (!stat.getStati().containsKey(MonsterStatus.POISON)
				&& !stat.getStati().containsKey(MonsterStatus.VENOMOUS_WEAPON)) {
			for (Object ms : stat.getStati().keySet()) {
				cancelStatus((MonsterStatus) ms);
			}
			return;
		}
		stat.cancelPoisonSchedule();
		final MapleCharacter con = getController();
		if (con != null) {
			map.broadcastMessage(con, MobPacket.cancelPoison(this.getObjectId(), stat), getPosition());
			con.getClient().getSession().write(MobPacket.cancelPoison(this.getObjectId(), stat));
		} else {
			map.broadcastMessage(MobPacket.cancelPoison(this.getObjectId(), stat), getPosition());
		}
	}

	public final void applyMonsterBuff(final Map<MonsterStatus, Integer> stats, final int x, final int skillId,
			final long duration, final MobSkill skill, final List<Integer> reflection) {
		BuffTimer BuffTimer = Timer.BuffTimer.getInstance();
		final Runnable cancelTask = new Runnable() {

			@Override
			public final void run() {
				if (isAlive()) {
					map.broadcastMessage(MobPacket.cancelMonsterStatus(getObjectId(), stats), getPosition());
					if (getController() != null && !getController().isMapObjectVisible(MapleMonster.this)) {
						getController().getClient().getSession()
								.write(MobPacket.cancelMonsterStatus(getObjectId(), stats));
					}
					for (final MonsterStatus stat : stats.keySet()) {
						stati.remove(stat);
					}
					reflections.clear();
				}
			}
		};
		final MonsterStatusEffect effect = new MonsterStatusEffect(stats, null, skill, true);
		for (final MonsterStatus stat : stats.keySet()) {
			stati.put(stat, effect);
		}
		if (reflection.size() > 0) {
			for (Entry<MonsterStatus, Integer> e : effect.getStati().entrySet()) {
				Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
				MonsterStatusEffect eff = new MonsterStatusEffect(p, effect.getSkill(), effect.getMobSkill(),
						effect.isMonsterSkill());

			}
			if (getController() != null && !getController().isMapObjectVisible(this)) {
				for (Entry<MonsterStatus, Integer> e : effect.getStati().entrySet()) {
					Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
					MonsterStatusEffect eff = new MonsterStatusEffect(p, effect.getSkill(), effect.getMobSkill(),
							effect.isMonsterSkill());
					getController().getClient().getSession()
							.write(MobPacket.applyMonsterStatus(getObjectId(), eff, reflection));
				}
			}
			reflections = reflection;
		} else {
			for (Entry<MonsterStatus, Integer> e : effect.getStati().entrySet()) {
				Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
				MonsterStatusEffect eff = new MonsterStatusEffect(p, effect.getSkill(), effect.getMobSkill(),
						effect.isMonsterSkill());
				map.broadcastMessage(MobPacket.applyMonsterStatus(getObjectId(), eff), getPosition());
			}
			if (getController() != null && !getController().isMapObjectVisible(this)) {
				for (Entry<MonsterStatus, Integer> e : effect.getStati().entrySet()) {
					Map<MonsterStatus, Integer> p = Collections.singletonMap(e.getKey(), e.getValue());
					MonsterStatusEffect eff = new MonsterStatusEffect(p, effect.getSkill(), effect.getMobSkill(),
							effect.isMonsterSkill());
					getController().getClient().getSession().write(MobPacket.applyMonsterStatus(getObjectId(), eff));
				}
			}
		}
		BuffTimer.schedule(cancelTask, duration);
	}

	public final void setTempEffectiveness(final Element e, final long milli) {
		stats.setEffectiveness(e, ElementalEffectiveness.WEAK);
		BuffTimer.getInstance().schedule(new Runnable() {

			public void run() {
				stats.removeEffectiveness(e);
			}
		}, milli);
	}

	public final boolean isBuffed(final MonsterStatus status) {
		return stati.containsKey(status);
	}

	public final void setFake(final boolean fake) {
		this.fake = fake;
	}

	public final boolean isFake() {
		return fake;
	}

	public final MapleMap getMap() {
		return map;
	}

	public final Rectangle getRectangle() {
		return new Rectangle(getPosition().x, getPosition().y, getStats().getWidth(), getStats().getHeight());
	}

	public final List<Pair<Integer, Integer>> getSkills() {
		return stats.getSkills();
	}

	public final boolean hasSkill(final int skillId, final int level) {
		return stats.hasSkill(skillId, level);
	}

	public final long getLastSkillUsed(final int skillId) {
		if (usedSkills.containsKey(skillId)) {
			return usedSkills.get(skillId);
		}
		return 0;
	}

	public final void setLastSkillUsed(final int skillId, final long now, final long cooltime) {
		switch (skillId) {
		case 140:
			usedSkills.put(skillId, now + (cooltime * 2));
			usedSkills.put(141, now);
			break;
		case 141:
			usedSkills.put(skillId, now + (cooltime * 2));
			usedSkills.put(140, now + cooltime);
			break;
		default:
			usedSkills.put(skillId, now + cooltime);
			break;
		}
	}

	public final byte getNoSkills() {
		return stats.getNoSkills();
	}

	public final boolean isFirstAttack() {
		return stats.isFirstAttack();
	}

	public final int getBuffToGive() {
		return stats.getBuffToGive();
	}

	public final MonsterStatusEffect getBuff(final MonsterStatus status) {
		if (!stati.containsKey(status)) {
			return null;
		}
		return stati.get(status);
	}

	public final int getStolen() {
		return stolen;
	}

	public final void setStolen(final int s) {
		this.stolen = s;
	}

	public final void handleSteal(MapleCharacter chr) {
		double showdown = 100.0;
		final MonsterStatusEffect mse = getBuff(MonsterStatus.SHOWDOWN);
		if (mse != null) {
			showdown += 1;
		}

		ISkill steal = SkillFactory.getSkill(4201004);
		final int level = chr.getSkillLevel(steal),
				chServerrate = ChannelServer.getInstance(chr.getClient().getChannel()).getDropRate();
		if (level > 0 && !getStats().isBoss() && stolen == -1 && steal.getEffect(level).makeChanceResult()) {
			final MapleMonsterProvider mi = MapleMonsterProvider.getInstance();
			final List<MonsterDropEntry> de = mi.retrieveDrop(getId());
			if (de == null) {
				stolen = 0;
				return;
			}
			final List<MonsterDropEntry> dropEntry = new ArrayList<MonsterDropEntry>(de);
			Collections.shuffle(dropEntry);
			IItem idrop;
			for (MonsterDropEntry d : dropEntry) { // set to 4x rate atm, 40%
													// chance + 10x
				if (d.itemId > 0 && d.questid == 0 && d.itemId / 10000 != 238
						&& Randomizer.nextInt(999999) < (int) (10 * d.chance * chServerrate)) { // kinda
																								// op
					if (GameConstants.getInventoryType(d.itemId) == MapleInventoryType.EQUIP) {
						Equip eq = (Equip) ItemInformation.getInstance().getEquipById(d.itemId);
						idrop = ItemInformation.getInstance().randomizeStats(eq, false);
					} else {
						idrop = new Item(d.itemId, (byte) 0,
								(short) (d.Maximum != 1 ? Randomizer.nextInt(d.Maximum - d.Minimum) + d.Minimum : 1),
								(byte) 0);
						idrop.setGMLog(chr.getName() + "가 스틸로 인한 아이템 훔치기로 얻은 아이템");
					}
					stolen = d.itemId;
					map.spawnMobDrop(idrop, map.calcDropPos(getPosition(), getPosition()), this, chr, (byte) 0,
							(short) 0);
					break;
				}
			}
		} else {
			stolen = 0; // failed once, may not go again
		}
	}

	public final int getEliteType() {
		return elitetype;
	}

	public final void setEliteType(int type) {
		this.elitetype = type;
	}

	public final boolean isEliteMonster() {
		return this.elitemonster;
	}

	public final void setEliteMonster(boolean a) {
		this.elitemonster = a;
	}

	public final void setEliteBoss(boolean a) {
		this.eliteboss = a;
	}

	public final boolean isEliteBoss() {
		return this.eliteboss;
	}

	public final int EliteHP() {
		return this.EliteHP;
	}

	public final void setEliteHP(int a) {
		this.EliteHP = a;
	}

	public final int EliteMHP() {
		return this.EliteMHP;
	}

	public final void setEliteMHP(int a) {
		this.EliteMHP = a;
	}

	public int EBID() {
		return this.EBID;
	}

	public void SetEBID(int a) {
		this.EBID = a;
	}

	private final class PoisonTask implements Runnable {

		private final int poisonDamage;
		private final MapleCharacter chr;
		private final MonsterStatusEffect status;
		private final Runnable cancelTask;
		private final boolean shadowWeb;
		private final MapleMap map;

		private PoisonTask(final int poisonDamage, final MapleCharacter chr, final MonsterStatusEffect status,
				final Runnable cancelTask, final boolean shadowWeb) {
			this.poisonDamage = poisonDamage;
			this.chr = chr;
			this.status = status;
			this.cancelTask = cancelTask;
			this.shadowWeb = shadowWeb;
			this.map = chr.getMap();
		}

		@Override
		public void run() {
			long damage = poisonDamage;
			if (!shadowWeb && hp <= 1) { // 포이즌 미스트 개편, HP가 1 미만인 몹은 얼도록 설정.
				applyStatus(chr, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1),
						SkillFactory.getSkill(2111003), null, false), false, (long) 8 * 1000, false);
			}
			if (damage >= hp) { // 데미지가 몹의 HP 보다 클 경우.
				damage = (long) (hp - 1);
				if (!shadowWeb) {
					cancelTask.run();
					status.cancelTask();
				}
			}
			if (hp > 1 && damage > 0) { // 몹의 HP가 1보다 클 때까지만 데미지.
				damage(chr, damage, false);
				if (shadowWeb) {
					map.broadcastMessage(MobPacket.damageMonster(getObjectId(), damage), getPosition());
				}
			}
		}
	}

	private class AttackingMapleCharacter {

		private MapleCharacter attacker;
		private long lastAttackTime;

		public AttackingMapleCharacter(final MapleCharacter attacker, final long lastAttackTime) {
			super();
			this.attacker = attacker;
			this.lastAttackTime = lastAttackTime;
		}

		public final long getLastAttackTime() {
			return lastAttackTime;
		}

		public final void setLastAttackTime(final long lastAttackTime) {
			this.lastAttackTime = lastAttackTime;
		}

		public final MapleCharacter getAttacker() {
			return attacker;
		}
	}

	private interface AttackerEntry {

		List<AttackingMapleCharacter> getAttackers();

		public void addDamage(MapleCharacter from, long damage, boolean updateAttackTime);

		public long getDamage();

		public boolean contains(MapleCharacter chr);

		public void killedMob(MapleMap map, int baseExp, boolean mostDamage);
	}

	private final class SingleAttackerEntry implements AttackerEntry {

		private int damage;
		private int chrid;
		private long lastAttackTime;
		private ChannelServer cserv;

		public SingleAttackerEntry(final MapleCharacter from, final ChannelServer cserv) {
			this.chrid = from.getId();
			this.cserv = cserv;
		}

		@Override
		public void addDamage(final MapleCharacter from, final long damage, final boolean updateAttackTime) {
			if (chrid == from.getId()) {
				this.damage += damage;
				if (updateAttackTime) {
					lastAttackTime = System.currentTimeMillis();
				}
			}
		}

		@Override
		public final List<AttackingMapleCharacter> getAttackers() {
			final MapleCharacter chr = cserv.getPlayerStorage().getCharacterById(chrid);
			if (chr != null) {
				return Collections.singletonList(new AttackingMapleCharacter(chr, lastAttackTime));
			} else {
				return Collections.emptyList();
			}
		}

		@Override
		public boolean contains(final MapleCharacter chr) {
			return chrid == chr.getId();
		}

		@Override
		public long getDamage() {
			return damage;
		}

		@Override
		public void killedMob(final MapleMap map, final int baseExp, final boolean mostDamage) {
			final MapleCharacter chr = cserv.getPlayerStorage().getCharacterById(chrid);
			if (chr != null && chr.getMap() == map && chr.isAlive()) {
				if (getStats().getCharismaEXP() > 0) {
					chr.addCharisma(getStats().getCharismaEXP());
				}
				if (getStats().getWP() > 0 && GameConstants.isZero(chr.getJob())) {
					chr.addWP(chr.getWP());
				}
				giveExpToCharacter(chr, baseExp, mostDamage, 1, (byte) 0, (byte) 0);
			}
		}

		@Override
		public int hashCode() {
			return chrid;
		}

		@Override
		public final boolean equals(Object obj) {
			if (this == obj) {
				return true;
			}
			if (obj == null) {
				return false;
			}
			if (getClass() != obj.getClass()) {
				return false;
			}
			final SingleAttackerEntry other = (SingleAttackerEntry) obj;
			return chrid == other.chrid;
		}
	}

	private static final class ExpMap {

		public final int exp;
		public final byte ptysize;
		public final byte Class_Bonus_EXP;

		public ExpMap(final int exp, final byte ptysize, final byte Class_Bonus_EXP) {
			super();
			this.exp = exp;
			this.ptysize = ptysize;
			this.Class_Bonus_EXP = Class_Bonus_EXP;
		}
	}

	private static final class OnePartyAttacker {

		public MapleParty lastKnownParty;
		public long damage;
		public long lastAttackTime;

		public OnePartyAttacker(final MapleParty lastKnownParty, final long damage) {
			super();
			this.lastKnownParty = lastKnownParty;
			this.damage = damage;
			this.lastAttackTime = System.currentTimeMillis();
		}
	}

	private class PartyAttackerEntry implements AttackerEntry {

		private long totDamage;
		private final Map<Integer, OnePartyAttacker> attackers = new HashMap<Integer, OnePartyAttacker>(6);
		private int partyid;
		private ChannelServer cserv;

		public PartyAttackerEntry(final int partyid, final ChannelServer cserv) {
			this.partyid = partyid;
			this.cserv = cserv;
		}

		public List<AttackingMapleCharacter> getAttackers() {
			final List<AttackingMapleCharacter> ret = new ArrayList<AttackingMapleCharacter>(attackers.size());
			for (final Entry<Integer, OnePartyAttacker> entry : attackers.entrySet()) {
				final MapleCharacter chr = cserv.getPlayerStorage().getCharacterById(entry.getKey());
				if (chr != null) {
					ret.add(new AttackingMapleCharacter(chr, entry.getValue().lastAttackTime));
				}
			}
			return ret;
		}

		private final Map<MapleCharacter, OnePartyAttacker> resolveAttackers() {
			final Map<MapleCharacter, OnePartyAttacker> ret = new HashMap<MapleCharacter, OnePartyAttacker>(
					attackers.size());
			for (final Entry<Integer, OnePartyAttacker> aentry : attackers.entrySet()) {
				final MapleCharacter chr = cserv.getPlayerStorage().getCharacterById(aentry.getKey());
				if (chr != null) {
					ret.put(chr, aentry.getValue());
				}
			}
			return ret;
		}

		@Override
		public final boolean contains(final MapleCharacter chr) {
			return attackers.containsKey(chr.getId());
		}

		@Override
		public final long getDamage() {
			return totDamage;
		}

		public void addDamage(final MapleCharacter from, final long damage, final boolean updateAttackTime) {
			final OnePartyAttacker oldPartyAttacker = attackers.get(from.getId());
			if (oldPartyAttacker != null) {
				oldPartyAttacker.damage += damage;
				oldPartyAttacker.lastKnownParty = from.getParty();
				if (updateAttackTime) {
					oldPartyAttacker.lastAttackTime = System.currentTimeMillis();
				}
			} else {
				// TODO actually this causes wrong behaviour when the party
				// changes between attacks
				// only the last setup will get exp - but otherwise we'd have to
				// store the full party
				// constellation for every attack/everytime it changes, might be
				// wanted/needed in the
				// future but not now
				final OnePartyAttacker onePartyAttacker = new OnePartyAttacker(from.getParty(), damage);
				attackers.put(from.getId(), onePartyAttacker);
				if (!updateAttackTime) {
					onePartyAttacker.lastAttackTime = 0;
				}
			}
			totDamage += damage;
		}

		@Override
		public final void killedMob(final MapleMap map, final int baseExp, final boolean mostDamage) {
			MapleCharacter pchr, highest = null;
			long iDamage, highestDamage = 0;
			int iexp;
			MapleParty party;
			double averagePartyLevel, expWeight, levelMod, innerBaseExp, expFraction;
			List<MapleCharacter> expApplicable;
			final Map<MapleCharacter, ExpMap> expMap = new HashMap<MapleCharacter, ExpMap>(6);
			byte Class_Bonus_EXP;

			for (final Entry<MapleCharacter, OnePartyAttacker> attacker : resolveAttackers().entrySet()) {
				party = attacker.getValue().lastKnownParty;
				averagePartyLevel = 0;

				Class_Bonus_EXP = 0;
				expApplicable = new ArrayList<MapleCharacter>();
				for (final MaplePartyCharacter partychar : party.getMembers()) {
					if (attacker.getKey().getLevel() - partychar.getLevel() <= 5
							|| stats.getLevel() - partychar.getLevel() <= 5) {
						pchr = cserv.getPlayerStorage().getCharacterByName(partychar.getName());
						if (pchr != null) {
							if (pchr.isAlive() && pchr.getMap() == map) {
								expApplicable.add(pchr);
								averagePartyLevel += pchr.getLevel();
							}
						}
					}
				}
				if (expApplicable.size() > 1) {
					averagePartyLevel /= expApplicable.size();
				}
				iDamage = attacker.getValue().damage;
				if (iDamage > highestDamage) {
					highest = attacker.getKey();
					highestDamage = iDamage;
				}
				innerBaseExp = baseExp * ((double) iDamage / totDamage);
				expFraction = innerBaseExp / (expApplicable.size() + 1);

				for (final MapleCharacter expReceiver : expApplicable) {
					iexp = expMap.get(expReceiver) == null ? 0 : expMap.get(expReceiver).exp;
					expWeight = (expReceiver == attacker.getKey() ? 2.0 : 0.7);
					levelMod = expReceiver.getLevel() / averagePartyLevel;
					if (levelMod > 1.0 || attackers.containsKey(expReceiver.getId())) {
						levelMod = 1.0;
					}
					iexp += (int) Math.round(expFraction * expWeight * levelMod);
					expMap.put(expReceiver, new ExpMap(iexp, (byte) expApplicable.size(), Class_Bonus_EXP));
				}
			}
			ExpMap expmap;
			for (final Entry<MapleCharacter, ExpMap> expReceiver : expMap.entrySet()) {
				expmap = expReceiver.getValue();
				if (getStats().getCharismaEXP() > 0) {
					expReceiver.getKey().addCharisma(getStats().getCharismaEXP());
				}
				giveExpToCharacter(expReceiver.getKey(), expmap.exp,
						mostDamage ? expReceiver.getKey() == highest : false, expMap.size(), expmap.ptysize,
						expmap.Class_Bonus_EXP);
			}
		}

		@Override
		public final int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + partyid;
			return result;
		}

		@Override
		public final boolean equals(Object obj) {
			if (this == obj) {
				return true;
			}
			if (obj == null) {
				return false;
			}
			if (getClass() != obj.getClass()) {
				return false;
			}
			final PartyAttackerEntry other = (PartyAttackerEntry) obj;
			if (partyid != other.partyid) {
				return false;
			}
			return true;
		}
	}

}
