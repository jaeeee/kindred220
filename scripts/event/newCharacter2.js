/*

	히나 온라인 소스 스크립트입니다.

	초보 수련장 스크립트


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
    var eim = em.newInstance("newCharacter2");
    eim.startEventTimer(1200000);
    eim.timeOut(1200000, eim);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(MainPacketCreator.SpecialMessage("보스레이드 인스텐스에 입장하신걸 환영합니다."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(272000600);
    em.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var text = "5초 후 보스몬스터가 소환됩니다.";
    eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.showEffect("defense/count"));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 3000);
    } else if (level == 1) {
        eim.schedule("summon", 3000);
    } else if (level == 2) {
        eim.schedule("summon", 3000);
    } else if (level == 3) {
        eim.schedule("summon", 3000);
    }
}

function summon(eim) {
    var text = "보스몬스터가 소환되었습니다!";
    var chr = eim.getPlayers().iterator().next();
    eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.SpecialMessage(text));
    eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.showEffect("defense/wave/" + (Integer.parseInt(eim.getProperty("level")) + 1)));
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        mobid = 8220004;
    } else if (level == 1) {
        mobid = 8220005;
    } else if (level == 2) {
        mobid = 8300006;
    } else if (level == 3) {
        mobid = 8800002;
    }
    for (var i = 0 ; i < 1 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(272000600).spawnMonsterOnGroundBelow1(mob, new Point(918, 2), chr);
    }
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(272000600);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit);
    chr.Message(8, "시간이 초과되었습니다. 처음부터 다시 시작해주세요.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level >= 1 && level <= 3) {
        var text = level + " 단계 보스를 처치하였습니다.";
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.SpecialMessage(text));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.schedule("announce", 3000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 4) {
        var text = "보스레이드를 클리어하셨습니다. 잠시후 광장으로 이동됩니다.";
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.SpecialMessage(text));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.getClock(5));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.serverNotice(6, "클리어 보상으로 보스포인트 45점을 휙득하셨습니다."));
        var chr = eim.getPlayers().iterator().next();
        eim.schedule("clearPQ", 5000);
    }
}

function playerDead(eim, player) {
    eim.unregisterPlayer(player);
    //if (eim.getPlayerCount() <= 0) {
        eim.dispose();
    //}
}

function playerRevive(eim, player) {
    
}

function playerDisconnected(eim, player) {
    /* 0 : 모두 나갈때 까지는 인스턴스 유지
     * 1 ~ : 일정 수준 이상의 사람만 남으면 누가 나가던지 인스턴스 유지
     * -1 ~ 이하 : 일정 수준 이상의 사람만 남으면 유지이나, 파티장이 나가면 인스턴스 삭제
     */
    return 0;
}

function monsterValue(eim, mobid) {
    /*
     * 킬 카운트를 더할 숫자 반환
     */
    return 1;
}

function leftParty(eim, player) {
    
}

function disbandParty(eim) {
    
}

function clearPQ(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(100000000);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    eim.addboss(chr,45);
    chr.changeMap(exit, exit.getPortal("sp"));
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}