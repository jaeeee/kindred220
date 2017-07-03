


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	당숙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9330002

	엔피시 이름 : 제갈윤

	엔피시가 있는 맵 :  :  (740000000)

	엔피시 설명 : 방어구 상인


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
        cm.sendOk("역시 란 내가따먹음 ㅅㄱ");
        cm.dispose();
        return;
    }
}
