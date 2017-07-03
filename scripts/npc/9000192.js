


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	세이버 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000192

	엔피시 이름 : GM 소리

	엔피시가 있는 맵 : 항해중 : 여섯갈래길행 (2000111)

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
        cm.sendOk("안녕하세요. GM 소리입니다. 유저여러분의 소리를 항상 듣는 GM 소리가 되겠습니다 !");
        cm.dispose();
        return;
    }
}
