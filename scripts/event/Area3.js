importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage (java.util);
importPackage (Packages.tools);
importPackage (Packages.server.quest);
importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.client.items);
importPackage(Packages.tools.RandomStream);
importPackage(java.lang);
importPackage(Packages.client.inventory);


var mapidnum = -1;


function init() {
    
}

function setup(eim) {
    var eim = em.newInstance("newCharacter2");
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(UIPacket.showInfo("아카이럼 : 여기에 들어온 무례한자는 누구냐!"));
    player.send(MainPacketCreator.getGMText(7, "아카이럼 : 여기에 들어온 무례한자는 누구냐!"));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(932100002);
    player.changeMap(mapzz, mapzz.getPortal("sp"));
}

function announce(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 5000);
    } else if (level == 1) {
        eim.schedule("summon", 5000);
    }
}

function summon(eim) {
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    eim.getMapFactory().getMap(932100002).broadcastMessage(UIPacket.showWZEffect("UI/tutorial.img/20", 1));
    if (level == 0) {
        mobid = 8860000;
    } else if (level == 1) {
        mobid = 8940001;
    }
    if (level == 0){ 
    var mob = MapleLifeProvider.getMonster(mobid);
    eim.registerMonster(mob);
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 2);
    modified.setOHp(mob.getMobMaxHp() * 5);
    modified.setOMp(mob.getMobMaxMp() * 5);
    mob.setOverrideStats(modified);
    eim.getMapFactory().getMap(932100002).spawnMonsterOnGroundBelow(mob, new java.awt.Point(17, -10));
}
    if (level == 1){ 
    var mob = MapleLifeProvider.getMonster(mobid);
    eim.registerMonster(mob);
    var modified = em.newMonsterStats();
    modified.setOExp(mob.getMobExp() * 2);
    modified.setOHp(mob.getMobMaxHp() * 5);
    modified.setOMp(mob.getMobMaxMp() * 5);
    mob.setOverrideStats(modified);
    eim.getMapFactory().getMap(932100002).spawnMonsterOnGroundBelow(mob, new java.awt.Point(17, -10));
}
    level++;
    eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
    var exit = em.getChannelServer().getMapFactory().getMap(100000000);
    var chr = eim.getPlayers().iterator().next();
    chr.changeMap(exit, exit.getPortal(0));
    chr.Message(8, "[몬스터 아레나] 몬스터 아레나 진행시간이 초과되었습니다. 다시 진행해주세요.");
    chr.setKeyValue("Tutorial1", null);
    eim.unregisterPlayer(chr);
    eim.dispose();
}

function allMonstersDead(eim) {
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0 || level == 1) {
        var text = "잠시 후 아카이럼 나타납니다.";
        eim.getMapFactory().getMap(932100002).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 2) {
        var text = "아카이럼 봉인되었습니다.";
        var chr = eim.getPlayers().iterator().next();
        var exit = em.getChannelServer().getMapFactory().getMap(100000000);
        eim.getMapFactory().getMap(932100002).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(932100002).broadcastMessage(MainPacketCreator.serverNotice(6, text));
 	var party1 = eim.getPlayers();
	for (var i = 0; i < party1.size(); i++) {
		party1.get(i).gainItem(2431582, 1, false, -1, "몬스터 아레나획득");
                party1.get(i).changeMap(exit, exit.getPortal(0));
	}
        
        eim.unregisterPlayer(chr);
        eim.dispose();     
    }
}

function playerDead(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function playerRevive(eim, player) {
    
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobid) {
    return 1;
}

function leftParty(eim, player) {
    
}

function disbandParty(eim) {
    
}

function clearPQ(eim) {
var chr = eim.getPlayers().iterator().next();
     var scroll = new Array(2049100,2049116,2049122,1242012,1232012,1432047, 1222012,1382057, 1492023, 1472068, 1452057,1212012, 1332075, 1372044, 1462050, 1302081, 1402046, 1412033, 1422037, 1312037, 1482023, 1442063, 1322060, 1432049, 1322061, 1382059, 1472071, 1492025, 1372045, 1452059, 1332076, 1462051, 1402047, 1302086, 1412034, 1422038, 1312038, 1482024, 1442067, 1002776, 1002777, 1002778, 1002779, 1002780, 1002790, 1002791, 1002792, 1002793, 1002794, 1082234, 1082235, 1082236, 1082237, 1082238, 1082239, 1082240, 1082241, 1082242, 1082243, 1092058, 1092059, 1092057, 1052155, 1052156, 1052157, 1052158, 1052159, 1052160, 1052161, 1052162, 1052163, 1052164, 1072355, 1072356, 1072357, 1072358, 1072359, 1072361, 1072362, 1072363, 1072364, 1072365);
     var itemid = scroll[Math.floor(Math.random() * scroll.length)];
     var party = chr.getParty();
     if (party == null) {
     chr.gainItem(2431582, 1, false, -1, "몬스터 아레나");      
     var exit = em.getChannelServer().getMapFactory().getMap(2000100);
     eim.removePlayer(chr);
     chr.changeMap(exit, exit.getPortal(0));
     eim.dispose();
 } else {
     var toRem = chr.getClient().getChannelServer().getPartyMembers(chr.getParty()).iterator();
     var chr1 = toRem.next();
     chr1.gainItem(2431582, 1, true, -1, "몬스터 아레나");      
     eim.unregisterPlayer(chr);
     var exit = em.getChannelServer().getMapFactory().getMap(2000100);
     eim.removePlayer(chr1);
     chr1.changeMap(exit, exit.getPortal(0));
     eim.dispose();       
  }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}