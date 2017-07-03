


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	G0M도미노 에 의해 만들어 졌습니다.

	엔피시아이디 : 9010041

	엔피시 이름 : Ms. 어카운트

	엔피시가 있는 맵 : 히든스트리트 : 자유시장입구 (910000000)

	엔피시 설명 : 아르바이트 보상


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
        cm.sendOk("자유시장은 1번을 제외한 2번 방부터 입장가능합니다");
        cm.dispose();
        return;
    }
}
