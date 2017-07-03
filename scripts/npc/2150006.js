


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	설중매 에 의해 만들어 졌습니다.

	엔피시아이디 : 2150006

	엔피시 이름 : 웬델린

	엔피시가 있는 맵 :  :  (310000000)

	엔피시 설명 : 성형외과 보조


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
        cm.sendOk("저..저기 서,성형하러 오신 거 맞죠? 어떤 얼굴을 원하세요? 아,아니 말씀하지 마세요 말씀하셔도 저는 그렇게 못해드려요 저는 책임 못져요.. ");
        cm.dispose();
        return;
    }
}
