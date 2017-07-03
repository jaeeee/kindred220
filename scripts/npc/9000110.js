


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	adsif 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000110

	엔피시 이름 : 단풍잎 장식

	엔피시가 있는 맵 : 9주년 이벤트 : 단풍나무 숲 출구 (910027100)

	엔피시 설명 : 퇴장 안내판


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
        cm.sendOk("9000110");
        cm.dispose();
        return;
    }
}
