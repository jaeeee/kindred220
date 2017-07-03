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
import client.MapleClient;
import client.items.ISkill;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.skills.SummonSkillEntry;
import client.stats.BuffStats;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import constants.GameConstants;
import constants.ServerConstants;
import java.awt.Point;
import java.util.*;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import server.items.ItemInformation;
import server.life.MapleMonster;
import server.life.SummonAttackEntry;
import server.maps.*;
import server.movement.LifeMovementFragment;
import tools.RandomStream.Randomizer;

public class SummonHandler {

    public static final void MoveDragon(final ReadingMaple rh, final MapleCharacter chr) {
        rh.skip(12); //POS v192 +4byte.
        final List<LifeMovementFragment> res = MovementParse.parseMovement(rh);
        if (chr.getDragon() != null) {
            final List<LifeMovementFragment> res2 = new ArrayList<LifeMovementFragment>(res);
            final Point pos = chr.getDragon().getPosition();
            MovementParse.updatePosition(res, chr.getDragon(), 0);
            if (!chr.isHidden()) {
                chr.getMap().broadcastMessage(chr, MainPacketCreator.moveDragon(chr.getDragon(), pos, res), chr.getPosition());
            }
        }
    }

    public static final void MoveSummon(final ReadingMaple rh, final MapleCharacter chr) {
        final int oid = rh.readInt();
        rh.skip(12); // +4byte [v192]
        final List<LifeMovementFragment> res = MovementParse.parseMovement(rh);

        for (MapleSummon sum : chr.getSummons().values()) {
            if (sum.getObjectId() == oid && sum.getMovementType() != SummonMovementType.STATIONARY) {
                final Point startPos = sum.getPosition();
                MovementParse.updatePosition(res, sum, 0);
                chr.getMap().broadcastMessage(chr, MainPacketCreator.moveSummon(chr.getId(), oid, startPos, res), sum.getPosition());
                break;
            }
        }
    }

    public static final void DamageSummon(final ReadingMaple rh, final MapleCharacter chr) {
        final int unkByte = rh.readByte();
        final int damage = rh.readInt();
        final int monsterIdFrom = rh.readInt();

        final Iterator<MapleSummon> iter = chr.getSummons().values().iterator();
        MapleSummon summon;

        while (iter.hasNext()) {
            summon = iter.next();
            if (summon.isPuppet() && summon.getOwner().getId() == chr.getId()) { //We can only have one puppet(AFAIK O.O) so this check is safe.
                summon.addHP((short) -damage);
                if (summon.getHP() <= 0) {
                    chr.cancelBuffStats(summon.getSkill(), BuffStats.SUMMON, BuffStats.PUPPET, BuffStats.DUMMY_EFFECT);
                }
                chr.getMap().broadcastMessage(chr, MainPacketCreator.damageSummon(chr.getId(), summon.getSkill(), damage, unkByte, monsterIdFrom), summon.getPosition());
                if (summon.getSkill() == 14000027) {
                    chr.getMap().broadcastMessage(MainPacketCreator.removeSummon(summon, true));
                    chr.getMap().removeMapObject(summon);
                    summon.getOwner().removeVisibleMapObject(summon);
                if (summon.getOwner().getSummons().get(summon.getSkill()) != null)
                    summon.getOwner().getSummons().remove(summon.getSkill());
                }
            }
        }
    }

