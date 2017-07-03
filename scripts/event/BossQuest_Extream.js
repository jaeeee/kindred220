var eventmapid = 931050800;
var returnmap = 1000000;

var monster = new Array(
	9001014, // 폭주한 마하 (200만)
	8180000, // 마뇽 375
	8180001, // 그리프 
	5250004, // 차우 (637만 5000)
	5250007, // 에피네아 (1425만)
	8140510, // 푸소 (1000)
	8220011, // 아우프헤벤 (1769만 7196)
	8220012, // 오베론 (2167만 9692)
	8870104, // 블투(520만)
	9001010 // 검은 마녀 (930만)

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
    	eim.startEventTimer(21000); // After 5 seconds -> scheduledTimeout()
    }
}

function monsterSpawn(eim) { // Custom function
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);

    eim.registerMonster(mob);
    switch (monsterid) {
	case 9001014: // 폭주한 마하 (200만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(400000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;	
	case 8180000: // 마뇽쨩 (375만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(600000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 8180001: // 그리프쨩
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(800000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 9300482: // 켄타로우스 킹 (515만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(1900000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 5250004: // 차우 (637만 5000)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(3200000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 5250007: // 에피네아 (1425만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(6700000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 8140510: // 푸소 1545만 7418)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(12500000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 8220011: // 아우프헤벤 (1769만 7196)
	case 8220012: // 오베론 (2167만 9692)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(32000000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;
	case 8870104: // 블러드투스 (520만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(64000000000);
	    modified.setOMp(mob.getMobMaxMp() * 1);
	    mob.setOverrideStats(modified);
	    break;	
	case 9001010: // 검은 마녀 (930만)
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 15);
	    modified.setOHp(90000000000);
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
    eim.restartEventTimer(11000);

    var mobnum = parseInt(eim.getProperty("monster_number"));
    var num = mobnum * 0; // 0 포인트를 사냥으로 획득합니다.
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);

    eim.broadcastPlayerMsg(5, "[알림] 스테이지를 클리어하셨습니다. 모든 스테이지를 통과하면 BP를 얻으실 수 있습니다.");

    eim.saveBossQuest(num); 

    if (mobnum < monster.length) {
} else {
	eim.saveBossQuest(15000); // 보너스 포인트
	eim.broadcastPlayerMsg(2, "[Ch.1] GM베인님 : 축하합니다. 익스트림 모드를 클리어하셨습니다. [클리어 BP : 15000] 반드시 퇴장 후 채팅창에 <@랙>을 입력해주세요!");
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