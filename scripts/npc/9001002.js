


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
        if (cm.getPlayer().getKeyValue(cm.getNpc()+"_Pure") == null) {
            cm.sendOk("퓨어퓨어~ 퓨어~퓨어~  퓨어퓨어퓨어퓨어~~ 퓨어~퓨어~");
            cm.gainItem(4031120, 1);
            cm.gainExp(1000);
            cm.getPlayer().setKeyValue(cm.getNpc()+"_Pure", "1");
        } else {
            cm.sendOk("퓨어퓨어~");
        }
    } else {
        cm.dispose();
        if (cm.haveItem(4031120, 3)) {
            cm.openNpc(9901011);
        }
    }
}


