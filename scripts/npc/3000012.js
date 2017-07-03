


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Human Online Development Source Script)

	허리케인 에 의해 만들어 졌습니다.

	엔피시아이디 : 3000012

	엔피시 이름 : 디멘션 게이트

	엔피시가 있는 맵 :  :  (400000001)

	엔피시 설명 : 메이플 월드 이동


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
        cm.sendOk("");
        cm.dispose();
        return;
    }
}
