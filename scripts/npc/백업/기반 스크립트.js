


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Aeos Development Script)

	테스터 에 의해 만들어 졌습니다.

	엔피시아이디 : 1002100

	엔피시 이름 : 제인

	엔피시가 있는 맵 : 메이플로드 : 버섯동산 (10000)

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
        cm.sendOk("제 꿈은 이곳 저곳 여행을 다니는 거랍니다. 여행자님처럼 말이죠... 하지만 저희 아버진 위험하다며 계속 허락해 주시지를 않아요...");
        cm.dispose();
        return;
    }
}
