


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 9071003
	
	엔피시 이름 : 몬스터파크 셔틀

	엔피시가 있는 맵 : 마을전역, 몬스터파크

	엔피시 설명 : 셔틀


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
        if (cm.getMapId() != 951000000)
            cm.sendYesNo("I love you. Are you sure you want to always go to the full enjoyment of the new Monster Park syupigelman? Oh you know from the new Extreme Monster Park? Try ~");
        else
            cm.sendYesNo("Would you like to return to the square?");
    } else if (status == 1) {
        if (cm.getMapId() != 951000000) {
            if (cm.getClient().getChannel() != 1) {
                cm.sendYesNo("Are you sure you want to go?")
            } else {
                cm.saveLocation("MONSTERPARK");
                cm.warp(951000000, 0);
                cm.dispose();
            }
        } else {
            cm.warp(100000000);
            cm.dispose();
        }
    } else if (status == 2) {
        if (cm.getMapId() != 951000000) {
            cm.saveLocation("MONSTERPARK");
            cm.warp(951000000);
        }
    }
}


