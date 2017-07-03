


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	메르세데스 에 의해 만들어 졌습니다.

	엔피시아이디 : 1064004

	엔피시 이름 : 하비스

	엔피시가 있는 맵 : 루타비스 : 거대한 뿌리 (105200000)

	엔피시 설명 : 열쇠상인


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
        cm.sendSimple("봉인의 수호자들을 만나기 위해선 #b고목나무 열쇠#k가 필요한건 알고있나?\r\n\r\n#L0##b#i4033611##z4033611#를 400,000메소로 구입");
    } else if (status == 1) {
	if (selection == 0) {
		if (cm.getMeso() >= 400000) {
			cm.gainItem(4033611,1);	
			cm.gainMeso(-400000);
			cm.sendOk("다음에도 또 찾아와 주게나");
			cm.dispose();
		} else {
			cm.sendOk("메소도 없는데 고목나무 열쇠를 살려고 한건가?");
			cm.dispose();
		}
	}
	}
}
