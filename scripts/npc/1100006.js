


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 1100006

	엔피시 이름 : 키루

	엔피시가 있는 맵 : 퀸스로드 : 오르비스행 (200090021)

	엔피시 설명 : 선원


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
        cm.sendOk("기다려 씨발로마 금방 도착하니까");
        cm.dispose();
        return;
    }
}
