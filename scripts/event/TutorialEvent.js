/*

     [ PlatinumMS ]

     이 스크립트는 PlatinumMS 에서 제작한 스크립트 입니다.

     스크립트 용도 : 튜토리얼 진행 이벤트

*/

importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);
var mapidnum = -1;


function init() {
    
}

function setup(eim) {
    var eim = em.newInstance("TutorialEvent");
    eim.startEventTimer(300000);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(UIPacket.showInfo("[알림] 튜토리얼을 시작하도록 하겠습니다."));
    player.send(MainPacketCreator.getGMText(7, "[알림] 튜토리얼을 시작하도록 하겠습니다."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(209000013);
    player.changeMap(mapzz, mapzz.getPortal("sp"));
    player.send(UIPacket.AchievementRatio(0));
}

function announce(eim) {
    var text = "[알림] 잠시후에 몬스터가 소환됩니다.";
    eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 5000);
    } else if (level == 1) {
        eim.schedule("summon", 5000);
    }
}

function summon(eim) {
    var text = "[알림] 몬스터가 소환되었습니다.";
    eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.showWZEffect("UI/tutorial.img/20", 1));
    if (level == 0) {
        mobid = 100000;
    } else if (level == 1) {
        mobid = 100002;
    }
    for (var i = 0 ; i < 10 ; i++) {
        var mob = mapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(209000013).spawnMonsterOnGroundBelow(mob, new Point(Randomizer.rand(-100, 100), 154));
    }
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(209000013);
    var chr = eim.getPlayers().iterator().next();
    chr.changeMap(exit, exit.getPortal(0));
    chr.Message(8, "[알림] 튜토리얼 진행시간이 초과되었습니다. 다시 진행해주세요.");
    chr.setKeyValue("Tutorial", null);
    eim.unregisterPlayer(chr);
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 1) {
        var text = "[알림] 2단계의 몬스터를 전부 잡으셨습니다. 잠시만 기다려주세요.";
        eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.AchievementRatio(50 * level));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
        chr.gainExp(level * 330, true, true, true);
    }
    if (level == 2) {
        var text = "[알림] 튜토리얼 진행이 모두 끝났습니다. 목도리눈사람에게 말을걸어주세요.";
        var chr = eim.getPlayers().iterator().next();
        eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000013).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000013).broadcastMessage(UIPacket.AchievementRatio(100));
        
        var startTime = (chr.getKeyValue2("1stTrialStartTime"));
        chr.setKeyValue2("1stJobTrialCompleteTime", ((System.currentTimeMillis() / 1000) - startTime));
        chr.gainExp(3000, true, true, true);
        chr.gainExp(10, true, true, true);
        chr.gainItem(2000000, 50, false, -1, "튜토리얼 아이템");
        chr.gainItem(2000003, 50, false, -1, "튜토리얼 아이템");
        chr.setKeyValue("Tutorial_Complete", "1");
        eim.unregisterPlayer(chr);
        eim.dispose();
    }
}

function playerDead(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function playerRevive(eim, player) {
    
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobid) {
    return 1;
}

function leftParty(eim, player) {
    
}

function disbandParty(eim) {
    
}

function clearPQ(eim) {
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}