


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	dkdk 에 의해 만들어 졌습니다.

	엔피시아이디 : 2142933

	엔피시 이름 : 클레스

	엔피시가 있는 맵 : 히든스트리트 : 며칠 전, 에우렐 (913051005)

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
        cm.sendOk("ㅇ..애들을 가리켜줘야해");
        cm.dispose();
        return;
    }
}
