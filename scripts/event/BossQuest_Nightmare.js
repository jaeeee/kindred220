var eventmapid = 931050800;
var returnmap = 1000000;

var monster = new Array(
	7220003, // 베르가모트
	8800002, // 자쿰
	8800102, // 카오스 자쿰
	8820001, // 핑크빈
	8820212, // 카오스 핑크빈
	7120115, // 엘리트 스피어 임프
	8850000, // 미하일
	8850001, // 오즈
	8850002, // 이리나
	8850003, // 이카르트
	8850004 // 호크아이

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
    	eim.startEventTimer(31000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);

    eim.registerMonster(mob);
    switch (monsterid) {
	case 7220003: // 베르가모트
	case 8800002: // 자쿰
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(12500000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;	
	case 8800102: // 카오스 자쿰
	case 8820001: // 핑크빈
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(42500000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 8820212: // 카오스 핑크빈
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(125000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 7120115: // 엘리트 스피어 임프
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(290000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 8850000: // 미하일
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(425000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 8850001: // 오즈
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(720000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 8850002: // 이리나
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(880000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
	    mob.setOverrideStats(modified);
	    break;
	case 8850004: // 호크아이
	    var modified = em.newMonsterStats();
	    modified.setOExp(2100000000);
	    modified.setOHp(1000000000000);
	    modified.setOMp(mob.getMobMaxMp() * 100);
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
    eim.restartEventTimer(21000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 0; // 0 포인트를 사냥으로 획득합니다.
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);

    eim.broadcastPlayerMsg(5, "[알림] 스테이지를 클리어하셨습니다. 모든 스테이지를 통과하면 BP를 얻으실 수 있습니다.");

    eim.saveBossQuest(num); 

    if (mobnum < monster.length) {
} else {
	eim.saveBossQuest(1000000); // 보너스 포인트
	eim.broadcastPlayerMsg(2, "[Ch.1] GM베인님 : 축하합니다. 나이트메어 모드를 클리어하셨습니다. [클리어 BP : 100만] 반드시 퇴장 후 채팅창에 <@랙>을 입력해주세요!");
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