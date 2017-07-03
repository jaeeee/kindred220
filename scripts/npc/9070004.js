


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 9070004
	
	엔피시 이름 : 막시무스

	엔피시가 있는 맵 : 마을 전역

	엔피시 설명 : 배틀스퀘어


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
        cm.sendOk("배틀스퀘어 #b대난투#k에 관심이 있는건가? 제군의 용기가 가상하다! 하지만 지금은 대난투를 이용할 수 있는 기간이 아니라네. 다음에 다시 들러주게.");
        cm.dispose();
        
        //cm.sendYesNo("배틀스퀘어 #b대난투#k에 관심이 있는건가? 제군의 용기가 가상하다! 자네를 배틀스퀘어까지 데려다 주겠네. 지금 출발하겠는가?");
    } else if (status == 1) {
        cm.saveLocation("BATTLESQUARE");
        cm.warp(960000000, 0);
        cm.dispose();
    }
}