    public static final void SummonAttack(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
        if (!chr.isAlive()) {
            return;
        }
        final MapleMap map = chr.getMap();
        final MapleMapObject obj = map.getMapObject(rh.readInt());
        if (obj == null || !obj.getType().equals(MapleMapObjectType.SUMMON)) {
            return;
        }
        final MapleSummon summon = (MapleSummon) obj;
        final ISkill summonSkill = SkillFactory.getSkill(summon.getSkill());
        final SummonSkillEntry sse = SkillFactory.getSummonData(summon.getSkill());
        if (sse == null) {
            return;
        }
        rh.skip(4);
        final byte animation = rh.readByte();
        byte tbyte = (byte) (rh.readByte());
        short targets = (short) ((tbyte >>> 4) & 0xF);
        short hits = (short) (tbyte & 0xF);
        if (targets > sse.mobCount) {
            return;
        }
        rh.skip(12);
        final List<SummonAttackEntry> allDamage = new ArrayList<SummonAttackEntry>();
        for (int i = 0; i < targets; i++) {
            int oid = rh.readInt();
            MapleMonster mob = map.getMonsterByOid(oid);
            if (mob == null) {
                continue;
            }
            rh.skip(24);
            final int damage = rh.readInt();
            allDamage.add(new SummonAttackEntry(mob, damage));
            rh.skip(4);
            map.broadcastMessage(chr, MainPacketCreator.summonAttack(summon.getOwner().getId(), summon.getSkill(), animation, allDamage, chr.getLevel(), false), summon.getPosition());
        }
        if (GameConstants.SurfaceDamageSkillLink(summonSkill.getId())) {
            for (int i = 0; i < allDamage.size(); ++i) { //마리수=데미지수
                MapleMonster Target = allDamage.get(i).getMonster();
                Target.damage(chr, allDamage.get(i).getDamage(), false);
                if (Target.getHp() <= 0) {
                    break;
                }
            }
        }
        map.broadcastMessage(chr, MainPacketCreator.summonAttack(summon.getOwner().getId(), summon.getSkill(), animation, allDamage, chr.getLevel(), false), summon.getPosition());

        for (SummonAttackEntry attackEntry : allDamage) {
            final long toDamage = attackEntry.getDamage();
            final MapleMonster mob = attackEntry.getMonster();
            final SkillStatEffect summonEffect = summonSkill.getEffect(summon.getSkillLevel());
            if (toDamage > 0 && summonEffect.getMonsterStati().size() > 0) {
                if (summonEffect.makeChanceResult()) {
                    mob.applyStatus(chr, new MonsterStatusEffect(summonEffect.getMonsterStati(), summonSkill, null, false), summonEffect.isPoison(), 4000, false);
                }
            }

            if (toDamage > 0) {
                if (summonSkill.getId() == 23111008) { //엘리멘탈 나이트
                    if (summonEffect.makeChanceResult()) {
                        mob.applyStatus(chr, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), summonSkill, null, false), false, summonEffect.getSkillStats().getStats("subTime"), false);
                    }
                }
                if (summonSkill.getId() == 23111009) { //엘리멘탈 나이트
                    if (summonEffect.makeChanceResult()) {
                        mob.applyStatus(chr, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.VENOMOUS_WEAPON, summonEffect.getSkillStats().getStats("dot")), summonSkill, null, false), true, summonEffect.getSkillStats().getStats("dotTime"), false);
                    }
                }
            }
            mob.damage(chr, Math.min(toDamage, 999999), true);
            chr.checkMonsterAggro(mob);
        }
        if (summon.getSkill() == 33101008) { //마인
            chr.getMap().removeMapObject(summon);
            chr.getMap().broadcastMessage(chr, MainPacketCreator.removeSummon(summon, true), true);
            chr.removeVisibleMapObject(summon);
        }
    }

    

    public static final void removeSummon(final ReadingMaple rh, final MapleClient ha) {
        int oid = rh.readInt();
        MapleSummon hs = null;
        if ((MapleSummon) ha.getPlayer().getMap().getMapObject(oid) != null) {
            hs = (MapleSummon) ha.getPlayer().getMap().getMapObject(oid);
        }
        if (hs == null) {
            System.err.println("[오류] 현재 소환된 소환수들중 해당하는 오브젝트를 발견하지 못했습니다. : " + oid);
            return;
        }
        try {
            ha.getPlayer().cancelBuffStats(hs.getSkill(), BuffStats.SUMMON, BuffStats.PUPPET, BuffStats.DUMMY_EFFECT);
        } catch (Exception e) {
            if (!ServerConstants.realese) {
                e.printStackTrace();
            }
        }
    }

    public static final void subThingSummon(final ReadingMaple rh, final MapleClient ha, final MapleCharacter chr) {

        int oid = rh.readInt();
        int skillid = rh.readInt();
        List<Integer> value = new LinkedList<Integer>();
        while (rh.available() > 0) {
            value.add(Integer.valueOf(rh.readByte()));
        }

        MapleSummon hs = null;
        if ((MapleSummon) ha.getPlayer().getMap().getMapObject(oid) != null) {
            hs = (MapleSummon) ha.getPlayer().getMap().getMapObject(oid);
        }
        if (hs == null) {
            System.err.println("[오류] 현재 소환된 소환수들중 해당하는 오브젝트를 발견하지 못했습니다. : " + oid);
            return;
        }
        if (skillid == 35121009) {    
            if (!ha.getPlayer().canSummon(2000)) {
                return;
            }
	    if (hs.getSkill() != skillid) {
		return;
	    }
            for (int i = 0; i < 3; i++) {
                 final MapleSummon tosummon = new MapleSummon(ha.getPlayer(), SkillFactory.getSkill(35121011).getEffect(hs.getSkillLevel()), new Point(hs.getPosition().x, hs.getPosition().y - 5), SummonMovementType.WALK_STATIONARY);
                 ha.getPlayer().getMap().spawnSummon(tosummon, true,(int) (20+2*Math.floor(hs.getSkillLevel()/3)) * 1000);
             }
        }
        if (skillid == 35111011) {
            if (!ha.getPlayer().canSummon(1000)) {
                return;
            }
            ha.getPlayer().addHP((int) (ha.getPlayer().getStat().getCurrentMaxHp() * SkillFactory.getSkill(hs.getSkill()).getEffect(hs.getSkillLevel()).getHp() / 100.0));
            ha.getPlayer().getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(hs.getSkill(), 2, ha.getPlayer().getLevel(), hs.getSkillLevel()));
            ha.getPlayer().getMap().broadcastMessage(ha.getPlayer(), MainPacketCreator.showBuffeffect(ha.getPlayer().getId(), hs.getSkill(), 2, ha.getPlayer().getLevel(), hs.getSkillLevel()), false);
        } else if (GameConstants.isAngelicBlessBuff(skillid)) {
            ItemInformation ii = ItemInformation.getInstance();
            int effectid = 0;
            switch (skillid % 1000) {
                case 86: //엔젤릭블레스
                    ii.getItemEffect(2022746).applyTo(ha.getPlayer());
                    effectid = 1085;
                    break;
                case 88: //다크엔젤릭블레스
                    ii.getItemEffect(2022747).applyTo(ha.getPlayer());
                    effectid = 1087;
                    break;
                case 91: //눈꽃엔젤릭블레스
                    ii.getItemEffect(2022764).applyTo(ha.getPlayer());
                    effectid = 1090;
                    break;
                case 180://화이트엔젤릭블레스
                    ii.getItemEffect(2022823).applyTo(ha.getPlayer());
                    effectid = 1179;
                    break;
            }
            ha.getPlayer().getMap().broadcastMessage(MainPacketCreator.showAngelicBlessEffect(ha.getPlayer().getId(), effectid));
        }
        if (skillid == 1301013) {
            ISkill bHealing = SkillFactory.getSkill(rh.readInt());
            final int bHealingLvl = chr.getSkillLevel(bHealing);
            if (bHealingLvl <= 0 || bHealing == null) {
                return;
            }
            final SkillStatEffect healEffect = bHealing.getEffect(bHealingLvl);
            if (bHealing.getId() == 1310016) {
                healEffect.applyTo(chr);
            } else if (bHealing.getId() == 1320008) {
                if (!chr.canSummon(healEffect.getX() * 1000)) {
                    return;
                }
                chr.addHP(healEffect.getHp());
            }
            chr.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(chr.getId(), hs.getSkill(), 3, bHealingLvl));
            chr.getMap().broadcastMessage(MainPacketCreator.summonSkill(chr.getId(), hs.getSkill(), bHealing.getId() == 1320008 ? 5 : (Randomizer.nextInt(3) + 6)));
            chr.getMap().broadcastMessage(chr, MainPacketCreator.showOwnBuffEffect(chr.getId(), hs.getSkill(), 3, bHealingLvl), false);
        }
        if (hs.getSkill() == 1310016) {
            ItemInformation.getInstance().getItemEffect(2022125).applyTo(ha.getPlayer());
            ha.getPlayer().getMap().broadcastMessage(MainPacketCreator.showBuffeffect(chr.getId(), 1310016, 3, hs.getSkillLevel()));
        }
    }
}