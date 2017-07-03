


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	GM도미노 에 의해 만들어 졌습니다.

	엔피시아이디 : 2040032

	엔피시 이름 : 위버

	엔피시가 있는 맵 : 루디브리엄 : 루디 펫 산책로 (220000006)

	엔피시 설명 : 조련사


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
        cm.sendOk("어서오렴");
        cm.dispose();
        return;
    }
}
