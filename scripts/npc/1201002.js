


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	패왕색브라보 에 의해 만들어 졌습니다.

	엔피시아이디 : 1201002

	엔피시 이름 : 마하

	엔피시가 있는 맵 : 스노우 아일랜드 : 리엔 (140000000)

	엔피시 설명 : 폴암의 정신


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
        cm.sendOk("저기 밑에 여자보이지 내가 맨날 먹음 ㅅㄱ");
        cm.dispose();
        return;
    }
}
