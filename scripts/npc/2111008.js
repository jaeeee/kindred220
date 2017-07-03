


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	성인용브라보 에 의해 만들어 졌습니다.

	엔피시아이디 : 2111008

	엔피시 이름 : 베딘

	엔피시가 있는 맵 : 제뉴미스트 연구소 : 연구소 1층 복도 (261010000)

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
        cm.sendOk("난게이야");
        cm.dispose();
        return;
    }
}
