


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	모량 에 의해 만들어 졌습니다.

	엔피시아이디 : 2144020

	엔피시 이름 : 륀느

	엔피시가 있는 맵 : 차원의 틈 : 아카이럼의 제단 (272020200)

	엔피시 설명 : 시간의 여신


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
        cm.sendOk("ㅎ?");
        cm.dispose();
        return;
    }
}
