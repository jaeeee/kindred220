


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	라이프 에 의해 만들어 졌습니다.

	엔피시아이디 : 2040025

	엔피시 이름 : 두번째 에오스의 돌

	엔피시가 있는 맵 : 루타비스 : 심연의 동굴 (105200410)

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
        cm.sendOk("12");
        cm.dispose();
        return;
    }
}
