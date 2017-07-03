


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	FMK은수 에 의해 만들어 졌습니다.

	엔피시아이디 : 2042002

	엔피시 이름 : 슈피겔만

	엔피시가 있는 맵 : 몬스터 카니발 : 카니발 필드&lt;대기실> (980090000)

	엔피시 설명 : 몬스터 카니발


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
        cm.sendOk("너와 네 친구 중에 누가 더 강한지 궁금하지 않나?");
        cm.dispose();
        return;
    }
}
