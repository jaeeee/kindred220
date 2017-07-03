


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1052004
	
	엔피시 이름 : 덴마

	엔피시가 있는 맵 : 헤네시스성형외과

	엔피시 설명 : 성형외과 원장


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
        cm.dispose();
	cm.openCS();
    }
}


