


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

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
        var npc = 9010000;
        switch (cm.getPlayer().getMapId()) {
            case 100000000:
            case 101000000:
            case 102000000:
            case 103000000:
            case 104000000:
            case 120000100:
                npc = 1012000;
                break;
            case 105000000:
            case 211000000:
            case 220000000:
            case 221000000:
            case 222000000:
            case 240000000:
                npc = 2023000;
                break;
            case 230000000:
            case 251000000:
                npc =  2060009;
                break;
            case 310000000:
                npc = 2150007;
                break;
            case 261000000:
            case 260000000:
                npc = 9000090;
                break;
        }
        cm.dispose();
        cm.openNpc(npc);
    }
}


