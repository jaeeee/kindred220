


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1032114
	
	엔피시 이름 : 왕연해

	엔피시가 있는 맵 : 

	엔피시 설명 : 마법사 수련장 입구


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
        if (cm.getJob() == 200 && cm.getPlayerStat("LVL") < 20) {
            cm.sendYesNo("자네는 초보 모험가로군! #b마법사 수련장#k에 들어갈 수 있겠어. 어때? 들어가보겠는가? 단 레벨 20이 되면 나오게 되니 주의하게~");
        } else {
            cm.sendOk("이곳은 마법사 수련장 입구라네.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(910120000, 1);
        cm.dispose();
    }
}


