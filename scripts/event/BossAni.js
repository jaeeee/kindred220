/*

copyright �� 2014 �� ����. all rights reserved

������ �ƴ�


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
    var eim = em.newInstance("BossAni");
    eim.startEventTimer(1200000);
    eim.timeOut(1200000, eim);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    eim.schedule("announce", 2000);
    var mapzz = eim.getMapFactory().getMap(921133000);
    em.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var text = "3�� �� �������� ������ �ƴϰ� ��� �մϴ�.";
    var text1 = "���ݸ� ��ٷ��ּ���";
    eim.getMapFactory().getMap(921133000).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(921133000).broadcastMessage(UIPacket.showInfo(text1));
    eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 2000);
    }
}

function summon(eim) {
    var text = "������ �ƴϰ� ��� �߽��ϴ�!";
    eim.getMapFactory().getMap(921133000).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        mobid = 8210013;
    }
    for (var i = 0 ; i < 1 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 1.5);
	    modified.setOHp(mob.getMobMaxHp() * 8);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);
	    mob.setOverrideStats(modified);
        eim.getMapFactory().getMap(921133000).spawnMonsterOnGroundBelow(mob, new Point(580, -215));
    }
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(921133000);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit);
    chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        var text = "������ �ƴ� ��ġ�� ���� �Ͽ����ϴ�. NPC �絧�� ���� �̵��Ͽ� �ּ���";
        eim.getMapFactory().getMap(921133000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 1) {
        var text = "������ �ƴ� ��ġ�� ���� �ϼ̽��ϴ�. 5���� ��������� �̵��մϴ�.";
        eim.getMapFactory().getMap(921133000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.getClock(10));
        eim.getMapFactory().getMap(921133000).broadcastMessage(MainPacketCreator.serverNotice(6, text));;
        var chr = eim.getPlayers().iterator().next();
        eim.schedule("clearPQ", 10000);
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
    /* 0 : ��� ������ ������ �ν��Ͻ� ����
     * 1 ~ : ���� ���� �̻��� ����� ������ ���� �������� �ν��Ͻ� ����
     * -1 ~ ���� : ���� ���� �̻��� ����� ������ �����̳�, ��Ƽ���� ������ �ν��Ͻ� ����
     */
    return 0;
}

function monsterValue(eim, mobid) {
    /*
     * ų ī��Ʈ�� ���� ���� ��ȯ
     */
    return 1;
}

function leftParty(eim, player) {
    
}

function disbandParty(eim) {
    
}

function clearPQ(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(921132000);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
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