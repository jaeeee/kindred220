var eventmapid = 931050800;
var returnmap = 1000000;

var monster = new Array(
	2220000, //마노
	6130101, //머쉬맘
	6300005, //블루머쉬맘
	8220007, //좀비머쉬맘
	3220000, //스텀피
	9300003, //킹슬라임
	6220000, //다일
	3300005, //그레이예티와 페페킹
	3300006, //골드예티와 페페킹
	3300007 //화이트예티와 페페킹
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
	case 2220000: //마노
	case 6130101: //머쉬맘
	case 6300005: //블루머쉬맘
	case 8220007: //좀비머쉬맘
	case 3220000: //스텀피
	case 9300003: //킹슬라임
	case 6220000: //다일
	case 3300005: //그레이예티와 페페킹
	case 3300006: //골드예티와 페페킹
	case 3300007: //화이트예티와 페페킹
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
    var num = mobnum * 5; // 275 포인트를 사냥으로 획득합니다.
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);
//
    eim.broadcastPlayerMsg(5, "[알림] 스테이지를 클리어하셨습니다. 보상으로 " + num + "BP를 얻었습니다. [스테이지 BP : " + totalp + "]");

    eim.saveBossQuest(num); 

    if (mobnum < monster.length) {
} else {
	eim.saveBossQuest(225); // 보너스 포인트
	eim.broadcastPlayerMsg(2, "[Ch.1] GM세이버 : 축하합니다. 엑스퍼트 모드를 클리어하셨습니다. [클리어 BP : 500] 반드시 퇴장 후 채팅창에 <@랙>을 입력해주세요!");
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