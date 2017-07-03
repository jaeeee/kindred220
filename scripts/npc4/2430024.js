


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	하리 에 의해 만들어 졌습니다.

	엔피시아이디 : 2430024

	엔피시 이름 : 리나

	엔피시가 있는 맵 :  :  (323090010)

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
        cm.sendOk("여기가 헤네시스야..?");
        cm.dispose();
        return;
    }
}
