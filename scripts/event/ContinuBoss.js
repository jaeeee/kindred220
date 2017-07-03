

importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);
var mapidnum = -1;


function init() {
    
}

function setup(eim) {
    var eim = em.newInstance("newCharacter");
    eim.startEventTimer(500 * 60 * 60);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(UIPacket.showInfo("서둘러 지원이필요합니다! 피타스에게 대화를거세요!"));
    var mapzz = eim.getMapFactory().getMap(940020000);
    player.changeMap(mapzz, mapzz.getPortal("sp"));
    player.send(UIPacket.AchievementRatio(0));
}


function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(940021000);
    var chr = eim.getPlayers().iterator().next();
    chr.Message(8, "시간이 초과되었습니다. 처음부터 다시 시작해주세요.");
    eim.unregisterPlayer(chr);
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level >= 1 && level <= 3) {
        var text = "레벨 "+level+"의 몬스터를 모두 잡으셨습니다! 잠시 후 다음 레벨로 넘어갑니다.";
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.AchievementRatio(25 * level));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
        chr.gainExp(level * 330, true, true, true);
    }
    if (level == 4) {
        var text = "수련을 모두 완수하셨습니다! 축하합니다.";
        var exit = em.getChannelServer().getMapFactory().getMap(100000000);
        var chr = eim.getPlayers().iterator().next();
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.AchievementRatio(100));
        
        var startTime = (chr.getKeyValue2("1stTrialStartTime"));
        chr.setKeyValue2("1stJobTrialCompleteTime", ((System.currentTimeMillis() / 1000) - startTime));
        chr.gainExp(3000, true, true, true);
        chr.gainExp(10, true, true, true);
        chr.gainItem(1142126, 1, false, -1, "초급 수련장에서 받은 아이템");
        chr.gainItem(2000002, 100, false, -1, "초급 수련장에서 받은 아이템");
        chr.gainItem(2000006, 70, false, -1, "초급 수련장에서 받은 아이템");
        chr.gainItem(2022000, 40, false, -1, "초급 수련장에서 받은 아이템");
        chr.setKeyValue("start_complete", "1");
        chr.changeMap(exit, exit.getPortal(0));
        chr.Message(1, "릴루아>> 전...직이 필요하신가요.....? 저에게.. 와주세요..");
        eim.unregisterPlayer(chr);
        eim.dispose();
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
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}