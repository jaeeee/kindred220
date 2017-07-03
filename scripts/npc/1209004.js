


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	dhsi 에 의해 만들어 졌습니다.

	엔피시아이디 : 1209004

	엔피시 이름 : 피난민

	엔피시가 있는 맵 : 블랙로드 : 피난 준비 중 (914000100)

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
        cm.sendOk("이제 어떻게 살아야하지..");
        cm.dispose();
        return;
    }
}
