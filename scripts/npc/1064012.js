


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 1064013

	엔피시 이름 : 두번째 봉인의 문

	엔피시가 있는 맵 : 루타비스 : 거대한 뿌리 (105200000)

	엔피시 설명 : MISSINGNO


*/

var status = -1;
var check = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	if (cm.getPlayer().getMapId() == 105200200) {
		cm.dispose();
		return;
	}
	if(cm.getPlayer().getMapId() == 105200130) {
	if(cm.getMonsterCount(105200130) > 0) {
	cm.sendYesNo("동쪽 봉인 수호자 처치를 포기하겠습니까?");
		} else {
	cm.sendOk("루타비스로 이동시켜 드리겠습니다.");
		}
	} else {
	cm.sendSimple("#e#r<루타비스 동쪽 정원 입구>#n#k\r\n루타비스 동쪽 봉인의 수호자인 #r반반#k이 지키고 있는 정원으로 가는 문이다.#r클리어 시점으로부터 24시간이 지나야 클리어 기록이 초기화 됩니다.\r\n\r\n#L0##b#i4033611##z4033611#를 사용하여 노말 모드로 이동한다. (100레벨 이상)#l\r\n#L1##i4033611##z4033611#를 사용하여 카오스 모드로 이동한다.(180레벨 이상)");
	}
    } else if (status == 1) {
	if(selection == 1) {
	cm.sendOk("카오스 시스템은 준비중입니다.");
	cm.dispose();
	return;
	} else if(cm.getPlayer().getMapId() == 105200130) {
	cm.warp(105200000);
	cm.dispose();
	if(cm.getPlayer().getKeyValue("banban") != "clear") {
	cm.getPlayer().setKeyValue("banban","clear");
	if (cm.getPlayer().getKeyValue("lutaclear") == null)
	cm.openNpc(1064002);
	}
	} else {
	if(cm.getPlayer().getParty() == null) {
	cm.sendNextS("파티가 필요하군. 파티를 만든후 다시 와보자.",2);
	cm.dispose();
	return;
	}
	if (!cm.isLeader()) {
		cm.sendOk("파티장만이 입장 신청을 할 수 있습니다.");
		cm.dispose();
		return;
	}
	if (!cm.getPlayer().isGM()) {
		if(cm.getPlayer().getParty().getMembers().size() <= 1) {
			cm.sendNextS("1명 이상의 동료가 필요하군. 함께 할 동료를 찾아보자.",2);
			cm.dispose();
			return;
		}
	}
	if(cm.getPlayerCount(105200110) > 1) {
	cm.sendOk("이미 다른 유저가 #r반반#k을 처치하고 있는 중입니다.");
	cm.dispose();
	return;
	}
	if(cm.allPartyItem(4033611,1)) {
	cm.sendOk("#b시간의 틈새에#k 입장하기 위해서는 #i4033611##b#z4033611##k가 필요합니다.");
	cm.dispose();
	return;
	}
	cm.resetMap(105200100);
	cm.allPartyWarp(105200100,true);
	cm.showEffect(true,"Gstar/start");
	cm.getPlayer().getMap().respawn(true);
	cm.dispose();
}
} else {
cm.dispose();
}
}