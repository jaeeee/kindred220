


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - asdwdbd에 의해 자동으로 만들어진 스크립트 입니다.

	엔피시아이디 : 9010008

	엔피시 이름 : 페티트

	엔피시가 있는 맵 : 헤네시스 : 헤네시스공원 (100000200)

	엔피시 설명 : 메이플모바일


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
        cm.sendOk("메이플 모바일은 정말 멋지지! 그렇지 않아?");
        cm.dispose();
        return;
    }
}
