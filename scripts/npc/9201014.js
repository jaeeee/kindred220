


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	주크블랙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9201014

	엔피시 이름 : 필라

	엔피시가 있는 맵 :  :  (680000000)

	엔피시 설명 : 이혼 상담


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
        cm.sendOk("이혼은 신중하게 선택하셔야 하는 거에요. 당신은 아직 짝이 없으신 모양이군요. 짝을 찾는다고 해도, 이런 일이 있어서는 안돼요.");
        cm.dispose();
        return;
    }
}
