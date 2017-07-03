


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Aeos Development Source Script

	노무현 에 의해 만들어 졌습니다.

	엔피시아이디 : 2095000

	엔피시 이름 : 델리

	엔피시가 있는 맵 : 히든스트리트 : 노틸러스호 피난처 (925010400)

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
        cm.sendOk("나는 음란한 슬라임이라능");
        cm.dispose();
        return;
    }
}
