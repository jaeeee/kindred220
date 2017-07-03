


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 2010011
	
	엔피시 이름 : 레아

	엔피시가 있는 맵 : 마을전역

	엔피시 설명 : 길드본부로 이동


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
        cm.sendYesNo("안녕하세요. 길드 지원 업무를 맡은 레아입니다. 업무 편의를 위해, 영웅의 전당까지 이동을 돕고 있습니다. 길드 관련 업무 처리를 위해 영웅의 전당으로 이동하시겠어요?");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") < 30) {
	    cm.sendOk("죄송하지만 레벨 30 이상의 분들만 이용하실 수 있습니다.");
            cm.dispose();
            return;
        }
        cm.setSavedMapId(cm.getMapId());
        cm.warp(200000301, 0);
        cm.dispose();
    }
}


