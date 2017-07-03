


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2430011

	엔피시 이름 : 덴마

	엔피시가 있는 맵 :  :  (323000000)

	엔피시 설명 : 성형외과 의사


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
        cm.sendOk("진정한 미인이 되고 싶다면 저를 찾아오세요.");
        cm.dispose();
        return;
    }
}
