


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	★BRAVO♥ 에 의해 만들어 졌습니다.

	엔피시아이디 : 2041019

	엔피시 이름 : 수리공 로키

	엔피시가 있는 맵 : 루디브리엄성 : 장난감공장&lt;메인공정2> (220030200)

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
        cm.sendOk("꺼져");
        cm.dispose();
        return;
    }
}
