


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2142900

	엔피시 이름 : 장로 스탄

	엔피시가 있는 맵 : 히든스트리트 : 며칠 전, 헤네시스 (913051002)

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
        cm.sendOk("자네, 검은마법사의 봉인이 풀린건 알고있나? 허허;; 그래서 위험하다네");
        cm.dispose();
        return;
    }
}
