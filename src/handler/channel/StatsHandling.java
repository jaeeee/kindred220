package handler.channel;

import constants.GameConstants;
import java.util.ArrayList;
import java.util.List;

import client.items.ISkill;
import client.MapleClient;
import client.MapleCharacter;
import client.MapleCharacterStat;
import client.stats.PlayerStat;
import client.skills.SkillFactory;
import tools.RandomStream.Randomizer;
import packet.creators.MainPacketCreator;
import tools.Pair;
import packet.transfer.read.ReadingMaple;
import provider.MapleData;
import provider.MapleDataTool;

public class StatsHandling {

    public static final void DistributeAP(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
	final List<Pair<PlayerStat, Long>> statupdate = new ArrayList<Pair<PlayerStat, Long>>(2);
	c.getSession().write(MainPacketCreator.updatePlayerStats(statupdate, true, chr.getJob()));
	rh.skip(4);

	final MapleCharacterStat stat = chr.getStat();

	if (chr.getRemainingAp() > 0) {
	    switch (rh.readInt()) {
		case 64: // Str
		    if (stat.getStr() >= c.getPlayer().getMaxStats()) {
			return;
		    }
		    stat.setStr(stat.getStr() + 1);
		    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.STR,(long) stat.getStr()));
		    break;
		case 128: // Dex
		    if (stat.getDex() >= c.getPlayer().getMaxStats()) {
			return;
		    }
		    stat.setDex(stat.getDex() + 1);
		    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.DEX,(long)  stat.getDex()));
		    break;
		case 256: // Int
		    if (stat.getInt() >= c.getPlayer().getMaxStats()) {
			return;
		    }
		    stat.setInt(stat.getInt() + 1);
		    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.INT,(long)  stat.getInt()));
		    break;
		case 512: // Luk
		    if (stat.getLuk() >= c.getPlayer().getMaxStats()) {
			return;
		    }
		    stat.setLuk(stat.getLuk() + 1);
		    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.LUK,(long)  stat.getLuk()));
		    break;
		case 2048: // HP
		    int MaxHP = stat.getMaxHp();
		    if (chr.getHpApUsed() >= 10000 || MaxHP >= 500000) {
			return;
		    }
		    ISkill improvingMaxHP = null;
		    int improvingMaxHPLevel = 0;
		    if (chr.getJob() == 0) { // Beginner
			MaxHP += Randomizer.rand(8, 12);
		    } else if (chr.getJob() >= 100 && chr.getJob() <= 132) { // Warrior
			improvingMaxHP = SkillFactory.getSkill(1000001);
			improvingMaxHPLevel = chr.getSkillLevel(improvingMaxHP);
			MaxHP += Randomizer.rand(20, 24);
			if (improvingMaxHPLevel >= 1) {
			    MaxHP += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
			}
		    } else if (chr.getJob() >= 200 && chr.getJob() <= 232) { // Magician
			MaxHP += Randomizer.rand(6, 10);
		    } else if (chr.getJob() >= 300 && chr.getJob() <= 322) { // Bowman
			MaxHP += Randomizer.rand(16, 20);
		    } else if (chr.getJob() >= 400 && chr.getJob() <= 422) { // Thief
			MaxHP += Randomizer.rand(20, 24);
		    } else if (chr.getJob() >= 500 && chr.getJob() <= 522) { // Pirate
			improvingMaxHP = SkillFactory.getSkill(5100000);
			improvingMaxHPLevel = chr.getSkillLevel(improvingMaxHP);
			MaxHP += Randomizer.rand(16, 20);
			if (improvingMaxHPLevel >= 1) {
			    MaxHP += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
			}
		    } else if (chr.getJob() >= 1100 && chr.getJob() <= 1111) { // Soul Master
			improvingMaxHP = SkillFactory.getSkill(11000000);
			improvingMaxHPLevel = chr.getSkillLevel(improvingMaxHP);
			MaxHP += Randomizer.rand(36, 42);
			if (improvingMaxHPLevel >= 1) {
			    MaxHP += improvingMaxHP.getEffect(improvingMaxHPLevel).getY();
			}
		    } else if (chr.getJob() >= 1200 && chr.getJob() <= 1211) { // Flame Wizard
			MaxHP += Randomizer.rand(15, 21);
		    } else if ((chr.getJob() >= 1300 && chr.getJob() <= 1311) || (chr.getJob() >= 1400 && chr.getJob() <= 1411)) { // Wind Breaker and Night Walker
                        MaxHP += Randomizer.rand(30, 36);
                    } else if (chr.getJob() == 3101 || (chr.getJob() >= 3120 && chr.getJob() <= 3122)) {
			MaxHP += Randomizer.rand(30, 36);
		    } else { // GameMaster
			MaxHP += Randomizer.rand(50, 100);
		    }
                    MaxHP = Math.min(500000, MaxHP);
                    chr.setHpApUsed(chr.getHpApUsed() + 1);
                    stat.setMaxHp(MaxHP);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.MAXHP, (long) MaxHP));
                    break;
		case 8192: // MP
		    int MaxMP = stat.getMaxMp();
		    if (chr.getMpApUsed() >= 10000 && stat.getMaxMp() >= 500000) {
			return;
		    }
		    if (chr.getJob() == 0) { // Beginner
			MaxMP += Randomizer.rand(6, 8);
		    } else if (chr.getJob() >= 100 && chr.getJob() <= 132) { // Warrior
			MaxMP += Randomizer.rand(2, 4);
		    } else if (chr.getJob() >= 200 && chr.getJob() <= 232) { // Magician
			ISkill improvingMaxMP = SkillFactory.getSkill(2000001);
			int improvingMaxMPLevel = chr.getSkillLevel(improvingMaxMP);
			if (improvingMaxMPLevel >= 1) {
			    MaxMP += Randomizer.rand(18, 20) + improvingMaxMP.getEffect(improvingMaxMPLevel).getY();
			} else {
			    MaxMP += Randomizer.rand(18, 20);
			}
		    } else if (chr.getJob() >= 300 && chr.getJob() <= 322) { // Bowman
			MaxMP += Randomizer.rand(10, 12);
		    } else if (chr.getJob() >= 400 && chr.getJob() <= 422) { // Thief
			MaxMP += Randomizer.rand(10, 12);
		    } else if (chr.getJob() >= 500 && chr.getJob() <= 522) { // Pirate
			MaxMP += Randomizer.rand(10, 12);
		    } else if (chr.getJob() >= 1100 && chr.getJob() <= 1111) { // Soul Master
			MaxMP += Randomizer.rand(6, 9);
		    } else if (chr.getJob() >= 1200 && chr.getJob() <= 1211) { // Flame Wizard
			ISkill improvingMaxMP = SkillFactory.getSkill(12000000);
			int improvingMaxMPLevel = chr.getSkillLevel(improvingMaxMP);
			MaxMP += Randomizer.rand(33, 36);
			if (improvingMaxMPLevel >= 1) {
			    MaxMP += improvingMaxMP.getEffect(improvingMaxMPLevel).getY();
			}
		    } else if ((chr.getJob() >= 1300 && chr.getJob() <= 1311) || (chr.getJob() >= 1400 && chr.getJob() <= 1411)) { // Wind Breaker and Night Walker
			MaxMP += Randomizer.rand(21, 24);
		    } else { // GameMaster
			MaxMP += Randomizer.rand(50, 100);
		    }
		    MaxMP = Math.min(500000, MaxMP);
		    chr.setMpApUsed(chr.getMpApUsed() + 1);
		    stat.setMaxMp(MaxMP);
		    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.MAXMP,(long)  MaxMP));
		    break;
		default:
		    c.getSession().write(MainPacketCreator.resetActions());
		    return;
	    }
	    chr.setRemainingAp(chr.getRemainingAp() - 1);
	    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.AVAILABLEAP,(long)  chr.getRemainingAp()));
	    c.getSession().write(MainPacketCreator.updatePlayerStats(statupdate, true, chr.getJob()));
            chr.getStat().recalcLocalStats();
            if (GameConstants.isDemonAvenger(chr.getJob())) chr.getStat().giveDemonWatk(chr);
	}
    }
    
    public static final void DistributeSP(ReadingMaple rh, final int skillid, final MapleClient c, final MapleCharacter chr) {
        int sid = skillid;
        if(sid == 80001044 ||
        sid == 80001137 ||
        sid == 80001144 ||
        (sid >= 80001000 && sid <= 80001033) ||
        (sid >= 80001037 && sid <= 80001039) ||
        (sid >= 80001082 && sid <= 80001090) ) {
            chr.dropMessage(1, "이 스킬은 올릴 수 없습니다.");
            chr.ea();
            return;
        }
	boolean isBeginnerSkill = false;
	int remainingSp = 0;

	switch (skillid) {
	    case 1000:
	    case 1001:
	    case 1002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(1000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(1001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(1002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
	    case 10001000:
	    case 10001001:
	    case 10001002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(10001000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(10001001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(10001002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
	    case 20001000:
	    case 20001001:
	    case 20001002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(20001000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(20001001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(20001002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
	    case 20011000:
	    case 20011001:
	    case 20011002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(20011000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(20011001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(20011002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
	    case 30011000:
	    case 30011001:
	    case 30011002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(3001100));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(30011001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(30011002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
	    case 30001000:
	    case 30001001:
	    case 30001002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(30001000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(30001001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(30001002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
            case 50001000:
            case 50001001:
            case 50001002: {
		final int snailsLevel = chr.getSkillLevel(SkillFactory.getSkill(50001000));
		final int recoveryLevel = chr.getSkillLevel(SkillFactory.getSkill(50001001));
		final int nimbleFeetLevel = chr.getSkillLevel(SkillFactory.getSkill(50001002));
		remainingSp = Math.min((chr.getLevel() - 1), 6) - snailsLevel - recoveryLevel - nimbleFeetLevel;
		isBeginnerSkill = true;
		break;
            }
            default: {
                remainingSp = chr.getRemainingSp(GameConstants.getSkillBookForSkill(skillid));
                break;
            }
               
	}
	final ISkill skill = SkillFactory.getSkill(skillid);

	if (skill.hasRequiredSkill()) {
	    if (chr.getOriginSkillLevel(SkillFactory.getSkill(skill.getRequiredSkillId())) < skill.getRequiredSkillLevel()) {
                return;
	    }
	}
        if (GameConstants.isZero(chr.getJob())) {
            remainingSp = 6;
        }
	final int maxlevel = skill.isFourthJob() ? chr.getMasterLevel(skill) : skill.getMaxLevel();
	final int curLevel = chr.getOriginSkillLevel(skill);
        final int combatLevel = chr.getSkillLevel(skill);
        final int addskilllevel = rh.readInt();
            chr.gainSP(-addskilllevel);
	    chr.updateSingleStat(PlayerStat.AVAILABLESP, chr.getRemainingSp());
            chr.send(MainPacketCreator.updateSp(chr, false));
	    chr.changeSkillLevel(skill, (byte) (curLevel + addskilllevel), chr.getMasterLevel(skill));
            if (chr.getJob() == 132) { // 다크나이트
                chr.checkBerserk();
            }
            chr.saveToDB(false, false);
            chr.checkInduerense();
            chr.checkMercedesRecovery();
            chr.setNullSelfRecovery();
            chr.checkSelfRecovery();
    }

    public static final void AutoAssignAP(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
        try {
        rh.skip(4);
        final int count = rh.readInt();
        final int PrimaryStat = rh.readInt();
        final int amount = rh.readInt();
        final int SecondaryStat = count == 2 ? rh.readInt() : 0;
        final int amount2 = count == 2 ? rh.readInt() : 0;
        
        final MapleCharacterStat playerst = chr.getStat();

        List<Pair<PlayerStat, Long>> statupdate = new ArrayList<Pair<PlayerStat, Long>>(2);
        c.getSession().write(MainPacketCreator.updatePlayerStats(statupdate, true, chr.getJob()));
        if (chr.getRemainingAp() == amount + amount2 || GameConstants.isXenon(chr.getJob())) {
            switch (PrimaryStat) {
                case 64: // Str
                    if (playerst.getStr() + amount > 999) {
                        return;
                    }
                    playerst.setStr(playerst.getStr() + amount);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.STR,(long)  playerst.getStr()));
                    break;
                case 128: // Dex
                    if (playerst.getDex() + amount > 999) {
                        return;
                    }
                    playerst.setDex(playerst.getDex() + amount);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.DEX,(long)  playerst.getDex()));
                    break;
                case 256: // Int
                    if (playerst.getInt() + amount > 999) {
                        return;
                    }
                    playerst.setInt(playerst.getInt() + amount);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.INT,(long)  playerst.getInt()));
                    break;
                case 512: // Luk
                    if (playerst.getLuk() + amount > 999) {
                        return;
                    }
                    playerst.setLuk(playerst.getLuk() + amount);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.LUK,(long)  playerst.getLuk()));
                    break;
                case 2048: //Max Hp
                    if (playerst.getMaxHp() + (amount * 30) > 500000) {
                        return;
                    }
                    playerst.setMaxHp(playerst.getMaxHp() + (amount * 30));
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.MAXHP,(long)  playerst.getMaxHp()));
                    break;
                default:
                    c.getSession().write(MainPacketCreator.resetActions());
                    return;
            }
            switch (SecondaryStat) {
                case 64: // Str
                    if (playerst.getStr() + amount2 > 999) {
                        return;
                    }
                    playerst.setStr(playerst.getStr() + amount2);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.STR,(long)  playerst.getStr()));
                    break;
                case 128: // Dex
                    if (playerst.getDex() + amount2 > 999) {
                        return;
                    }
                    playerst.setDex(playerst.getDex() + amount2);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.DEX,(long)  playerst.getDex()));
                    break;
                case 256: // Int
                    if (playerst.getInt() + amount2 > 999) {
                        return;
                    }
                    playerst.setInt(playerst.getInt() + amount2);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.INT,(long)  playerst.getInt()));
                    break;
                case 512: // Luk
                    if (playerst.getLuk() + amount2 > 999) {
                        return;
                    }
                    playerst.setLuk(playerst.getLuk() + amount2);
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.LUK,(long)  playerst.getLuk()));
                    break;
                case 2048: //Max Hp
                    if (playerst.getMaxHp() + (amount * 30) > 500000) {
                        return;
                    }
                    playerst.setMaxHp(playerst.getMaxHp() + (amount * 30));
                    statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.MAXHP,(long)  playerst.getMaxHp()));
                    break;  
               // default:
                //    c.getSession().write(MainPacketCreator.updatePlayerStats(MainPacketCreator.EMPTY_STATUPDATE, true, chr.getJob()));
                //    return;
               //     break;
            }
            chr.setRemainingAp(chr.getRemainingAp() - (amount + amount2));
            statupdate.add(new Pair<PlayerStat, Long>(PlayerStat.AVAILABLEAP, (long) chr.getRemainingAp()));
            c.getSession().write(MainPacketCreator.updatePlayerStats(statupdate, true, chr.getJob()));
            chr.getStat().recalcLocalStats();
            if (GameConstants.isDemonAvenger(chr.getJob())) chr.getStat().giveDemonWatk(chr);
        }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
