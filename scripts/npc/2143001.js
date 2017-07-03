


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	제논브라보 에 의해 만들어 졌습니다.

	엔피시아이디 : 2143001

	엔피시 이름 : 나인하트

	엔피시가 있는 맵 : 기사단 요새 : 비밀정원 (271030410)

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
        cm.sendOk("여제 내가 먹음 ㅅㄱ");
        cm.dispose();
        return;
    }
}
