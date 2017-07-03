


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	아티브쿠도 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000052

	엔피시 이름 : 용감한 어린양

	엔피시가 있는 맵 : 히든스트리트 : 양진영 대기실 (109090100)

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
	if (cm.getPlayer().getMapId() == 100000000) {
        cm.dispose();
        cm.openNpc(2040024);
	return;

	} else if (cm.getPlayer().getMapId() == 109090101) {
	    cm.gainItem(4000313, 10);
	    cm.warp(100000000);
	    cm.dispose();
	}
    }
}
