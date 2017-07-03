var eventmapid = 500000000;
var returnmap = 262000100;

var monster = new Array(
    8300006, // Dragonica
    8300007, // Dragon Rider
    8220011,
    8220004, // Dodo
    8220005, // Lillinof
    8220006, // Raika
    8800002
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
    map.spawnNpc(9000002, new java.awt.Point(-382, 48));

    eim.setProperty("points", 0);
    eim.setProperty("monster_number", 0);

    beginQuest(eim);
    return eim;
}

function beginQuest(eim) { // Custom function
    if (eim != null) {
    	eim.startEventTimer(5000); // After 5 seconds -> scheduledTimeout()
    }
}
function monsterSpawn(eim) { // Custom function
    var monsterid = monster[parseInt(eim.getProperty("monster_number"))];
    var mob = em.getMonster(monsterid);

    switch (monsterid) {
	case 8220004: // Dodo
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1400000000);
	    modified.setOMp(mob.getMobMaxMp());
	    mob.setOverrideStats(modified);
	    break;
	case 8220005: // Lillinof
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1500000000);
	    modified.setOMp(mob.getMobMaxMp());
	    mob.setOverrideStats(modified);
	    break;
	case 8220006: // Rakia
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1600000000);
	    modified.setOMp(mob.getMobMaxMp());
	    mob.setOverrideStats(modified);
	    break;
	case 8220011: // 아우프헤벤
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1200000000);
	    modified.setOMp(mob.getMobMaxMp() * 2.0);

	    mob.setOverrideStats(modified);
	    break;
	case 8300006: // Dragonoir
	case 8300007: // Dragonoir
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1000000000);
	    modified.setOMp(mob.getMobMaxMp());
	    mob.setOverrideStats(modified);
	    break;
	case 8800002: // Zakum 3
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(1700000000);
	    modified.setOMp(mob.getMobMaxMp());
	    mob.setOverrideStats(modified);
	    break;
	default:
	    modified.setOExp(2100000000);
	    break;
    }
    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(106, 408));
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
    var num = mobnum * 85;
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);

    eim.broadcastPlayerMsg(5, "스테이지를 클리어하였습니다. " + num + "포인트를 얻었습니다. < 총 스테이지포인트" + totalp + ">");
    
    eim.saveBossQuest(num);

    if (mobnum < monster.length) {
	eim.broadcastPlayerMsg(6, "준비하세요. 다음 보스가 나타납니다.");
} else {
	eim.saveBossQuest(3000);
	eim.broadcastPlayerMsg(5, "하드 모드를 클리어하셨습니다. < 3000 포인트 추가 지급 >");
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
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
}


function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
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
