


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	레이나 에 의해 만들어 졌습니다.

	엔피시아이디 : 2159440

	엔피시 이름 : 루미너스

	엔피시가 있는 맵 : 히든스트리트 : 라니아의 집 (910141110)

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
        cm.sendOk("페니르 서버 여신 레이나 내가 짱입니다");
        cm.dispose();
        return;
    }
}
