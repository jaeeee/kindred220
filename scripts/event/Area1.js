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
    var eim = em.newInstance("MonsterArea");
    //eim.startEventTimer(1200000);
    eim.setProperty("level", "0");
    return eim;
}

function playerEntry(eim, player) {
    player.send(UIPacket.showInfo("몬스터 아레나에 오신걸 환영합니다!"));
    player.send(MainPacketCreator.getGMText(7, "이제 곧 시작합니다!"));
    eim.schedule("announce", 5000);
    var mapzz = eim.getMapFactory().getMap(932100001);
    player.changeMap(mapzz, mapzz.getPortal("sp"));
    player.send(UIPacket.AchievementRatio(0));
}

function announce(eim) {
    var text = "[몬스터 아레나] 잠시후에 몬스터가 소환됩니다.";
        eim.getMapFactory().getMap(932100001).broadcastMessage(MainPacketCreator.showEffect("UlWindowBT.img/MonsterBattle/Darw"));//UlWindowBT.img
    eim.getMapFactory().getMap(932100001).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(932100001).broadcastMessage(MainPacketCreator.getGMText(7, text));
    var level = Integer.parseInt(eim.getProperty("level"));
    if (level == 0) {
        eim.schedule("summon", 5000);
    } else if (level == 1) {
        eim.schedule("summon", 5000);
    } else if (level == 2) {
        eim.schedule("summon", 5000);
    } else if (level == 3) {
        eim.schedule("summon", 5000);
    } else if (level == 4) {
        eim.schedule("summon", 5000);
    } else if (level == 5) {
        eim.schedule("summon", 5000);
    }
}

function summon(eim) {
    var text = "[몬스터 아레나] 몬스터가 소환되었습니다.";
    eim.getMapFactory().getMap(932100001).broadcastMessage(UIPacket.showInfo(text));
    eim.getMapFactory().getMap(932100001).broadcastMessage(MainPacketCreator.getGMText(5, text)); //-109,154
    var mobid = 0;
    var level = Integer.parseInt(eim.getProperty("level"));
    eim.getMapFactory().getMap(932100001).broadcastMessage(UIPacket.showWZEffect("UI/tutorial.img/20", 1));

/*
    if (level == 0) {
        mobid = 2600019;
    } else if (level == 1) {
        mobid = 2600119;
    } else if (level == 2) {
        mobid = 9300598;
    } else if (level == 3) {
        mobid = 9300589;
    } else if (level == 4) {
        mobid = 9300561;
    } else if (level == 5) {
        mobid = 9800057;
    }
*/
    if (level == 0) {
        mobid = 9303082;
    } else if (level == 1) {
        mobid = 9303006;
    } else if (level == 2) {
        mobid = 9303077;
    } else if (level == 3) {
        mobid = 9305002;
    } else if (level == 4) {
        mobid = 9305004;
    } else if (level == 5) {
        mobid = 9303033;
    }

    for (var i = 0 ; i < 10 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
	    var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 1000);
	    modified.setOHp(mob.getMobMaxHp() * 8000);
	    modified.setOMp(mob.getMobMaxMp() * 1.8);
	    mob.setOverrideStats(modified);
        eim.getMapFactory().getMap(932100001).spawnMonsterOnGroundBelow(mob, new java.awt.Point(410, -215));
    }
    for (var i = 0 ; i < 10 ; i++) {
       var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 1300);
	    modified.setOHp(mob.getMobMaxHp() * 8000);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);
	    mob.setOverrideStats(modified);
        eim.getMapFactory().getMap(932100001).spawnMonsterOnGroundBelow(mob, new java.awt.Point(410, -215));
    }
    for (var i = 0 ; i < 10 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
        var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 1500);
	    modified.setOHp(mob.getMobMaxHp() * 8000);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);
	    mob.setOverrideStats(modified);
        eim.getMapFactory().getMap(932100001).spawnMonsterOnGroundBelow(mob, new java.awt.Point(410, -215));
    }
    for (var i = 0 ; i < 10 ; i++) {
        var mob = MapleLifeProvider.getMonster(mobid);
        eim.registerMonster(mob);
            var modified = em.newMonsterStats();
	    modified.setOExp(mob.getMobExp() * 2000);
	    modified.setOHp(mob.getMobMaxHp() * 10000);
	    modified.setOMp(mob.getMobMaxMp() * 1.5);
	    mob.setOverrideStats(modified);
        eim.getMapFactory().getMap(932100001).spawnMonsterOnGroundBelow(mob, new java.awt.Point(410, -215));
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
 if (level >= 1 && level <= 5) {
        var text = "단계"+level+"의 몬스터를 모두 잡으셨습니다! 잠시 후 다음 레벨로 넘어갑니다.";
        eim.getMapFactory().getMap(932100000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.showEffect("UI/UIWindowBT.img/MonsterBattle/Darw"));//ULWindowBT.img
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(932100000).broadcastMessage(UIPacket.AchievementRatio(15 * level));
        eim.schedule("announce", 5000);
        var chr = eim.getPlayers().iterator().next();
    }
    if (level == 6) {
        var text = "몬스터 아레나가 종료되었습니다.";
        var chr = eim.getPlayers().iterator().next();
        var exit = em.getChannelServer().getMapFactory().getMap(100000000);
        eim.getMapFactory().getMap(932100000).broadcastMessage(UIPacket.showInfo(text));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.getClock(20));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
        eim.getMapFactory().getMap(932100000).broadcastMessage(MainPacketCreator.serverNotice(6, text));
        eim.getMapFactory().getMap(932100000).broadcastMessage(UIPacket.AchievementRatio(100));
 	var party1 = eim.getPlayers();
	for (var i = 0; i < party1.size(); i++) {
		party1.get(i).gainItem(4310085, 1, false, -1, "몬스터 아레나획득");
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
     chr.gainItem(4310085, 1, false, -1, "몬스터 아레나");      
     var exit = em.getChannelServer().getMapFactory().getMap(2000100);
     eim.removePlayer(chr);
     chr.changeMap(exit, exit.getPortal(0));
     eim.dispose();
 } else {
     var toRem = chr.getClient().getChannelServer().getPartyMembers(chr.getParty()).iterator();
     var chr1 = toRem.next();
     chr1.gainItem(4310085, 1, true, -1, "몬스터 아레나");      
     eim.unregisterPlayer(chr);
     var exit = em.getChannelServer().getMapFactory().getMap(100000000);
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