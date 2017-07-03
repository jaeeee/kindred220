


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Hina Online Development Source Script)

	냥냥 에 의해 만들어 졌습니다.

	엔피시아이디 : 1043001

	엔피시 이름 : 약초 덤불

	엔피시가 있는 맵 : 인내의 숲 : 5단계 (910130102)

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
        if (!cm.canHold(2430368)) {
		cm.sendOk("인벤공간이 부족해요.");
		cm.dispose();
		return;
	}
		cm.gainItem(2430026, 1);
	cm.warp(2000100);
	cm.dispose();
    }
}
