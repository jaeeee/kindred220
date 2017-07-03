


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	브라보 에 의해 만들어 졌습니다.

	엔피시아이디 : 1103001

	엔피시 이름 : 로카

	엔피시가 있는 맵 : 광장 : 광장 (100000000)

	엔피시 설명 : 수상한 사람 아님


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
        cm.sendOk("땅꼬맹이새끼");
        cm.dispose();
        return;
    }
}
