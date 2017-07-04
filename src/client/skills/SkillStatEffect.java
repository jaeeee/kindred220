package client.skills;

import client.MapleClient;
import constants.ServerConstants;
import constants.GameConstants;
import client.MapleCharacter;
import client.MapleCharacterStat;
import client.items.*;
import client.stats.*;
import launch.ChannelServer;
import launch.holder.MapleCoolDownValueHolder;
import packet.creators.MainPacketCreator;
import packet.creators.MobPacket;

import packet.transfer.read.ReadingMaple;
import provider.MapleData;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.life.MapleMonster;
import server.maps.*;
import server.quest.MapleQuest;
import tools.ArrayMap;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer.BuffTimer;
import tools.Triple;
import java.awt.Point;
import java.awt.Rectangle;
import java.lang.ref.WeakReference;
import java.util.*;
import java.util.concurrent.ScheduledFuture;
import handler.channel.MapleMechDoor;
import handler.channel.PlayerHandler;
import java.io.File;
import packet.creators.SoulWeaponPacket;
import packet.skills.AngelicBusterSkill;
import packet.skills.KaiserSkill;
import packet.skills.MechanicSkill;
import packet.skills.AdventurerSkill;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;

public class SkillStatEffect {

	private int sourceid;
	private boolean overTime, skill, absstats = true;
	private List<Triple<BuffStats, Integer, Boolean>> statups;
	private Map<MonsterStatus, Integer> monsterStatus;
	private Point lt, rb;
	private SkillStats effects;
	private List<DiseaseStats> cureDebuffs;
	private int statusTime = 0;
	private int stackskill;
	private byte level;
	private int x;
	private double hpR;
	private double mpR;
	private int mhpX = 0;
	private int mhpR = 0;
	private int lv2mhp = 0;
	private int mmpX = 0;
	private int mmpR = 0;
	private int lv2mmp = 0;

	public static final SkillStatEffect loadItemEffectFromData(final MapleData source, final int itemid) {
		return loadFromData(source, itemid, false, false, 0);
	}

	public static final SkillStatEffect loadSkillEffectFromData(final MapleData source, final int skillid,
			final boolean overtime) {
		return loadFromData(source, skillid, true, overtime, 1);
	}

	public static final SkillStatEffect loadSkillEffectFromData(final MapleData source, final int skillid,
			final boolean overtime, final int level) {
		return loadFromData(source, skillid, true, overtime, level);
	}

	private static final void addBuffStatPairToListIfNotZero(final List<Triple<BuffStats, Integer, Boolean>> list,
			final BuffStats buffstat, final Integer val, boolean overlap) {
		if (val.intValue() != 0) {
			boolean isExist = false;
			for (Triple<BuffStats, Integer, Boolean> stats : list) {
				if (stats.getFirst() == buffstat) {
					isExist = true;
				}
			}
			if (!isExist) {
				list.add(new Triple<BuffStats, Integer, Boolean>(buffstat, val, overlap));
			}
		}
	}

