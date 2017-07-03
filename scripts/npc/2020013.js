


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
        cm.sendNext("다음에 또 다시 도전해주게.");
    } else {
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
        cm.removeAll(4001015); //열쇠
        cm.removeAll(4001016); //비밀문서
        cm.removeAll(4001018); //불의원석
        if (cm.getClient().getChannel() % 2 == 1) { //카오스 입장
            cm.warp(211042301,1);
        } else { //노멀 입장
            cm.warp(211042300,1);
        }
        cm.dispose();
    }
}


