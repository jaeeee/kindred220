/*

     [ PlatinumMS ]

     �� ��ũ��Ʈ�� PlatinumMS ���� ������ ��ũ��Ʈ �Դϴ�.

     ��ũ��Ʈ �뵵 : �ƽ��� ���� �̺�Ʈ

*/

importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.launch.world);

function init() {
    
}

function setup(eim) {
    var a = Randomizer.nextInt();
    while (em.getInstance("AswanOffSeason_ID"+a) != null) {
        a = Randomizer.nextInt();
    }
    var eim = em.newInstance("AswanOffSeason_ID"+a);
    return eim;
}

function playerEntry(eim, player) {
    var map = Integer.parseInt(eim.getProperty("Global_StartMap"));
    player.changeMap(eim.getMapFactory().getMap(map), eim.getMapFactory().getMap(map).getPortal("sp"));
}



function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    
    var exit = em.getChannelServer().getMapFactory().getMap(Integer.parseInt(eim.getProperty("Global_ExitMap")));
    var it = eim.getPlayers().iterator();
    while (it.hasNext()) {
        var chr = it.next();
        if (chr == null) {
            System.out.println("[�˸�] ĳ���Ͱ� �����ϴ�.");
        }
        if (exit == null) {
            System.out.println("[�˸�] �ⱸ�� �����ϴ�.");
        }
        if (exit.getPortal("sp") == null) {
            System.out.println("[�˸�] ��Ż�� �����ϴ�.");
        }
        chr.changeMap(exit, exit.getPortal("sp"));
        chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    }
    eim.unregisterAll();
    if (eim != null) {
        eim.dispose();
    }
}

function allMonstersDead(eim) {
    var startmap = Integer.parseInt(eim.getProperty("Global_StartMap"));
    var curstage = Integer.parseInt(eim.getProperty("CurrentStage"));
    var curmap = (startmap + ((curstage - 1) * 100));
    var map = eim.getMapFactory().getMap(curmap);
    if (curstage <= 3) {
        map.broadcastMessage(MainPacketCreator.showEffect("aswan/clear"));
    } else {
        map.broadcastMessage(MainPacketCreator.showEffect("aswan/clearF"));
    }
    map.broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
    eim.setProperty("CurrentStage", (curstage + 1)+"");
}

function playerDead(eim, player) {
    var startmap = Integer.parseInt(eim.getProperty("Global_StartMap"));
    var curstage = Integer.parseInt(eim.getProperty("CurrentStage"));
    var curmap = (startmap + ((curstage - 1) * 100));
    var map = eim.getMapFactory().getMap(curmap);
    map.broadcastMessage(AswanPacket.showDead());
    return true;
}

function playerRevive(eim, player) {
    
}

function playerDisconnected(eim, player) {
    if (eim.getProperty("Global_MinPerson") == null) {
        return -1;
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