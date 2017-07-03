/*
 Maple Team ProJect
 제작 용도 : 서버운영용
 팀원목록
 * 강동원 dongwon1852@nate.com 
 * 김선일 fileupload@nate.com
 * 김석현 azxcs3@nate.com
 * 김진성 m0nday_s@nate.com
 * 공준협 kkong1001@nate.com
 * 김민호 rubystory0603@nate.com
 * 이재왕 ejwj5592@nate.com
 * 최용재 virgo_s_t@nate.com
 * 서성덕 abq1239@nate.com
 */
package server.maps;

import constants.subclasses.QuickMove;
import client.MapleClient;
import client.MapleCharacter;
import client.skills.SkillFactory;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import packet.creators.MobPacket;
import packet.creators.UIPacket;
import packet.opcode.SendPacketOpcode;
import packet.transfer.write.WritingPacket;
import server.items.ItemInformation;
import server.life.MapleLifeProvider;
import server.life.MapleMonster;
import server.life.OverrideMonsterStats;
import tools.RandomStream.Randomizer;
import tools.Timer.MapTimer;
import java.awt.Point;

public class MapleMapScriptMethods {

    private static final Point witchTowerPos = new Point(-60, 184);
    private static final String[] mulungEffects = {
        "무릉도장에 도전한 것을 후회하게 해주겠다! 어서 들어와봐!",
        "기다리고 있었다! 용기가 남았다면 들어와 보시지!",
        "배짱 하나는 두둑하군! 현명함과 무모함을 혼동하지말라고!",
        "무릉도장에 도전하다니 용기가 가상하군!",
        "패배의 길을 걷고싶다면 들어오라고!"};

    private static enum onFirstUserEnter {

        dojang_Eff, PinkBeen_before, onRewordMap,mpark_mobRegen, mPark_summonBoss, banban_Summon, NULL;

        private static onFirstUserEnter fromString(String Str) {
            try {
                return valueOf(Str);
            } catch (IllegalArgumentException ex) {
                return NULL;
            }
        }
    };

    private static enum onUserEnter {
        
        startEreb,
        dojang_Msg,
        dojang_1st,
        cygnus_Summon,
      
        mPark_stageEff,
        aswan_stageEff,
        standbyAswan,
        starforce_enter,
        NULL;

        private static onUserEnter fromString(String Str) {
            try {
                return valueOf(Str);
            } catch (IllegalArgumentException ex) {
                return NULL;
            }
        }
    };

    public static void startScript_FirstUser(MapleClient c, String scriptName) {
        switch (onFirstUserEnter.fromString(scriptName)) {
            case dojang_Eff: {
                int temp = (c.getPlayer().getMapId() - 925000000) / 100;
                int stage = (int) (temp - (Math.floor(temp / 100) * 100));

                sendDojoClock(c, getTiming(stage) * 60);
                sendDojoStart(c, stage - getDojoStageDec(stage));
                break;
            }
            case PinkBeen_before: {
                handlePinkBeanStart(c);
                break;
            }
            case onRewordMap: {
                reloadWitchTower(c);
                break;
            }
            case mPark_summonBoss:
            case mpark_mobRegen: {
                for (MapleMapObject mob : c.getPlayer().getMap().getAllMonster()) {
                    c.getPlayer().getEventInstance().registerMonster((MapleMonster) mob);
                }
                break;
            }
            case banban_Summon: {
                c.getPlayer().getMap().startMapEffect("차원의 틈에서 반반을 소환하자.", 5120025, 5000);
                break;
            }
            default: {
                //System.out.println("Unhandled script : " + scriptName + ", type : onFirstUserEnter - MAPID " + c.getPlayer().getMapId());
                break;
            }
        }
    }

