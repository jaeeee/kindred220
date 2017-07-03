


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	스피릿매니저 에 의해 만들어 졌습니다.

	엔피시아이디 : 2480007

	엔피시 이름 : 베타

	엔피시가 있는 맵 : 히든스트리트 : 작은 숲의 경계 (910141101)

	엔피시 설명 : MISSINGNO


*/

var status = -1;

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
	if (!cm.getPlayer().getMap().is구출()) {
		cm.sendNextS("의식이 없어보이네, 우선 적들을 모두 처치해야겠어",2);
		cm.dispose();
	} else {
		if (!cm.canHold(1302007)) {
			cm.sendOk("인벤토리에 여유공간을 만든후 다시 대화를 걸어 주세요.");
			cm.dispose();
			return;
		}
		var itemid = cm.엠블렘();
		cm.warp(100000000);
		cm.sendNext("저를 구해주신걸 진심으로 감사드립니다.\r\n약소하지만 #i" + itemid + "##b#t" + itemid + "##k을 드리겠습니다..");
		cm.dispose();
	}
    }
}
