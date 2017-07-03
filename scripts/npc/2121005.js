


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	마기 에 의해 만들어 졌습니다.

	엔피시아이디 : 2121005

	엔피시 이름 : 피아노

	엔피시가 있는 맵 : 헌티드 맨션 : 맨션 중앙홀 (229000000)

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
        cm.sendOk("마기 의 거대한 그랜드 피아노다.");
        cm.dispose();
        return;
    }
}
