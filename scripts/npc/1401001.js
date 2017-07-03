


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	브 라 보 찡  에 의해 만들어 졌습니다.

	엔피시아이디 : 1401001

	엔피시 이름 : 크리스틴

	엔피시가 있는 맵 : 크리스탈 가든 : 정보관리실 (150010200)

	엔피시 설명 : 정보분석가


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
        cm.sendOk("없어");
        cm.dispose();
        return;
    }
}
