


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	★BRAVO♥ 에 의해 만들어 졌습니다.

	엔피시아이디 : 2082016

	엔피시 이름 : 이사벨라

	엔피시가 있는 맵 : 네오시티&lt;2216년> : 폐허가된도시공사장 (240070402)

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
        cm.sendOk(" 앙 ㅠㅠ 주금 ㅠㅠ");
        cm.dispose();
        return;
    }
}
