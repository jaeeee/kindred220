


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	스피릿매니저 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000214

	엔피시 이름 : 미니무르

	엔피시가 있는 맵 : 피릿시스 : 피릿시스 (100000000)

	엔피시 설명 : 이계의 창고관리인


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
        cm.sendOk("미니무르 시즌 2로 찾아뵙겠습니다. 조금만 기다려주세요~#e#r♡#k#n");
        cm.dispose();
        return;
    }
}
