


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	FMK은수 에 의해 만들어 졌습니다.

	엔피시아이디 : 1064023

	엔피시 이름 : 시그너스

	엔피시가 있는 맵 : 레인보우스트리트 : 암허스트 (1000000)

	엔피시 설명 : 여제


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
        cm.sendOk("준비중 입니다.");
        cm.dispose();
        return;
    }
}
