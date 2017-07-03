


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	당숙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9250012

	엔피시 이름 : 차이

	엔피시가 있는 맵 :  :  (500000000)

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
        cm.sendOk("너와 나의 나이 차이 소주와 우유 사이");
        cm.dispose();
        return;
    }
}
