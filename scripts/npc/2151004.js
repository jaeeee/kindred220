


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 2151004

	엔피시 이름 : 체키

	엔피시가 있는 맵 :  :  (310010000)

	엔피시 설명 : 메카닉 교관


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
        cm.sendOk("기술의 집약체, 메카닉에 관심 있습니까?");
        cm.dispose();
        return;
    }
}
