
/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	노무현 에 의해 만들어 졌습니다.

	엔피시아이디 : 2010009

	엔피시 이름 : 레나리우

	엔피시가 있는 맵 :  :  (680000000)

	엔피시 설명 : 길드연합 담당자


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
        cm.sendOk("안녕하세요? #b레나리우#k라고 해요.\r\n현재 길드연합시스템은 준비 중입니다.");
        cm.dispose();
        return;
    }
}
