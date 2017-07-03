


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	당숙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9330021

	엔피시 이름 : 니키

	엔피시가 있는 맵 :  :  (741000000)

	엔피시 설명 : 미용실 원장


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
        cm.sendOk("허허 내자지가 아종꺼보다 크지");
        cm.dispose();
        return;
    }
}
