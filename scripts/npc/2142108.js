


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	팬텀 에 의해 만들어 졌습니다.

	엔피시아이디 : 2142108

	엔피시 이름 : 돼지와 함께 춤을

	엔피시가 있는 맵 : 황혼의 페리온 : 원주민들의 피난처 (273050000)

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
        cm.sendOk("이얀이...나에게...먹...ㅎ...");
        cm.dispose();
        return;
    }
}
