


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	폴리시 에 의해 만들어 졌습니다.

	엔피시아이디 : 2101013

	엔피시 이름 : 카르카사

	엔피시가 있는 맵 : 버닝로드 : 유랑단의 텐트 (260010600)

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
        cm.sendOk("집보내줘ㅠㅠ제발 시발");
        cm.dispose();
        return;
    }
}
