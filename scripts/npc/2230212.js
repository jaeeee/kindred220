


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2230212

	엔피시 이름 : 케르카포르타

	엔피시가 있는 맵 : 크리티아스 : 마법대학 렌하임 (241010110)

	엔피시 설명 : 차원이동 포탈


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
        cm.sendOk("이건 이용하지마세요");
        cm.dispose();
        return;
    }
}
