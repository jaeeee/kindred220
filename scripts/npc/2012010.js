


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	성인용브라보 에 의해 만들어 졌습니다.

	엔피시아이디 : 2012010

	엔피시 이름 : 가정부 엘마

	엔피시가 있는 맵 : 오르비스 : 오르비스공원 (200000200)

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
        cm.sendOk("전 메이드에요 한마디로 섹녀");
        cm.dispose();
        return;
    }
}
