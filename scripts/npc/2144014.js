


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Aeos Development Source Script

	김문수 에 의해 만들어 졌습니다.

	엔피시아이디 : 2144014

	엔피시 이름 : 메르세데스

	엔피시가 있는 맵 : 과거의 리프레 : 불타는 폐허 (272000310)

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
        cm.sendOk("날 범해주세요");
        cm.dispose();
        return;
    }
}
