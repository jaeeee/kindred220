importPackage(Packages.packet.skills);
importPackage(Packages.packet.creators);
importPackage(Packages.server.life);
importPackage(java.lang);
importPackage(java.awt);

function init() {
    
}

function setup(eim) {
	var eim = em.newInstance("Lose_Weapone");
	eim.startEventTimer(300000);
	eim.setProperty("level", "0");
	return eim;
}

function playerEntry(eim, player) {
	eim.schedule("summon", 5000);

	var mapzz = eim.getMapFactory().getMap(912080100);
	player.changeMap(mapzz, mapzz.getPortal("sp"));
	player.send(UIPacket.AchievementRatio(0));	
	eim.getMapFactory().getMap(912080100).broadcastMessage(ZeroSkill.NPCTalk("으으… 오랜만에 힘을 쓰니 온몸이 저려오는 것 같네… 아무튼, 곧 크루들이 몰려올 거야. 잘 부탁해!"));
}

function summon(eim) {
	var mobid = 0;
	var level = Integer.parseInt(eim.getProperty("level"));
	var party_Lv = Integer.parseInt(eim.getProperty("party_level"));

	if (level == 0 || level == 1) {
		mobid = 6130208;
		for (var i = 0 ; i < 15 ; i++) {
			var mob = MapleLifeProvider.getMonster(mobid);
			eim.registerMonster(mob);

			var modified = em.newMonsterStats();
			modified.setOExp(40 * party_Lv);
			modified.setOHp(12000 * party_Lv);
			modified.setOMp(mob.getMobMaxMp() * 1.5);
			mob.setOverrideStats(modified);

			eim.getMapFactory().getMap(912080100).spawnMonsterOnGroundMaple(mob, new Point(794, -69));
		}

	} else if (level == 2) {
		mobid = 9300105;
		var mob = MapleLifeProvider.getMonster(mobid);
		eim.registerMonster(mob);

		var modified = em.newMonsterStats();
		modified.setOExp(120 * party_Lv);
		modified.setOHp(60000);
		modified.setOMp(mob.getMobMaxMp() * 1.5);
		mob.setOverrideStats(modified);

		eim.getMapFactory().getMap(912080100).spawnMonsterOnGroundMaple(mob, new Point(864, -69));
	}

	level++;
	eim.setProperty("level", level);
}

function changedMap(eim, player, mapid) {
    
}

function scheduledTimeout(eim) {
	var exit = em.getChannelServer().getMapFactory().getMap(100000000);
	var it = eim.getPlayers().iterator();

	eim.getMapFactory().getMap(912080100).broadcastMessage(ZeroSkill.NPCTalk("네가 마지막 희망이었는데… 결국 '그것'을 포기해야 하는 건가… 우선 돌아가는 게 좋겠지… …."));

	while(it.hasNext()) {
		var chr = it.next();
		chr.changeMap(exit, exit.getPortal(0));
		chr.setKeyValue("Tutorial", null);
	}
	eim.unregisterAll();
	eim.dispose();
}

function allMonstersDead(eim) {
	var level = Integer.parseInt(eim.getProperty("level"));
	if (level == 1 || level == 2) {
		eim.getMapFactory().getMap(912080100).broadcastMessage(ZeroSkill.NPCTalk("좋아…! 이대로만 가면 '그것'을 찾을 수 있겠어. 조금만 더 힘을 내줘!"));

		eim.getMapFactory().getMap(912080100).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clear"));
		eim.getMapFactory().getMap(912080100).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));
		eim.schedule("summon", 5000);

	} else if (level == 3) {
		var it = eim.getPlayers().iterator();

		eim.getMapFactory().getMap(912080100).broadcastMessage(MainPacketCreator.showEffect("monsterPark/clearF"));
		eim.getMapFactory().getMap(912080100).broadcastMessage(MainPacketCreator.playSound("Party1/Clear"));

		var exp_time = eim.getProperty("1pq_start_time");
		var exp_num = ((System.currentTimeMillis()-exp_time)/1000).toFixed(0);

		var exp_rate = (exp_num < 40) ? 30 : (exp_num < 65) ? 20 : (exp_num < 100) ? 10 : 5;
		var exp_rank = (exp_rate == 30) ? "S" : (exp_rate == 20) ? "A" : (exp_rate == 10) ? "B" : "C";

		eim.getMapFactory().getMap(912080100).broadcastMessage(MainPacketCreator.getNPCTalk(2411024, 0, "이야… 그 많은 크루들을 이렇게 빨리 상대한 거야? 응? 왜 데비 존이 있다고 말 안 했냐고? … …아무튼!! 이곳에서 나가고 싶다면, 저기 보이는 탕윤에게 말을 걸면 돼 그럼… 나중에 인연이 닿으면 또 보자\r\n\r\n#b#e랭크#n "+exp_rank, "00 00", 0));

		while(it.hasNext()) {
			var chr = it.next();
			chr.setKeyValue("1pq_complete", "1");
			chr.setKeyValue("1pq_exp", exp_rate);
		}
		eim.unregisterAll();
		eim.dispose();
	}
}

function playerDead(eim, player) {
	var exit = em.getChannelServer().getMapFactory().getMap(100000000);
	var it = eim.getPlayers().iterator();

	while(it.hasNext()) {
		var chr = it.next();
		chr.changeMap(exit, exit.getPortal(0));
		chr.setKeyValue("Tutorial", null);
	}

	eim.unregisterAll();
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
	var exit = em.getChannelServer().getMapFactory().getMap(100000000);
	var it = eim.getPlayers().iterator();

	while(it.hasNext()) {
		var chr = it.next();
		chr.changeMap(exit, exit.getPortal(0));
		chr.setKeyValue("Tutorial", null);
	}

	eim.unregisterAll();
	eim.dispose();
}

function disbandParty(eim) {
	var exit = em.getChannelServer().getMapFactory().getMap(100000000);
	var it = eim.getPlayers().iterator();

	while(it.hasNext()) {
		var chr = it.next();
		chr.changeMap(exit, exit.getPortal(0));
		chr.setKeyValue("Tutorial", null);
	}

	eim.unregisterAll();
	eim.dispose();
}

function clearPQ(eim) {
    
}

function playerExit(eim, player) {
	var exit = em.getChannelServer().getMapFactory().getMap(100000000);
	var it = eim.getPlayers().iterator();

	while(it.hasNext()) {
		var chr = it.next();
		chr.changeMap(exit, exit.getPortal(0));
		chr.setKeyValue("Tutorial", null);
	}

	eim.unregisterAll();
	eim.dispose();
}

function onMapLoad(eim, player) {
    
}

function cancelSchedule(a) {
    
}