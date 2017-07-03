


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	지렁 에 의해 만들어 졌습니다.

	엔피시아이디 : 2152013

	엔피시 이름 : 깜찍이

	엔피시가 있는 맵 :  :  (310000000)

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
        cm.sendOk("헤헤 풍선이 아주 예뻐요. 체키와 노는것두 재미있구요.");
        cm.dispose();
        return;
    }
}
