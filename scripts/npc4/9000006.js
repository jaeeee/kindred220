


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	야후 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000006

	엔피시 이름 : 바이쿤

	엔피시가 있는 맵 : 히든스트리트 : 이벤트나가는곳 (109050001)

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
        cm.sendOk("#e#rOX퀴즈맵#k 입장#n은 #e#r피에트라#n#k를 #e#b이용#n#k해 주세요.");
        cm.dispose();
        return;
    }
}
