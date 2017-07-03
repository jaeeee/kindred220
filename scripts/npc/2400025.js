


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	여신 에 의해 만들어 졌습니다.

	엔피시아이디 : 2400025

	엔피시 이름 : 메이플 월드 포탈

	엔피시가 있는 맵 :  :  (320000100)

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
        cm.sendOk("메이플 월드로 이동할 수 있는 포탈이다. 어느 마을로 갈까?");
        cm.dispose();
        return;
    }
}
