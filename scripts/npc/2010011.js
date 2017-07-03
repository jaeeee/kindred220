


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 2010011
	
	엔피시 이름 : 레아

	엔피시가 있는 맵 : 마을전역

	엔피시 설명 : 길드본부로 이동
	Translated by Yuno


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendYesNo("Would you like to work on guild tasks?");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") < 10) {
	    cm.sendOk("You need to be at least level 10 to work on guild tasks.");
            cm.dispose();
            return;
        }
        cm.saveLocation("GUILD");
        cm.warp(200000301, 0);
        cm.dispose();
    }
}


