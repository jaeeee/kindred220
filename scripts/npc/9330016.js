


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	어머니 에 의해 만들어 졌습니다.

	엔피시아이디 : 9330016

	엔피시 이름 : 요리사 아종

	엔피시가 있는 맵 :  :  (741000000)

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
        cm.sendOk("흠..이번 요리는 맛이 없어 보지가 맛있다구!");
        cm.dispose();
        return;
    }
}
