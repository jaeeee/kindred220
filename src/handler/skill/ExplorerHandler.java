package handler.skill;

import client.MapleCharacter;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.stats.BuffStats;
import client.stats.DiseaseStats;
import client.stats.MonsterStatus;
import client.stats.MonsterStatusEffect;
import constants.GameConstants;
import handler.channel.AttackInfo;
import packet.creators.MainPacketCreator;
import packet.creators.UIPacket;
import packet.skills.AdventurerSkill;
import server.life.Element;
import server.life.MapleMonster;
import server.maps.MapleMapObject;
import server.maps.MapleMist;
import server.maps.MapleSummon;
import server.maps.SummonMovementType;
import tools.RandomStream.Randomizer;
import tools.Timer;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import tools.Timer.*;
/**
 * Created by 민우 on 2016-01-16.
 */
public class ExplorerHandler {
    public static long totDamageToOneMonster = 0;
    public static transient ScheduledFuture<?> diabolicRecoveryTask = null;

    public static void AdventureAttack(MapleCharacter player, MapleMonster monster, AttackInfo attack, final int kunai) {
        /*전사 직업군 몬스터 버프 시작*/

        if (GameConstants.isWarrior(player.getJob())) {
            switch (attack.skill) {
                case 1101012: { // 콤보 포스 몬스터 버프 : 기절
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(1101012), null, false), false, 999999, false);
                    break;
                }

                case 1121015: { // 인사이징 몬스터 버프 : 중독
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(1121015), null, false), false, 30000, false);
                    break;
                }
                case 1201011: { // 플레임 차지 몬스터 버프 : 중독
                    SkillStatEffect effect = SkillFactory.getSkill(1201011).getEffect(player.getSkillLevel(1201011));
                    if (Randomizer.isSuccess(effect.getProb())) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(1201011), null, false), false, 6000, false);
                    }
                    break;
                }

                case 1201012: { // 블리자드 차지 몬스터 버프 : 이동속도 감소
                    SkillStatEffect effect = SkillFactory.getSkill(1201012).getEffect(player.getSkillLevel(1201012));
                    if (Randomizer.isSuccess(effect.getProb())) {
                        if (monster.getBuff(MonsterStatus.BLODTO) != null) {
                            if (monster.getBuff(MonsterStatus.BLODTO).getOwnerId() == player.getId()) {
                                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLIZARD_CHARGE, -10), SkillFactory.getSkill(1201012), null, false), false, 6000, false);
                                monster.cancelStatus(MonsterStatus.BLODTO);
                                totDamageToOneMonster = (long) (totDamageToOneMonster * (115 / 100.0D));
                                monster.damage(player, totDamageToOneMonster, true);
                            }
                        } else {
                            monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLIZARD_CHARGE, -10), SkillFactory.getSkill(1201012), null, false), false, 6000, false);
                        }
                    }
                    break;
                }

                case 1201013: { // 페이지 오더 몬스터 버프 : 기절
                    SkillStatEffect effect = SkillFactory.getSkill(1201013).getEffect(1201013);
                    if (Randomizer.isSuccess(effect.getProb())) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(1201013), null, false), false, 4000, false);
                    }
                }

                case 1211008: { // 라이트닝 차지 : 몬스터 버프 : 기절
                    SkillStatEffect effect = SkillFactory.getSkill(1211008).getEffect(1211008);
                    if (Randomizer.isSuccess(effect.getProb())) {
                        if (monster.getBuff(MonsterStatus.BLIZARD_CHARGE) != null) {
                            if (monster.getBuff(MonsterStatus.BLIZARD_CHARGE).getOwnerId() == player.getId()) {
                                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(1211008), null, false), false, 6000, false);
                                monster.cancelStatus(MonsterStatus.BLIZARD_CHARGE);
                                totDamageToOneMonster = (long) (totDamageToOneMonster * (115 / 100.0D));
                                monster.damage(player, totDamageToOneMonster, true);
                            }
                        } else {
                            monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(1211008), null, false), false, 6000, false);
                        }
                    } else {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(1211008), null, false), false, 6000, false);
                    }
                    break;
                }

                case 1221004: { // 디바인 차지 몬스터 버프 : 침묵
                    SkillStatEffect effect = SkillFactory.getSkill(1221004).getEffect(1221004);
                    if (Randomizer.isSuccess(effect.getProb())) {
                        if (monster.getBuff(MonsterStatus.STUN) != null) {
                            if (monster.getBuff(MonsterStatus.STUN).getOwnerId() == player.getId()) {
                                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SEAL, 1), SkillFactory.getSkill(1221004), null, false), false, 20000, false);
                                monster.cancelStatus(MonsterStatus.STUN);
                                totDamageToOneMonster = (long) (totDamageToOneMonster * (115 / 100.0D));
                                monster.damage(player, totDamageToOneMonster, true);
                            }
                        } else {
                            monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SEAL, 1), SkillFactory.getSkill(1221004), null, false), false, 20000, false);
                        }
                    }
                    break;
                }

                case 1221009: { // 블래스트 버프 효과
                    if (player.GetCount() == 5) {
                        SkillFactory.getSkill(attack.skill).getEffect(player.getSkillLevel(attack.skill)).applyTo(player);
                        player.AddCount(-4);
                        player.send(MainPacketCreator.ElementalCharge(player.GetCount(), 1200014));
                    }
                    break;
                }

                case 1221052: { // 스마이트 몬스터 버프 : 결빙
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(1221052), null, false), false, 20000, false);
                    break;
                }

                case 1301012: { // 스피어 풀링 몬스터 버프 : 기절
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(1301012), null, false), false, 8000, false);
                    break;
                }
            }
        }

        if (player.getJob() == 212) {
            if (attack.skill == 2121055) {
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.POISON, 1), SkillFactory.getSkill(2121055), null, false), false, 30000, false);
            }
        }

        if (player.getJob() == 232) {
            if (attack.skill == 2321001) {
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.MDEF, -20), SkillFactory.getSkill(2321001), null, false), false, 300000, false);
            }
        }


        /* 궁수 직업군 몬스터 버프 */

        if (GameConstants.isBow(player.getJob())) {
//            if (player.getJob() >= 310 && player.getJob() <= 312) {
//                QuiverKartrige(player, totDamageToOneMonster, monster);
//            }
            switch (attack.skill) {
                case 3111003: {
                    FlameShot(player, monster, attack);
                    break;
                }

                case 3121014: { // 운즈 샷 몬스터 버프 : 이동속도 감소
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLIZARD_CHARGE, 1), SkillFactory.getSkill(3121014), null, false), false, 8000, false);
                    break;
                }

                case 3201008: { // 네트 쓰로잉 몬스터 버프 : 결빙
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(3201008), null, false), false, 8000, false);
                    break;
                }
            }
        }

        /* 도적 직업군 몬스터 버프 */

        if (GameConstants.isThief(player.getJob())) {
            if (player.getJob() >= 410 && player.getJob() <= 412 && attack.skill != 4120019 && attack.skill != 4100012) {
                if (monster.getBuff(MonsterStatus.MARKOF) != null) {
                    if (monster.getBuff(MonsterStatus.MARKOF).getOwnerId() == player.getId()) {
                        MarkOf(player, monster, kunai);
                        monster.cancelStatus(MonsterStatus.MARKOF);
                    }
                } else {
                    if (Randomizer.isSuccess(40)) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.MARKOF, 1), SkillFactory.getSkill(4120018), null, false), false, 5000, false);
                    }
                }
            }

            if (player.getJob() == 411 && player.getJob() < 412) { // 베놈 몬스터 버프 : 중독
                SkillStatEffect effects = SkillFactory.getSkill(4110011).getEffect(player.getSkillLevel(4110011));
                if (Randomizer.isSuccess(effects.getProb())) {
                    if (player.getSkillLevel(4110011) > 0) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4110011), null, false), false, 8000, false);
                    }
                }
            }

            if (player.getJob() == 412) { // 페이탈 베놈 몬스터 버프 : 중독
                SkillStatEffect effects = SkillFactory.getSkill(4120011).getEffect(player.getSkillLevel(4120011));
                if (Randomizer.isSuccess(effects.getProb())) {
                    if (player.getSkillLevel(4120011) > 0) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4120011), null, false), false, 8000, false);
                    }
                }
            }

            if (player.getBuffedValue(BuffStats.BLEEDING_TOXIN) != null) { // 블리딩 톡신 몬스터 버프 : 중독
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4121054), null, false), false, 8000, false);
            }

            switch (attack.skill) {
                case 4111003: { // 쉐도우 웹 몬스터 버프 : 행동불능 / 중독
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(4111003), null, false), false, 20000, false);
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4111003), null, false), false, 20000, false);
                    break;
                }

                case 4121017: { // 쇼다운 챌린지 몬스터 버프 : 경험치 증가
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.SHOWDOWN, 1), SkillFactory.getSkill(4121017), null, false), false, 30000, false);
                    break;
                }
            }

            if (player.getJob() >= 420 && player.getJob() <= 421) { // 크리티컬 그로잉
                int critical = player.acaneAim * 2;
                int test = 1 * player.acaneAim;
                if (attack.skill > 0) {
                    player.send(packet.creators.MainPacketCreator.CriticalGrowing(critical));
                }
                if (player.acaneAim <= 23) {
                    player.acaneAim++;
                }
            }

            if (player.getJob() == 422) { // 프리마 크리티컬
                int critical = player.acaneAim * 4;
                int test = 1 * player.acaneAim;
                if (attack.skill > 0) {
                    player.send(packet.creators.MainPacketCreator.PrimaCritical(critical));
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

            if (player.getJob() == 421 && player.getJob() < 422) { // 베놈 몬스터 버프 : 중독
                SkillStatEffect effects = SkillFactory.getSkill(4210010).getEffect(player.getSkillLevel(4210010));
                if (Randomizer.isSuccess(effects.getProb())) {
                    if (player.getSkillLevel(4210010) > 0) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4210010), null, false), false, 8000, false);
                    }
                }
            }

            if (player.getJob() == 422) { // 페이탈 베놈 몬스터 버프 : 중독
                SkillStatEffect effects = SkillFactory.getSkill(4220011).getEffect(player.getSkillLevel(4220011));
                if (Randomizer.isSuccess(effects.getProb())) {
                    if (player.getSkillLevel(4220011) > 0) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4220011), null, false), false, 8000, false);
                    }
                }
            }

            if (player.getJob() >= 432 && player.getJob() <= 433) {
                SkillStatEffect effect = SkillFactory.getSkill(4320005).getEffect(4320005);
                if (Randomizer.isSuccess(effect.getProb())) {
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4320005), null, false), false, 8000, false);
                }
            }

            if (player.getJob() >= 432 && player.getJob() <= 434) {
                if (attack.skill == 4321006) { // 플라잉 어썰터 몬스터 버프 : 기절
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(4321006), null, false), false, 5000, false);
                }
            }

            if (player.getJob() == 434) { // 페이탈 베놈 몬스터 버프 : 중독
                SkillStatEffect effects = SkillFactory.getSkill(4340012).getEffect(player.getSkillLevel(4340012));
                if (Randomizer.isSuccess(effects.getProb())) {
                    if (player.getSkillLevel(4340012) > 0) {
                        monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.BLODTO, 1), SkillFactory.getSkill(4340012), null, false), false, 8000, false);
                    }
                }
            }

            if (player.getJob() == 434) {
                if (attack.skill == 4341002) { // 파이널 컷 버프
                    SkillStatEffect effects = SkillFactory.getSkill(4341002).getEffect(player.getSkillLevel(4341002));
                    effects.applyTo(player);
                }
            }

            if (GameConstants.isCanonMaster(player.getJob())) {
                if (attack.skill == 5311002) { // 몽키 웨이브
                    SkillStatEffect effects = SkillFactory.getSkill(5311002).getEffect(player.getSkillLevel(5311002));
                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.STUN, 1), SkillFactory.getSkill(5311002), null, false), false, effects.getDuration(), false);
                }
            }
        }
    }

    public static void AdventureAttackMagic(MapleCharacter player, MapleMonster monster, AttackInfo attack) {
        boolean check = false;
        if (GameConstants.isMagic(player.getJob())) {
            if (attack.skill != 2100010) {
                if (!check) {
                    if (SkillFactory.getSkill(attack.skill).getElement().equals(Element.FIRE)) {
                        final SkillStatEffect effect1 = SkillFactory.getSkill(2100010).getEffect(player.getSkillLevel(2100010));
                        if (Randomizer.isSuccess(effect1.getProb())) {
                            player.getMap().spawnMist(new MapleMist(effect1.calculateBoundingBox(monster.getPosition(), player.isFacingLeft()), player, effect1), effect1.getTime(), false, false, false, false, false, false, false, false);
                            check = true;
                        }
                    }
                }
            }

            if (attack.skill == 2201008) {
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(2211002), null, false), false, 8000, false);
            }

            if (attack.skill == 2211010) {
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.FREEZE, 1), SkillFactory.getSkill(2211002), null, false), false, 8000, false);
            }
            if (attack.skill == 2321001) {
                monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.MDEF, -10), SkillFactory.getSkill(2321001), null, false), false, 300000, false);
            }
        }
    }

