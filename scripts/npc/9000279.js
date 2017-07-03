


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	로즈 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000279

	엔피시 이름 : 솔로임니다스

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 (100000000)

	엔피시 설명 : 솔로부대 사령관


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
        cm.sendOk("마야 클럽은 참좋은곳이야! 솔로인 우리들에게도 이성을 찾아주더군.. 시간나면 한번 둘러보는게 좋을거야!");
        cm.dispose();
        return;
    }
}
