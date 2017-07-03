importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.launch.world);



function init() {
    
}

function announce(eim) {
    var map = eim.getMapFactory().getMap(eim.getProperty("Global_StartMap"));
    eim.setProperty("ExtremeMonsterPark_Boss", 1);
    map.broadcastMessage(MainPacketCreator.showEffect("monsterPark/extremeBoss"));
}
function announce2(eim) {
    var map = eim.getMapFactory().getMap(eim.getProperty("Global_StartMap"));
    eim.setProperty("ExtremeMonsterPark_Boss", 2);
    map.killAllMonsters(true);
    map.respawn(false);
    map.broadcastMessage(MainPacketCreator.showEffect("monsterPark/extremeBoss"));
    map.killAllMonsters(true);
    map.respawn(false);
    if (map == 951000250) {
    mobid = 100000;
    var mob = MapleLifeProvider.getMonster(mobid);
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1509, 30));
    }

}

function allMonstersDead(eim) {
    var map = eim.getMapFactory().getMap(eim.getProperty("Global_StartMap"));
    var boss = Integer.parseInt(eim.getProperty("ExtremeMonsterPark_Boss"));
if (boss == 2) {
    map.broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
    eim.setProperty("ExtremeMonsterPark_Boss", 3);
}
    map.broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
}

function setup(eim) {
    var a = Randomizer.nextInt();
    while (em.getInstance("MonsterPark_ID"+a) != null) {
        a = Randomizer.nextInt();
    }
    var eim = em.newInstance("MonsterPark_ID"+a);
    eim.startEventTimer(600000);
    return eim;
}

function playerEntry(eim, player) {
    var map = Integer.parseInt(eim.getProperty("Global_StartMap"));
    player.changeMap(eim.getMapFactory().getMap(map), eim.getMapFactory().getMap(map).getPortal("sp"));
    eim.setProperty("ExtremeMonsterPark_Boss", 0);
    eim.schedule("announce", 5000);
    player.message(6, "[�˸�] ������ũ �ͽ�Ʈ���� �����ϼ̽��ϴ�. ����� ���ϴ�!");
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    
    var exit = em.getChannelServer().getMapFactory().getMap(Integer.parseInt(eim.getProperty("Global_ExitMap")));
    var it = eim.getPlayers().iterator();
    while (it.hasNext()) {
        var chr = it.next();
        if (chr == null) {
            System.out.println("ĳ���Ͱ� NULL!");
        }
        if (exit == null) {
            System.out.println("EXIT���� NULL!");
        }
        if (exit.getPortal("sp") == null) {
            System.out.println("EXIT�� ��Ż�� NULL!");
        }
        chr.changeMap(exit, exit.getPortal("sp"));
        chr.Message(8, "������ũ �ͽ�Ʈ������ �����ϴ�.");
    }
    eim.unregisterAll();
    if (eim != null) {
	eim.dispose();
    }
}

function playerDead(eim, player) {
    return 0;
}

function playerRevive(eim, player) {
    
}

function playerDisconnected(eim, player) {
    /* 0 : ��� ������ ������ �ν��Ͻ� ����
     * 1 ~ : ���� ���� �̻��� ����� ������ ���� �������� �ν��Ͻ� ����
     * -1 ~ ���� : ���� ���� �̻��� ����� ������ �����̳�, ��Ƽ���� ������ �ν��Ͻ� ����
     */
    if (eim.getProperty("Global_MinPerson") == null) {
        return 0;
    }
    return -Integer.parseInt(eim.getProperty("Global_MinPerson"));
}

function monsterValue(eim, mobid) {
    return 1;
}

function leftParty(eim, player) {
    if (eim.getPlayerCount() < Integer.parseInt(eim.getProperty("Global_MinPerson"))) {
        var exit = em.getChannelServer().getMapFactory().getMap(Integer.parseInt(eim.getProperty("Global_ExitMap")));
        var it = eim.getPlayers().iterator();
        while (it.hasNext()) {
            var chr = it.next();
            chr.changeMap(exit, exit.getPortal(0));
            chr.Message("��Ƽ���� ��Ƽ�� �׸��ּ� ���̻� ����Ʈ�� ������ �� �����ϴ�.");
        }
        eim.unregisterAll();
        if (eim != null) {
            eim.dispose();
        }
    }
    
}

function disbandParty(eim) {
    var exit = eim.getPlayers().get(0).getClient().getChannelServer().getMapFactory().getMap(Integer.parseInt(eim.getProperty("Global_ExitMap")));
    var it = eim.getPlayers().iterator();
    while (it.hasNext()) {
        var chr = it.next();
        chr.changeMap(exit, exit.getPortal(0));
        chr.Message("��Ƽ���� ��Ƽ�� �׸��ּ� ���̻� ����Ʈ�� ������ �� �����ϴ�.");
    }
    eim.unregisterAll();
    if (eim != null) {
	eim.dispose();
    }
}

function clearPQ(eim) {
    
}

function playerExit(eim, player) {
    var exit = eim.getPlayers().get(0).getClient().getChannelServer().getMapFactory().getMap(Integer.parseInt(eim.getProperty("Global_ExitMap")));
    var it = eim.getPlayers().iterator();
    while (it.hasNext()) {
        var chr = it.next();
        chr.changeMap(exit, exit.getPortal(0));
        chr.Message("��Ƽ ����Ʈ�� �����Ͽ� ���̻� ����Ʈ�� ������ �� �����ϴ�.");
    }
    eim.unregisterAll();
    if (eim != null) {
	eim.dispose();
    }
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}