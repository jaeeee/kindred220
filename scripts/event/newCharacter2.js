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
    var eim = em.newInstance("newCharacter2");
    eim.startEventTimer(1200000);
    eim.timeOut(1200000, eim);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(MainPacketCreator.SpecialMessage("�������̵� �ν��ٽ��� �����ϽŰ� ȯ���մϴ�."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(272000600);
    em.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var text = "5�� �� �������Ͱ� ��ȯ�˴ϴ�.";
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
    var text = "�������Ͱ� ��ȯ�Ǿ����ϴ�!";
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
    chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level >= 1 && level <= 3) {
        var text = level + " �ܰ� ������ óġ�Ͽ����ϴ�.";
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.SpecialMessage(text));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.schedule("announce", 3000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 4) {
        var text = "�������̵带 Ŭ�����ϼ̽��ϴ�. ����� �������� �̵��˴ϴ�.";
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.SpecialMessage(text));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.getClock(5));
        eim.getMapFactory().getMap(272000600).broadcastMessage(MainPacketCreator.serverNotice(6, "Ŭ���� �������� ��������Ʈ 45���� �׵��ϼ̽��ϴ�."));
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