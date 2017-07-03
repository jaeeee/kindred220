


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	알얼 에 의해 만들어 졌습니다.

	엔피시아이디 : 2159441

	엔피시 이름 : 아란

	엔피시가 있는 맵 : 히든스트리트 : 시간의 신전 회랑2 (927030010)

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
        cm.sendOk("욕을하던 작을하던 맘대로해요");
        cm.dispose();
        return;
    }
}
