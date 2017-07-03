


/*

	히나 온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (!cm.canHold(2430026)) {
		cm.sendOk("인벤공간이 부족해요.");
		cm.dispose();
		return;
	}
		cm.gainItem(2430026, 2);
	cm.warp(2000100);
	cm.dispose();
    }
}


