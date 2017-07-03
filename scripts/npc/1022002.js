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
    var eim = em.newInstance("newCharacter");
    eim.startEventTimer(1200000);
    eim.timeOut(1200000, eim);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(MainPacketCreator.getGMText(7, "�̽�ƽ �ʵ忡 �����ϽŰ��� ȯ���մϴ�."));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(931050800);
    em.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var text = "3�� �� �������Ͱ� ��ȯ�˴ϴ�.";
    eim.getMapFactory().getMap(931050800).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 3000);
    } else if (level == 1) {
        eim.schedule("summon", 3000);
    } else if (level == 2) {
        eim.schedule("summon", 3000);
    } else if (level == 3) {
        eim.schedule("summon", 3000);
    } else if (level == 4) {
        eim.schedule("summon", 3000);
    }
}
function summon(eim) {
    var text = "�̽�ƽ �ʵ忡 �������Ͱ� ��ȯ�Ǿ����ϴ�!";
    eim.getMapFactory().getMap(931050800).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        mobid = 3220001;
    } else if (level == 1) {
        mobid = 6090004;
    } else if (level == 2) {
        mobid = 5220003;
    } else if (level == 3) {
        mobid = 2600512;
    } else if (level == 4) {
        mobid = 8220002;
    }
    for (var i = 0 ; i < 1 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        eim.getMapFactory().getMap(931050800).spawnMonsterOnGroundBelow(mob, new Point(3050, 575));
    }
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(931050800);
    var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.changeMap(exit);
    chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level >= 1 && level <= 4) {
        var text = level + "�ܰ� �̽�ƽ �ʵ� �������͸� óġ�Ͽ����ϴ�.";
        eim.getMapFactory().getMap(931050800).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 5) {
        var text = "�̽�ƽ �ʵ带 Ŭ�����ϼ̽��ϴ�. ����� �������� �̵��˴ϴ�.";
        eim.getMapFactory().getMap(931050800).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.getClock(7));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(931050800).broadcastMessage(MainPacketCreator.serverNotice(6, "Ŭ���� �������� ���׿� �̽�ƽ���� 1���� ���޵Ǿ����ϴ�."));
        var chr = eim.getPlayers().iterator().next();
        eim.schedule("clearPQ", 7000);
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
   var em = cm.getEventManager("newCharacter1");
   em.startInstance(cm.getPlayer());
   cm.resetMap(931050800);
   cm.allPartyWarp(931050800, true);
    cm.dispose();
 //   var exit = em.getChannelServer().getMapFactory().getMap(931050810);
 //  var chr = eim.getPlayers().iterator().next();
    eim.removePlayer(chr);
    chr.gainItem(4031611, 1, false, -1, "���׿� �̽�ƽ ����");
   // chr.changeMap(exit, exit.getPortal("sp"));
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}