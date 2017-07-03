


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	asdwdbd 에 의해 만들어 졌습니다.

	엔피시아이디 : 1012008

	엔피시 이름 : 카이지

	엔피시가 있는 맵 : 헤네시스 : 헤네시스게임공원 (100000203)

	엔피시 설명 : 미니게임 마스터


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
        cm.sendOk("필요한 미니게임이 있어?");
        cm.dispose();
        return;
    }
}
