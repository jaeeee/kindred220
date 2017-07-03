var eventmapid = 931050800;
var returnmap = 1000000;

var monster = new Array(
	2220000, //����
	6130101, //�ӽ���
	6300005, //����ӽ���
	8220007, //����ӽ���
	3220000, //������
	9300003, //ŷ������
	6220000, //����
	3300005, //�׷��̿�Ƽ�� ����ŷ
	3300006, //��忹Ƽ�� ����ŷ
	3300007 //ȭ��Ʈ��Ƽ�� ����ŷ
    );

function init() {
// After loading, ChannelServer
}

function setup(partyid) {
    var instanceName = "BossQuest" + partyid;

    var eim = em.newInstance(instanceName);
    // If there are more than 1 map for this, you'll need to do mapid + instancename
    var map = eim.createInstanceMapS(eventmapid);
    map.toggleDrops();
    map.spawnNpc(9000002, new java.awt.Point(2600, 395));

    eim.setProperty("points", 0);
    eim.setProperty("monster_number", 0);

    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
    	eim.startEventTimer(3000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);

    eim.registerMonster(mob);
    switch (monsterid) {
	case 2220000: //����
	case 6130101: //�ӽ���
	case 6300005: //����ӽ���
	case 8220007: //����ӽ���
	case 3220000: //������
	case 9300003: //ŷ������
	case 6220000: //����
	case 3300005: //�׷��̿�Ƽ�� ����ŷ
	case 3300006: //��忹Ƽ�� ����ŷ
	case 3300007: //ȭ��Ʈ��Ƽ�� ����ŷ
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 10);
	    modified.setOHp(mob.getMobMaxHp() * 30);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;	
    }


    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(3055, 575));
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapid) {
    if (mapid != eventmapid) {
	eim.unregisterPlayer(player);

	eim.disposeIfPlayerBelow(0, 0);
    }
}

function scheduledTimeout(eim) {
    var num = parseInt(eim.getProperty("monster_number"));
    if (num < monster.length) {
	monsterSpawn(eim);
	eim.setProperty("monster_number", num + 1);
    } else {
	eim.disposeIfPlayerBelow(100, returnmap);
    }
// When event timeout..

// restartEventTimer(long time)
// stopEventTimer()
// startEventTimer(long time)
// isTimerStarted()
}

function allMonstersDead(eim) {
    eim.restartEventTimer(3000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 5; // 275 ����Ʈ�� ������� ȹ���մϴ�.
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);
//
    eim.broadcastPlayerMsg(5, "[�˸�] ���������� Ŭ�����ϼ̽��ϴ�. �������� " + num + "BP�� ������ϴ�. [�������� BP : " + totalp + "]");

    eim.saveBossQuest(num); 

    if (mobnum < monster.length) {
} else {
	eim.saveBossQuest(225); // ���ʽ� ����Ʈ
	eim.broadcastPlayerMsg(2, "[Ch.1] GM���̹� : �����մϴ�. ������Ʈ ��带 Ŭ�����ϼ̽��ϴ�. [Ŭ���� BP : 500] �ݵ�� ���� �� ä��â�� <@��>�� �Է����ּ���!");
    }
// When invoking unregisterMonster(MapleMonster mob) OR killed
// Happens only when size = 0
}

function playerDead(eim, player) {
// Happens when player dies
}

function playerRevive(eim, player) {
    return true;
// Happens when player's revived.
// @Param : returns true/false
}

function playerDisconnected(eim, player) {
    return 0;
// return 0 - Deregister player normally + Dispose instance if there are zero player left
// return x that is > 0 - Deregister player normally + Dispose instance if there x player or below
// return x that is < 0 - Deregister player normally + Dispose instance if there x player or below, if it's leader = boot all
}

function monsterValue(eim, mobid) {
    return 0;
// Invoked when a monster that's registered has been killed
// return x amount for this player - "Saved Points"
}

function leftParty(eim, player) {
    // Happens when a player left the party
    eim.unregisterPlayer(player);

    var map = em.getMapFactory().getMap(returnmap);
    player.changeMap(map, map.getPortal(0));

    eim.disposeIfPlayerBelow(0, 0);
}

function disbandParty(eim, player) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, returnmap);
}

function clearPQ(eim) {
// Happens when the function EventInstanceManager.finishPQ() is invoked by NPC/Reactor script
}

function removePlayer(eim, player) {
    eim.dispose();
// Happens when the funtion NPCConversationalManager.removePlayerFromInstance() is invoked
}

function registerCarnivalParty(eim, carnivalparty) {
// Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
// Happens when player change map - Unused for now.
}

function cancelSchedule() {
}