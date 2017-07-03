


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2159477

	엔피시 이름 : 클레스

	엔피시가 있는 맵 : 요정의 숲 : 에우렐 (910150300)

	엔피시 설명 : 보육교사


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
        cm.sendOk("클라스를 보여주지");
        cm.dispose();
        return;
    }
}
