


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
        cm.sendSimple("환생을하면 랜덤으로 얻을 수 있는 환생 포인트로 아이템 교환이 가능해졌습니다.\r\n#b#L0#환생하기\r\n#L1#환생 포인트 교환\r\n#L2#레벨이 1로 바뀔때");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openNpc(9000006);
            }
        if (select == 1) {
            cm.dispose();
            cm.openNpc(9390020);
            }
        if (select == 2) {
            cm.dispose();
            cm.openNpc(2540011);
        }
    }
}
