


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	로즈 에 의해 만들어 졌습니다.

	엔피시아이디 : 9062004

	엔피시 이름 : 메이플 운영자

	엔피시가 있는 맵 : 사자왕의 성 : 첫번째 탑 (211060200)

	엔피시 설명 : 튜토리얼 안내


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
        cm.sendOk("택시 모텔로가주세요~");
        cm.dispose();
        return;
    }
}
