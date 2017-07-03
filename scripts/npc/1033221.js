


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1033221
	
	엔피시 이름 : 헬레나 (과거의 헬레나)

	엔피시가 있는 맵 : 109040004

	엔피시 설명 : 나가기


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
        //cm.sendOk("이벤트 진행중입니다. 죄송해요!");
        ////cm.dispose();
        //return;
        cm.sendYesNo("포기하시는 건가요? 여기서 정말 나가시고 싶으세요?");
    } else if (status == 1) {
        cm.warp(100000000);
        cm.dispose();
    }
}


