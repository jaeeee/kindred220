


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2151006

	엔피시 이름 : 웬델린

	엔피시가 있는 맵 :  :  (310010010)

	엔피시 설명 : 치료 담당자


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
        cm.sendOk("그, 그... 여기서 뵈니 반갑네요!");
        cm.dispose();
        return;
    }
}