//    public static void QuiverKartrige(MapleCharacter player, long totDamageToOneMonster, MapleMonster monster) {
//        if (Randomizer.isSuccess(GameConstants.getQuiverSucsex(player.getStat().mode))) {
//            switch (player.getStat().mode) {
//                case 0:
//                    int hpadd = (int) (totDamageToOneMonster * 0.1D);
//                    if (hpadd >= (int) (player.getStat().getCurrentMaxHp() * 0.1D)) {
//                        hpadd = (int) (player.getStat().getCurrentMaxHp() * 0.1D);
//                    }
//                    if (player.getStat().getHp() + hpadd >= player.getStat().getCurrentMaxHp()) {
//                        player.addHP(player.getStat().getCurrentMaxHp() - player.getStat().getHp());
//                    } else {
//                        player.addHP(hpadd);
//                    }
//                    break;
//                case 1:
//                    monster.applyStatus(player, new MonsterStatusEffect(Collections.singletonMap(MonsterStatus.QUIVER, Integer.valueOf(1)), SkillFactory.getSkill(3101009), null, false), false, 8000L, false);
//                    break;
//                case 2:
//                    for (MapleMapObject ob : player.getMap().getAllMonster()) {
//                        MapleMonster mob = (MapleMonster) ob;
//                        if ((mob != null) && (mob.getPosition().getX() + 597.0D >= player.getPosition().getX()) && (mob.getPosition().getX() - 597.0D <= player.getPosition().getX()) && (mob.getPosition().getY() + 480.0D >= player.getPosition().getY()) && (mob.getPosition().getY() - 480.0D <= player.getPosition().getY())) {
//                            player.getMap().broadcastMessage(MainPacketCreator.giveMagicArrow(player, mob));
//                            break;
//                        }
//                    }
//            }
//
//            player.getStat().addCount();
//            if (player.getStat().count == 0) {
//                player.getStat().count = 10;
//                player.getStat().addMode();
//                player.getClient().getSession().write(UIPacket.showWZEffect("Effect/PvPEff.img/mode/" + player.getStat().mode, 1));
//            } else {
//                player.getClient().getSession().write(UIPacket.showWZEffect("Effect/PvPEff.img/modeStatus/" + player.getStat().mode + "/" + player.getStat().count, 1));
//                player.getClient().getSession().write(MainPacketCreator.QuiverKartrige(player.getStat().count, player.getStat().mode));
//            }
//        }
//    }

    public static void FlameShot(final MapleCharacter player, final MapleMonster monster, final AttackInfo attack) {
        if (player.getJob() >= 311 && player.getJob() <= 312) {
            SkillStatEffect effects = SkillFactory.getSkill(3111003).getEffect(player.getSkillLevel(3111003));
            if (attack.skill == 3111003) {
                player.getMap().spawnMist(new MapleMist(SkillFactory.getSkill(3111003).getEffect(3111003).calculateBoundingBox(monster.getPosition(), player.isFacingLeft()), player, SkillFactory.getSkill(3111003).getEffect(3111003)), 6000, true, false, false, false, false, false, false, false);
            }
        }
    }

    public static void MarkOf(MapleCharacter chr, MapleMonster monster, int kunai) {
        SkillStatEffect effects = SkillFactory.getSkill(4100011).getEffect(chr.getSkillLevel(4100011));
        int count = effects.getBulletCount();
        int i = 0;
        for (int a = 0; a < 4; a++) {
            int oid = 0;
            int oid1 = 0;
            int oid2 = 0;
            int oid3 = 0;
            for (MapleMapObject mob : chr.getMap().getAllMonster()) {
                if (mob.getObjectId() != monster.getObjectId() && mob.getPosition().getX() + 1366.0D >= monster.getPosition().getX() && mob.getPosition().getX() - 1366.0D <= monster.getPosition().getX() && monster.getPosition().getY() + 768.0D >= monster.getPosition().getY() && monster.getPosition().getY() - 768.0D <= monster.getPosition().getY()) {
                    i++;
                    if (i == 1) {
                        oid = mob.getObjectId();
                    } else if (i == 2) {
                        oid1 = mob.getObjectId();
                    } else if (i == 3) {
                        oid2 = mob.getObjectId();
                    } else {
                        if (i != 4) {
                            break;
                        }
                        oid3 = mob.getObjectId();
                    }
                }
            }
            if (oid == 0) {
                oid = monster.getObjectId();
            }
            if (oid1 == 0) {
                oid1 = oid;
            }
            if (oid2 == 0) {
                oid2 = oid1;
            }
            if (oid3 == 0) {
                oid3 = oid2;
            }
            MapleMonster[] mos = {chr.getMap().getMonsterByOid(oid), chr.getMap().getMonsterByOid(oid1), chr.getMap().getMonsterByOid(oid2), chr.getMap().getMonsterByOid(oid3)};
            chr.getMap().broadcastMessage(AdventurerSkill.markof(chr, monster, mos, kunai));
        }
    }

    public static void SlimeVirus(MapleCharacter player, MapleMonster mob) {
        if (mob.getBuff(MonsterStatus.SLIME) != null) {
            if (mob.getBuff(MonsterStatus.SLIME).getOwnerId() == player.getId()) {
                for (int i = 0; i < 2; i++) {
                    if (player.getStat().slimecount < 10) {
                        player.getStat().slimecount++;
                        MapleSummon tosummons = new MapleSummon(player, 2111010, player.getPosition(), SummonMovementType.WALK_STATIONARY);
                        tosummons.setPosition(mob.getPosition());
                        player.getMap().spawnSummon(tosummons, true, SkillFactory.getSkill(2111010).getEffect(player.getSkillLevel(2111010)).getDuration());
                        player.getSummons().put(2111010, tosummons);
                        tosummons.addHP(Integer.MAX_VALUE);
                    }
                }
            }
        }
    }

    public static void EllimentalEodeptingC(final MapleCharacter chr) {
        Timer.BuffTimer tMan = Timer.BuffTimer.getInstance();
        if (diabolicRecoveryTask != null) {
            diabolicRecoveryTask.cancel(true);
            diabolicRecoveryTask = null;
        }
        Runnable r = new Runnable() {
            @Override
            public void run() {
                List<DiseaseStats> cancel = new ArrayList<DiseaseStats>();
                cancel.add(DiseaseStats.BLIND);
                cancel.add(DiseaseStats.CURSE);
                cancel.add(DiseaseStats.DISABLE_POTENTIAL);
                cancel.add(DiseaseStats.FLAG);
                cancel.add(DiseaseStats.FREEZE);
                cancel.add(DiseaseStats.POISON);
                cancel.add(DiseaseStats.MORPH);
                cancel.add(DiseaseStats.NULL);
                cancel.add(DiseaseStats.POTION);
                cancel.add(DiseaseStats.REVERSE_DIRECTION);
                cancel.add(DiseaseStats.SEAL);
                cancel.add(DiseaseStats.SEDUCE);
                cancel.add(DiseaseStats.SHADOW);
                cancel.add(DiseaseStats.SLOW);
                cancel.add(DiseaseStats.STUN);
                cancel.add(DiseaseStats.TELEPORT);
                cancel.add(DiseaseStats.TORNADO);
                cancel.add(DiseaseStats.WEAKEN);
                cancel.add(DiseaseStats.ZOMBIFY);
                for (DiseaseStats statlulz : cancel) {
                    if (chr.hasDisease(statlulz)) {
                        chr.Message("엘리멘탈 어뎁팅 (썬,콜) 의 효과로 상태이상이 1회 면역됩니다");
                        chr.dispelDebuff(statlulz);
                    }
                }
            }
        };
        diabolicRecoveryTask = tMan.register(r, 1);
        tMan.schedule(new Runnable() {

            @Override
            public void run() {
                if (diabolicRecoveryTask != null) {
                    diabolicRecoveryTask.cancel(true);
                    diabolicRecoveryTask = null;
                    chr.cancelEffectFromBuffStat(BuffStats.TIME, -1);
                }
            }
        }, 30000);
    }

    public static void DivineProtection(final MapleCharacter chr) {
        Timer.BuffTimer tMan = Timer.BuffTimer.getInstance();
        if (diabolicRecoveryTask != null) {
            diabolicRecoveryTask.cancel(true);
            diabolicRecoveryTask = null;
        }
        Runnable r = new Runnable() {
            @Override
            public void run() {
                List<DiseaseStats> cancel = new ArrayList<DiseaseStats>();
                cancel.add(DiseaseStats.BLIND);
                cancel.add(DiseaseStats.CURSE);
                cancel.add(DiseaseStats.DISABLE_POTENTIAL);
                cancel.add(DiseaseStats.FLAG);
                cancel.add(DiseaseStats.FREEZE);
                cancel.add(DiseaseStats.POISON);
                cancel.add(DiseaseStats.MORPH);
                cancel.add(DiseaseStats.NULL);
                cancel.add(DiseaseStats.POTION);
                cancel.add(DiseaseStats.REVERSE_DIRECTION);
                cancel.add(DiseaseStats.SEAL);
                cancel.add(DiseaseStats.SEDUCE);
                cancel.add(DiseaseStats.SHADOW);
                cancel.add(DiseaseStats.SLOW);
                cancel.add(DiseaseStats.STUN);
                cancel.add(DiseaseStats.TELEPORT);
                cancel.add(DiseaseStats.TORNADO);
                cancel.add(DiseaseStats.WEAKEN);
                cancel.add(DiseaseStats.ZOMBIFY);
                for (DiseaseStats statlulz : cancel) {
                    if (chr.hasDisease(statlulz)) {
                        chr.cancelEffectFromBuffStat(BuffStats.TIME, 2311012);
                        chr.Message("디바인 프로텍션의 효과로 상태이상이 1회 면역됩니다.");
                        chr.dispelDebuff(statlulz);
                        diabolicRecoveryTask.cancel(true);
                        diabolicRecoveryTask = null;
                    }
                }
            }
        };
        diabolicRecoveryTask = tMan.register(r, 1000);
        tMan.schedule(new Runnable() {

            @Override
            public void run() {
                if (diabolicRecoveryTask != null) {
                    diabolicRecoveryTask.cancel(true);
                    diabolicRecoveryTask = null;
                    chr.cancelEffectFromBuffStat(BuffStats.TIME, -1);
                }
            }
        }, 1000 * 180);
    }

//    public static void startStimulation(final MapleCharacter chr) {
//        BuffTimer tMan = BuffTimer.getInstance();
//        if (diabolicRecoveryTask != null) {
//            diabolicRecoveryTask.cancel(true);
//            diabolicRecoveryTask = null;
//        }
//        Runnable r = new Runnable() {
//
//            @Override
//            public void run() {
//                chr.addEnergyCharge(800);
//            }
//        };
//        diabolicRecoveryTask = tMan.register(r, 4000);
//        tMan.schedule(new Runnable() {
//
//            @Override
//            public void run() {
//                if (diabolicRecoveryTask != null) {
//                    diabolicRecoveryTask.cancel(true);
//                    diabolicRecoveryTask = null;
//                }
//            }
//        }, 120000);
//    }

}
