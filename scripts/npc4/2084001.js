


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	파끝쟁이 에 의해 만들어 졌습니다.

	엔피시아이디 : 2084001

	엔피시 이름 : 골드리치

	엔피시가 있는 맵 : 히든스트리트 : 자유시장입구 (910000000)

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
        cm.sendOk("허허허 돈이좋아");
        cm.dispose();
        return;
    }
}
