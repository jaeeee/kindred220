/*

                     잊혀진 신전 관리인 본섭화
                     제작자 : 가군 (qor6101@naver.com)
                     본 스크립트는 천외천스토리 기준으로 쓴 겁니다.




*/

importPackage(Packages.community);

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) 
	status++;
    else 
	status--;
    if (status == 0) {
	if ((cm.getChannelNumber() == 5)) {
	var chat = "#e<핑크빈 원정대>#n\r\n\r\n침입자는 여신의 제단으로 향한 듯 합니다. 그를 어서 저지하지 못하면 무서운 일이 일어날 겁니다.\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.PINKBEAN) {
	    chat += "\r\n#b핑크빈 원정대가 맞는지 다시 한번 확인 해주세요.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##b핑크빈 원정대 입장을 신청한다.#k";
	    cm.sendSimple(chat);
	}
	} else if ((cm.getChannelNumber() == 4)) {
	var chat = "#e<카오스 핑크빈 원정대>#n\r\n\r\n침입자는 여신의 제단으로 향한 듯 합니다. 그를 어서 저지하지 못하면 무서운 일이 일어날 겁니다.\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.CHAOS_PINKBEAN) {
	    chat += "\r\n#b카오스 핑크빈 원정대가 맞는지 다시 한번 확인 해주세요.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##b카오스 핑크빈 원정대 입장을 신청한다.#k";
	    cm.sendSimple(chat);
	}
	} else {
	    cm.sendOk("이 채널에서는 #e<핑크빈 원정대>#n에 도전할 수 없습니다. 노말 핑크빈은 5번 채널, 카오스 핑크빈은 4번 채널에서만 도전이 가능합니다.");
	    cm.dispose();
	}
    } else if (status == 1) {
       if (selection == 0) {
	if ((cm.getChannelNumber() == 5) && cm.getPlayerCount(270050100) == 0 && cm.getPlayerCount(270050200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "님이 원정대 입장을 선언하셨습니다. 원정대 조직 시간이 종료되기 전에 맵에 입장해 주세요..");
            cm.allExpeditionWarp(270050100);
            cm.closeMapDoor(270050000, 3600);
	    cm.removeNpc(cm.getMapId(),2141000);
    	    cm.killAllMob();
	    cm.resetMap(270050100);
	    cm.resetMap(270050200);
            cm.scheduleTimeMoveMap(270050200, 270050100, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.allExpSetTimeValueCurrent("Pinkbean_BattleStartTime");
            cm.setLastBossMap(270050100);
            cm.getMap().spawnNpc(2141000, new java.awt.Point(-190, -42));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820019), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820020), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820021), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820022), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820023), new java.awt.Point(5,44));
     	    cm.dispose();
	} else if ((cm.getChannelNumber() == 4) && cm.getPlayerCount(270051100) == 0 && cm.getPlayerCount(270051200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "님이 원정대 입장을 선언하셨습니다. 원정대 조직 시간이 종료되기 전에 맵에 입장해 주세요..");
            cm.allExpeditionWarp(270051100);
            cm.closeMapDoor(270050000, 3600);
	    cm.removeNpc(cm.getMapId(),2141000);
    	    cm.killAllMob();
	    cm.resetMap(270051100);
	    cm.resetMap(270051200);
            cm.scheduleTimeMoveMap(270051200, 270051100, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.allExpSetTimeValueCurrent("ChaosPinkbean_BattleStartTime");
            cm.setLastBossMap(270051100);
            cm.getMap().spawnNpc(2141000, new java.awt.Point(-190, -42));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820019), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820020), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820021), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820022), new java.awt.Point(5,44));
            cm.getPlayer().getMap().spawnMonsterOnGroundBelow(Packages.server.life.DbgLifeProvider.getMonster(8820023), new java.awt.Point(5,44));
     	    cm.dispose();
	} else {
	    cm.sendNext("이미 다른 원정대가 안으로 들어가 퀘스트 클리어에 도전하고 있습니다.");
	    cm.dispose();
	}
	} else {
	    cm.dispose();
		}
	}
}