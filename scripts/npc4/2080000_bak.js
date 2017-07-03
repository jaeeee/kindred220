


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	냥냥 에 의해 만들어 졌습니다.

	엔피시아이디 : 2080000

	엔피시 이름 : 모스

	엔피시가 있는 맵 : 미나르숲 : 리프레 (240000000)

	엔피시 설명 : 무기 합성 기술자


*/

var status;
var select;
function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		if (cm.getQuestStatus(7301) >= 1) {
			cm.sendSimple("흐음~ 나에게 뭔가 특별한 부탁이 있어 온 것 같은데? 무슨 일로 온거지?#b\r\n\r\n#L1#코니언의 단도가 필요해요.#l\r\n#L2#장비를 수리하고 싶어요.#l");
		} else {
			cm.sendYesNo("현재 장비 수리만 가능해. 장비를 수리하고 싶어?");
		}


	} else if (status == 1) {
		select = selection;
		if (selection == 1) {
			cm.sendYesNo("#b코니언의 단도#k가 필요하다는 거지? #b코니언의 단도#k를 만드려면 #b망가진 단도#k를 수리하는 방법밖에 없어. #b망가진 단도#k를 수리하려면 다음과 같은 재료가 필요하지. 만들어보겠어?\r\n\r\n#b#i4001079# #z4001079# 1개\r\n#i4011001# #z4011001# 1개\r\n#i4011002# #z4011002# 1개");
		} else {
			cm.sendOk("REPAIR");
			cm.dispose();
		}
	} else if (status == 2) {
		if (select == 1) {
			if (cm.haveItem(4001079,1) && cm.haveItem(4011001,1) && cm.haveItem(4011002,1) && cm.canHold(4011078)) {
				cm.gainItem(4001079,-1);
				cm.gainItem(4011001,-1);
				cm.gainItem(4011002,-1);
				cm.gainItem(4001078,1);
				cm.dispose();
			} else {
				cm.sendOk("인벤토리 공간이 충분한지, 또는 아이템을 제대로 갖고 있는건지 확인해 줘.");
				cm.dispose();
			}
		}
	}


else { 
		cm.dispose();
	}
    }
}
