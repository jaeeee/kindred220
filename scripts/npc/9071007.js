


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	레이나 에 의해 만들어 졌습니다.

	엔피시아이디 : 9071007

	엔피시 이름 : 슈피겔라

	엔피시가 있는 맵 : 몬스터파크 익스트림 : 흉가 (951000220)

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
        cm.sendOk("페니르 여신");
        cm.dispose();
        return;
    }
}
