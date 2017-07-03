


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	로즈 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000280

	엔피시 이름 : 모솔리니스

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 (100000000)

	엔피시 설명 : 솔로부대 보급담당


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
        cm.sendOk("마야클럽 ??? 마야짱 너무 예쁘다능");
        cm.dispose();
        return;
    }
}