	private static SkillStatEffect loadFromData(final MapleData source, final int sourceid, final boolean skill,
			final boolean overTime, final int level) {
		final SkillStatEffect ret = new SkillStatEffect();
		ret.effects = new SkillStats(level);
		for (MapleData d : source.getChildren()) {
			try {
				if (!d.getName().equals("hs")) {
					if (!d.getName().equals("lt")) {
						if (!d.getName().equals("rb")) {
							if (!d.getName().equals("lt2")) {
								if (!d.getName().equals("rb2")) {
									if (!d.getName().equals("hit")) {
										if (!d.getName().equals("ball")) {
											if (!d.getName().equals("keydown")) {
												if (!d.getName().equals("action")) {
													if (!d.getData().toString().contains("Point")) {
														if (!d.getData().toString().contains("y")) { // Fixed
																										// by
																										// ŷ��.
															if (sourceid == 2321001) {
																ret.effects.setStats(d.getName(),
																		String.valueOf(d.getData()), true);
															} else {
																ret.effects.setStats(d.getName(),
																		String.valueOf(d.getData()), false);
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			} catch (Exception e) {
				if (!ServerConstants.realese) {
					System.out.println("[���] ��ų�� �ε��� �߸��� ���� ���ԵǾ����ϴ�. : " + sourceid + " : " + d.getName());
				}
			}
		}
		if (skill) {
			switch (sourceid) {
			case 1100002:
			case 1100003:
			case 1200002:
			case 1200003:
			case 1300002:
			case 1300003:
			case 3100001:
			case 3200001:
			case 11101002:
			case 13101002:

			case 2111007: // �ڷ���Ʈ �����͸�
			case 2211007: // �ڷ���Ʈ �����͸�
			case 2311007: // �ڷ���Ʈ �����͸�
			case 32111010: // �ڷ���Ʈ �����͸�
			case 2201009:
			case 33100009: // ���̳� ����
			case 22150004: // �巡�� ����ŷ
			case 22181004: // ���н��� ����
			case 1120013: // ���꽺�� ���̳� ����
			case 3120008: // ���꽺�� ���̳� ����
			case 23100006: // ���̳� ���� : ��󺸿��
			case 23120012: // ���꽺�� ���̳� ����
			case 24100003: // ��� ī��Ʈ
			case 31220007:
				ret.effects.setStats("mobCount", 6);
				break;
			case 35121005: // ��Ż�Ƹ� : �̻��� ��ũ
			case 35111004: // ��Ż�Ƹ� : ��� �ӽŰ�
			case 35121013: // ��Ż�Ƹ� : ��� �ӽŰ�
			case 35121054: // ��Ż�Ƹ� : ȣ����
				ret.effects.setStats("attackCount", 6);
				ret.effects.setStats("bulletCount", 6);
				break;
			case 32121003:
			case 4341004:
			case 1311014:
				ret.effects.setStats("mobCount", 10);
			}
			if (GameConstants.isNoDelaySkill(sourceid)) {
				ret.effects.setStats("mobCount", 6);
			}
		}
		ret.sourceid = sourceid;
		ret.skill = skill;
		ret.mhpR = ret.effects.getStats("mhpR");
		if (ret.mhpR > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		ret.mhpX = ret.effects.getStats("mhpX");
		if (ret.mhpX > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		ret.lv2mhp = ret.effects.getStats("lv2mhp");
		if (ret.lv2mhp > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		ret.mmpR = ret.effects.getStats("mmpR");
		if (ret.mmpR > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		ret.mmpX = ret.effects.getStats("mmpX");
		if (ret.mmpX > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		ret.lv2mmp = ret.effects.getStats("lv2mmp");
		if (ret.lv2mmp > 0) {
			if (!ServerConstants.hp_skillid_dummy.contains(String.valueOf(ret.sourceid)))
				ServerConstants.hp_skillid_dummy = ServerConstants.hp_skillid_dummy + ret.sourceid + ",";
		}
		if ((!ret.skill && ret.effects.getStats("time") > -1) || (sourceid >= 2022125 && sourceid <= 2022129)) {
			ret.overTime = true;
		} else {
			if (ret.effects.getStats("time") < 2100000000) {
				ret.effects.setStats("time", ret.effects.getStats("time") * 1000); // milliseconds
																					// ���·�
																					// ����
			}
			ret.overTime = overTime || ret.isMorph() || ret.isPirateMorph() || ret.isFinalAttack()
					|| ret.isInflation()/* || ret.isAngel() */;
		}
		final ArrayList<Triple<BuffStats, Integer, Boolean>> statups = new ArrayList<Triple<BuffStats, Integer, Boolean>>();

		List<DiseaseStats> cure = new ArrayList<DiseaseStats>(5);
		if (ret.effects.getStats("poison") > 0) {
			cure.add(DiseaseStats.POISON);
		}
		if (ret.effects.getStats("seal") > 0) {
			cure.add(DiseaseStats.SEAL);
		}
		if (ret.effects.getStats("darkness") > 0) {
			cure.add(DiseaseStats.DARKNESS);
		}
		if (ret.effects.getStats("weakness") > 0) {
			cure.add(DiseaseStats.WEAKEN);
		}
		if (ret.effects.getStats("curse") > 0) {
			cure.add(DiseaseStats.CURSE);
		}
		ret.cureDebuffs = cure;

		final MapleData ltd = source.getChildByPath("lt");
		if (ltd != null) {
			ret.lt = (Point) ltd.getData();
			ret.rb = (Point) source.getChildByPath("rb").getData();
		}
		Map<MonsterStatus, Integer> monsterStatus = new ArrayMap<MonsterStatus, Integer>();

		if (skill) { // hack because we can't get from the datafile...
			switch (sourceid) {
			case 1101006:
			case 11101003:
			case 51101004: // �г�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 1121010: // �η�����
			case 51121006: // �ҿ� ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENRAGE,
						ret.effects.getStats("x") * 100 + ret.effects.getStats("mobCount"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CRITICAL_RATE, ret.effects.getStats("z"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MIN_CRITICAL_DAMAGE,
						ret.effects.getStats("y"), false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 2001002: // ��������
			case 12001001: // ��������
			case 27000003: // ��������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_GUARD, ret.effects.getStats("x"),
						false));
				break;
			case 22111001: // ���� ��������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_GUARD, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_GUARD_DAMAGER,
						ret.effects.getStats("y"), false));
				break;
			case 2301003: // invincible
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.INVINCIBLE, ret.effects.getStats("x"),
						false));
				break;
			case 1301006: // ���̾� ��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.WDEF, ret.effects.getStats("pdd"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MDEF, ret.effects.getStats("mdd"), false));
				break;
			case 4001005:
			case 4001006:
			case 4101004:
			case 4201003:
			case 4301003:
			case 4311001:
			case 14001022: // ���̽�Ʈ
			case 9001001: // ��� ���̽�Ʈ
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("speed"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.JUMP, ret.effects.getStats("jump"), false));
				break;
			case 5001005: // �뽬
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.JUMP, ret.effects.getStats("y"), false));
				break;
			case 4201009:
			case 4311005: // ī����
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 2301004: // ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLESS, ret.effects.getStats("x"), false));
				break;
			case 4001003: // ���谡 ��ũ ����Ʈ
			case 4330001: // ���꽺�� ��ũ ����Ʈ
			case 14001023: // ����Ʈ ��Ŀ ��ũ ����Ʈ
				statups.clear();
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DARKSIGHT, ret.effects.getStats("x"), false));
				break;
			case 30001001: // ����
			case 30011001:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RESISTANCE_HIDE,
						ret.effects.getStats("x"), false));
				break;
			case 4211003: // ����Ŷ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PICKPOCKET, ret.effects.getStats("x"),
						false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 4201011: // �޼� ����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MESOGUARD, ret.effects.getStats("x"), false));
				break;
			case 4111001: // �޼� ��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MESOUP, ret.effects.getStats("x"), false));
				break;
			case 4111002: // ������ ��Ʈ��
			case 4211008: // ������ ��Ʈ��
			case 36111006: // ���߾� ��������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, ret.effects.getStats("x"),
						false));
				break;
			case 1100002:
			case 11101002: // All Final attack
			case 13101002:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.FINAL_ATTACK,
						ret.effects.getStats("prop"), false));
				break;
			case 3101004: // �ҿ� �ַο� : Ȱ
			case 3201004: // �ҿ� �ַο� : ����
			case 13101003:
			case 33101003:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SOULARROW, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.S_SOULARROW, ret.effects.getStats("epad"),
						false));
				break;
			case 1211006: // wk charges
			case 1211003:
			case 1211004:
			case 1211005:
			case 1211007:
			case 1211008:
			case 1221003:
			case 1221004:
			case 15101006:
			case 21101006: // �ƶ� - ����� ����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.WK_CHARGE, ret.effects.getStats("x"), false));
				break;
			case 21121007: // �ƶ� - �޺� �踮��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.WDEF, ret.effects.getStats("pdd"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MDEF, ret.effects.getStats("mdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_BARRIER, ret.effects.getStats("t"),
						false));
				break;
			case 1311008: // �巡�� ��Ʈ����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STR_UP, ret.effects.getStats("str"), false));
				break;
			case 33101004: // ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MINE, ret.effects.getStats("y"), false));
				break;
			case 4330009: // ������ �̺�����
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				ret.overTime = true;
				break;
			case 2111008:
			case 2211008:
			case 12101005:
			case 22131002:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESET, ret.effects.getStats("x"),
						false));
				break;
			case 22171054: // �������� �ҿ�[HyperSkill]
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 5100015: // Energy Charge
			case 15100004:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENERGY_CHARGE, 1, false));
				break;
			case 1001003: // ���̾� �ٵ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WDEF,
						ret.effects.getStats("indiePdd"), true));
				break;
			case 13101023:
			case 1101005: // booster
			case 2311006: // ������Ʈ �ν���
			case 1101004:
			case 1201005:
			case 1201004:
			case 1301005:
			case 1301004:
			case 3101002:
			case 3201002:
			case 4101003:
			case 4201002:
			case 2111005: // spell booster, do these work the same?
			case 2211005:
			case 5101006:
			case 5201003:
			case 11101001:
			case 12101004:
			case 13101001:
			case 15101022:
			case 22141002: // Magic Booster
			case 23101002: // ��󺸿�� �ν���
			case 24101005: // ���� �ν���
			case 31001001: // ���� �ν���
			case 31201002: // ���� �ν���
			case 36101004:
			case 5301002: // ĳ�� �ν���
			case 32101005: // ������ �ν���
			case 33001003: // ũ�ν����� �ν���
			case 35101006: // ��ī�� �ν���
			case 51101003: // �ҵ� �ν���
			case 27101004: // ���� �ν���
			case 4311009:
			case 11101024:
			case 2101008:
			case 2201010:
			case 2301008:
			case 14101022: // ������ �ν��� - ����Ʈ��Ŀ
			case 33101012: // ũ�ν����� �ν��� - ���ϵ�����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER, ret.effects.getStats("x"), false));
				break;
			case 21001003: // Aran - Pole Arm Booster
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER, -(ret.effects.getStats("y")),
						false));
				break;
			case 12000022: // ������Ʈ: �÷��� 1
			case 12100026: // ������Ʈ: �÷��� 2
			case 12110024: // ������Ʈ: �÷��� 3
			case 12120007: // ������Ʈ: �÷��� 4
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK, ret.effects.getStats("x"), true));
				break;
			case 12101024: // �̱״ϼ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNITION, ret.effects.getStats("prop"),
						false));
				break;
			case 12101023: // �� ���� ���̾�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				break;
			case 12111023: // �� �Ǵн�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.PHOENIX, ret.effects.getStats("Y"), false));
				break;
			case 12120013: // ���Ǹ� ���� �÷���
			case 12120014: // ���Ǹ� ���� �÷���
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SPIRIT, ret.effects.getStats("v"), false));
				break;
			case 12121003: // �÷��� �踮��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BARRIER, ret.effects.getStats("x"), false));
				break;
			case 12121005: // ���� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 14111024: // ������ ����Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOW_SERVANT, ret.effects.getStats("x"),
						false));
				break;
			case 5120011: // ī���� ����
			case 5220012:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PIRATES_REVENGE,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 20031205: // ���� ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PHANTOM_SHROUD, ret.effects.getStats("x"),
						false));
				break;
			case 24111002: // �� ���� ���� ����
				ret.effects.setStats("time", level * 12 * 1000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUCK_PHANTOM_THIEF,
						ret.effects.getStats("x"), false));
				break;
			case 24111003: // �̽����� �����ؼ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP_PHANTOM_R,
						ret.effects.getStats("indieMmpR"), true));
				break;
			case 24111005: // ������Ʈ
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ACC,
						ret.effects.getStats("indieAcc"), true));
				break;
			case 24121004: // ������ ���� �Ƹ���
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("damR") + 10, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DP_PHANTOM,
						ret.effects.getStats("x") + 10, false));
				break; //
			case 24121054: // ���̳� ������Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.FINAL_JUDGEMENT, 1, false));
				break;
			case 5121015: // ����������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.VIPER_COMPOS, ret.effects.getStats("x"),
						false));
				break;
			case 51111003: // ���̴� ����
			case 11111007: // ���̴� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 5111010: // ���ο� ����ú�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, ret.effects.getStats("x"),
						false));
				break;
			case 5101011: // ��Ż Ŭ���Ƽ
			case 15101008: // ��Ż Ŭ���Ƽ
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ACC,
						ret.effects.getStats("indieAcc"), true));
				break;
			case 21111001: // ����Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WATK,
						ret.effects.getStats("epad"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WDEF,
						ret.effects.getStats("epdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MDEF,
						ret.effects.getStats("emdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.KNOCKBACK_DECREASE,
						ret.effects.getStats("x"), false));
				break;
			case 21111012: // ���� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				break;
			case 1211011: // �Ĺ������
			case 8004:
			case 10008004:
			case 20008004:
			case 20018004:
			case 20028004:
			case 20038004:
			case 30008004:
			case 30018004:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBAT_ORDERS, ret.effects.getStats("x"),
						false));
				break;
			case 5121009:
			case 15111005:
			case 15121005:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED_INFUSION, ret.effects.getStats("x"),
						false));
				break;
			case 4321000: // tornado spin uses same buffstats
				ret.effects.setStats("time", 1000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DASH_SPEED,
						100 + ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DASH_JUMP, ret.effects.getStats("y"), false)); // always
																															// 0
																															// but
																															// its
																															// there
				break;
			case 1101007: // pguard
			case 11101006:
			case 1201007:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.POWERGUARD, ret.effects.getStats("x"),
						false));
				break;
			case 31101003: // ��ũ ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.POWERGUARD, ret.effects.getStats("y"),
						false));
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("time");
				break;
			case 1301007: // ������ �ٵ�
			case 9001008: // ������ �ٵ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP, ret.effects.getStats("x"), false));
				break;
			case 1001: // ȸ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HP_RECOVERY, ret.effects.getStats("x"),
						false));
				break;
			case 1101013: // �޺�����
			case 11111001:
				statups.add(new Triple(BuffStats.COMBO, Integer.valueOf(1), Boolean.valueOf(false)));
				ret.effects.setStats("time", 2100000000);
				break;
			case 1221015: // ���̵� ������Ż
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESET, ret.effects.getStats("y"),
						false));
				break;
			case 5211006: // Homing Beacon
			case 5220011: // Bullseye
			case 22151002: // killer wings
				monsterStatus.put(MonsterStatus.POISON, Integer.valueOf(ret.effects.getStats("dot")));
				statups.add(new Triple(BuffStats.HOMING_BEACON, Integer.valueOf(ret.effects.getStats("x")),
						Boolean.valueOf(false)));
				break;
			case 1011: // Berserk fury
			case 10001011:
			case 20001011:
			case 20011011:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BERSERK_FURY, 1, false));
				break;
			case 1010:
			case 10001010:// Invincible Barrier
			case 20001010:
			case 20011010:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DIVINE_BODY, 1, false));
				break;
			case 1311006: // dragon roar
				ret.effects.setStats("hpR", -ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.STUN, 1);
				break;
			case 4341007:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WATK,
						ret.effects.getStats("epad"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				break;
			case 4341002:
				ret.effects.setStats("time", 60 * 1000);
				ret.overTime = true;
				ret.effects.setStats("hpR", -ret.effects.getStats("x"));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.FINAL_CUT, ret.effects.getStats("w"), false));
				break;
			case 4331002:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, ret.effects.getStats("x"),
						false));
				break;
			case 27110007:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS, 1, false));
				break;
			case 1121000:
			case 1221000:
			case 1321000:
			case 2121000:
			case 2221000:
			case 2321000:
			case 3121000:
			case 3221000:
			case 4121000:
			case 4221000:
			case 5121000:
			case 5221000:
			case 21121000:
			case 22171000:
			case 27121009: // ������ ���
			case 31121004: // ������ ���
			case 31221008: // ������ ���
			case 36121008: // ������ ���
			case 32121007: // ������ ���
			case 24121008: // ������ ���
			case 4341000:
			case 5321005:
			case 23121005:
			case 25121108:
			case 35121007:
			case 33121007:
			case 51121005:
			case 11121000: // �ñ׳ʽ� ������
			case 12121000: // �ñ׳ʽ� ������
			case 13121000: // �ñ׳ʽ� ������
			case 14121000: // �ñ׳ʽ� ������
			case 15121000: // �ñ׳ʽ� ������
			case 65121009:
			case 61121014:
			case 100001268: // ���� ������ ��ȣ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAPLE_WARRIOR, ret.effects.getStats("x"),
						false));
				break;
			case 3121002: // ���� ������
			case 3221002: // ���� ������
			case 13121005:
			case 33121004:
				int value = 0;
				value += ret.effects.getStats("y");
				value |= ret.effects.getStats("x") << 8;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHARP_EYES, value, false));
				break;
			case 3111011: // �ͽ�Ʈ�� ���ĸ� : Ȱ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.EXTREAM_ARCH, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, ret.effects.getStats("padX"),
						true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 3211012: // �ͽ�Ʈ�� ���ĸ� : ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.EXTREAM_ARCH, ret.effects.getStats("x"),
						false));
				break;
			case 25121209: // ��ȥ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOHON, ret.effects.getStats("x"), false));
				break;
			case 25121131: // ���� ��� �ش�ȭ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_DAMAGE,
						ret.effects.getStats("indieBDR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MOB_PDPR,
						ret.effects.getStats("indieIgnoreMobpdpR"), true));
				break;
			case 65121004: // �ҿ� ������
				int value1 = 0;
				value1 += ret.effects.getStats("y");
				value1 |= ret.effects.getStats("x") << 8;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.S_SHARP_EYES, value1, false));
			case 22151003: // magic resistance
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MDEF,
						ret.effects.getStats("indieMdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_RESISTANCE,
						ret.effects.getStats("x"), false));
				break;
			case 21000000: // Aran Combo
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARAN_COMBO, ret.effects.getStats("x"),
						false));
				break;
			case 21100005: // Combo Drain
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_DRAIN, ret.effects.getStats("x"),
						false));
				break;
			case 31111004: // ��ũ �ε��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("z"),
						false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DEFENCE_R, ret.effects.getStats("x"), false));
				break;
			case 51111004: // �ҿ� �ε��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("z"),
						false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DEFENCE_R, ret.effects.getStats("x"), false));
				break;
			case 31121005: // ��Ÿ�����ý�
				int dam = ret.effects.getStats("damage") - 100;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_SPECULATION, dam < 0 ? -dam : dam,
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("damR"), false));
				ret.overTime = true;
				break;
			case 31121007: // ���Ǵ�Ƽ ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.INFINITY_FORCE, 1, false));
				break;
			case 31121002: // ���Ǹ� ��ġ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.VAMPIRIC_TOUCH, ret.effects.getStats("x"),
						false));
				break;
			case 22131001: // ���� �ǵ�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.WDEF, ret.effects.getStats("pdd"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MDEF, ret.effects.getStats("pdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_SHILED, ret.effects.getStats("x"),
						false));
				break;
			case 22181003:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOUL_STONE, ret.effects.getStats("x"),
						false));
				break;
			case 4121014: // ��ũ ������Ƽ
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 4121054: // ���� ���
				statups.clear();
				statups.add(new Triple(BuffStats.BLEEDING_TOXIN, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				monsterStatus.put(MonsterStatus.POISON, ret.effects.getStats("dot"));
				break;
			case 4221013: // ������ �ν���Ʈ
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, ret.effects.getStats("x"), true));
				break;
			case 23111004: // �̱״Ͻ� �ξ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 23121004: // �ؽþ�Ʈ ���Ǹ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MAXHP,
						ret.effects.getStats("emhp"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("damR"), false));
				break;
			case 33101005: // �Ͽ︵
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOWLING_PARTY, ret.effects.getStats("z"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOWLING_CRITICAL,
						ret.effects.getStats("y"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOWLING_MAXMP, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOWLING_AVOID, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOWLING_DMG_DEC,
						ret.effects.getStats("x"), false));
				break;
			case 33111004: // ����ε�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLIND, ret.effects.getStats("x"), false));
				break;
			case 33111007: // ��Ʈ ��
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BISTFORM_DAMAGE,
						ret.effects.getStats("z"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R, ret.effects.getStats("w"), true));
				break;
			case 33121013: // �ͽ��ٵ� �Ű���
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ALLSTAT,
						ret.effects.getStats("indieAllStat"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 2311009: // Ȧ�� ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOLY_SHELL, ret.effects.getStats("x"),
						false));
				break;
			case 11001022: // ������Ʈ : �ҿ�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SOUL, ret.effects.getStats("prop"), false));
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("time");
				break;
			case 11001021: // �ҵ� ���� ����Ʈ
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ADD_AVOID, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_ACC, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 11101022: // ���� ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ATTACK_COUNT, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DMG_DEC, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT,
						ret.effects.getStats("indieCr"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 11101023: // �̳� Ʈ����Ʈ
				statups.add(new Triple(BuffStats.STACK_WATK, ret.effects.getStats("indiePad"), true));
				break;
			case 11111022: // ����¡ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DMG_DEC, 2, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 11111023: // Ʈ�� ����Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DP_PHANTOM, ret.effects.getStats("v"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("w"),
						false));
				break;
			case 11111024: // �ҿ� �����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MDEF,
						ret.effects.getStats("indiePdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WDEF,
						ret.effects.getStats("indiePdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				break;
			case 11121006: // �ҿ� �÷���
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ALLSTAT,
						ret.effects.getStats("indieAllStat"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT,
						ret.effects.getStats("indieCr"), true));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				break;
			case 11121054: // �ҿ� ����
				statups.clear();
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ADD_AVOID, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_ACC, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 4001002: // disorder
			case 14001002: // cygnus disorder
				monsterStatus.put(MonsterStatus.WATK, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WDEF, ret.effects.getStats("y"));
				break;
			case 5221009: // Mind Control
				monsterStatus.put(MonsterStatus.HYPNOTIZE, 1);
				break;
			case 1211013: // ����
				monsterStatus.put(MonsterStatus.WATK, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WDEF, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.DARKNESS, ret.effects.getStats("z"));
				break;
			case 22131000: // ���� �÷���
			case 51111007:
			case 27101101: // �ι��̷�����Ƽ
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("time") * 1000;
				break;
			case 22141001:
			case 1111008: // shout
			case 4211002: // assaulter
			case 3101005: // arrow bomb
			case 1111005: // coma: sword
			case 4221007: // boomerang step
			case 5101002: // Backspin Blow
			case 5101003: // Double Uppercut
			case 5121004: // Demolition
			case 5121005: // Snatch
			case 5121007: // Barrage
			case 5201004: // pirate blank shot
			case 4121008: // Ninja Storm
			case 22151001:
			case 4201004: // steal, new
			case 33101001:
			case 33101002:
			case 32101001:
			case 32111011:
			case 32121004:
			case 33111002:
			case 33121002:
			case 35101003:
			case 35111015:
			case 5111002: // energy blast
			case 15101005:
			case 4331005:
			case 1121001: // magnet
			case 1221001:
			case 1321001:
			case 9001020:
			case 31111001:
			case 31101002:
			case 2211003:
			case 2311004:
			case 22181001:
			case 23111000:
			case 21110006:
			case 5301001:
			case 5311001:
			case 5311002:
			case 2221006:
			case 5310008:
			case 2022994:
				if (sourceid == 5310008) { // ��Ű ���̺� �ְ� ���
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SKILL_FULLCHARGE, 1, false));
				}
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("time") * 1000;
				break;
			case 1120003:
			case 11110005:
				break;
			case 31121003: // ���� ũ����
				monsterStatus.put(MonsterStatus.SHOWDOWN, ret.effects.getStats("w"));
				monsterStatus.put(MonsterStatus.MDEF, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WDEF, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.MATK, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WATK, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.ACC, ret.effects.getStats("x"));
				ret.statusTime = ret.effects.getStats("subTime") * 1000;
				break;
			case 2221011: // ����¡ �극��
				statups.add(new Triple(BuffStats.FRIZING_BRESS, 1, false));
				monsterStatus.put(MonsterStatus.FREEZE, 1);
				monsterStatus.put(MonsterStatus.STUN, 1);
				monsterStatus.put(MonsterStatus.MATK, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.MDEF, ret.effects.getStats("y"));
				ret.effects.setStats("dotTime", 3);
				break;
			case 90001004:
			case 4321002:
			case 1111003:
			case 11111002:
			case 51121007:
				monsterStatus.put(MonsterStatus.DARKNESS, ret.effects.getStats("x"));
				break;
			case 4221003:
			case 4121003:
			case 33121005:
				monsterStatus.put(MonsterStatus.SHOWDOWN, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.MDEF, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WDEF, ret.effects.getStats("x"));
				break;
			case 2201004:
			case 2211002:
			case 2221001:
			case 3211003:
			case 5211005:
			case 21120006:
			case 22121000:
			case 90001006:
			case 25111206:
				monsterStatus.put(MonsterStatus.FREEZE, 1);
				ret.effects.setStats("time", Integer.MAX_VALUE); // because it
																	// seems to
																	// dispel
																	// asap.
				ret.overTime = true;
				break;
			case 2121009: // ������ ����
			case 2221009:
			case 2321010:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MASTER_MAGIC, 1, false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 4121015:
			case 12101001:
			case 22141003:
				monsterStatus.put(MonsterStatus.SPEED, ret.effects.getStats("x"));
				break;
			case 2101005:
			case 2111006:
			case 2121006:
			case 2121001:
			case 2121007:
			case 2221007:
			case 3111003:
			case 3120010:
			case 4121016:
			case 4221010:
			case 4341011:
			case 5201002:
			case 12111003:
			case 22171003:
			case 31111005:
				monsterStatus.put(MonsterStatus.POISON, ret.effects.getStats("dot"));
				ret.statusTime = ret.effects.getStats("dotTime") * 1000;
				break;
			case 31121006: // ��ũ ���ε�
				monsterStatus.put(MonsterStatus.POISON, ret.effects.getStats("dot"));
				monsterStatus.put(MonsterStatus.FREEZE, 1);
				ret.statusTime = ret.effects.getStats("dotTime") * 1000;
				break;
			case 14001021:
				statups.add(new Triple(BuffStats.ELEMENT_DARKNESS, 1, false));
				monsterStatus.put(MonsterStatus.POISON, ret.effects.getStats("dot"));
				break;
			case 14121004: // ������ ��Ƽġ
				monsterStatus.put(MonsterStatus.STUN, Integer.valueOf(ret.effects.getStats("time")));
				break;
			case 21110011: // �޺�������Ʈ
				monsterStatus.put(MonsterStatus.FREEZE, 1);
				break;
			case 23111002:
			case 22161002: // phantom imprint
				monsterStatus.put(MonsterStatus.IMPRINT, ret.effects.getStats("x"));
				break;
			case 2211006:
			case 2221003: // �۷��̼� ü��
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("x") * 1000;
				break;
			case 4121004: // Ninja ambush
			case 4221004:
				monsterStatus.put(MonsterStatus.NINJA_AMBUSH, ret.effects.getStats("damage"));
				break;
			case 2311005:
				monsterStatus.put(MonsterStatus.DOOM, 1);
				break;
			case 13120007:
			case 13111024:
			case 3111002: // puppet ranger
			case 3211002: // puppet sniper
			case 13111004: // puppet cygnus
			case 5211001: // Pirate octopus summon
			case 5220002: // wrath of the octopi
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PUPPET, 1, false));
				break;
			case 22161004: // ���н��� ��ȣ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DEFENCE_R,
						ret.getSkillStats().getStats("x"), false));
				break;
			case 22181004: // ���н��� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ONYX_WILL,
						ret.getSkillStats().getStats("x"), false));
				break;
			case 20031209: // ������Ʈ
				ret.overTime = true;
				break;
			case 20031210: // ���� ������Ʈ - 120705
				ret.overTime = true;
				break;
			case 3201007:
			case 3101007:
			case 3211005: // golden eagle
			case 3111005: // golden hawk
			case 33111005:
			case 33101011:
			case 3121006: // phoenix
			case 5321003: // ���׳�ƽ ��Ŀ
				monsterStatus.put(MonsterStatus.STUN, Integer.valueOf(1));
				break;
			case 3221005: // frostprey
			case 2121005: // elquines
				// statups.add(new Triple<BuffStats, Integer,
				// Boolean>(BuffStats.SUMMON, 1, false));
				monsterStatus.put(MonsterStatus.FREEZE, Integer.valueOf(1));
				break;
			case 1085:
			case 1087:
			case 1090:
			case 1179:
			case 10001085:
			case 10001087:
			case 10001090:
			case 10001179:
			case 20001085:
			case 20001087:
			case 20001090:
			case 20001179:
			case 20011085:
			case 20011087:
			case 20011090:
			case 20011179:
			case 20021085:
			case 20021087:
			case 20021090:
			case 20021179:
			case 20031085:
			case 20031087:
			case 20031090:
			case 20031179:
			case 20041085:
			case 20041087:
			case 20041090:
			case 20041179:
			case 20051085:
			case 20051087:
			case 30001085:
			case 30001087:
			case 30001090:
			case 30001179:
			case 30011085:
			case 30011087:
			case 30011090:
			case 30011179:
			case 30021085:
			case 30021087:
			case 30021090:
			case 30021179:
			case 50001085:
			case 50001087:
			case 50001090:
			case 50001179:
			case 60001085:
			case 60001087:
			case 60001090:
			case 60001179:
			case 60011085:
			case 60011087:
			case 60011090:
			case 60011179:
				ret.effects.setStats("time", Integer.MAX_VALUE); // because it
																	// seems to
																	// dispel
																	// asap.
				ret.overTime = true;
				break;
			case 1321007: // ��Ȧ��
			case 1301013: // Evil Eye
			case 1311014:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BEHOLDER, level, false));
				break;
			case 1311013:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BEHOLDER, ret.effects.getStats("x"), false));
				break;
			case 23121002: // �����帮 ���Ǿ�
				monsterStatus.put(MonsterStatus.WDEF, -ret.effects.getStats("x"));
				break;
			case 2311003: // Ȧ�� �ɺ�
			case 9001002: // Ȧ�� �ɺ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOLY_SYMBOL, ret.effects.getStats("x"),
						false));
				break;
			case 2211004: // il seal
			case 2111004: // fp seal
			case 12111002: // cygnus seal
			case 90001005:
				monsterStatus.put(MonsterStatus.SEAL, 1);
				break;
			case 4111003: // shadow web
			case 14111001:
				monsterStatus.put(MonsterStatus.SHADOW_WEB, 1);
				ret.statusTime = ret.effects.getStats("dotTime") * 1000;
				break;
			case 4111009: // ���Ǹ� �ں���
			case 5201008: // ���Ǵ� �Ҹ�
			case 14111025: // ���Ǹ� ������
				statups.add(new Triple(BuffStats.SPIRIT_CLAW, ret.effects.getStats("x"), true));
				break;
			case 2121004:
			case 2221004:
			case 2321004: // ���Ǵ�Ƽ
				statups.add(new Triple(BuffStats.INFINITY, 1, false));
				statups.add(new Triple(BuffStats.INFINITY_STANCE, ret.effects.getStats("prop"), false));
				break;
			case 1121002:
			case 1221002:
			case 1321002: // Stance
			case 21121003: // Aran - Freezing Posture
			case 32111014: // ���Ľ�
			case 50001214: // ���� ��ȣ
			case 51121004: // ���Ľ�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				break;
			case 5321010: // ���̷� ���Ǹ�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				break;
			case 1005: // Echo of Hero
			case 10001005: // Cygnus Echo
			case 20001005: // Aran
			case 30001005:
			case 20011005:
			case 20021005:
			case 20031005:
			case 30011005:
			case 50001005:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ECHO_OF_HERO, ret.effects.getStats("x"),
						false));
				break;
			case 2121002: // mana reflection
			case 2221002:
			case 2321002:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MANA_REFLECTION, 1, false));
				break;
			case 2321005: // ���꽺�� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ADVANCED_BLESSING, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MP,
						ret.effects.getStats("indieMmp"), true));
				break;
			case 9001003: // ����� �ູ
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("speed"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.WDEF, ret.effects.getStats("pdd"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MDEF, ret.effects.getStats("mdd"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.AVOID, ret.effects.getStats("eva"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP_PHANTOM_R,
						ret.effects.getStats("indieMmpR"), true));
				break;
			case 3121007: // �Ϸ��� ����
			case 3221006:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DEX_UP, ret.effects.getStats("dex"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ILLUSION_STEP_EVA,
						ret.effects.getStats("x"), false));
				break;
			// ĸƾ
			case 5211009: // �ҷ�����Ʈ �Ҹ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 5221018: // ���̷� ��Ÿ��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.AVOID, ret.effects.getStats("eva"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("z"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM, 20, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("y"),
						false));
				break;
			// ĳ����
			case 5301003: // ��Ű����
			case 5320008: // ������ ��Ű ����
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MP,
						ret.effects.getStats("indieMmp"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ACC,
						ret.effects.getStats("indieAcc"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_AVOID,
						ret.effects.getStats("indieEva"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_JUMP,
						ret.effects.getStats("indieJump"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_SPEED,
						ret.effects.getStats("indieSpeed"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ALLSTAT,
						ret.effects.getStats("indieAllStat"), true));
				break;
			case 5311004:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.OAK_ROULETTE, 0, false));
				break;
			case 80001034: // ����Ʈ ���̹� 1�ܰ�
			case 80001035: // ����Ʈ ���̹� 2�ܰ�
			case 80001036: // ����Ʈ ���̹� 3�ܰ�
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SAINT_SAVER, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_JUMP,
						ret.effects.getStats("indieJump"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_SPEED,
						ret.effects.getStats("indieSpeed"), true));
				break;
			case 5111007:
			case 5120012:
			case 5211007:
			case 5220014:
			case 35111013:
			case 35120014: // double lucky
			case 15111011:
			case 5311005:
			case 5320007: // ��Ű ���̽�
				ret.overTime = true;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ROLL_OF_DICE, 0, false));
				break;
			// �޸�������
			case 23101003: // ���Ǹ� ��ǻ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DMG_INC, ret.effects.getStats("damage"),
						false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.CRIT_INC, ret.effects.getStats("x"), false));
				break;
			case 23111005: // ���� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST,
						ret.effects.getStats("asrR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST,
						ret.effects.getStats("terR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, ret.effects.getStats("x"),
						false));
				break;
			case 20050286:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ESCAPE, ret.effects.getStats("prop"), false));
				break;
			case 25111209:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUCK_PHANTOM_THIEF,
						ret.effects.getStats("y"), false));
				break;
			/* ��ī�� */
			case 35111016: // ����Ʃ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 35001001: // �÷��� ��ó
			case 35101009: // ��ȭ�� �÷��� ��ó
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MECH_CHANGE, level, false));
				break;
			case 35121005: // �̻��� ��ũ
			case 35121013: // ��� �ӽŰ�
			case 35111004: // ��� �ӽŰ�
			case 35121054: // ȣ����
				ret.effects.setStats("time", 60 * 120 * 1000); // 5000
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MECH_CHANGE, ret.effects.getStats("x"),
						false));
				break;
			case 35111001: // ��Ʋ����Ʈ
			case 35111010: // ��Ʋ����Ʈ
			case 35111009: // ��Ʋ����Ʈ
				ret.effects.setStats("time", Integer.MAX_VALUE);
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.PUPPET, ret.effects.getStats("x"), false));
				break;
			case 35121010: // ���ø����̾�
				ret.effects.setStats("time", 60000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("x"), false));
				break;
			case 35121006: // ������Ƽ
				ret.effects.setStats("time", Integer.MAX_VALUE);
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SAFETY, ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SAFETY2, ret.effects.getStats("y"), false));
				break;
			case 35111011: // �����κ�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP, ret.effects.getStats("hp"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP, ret.effects.getStats("hcHp"), false));
				break;
			case 35111002: // ���׳�ƽ �ʵ�
				monsterStatus.put(MonsterStatus.STUN, Integer.valueOf(1));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				break;
			case 35121009: // �κ����丮
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				break;
			case 35121011: // �̴� �κ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				break;
			case 35111005: // �׼�������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				monsterStatus.put(MonsterStatus.SPEED, ret.effects.getStats("x"));
				monsterStatus.put(MonsterStatus.WDEF, ret.effects.getStats("y"));
				break;
			case 35121003: // ���ӽ� Ÿ��ź
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				ret.effects.setStats("time", 60 * 120 * 1000);
				break;
			case 2111010:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				break;
			case 35120000: // ��Ż�Ƹ� �ͽ�Ʈ��
				ret.effects.setStats("time", 60 * 120 * 1000);
				break;
			case 35001002: // ��Ż�Ƹ� : ������Ÿ��
				ret.effects.setStats("time", 60 * 120 * 1000);
				break;
			case 35101007: // ����Ʈ �Ƹ�
				ret.effects.setStats("time", 60 * 120 * 1000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERFECT_ARMOR, ret.effects.getStats("x"),
						false));
				break;
			case 32120000: // ���꽺�� ��ũ����
				ret.effects.setStats("dot", ret.effects.getStats("damage"));
				ret.effects.setStats("dotTime", 3);
			case 32001003: // ��ũ ����
			case 32110007:
				ret.effects.setStats("time", Integer.MAX_VALUE);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_AURA, level, false));
				break;
			case 32111012:
			case 32110000:
				ret.effects.setStats("time", Integer.MAX_VALUE);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLUE_AURA, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WDEF,
						ret.effects.getStats("indiePdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MDEF,
						ret.effects.getStats("indieMdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				break;
			case 32120001: // ���꽺�� ���ο� ����
				monsterStatus.put(MonsterStatus.SPEED, ret.effects.getStats("speed"));
			case 32101003: // ���ο� ����
			case 32110009:
				ret.effects.setStats("time", Integer.MAX_VALUE);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.YELLOW_AURA, ret.effects.getStats("x"),
						false));
				break;
			case 32101004:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_DRAIN, ret.effects.getStats("x"),
						false));
				break;
			case 32111004:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CONVERSION, ret.effects.getStats("x"),
						false));
				break;
			case 32111005: // SUPER BODY
				ret.effects.setStats("time", 60 * 1000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUPERBODY, level, false));
				break;
			case 32121005: // �� ũ��ġ ����
				ret.effects.setStats("time", 60 * 1000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BIGORA, level, false));
				break;
			case 32111006:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.RIVIBE, ret.effects.getStats("x"), false));
				break;
			case 2111007: // �ڷ���Ʈ �����͸�
			case 2211007: // �ڷ���Ʈ �����͸�
			case 2311007: // �ڷ���Ʈ �����͸�
			case 12111007: // �ڷ���Ʈ �����͸�
			case 22161005: // �ڷ���Ʈ �����͸�
			case 32111010: // �ڷ���Ʈ �����͸�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.TELEPORT_MASTERY,
						ret.effects.getStats("x"), false));
				monsterStatus.put(MonsterStatus.STUN, 1);
				ret.statusTime = ret.effects.getStats("time") * 1000;
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 33111011: // ��ο� ��
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DRAWBACK, ret.effects.getStats("x"), false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 2320011:
			case 2220010:
			case 2120010:
				ret.effects.setStats("time", 5000);
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARCANE_AIM, ret.effects.getStats("x"),
						false));
				break;
			case 3111000: // ����
			case 3211000:
			case 33111009: // ���ϵ����� ����
			case 13111001:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WATK,
						ret.effects.getStats("epad"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BUFF_MASTERY, ret.effects.getStats("x"),
						false));
				break;
			case 3210013: // ������ ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.REVERSE_DAMAGE, 10258, false));
				break;
			case 3121016: // ���꽺�� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ADVANCED_QUIVER,
						ret.effects.getStats("w"), false));
				break;
			case 3120006: // ���Ǹ� ��ũ
			case 3220005: // x�� : ü�� +% ��.. ��Ŷ���ۿ��� ���þ���
				ret.overTime = true;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPIRIT_LINK, ret.effects.getStats("x"),
						false));
				break;
			case 13111005: // �˹�Ʈ�ν�
				statups.clear();
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("speed"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.JUMP, ret.effects.getStats("jump"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MDEF,
						ret.effects.getStats("emdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WDEF,
						ret.effects.getStats("epdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 13101006: // �����ũ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.WIND_WALK, 1, false));
				break;
			case 1210016: // ���� �Ƹ�
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLESSING_ARMOR,
						ret.effects.getStats("x") + 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLESSING_ARMOR_WATK,
						ret.effects.getStats("epad"), false));
				break;
			case 27001004: // �ͽ��ٵ� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.EXTEND_MANA,
						ret.effects.getStats("indieMmpR"), true));
				break;
			case 27101202: // ���̵� ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.VOYD_PRESSURE, ret.effects.getStats("x"),
						false));
				break;
			case 27100003: // ���� ���� ��ũ�Ͻ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLESS_OF_DARKNESS,
						ret.effects.getStats("y"), false));
				ret.overTime = true;
				break;
			case 27111005: // ����Ʈ������ ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WDEF,
						ret.effects.getStats("indiePdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MDEF,
						ret.effects.getStats("indiePdd"), true));
				break;
			case 27111006: // ��ƽ �޵����̼�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MATK,
						ret.effects.getStats("emad"), false));
				break;
			case 20040216: // �����̾�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, ret.effects.getStats("x"),
						false));
				break;
			case 20040217: // ��Ŭ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, ret.effects.getStats("y"),
						false));
				break;
			case 20040219: // �������긮��
			case 20040220: // �������긮��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, 2, false));
				ret.effects.setStats("time", 1000);
				break;
			case 27121005: // ��ũ ũ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_CRESSENDOR,
						ret.effects.getStats("x"), false));
				break;
			case 27121006: // ��ũ�Ͻ� �Ҽ���
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("x"), false));
				break;
			case 31121053: // �� ���� ����Ƽ[���󽽷��̾�-Hyper]
			case 31221053: // [������-Hyper]
			case 32121053: // [��Ʋ������-Hyper]
			case 33121053: // [���ϵ�����-Hyper]
			case 35121053: // [��ī��-Hyper]
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("indieDamR"), false));
				break;
			case 32121056: // ��Ʋ ������
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CRITICAL_RATE, ret.effects.getStats("y"),
						false));
				break;
			case 33121054: // ���Ϸ�Ʈ ������
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ENRAGE, ret.effects.getStats("prop"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("indieDamR"), false));
				break;
			case 60001216: // �����ý���ġ : �����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RESHUFFLE_MODE, 0, false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				ret.overTime = true;
				break;
			case 60001217: // �����ý���ġ : ���ݸ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RESHUFFLE_MODE, 0, false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				ret.overTime = true;
				break;
			case 61101004: // ������ ��
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER, ret.effects.getStats("x"), false));
				ret.overTime = true;
				break;
			case 61101002: // �� ���� �ҵ�
			case 61110211: // �� ���� �ҵ� (Ʈ�����ǱԷ��̼�)
			case 61120007: // ���꽺�� �� ���� �ҵ�
			case 61121217: // ���꽺�� �� ���� �ҵ� (Ʈ�����ǱԷ��̼�)
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.WILL_OF_SWORD,
						ret.effects.getStats("mobCount"), false));
				ret.effects.setStats("time", level * 12 * 1000);
				ret.overTime = true;
				break;
			case 61111003: // ������ ��Ʈ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST,
						ret.effects.getStats("asrR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST,
						ret.effects.getStats("terR"), false));
				break;
			case 61111004: // īŻ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 61121009: // �ι���Ʈ �Ƹ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ROBURST_ARMOR, ret.effects.getStats("v"),
						false));
				break;
			case 61111008: // ���̳� �ǱԷ��̼� (3��)
			case 61120008: // ���̳� �ǱԷ��̼� (4��)
			case 61121053:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("speed"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MORPH, ret.effects.getStats("morph"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.CRIT_INC, ret.effects.getStats("cr"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				ret.effects.setStats("time", sourceid == 61111008 ? 60000 : 90000);
				ret.overTime = true;
				break;
			case 22171052: // ���� ���н��巡��
			case 5211014: // ��Ÿ ���͵�
			case 5211011: // �����ũ��
			case 5211015: // ���
			case 5211016: // ���
			case 5321004: // ����Ʈ ��Ű Ʈ����
			case 5320011: // ����Ʈ ��Ű Ʈ����2
			case 61111002: // ��Ʈ�����̵�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUMMON, 1, false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("prop"), false));
				monsterStatus.put(MonsterStatus.SPEED, ret.effects.getStats("x"));
				ret.overTime = true;
				break;
			case 60011216: // ������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, 0, false));
				break;
			case 65000003: // ���Ǵ�Ƽ 1
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("psdSpeed"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.JUMP, ret.effects.getStats("psdJump"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SPEED, ret.effects.getStats("speedMax"),
						false));
				break;
			case 65100005: // ���Ǵ�Ƽ 2
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("y"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST,
						ret.effects.getStats("asrR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST,
						ret.effects.getStats("terR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("damR"), false));
				break;
			case 65110006: // ���Ǵ�Ƽ 3
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.DEX_UP, ret.effects.getStats("dexX"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("damR"), false));
				break;
			case 65120006: // ���Ǵ�Ƽ 4
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SUCCESS, ret.effects.getStats("y"), false));
				break;
			case 65001002: // ������ ũ�ν�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ACC,
						ret.effects.getStats("indieAcc"), true));
				break;
			case 65111003: // �� ���� ���μ�Ʈ
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 60011219: // �ҿ� ��Ʈ��Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("indieDamR"), false));
				break;
			case 65101002: // �Ŀ� Ʈ������
				statups.add(new Triple(BuffStats.POWER_TRANSFER, Integer.valueOf(1000), Boolean.valueOf(false)));
				break;
			case 65111004: // ���̾� ���ͽ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IRON_ROTUS, ret.effects.getStats("prop"),
						false));
				break;
			case 65121053: // ���̳� ��Ʈ��Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST,
						ret.effects.getStats("asrR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST,
						ret.effects.getStats("terR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE,
						ret.effects.getStats("indieStance"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CRITICAL_RATE, ret.effects.getStats("x"),
						false));
				break;
			case 31201003: // ���� ������
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 31211003: // ������Ʈ �̺�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("z"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, ret.effects.getStats("x"),
						false));
				break;
			case 31211004: // ��ƺ��� ��Ŀ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DIABOLIC_RECOVERY,
						ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				break;
			case 31221004: // �����Թ� �Ŀ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 51121054: // ����ũ���� ť��[Hyper]
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAGIC_SHILED, ret.effects.getStats("x"),
						false));
				break;
			case 51121053: // �� ���� ����ο�[Hyper]
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_PHANTOM,
						ret.effects.getStats("indieDamR"), false));
				ret.effects.setStats("time", 60 * 1000);
				break;
			case 23121054: // ���� ����[Hyper]
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("x"), false));
				break;
			case 1121053:
			case 1221053:
			case 1321053:
			case 2121053:
			case 2221053:
			case 2321053:
			case 3121053:
			case 3221053:
			case 4121053:
			case 4221053:
			case 4341053:
			case 5121053:
			case 5221053:
			case 5321053:
			case 11121053:
			case 12121053:
			case 13121053:
			case 14121053:
			case 15121053:
			case 27121053:
			case 21121053:
			case 22171053:
			case 23121053:
			case 24121053:
			case 25121132:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				ret.effects.setStats("time", 60 * 1000);
				break;
			case 31011001:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				break;
			case 31011000:
			case 31201000:
			case 31211000:
			case 31221000:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.EXEEDATTACK, 1, false));
				break;
			case 36001002:
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 36111003:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_CRESSENDOR,
						ret.effects.getStats("prop"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARCANE_AIM, ret.effects.getStats("z"),
						false));
				break;
			case 36101002:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.CRIT_INC, ret.effects.getStats("x"), false));
				break;
			case 36101003: // ���Ǽǽ� ����������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP_PHANTOM_R,
						ret.effects.getStats("indieMmpR"), true));
				break;
			case 36121003:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_ATTACK, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 36121004: // ����ú� ��Ʈ����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("y"), false));
				break;
			case 27121054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, 20040218, false));
				break;
			case 31221054: // ����� ��Ʈ��Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				break;
			case 22181000: // ���н��� �ູ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MATK,
						ret.effects.getStats("emad"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_WDEF,
						ret.effects.getStats("epdd"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ENHANCED_MDEF,
						ret.effects.getStats("emdd"), false));
				break;
			case 32121010:
				/*
				 * statups.add(new Triple<BuffStats, Integer,
				 * Boolean>(BuffStats.ENRAGE, (ret.effects.getStats("x") * 100)
				 * + 1, false)); statups.add(new Triple<BuffStats, Integer,
				 * Boolean>(BuffStats.CRITICAL_RATE, ret.effects.getStats("z"),
				 * false)); statups.add(new Triple<BuffStats, Integer,
				 * Boolean>(BuffStats.MIN_CRITICAL_DAMAGE,
				 * ret.effects.getStats("y"), false)); break;
				 */ // ��Ʋ ������ ����
			case 30021237:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.EVIETION_REVERTY, 1, false));
				break;
			case 4341052:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ASURA, 100, false));
				break;
			case 4341054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARIANT_COSS_IMU, 1, false));
				ret.overTime = true;
				break;
			case 3110012:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CONSENTRATION, 1, false));
				break;
			case 4221054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.FLIP_THE_COIN, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT, ret.effects.getStats("x"), true));
				ret.overTime = true;
				break;
			case 5321054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ATTACK_COUNT, level, false));
				break;
			case 15121004: // ���
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, ret.effects.getStats("x"),
						false));
				break;
			case 15121054: // õ������
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.NON_DEF, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 61121054:
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_ATTACKNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_BUFFNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				break;
			case 1121054:
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("x"),
						false));
				break;
			case 1321054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_DRAIN, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 2121054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.FIRE_AURA, 1, false));
				break;
			case 1221054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_BUFFNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.POTIC_METITATION, 1, false));
				break;
			case 1320019:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_BUFFNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.REIN_CANATION, level, true));
				break;
			case 31121054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, ret.effects.getStats("x"),
						false));
				break;
			case 2221054: // ���̽� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PARTY_STANCE, ret.effects.getStats("x"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST2, ret.effects.getStats("v"),
						true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DISEASE_TOLERANCE,
						ret.effects.getStats("v"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 2321052: // ����� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HEAVENS_DOOR, 1, false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 2321054: // ������ ���� ����
				// bishop hyper
				ret.absstats = false;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("ignoreMobpdpR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ANGELRAY_COUNT, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				// statups.add(new Triple<BuffStats, Integer,
				// Boolean>(BuffStats.BOOSTER_R,
				// ret.effects.getSt1ats("indieBooster"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 5221054: // ����� ��Ÿ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST, ret.effects.getStats("y"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, ret.effects.getStats("w"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("x"), true));
				break;
			case 15001022: // ������Ʈ : ����Ʈ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LIGHTNING, 1, false));
				break;
			case 3121054: // �����۷��̼�
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STANCE, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_DAMAGE, ret.effects.getStats("y"),
						true));
				break;
			case 3221054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("ignoreMobpdpR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.H_CRITICAL_RAGE, 5180, false));
				break;
			case 15111023: // �ͷ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST,
						ret.effects.getStats("asrR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ELEMENT_RESIST,
						ret.effects.getStats("asrR"), false));
				break;
			case 15111024: // �ذ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true)); // test
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, ret.effects.getStats("y"),
						false));
				break;
			case 15120003:
			case 15111022:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("y"), false));
				break;
			// ����극��Ŀ ����
			case 13001022: // ������Ʈ : ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LIGHTNING, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			case 13101024: // ������ ���̵�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOULARROW, 1, false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.CRIT_INC, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 13110026: // ������ ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				break;
			case 13121004: // ���� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.WIND_BLESS, ret.effects.getStats("prop"),
						false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ADD_AVOID, ret.effects.getStats("x"), false));
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.ADD_ACC, ret.effects.getStats("y"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						ret.effects.getStats("indieMhpR"), true));
				break;
			case 13111023: // �˹�Ʈ�ν�
				ret.absstats = false;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ALBATROSS, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT,
						ret.effects.getStats("indieCr"), true));
				break;
			case 13120008: // �˹�Ʈ�ν� �ƽø�
				ret.absstats = false;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("ignoreMobpdpR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ALBATROSS, level, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_HP,
						ret.effects.getStats("indieMhp"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST2,
						ret.effects.getStats("indieAsrR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DISEASE_TOLERANCE,
						ret.effects.getStats("indieAsrR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT,
						ret.effects.getStats("indieCr"), true));
				break;
			case 13121054: // ���� �긵��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STORM_BRINGER, 1, false));
				break;
			case 2111011: // ������Ż ���(��,��)
			case 2211012: // ������Ż ���(��,��)
			case 2311012: // ������ �����ؼ�
			case 3211011: // ���� ų��
			case 27111004: // ��Ƽ ������
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.TIME, ret.effects.getStats("asrR"), false));
				break;
			case 2101001: // �޵����̼�
			case 2201001: // �޵����̼�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				break;
			case 2201009: // ĥ�� ����
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.STEP, ret.effects.getStats("prop"), false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 1311015:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CROSS, ret.effects.getStats("x"), false));
				break;
			case 1321015: // ��ũ�����̽�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_DAMAGE,
						ret.effects.getStats("indieBDR"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DP_PHANTOM, 1, true));
				break;
			case 21121054:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_UNLIMTIED,
						ret.effects.getStats("cooltime"), false));
				break;
			case 21101005: // Combo Drain
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO_DRAIN, ret.effects.getStats("x"),
						false));
				break;
			case 36121054:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.SURPLUS, ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HYPER, ret.effects.getStats("y"), false));
				break;
			case 65121054:
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.RECHARGE, ret.effects.getStats("x"), false));
				break;
			case 1211010: // ��������̼�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LISTONATION, ret.effects.getStats("y"),
						false));
				break;
			case 1211014: // �Ķ��ũ ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PARASHOCK_DAM_CR,
						ret.effects.getStats("x"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PARASHOCK_DF_POWER,
						ret.effects.getStats("z"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 5121052: // ����Ƽ ���� �Ŀ�
			case 5121055: // ����Ƽ ���� �Ŀ�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_BUFFNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.H_CRITICAL_RAGE,
						ret.effects.getStats("x"), false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MIN_CRITICAL_DAMAGE,
						ret.effects.getStats("x"), false));
				break;
			case 100000276: // ���ǵ� Ÿ��(����Ʈ)
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CRITICAL_R_ZERO, level, false));
				break;
			case 100000277: // ���ǵ� Ÿ��(�Ĺ�)
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_R_ZERO, level, false));
				break;
			case 100001263: // ����� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DIVINE_FORCE, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK,
						ret.effects.getStats("indiePad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK,
						ret.effects.getStats("indieMad"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WDEF,
						ret.effects.getStats("indiePdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MDEF,
						ret.effects.getStats("indieMdd"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DISEASE_TOLERANCE,
						ret.effects.getStats("indieTer"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST2,
						ret.effects.getStats("indieAsr"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 100001264: // ����� ������Ʈ
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DIVINE_SWIFT, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_ACC,
						ret.effects.getStats("indieAcc"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_AVOID,
						ret.effects.getStats("indieEva"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_JUMP,
						ret.effects.getStats("indieJump"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_SPEED,
						ret.effects.getStats("indieSpeed"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			case 100001274: // Ÿ�� Ȧ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_ATTACKNON, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.POTIC_METITATION, 1, false));
				break;
			case 100001005: // ���Ľú� Ÿ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.TIME_INTENSIVE, 4, false)); // 4%����
																											// wz������.
				break;
			case 100001272: // Ÿ�� �����ε�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.TIME_REWIND, ret.effects.getStats("x"),
						false));
				ret.effects.setStats("time", Integer.MAX_VALUE);
				break;
			// �� ��ų * start of runes/
			case 80001427: // �ż��� �� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_JUMP,
						ret.effects.getStats("indieJump"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_SPEED,
						ret.effects.getStats("indieSpeed"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RUNE_EXPRATE,
						ret.effects.getStats("indieExp"), true));
//				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOLY_SYMBOL, ret.effects.getStats("x"),
//						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				break;
			case 80001428: // ����� �� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HP_RECOVERY, 1, false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RUNE_EXPRATE,
						ret.effects.getStats("indieExp"), true));
//				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOLY_SYMBOL, ret.effects.getStats("x"),
//						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST2,
						ret.effects.getStats("indieAsrR"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DISEASE_TOLERANCE,
						ret.effects.getStats("indieTerR"), true));
				break;
			case 80001430: // �ر��� �� ����
			case 80001432: // �ĸ��� �� ����
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RUNE_EXPRATE,
						ret.effects.getStats("indieExp"), true));
//				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HOLY_SYMBOL, ret.effects.getStats("x"),
//						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
						ret.effects.getStats("indieBooster"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indieDamR"), true));
				break;
			/* �ҿｺų  end of runes */
			case 80001280: // ������ ���� ��������
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP, ret.effects.getStats("indieMhpR"),
						false));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP, ret.effects.getStats("indieMhpR"),
						false));
				break;
			case 80001218: // ȸ��Ű�
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("x"), true));
				break;
			case 80001455: // ����Ʈ����Ʈ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indiePadR"), true));
				break;
			case 80001456: // ��Ƽ���̴� ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, 30000, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK, 30000, true));
				break;
			case 80001457: // ���� ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_DAMAGE,
						ret.effects.getStats("indieBDR"), true));
				break;
			case 80001458: // �ｺ�� ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP_PHANTOM_R,
						-ret.effects.getStats("x"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOSS_DAMAGE,
						ret.effects.getStats("indieBDR"), true));
				break;
			case 80001459: // ������ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP_PHANTOM_R,
						-ret.effects.getStats("x"), true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						ret.effects.getStats("indieIgnoreMobpdpR"), false));
				break;
			case 80001460: // ������Ƽ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP_PHANTOM_R,
						-ret.effects.getStats("indieMhpR"), true));
				break;
			case 80001474: // ������Ʈ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER,
						ret.effects.getStats("indieBooster"), false));
				break;
			case 80001477: // ���÷�Ƽ�� ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.POWERGUARD, ret.effects.getStats("x"),
						false));
				break;
			case 80001479: // ����ũ����Ŀ ��
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
						ret.effects.getStats("indiePadR"), true));
				break;
			case 80001466:
			case 80001467:
			case 80001468: // ����� ����
			case 80001469:
			case 80001470:
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ATTACK_COUNT, 1, false));
				break;
			default:
				break;
			}
			/* �� */
			if (GameConstants.isBeginnerJob(sourceid / 10000)) {
				switch (sourceid % 10000) {
				case 8001:
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOULARROW, 1, false));
					break;
				case 1011: // Berserk fury
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BERSERK_FURY,
							ret.getSkillStats().getStats("x"), false));
					break;
				case 1010:
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DIVINE_BODY, 1, false));
					break;
				case 8003:
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXHP,
							ret.getSkillStats().getStats("x"), false));
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAXMP,
							ret.getSkillStats().getStats("x"), false));
					break;
				case 8004:
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBAT_ORDERS,
							ret.getSkillStats().getStats("x"), false));
					break;
				case 8005:
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ADVANCED_BLESSING, 1, false));
					break;
				// case 8006:
				// statups.add(new Triple<BuffStats, Integer,
				// Boolean>(BuffStats.SPEED_INFUSION,
				// ret.getSkillStats().getStats("x"), false));
				// break;
				// case 8002:
				// int valuez = 0;
				// valuez += ret.effects.getStats("y");
				// valuez |= ret.effects.getStats("x") << 8;
				// statups.add(new Triple<BuffStats, Integer,
				// Boolean>(BuffStats.SHARP_EYES, valuez, false));
				// break;
				case 1026: // Soaring
				case 1142: // Soaring
					ret.getSkillStats().setStats("time", 600000);
					statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOARING, 1, false));
					break;
				}
			}
		}

		if (ret.isMonsterRiding()) {
			addBuffStatPairToListIfNotZero(statups, BuffStats.MONSTER_RIDING, 1, false);
		}
		if (ret.effects.getStats("morph") > 0 || ret.isPirateMorph()) {
			addBuffStatPairToListIfNotZero(statups, BuffStats.MORPH, ret.getMorph(), false);
		}
		if (ret.overTime && ret.getSummonMovementType() == null && ret.absstats) {
			addBuffStatPairToListIfNotZero(statups, BuffStats.WATK, Integer.valueOf(ret.effects.getStats("pad")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.STACK_WATK,
					Integer.valueOf(ret.effects.getStats("indiePad")), true);
			addBuffStatPairToListIfNotZero(statups, BuffStats.WDEF, Integer.valueOf(ret.effects.getStats("pdd")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.MATK, Integer.valueOf(ret.effects.getStats("mad")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.STACK_MATK,
					Integer.valueOf(ret.effects.getStats("indieMad")), true);
			addBuffStatPairToListIfNotZero(statups, BuffStats.MDEF, Integer.valueOf(ret.effects.getStats("mdd")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ACC, Integer.valueOf(ret.effects.getStats("acc")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.AVOID, Integer.valueOf(ret.effects.getStats("eva")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.SPEED, Integer.valueOf(ret.effects.getStats("speed")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.JUMP, Integer.valueOf(ret.effects.getStats("jump")),
					false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_MAXHP,
					Integer.valueOf(ret.effects.getStats("emhp")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_MAXMP,
					Integer.valueOf(ret.effects.getStats("emmp")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_MATK,
					Integer.valueOf(ret.effects.getStats("emad")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_WATK,
					Integer.valueOf(ret.effects.getStats("epad")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_WDEF,
					Integer.valueOf(ret.effects.getStats("epdd")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ENHANCED_MDEF,
					Integer.valueOf(ret.effects.getStats("emdd")), false);
			if (sourceid != 22131001) { // ���� �ǵ�� �нú�ȿ����
				addBuffStatPairToListIfNotZero(statups, BuffStats.MAXHP, ret.effects.getStats("mhpR"), false);
			}
			addBuffStatPairToListIfNotZero(statups, BuffStats.MAXMP, ret.effects.getStats("mmpR"), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.ITEM_EXPRATE,
					Integer.valueOf(ret.effects.getStats("expBuff")), false);
			addBuffStatPairToListIfNotZero(statups, BuffStats.INFLATION,
					Integer.valueOf(ret.effects.getStats("inflation")), false);

		}
		if (ret.isInflation()) {
			addBuffStatPairToListIfNotZero(statups, BuffStats.INFLATION, Integer.valueOf(ret.getInflation()), false);
		}
		if (!skill) {
			switch (sourceid) {
			case 2022747:
				statups.clear();
				ret.effects.setStats("time", 600000);
				ret.overTime = true;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, 10, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK, 10, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ITEM_EFFECT, 1, false));
				break;
			case 2022746:
			case 2022764:
				statups.clear();
				ret.effects.setStats("time", 600000);
				ret.overTime = true;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, 5, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK, 5, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ITEM_EFFECT, 1, false));
				break;
			case 2022823:
				statups.clear();
				ret.effects.setStats("time", 600000);
				ret.overTime = true;
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_WATK, 12, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STACK_MATK, 12, true));
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ITEM_EFFECT, 1, false));
				break;
			}
		}
		ret.monsterStatus = monsterStatus;
		statups.trimToSize();
		ret.statups = statups;

		return ret;
	}

	/**
	 * @param applyto
	 * @param obj
	 * @param attack
	 *            damage done by the skill
	 */
	public final boolean applyTo(MapleCharacter chr) {
		return applyTo(chr, chr, true, null);
	}

	public final boolean applyTo(MapleCharacter chr, Point pos) {
		return applyTo(chr, chr, true, pos);
	}

	private final boolean applyTo(final MapleCharacter applyfrom, final MapleCharacter applyto, final boolean primary,
			Point pos) {
		long hpchange = calcHPChange(applyfrom, primary);
		int mpchange = calcMPChange(applyfrom, primary);

		final MapleCharacterStat stat = applyto.getStat();
		if (primary) {
			if (effects.getStats("itemConNo") != 0) {
				InventoryManipulator.removeById(applyto.getClient(),
						GameConstants.getInventoryType(effects.getStats("itemCon")), effects.getStats("itemCon"),
						effects.getStats("itemConNo"), false, true);
			}
		} else if (!primary && isResurrection()) {
			hpchange = stat.getMaxHp();
			applyto.setStance(0); // TODO fix death bug, player doesnt spawn on
									// other screen
		}
		if (isDispel() && makeChanceResult()) {
			applyto.dispelDebuffs();
			final Rectangle bounds = calculateBoundingBox(pos != null ? pos : applyfrom.getPosition(),
					applyfrom.isFacingLeft());
			int i = 0;
			List<MonsterStatus> cancel = new ArrayList<MonsterStatus>();
			cancel.add(MonsterStatus.WEAPON_DEFENSE_UP);
			cancel.add(MonsterStatus.MAGIC_DEFENSE_UP);
			cancel.add(MonsterStatus.WEAPON_ATTACK_UP);
			cancel.add(MonsterStatus.MAGIC_ATTACK_UP);
			for (MapleMapObject hmo : applyfrom.getMap().getMapObjectsInRect(bounds,
					Collections.singletonList(MapleMapObjectType.MONSTER))) {
				if (makeChanceResult()) {
					MapleMonster mob = (MapleMonster) hmo;
					for (MonsterStatus statlulz : cancel) {
						mob.cancelStatus(statlulz);
					}
				}
				++i;
			}
		} else if (isHeroWill()) {
			applyto.dispelDebuff(DiseaseStats.SEDUCE);
		} else if (cureDebuffs.size() > 0) {
			for (final DiseaseStats debuff : cureDebuffs) {
				applyfrom.dispelDebuff(debuff);
			}
		} else if (isComboRecharge()) {
			ISkill comboskill = SkillFactory.getSkill(21111009);
			final int comboskillLvl = applyto.getSkillLevel(comboskill);
			final SkillStatEffect comboEffect = comboskill.getEffect(comboskillLvl);
			final long curr = System.currentTimeMillis();
			int combo = comboEffect.getY();
			final int toDecreaseHP = ((stat.getMaxHp() / 100) * comboEffect.getX());
			if (stat.getHp() > toDecreaseHP) {
				hpchange += -toDecreaseHP; // -10% of max HP
			} else {
				hpchange = stat.getHp() == 1 ? 0 : stat.getHp() - 1;
			}
			applyto.setLastCombo(curr);
			applyto.setCombo((short) combo);
			applyto.getClient().getSession().write(MainPacketCreator.RechargeCombo(combo));
			SkillFactory.getSkill(21000000).getEffect(combo / 10).applyComboBuff(applyto, (short) combo);
		} else if (isMPRecovery()) {
			final int toDecreaseHP = ((stat.getMaxHp() / 100) * 10);
			if (stat.getHp() > toDecreaseHP) {
				hpchange += -toDecreaseHP; // -10% of max HP
			} else {
				hpchange = stat.getHp() == 1 ? 0 : stat.getHp() - 1;
			}
			mpchange += ((toDecreaseHP / 100) * getY());
		}
		int recoveryUP = 0;
		for (IItem item : applyto.getInventory(MapleInventoryType.EQUIPPED)) {
			Equip equip = (Equip) item;
			if (equip.getState() > 1) {
				int[] potential = { equip.getPotential1(), equip.getPotential2(), equip.getPotential3(),
						equip.getPotential4(), equip.getPotential5() };
				for (Integer id : potential) {
					if (id > 0) {
						ItemInformation ii = ItemInformation.getInstance();
						StructPotentialItem pot = ii.getPotentialInfo(id).get(ii.getReqLevel(equip.getItemId()) / 10);
						if (pot != null) {
							switch (id) {
							case 30551:
							case 40551:
								recoveryUP += pot.RecoveryUP;
								break;
							}
						}
					}
				}
			}
		}
		if (recoveryUP > 0) {
			hpchange += (int) (hpchange / 100) * recoveryUP;
		}
		final List<Pair<PlayerStat, Long>> hpmpupdate = new ArrayList<Pair<PlayerStat, Long>>(2);
		if (hpchange != 0) {
			if (hpchange < 0 && (-hpchange) > stat.getHp() && !applyto.hasDisease(DiseaseStats.ZOMBIFY)) {
				return false;
			}
			stat.setHp(stat.getHp() + hpchange);
			if (sourceid == 2321007) {
				applyfrom.getClient().getSession().write(MainPacketCreator.showBuffeffect(-1, level, sourceid, 5));
				applyfrom.getMap()
						.broadcastMessage(MainPacketCreator.showBuffeffect(applyfrom.getId(), level, sourceid, 5));
			}
		}
		if (mpchange != 0) {
			if (mpchange < 0 && (-mpchange) > stat.getMp()) {
				return false;
			}
			stat.setMp(stat.getMp() + mpchange);

			hpmpupdate.add(new Pair<PlayerStat, Long>(PlayerStat.MP, Long.valueOf(stat.getMp())));
		}
		hpmpupdate.add(new Pair<PlayerStat, Long>(PlayerStat.HP, Long.valueOf(stat.getHp())));

		applyto.getClient().getSession().write(MainPacketCreator.updatePlayerStats(hpmpupdate, true, applyto.getJob()));

		if (effects.getStats("expinc") != 0) {
			applyto.gainExp(effects.getStats("expinc"), true, true, false);
			applyto.getClient().getSession().write(MainPacketCreator.showSpecialEffect(22));
		} else if (isSpiritClaw()) {
			MapleInventory use = applyto.getInventory(MapleInventoryType.USE);
			IItem item;
			boolean itemz = false;
			for (int i = 0; i < use.getSlotLimit(); i++) { // impose order...
				item = use.getItem((short) i);
				if (item != null) {
					if (GameConstants.isThrowingStar(item.getItemId()) && item.getQuantity() >= 100) {
						InventoryManipulator.removeFromSlot(applyto.getClient(), MapleInventoryType.USE, (short) i,
								(short) effects.getStats("bulletConsume"), false, true);
						itemz = true;
						break;
					}
				}
			}
			if (!itemz) {
				return false;
			}
		}
		if (isSoulStone()) {
			final Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(), applyfrom.isFacingLeft());
			final List<MapleMapObject> affecteds = applyfrom.getMap().getMapObjectsInRect(bounds,
					Arrays.asList(MapleMapObjectType.PLAYER));
			final List<MapleCharacter> chrs = new LinkedList<MapleCharacter>();
			if (applyfrom.getParty() != null) {
				for (MapleMapObject mo : affecteds) {
					MapleCharacter hp = (MapleCharacter) mo;
					if (hp.getPartyId() == applyfrom.getPartyId()) {
						chrs.add(hp);
					}
				}
			}
			for (int i = 0; i < getY(); i++) {
				int rand = Randomizer.nextInt(chrs.size() - 1);
				final MapleCharacter affected = chrs.get(rand);
				applyTo(applyfrom, affected, false, null);
				affected.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(sourceid, 3));
				affected.getMap().broadcastMessage(affected,
						MainPacketCreator.showBuffeffect(affected.getId(), affected.getLevel(), sourceid, 3), false);
				chrs.remove(rand);
			}
			return true;
		} else if (sourceid == 33101006) { // ���зο� ����
			int rand = Randomizer.rand(1, 5);
			if (rand == 1) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SWALLOW_MPMAX, Randomizer.rand(1, getX()),
						false));
			} else if (rand == 2) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_BUFF, Randomizer.rand(1, getY()),
						false));
			} else if (rand == 3) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SWALLOW_AVOID, Randomizer.rand(1, getX()),
						false));
			} else if (rand == 4) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SWALLOW_CRITICALUP,
						Randomizer.rand(1, getY()), false));
			} else if (rand == 5) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SWALLOW_DAMAGE_CARE,
						Randomizer.rand(1, getX()), false));
			}
			applyto.cancelBuffStats(-1, BuffStats.DAMAGE_BUFF, BuffStats.SWALLOW_AVOID, BuffStats.SWALLOW_CRITICALUP,
					BuffStats.SWALLOW_DAMAGE_CARE);
		} else if (sourceid == 101120109) { // �̹� �踮��
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IMMUNITY_BARRIER,
					(int) (applyto.getStat().getMaxHp() * (Float.valueOf(effects.getStats("x")) / 100)), false));
		} else if (sourceid == 80001428) { // ����� ��
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.HP_RECOVERY,
					applyfrom.getStat().getMaxHp() / 10, false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.RUNE_EXPRATE, effects.getStats("indieExp"),
					true));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.STATUS_RESIST2, effects.getStats("indieAsrR"),
					true));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DISEASE_TOLERANCE,
					effects.getStats("indieTerR"), true));
		} else if (sourceid == 21101003) { // �ٵ� ������
			if (applyfrom.getBuffedValue(BuffStats.BODY_PRESSURE) == null) {
				statups.clear();
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.BODY_PRESSURE, effects.getStats("x"), false));
			} else {
				return false;
			}
		} else if (sourceid == 2321001) { // ��� ���
			if (applyfrom.getCooldownLimit(2321008) > 0
					&& applyfrom.getBuffedValue(BuffStats.SKILL_FULLCHARGE, 2321001) == null) {
				SkillStatEffect cooltime = SkillFactory.getSkill(2321008).getEffect(applyfrom.getSkillLevel(2321008));
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SKILL_FULLCHARGE, 1, false));
				this.effects.setStats("time", cooltime.getCooldown() * 1000);
			} else {
				return false;
			}
		} else if (sourceid == 100001263 || sourceid == 100001264) { // �����
																		// ������Ʈ,
																		// �����
																		// ���� ��ø
																		// ����.
			applyfrom.cancelEffect(
					sourceid == 100001263
							? SkillFactory.getSkill(100001264).getEffect(applyfrom.getSkillLevel(100001264))
							: SkillFactory.getSkill(100001263).getEffect(applyfrom.getSkillLevel(100001263)),
					false, -1);
		} else if (sourceid == 11001021 || sourceid == 11121054) { // �ҵ� ���� ����Ʈ,
																	// �ҿ� ���� ��ø
																	// ����.
			applyfrom.cancelEffect(
					sourceid == 11001021 ? SkillFactory.getSkill(11121054).getEffect(applyfrom.getSkillLevel(11121054))
							: SkillFactory.getSkill(11001021).getEffect(applyfrom.getSkillLevel(11001021)),
					false, -1);
		} else if (sourceid == 11101022 || sourceid == 11111022) { // ������, ����¡��
																	// ��ø ����.
			applyfrom.cancelEffectFromBuffStat(BuffStats.DMG_DEC, sourceid == 11101022 ? 11111022 : 11101022);
		} else if (sourceid == 11121005) { // �ַ糪 Ÿ��
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOLUNA_TIME, 1, false));
			int stateskill = applyfrom.getBuffedSkillEffect(BuffStats.DMG_DEC, -1).getSourceId();
			if (stateskill == 11101022 || stateskill == 11111022) {
				int skillid = stateskill == 11101022 ? 11121012 : 11121011;
				SkillStatEffect stateeffect = SkillFactory.getSkill(skillid)
						.getEffect(applyfrom.getSkillLevel(sourceid));
				stateeffect.applyTo(applyto);
			}
		} else if (sourceid == 11121011) { // �ַ糪 Ÿ�� : ���� �� (����¡�� + �ַ糪)
			SkillStatEffect soluna = SkillFactory.getSkill(11101022).getEffect(applyfrom.getSkillLevel(11101022)); // ����
																													// ��
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ATTACK_COUNT, 20, false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT,
					soluna.getSkillStats().getStats("indieCr"), true));
		} else if (sourceid == 11121012) {// �ַ糪 Ÿ�� : ����¡ �� (������ + �ַ糪)
			SkillStatEffect soluna = SkillFactory.getSkill(11111022).getEffect(applyfrom.getSkillLevel(11111022)); // ����¡
																													// ��
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.BOOSTER_R,
					soluna.getSkillStats().getStats("indieBooster"), true));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
					soluna.getSkillStats().getStats("indieDamR"), true));
		}
		final SummonMovementType summonMovementType = getSummonMovementType();
		if (summonMovementType != null && pos != null) {
			if (isStaticSummon()) {
				if (sourceid == 5321004) {
					pos.x -= 100;
				} else if (sourceid == 5320011) {
					pos.x += 100;
				}
			}
			if (applyfrom.isGM()) {
				applyfrom.Message("SkillID : " + sourceid + " Pos : X : " + pos.x + " Y : " + pos.y);
			}
			if (sourceid == 20051085) {
				ItemInformation ii = ItemInformation.getInstance();
				ii.getItemEffect(2022746).applyTo(applyto);
			} else if (sourceid == 20051087) {
				ItemInformation ii = ItemInformation.getInstance();
				ii.getItemEffect(2022747).applyTo(applyto);
			}
			final MapleSummon tosummon = new MapleSummon(applyfrom, sourceid, pos, summonMovementType);
			tosummon.setPosition(pos);

			if (sourceid == 5321004) { // ����Ʈ ��Ű Ʈ���� ���� ��ȯ�� �ִ��� üũ
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 5320011);
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 5321004);
			} else if (sourceid == 23111008 || sourceid == 23111009 || sourceid == 23111010) { // ������Ż
																								// ����Ʈ
																								// ����
																								// ��ȯ��
																								// �ִ���
																								// üũ
				for (int i = 23111008; i <= 23111010; ++i) {
					applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, i);
				}
			} else if (sourceid == 5211011 || sourceid == 5211015 || sourceid == 5211016) { // �����
																							// ũ��
																							// ����
																							// ��ȯ��
																							// �ִ���
																							// üũ
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 5211011);
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 5211015);
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 5211016);
			} else if (sourceid == 3101007 || sourceid == 3111005) { // �ǹ� ȣũ,
																		// �Ǵн�
																		// ����
																		// ��ȯ��
																		// �ִ���
																		// üũ
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 3101007);
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, 3111005);
			} else if (sourceid == 4341006) {
				applyfrom.cancelEffectFromBuffStat(BuffStats.SHADOWPARTNER, 4331002);
				for (MapleSummon s : applyfrom.getSummons().values()) {
					if (s.getSkill() == sourceid) {
						applyfrom.getMap().broadcastMessage(MainPacketCreator.removeSummon(s, true));
						applyfrom.getMap().removeMapObject(s);
						applyfrom.removeVisibleMapObject(s);
						applyfrom.getSummons().remove(4341006);
					}
				}
			} else if (sourceid == 5211014) {
				final MapleSummon octo = applyfrom.getSummons().get(5211014);
				if (octo != null) {
					applyfrom.getMap().broadcastMessage(MainPacketCreator.removeSummon(octo, true));
					applyfrom.getMap().removeMapObject(octo);
					applyfrom.removeVisibleMapObject(octo);
					applyfrom.getSummons().remove(5211014);
				}
			} else {
				applyfrom.cancelEffectFromBuffStat(BuffStats.SUMMON, getSourceId());
			}

			if (sourceid != 35111002) {
				final MapleSummon illusion = new MapleSummon(applyfrom, 14121055, pos, summonMovementType);
				final MapleSummon illusion2 = new MapleSummon(applyfrom, 14121056, pos, summonMovementType);
				illusion.setPosition(pos);
				illusion2.setPosition(pos);
				if (sourceid == 14121054) {
					applyfrom.getMap().spawnSummon(illusion, true, getDuration());
					applyfrom.getMap().spawnSummon(illusion2, true, getDuration());
				}
				applyfrom.getMap().spawnSummon(tosummon, true, getDuration());
				applyfrom.getSummons().put(sourceid, tosummon);
				if (sourceid == 14121054) {
					applyfrom.getSummons().put(14121055, illusion);
					applyfrom.getSummons().put(14121056, illusion2);
				}
			}
			tosummon.addHP(effects.getStats("x"));
			if (isBeholder()) {
				tosummon.addHP(1);
			}
			if (sourceid == 5321004) {
				try {
					SkillFactory.getSkill(5320011).getEffect(applyfrom.getSkillLevel(5321004)).applyTo(applyfrom,
							applyfrom.getPosition());
				} catch (Exception e) {
					System.err.println("[����] ����Ʈ ��Ű Ʈ���� ����");
					if (!ServerConstants.realese) {
						e.printStackTrace();
					}
				}
			}
			if (sourceid == 3111005) { // �Ǵн�
				try {
					if (applyfrom.getSkillLevel(3120006) > 0) { // ���Ǹ� ��ũ
						SkillFactory.getSkill(3120006).getEffect(applyfrom.getSkillLevel(3120006)).applyTo(applyfrom,
								applyfrom.getPosition());
					}
				} catch (Exception e) {
					System.err.println("[����] ����Ʈ ��Ű Ʈ���� ����");
					if (!ServerConstants.realese) {
						e.printStackTrace();
					}
				}
			}
			if (sourceid == 3211005) { // ������
				try {
					if (applyfrom.getSkillLevel(3220005) > 0) { // ���Ǹ� ��ũ
						SkillFactory.getSkill(3220005).getEffect(applyfrom.getSkillLevel(3220005)).applyTo(applyfrom,
								applyfrom.getPosition());
					}
				} catch (Exception e) {
					System.err.println("[����] ����Ʈ ��Ű Ʈ���� ����");
					if (!ServerConstants.realese) {
						e.printStackTrace();
					}
				}
			}
			if (getSkillStats().getStats("selfDestruction") > 0) {
				applyto.getMines().add(tosummon);
			}
		}

		boolean hasBuffLonger = false;
		for (InnerSkillValueHolder isvh : applyfrom.getInnerSkills()) {
			if (isvh.getSkillId() == 70000048) {
				hasBuffLonger = true;
				break;
			}
		}
		if (hasBuffLonger) {
			int rate = SkillFactory.getSkill(70000048).getEffect(applyfrom.getSkillLevel(70000048)).getSkillStats()
					.getStats("bufftimeR");
			effects.setStats("time", getDuration() + (int) (getDuration() * (rate / 100.0D)));
		}

		if (overTime && !isEnergyCharge()) {
			applyBuffEffect(applyfrom, applyto, primary, false);
		}

		if (primary) {
			if (overTime || isHeal() && !isEnergyCharge()) {
				applyBuff(applyfrom);
			}
			if (isMonsterBuff()) {
				applyMonsterBuff(applyfrom);
			}
		}
		if (sourceid == 35121003) {
			applyfrom.getClient().getSession().write(MainPacketCreator.resetActions()); // doubt
																						// we
																						// need
																						// this
																						// at
																						// all
		}
		if (isMagicDoor()) { // Magic Door
			MapleDoor door = new MapleDoor(applyto, new Point(pos == null ? applyto.getTruePosition() : pos)); // Current
																												// Map
																												// door
			if (door.getTownPortal() != null) {
				applyto.getMap().spawnDoor(door);
				applyto.addDoor(door);

				MapleDoor townDoor = new MapleDoor(door); // Town door
				applyto.addDoor(townDoor);
				door.getTown().spawnDoor(townDoor);

				if (applyto.getParty() != null) { // update town doors
					applyto.silentPartyUpdate();
				}
			}
		} else if (isMechDoor()) { // ���� ����Ʈ
			int newId = 0;
			boolean applyBuff = false;
			if (applyto.getMechDoors().size() >= 2) {
				final MapleMechDoor remove = applyto.getMechDoors().remove(0);
				newId = remove.getId();
				applyto.getMap().broadcastMessage(MechanicSkill.mechDoorRemove(remove, true));
				applyto.getMap().removeMapObject(remove);
			} else {
				for (MapleMechDoor p : applyto.getMechDoors()) {
					if (p.getId() == newId) {
						applyBuff = true;
						newId = 1;
						break;
					}
				}
			}
			final MapleMechDoor door = new MapleMechDoor(applyto,
					new Point(pos == null ? applyto.getTruePosition() : pos), newId);
			applyto.getMap().spawnMechDoor(door);
			applyto.addMechDoor(door);
			applyto.getClient().getSession().write(MechanicSkill.mechPortal(door.getTruePosition()));
			if (!applyBuff) {
				return true;
			}
		} else if (isMist()) {
			try {
				final Rectangle bounds = calculateBoundingBox(pos != null ? pos : applyfrom.getPosition(),
						applyfrom.isFacingLeft());
				final MapleMist mist = new MapleMist(bounds, applyfrom, this);
				applyfrom.getMap().spawnMist(mist, getDuration(), isMistPoison(), false, isRecovery(),
						isBurningRegion(), isTimeCapsule());
				if (isTimeCapsule()) {
					applyfrom.send(MainPacketCreator.TimeCapsule());
					applyfrom.setChairText(null);
					applyfrom.setChair(3010587);
					applyfrom.getMap().broadcastMessage(applyfrom, MainPacketCreator.showChair(applyfrom.getId(),
							applyfrom.getChair(), applyfrom.getChairText()), false);
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			}
		} else if (isTimeLeap() || isTimeHolding()) { // Time Leap & Ÿ�� Ȧ��
			for (MapleCoolDownValueHolder i : applyto.getAllCooldowns()) {
				if (i.skillId != sourceid) {
					applyto.removeCooldown(i.skillId);
					applyto.getClient().getSession().write(MainPacketCreator.skillCooldown(i.skillId, 0));
				}
			}
		} else if (isMagicCrash()) { // ���� ũ����
			final Rectangle bounds = calculateBoundingBox(pos != null ? pos : applyfrom.getPosition(),
					applyfrom.isFacingLeft());
			int i = 0;
			List<MonsterStatus> cancel = new ArrayList<MonsterStatus>();
			cancel.add(MonsterStatus.WEAPON_DEFENSE_UP);
			cancel.add(MonsterStatus.MAGIC_DEFENSE_UP);
			cancel.add(MonsterStatus.WEAPON_ATTACK_UP);
			cancel.add(MonsterStatus.MAGIC_ATTACK_UP);
			cancel.add(MonsterStatus.MAGIC_IMMUNITY);
			cancel.add(MonsterStatus.WEAPON_IMMUNITY);
			for (MapleMapObject hmo : applyfrom.getMap().getMapObjectsInRect(bounds,
					Collections.singletonList(MapleMapObjectType.MONSTER))) {
				if (i >= 10) {
					break;
				}
				if (makeChanceResult()) {
					MapleMonster mob = (MapleMonster) hmo;
					try {
						MonsterStatusEffect mobeff = new MonsterStatusEffect(
								Collections.singletonMap(MonsterStatus.MAGIC_CRASH, 1), SkillFactory.getSkill(sourceid),
								null, false);
						mob.applyStatus(applyfrom, mobeff, false, getStatusDuration(), false);
					} catch (Exception e) {
						if (!ServerConstants.realese) {
							e.printStackTrace();
						}
					}
					for (MonsterStatus statlulz : cancel) {
						mob.cancelStatus(statlulz);
					}
				}
				++i;
			}

		} else if (isInfinity()) {
			applyto.startInfinityRegen(this, alchemistModifyVal(applyto, effects.getStats("time"), false));
		} else if (sourceid == 1211010) { // ��������̼�
			int recover = (int) (applyto.getStat().getCurrentMaxHp() * (getX() / 100.0D));
			applyto.addHP(recover);
		} else if (sourceid == 1321015) { // ��ũ�����̽�
			applyfrom.cancelEffectFromBuffStat(BuffStats.BEHOLDER, 1301013);
			for (MapleSummon s : applyfrom.getSummons().values()) {
				if (s.getSkill() == 1301013) {
					applyfrom.getMap().broadcastMessage(MainPacketCreator.removeSummon(s, true));
					applyfrom.getMap().removeMapObject(s);
					applyfrom.removeVisibleMapObject(s);
					applyfrom.getSummons().remove(1301013);
				}
			}
		} else if (sourceid == 1281) { // ���� �� ������ (���谡)
			if (applyto.getEventInstance() == null) {
				MapleMap map = applyto.getClient().getChannelServer().getMapFactory().getMap(20000);
				applyto.changeMap(map, map.getPortal(0));
			} else {
				applyto.dropMessage(5, "�̰������� ����� �� �����ϴ�.");
			}
		} else if (sourceid == 10001245) { // ����Ȩ (�ñ׳ʽ�)
			if (applyto.getEventInstance() == null) {
				MapleMap map = applyto.getClient().getChannelServer().getMapFactory().getMap(130000000);
				applyto.changeMap(map, map.getPortal(0));
			} else {
				applyto.dropMessage(5, "�̰������� ����� �� �����ϴ�.");
			}
		} else if (sourceid == 20031203) { // ���� ���� ���� (����)
			if (applyto.getEventInstance() == null) {
				MapleMap map = applyto.getClient().getChannelServer().getMapFactory().getMap(150000000);
				applyto.changeMap(map, map.getPortal(0));
			} else {
				applyto.dropMessage(5, "�̰������� ����� �� �����ϴ�.");
			}
		} else if (sourceid == 100001262) { // ��Ʈ���̽� ���� (����)
			if (applyto.getEventInstance() == null) {
				MapleMap map = applyto.getClient().getChannelServer().getMapFactory().getMap(320000000);
				applyto.changeMap(map, map.getPortal(0));
			} else {
				applyto.dropMessage(5, "�̰������� ����� �� �����ϴ�.");
			}
		} else if (sourceid == 2311009) { // Ȧ�� ������
			if (applyto.getKeyValue("HolyMagicShell_lastReceived") == null) {
				applyto.setKeyValue("HolyMagicShell_lastReceived", System.currentTimeMillis() + "");
			}
			applyto.getStat()
					.setHp((int) (applyto.getStat().getCurrentMaxHp() * (getSkillStats().getStats("z")) / 100.0D));
		} else if (sourceid >= 80001034 && sourceid <= 80001036) {
			applyto.getStat().addSaintSaver(-applyto.getStat().getSaintSaver());
		} else if (isSoulSkill()) {
			Equip weapon = (Equip) (applyto.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11));
			File source = new File("wz/Skill.wz");
			MapleDataProvider sourceData;
			sourceData = MapleDataProviderFactory.getDataProvider(source);
			MapleData dd = sourceData.getData("8000.img");
			final int ReqSoul = MapleDataTool
					.getIntConvert(dd.getChildByPath("skill/" + weapon.getSoulSkill() + "/common/soulmpCon"));
			applyto.setSoulCount((short) (applyto.getSoulCount() - ReqSoul));
			if (applyto.getSoulCount() < ReqSoul) {
				applyto.send(SoulWeaponPacket.giveSoulEffect(0));
			}
		}
		return true;
	}

	public final boolean applyReturnScroll(final MapleCharacter applyto) {
		if (effects.getStats("moveTo") != -1) {
			if (applyto.getMap().getReturnMapId() != applyto.getMapId()) {
				MapleMap target;
				if (effects.getStats("moveTo") == 999999999) {
					target = applyto.getMap().getReturnMap();
				} else {
					target = ChannelServer.getInstance(applyto.getClient().getChannel()).getMapFactory()
							.getMap(effects.getStats("moveTo"));
					if (target.getId() / 10000000 != 60 && applyto.getMapId() / 10000000 != 61) {
						if (target.getId() / 10000000 != 21 && applyto.getMapId() / 10000000 != 20) {
							if (target.getId() / 10000000 != applyto.getMapId() / 10000000) {
								return false;
							}
						}
					}
				}
				applyto.changeMap(target, target.getPortal(0));
				return true;
			}
		}
		return false;
	}

	private final void applyBuff(final MapleCharacter applyfrom) {
		if (isPartyBuff() && (applyfrom.getParty() != null || isGmBuff())) {
			final Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(), applyfrom.isFacingLeft());
			final List<MapleMapObject> affecteds = applyfrom.getMap().getMapObjectsInRect(bounds,
					Arrays.asList(MapleMapObjectType.PLAYER));

			for (final MapleMapObject affectedmo : affecteds) {
				final MapleCharacter affected = (MapleCharacter) affectedmo;
				if (affected != applyfrom && (isGmBuff() || applyfrom.getParty().equals(affected.getParty()))) {
					if ((isResurrection() && !affected.isAlive()) || (!isResurrection() && affected.isAlive())) {
						if (sourceid == 2311009) { // Ȧ�� ������ 30�� ��ȣ�� ���� �Ұ�
							if (affected.getKeyValue("HolyMagicShell_lastReceived") != null) {
								long lasttime = Long.parseLong(affected.getKeyValue("HolyMagicShell_lastReceived"));
								if (lasttime + (getY() * 1000) > System.currentTimeMillis()) {
									continue;
								} else {
									affected.setKeyValue("HolyMagicShell_lastReceived", null);
								}
							}
							affected.setKeyValue2("HolyMagicShellLifeCount", getX());
						}
						applyTo(applyfrom, affected, false, null);
						affected.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(sourceid, 3));
						affected.getMap().broadcastMessage(affected,
								MainPacketCreator.showBuffeffect(affected.getId(), affected.getLevel(), sourceid, 3),
								false);
					}
					if (isTimeLeap()) {
						for (MapleCoolDownValueHolder i : affected.getAllCooldowns()) {
							if (i.skillId != 5121010) {
								affected.removeCooldown(i.skillId);
								affected.getClient().getSession().write(MainPacketCreator.skillCooldown(i.skillId, 0));
							}
						}
					}
				}
			}
		}
	}

	public final void applyMonsterBuff(final MapleCharacter applyfrom) {
		final Rectangle bounds = calculateBoundingBox(applyfrom.getPosition(), applyfrom.isFacingLeft());
		final List<MapleMapObject> affected = sourceid == 35111005
				? applyfrom.getMap().getMapObjectsInRange(applyfrom.getPosition(), Double.POSITIVE_INFINITY,
						Arrays.asList(MapleMapObjectType.MONSTER))
				: applyfrom.getMap().getMapObjectsInRect(bounds, Arrays.asList(MapleMapObjectType.MONSTER));
		int i = 0;

		for (final MapleMapObject mo : affected) {
			if (makeChanceResult()) {
				MapleMonster mons = (MapleMonster) mo;
				if (sourceid == 35111005 && mons.getStats().isBoss()) {
					break;
				}
				((MapleMonster) mo).applyStatus(applyfrom,
						new MonsterStatusEffect(getMonsterStati(), SkillFactory.getSkill(sourceid), null, false),
						isPoison(), getStatusDuration(), false);
			}
			i++;
			if (i >= effects.getStats("mobCount") && sourceid != 35111005) {
				break;
			}
		}
	}

	public final Rectangle calculateBoundingBox(final Point posFrom, final boolean facingLeft) {
		return calculateBoundingBox(posFrom, facingLeft, lt, rb, effects.getStats("range"));
	}

	public static Rectangle calculateBoundingBox(final Point posFrom, final boolean facingLeft, final Point lt,
			final Point rb, final int range) {
		if (lt == null || rb == null) {
			return new Rectangle((facingLeft ? (-200 - range) : 0) + posFrom.x, (-100 - range) + posFrom.y, 200 + range,
					100 + range);
		}
		Point mylt;
		Point myrb;
		if (facingLeft) {
			mylt = new Point(lt.x + posFrom.x - range, lt.y + posFrom.y);
			myrb = new Point(rb.x + posFrom.x, rb.y + posFrom.y);
		} else {
			myrb = new Point(lt.x * -1 + posFrom.x + range, rb.y + posFrom.y);
			mylt = new Point(rb.x * -1 + posFrom.x, lt.y + posFrom.y);
		}
		return new Rectangle(mylt.x, mylt.y, myrb.x - mylt.x, myrb.y - mylt.y);
	}

	public final void silentApplyBuff(final MapleCharacter chr, final long starttime) {
		final int localDuration = alchemistModifyVal(chr, effects.getStats("time"), false);
		if (((starttime + localDuration) - System.currentTimeMillis()) > 0) {
			int overlap_magic = (int) (System.currentTimeMillis() % 1000000000);
			Map<BuffStats, List<StackedSkillEntry>> stacked = chr.getStackSkills();
			for (Triple<BuffStats, Integer, Boolean> statup : statups) {
				if (statup.getThird()) {
					if (!stacked.containsKey(statup.getFirst())) {
						stacked.put(statup.getFirst(), new ArrayList<StackedSkillEntry>());
					}
					stacked.get(statup.getFirst())
							.add(new StackedSkillEntry(skill ? getSourceId() : -getSourceId(), statup.getSecond(),
									overlap_magic,
									(int) (((starttime + localDuration) - System.currentTimeMillis()) / 1000)));
				}
			}
			chr.registerEffect(this, starttime,
					BuffTimer.getInstance().schedule(new CancelEffectAction(chr, this, starttime),
							((starttime + localDuration) - System.currentTimeMillis())));
			final SummonMovementType summonMovementType = getSummonMovementType();
			if (summonMovementType != null) {
				final MapleSummon tosummon = new MapleSummon(chr, sourceid, chr.getPosition(), summonMovementType);
				if (!tosummon.isPuppet() && !tosummon.isStaticSummon()) {
					chr.getMap().spawnSummon(tosummon, true, getDuration());
					chr.getSummons().put(sourceid, tosummon);
					tosummon.addHP(getX());
				}
			}
		}
	}

	public final void applyComboBuff(final MapleCharacter applyto, short combo) {
		final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
				.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARAN_COMBO, (int) combo, false));
		applyto.getClient().getSession().write(MainPacketCreator.giveBuff(sourceid, 99999, stat, this, null)); // Hackish
																												// timing,
																												// todo
																												// find
																												// out

		final long starttime = System.currentTimeMillis();
		applyto.registerEffect(this, starttime, null);
	}

	public void applySunfireBuff(final MapleCharacter applyto, boolean used, int attackSkill) {
		final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
				.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, 1, false));
		final long startTime = System.currentTimeMillis();
		if (used && (applyto.getBuffedValue(BuffStats.LUMINOUS_GAUGE) != null
				&& applyto.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040216)) {
			if (GameConstants.isLightSkills(attackSkill)) {
				applyto.send(MainPacketCreator.checkSunfireSkill(
						applyto.addMinusOfGlassMorph(GameConstants.isLightSkillsGaugeCheck(attackSkill))));
			}
		} else {
			if (GameConstants.isDarkSkills(attackSkill)) {
				applyto.send(MainPacketCreator.giveSunfireBuff(stat, 10000, effects.getStats("time")));
				applyto.send(MainPacketCreator.checkSunfireSkill(9999));
				applyto.registerEffect(this, startTime, null);
				applyto.setBuffedValue(BuffStats.LUMINOUS_GAUGE, -1, 20040216);
			}
		}
	}

	public void applyEclipseBuff(final MapleCharacter applyto, boolean used, int attackSkill) {
		final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
				.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.LUMINOUS_GAUGE, 100, false));
		final long startTime = System.currentTimeMillis();

		if (used && (applyto.getBuffedValue(BuffStats.LUMINOUS_GAUGE) != null
				&& applyto.getBuffedValue(BuffStats.LUMINOUS_GAUGE) == 20040217)) {
			if (GameConstants.isDarkSkills(attackSkill)) {
				applyto.send(MainPacketCreator.checkEclipseSkill(
						applyto.addPlusOfGlassMorph(GameConstants.isDarkSkillsGaugeCheck(attackSkill))));
			}
		} else {
			if (GameConstants.isLightSkills(attackSkill)) {
				applyto.send(MainPacketCreator.giveEclipseBuff(stat, -1, effects.getStats("time")));
				applyto.send(MainPacketCreator.checkEclipseSkill(1));
				applyto.registerEffect(this, startTime, null);
				applyto.setBuffedValue(BuffStats.LUMINOUS_GAUGE, -1, 20040217);
			}
		}
	}

	public void applyequilibriumBuff(final MapleCharacter applyto, boolean sunfire) {
		final long startTime = System.currentTimeMillis();
		final CancelEffectAction cancelAction = new CancelEffectAction(applyto, this, startTime);
		final ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelAction,
				((startTime + 10000) - System.currentTimeMillis()));
		applyto.registerEffect(this, startTime, schedule);
		if (sunfire) {
			applyto.send(MainPacketCreator.giveEquilibriumBuff(20040220, 20040216, 20040217));
			applyto.send(MainPacketCreator.checkSunfireSkill(1));
			applyto.setBuffedValue(BuffStats.LUMINOUS_GAUGE, -1, 20040219);
		} else {
			applyto.send(MainPacketCreator.giveEquilibriumBuff(20040219, 20040217, 20040216));
			applyto.send(MainPacketCreator.checkEclipseSkill(1));
			applyto.setBuffedValue(BuffStats.LUMINOUS_GAUGE, -1, 20040218);
		}
	}

	public final void applyBuffEffectz(final MapleCharacter applyfrom, final MapleCharacter applyto,
			final boolean primary, final boolean lightCharge) {
		this.applyBuffEffect(applyfrom, applyto, primary, lightCharge);
	}

	private final void applyBuffEffect(final MapleCharacter applyfrom, final MapleCharacter applyto,
			final boolean primary, final boolean lightCharge) {
		if (sourceid == 5311005) {
			final int DoubleDice = applyto.getSkillLevel(SkillFactory.getSkill(5320007));
			if (DoubleDice > 0) {
				setSourceId(5320007);
			}
		} else if (sourceid == 5301003) {
			final int HyperMonkey = applyto.getSkillLevel(SkillFactory.getSkill(5320008));
			if (HyperMonkey > 0) {
				setSourceId(5320008);
			}
		}
		int localDuration = effects.getStats("time");
		if (primary) {
			localDuration = alchemistModifyVal(applyfrom, localDuration, false);
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.showBuffeffect(applyto.getId(), applyto.getLevel(), sourceid, 1), false);
		}
		boolean normal = true, showEffect = primary;
		switch (sourceid) {
		case 5001005: // �뽬
		case 5121009: // Speed Infusion
		case 15111005:
		case 4321000: // tornado spin
		case 15001003:
		case 15121005: {
			if (sourceid == 15001003 || sourceid == 4321000) {
				applyto.getClient().getSession().write(MainPacketCreator.givePirate(sourceid));
			} else if (sourceid == 5001005) {
				applyto.getClient().getSession().write(MainPacketCreator.giveDash());
			} else {
				applyto.getClient().getSession()
						.write(MainPacketCreator.givePirate(statups, localDuration / 1000, sourceid));
			}
			if (sourceid != 5121009 && sourceid != 15111005) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignPirate(statups, localDuration / 1000, applyto.getId(), sourceid),
						false);
			}
			normal = false;
			break;
		}
		case 5211006: // Homing Beacon
		case 22151002: // killer wings
		case 5220011: {// Bullseye
			if (applyto.getLinkMid(sourceid) > 0) {
				applyto.getClient().getSession().write(MainPacketCreator.cancelHoming());
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveHoming(sourceid, applyto.getLinkMid(sourceid)));
			} else {
				return;
			}
			normal = false;
			break;
		}
		case 5111007:
		case 5120012:
		case 5211007:
		case 5220014:
		case 35111013:
		case 35120014: // double lucky
		case 15111011:
		case 5311005:
		case 5320007: {
			int diceid = 0;
			int doublediceid = 0;
			int rand1 = 0, rand2 = 0;
			if (isDoubleDice(sourceid) && makeChanceResult()) {
				rand1 = Randomizer.rand(1, 6);
				rand2 = Randomizer.rand(1, 6);
				doublediceid |= rand1 >> 4;
				doublediceid |= rand2;
			} else {
				diceid = Randomizer.rand(1, 6);
			}
			if (doublediceid > 0) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand1, 0, true, false), false);
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand2, 0, true, true), false);
				applyto.getClient().getSession()
						.write(MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand1, 0, false, false));
				applyto.getClient().getSession()
						.write(MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand2, 0, false, true));
				if (rand1 == 1 && rand2 == 1) {
					applyto.dropMessage(5, "���� ��Ű ���̽� ��ų�� [" + rand2 + "], [" + rand1 + "] �� ���� �ƹ��� ȿ���� ���� ���߽��ϴ�.");
					return;
				} else if (rand1 == 1) {
					applyto.dropMessage(5, "���� ��Ű ���̽� ��ų�� [" + rand2 + "] �� ȿ���� �ߵ� ���׽��ϴ�.");
				} else if (rand2 == 1) {
					applyto.dropMessage(5, "���� ��Ű ���̽� ��ų�� [" + rand1 + "] �� ȿ���� �ߵ� ���׽��ϴ�.");
				} else {
					applyto.dropMessage(5, "���� ��Ű ���̽� ��ų�� [" + rand2 + "], [" + rand1 + "] �� ȿ���� �ߵ� ���׽��ϴ�.");
				}
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.ROLL_OF_DICE,
								Integer.valueOf(doublediceid), false));
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveDoubleDice(doublediceid, sourceid, localDuration, stat));
			} else {
				int tempsource = sourceid == 5320007 ? 5311005
						: sourceid == 5220014 ? 5211007 : sourceid == 5120012 ? 5111007 : sourceid;
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.showRandBuffEffect(applyto.getId(), tempsource, diceid, 0, true), false);
				applyto.getClient().getSession()
						.write(MainPacketCreator.showRandBuffEffect(applyto.getId(), tempsource, diceid, 0, false));
				if (diceid <= 1) {
					applyto.dropMessage(5, "��Ű ���̽� ��ų�� [1] �� ���� �ƹ��� ȿ���� ���� ���߽��ϴ�.");
					return;
				}
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.ROLL_OF_DICE,
								Integer.valueOf(diceid), false));
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveDice(diceid, tempsource, localDuration, stat));
				applyto.dropMessage(5, "��Ű ���̽� ��ų�� [" + diceid + "] �� ȿ���� �ߵ� ���׽��ϴ�.");
			}
			normal = false;
			break;
		}
		case 5311004: {
			int Oakid = Randomizer.rand(1, 4);
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, Oakid, 0, true), false);
			applyto.getClient().getSession()
					.write(MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, Oakid, 0, false));
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.OAK_ROULETTE, Oakid, false));
			this.statups = stat;
			int overlap_magic = (int) (System.currentTimeMillis() % 1000000000);
			Map<BuffStats, List<StackedSkillEntry>> stacked = applyto.getStackSkills();
			for (Triple<BuffStats, Integer, Boolean> statup : stat) {
				if (statup.getThird()) {
					if (!stacked.containsKey(statup.getFirst())) {
						stacked.put(statup.getFirst(), new ArrayList<StackedSkillEntry>());
					}
					stacked.get(statup.getFirst()).add(
							new StackedSkillEntry(getSourceId(), statup.getSecond(), overlap_magic, localDuration));
				}
			}
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat, this, stacked));

			normal = false;
			showEffect = false;
			break;
		}
		case 4330001:
		case 4001003:
		case 14001023: { // Dark Sight
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARKSIGHT, 0, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 32001003: // ��ũ ����
		case 32101003: // ���ο� ����
		case 32111012: { // ��� ����
			if (applyfrom.getSkillLevel(32120001) > 0) {
				SkillFactory.getSkill(32120001).getEffect(applyfrom.getSkillLevel(32120001)).applyBuffEffect(applyfrom,
						applyto, primary, false);
				return;
			}
			break;
		}
		case 32111005: {
			if (applyfrom.getBuffedValue(BuffStats.BLUE_AURA) != null) {
				List<Triple<BuffStats, Integer, Boolean>> stat2 = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLUE_AURA, 50, false));
				if (applyfrom.getBuffedValue(BuffStats.YELLOW_AURA) != null) {
					stat2 = Collections
							.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.YELLOW_AURA, 50, false));
					if (applyfrom.getBuffedValue(BuffStats.DARK_AURA) != null) {
						stat2 = Collections
								.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_AURA, 50, false));
					}
				}
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat2, this, null));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat2, this), false);
				return;
			}
			break;
		}
		case 32121005: {
			if (applyfrom.getBuffedValue(BuffStats.BLUE_AURA) != null) {
				List<Triple<BuffStats, Integer, Boolean>> stat2 = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLUE_AURA, 75, false));
				if (applyfrom.getBuffedValue(BuffStats.YELLOW_AURA) != null) {
					stat2 = Collections
							.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.YELLOW_AURA, 75, false));
					if (applyfrom.getBuffedValue(BuffStats.DARK_AURA) != null) {
						stat2 = Collections
								.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_AURA, 75, false));
					}
				}
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat2, this, null));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat2, this), false);
				return;
			}
			break;
		}
		case 32120000: { // ���꽺�� ��ũ ����
			applyto.cancelEffectFromBuffStat(BuffStats.DARK_AURA, -1);
			final List<Triple<BuffStats, Integer, Boolean>> stat2 = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_AURA, effects.getStats("x"), false));
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat2, this, null));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat2, this),
					false);
			normal = false;
			break;
		}
		case 32110009: // ���꽺�� ���ο� ����
		case 32120001: {
			applyto.cancelEffectFromBuffStat(BuffStats.YELLOW_AURA, -1);
			final List<Triple<BuffStats, Integer, Boolean>> stat2 = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.YELLOW_AURA, effects.getStats("level"), false));
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat2, this, null));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat2, this),
					false);
			normal = false;
			break;
		}
		case 32110000: { // ���꽺�� ��� ����
			applyto.cancelEffectFromBuffStat(BuffStats.BLUE_AURA, -1);
			final List<Triple<BuffStats, Integer, Boolean>> stat2 = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.BLUE_AURA, effects.getStats("x"), false));
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat2, this, null));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat2, this),
					false);
			normal = false;
			break;
		}
		case 30001001:
		case 30011001: { // ����
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.RESISTANCE_HIDE, 0, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 4341002: { // ���̳� ��
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.FINAL_CUT, effects.getStats("y"), false));
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat, this, null));
			normal = false;
			break;
		}
		case 3101009: { // ���� īƮ����
			if (applyto.QuiverCallCount == 0) {
				applyto.QuiverCallCount++;
			} else if (applyto.QuiverCallCount == 1) {
				applyto.setQuiverArrowCount(1, 0);
				applyto.getClient().getSession()
						.write(MainPacketCreator.QuiverKartrige(applyto, 1, effects.getStats("y"), false));
				applyto.QuiverCallCount++;
			} else if (applyto.QuiverCallCount == 2) {
				applyto.setQuiverArrowCount(2, 0);
				applyto.getClient().getSession()
						.write(MainPacketCreator.QuiverKartrige(applyto, 2, effects.getStats("y"), false));
				applyto.QuiverCallCount++;
			} else if (applyto.QuiverCallCount == 3) {
				applyto.setQuiverArrowCount(3, 0);
				applyto.getClient().getSession()
						.write(MainPacketCreator.QuiverKartrige(applyto, 3, effects.getStats("y"), false));
				applyto.QuiverCallCount++;
			} else {
				applyto.QuiverCallCount = 0;
			}
			break;
		}
		case 60001216: // �����
		case 60001217: { // ���� ���
			int skillid = sourceid;
			if (applyto.getBuffedValue(BuffStats.RESHUFFLE_MODE) != null) {
				if (applyto.getSkillLevel(60001216) > 0) {
					applyto.cancelEffectFromBuffStat(BuffStats.RESHUFFLE_MODE, 60001217);
				}
				if (applyto.getSkillLevel(60001217) > 0) {
					applyto.cancelEffectFromBuffStat(BuffStats.RESHUFFLE_MODE, 60001216);
				}
			}
			break;
		}
			// �� ���� �ҵ�
		case 61101002:
		case 61110211:
		case 61120007:
		case 61121217: {
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.WILL_OF_SWORD,
							effects.getStats("cooltime"), false));
			applyto.getClient().getSession().write(KaiserSkill.giveWillofSword(applyto, sourceid, localDuration, stat));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto, KaiserSkill.giveForeignWillofSword(applyto, sourceid, stat),
						false);
			}
			if (applyto.getCooldownLimit(61101002) == 0) {
				SkillStatEffect effect = SkillFactory.getSkill(61101002).getEffect(applyfrom.getSkillLevel(61101002));
				applyto.send(MainPacketCreator.skillCooldown(61101002, effect.getCooldown()));
				applyto.addCooldown(61101002, System.currentTimeMillis(), effect.getCooldown() * 1000,
						BuffTimer.getInstance().schedule(new CancelCooldownAction(applyto, 61101002),
								effect.getCooldown() * 1000));
			}
			normal = false;
			break;
		}
		case 61111008: // ���̳� �ǱԷ��̼� (3��)
		case 61120008:
		case 61121053: { // ���̳� �ǱԷ��̼� (4��)
			applyto.isFinalFiguration = true;
			applyto.getStat().setMorph(0);
			applyto.getClient().send(KaiserSkill.giveMorphGauge(applyto.getStat().addMorph(0)));
			if (!applyto.isHidden()) {
				Triple<BuffStats, Integer, Boolean> triple = statups.get(0);
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), statups, this), false);
			}
			if (applyto.getBuffedValue(BuffStats.WILL_OF_SWORD) != null) {
				applyto.cancelEffectFromBuffStat(BuffStats.WILL_OF_SWORD, -1);
				if (applyto.getSkillLevel(61120007) > 0) {
					SkillFactory.getSkill(61121217).getEffect(applyto.getSkillLevel(61120007)).applyTo(applyto);
				} else if (applyto.getSkillLevel(61101002) > 0) {
					SkillFactory.getSkill(61110211).getEffect(applyto.getSkillLevel(61101002)).applyTo(applyto);
				}
			}
			break;
		}
		case 65101002: { // �Ŀ� Ʈ������
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.giveForeignBuff(applyto.getId(), this.statups, this), false);
			break;
		}
		case 4331002: { // Mirror Image
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 14111024: {
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOW_SERVANT, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 1101013:
		case 11111001: { // Combo
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.COMBO, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 3101004:
		case 3201004:
		case 13101003:
		case 33101003: { // Soul Arrow
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOULARROW, 0, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 4111002:
		case 4211008:
		case 36111006: {// ���߾� ��������
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SHADOWPARTNER, 0, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			showEffect = true;
			break;
		}
		case 2320011:
		case 2220010:
		case 2120010:
			applyto.send(MainPacketCreator.giveArcane(sourceid, getSkillStats().getStats("x") * applyto.acaneAim,
					applyto.getAllLinkMid(), localDuration));
			normal = false;
			break;
		case 21101006:
		case 21111005:
		case 15101006: { // Soul Arrow
			if (applyto.isHidden()) {
				break;
			}
			final List<Triple<BuffStats, Integer, Boolean>> statzt = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.WK_CHARGE, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), statzt, this),
					false);
			break;
		}
		case 11001021: // �ҵ� ���� ����Ʈ
		case 11121054: { // �ҿ� ����
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_ACC,
							(sourceid == 11001021 ? 1 : 2), false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
				break;
			}
			break;
		}
		case 11101022: // ���� ��
		case 11121011: { // �ַ糪 Ÿ�� : ���� ��
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DMG_DEC, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
				break;
			}
			break;
		}
		case 11111022: // ����¡ ��
		case 11121012: { // �ַ糪 Ÿ�� : ����¡ ��
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DMG_DEC, 2, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
				break;
			}
			break;
		}
		case 11121005: { // �ַ糪 Ÿ��
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOLUNA_TIME, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
				break;
			}
			break;
		}
		case 1211006: // ����Ʈ�� ���� �̿�
		case 1211004:
		case 1221004:
			List<Triple<BuffStats, Integer, Boolean>> statt = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.WK_CHARGE, 1, false));
			if (applyto.getBuffedValue(BuffStats.WK_CHARGE) != null
					&& applyto.getBuffedValue(BuffStats.WK_CHARGE, 1211008) != null
					&& applyto.getBuffedValue(BuffStats.LIGHTNING_CHARGE) == null) {
				applyto.cancelEffectFromBuffStat(BuffStats.WK_CHARGE, -1);
				SkillFactory.getSkill(1211008).getEffect(applyto.getSkillLevel(1211008)).applyBuffEffect(applyto,
						applyto, primary, true);
			}
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), statt, this), false);
			}
			break;
		case 1211008: // ����Ʈ�� ����
			List<Triple<BuffStats, Integer, Boolean>> stattt = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.WK_CHARGE, 1, false));
			if ((applyto.getBuffedValue(BuffStats.WK_CHARGE) != null
					&& applyto.getBuffedValue(BuffStats.WK_CHARGE, 1211008) == null) || lightCharge) {
				this.statups.clear();
				this.statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.LIGHTNING_CHARGE, 1, false));
				if (!lightCharge) {
					this.statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MATK,
							getSkillStats().getStats("mad"), false));
				}
				if (!applyto.isHidden()) {
					applyto.getMap().broadcastMessage(applyto,
							MainPacketCreator.giveForeignBuff(applyto.getId(), stattt, this), false);
				}
			}
			break;
		case 35111004: { // ��� �ӽŰ�
			if (applyto.getBuffedValue(BuffStats.MECH_CHANGE) != null
					&& applyto.getBuffedValue(BuffStats.MECH_CHANGE) == 35121005) {
				SkillFactory.getSkill(35121013).getEffect(applyto.getSkillLevel(35121013)).applyBuffEffect(applyto,
						applyto, primary, false);
				return;
			}
			List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.MECH_CHANGE, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			}
			break;
		}
		case 35001001: // �÷��� ��ó
		case 35101009: { // ��ȭ�� �÷��� ��ó
			List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.MECH_CHANGE, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			}
			break;
		}
		case 35121013: { // ��Ż�Ƹ� : ���ӽŰ�
			List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.MECH_CHANGE, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			}
		}
		case 23111005:
			List<Triple<BuffStats, Integer, Boolean>> statttt = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.DAMAGE_RESIST, 1, false));
			if (!applyto.isHidden()) {
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), statttt, this), false);
			}
			break;
		case 2022125:
			statups.clear();
			SkillStatEffect eff = SkillFactory.getSkill(1310016).getEffect(applyto.getSkillLevel(1310016));
			statups.add(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.ACC, eff.getSkillStats().getStats("acc"), false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.AVOID, eff.getSkillStats().getStats("eva"),
					false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.WATK, eff.getSkillStats().getStats("epad"),
					false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.WDEF, eff.getSkillStats().getStats("epdd"),
					false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MDEF, eff.getSkillStats().getStats("emdd"),
					false));
			effects.setStats("time", eff.getSkillStats().getStats("time"));
			localDuration = effects.getStats("time");
			break;
		case 3220005: { // ���Ǹ� ��ũ : ������
			SkillStatEffect eff_ = SkillFactory.getSkill(3211005).getEffect(applyto.getSkillLevel(3211005));
			effects.setStats("time", eff_.getSkillStats().getStats("time"));
			localDuration = eff_.getDuration();
			applyto.send(MainPacketCreator.giveSpiritLink(localDuration, 3211005, 3220005));
			normal = false;
			break;
		}
		case 3120006: { // ���Ǹ� ��ũ : �Ǵн�
			SkillStatEffect eff_ = SkillFactory.getSkill(3111005).getEffect(applyto.getSkillLevel(3111005));
			effects.setStats("time", eff_.getSkillStats().getStats("time"));
			localDuration = eff_.getDuration();
			applyto.send(MainPacketCreator.giveSpiritLink(localDuration, 3111005, 3120006));
			normal = false;
			break;
		}
		case 20031210: { // ���� ������Ʈ - 120725 �߰�
			if (applyto.getCardStack() < 40) {
				applyto.getClient().getSession().close();
				return;
			}
			applyto.setCardStack(0);
			int skillid = 0;
			if (applyto.getSkillLevel(24120002) > 0) {
				skillid = 24120002;
			} else if (applyto.getSkillLevel(24100003) > 0) {
				skillid = 24100003;
			}
			if (skillid == 0) {
				System.err.println("phantom judgement returned...");
				return;
			}
			int rand = Randomizer.nextBoolean() ? 1 : 0;
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.absorbingCardStack(applyto.getId(), 0, skillid, true, 5), true);
			applyto.getMap().broadcastMessage(
					MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand, 1, true, false));
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.absorbingCardStack(applyto.getId(), 2, skillid, true, 5), true);
			applyto.getMap().broadcastMessage(
					MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand, 3, true, false));
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.absorbingCardStack(applyto.getId(), 4, skillid, true, 5), true);
			applyto.send(MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand, 1, false, false));
			// 0 : ũ��Ƽ��, 1 : �����۵�ӷ� 2 : ���� 3 : ���� 4: ����
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.PHANTOM_JUDGEMENT, rand == 0 ? 5 : 10, false));
			applyto.send(MainPacketCreator.givePhantomJudgement(sourceid, getDuration(), stat, rand + 1));
			statups = stat;
			normal = false;
			break;
		}
		case 20031209: { // ������Ʈ
			if (applyto.getCardStack() < 20) {
				applyto.getClient().getSession().close();
				return;
			}
			applyto.setCardStack(0);
			int skillid = 0;
			if (applyto.getSkillLevel(24120002) > 0) {
				skillid = 24120002;
			} else if (applyto.getSkillLevel(24100003) > 0) {
				skillid = 24100003;
			}
			if (skillid == 0) {
				System.err.println("phantom judgement returned...");
				return;
			}
			int rand = Randomizer.nextBoolean() ? 1 : 0;
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.absorbingCardStack(applyto.getId(), 0, skillid, true, 5), true);
			applyto.getMap().broadcastMessage(
					MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand, 1, true, false));
			applyto.send(MainPacketCreator.showRandBuffEffect(applyto.getId(), sourceid, rand, 1, false, false));
			// 0 : ũ��Ƽ��, 1 : �����۵�ӷ�
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections.singletonList(
					new Triple<BuffStats, Integer, Boolean>(BuffStats.PHANTOM_JUDGEMENT, rand == 0 ? 5 : 10, false));
			applyto.send(MainPacketCreator.givePhantomJudgement(sourceid, getDuration(), stat, rand + 1));
			statups = stat;
			normal = false;
			break;
		}
		case 27100003: { // ���� ���� ��ũ�Ͻ�
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.BLESS_OF_DARKNESS,
							Integer.valueOf(applyto.getBlessOfDark()), false));
			applyto.getClient().getSession()
					.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat, this, null));
			normal = false;
			break;
		}
		case 31011001: {
			applyto.exeedCount = 0;
			applyto.getClient().getSession().write(MainPacketCreator.cancelExeed());
			applyto.addHP((int) ((applyto.getStat().getCurrentMaxHp() * (level / 100.0D)) * (getX() / 100.0D)));
			break;
		}
		case 27101202: {
			showEffect = false;
			break;
		}
		case 27121054: {
			applyequilibriumBuff(applyto, true);
			normal = false;
			showEffect = false;
			break;
		}
		case 36111003: {
			statups.clear();
			if (applyto.dualBrid != 0) {
				effects.setStats("prop", effects.getStats("prop") - effects.getStats("y"));
			}
			effects.setStats("x", applyto.dualBrid);
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_CRESSENDOR, effects.getStats("prop"),
					false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.ARCANE_AIM,
					effects.getStats("z") * applyto.dualBrid, false));
			break;
		}
		case 27121005: {
			statups.clear();
			applyto.acaneAim = applyto.acaneAim == 0 ? 1 : applyto.acaneAim;
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.DARK_CRESSENDOR, applyto.acaneAim, false));
			effects.setStats("x", applyto.acaneAim);
			break;
		}
		case 3110012: {
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CONSENTRATION, applyto.acaneAim, false));
			if (applyto.getLastCombo() + 90000 < System.currentTimeMillis()) {
				applyto.acaneAim = 0;
			}
			break;
		}
		case 4221054: {
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_BUFFNON, applyto.acaneAim, false));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
					applyto.acaneAim * getY(), true));
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.CR_PERCENT, applyto.acaneAim * getX(), true));
			break;
		}
		case 15120003:
		case 15111022: {
			statups.clear();
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.PERCENT_DAMAGE_BUFF,
					applyto.acaneAim * getY(), true));
			applyto.acaneAim = 0;
			applyto.cancelEffectFromBuffStat(BuffStats.IGNORE_DEFENCE_R, 15001022);
			break;
		}
		case 2111011: {
			this.stackskill = applyto.acaneAim;
		}
		case 35121005: {
			applyto.checkMech = true;
			break;
		}
		case 15001022: {
			if (applyto.acaneAim > 0) {
				statups.clear();
				statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.IGNORE_DEFENCE_R,
						effects.getStats("x") * applyto.acaneAim, false));
				effects.setStats("y", applyto.acaneAim);
			}
			break;
		}
		case 1311013: {
			if (applyfrom.getSkillLevel(1301013) > 0) {
				SkillFactory.getSkill(1301013).getEffect(applyfrom.getSkillLevel(131013)).applyTo(applyto);
				return;
			}
		}
		case 1321015: {
			applyfrom.cancelEffectFromBuffStat(BuffStats.BEHOLDER, 1301013);
			break;
		}
		case 30021237: {
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.EVIETION_REVERTY, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 65120006: { // ���Ǵ�Ƽ IV
			applyto.send(MainPacketCreator.giveAffinity(sourceid, this.getSkillStats().getStats(("y")), 5000));
			break;
		}
		case 65121004: {
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.S_SHARP_EYES, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 65121054: {
			final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
					.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.RECHARGE, 1, false));
			applyto.getMap().broadcastMessage(applyto, MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this),
					false);
			break;
		}
		case 100001268: { // ������ ��ȣ
			statups.clear();
			if (GameConstants.isZero(applyto.getJob())) {
				statups.add(
						new Triple<BuffStats, Integer, Boolean>(BuffStats.MAPLE_WARRIOR, effects.getStats("x"), false));
			}
			statups.add(new Triple<BuffStats, Integer, Boolean>(BuffStats.MAX_DAMAGE, 2050000000, true));
			effects.setStats("time", Integer.MAX_VALUE);
			break;
		}
			/* ���� */
		default:
			if (isMorph() || isPirateMorph()) {
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.MORPH,
								Integer.valueOf(getMorph(applyto)), false));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			} else if (isInflation()) {
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.INFLATION,
								Integer.valueOf(getInflation()), false));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			} else if (isMonsterRiding()) {
				int mountid = parseMountInfo(applyto, sourceid);
				if (sourceid == 33001001) { // ��Ծ� ���̵�
					mountid = GameConstants.getJaguarIdByMob(applyto.getKeyValue2("CapturedJaguar"));
					applyto.getClient().getSession().write(MainPacketCreator.giveJaguarRiding(mountid, sourceid));
					applyto.getMap().broadcastMessage(applyto,
							MainPacketCreator.showMonsterRiding(applyto.getId(), mountid, sourceid), false);
					applyto.setKeyValue2("mountid", mountid);
					applyto.setKeyValue2("mountskillid", sourceid);
				} else if (sourceid == 35001002) { // ������Ÿ��
					applyto.send(MechanicSkill.giveProtoType(sourceid, effects.getStats("time"), mountid));
					if (!applyto.isHidden()) {
						applyto.getMap().broadcastMessage(applyto,
								MainPacketCreator.showMonsterRiding(applyto.getId(), mountid, sourceid), false);
					}
					applyto.setKeyValue2("mountid", mountid);
					applyto.setKeyValue2("mountskillid", sourceid);
				} else if (mountid != 0) {
					applyto.getClient().getSession().write(MainPacketCreator.giveMount(mountid, sourceid));
					applyto.getMap().broadcastMessage(applyto,
							MainPacketCreator.showMonsterRiding(applyto.getId(), mountid, sourceid), false);
					applyto.setKeyValue2("mountid", mountid);
					applyto.setKeyValue2("mountskillid", sourceid);
				} else {
					return;
				}
				normal = false;
			} else if (isInflation()) {
				if (applyto.isHidden()) {
					break;
				}
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.INFLATION,
								effects.getStats("inflation"), false));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
			} else if (isSoaring()) {
				final List<Triple<BuffStats, Integer, Boolean>> stat = Collections
						.singletonList(new Triple<BuffStats, Integer, Boolean>(BuffStats.SOARING, 1, false));
				applyto.getMap().broadcastMessage(applyto,
						MainPacketCreator.giveForeignBuff(applyto.getId(), stat, this), false);
				applyto.getClient().getSession()
						.write(MainPacketCreator.giveBuff(sourceid, localDuration, stat, this, null));
				normal = false;
			}
			break;
		}

		// Broadcast effect to self
		if (showEffect) {
			applyto.getMap().broadcastMessage(applyto,
					MainPacketCreator.showBuffeffect(applyto.getId(), applyto.getLevel(), sourceid, 1), false);
		}
		if (!isMonsterRiding_()) { // summons are cannot canceled by this.
			applyto.cancelEffect(this, true, -1);
		}
		if (normal && statups.size() > 0 && (getSummonMovementType() == null || isBeholder())) {
			long overlap_magic = (long) (System.currentTimeMillis() % 1000000000);
			Map<BuffStats, List<StackedSkillEntry>> stacked = applyto.getStackSkills();
			for (Triple<BuffStats, Integer, Boolean> statup : statups) {
				if (statup.getThird()) {
					if (!stacked.containsKey(statup.getFirst())) {
						stacked.put(statup.getFirst(), new ArrayList<StackedSkillEntry>());
					}
					stacked.get(statup.getFirst()).add(new StackedSkillEntry(skill ? getSourceId() : -getSourceId(),
							statup.getSecond(), overlap_magic, localDuration));
				}
			}
			applyto.getClient().getSession().write(
					MainPacketCreator.giveBuff((skill ? sourceid : -sourceid), localDuration, statups, this, stacked));
		}
		final long starttime = System.currentTimeMillis();
		if ((starttime + localDuration) - System.currentTimeMillis() > 0) {
			final CancelEffectAction cancelAction = new CancelEffectAction(applyto, this, starttime);
			final ScheduledFuture<?> schedule = BuffTimer.getInstance().schedule(cancelAction,
					((starttime + localDuration) - System.currentTimeMillis()));
			applyto.registerEffect(this, starttime, schedule);
			applyto.refreshMaxHpMp();
		}
	}

	public static final int parseMountInfo(final MapleCharacter player, final int skillid) {
		switch (skillid) {
		case 1004: // Monster riding
		case 10001004:
		case 20001004:
		case 20011004:
		case 30001004:
		case 20021004:
		case 20031004:
		case 30011004:
		case 50001004:
			if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -122) != null) {
				return player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -122).getItemId();
			}
			if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -22) != null) {
				return player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -22).getItemId();
			}
			return 0;
		case 35001002:
		case 35120000:
			return 1932016;
		default: // default parses all
			return GameConstants.getMountItem(skillid, player);
		}
	}

	private final int calcHPChange(final MapleCharacter applyfrom, final boolean primary) {
		int hpchange = 0;
		if (effects.getStats("hp") != 0) {
			if (!skill) {
				hpchange += effects.getStats("hp");
				if (applyfrom.hasDisease(DiseaseStats.ZOMBIFY)) {
					hpchange /= 2;
				}
				if (applyfrom.getSkillLevel(30000002) > 0) { // ���Ǽǽ�
					double percent = (double) (SkillFactory.getSkill(30000002).getEffect(1).getX() / 100.0D);
					hpchange = (int) ((double) hpchange * percent);
				} else if (applyfrom.getSkillLevel(30010002) > 0) { // ���Ǽǽ�
					double percent = (double) (SkillFactory.getSkill(30010002).getEffect(1).getX() / 100.0D);
					hpchange = (int) ((double) hpchange * percent);
				}
			} else { // assumption: this is heal
				if (isHeal()) {
					int hpPercent = effects.getStats("hp");
					hpchange += (int) (applyfrom.getStat().getCurrentMaxHp() * ((double) hpPercent / 100.0D));
					if (applyfrom.hasDisease(DiseaseStats.ZOMBIFY)) {
						hpchange = -hpchange;
					}
				} else {
					hpchange += effects.getStats("hp");
				}
			}
		}
		if (effects.getStats("hpR") != 0) {
			hpchange += (int) (applyfrom.getStat().getCurrentMaxHp() * (effects.getStats("hpR") / 100.0D));
		}
		if (primary) {
			if (effects.getStats("hpCon") != 0) {
				hpchange -= effects.getStats("hpCon");
			}
		}

		switch (this.sourceid) {
		case 4211001: // Chakra
			// final PlayerStats stat = applyfrom.getStat();
			// int v42 = getY() + 100;
			// int v38 = Randomizer.rand(100, 200) % 0x64 + 100;
			// hpchange = (int) ((v38 * stat.getLuk() * 0.033 + stat.getDex()) *
			// v42 * 0.002);
			hpchange += (getY() / 100.0) * applyfrom.getStat().getMaxHp();
			break;
		}
		return hpchange;
	}

	private static final int getElementalAmp(final int job) {
		switch (job) {
		case 211:
		case 212:
			return 2110001;
		case 221:
		case 222:
			return 2210001;
		case 1211:
		case 1212:
			return 12110001;
		case 2215:
		case 2216:
		case 2217:
		case 2218:
			return 22150000;
		}
		return -1;
	}

	private final int calcMPChange(final MapleCharacter applyfrom, final boolean primary) {
		int mpchange = 0;
		if (isTeleport()) {
			if (applyfrom.getBuffedValue(BuffStats.TELEPORT_MASTERY) != null) {
				mpchange -= applyfrom.getBuffedValue(BuffStats.TELEPORT_MASTERY).intValue();
			}
		}

		if (effects.getStats("mp") != 0) {
			// if (primary) {
			// mpchange += alchemistModifyVal(applyfrom, effects.getStats("mp"),
			// true);
			// } else {
			//
			// }
			mpchange += effects.getStats("mp");
		}

		if (effects.getStats("mpR") != 0) {
			mpchange += (int) (applyfrom.getStat().getCurrentMaxMp() * effects.getStats("mpR"));
		}
		if (primary) {
			if (effects.getStats("mpCon") != 0) {
				double mod = 1.0;

				final int ElemSkillId = getElementalAmp(applyfrom.getJob());
				if (ElemSkillId != -1) {
					final ISkill amp = SkillFactory.getSkill(ElemSkillId);
					final int ampLevel = applyfrom.getSkillLevel(amp);
					if (ampLevel > 0) {
						SkillStatEffect ampStat = amp.getEffect(ampLevel);
						mod = ampStat.getX() / 100.0;
					}
				}
				if (applyfrom.getBuffedValue(BuffStats.INFINITY) != null) {
					mpchange = 0;
				} else if (applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3111000) != null
						|| applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3211000) != null
						|| applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 13111001) != null) {
					mpchange -= effects.getStats("mpCon") * mod;
					Integer value = null;
					if (applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3111000) != null) {
						value = applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3111000);
					} else if (applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3211000) != null) {
						value = applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 3211000);
					} else if (applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 13111001) != null) {
						value = applyfrom.getBuffedValue(BuffStats.BUFF_MASTERY, 13111001);
					}
					mpchange = (int) (mpchange * (value.doubleValue() / 100.0D));
				} else if (applyfrom.getBuffedValue(BuffStats.ADVANCED_BLESSING) != null) {
					SkillStatEffect eff = applyfrom.getBuffedSkillEffect(BuffStats.ADVANCED_BLESSING);
					int reduce = eff.getSkillStats().getStats("mpConReduce");
					mpchange -= (int) (mpchange * ((double) reduce / 100.0D));
				} else {
					mpchange -= effects.getStats("mpCon") * mod;
				}
			}
			if (effects.getStats("forceCon") != 0) {
				if (applyfrom.getBuffedValue(BuffStats.INFINITY_FORCE) != null) {
					mpchange = 0;
				} else {
					mpchange = -effects.getStats("forceCon");
				}
			}
		}
		if (!skill && sourceid / 1000000 == 2 && GameConstants.isDemonSlayer(applyfrom.getJob())
				|| GameConstants.isDemonAvenger(applyfrom.getJob()) || GameConstants.isZero(applyfrom.getJob())) { // ����
																													// ���δ�
																													// ȸ����
																													// ����x
			mpchange = 0;
		}
		return mpchange;
	}

	private final int alchemistModifyVal(final MapleCharacter chr, int val, final boolean withX) {
		if (!skill) {
			final SkillStatEffect alchemistEffect = getAlchemistEffect(chr);
			if (alchemistEffect != null) {
				return (int) (val * ((withX ? alchemistEffect.getX() : alchemistEffect.getY()) / 100.0));
			}
		}
		if (chr.getBuffedValue(BuffStats.BUFF_MASTERY) != null) {
			if (chr.getJob() == 212 || chr.getJob() == 222 || chr.getJob() == 232) {
				val += (int) (val * (chr.getBuffedValue(BuffStats.BUFF_MASTERY).intValue() / 100.0D));
			}
		}
		return val;
	}

	private final SkillStatEffect getAlchemistEffect(final MapleCharacter chr) {
		ISkill al;
		switch (chr.getJob()) {
		case 411:
		case 412:
			al = SkillFactory.getSkill(4110000);
			if (chr.getSkillLevel(al) == 0) {
				return null;
			}
			return al.getEffect(chr.getSkillLevel(al));
		case 1411:
		case 1412:
			al = SkillFactory.getSkill(14110003);
			if (chr.getSkillLevel(al) == 0) {
				return null;
			}
			return al.getEffect(chr.getSkillLevel(al));
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
			al = SkillFactory.getSkill(30000002);
			if (chr.getSkillLevel(al) == 0) {
				return null;
			}
			return al.getEffect(chr.getSkillLevel(al));
		case 3001:
		case 3100:
		case 3110:
		case 3111:
		case 3112:
			al = SkillFactory.getSkill(30010002);
			if (chr.getSkillLevel(al) == 0) {
				return null;
			}
			return al.getEffect(chr.getSkillLevel(al));

		}
		return null;
	}

	public final void setSourceId(final int newid) {
		sourceid = newid;
	}

	private final boolean isGmBuff() {
		switch (sourceid) {
		case 1005: // echo of hero acts like a gm buff
		case 10001005: // cygnus Echo
		case 20001005: // Echo
		case 20011005:
		case 9001000: // GM dispel
		case 9001001: // GM haste
		case 9001002: // GM Holy Symbol
		case 9001003: // GM Bless
		case 9001005: // GM resurrection
		case 9001008: // GM Hyper body
			return true;
		default:
			return false;
		}
	}

	private final boolean isEnergyCharge() {
		return skill && (sourceid == 5100015 || sourceid == 15100004);
	}

	private final boolean isMonsterBuff() {
		switch (sourceid) {
		case 1211013:
		case 2121006:
		case 2221011:
		case 4111003:
		case 4121015:
		case 4321002:
		case 22141003:
		case 22121000:
		case 22161002:
		case 22151001:
		case 25111206:
		case 35111005:
		case 32120000:
		case 32120001:
			return skill;
		}
		return false;
	}

	public final boolean isMonsterRiding_() {
		return skill && (sourceid == 1004 || sourceid == 10001004 || sourceid == 20001004 || sourceid == 20011004
				|| sourceid == 30001004 && (sourceid >= 80001000 && sourceid <= 80001033) || sourceid == 80001037
				|| sourceid == 80001038 || sourceid == 80001039 || sourceid == 80001044
				|| (sourceid >= 80001082 && sourceid <= 80001090) || sourceid == 30011159 || sourceid == 30011109
				|| sourceid == 33001001 || sourceid == 35001002);
	}

	public final boolean isMonsterRiding() {
		return skill && (isMonsterRiding_() || GameConstants.checkMountItem(sourceid) != 0);
	}

	private final boolean isPartyBuff() {
		if (lt == null || rb == null) {
			return false;
		}
		switch (sourceid) {
		case 1211003:
		case 1211004:
		case 1211005:
		case 1211006:
		case 1211007:
		case 1211008:
		case 1221003:
		case 1221004:
		case 4311001:
		case 11111007:
		case 12101005:
			return false;
		}
		return true;
	}

	public final boolean isHeal() {
		return sourceid == 2301002 || sourceid == 9001000;
	}

	public final boolean isResurrection() {
		return sourceid == 9001005 || sourceid == 2321006;
	}

	public final boolean isTimeLeap() {
		return sourceid == 5121010;
	}

	public final boolean isTimeHolding() {
		return sourceid == 100001274;
	}

	public final int getHp() {
		return effects.getStats("hp");
	}

	public final int getMp() {
		return effects.getStats("m");
	}

	public final int getMastery() {
		return effects.getStats("mastery");
	}

	public final int getWatk() {
		return effects.getStats("pad");
	}

	public final int getMatk() {
		return effects.getStats("mad");
	}

	public final int getWdef() {
		return effects.getStats("pdd");
	}

	public final int getMdef() {
		return effects.getStats("mdd");
	}

	public final int getAcc() {
		return effects.getStats("acc");
	}

	public final int getAvoid() {
		return effects.getStats("eva");
	}

	public final int getHands() {
		return effects.getStats("hands");
	}

	public final int getSpeed() {
		return effects.getStats("speed");
	}

	public final int getJump() {
		return effects.getStats("jump");
	}

	public final int getStatusDuration() {
		if (sourceid == 31121003) { // ����ũ����
			return effects.getStats("subTime") * 1000;
		}
		if (statusTime > 0) {
			return statusTime;
		}
		return effects.getStats("time");
	}

	public final int getDuration() {
		if (sourceid == 31121003) { // ����ũ����
			return effects.getStats("subTime") * 1000;
		}
		if (effects.getStats("dotTime") > 0) {
			return effects.getStats("dotTime") * 1000;
		}
		if (effects.getStats("time") < 100) {
			return effects.getStats("time") * 1000;
		}
		return effects.getStats("time");
	}

	public final boolean isOverTime() {
		return overTime;
	}

	public final List<Triple<BuffStats, Integer, Boolean>> getStatups() {
		return statups;
	}

	public final boolean sameSource(final SkillStatEffect effect) {
		return this.sourceid == effect.sourceid && this.skill == effect.skill;
	}

	public final int getX() {
		return effects.getStats("x");
	}

	public final int getV() {
		return effects.getStats("v");
	}

	public final int getValue(String value) {
		return effects.getStats(value);
	}

	public final int getY() {
		return effects.getStats("y");
	}

	public final int getZ() {
		return effects.getStats("z");
	}

	public final int getW() {
		return effects.getStats("w");
	}

	public final int getDamage() {
		return effects.getStats("damage");
	}

	public final byte getAttackCount() {
		return (byte) effects.getStats("attackCount");
	}

	public final byte getBulletCount() {
		return (byte) effects.getStats("bulletCount");
	}

	public final int getBulletConsume() {
		return effects.getStats("bulletConsume");
	}

	public final int getOnActive() {
		return effects.getStats("onActive");
	}

	public final byte getMobCount() {
		return (byte) effects.getStats("mobCount");
	}

	public final int getMoneyCon() {
		return effects.getStats("moneyCon");
	}

	public final int getCooldown() {
		return effects.getStats("cooltime");
	}

	public final int getMaxDamageOver() {
		return effects.getStats("indieMaxDamageOver");
	}

	public final int getPowerEnergy() {
		return effects.getStats("powerCon");
	}

	public final Map<MonsterStatus, Integer> getMonsterStati() {
		return monsterStatus;
	}

	public final boolean isHide() {
		return skill && sourceid == 9001004;
	}

	public final boolean isDragonBlood() {
		return skill && sourceid == 1311008;
	}

	public final boolean isBerserk() {
		return skill && sourceid == 1320006;
	}

	public final boolean isBeholder() {
		return skill && sourceid == 1321007 || sourceid == 1301013;
	}

	public final boolean isComboRecharge() {
		return skill && sourceid == 21111009;
	}

	public final boolean isMPRecovery() {
		return skill && sourceid == 5101005;
	}

	public final boolean isMagicDoor() {
		return skill && sourceid == 2311002;
	}

	public final boolean isMesoGuard() {
		return skill && sourceid == 4201011;
	}

	public final boolean isMechDoor() {
		return skill && sourceid == 35101005;
	}

	public final boolean isMechPassive() {
		switch (sourceid) {
		case 35121013:
			return true;
		}
		return false;
	}

	public final boolean isCharge() {
		switch (sourceid) {
		case 1211006:
		case 1211003:
		case 1211004:
		case 1211005:
		case 1211007:
		case 1211008:
		case 1221003:
		case 1221004:
		case 15101006:
		case 21101006:
			return skill;
		}
		return false;
	}

	public final boolean isFinalAttack() {
		switch (sourceid) {
		case 13101002:
		case 11101002:
			return skill;
		}
		return false;
	}

	public final boolean isMistPoison() {
		switch (sourceid) {
		case 2111003:
		case 14111006:
		case 22181002:
		case 80001431:
			return true;
		}
		return false;
	}

	public final boolean isEpicAdventure() {
		switch (sourceid) {
		case 1121053:
		case 1221053:
		case 1321053:
		case 2121053:
		case 2221053:
		case 2321053:
		case 3121053:
		case 3221053:
		case 4121053:
		case 4221053:
		case 4341053:
		case 5121053:
		case 5221053:
		case 5321053:
		case 27121053:
		case 25121132:
		case 21121053:
		case 22171053:
		case 23121053:
		case 24121053:
			return true;
		}
		return false;
	}

	public final boolean isRecovery() {
		switch (sourceid) {
		case 22161003:
			return true;
		}
		return false;
	}

	public final boolean isBurningRegion() {
		switch (sourceid) {
		case 12121005:
			return true;
		}
		return false;
	}

	public final boolean isTimeCapsule() {
		switch (sourceid) {
		case 36121007:
			return true;
		}
		return false;
	}

	public final boolean isPoison() {
		switch (sourceid) {
		case 2111003:
		case 2101005:
		case 2111006:
		case 2221003:
		case 3111003:
		case 25111206:
		case 80001431:
			return skill;
		}
		return false;
	}

	private final boolean isMist() {
		return skill && (sourceid == 2111003 || sourceid == 2121006 || sourceid == 100001261 || sourceid == 2311011
				|| sourceid == 35121010 || sourceid == 4221006 || sourceid == 14111006 || sourceid == 22181002
				|| sourceid == 22161003 || sourceid == 32121006 || sourceid == 4121015 || sourceid == 61121105
				|| sourceid == 36121007 || sourceid == 25111206 || sourceid == 12121005 || sourceid == 35121052
				|| sourceid == 80001431);
	}

	public final boolean isSpiritClaw() {
		return skill && (sourceid == 4111009 || sourceid == 5201008 || sourceid == 14111025);
	}

	private final boolean isDispel() {
		return skill && (sourceid == 2311001 || sourceid == 9001000);
	}

	private final boolean isHeroWill() {
		switch (sourceid) {
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
		case 5121008:
		case 5221010:
		case 21121008:
		case 22171004:
		case 4341008:
		case 80001478: // ���� ����Ʈ ��
			return skill;
		}
		return false;
	}

	public final boolean isAranCombo() {
		return sourceid == 21000000;
	}

	public final boolean isMechChange() {
		switch (sourceid) {
		case 35121054:
		case 35111004: // siege
		case 35001001: // flame
		case 35101009:
		case 35121013:
		case 35121005:
		case 35100008:
			return skill;
		}
		return false;
	}

	public final boolean isPirateMorph() {
		switch (sourceid) {
		case 15111002:
		case 5111005:
		case 5121003:
			return skill;
		}
		return false;
	}

	public final boolean isMorph() {
		return effects.getStats("morph") > 0;
	}

	public final boolean isInflation() {
		return effects.getStats("inflation") > 0;
	}

	public final int getMorph() {
		return effects.getStats("morph");
	}

	public final int getInflation() {
		return effects.getStats("inflation");
	}

	public final int getMorph(final MapleCharacter chr) {
		switch (effects.getStats("morph")) {
		case 1000:
		case 1100:
			return effects.getStats("morph") + chr.getGender();
		case 1003:
			return effects.getStats("morph") + (chr.getGender() * 100);
		}
		return effects.getStats("morph");
	}

	public final boolean isAddedByte() {
		switch (sourceid) {
		case 1002: // wtf is this lol
		case 4001005: // ���谡 ���̽�Ʈ, 1.2.220 Ok
		case 4001006: // ���谡 ���̽�Ʈ, 1.2.220 Ok
		case 4101004: // ���谡 ���̽�Ʈ, 1.2.220 Ok
		case 4201003: // ���谡 ���̽�Ʈ, 1.2.220 Ok
		case 4301003: // �����̵� ���� ���̽�Ʈ, 1.2.220 Ok
		case 4311001: // �����̵� ���� ���̽�Ʈ, 1.2.220 Ok
		case 5301003: // ĳ���� ĳ�� �ν���, 1.2.220 Ok
		case 5320008: // ĳ���� ��Ű����, 1.2.220 Ok
		case 9001001: // ��� ���̽�Ʈ, 1.2.220 Ok
		case 9001003: // ��� ����� �ູ, 1.2.220 Ok
		case 14001022: // ����Ʈ��Ŀ ���̽�Ʈ, 1.2.220 Ok
		case 27121005: // ��̳ʽ� ��ũ ũ������, 1.2.220 Ok
		case 32101003: // ��Ʋ������ ���ο� ����, 1.2.220 Ok
		case 33111007: // ���ϵ� ���� ��Ʈ ��, 1.2.220 Ok
		case 30001001: // ���������� ����, 1.2.220 Ok
		case 30011001: // ���������� ����, 1.2.220 Ok
		case 35001001: // ��ī�� �÷��� ��ó, 1.2.220 Ok
		case 35101009: // ��ī�� ��ȭ�� �÷��� ��ó, 1.2.220 OK
		case 35121005: // ��ī�� ��Ż�Ƹ� : �̻�����ũ, 1.2.220 Ok
		case 35111004: // ��ī�� ��Ż�Ƹ� : ���ӽŰ�, 1.2.220 Ok
		case 35121013: // ��ī�� ��Ż�Ƹ� : ���ӽŰ�, 1.2.220 Ok
		case 35121054: // ��ī�� ��Ż�Ƹ� : ȣ����, 1.2.220 Ok
		case 61111008: // ī���� ���̳� �ǱԷ��̼�, 1.2.220 Ok
		case 61120008: // ī���� ���̳� �ǱԷ��̼�, 1.2.220 Ok
		case 61121053: // ī���� ���̳� �ǱԷ��̼�, 1.2.220 Ok
		case 80001427: // �ر��� �� ����, 1.2.220 Ok
		case 100001264: // ���� ����� ������Ʈ, 1.2.220 Ok
		case 100001272: // ���� Ÿ�� �����ε�, 1.2.220 Ok
			return true;
		}
		return false;
	}

	public final SummonMovementType getSummonMovementType() {
		switch (sourceid) {
		case 13120007:
		case 13111024:
		case 3211002:
		case 3111002:
		case 33111003:
		case 13111004:
		case 5211001:
		case 5220002:
		case 5321052:
		case 4341006:
		case 35111002:
		case 35111005:
		case 35111011:
		case 35121009:
		case 35121010:
		case 4111007:
		case 4211007:
		case 35121003:
		case 3120012:
		case 3220012:
		case 5321003:
		case 5321004:
		case 5320011:
		case 5211014:
		case 33101008:
		case 61111002:
		case 3221014:
		case 22171052:
		case 36121002:
		case 36121013:
		case 36121014:
		case 14121003:
			return SummonMovementType.STATIONARY;
		case 3101007:
		case 3201007:
		case 33111005:
		case 33101011:
		case 23111008:
		case 23111009:
		case 23111010:
			return SummonMovementType.CIRCLE_FOLLOW;
		case 5211002:
			return SummonMovementType.CIRCLE_STATIONARY;
		case 5211011:
		case 5211015:
		case 5211016:
		case 35121011:
		case 2111010:
			return SummonMovementType.WALK_STATIONARY;
		case 1301013:
		case 1321007:
		case 1311014:
		case 2121005:
		case 2221005:
		case 2211011:
		case 2321003:
		case 3111005:
		case 3211005:
		case 12111004:
		case 11001004:
		case 12001004:
		case 13001004:
		case 14001005:
		case 15001004:
		case 35111001:
		case 35111010:
		case 35111009:
		case 1085:
		case 1087:
		case 1090:
		case 1179:
		case 10001085:
		case 10001087:
		case 10001090:
		case 10001179:
		case 20001085:
		case 20001087:
		case 20001090:
		case 20001179:
		case 20011085:
		case 20011087:
		case 20011090:
		case 20011179:
		case 20021085:
		case 20021087:
		case 20021090:
		case 20021179:
		case 20031085:
		case 20031087:
		case 20031090:
		case 20031179:
		case 20041085:
		case 20041087:
		case 20041090:
		case 20041179:
		case 30001085:
		case 30001087:
		case 30001090:
		case 30001179:
		case 30011085:
		case 30011087:
		case 30011090:
		case 30011179:
		case 30021085:
		case 30021087:
		case 30021090:
		case 30021179:
		case 50001085:
		case 50001087:
		case 50001090:
		case 50001179:
		case 60001085:
		case 60001087:
		case 60001090:
		case 60001179:
		case 60011085:
		case 60011087:
		case 60011090:
		case 60011179: // Angel
		case 12120013:
		case 12120014:
		case 80001217:
		case 80001219:
		case 80001266:
		case 80001269:
		case 80001270:
		case 80001281:
		case 80001282:
		case 80001322:
		case 80001323:
		case 80001341:
		case 80001395:
		case 80001396:
		case 80001493:
		case 80001494:
		case 80001495:
		case 80001496:
		case 80001497:
		case 80001498:
		case 80001499:
		case 80001500:
		case 80001501:
		case 80001502:
			return SummonMovementType.FOLLOW;
		case 101100100:
		case 101100101:
			return SummonMovementType.ZEROWEAPON;
		case 14000027: // ������ ��Ʈ
			return SummonMovementType.BIRD_FOLLOW;
		case 14111024: // ������ ����Ʈ
		case 14121054: // ������ �Ϸ���
		case 14121055: // ������ �Ϸ���
		case 14121056: // ������ �Ϸ���
			return SummonMovementType.SHADOW_SERVANT;
		}
		if (!skill) {
			return null;
		}
		return null;
	}

	public final boolean isSoaring() {

		switch (sourceid) {
		case 1026: // Soaring
		case 10001026: // Soaring
		case 20001026: // Soaring
		case 20011026: // Soaring
			return skill;
		}
		return false;
	}

	public final boolean isSkill() {
		return skill;
	}

	public final int getSourceId() {
		return sourceid;
	}

	/**
	 *
	 * @return true if the effect should happen based on it's probablity, false
	 *         otherwise
	 */
	public final boolean makeChanceResult() {
		return effects.getStats("prop") == 100 || Randomizer.nextInt(100) < effects.getStats("prop");
	}

	public SkillStats getSkillStats() {
		return effects;
	}

	public final int getProb() {
		return effects.getStats("prop");
	}

	public final int getCr() {
		return effects.getStats("cr");
	}

	public final int getCriticalMin() {
		return effects.getStats("criticaldamageMin");
	}

	public final int getCriticalMax() {
		return effects.getStats("criticaldamageMax");
	}

	public final int getAttackX() {
		return effects.getStats("padX");
	}

	public boolean isPhantomSkill() {
		return sourceid / 1000000 == 24;
	}

	public boolean isMagicCrash() {
		return sourceid == 1111007 || sourceid == 1211009 || sourceid == 1311007 || sourceid == 11111008
				|| sourceid == 51111005;
	}

	public boolean isComboAttack() {
		return sourceid == 1101013 || sourceid == 11111001;
	}

	public boolean isSoulStone() {
		return sourceid == 22181003;
	}

	public boolean isTeleport() {
		switch (sourceid) {
		case 32001002:
		case 22101001:
		case 12101003:
		case 2301001:
		case 2201002:
		case 2101002:
			return true;
		}
		return false;
	}

	public boolean isSTEP() {
		switch (sourceid) {
		case 2201002:
			return true;
		}
		return false;
	}

	public boolean isStaticSummon() {
		switch (sourceid) {
		case 13120007:
		case 13111024:
		case 3211002:
		case 3111002:
		case 33111003:
		case 13111004:
		case 5211001:
		case 5220002:
		case 4341006:
		case 35111002:
		case 35111005:
		case 35111011:
		case 35121009:
		case 35121010:
		case 4111007:
		case 4211007:
		case 35121003:
		case 3120012:
		case 3220012:
		case 5321003:
		case 5321004:
		case 5320011:
		case 5211014: // ��Ÿ ���͵�
		case 33101008:
		case 61111002: // ��Ʈ�� ���̵�
		case 22171052: // ���� ���н��巡��
		case 5321052: // �Ѹ� ĳ�� ���κ���
		case 14121003: // ��ũ�Ͻ� ����
		case 36121002: // Ȧ�α׷� �׷���Ƽ : ����
		case 36121013: // Ȧ�α׷� �׷���Ƽ : ����
		case 36121014: // Ȧ�α׷� �׷���Ƽ : ����
		case 2111010:
			return true;
		}
		return false;
	}

	public boolean isInfinity() {
		switch (sourceid) {
		case 2121004:
		case 2221004:
		case 2321004: // Infinity
			return true;
		}
		return false;
	}

	public boolean isSoulSkill() {
		switch (sourceid) {
		case 80001219:
		case 80001266:
		case 80001269:
		case 80001270:
		case 80001322:
		case 80001323:
		case 80001341:
		case 80001395:
		case 80001396:
		case 80001493:
		case 80001494:
		case 80001495:
		case 80001496:
		case 80001497:
		case 80001498:
		case 80001499:
		case 80001500:
		case 80001501:
		case 80001502:
			return true;
		}
		return false;
	}

	public boolean isDoubleDice(int id) {
		switch (id) {
		case 5120012:
		case 5220014:
		case 5320007:
		case 35120014:
			return true;
		}
		return false;
	}

	public static class CancelEffectAction implements Runnable {

		private final SkillStatEffect effect;
		private final WeakReference<MapleCharacter> target;
		private final long startTime;

		public CancelEffectAction(final MapleCharacter target, final SkillStatEffect effect, final long startTime) {
			this.effect = effect;
			this.target = new WeakReference<MapleCharacter>(target);
			this.startTime = startTime;
		}

		@Override
		public void run() {
			final MapleCharacter realTarget = target.get();
			if (realTarget != null && realTarget.getClient() != null) {
				realTarget.cancelEffect(effect, false, startTime);
			}
		}
	}

	public final byte getLevel() {
		return (byte) effects.getStats("level");
	}

	public final short getIgnoreMob() {
		return (short) effects.getStats("ignoreMob");
	}

	public final short getER() {
		return (short) effects.getStats("er");
	}

	public final int getPercentHP() {
		return effects.getStats("mhpR");
	}

	public final int getDAMRate() {
		return effects.getStats("damR");
	}

	public int getWDEFRate() {
		return effects.getStats("pddR");
	}

	public final int getLevelToWatk() {
		return effects.getStats("lv2pdX");
	}

	public final int getPercentMP() {
		return effects.getStats("mmpR");
	}

	public final int getLevelToMatk() {
		return effects.getStats("lv2mdX");
	}

	public final int getMPConsumeEff() {
		return effects.getStats("mpConEff");
	}

	public final int getPercentAcc() {
		return effects.getStats("accR");
	}

	public final int getPassiveSpeed() {
		return effects.getStats("psdSpeed");
	}

	public final int getPassiveJump() {
		return effects.getStats("psdJump");
	}

	public final int getLevelToDamage() {
		return effects.getStats("lv2damX");
	}

	public final int getSummonTimeInc() {
		return effects.getStats("summonTimeR");
	}

	public final int getEXPLossRate() {
		return effects.getStats("expLossReduceR");
	}

	public final int getASRRate() {
		return effects.getStats("asrR");
	}

	public final int getBuffTimeRate() {
		return effects.getStats("bufftimeR");
	}

	public final int getSuddenDeathR() {
		return effects.getStats("suddenDeathR");
	}

	public final int getCooltimeReduceR() {
		return effects.getStats("coolTimeR");
	}

	public final int getMesoAcquisition() {
		return effects.getStats("mesoR");
	}

	public final int getHpToDamage() {
		return effects.getStats("mhp2damX");
	}

	public final int getMpToDamage() {
		return effects.getStats("mmp2damX");
	}

	public final int getStrX() {
		return effects.getStats("strX");
	}

	public final int getDexX() {
		return effects.getStats("dexX");
	}

	public final int getIntX() {
		return effects.getStats("intX");
	}

	public final int getLukX() {
		return effects.getStats("lukX");
	}

	public final int getMaxHpX() {
		return effects.getStats("mhpX");
	}

	public final int getMaxMpX() {
		return effects.getStats("mmpX");
	}

	public final int getMagicX() {
		return effects.getStats("madX");
	}

	public int getBossDamage() {
		return effects.getStats("bdR");
	}

	public final int getPrice() {
		return effects.getStats("price");
	}

	public final int getExtendPrice() {
		return effects.getStats("extendPrice");
	}

	public final int getPeriod() {
		return effects.getStats("period");
	}

	public final int getReqGuildLevel() {
		return effects.getStats("reqGuildLevel");
	}

	public final int getKillingPoint() {
		return effects.getStats("kp");
	}

	public final byte getEXPRate() {
		return (byte) effects.getStats("expR");
	}

	public int getMDEFRate() {
		return effects.getStats("mddR");
	}

	public final int getDOT() {
		return effects.getStats("dot");
	}

	public final int getTime() {
		return effects.getStats("time");
	}

	public final int getSoulMPCon() {
		return effects.getStats("soulmpCon");
	}

	public final int getComboCon() {
		return effects.getStats("aranComboCon");
	}

	public final int getRange() {
		return effects.getStats("range");
	}

	public final boolean isMistEruption() {
		switch (sourceid) {
		case 2121003:
			return skill;
		}
		return false;
	}

	public final void applyPassive(final MapleCharacter applyto, final MapleMapObject obj) {
		if (makeChanceResult()) {
			switch (sourceid) { // MP eater
			case 2100000:
			case 2200000:
			case 2300000:
				if (obj == null || obj.getType() != MapleMapObjectType.MONSTER) {
					return;
				}
				final MapleMonster mob = (MapleMonster) obj; // x is absorb
																// percentage
				if (!mob.getStats().isBoss()) {
					final int absorbMp = Math.min((int) (mob.getMobMaxMp() * (getX() / 100.0)), mob.getMp());
					if (absorbMp > 0) {
						mob.setMp(mob.getMp() - absorbMp);
						applyto.getStat().setMp(applyto.getStat().getMp() + absorbMp);
						applyto.getClient().getSession()
								.write(MainPacketCreator.showOwnBuffEffect(sourceid, 1, applyto.getLevel(), level));
						applyto.getMap().broadcastMessage(applyto, MainPacketCreator.showBuffeffect(applyto.getId(),
								sourceid, 1, applyto.getLevel(), level), false);
					}
				}
				break;
			}
		}
	}

	public final int getStackSkill() {
		return this.stackskill;
	}

	public final int getMhpX() {
		return this.mhpX;
	}

	public final int getMhpR() {
		return this.mhpR;
	}

	public final int getLv2Mhp() {
		return this.lv2mhp;
	}

	public final int getMmpX() {
		return this.mmpX;
	}

	public final int getMmpR() {
		return this.mmpR;
	}

	public final int getLv2Mmp() {
		return this.lv2mmp;
	}

	public final double getHpR() {
		return this.hpR;
	}

	public final double getMpR() {
		return this.mpR;
	}
}