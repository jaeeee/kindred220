/*

                     사자왕 반 레온 입장 본섭화
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
	if ((cm.getChannelNumber() == 6) && cm.getPlayer().getMapId() == 211070000) {
	var chat = "#e<반 레온 원정대>#n\r\n\r\n위대한 용사여. 타락한 사자왕에게 맞설 준비를 마치셨습니까?\r\n#b";   
	  if (cm.getPlayer().getParty() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition() == null) {
	    chat += "\r\n#b원정대를 구성한 후, 원정대장을 통해 진행해 주세요..#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
	    chat += "\r\n#b원정대장을 통해 진행해 주세요.#k";
	    cm.sendNext(chat);
	  } else if (cm.getPlayer().getParty().getExpedition().getType() != PureExpeditionType.VONLEON) {
	    chat += "\r\n#b반 레온 원정대가 맞는지 다시 한번 확인 해주세요.#k";
	    cm.sendNext(chat);
     	  } else if (cm.getPlayer().getMapId() == 211070000) {
	    chat += "\r\n#L0##b반 레온 원정대 입장을 신청한다.#k";
	    cm.sendSimple(chat);
	}
    } else if (cm.getPlayer().getMapId() == 211070100) {
            cm.sendSimple("원정대를 마치고 이 곳에서 나가시겠습니까?#l\r\n\r\n#L1##b원정대를 마치고 밖으로 나가겠습니다.");
	} else {
	    cm.sendOk("이 채널에서는 #e<반 레온 원정대>#n에 도전할 수 없습니다. 반 레온 원정대는 6채널 에서만 도전이 가능합니다.");
	    cm.dispose();
	}
   } else if (status == 1) {
       if (selection == 0) {
	if (cm.getPlayerCount(211070100) == 0 && cm.getPlayerCount(211070101) == 0 && cm.getPlayerCount(211070110) == 0) {
            cm.mapMessage(5, cm.getPlayer().getName()+ "님이 원정대 입장을 선언하셨습니다. 원정대 조직 시간이 종료되기 전에 맵에 입장해 주세요.."); 
            cm.allExpeditionWarp(211070100);
            cm.allExpSetTimeValueCurrent("VonLeon_BattleStartTime");
            cm.closeMapDoor(211070000, 3600);
	    cm.removeNpc(cm.getMapId(),2161000);
   	    cm.killAllMob();
	    cm.resetMap(211070100);
	    cm.resetMap(211070101);
            cm.scheduleTimeMoveMap(211070100,211070100, 3600, true);
            cm.scheduleTimeMoveMap(211070100,211070101, 3600, true);
            cm.scheduleTimeMoveMap(211070100,211070110, 3600, true);
            cm.scheduleBossRaidMap(3600);
            cm.setLastBossMap(211070100);
            cm.getMap().spawnNpc(2161000, new java.awt.Point(0, -181));
            cm.dispose();
	} else {
	    cm.sendNext("이미 다른 원정대가 안으로 들어가 퀘스트 클리어에 도전하고 있습니다.");
	    cm.dispose();
	}
       } else if (selection == 1) {
            if (cm.getPlayer().getParty().getExpedition().getLeader() != cm.getPlayer().getId()) {
                cm.warp(211060801);
                cm.getParty().getExpedition().addDeadChar(cm.getPlayer().getId());
                cm.dispose();
            } else {
                cm.allExpeditionWarp(211060801);
	    	cm.removeNpc(cm.getMapId(),2161000);
   	    	cm.killAllMob();
                cm.getParty().getExpedition().setBossKilled(true);
                cm.mapMessage(5, "원정대장이 도전을 포기하거나 완료하고 퇴장을 선언하여. 모든 파티원이 제단에서 퇴장 하였습니다.");
	        cm.resetMap(211070100);
	        cm.resetMap(211070101);
                cm.dispose();
			}
            } else {
                cm.dispose();
   		 }
	}
}