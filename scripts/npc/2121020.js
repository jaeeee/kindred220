


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팩스 스타일에 의해 만들어 졌습니다.

	엔피시아이디 : 2120000

	엔피시 이름 : 가면신사

	엔피시가 있는 맵 : 헌티드 맨션 : 게스트룸1 (229000010)

	엔피시 설명 : MISSINGNO


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
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var cps = "#e#h ##n님 #r3단계에 진입하신것을 축하드립니다 !#k 히익!!!! 고스트다!!! 고스트싫어!!! 고스트좀 죽여줘요!!\r\n";
	cps += "#L1##b알겟어\r\n";
	cps += "#L2#ㄴㄴ#k\r\n";
	if (cm.haveItem(4001803, 20)) {
	cps += "#L6##r모아왓다#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "고스트를죽이면 #v4001803# #r#t4001803##k 가나와요 20개를 모아서 주세요 태워버리게...\r\n";
	cps1 += "#L8##bㅇㅇ\r\n";
	cps1 += "#L2#ㄴㄴ#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("매정한새끼");
	cm.dispose();
} else if (selection == 6) {
cm.gainItem(4033112, 1);
cm.warp(229000000, 0)
cm.gainItem(4001803, -20);
cm.gainItem(2022256, 40);
cm.name(1182009, 100, 50, 0);
cm.sendOk("'#e3단계 통과  4단계로 가십시오.'")
}
}
   
