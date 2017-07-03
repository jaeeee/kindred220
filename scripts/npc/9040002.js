


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	창작의고통 에 의해 만들어 졌습니다.

	엔피시아이디 : 9040002

	엔피시 이름 : 샨

	엔피시가 있는 맵 : 유적발굴지 : 유적발굴단캠프 (102040200)

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
        cm.sendOk("유물에서 현재와 미래를 볼수있죠\r\n#b당신도 발굴대원이 되어 보시겠습니까?");
        cm.dispose();
        return;
    }
}
