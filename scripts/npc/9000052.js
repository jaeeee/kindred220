


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	페니르스토리 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000052

	엔피시 이름 : 용감한 어린양

	엔피시가 있는 맵 : 코코섬 : 얕은 해안가 (3000100)

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
        cm.sendSimple("낚시터로 이동하시겠어요?\r\n#b#L0#낚시터 이동");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.warp(3000100);
        }
    }
}
