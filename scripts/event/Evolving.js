/*

	���� �¶��� �ҽ� ��ũ��Ʈ�Դϴ�.

	�ʺ� ������ ��ũ��Ʈ


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
    var eim = em.newInstance("Evolving");
    eim.startEventTimer(1200000);
    eim.timeOut(1200000, eim);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(MainPacketCreator.getGMText(7, "�������̵� �ν��ٽ��� �����ϽŰ� ȯ���մϴ�."));
    eim.schedule("announce", 3000);
    var mapzz = eim.getMapFactory().getMap(957010000);
    em.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var text = "5�� �� �������Ͱ� ��ȯ�˴ϴ�.";
    eim.getMapFactory().getMap(957010000).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 5000);
    } else if (level == 1) {
        eim.schedule("summon", 5000);
    } else if (level == 2) {
        eim.schedule("summon", 5000);
    } else if (level == 3) {
        eim.schedule("summon", 5000);
    }
}

function summon(eim) {
    var text = "�������Ͱ� ��ȯ�Ǿ����ϴ�!";
    eim.getMapFactory().getMap(957010000).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        mobid = 8510000;
    } else if (level == 1) {
        mobid = 8220003;
    } else if (level == 2) {
        mobid = 8220004;
    } else if (level == 3) {
        mobid = 8220005;
    } else if (level == 4) {
        mobid = 8220006;
    }
    for (var i = 0 ; i < 1 ; i++) {
        var mob = HinaLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(957010000).spawnMonsterOnGroundBelow(mob, new Point(30, 392));
    }
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(931050820);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit);
    chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level >= 1 && level <= 3) {
        var text = level + " �ܰ� �������� óġ�Ͽ����ϴ�.";
        eim.getMapFactory().getMap(957010000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 4) {
        var text = "�������̵带 Ŭ�����ϼ̽��ϴ�. ����� �������� �̵��˴ϴ�.";
        eim.getMapFactory().getMap(957010000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(957010000).broadcastMessage(MainPacketCreator.serverNotice(6, "�̽�ƽ�ʵ� Ŭ���� �������� ������ �̽�ƽ ���� 1���� ���޵Ǿ����ϴ�."));
        var chr = eim.getPlayers().iterator().next();
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
    var exit = em.getChannelServer().getMapFactory().getMap(2000000);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.gainItem(4031612, 1, false, -1, "���׿� �̽�ƽ ����"); 
   chr.changeMap(exit, exit.getPortal("SP"));
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}