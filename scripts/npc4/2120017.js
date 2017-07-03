


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
        var cps = "#e#h ##n님 #r2단계에 진입하신것을 축하드립니다 !#k 단도직입적으로 부탁좀 들어주시죠?\r\n";
	cps += "#L1##b애휴 알겠어\r\n";
	cps += "#L2#또?#k\r\n";
	if (cm.haveItem(4033324, 3)) {
	cps += "#L6##r모아왓다#k";
}
	cm.sendSimple(cps);
	} else if (selection == 1) {
 	var cps1 = "말이좀 통하네요 #r2단계#k 는 호박기사들이 중요한\r\n\r\n #v4033324# #e#t4033324##n 3개를 모아와주세요 이걸먹은놈이 분명히있으니 찾아다주시죠  #k\r\n";
	cps1 += "#L8##bㅇㅇ\r\n";
	cps1 += "#L2#ㄴㄴ#k";
	cm.sendSimple(cps1);
	} else if (selection == 2) {
	cm.sendOk("매정한새끼");
	cm.dispose();
} else if (selection == 6) {//2022256
cm.gainItem(4033111, 1);
cm.warp(229000000, 0)
cm.gainItem(4033324, -3);
cm.gainItem(2022256, 20);
cm.name(1182009, 50, 30,0);
cm.sendOk("'#e2단계 통과  3단계로 가십시오.'")
}
}
   
