var eventmapid = 220080001;
var returnmap = 262000100;

var monster = new Array(
    4130103, // Rombot
    9300039, // Papa Pixie
    9300119, // Lord Pirate
    9300152, // Angry Franken Lloyd
    9300028, // Ergoth
    8180000, // Manon
    8180001, // Griffey
    8220003, // Lev
    8210011, // Ani (Second Tower)
    9400014, // Black Crow
    8500001 // Papulatus
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
    map.spawnNpc(9000002, new java.awt.Point(-758, -557));

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
	case 8180000:
	case 8180001: //Manon Griffey
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 12);
	    modified.setOHp(mob.getMobMaxHp() * 24);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);
	    mob.setOverrideStats(modified);
	    break;
	case 4130103: // Rombot
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 20);
	    modified.setOHp(mob.getMobMaxHp() * 48);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 8220003: // Lev
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 9);
	    modified.setOHp(mob.getMobMaxHp() * 18);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 9300119: // Lord Pirate
	case 9300152: // Angry Frankenlloyd
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 9);
	    modified.setOHp(mob.getMobMaxHp() * 18);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 9300028: // Ergoth
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 9);
	    modified.setOHp(mob.getMobMaxHp() * 18);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 8500001: // Papulatus
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 7.3); //2nd body gives exp as well
	    modified.setOHp(mob.getMobMaxHp() * 15);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 9400014: // Black Crow
	case 9300039: // Papa Pixie
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 4.5);
	    modified.setOHp(mob.getMobMaxHp() * 9);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);

	    mob.setOverrideStats(modified);
	    break;
	case 8210011: // Ani 2
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 3.2);
	    modified.setOHp(mob.getMobMaxHp() * 6);
	    modified.setOMp(mob.getMobMaxMp() * 0.8);

	    mob.setOverrideStats(modified);
	    break;
    }
    eim.registerMonster(mob);

    var map = eim.getMapInstance(0);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-400, -386));
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
    var num = mobnum * 35; // Total 1170
    var totalp = parseInt(eim.getProperty("points")) + num;

    eim.setProperty("points", totalp);

    eim.broadcastPlayerMsg(5, "스테이지를 클리어하였습니다. " + num + "포인트를 얻었습니다. < 총 스테이지포인트" + totalp + ">");

    eim.saveBossQuest(num);
    
    if (mobnum < monster.length) {
	eim.broadcastPlayerMsg(6, "준비하세요. 다음 보스가 나타납니다.");
	} else {
	eim.saveBossQuest(1000);
	eim.broadcastPlayerMsg(5, "노말 모드를 클리어하셨습니다. < 1000 포인트 추가 지급 >");
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

    eim.disposeIfPlayerBelow(100, 100);
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


function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim != null) {
        if (eim.getPlayerCount() <= 0) {
            eim.dispose();
        }
    }
}

function registerCarnivalParty(eim, carnivalparty) {
// Happens when carnival PQ is started. - Unused for now.
}

function onMapLoad(eim, player) {
// Happens when player change map - Unused for now.
}

function cancelSchedule() {
}