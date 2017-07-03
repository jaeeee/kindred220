


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Aeos Development Source Script

	몽정기 에 의해 만들어 졌습니다.

	엔피시아이디 : 2159001

	엔피시 이름 : 울리카

	엔피시가 있는 맵 : 위험한 숨바꼭질 : 인적 드문 바위산 (931000000)

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
        cm.sendOk("너 따위가 좋아서 그런건말하는건아니야..!");
        cm.dispose();
        return;
    }
}
