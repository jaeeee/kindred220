


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 9020016

	엔피시 이름 : 촌장 타타모

	엔피시가 있는 맵 : 파티퀘스트 입장 : 슈피겔만의 게스트 하우스 (910002000)

	엔피시 설명 : 드래곤 라이더


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
        cm.sendOk("내 털이 너보다 많다");
        cm.dispose();
        return;
    }
}
