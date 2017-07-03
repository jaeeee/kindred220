


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	당숙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9110006

	엔피시 이름 : 진쟈

	엔피시가 있는 맵 :  :  (800000000)

	엔피시 설명 : 야끼소바 요리사


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
        cm.sendOk("옆집 오빠한테 문어좀 얻어놨어 가게 문 잠깐 잠그고 하앍");
        cm.dispose();
        return;
    }
}
