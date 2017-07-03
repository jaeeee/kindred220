


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	은월잘되 에 의해 만들어 졌습니다.

	엔피시아이디 : 9075101

	엔피시 이름 : 몬스터 생성기

	엔피시가 있는 맵 : 이볼빙 시스템 : 링크1 (957010000)

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
        cm.sendOk("자동으로 몬스터가 생성되니 기다려주세요~");
        cm.dispose();
        return;
    }
}