    public static void startScript_User(final MapleClient c, String scriptName) {
        String data = "";
        switch (onUserEnter.fromString(scriptName)) {
            case dojang_Msg: {
                c.getPlayer().getMap().startMapEffect(mulungEffects[Randomizer.nextInt(mulungEffects.length)], 5120024);
                break;
            }
            case dojang_1st: {
                c.getPlayer().writeMulungEnergy();
                break;
            }
            case cygnus_Summon: {
                c.getPlayer().getMap().startMapEffect("이곳을 찾아 온 사람을 보는 것은 정말 오랜만이예요. 하지만 무사히 돌아간 분도 없었답니다.", 5120043);
                break;
            }
            case mPark_stageEff: {
                c.getPlayer().send(UIPacket.showInfo("몬스터를 모두 잡아야 다음 스테이지로 이동할 수 있습니다."));
                switch ((c.getPlayer().getMapId() % 1000) / 100) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        c.getSession().write(MainPacketCreator.showEffect("monsterPark/stageEff/stage"));
                        c.getSession().write(MainPacketCreator.showEffect("monsterPark/stageEff/number/" + (((c.getPlayer().getMapId() % 1000) / 100) + 1)));
                        break;
                    case 5:
                        c.getSession().write(MainPacketCreator.showEffect("monsterPark/stageEff/final"));
                        break;
                }
                break;
            }
            case aswan_stageEff: {
                c.getPlayer().send(UIPacket.showInfo("필드 내의 모든 몬스터를 제거해야 다음 스테이지로 이동하실 수 있습니다."));
                switch ((c.getPlayer().getMapId() % 1000) / 100) {
                    case 1:
                    case 2:
                    case 3:
                        c.getSession().write(MainPacketCreator.showEffect("aswan/stageEff/stage"));
                        c.getSession().write(MainPacketCreator.showEffect("aswan/stageEff/number/" + (((c.getPlayer().getMapId() % 1000) / 100))));
                        break;
                }
                synchronized (MapleMapScriptMethods.class) {
                    for (MapleMapObject mon : c.getPlayer().getMap().getAllMonster()) {
                        MapleMonster mob = (MapleMonster) mon;
                        if (mob.getEventInstance() == null) {
                            c.getPlayer().getEventInstance().registerMonster(mob);
                        }
                    }
                }
                break;
            }
            case starforce_enter: {
                c.getPlayer().getMap().startMapEffect(c.getPlayer().getMap().getBarrier() + " 이상의 스타포스가 필요한 지역입니다.", 5120024);
                break;
            }
            default: {
                //System.out.println("Unhandled script : " + scriptName + ", type : onUserEnter - MAPID " + c.getPlayer().getMapId());
                break;
            }
        }
    }

    private static final int getTiming(int ids) {
        if (ids <= 5) {
            return 5;
        } else if (ids >= 7 && ids <= 11) {
            return 6;
        } else if (ids >= 13 && ids <= 17) {
            return 7;
        } else if (ids >= 19 && ids <= 23) {
            return 8;
        } else if (ids >= 25 && ids <= 29) {
            return 9;
        } else if (ids >= 31 && ids <= 35) {
            return 10;
        } else if (ids >= 37 && ids <= 38) {
            return 15;
        }
        return 0;
    }

    private static final int getDojoStageDec(int ids) {
        if (ids <= 5) {
            return 0;
        } else if (ids >= 7 && ids <= 11) {
            return 1;
        } else if (ids >= 13 && ids <= 17) {
            return 2;
        } else if (ids >= 19 && ids <= 23) {
            return 3;
        } else if (ids >= 25 && ids <= 29) {
            return 4;
        } else if (ids >= 31 && ids <= 35) {
            return 5;
        } else if (ids >= 37 && ids <= 38) {
            return 6;
        }
        return 0;
    }

    private static void showIntro(final MapleClient c, final String data) {
        c.getSession().write(UIPacket.IntroDisableUI(true));
        c.getSession().write(UIPacket.showWZEffect(data, 0));
    }

    private static void sendDojoClock(MapleClient c, int time) {
        c.getSession().write(MainPacketCreator.getClock(time));
    }

    private static void sendDojoStart(MapleClient c, int stage) {
        c.getSession().write(MainPacketCreator.environmentChange("Dojang/start", 5)); //1.2.220+
	c.getSession().write(MainPacketCreator.environmentChange("dojang/start/stage", 12)); //1.2.220+
        c.getSession().write(MainPacketCreator.environmentChange("dojang/start/number/" + stage, 12)); //1.2.220+

        WritingPacket packet = new WritingPacket();

        packet.writeShort(SendPacketOpcode.BOSS_ENV.getValue());
        packet.writeShort(1);
        packet.writeShort(1);
        packet.writeShort(0);

        c.getSession().write(packet.getPacket());
    }

    private static void handlePinkBeanStart(MapleClient c) {
        final MapleMap map = c.getPlayer().getMap();
        map.killAllMonsters(true);
        map.respawn(true);

        if (map.containsNPC(2141000) == -1) {
            map.spawnNpc(2141000, new Point(-190, -42));
        }
    }

    private static void reloadWitchTower(MapleClient c) {
        final MapleMap map = c.getPlayer().getMap();
        map.killAllMonsters(false);

        final int level = c.getPlayer().getLevel();
        int mob;
        if (level <= 10) {
            mob = 9300367;
        } else if (level <= 20) {
            mob = 9300368;
        } else if (level <= 30) {
            mob = 9300369;
        } else if (level <= 40) {
            mob = 9300370;
        } else if (level <= 50) {
            mob = 9300371;
        } else if (level <= 60) {
            mob = 9300372;
        } else if (level <= 70) {
            mob = 9300373;
        } else if (level <= 80) {
            mob = 9300374;
        } else if (level <= 90) {
            mob = 9300375;
        } else if (level <= 100) {
            mob = 9300376;
        } else {
            mob = 9300377;
        }
        map.spawnMonsterOnGroundBelow(MapleLifeProvider.getMonster(mob), witchTowerPos);
    }
}
