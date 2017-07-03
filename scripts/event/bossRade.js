importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);
var mapidnum = -1;


function init() {

}

function setup(eim) {
    var eim = em.newInstance("bossRade");
    eim.startEventTimer(300000);
    eim.timeOut(300000, eim);
    eim.setProperty("point", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(UIPacket.showInfo("-발레리- " + cm.getPlayer().getNme() + " 모험가님 행운을 빌어요!!")); // 보스레이드
    player.send(MainPacketCreator.getGMText(7, "스피릿스타일 치열한 보스레이드가 시작되었습니다."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(209000003);
    eim.setProperty("mapInstanceId", mapzz.getInstanceId()+"");
    player.changeMap(mapzz, mapzz.getPortal("sp"));
    player.send(UIPacket.AchievementRatio(0));
}

function announce(eim) {//이거 이벤트스크립트가 그거거든요 kms1.2.155 수련스크립트 아하
    var text = "5초 후 몬스터가 소환됩니다.";
    eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var point = Integer.parseInt(eim.getProperty("point"));
    if (point == 0) {
        eim.schedule("summon", 5000);
    } else if (point == 1) {
        eim.schedule("summon", 5000);
    } else if (point == 2) {
        eim.schedule("summon", 5000);
    } else if (point == 3) {
        eim.schedule("summon", 5000);
    }
}

function summon(eim) {
    var text = "몬스터가 소환되었습니다!";
    eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var point = Integer.parseInt(eim.getProperty("point"));
    if (point == 0) {
        mobid = 100100;
    } else if (point == 1) {
        mobid = 100122;
    } else if (point == 2) {
        mobid = 210100;
    } else if (point == 3) {
        mobid = 100124;
    }
    for (var i = 0 ; i < 10 ; i++) {
        var mob = HinaLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(209000003).spawnMonsterOnGroundBelow(mob, new Point(Randomizer.rand(-300, 300), 154));
    }
    point++;
    eim.setProperty("point", point);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(209000001);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit, exit.getPortal(0));
    chr.Message(8, "시간이 초과되었습니다. 처음부터 다시 시작해주세요.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var point = Integer.parseInt(eim.getProperty("point"));
    if (point >= 1 && point <= 3) {
        var text = "레벨 "+point+"의 몬스터를 모두 잡으셨습니다! 잠시 후 다음 레벨로 넘어갑니다.";
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.AchievementRatio(25 * point));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (point == 4) {
        var text = "수련을 모두 완수하셨습니다! 축하합니다. 잠시 후 수련장에서 나갈 수 있습니다.";
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.AchievementRatio(100));
        var chr = eim.getPlayers().iterator().next();
        var startTime = Long.parseLong(chr.getKeyValue("1stTrialStartTime"));
        chr.setKeyValue("1stJobTrialCompleteTime", (System.currentTimeMillis() - startTime)+"");
        chr.gainExp(3000, true, true, true);
        chr.gainExp(10, true, true, true);
        eim.schedule("clearPQ", 20000);
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
    chr.changeMap(exit, exit.getPortal(0));
    chr.Message(1, "발레리>>" + cm.getPlayer().getNmae() + " 님 보스레이드를 클리어하셨군요!!");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}