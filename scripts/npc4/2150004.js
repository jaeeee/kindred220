


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	설중매 에 의해 만들어 졌습니다.

	엔피시아이디 : 2150004

	엔피시 이름 : 위닝

	엔피시가 있는 맵 :  :  (310000000)

	엔피시 설명 : 피부관리사


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
        cm.sendOk("나처럼 숯검댕이같은 피부가 갖고 싶지않아? 그러하면 잘왔어 티 한 점 없이 매끄러운 피부를 갖게 해줄게.");
        cm.dispose();
        return;
    }
}
