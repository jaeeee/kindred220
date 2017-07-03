


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	레지양 에 의해 만들어 졌습니다.

	엔피시아이디 : 2182000

	엔피시 이름 : 외무대신 포프

	엔피시가 있는 맵 : 아스완 : 아스완 피난처 (262000000)

	엔피시 설명 : 코인샵


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
        cm.sendOk("상점은 쟝피엘에게로 가주세요");
        cm.dispose();
        return;
    }
}
