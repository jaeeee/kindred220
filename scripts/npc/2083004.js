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
	if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4)) {
	    cm.sendNext("현재 계신 채널에서는 #b노말 모드 혼테일 원정대#k 참여가 가능합니다. 다른 모드에 참여하고 싶으시면 알맞은 채널로 이동해 주세요.");
	} else if ((cm.getChannelNumber() == 7 || cm.getChannelNumber() == 8)) {
	    cm.sendNext("현재 계신 채널에서는 #b카오스 모드 혼테일 원정대#k 참여가 가능합니다. 다른 모드에 참여하고 싶으시면 알맞은 채널로 이동해 주세요.");
	} else {
	    cm.sendOk("이 채널에서는 #e<혼테일 원정대>#n에 도전할 수 없습니다. 노말 혼테일은 3번, 4번 채널, 카오스 혼테일은 7번, 8번 채널을 이용해 주세요.");
	    cm.dispose();
	}
    } else if (status == 1) {
        if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4)) {
	var chat = "#e<노말 모드 혼테일 원정대>#n\r\n\r\n리프레 마을의 숙적, 어둠의 마룡 혼테일을 물리칠 준비가 되었는가?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.NORMAL_HORNTAIL) {
	    chat += "\r\n#b노멀 혼테일 원정대가 맞는지 다시 한번 확인 해 주세요.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##b혼테일 원정대 입장을 신청한다.#k";
	    cm.sendSimple(chat);
	}
	} else {
	var chat = "#e<카오스 모드 혼테일 원정대>#n\r\n\r\n리프레 마을의 숙적, 어둠의 마룡 혼테일을 물리칠 준비가 되었는가?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b원정대장을 통해 진행해 주시기 바랍니다.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != DbgExpeditionType.CHAOS_HORNTAIL) {
	    chat += "\r\n#b카오스 혼테일 원정대가 맞는지 다시 한번 확인 해 주세요.#k";
	    cm.sendNext(chat);
 	} else {
	    chat += "\r\n#L0##b혼테일 원정대 입장을 신청한다.#k";
	    cm.sendSimple(chat);
	}
}
   } else if (status == 2) {
       if (selection == 0) {
	if ((cm.getChannelNumber() == 3 || cm.getChannelNumber() == 4) && cm.getPlayerCount(240060000) == 0 && cm.getPlayerCount(240060100) == 0 && cm.getPlayerCount(240060200) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "님이 원정대 입장을 선언하셨습니다. 원정대 조직 시간이 종료되기 전에 맵에 입장해 주세요..");
            cm.allExpeditionWarp(240060000);
            cm.closeMapDoor(240050400, 4500);
    	    cm.killAllMob();
	    cm.resetMap(240060000);
	    cm.resetMap(240060100);
  	    cm.resetMap(240060200);
            cm.scheduleTimeMoveMap(240050500, 240060000, 4500, true);
            cm.scheduleTimeMoveMap(240050500, 240060100, 4500, true);
            cm.scheduleTimeMoveMap(240050500, 240060200, 4500, true);
            cm.scheduleBossRaidMap(4500);
            cm.allExpSetTimeValueCurrent("Horntail_BattleStartTime");
            cm.setLastBossMap(240060000);
     	    cm.dispose();
	} else if ((cm.getChannelNumber() == 7 || cm.getChannelNumber() == 8) && cm.getPlayerCount(240060001) == 0 && cm.getPlayerCount(240060101) == 0 && cm.getPlayerCount(240060201) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "님이 원정대 입장을 선언하셨습니다. 원정대 조직 시간이 종료되기 전에 맵에 입장해 주세요..");
            cm.allExpeditionWarp(240060001);
            cm.closeMapDoor(240050400, 9000);
    	    cm.killAllMob();
	    cm.resetMap(240060001);
	    cm.resetMap(240060101);
  	    cm.resetMap(240060201);
            cm.scheduleTimeMoveMap(240050500, 240060001, 9000, true);
            cm.scheduleTimeMoveMap(240050500, 240060101, 9000, true);
            cm.scheduleTimeMoveMap(240050500, 240060201, 9000, true);
            cm.scheduleBossRaidMap(9000);
            cm.allExpSetTimeValueCurrent("ChaosHorntail_BattleStartTime");
            cm.setLastBossMap(240060001);
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