


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	★張炯柱★ 에 의해 만들어 졌습니다.

	엔피시아이디 : 1032204

	엔피시 이름 : 의문의 수행자

	엔피시가 있는 맵 : 광장 : 광장 (100000000)

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
        cm.sendOk("닥쳐");
        cm.dispose();
        return;
    }
}
