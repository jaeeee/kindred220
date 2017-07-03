


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	asdwdbd 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000017

	엔피시 이름 : 코코

	엔피시가 있는 맵 : 헤네시스 : 헤네시스공원 (100000200)

	엔피시 설명 : 초콜릿 재료 상인


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
        cm.sendOk("파업 단행! 파업 단행!");
        cm.dispose();
        return;
    }
}
