


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	멋진끼룩 에 의해 만들어 졌습니다.

	엔피시아이디 : 2210000

	엔피시 이름 : 라비

	엔피시가 있는 맵 : 암벽 거인 탐사 현장 : 탐사 본부 (240090000)

	엔피시 설명 : 탐사단장


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
        cm.sendOk("탐험을 좋아하는가?");
        cm.dispose();
        return;
    }
}
