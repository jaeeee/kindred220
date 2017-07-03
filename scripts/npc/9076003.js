


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 9076003

	엔피시 이름 : 슈피겔라

	엔피시가 있는 맵 : 첫 번째 동행 : 대기맵 (933010000)

	엔피시 설명 : EXP 부스트 상인


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
        cm.sendOk("후원을 하세요 부스트받을라면");
        cm.dispose();
        return;
    }
}
