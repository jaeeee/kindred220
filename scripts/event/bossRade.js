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
    player.send(UIPacket.showInfo("-�߷���- " + cm.getPlayer().getNme() + " ���谡�� ����� �����!!")); // �������̵�
    player.send(MainPacketCreator.getGMText(7, "���Ǹ���Ÿ�� ġ���� �������̵尡 ���۵Ǿ����ϴ�."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(209000003);
    eim.setProperty("mapInstanceId", mapzz.getInstanceId()+"");
    player.changeMap(mapzz, mapzz.getPortal("sp"));
    player.send(UIPacket.AchievementRatio(0));
}

function announce(eim) {//�̰� �̺�Ʈ��ũ��Ʈ�� �װŰŵ�� kms1.2.155 ���ý�ũ��Ʈ ����
    var text = "5�� �� ���Ͱ� ��ȯ�˴ϴ�.";
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
    var text = "���Ͱ� ��ȯ�Ǿ����ϴ�!";
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
    chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var point = Integer.parseInt(eim.getProperty("point"));
    if (point >= 1 && point <= 3) {
        var text = "���� "+point+"�� ���͸� ��� �����̽��ϴ�! ��� �� ���� ������ �Ѿ�ϴ�.";
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(209000003).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(209000003).broadcastMessage(UIPacket.AchievementRatio(25 * point));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (point == 4) {
        var text = "������ ��� �ϼ��ϼ̽��ϴ�! �����մϴ�. ��� �� �����忡�� ���� �� �ֽ��ϴ�.";
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
    var exit = em.getChannelServer().getMapFactory().getMap(100000000);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit, exit.getPortal(0));
    chr.Message(1, "�߷���>>" + cm.getPlayer().getNmae() + " �� �������̵带 Ŭ�����ϼ̱���!!");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}