


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	하리 에 의해 만들어 졌습니다.

	엔피시아이디 : 1540436

	엔피시 이름 : 시바

	엔피시가 있는 맵 : 빅토리아로드 : 비화원 지하감옥 (103050400)

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
        cm.sendOk("Human Online 욕랭킹은 누가 1등일까?");
        cm.dispose();
        return;
    }
}
