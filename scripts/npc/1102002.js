


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 1102002

	엔피시 이름 : 키리두

	엔피시가 있는 맵 : 퀸스로드 : 키리두의 부화장 (130010220)

	엔피시 설명 : 라이딩교관


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
        cm.sendOk("아기들에게 영양이 부족하진 않겠지? 아무튼, 보스레이드 열심히해봐 !");
        cm.dispose();
        return;
    }
}
