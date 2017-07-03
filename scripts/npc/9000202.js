


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	미인 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000202

	엔피시 이름 : 스파크

	엔피시가 있는 맵 : 타임로드 : 세 개의 문 (270000000)

	엔피시 설명 : RED 코인샵


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
        cm.sendOk("죽일뻔함");
        cm.dispose();
        return;
    }
}
