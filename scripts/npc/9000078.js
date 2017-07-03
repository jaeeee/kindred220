


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	멋진끼룩 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000078

	엔피시 이름 : 유스

	엔피시가 있는 맵 : 황금사원 : 수행자의 숲1 (252010000)

	엔피시 설명 : 황금사원 관광 가이드


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
        cm.sendOk("오빤 코어 스타일~");
        cm.dispose();
        return;
    }
}
