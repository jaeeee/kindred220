


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	★BRAVO♥ 에 의해 만들어 졌습니다.

	엔피시아이디 : 2020000

	엔피시 이름 : 보겐

	엔피시가 있는 맵 : 엘나스 : 엘나스시장 (211000100)

	엔피시 설명 : 제련 전문가


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
        cm.sendOk("내근육을 보라 하 난 게이야");
        cm.dispose();
        return;
    }
}
