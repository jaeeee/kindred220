


/*

	ǻ�� �¶��� �ҽ� ��ũ��Ʈ�Դϴ�.

	�̴ϴ��� ��ũ��Ʈ


*/

importPackage(java.lang);
importPackage(java.awt);
importPackage(Packages.tools.RandomStream);

function init() {
    
}

function setup(eim) {
    var eim = em.newInstance("MiniDungeon_"+Randomizer.nextInt());
    return eim;
}

function playerEntry(eim, player) {
    var id = -1;
    if (player.getParty() != null) {
        id = player.getParty().getLeader().getId();
    } else {
        id = player.getId();
    }
    
    var mapid = em.getProperty("Leader_"+id+"_Map");
    var mapzz = eim.getMapFactory().getMap(mapid);
    player.changeMap(mapzz, mapzz.getPortal("sp"));
}

function changedMap(eim, player, mapid) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
}

function scheduledTimeout(eim) {
    var id = -1;
    if (eim.getPlayers().get(0).getParty() != null) {
        id = eim.getPlayers().get(0).getParty().getLeader().getId();
    } else {
        id = eim.getPlayers().get(0).getId();
    }
    var exitmapid = eim.getProperty("Leader_"+id+"_Exit");
    var exit = em.getChannelServer().getMapFactory().getMap(exitmapid);
    var it = eim.getPlayers().iterator();
    while (it.hasNext()) {
        var chr = eim.getPlayers().iterator().next();
        eim.removePlayer(chr);
        chr.changeMap(exit, exit.getPortal(0));
        chr.Message(8, "�ð��� �ʰ��Ǿ����ϴ�. ó������ �ٽ� �������ּ���.");
    }
    eim.dispose();
}

function allMonstersDead(eim) {
    
}

function playerDead(eim, player) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
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
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}