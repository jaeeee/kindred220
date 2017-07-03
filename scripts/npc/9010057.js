


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 9010057

	엔피시 이름 : 다미

	엔피시가 있는 맵 : 빅토리아로드 : 엘리니아 (180000001)

	엔피시 설명 : 메이플 도우미


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
        cm.sendOk("사귀자 오빠 하앍 섹스 더 박아줘");
        cm.dispose();
        return;
    }
}
