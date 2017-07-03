


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	페이 에 의해 만들어 졌습니다.

	엔피시아이디 : 1063000

	엔피시 이름 : 분홍색 꽃 무더기

	엔피시가 있는 맵 : 팩스 스타일 : 팩스 스타일 광장 (101000100)

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
	cm.gainItem(4031025, 1);
	cm.warp(100000000);
        cm.dispose();
        cm.sendOk("#r팩스#k님의 #e부탁을받아#n 꽃을 찾으러왔군요...? 여기 드리겠어요.");
        return;
    }
}
