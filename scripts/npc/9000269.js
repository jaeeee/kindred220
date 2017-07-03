


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	천사 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000269

	엔피시 이름 : 돌려돌려! 돌림판

	엔피시가 있는 맵 : 이벤트 : 미니게임 스테이션 (910043000)

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
        cm.sendOk("돌려돌려! 돌림판 티켓이 있다면 돌림판을 이용하실수 있어요.");
        cm.dispose();
        return;
    }
}
