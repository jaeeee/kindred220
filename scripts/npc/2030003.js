


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	나는야마법사 에 의해 만들어 졌습니다.

	엔피시아이디 : 2030003

	엔피시 이름 : 눈 덮인바위

	엔피시가 있는 맵 : 골렘사원 : 골렘의 사원4 (100040400)

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
        cm.sendOk("돌아갈때는 @헤네시스 쓰면되는데..");
        cm.dispose();
        return;
    }
}
