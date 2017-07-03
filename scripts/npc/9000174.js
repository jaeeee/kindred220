


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	[GM]천사 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000174

	엔피시 이름 : 무르무르

	엔피시가 있는 맵 : 신전 깊은 곳 : 잊혀진 황혼 (270050000)

	엔피시 설명 : 영혼연구가


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
        cm.sendOk("꺼져 병신아");
        cm.dispose();
        return;
    }
}
