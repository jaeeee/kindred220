


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	무한도전 에 의해 만들어 졌습니다.

	엔피시아이디 : 1102003

	엔피시 이름 : 키단

	엔피시가 있는 맵 : 퀸스로드 : 기사의 전당 (130000101)

	엔피시 설명 : 기사교관


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
        cm.sendOk("안녕하십니까 kakao story에 오신것을 환영합니다 ");
        cm.dispose();
        return;
    }
}
