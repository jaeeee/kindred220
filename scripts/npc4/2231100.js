


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	dfddf6 에 의해 만들어 졌습니다.

	엔피시아이디 : 2231100

	엔피시 이름 : 클리프

	엔피시가 있는 맵 : 크리티아스 : 시장 (241010100)

	엔피시 설명 : 잡화상인


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
        cm.sendOk("안녕 난 클리프라고해");
        cm.dispose();
        return;
    }
}
