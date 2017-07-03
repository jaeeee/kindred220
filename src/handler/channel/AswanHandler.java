/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import client.stats.PlayerStat;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import scripting.EventInstanceManager;
import scripting.EventManager;
import server.maps.MapleMap;

/**
 *
 * @author 4차원
 */
public class AswanHandler {
    private static EventInstanceManager eim;
    private static EventManager em;
    public static void EnterAswan(final MapleClient c) {
        AswanWarp(c, 262000300);
    }
    
    public static void EnterAswanField(final ReadingMaple rm, final MapleClient c) {
        em = c.getChannelServer().getEventSM().getEventManager("AswanEvent");
        byte type; // 점령=0 , 공격=1, 방어=2, 보급=3
        byte mode; // EASY=0, NORMAL=1, HARD=2, HELL=3
        byte count; // SOLO=0, PARTY=1
        type = rm.readByte();
        mode = rm.readByte();
        count = rm.readByte();
        //final List<Integer> maps = new ArrayList<Integer>();
        
        switch (type) {
            case 0: // 점령
                if (mode == 0) { // EASY
                    if (count == 0) { // SOLO
                        eim = em.readyInstance();
                        eim.setProperty("Global_StartMap", 262020000+"");
                        eim.setProperty("Global_ExitMap", 262000000+"");
                        eim.setProperty("Global_MinPerson", 1+"");
                        eim.setProperty("Global_RewardMap", 262000000+"");
                        eim.setProperty("CurrentStage", "1");
                        eim.startEventTimer(1200000);
                        eim.registerPlayer(c.getPlayer());
                        //prepareAswanMob(c, 955000100, eim);
                    } else { // PARTY
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    }
                } else if (mode == 1) { // NORMAL
                    if (count == 0) { // SOLO
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    } else { // PARTY
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    }
                } else if (mode == 2) { // HARD
                    if (count == 0) { // SOLO
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    } else { // PARTY
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    }
                } else if (mode == 3) { // HELL
                    if (count == 0) { // SOLO
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    } else { // PARTY
                        c.send(MainPacketCreator.getGMText(7, "죄송합니다. 현재 구현중입니다."));
                        c.send(MainPacketCreator.resetActions());
                    }
                }
                break;
            case 1: // 공격
                break;
            case 2: // 방어
                break;
            case 3: // 보급
                break;
            default: // 그 외의 경우
                break;
        }
    }
    
    public static void RequestAswanDead(MapleClient c) {
        eim = em.readyInstance();
        em = c.getChannelServer().getEventSM().getEventManager("AswanEvent");
        c.getPlayer().updateSingleStat(PlayerStat.HP, 50);
        c.getPlayer().getStat().setHp(50);
        AswanWarp(c, c.getPlayer().getMapId());
        c.getSession().write(MainPacketCreator.resetActions());
        eim.registerPlayer(c.getPlayer());
    }
    
    public static void AswanWarp(MapleClient c, int mapid) {
        c.getPlayer().changeMap(c.getChannelServer().getMapFactory().getMap(mapid), c.getChannelServer().getMapFactory().getMap(mapid).getPortal(0));
    }
    
    public static void prepareAswanMob(MapleClient c,int mapid, EventInstanceManager eim) {
        MapleMap map = eim.getMapFactory().getMap(mapid);
        if (c.getPlayer().getParty() != null) {
            map.setChangeableMobOrigin(ChannelServer.getInstance(c.getChannel()).getPlayerStorage().getCharacterById(c.getPlayer().getParty().getLeader().getId()));
        } else {
            map.setChangeableMobOrigin(c.getPlayer());
        }
        map.killAllMonsters(false);
        map.respawn(true);
    }
}
