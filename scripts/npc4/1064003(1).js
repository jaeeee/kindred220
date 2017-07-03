


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	메르세데스 에 의해 만들어 졌습니다.

	엔피시아이디 : 1064003

	엔피시 이름 : 오코

	엔피시가 있는 맵 : 루타비스 : 거대한 뿌리 (105200000)

	엔피시 설명 : 보따리 상인


*/

var status = -1;
var itemid = Array(2028154,2028155,2028161);
var number = Array(200,250,400);

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
        var chat = "이 무거운 짐을 여기까지 지고 오느라 죽는 줄 알았다니까요.";
	chat += "\r\n\r\n#b";
	for (var i = 0; i < itemid.length; i++) {
		chat += "#L" + i + "##i" + itemid[i] + "##z" + itemid[i] + "# : #i4310064# " + number[i] + "개\r\n";
	}
	cm.sendSimple(chat);
    } else if (status == 1) {
	if (cm.haveItem(4310064,number[selection])) {
		cm.sendOk("#b#z" + itemid[selection] + "##k로 교환을 해드렸어요. 한번 #b" + cm.getPlayer().getName() + "#k님의 운을 #b#z " + itemid[selection] + "##k로 시험 해보세요!!");
		cm.gainItem(itemid[selection],1);
		cm.gainItem(4310064,-number[selection]);
		cm.dispose();
	} else {
		cm.sendOk("#b" + cm.getPlayer().getName() + "#k님이 가지고계신 #b#z4310064##k 로는 아이템을 교환하기에는 부족해요.");
		cm.dispose();
	}
    }
}
