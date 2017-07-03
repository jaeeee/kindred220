


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 1520031

	엔피시 이름 : 봅보로봅봅

	엔피시가 있는 맵 : 메이플로드 : 사우스페리 (2100000)

	엔피시 설명 : 신참 모험가


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
        cm.sendOk("이게 뭐야~");
        cm.dispose();
        return;
    }
}
