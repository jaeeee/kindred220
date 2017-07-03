


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	주크블랙 에 의해 만들어 졌습니다.

	엔피시아이디 : 9201036

	엔피시 이름 : 안젤리크

	엔피시가 있는 맵 :  :  (680000000)

	엔피시 설명 : 결혼선물 관리인


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
        cm.sendOk("존나부러운 커플색휘들 ㅡㅡ 다 죽어버려!!! 커플지옥 솔로만세!!!!!");
        cm.dispose();
        return;
    }
}
