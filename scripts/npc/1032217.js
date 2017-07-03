


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
        var cps = "#e#h ##n님 #r팩스 스타일#k 할로윈 페스티벌중이라 저도 할로윈옷을입어봤어요!! 어때요?\r\n";
	cps += "#L1##b이뻐\r\n";
	cps += "#L2#별로#k\r\n";
	if (cm.haveItem(2022255, 15)) {
	cps += "#L6##r모아왓다#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "그런데 이번에 #e페니#n랑 같이 호박케이크를 만드는데 도와주실수있나요?\r\n";
	cps1 += "#L3##b우리 라니아가 도와달라면 물론도와줘야지!\r\n";
	cps1 += "#L2#바뻐#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("나쁘다 ㅠㅠ");
	cm.dispose();
	} else if (selection == 3) {
 	var cps2 = "#v2022255# #t2022255# 15개만 모아와주세요!!\r\n";
	cps2 += "#L8##b맡겨둬\r\n";
	cps2 += "#L2#바뻐#k";
	cm.sendSimple(cps2);
} else if (selection == 6) {
cm.name(1182009, 300, 100, 0);
cm.gainItem(3010279, 1);
cm.gainItem(2520000, 1);
cm.warp(229000000, 0)
cm.gainItem(2022255, -15);
cm.gainItem(2022256, 70);
cm.sendOk("'#e#r스페셜 스테이지#k를 가실수있습니다!!'")
}
}
   
