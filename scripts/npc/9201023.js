


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 9201023
	
	엔피시 이름 : 헤라

	엔피시가 있는 맵 : 마을 전역

	엔피시 설명 : 웨딩빌리지 이동


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.sendOk("그런가요? 아직 다른 일로 바쁘신가봐요. 사랑의 마을에 꼭 한번쯤은 들러보세요~");
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendYesNo("벌써 아름다운 향기가 느껴져요~ 사랑이 가득한 마을~ #b웨딩빌리지#k로 지금 출발하시겠어요?");
    } else if (status == 1) {
        cm.saveLocation("WEDDING");
        cm.warp(680000000);
        cm.dispose();
    }
}


