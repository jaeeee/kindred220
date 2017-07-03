


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 4thJobAdvanceOut
	
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
        if (cm.getEventInstance() != null) {
            cm.sendYesNo("정말 이곳에서 나가시겠습니까? 이곳에서 나가면 처음부터 다시 시작해야 합니다.");
        } else {
            cm.warp(100000000);
            cm.dispose();
        }
    } else if (status == 1) {
        var eim = cm.getEventInstance();
        eim.removePlayer(cm.getPlayer());
        cm.warp(924000002);
        cm.dispose();
    }
}


