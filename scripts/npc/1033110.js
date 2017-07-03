/*

	천외천온라인 에 의해 만들어 졌습니다.

	엔피시아이디 : 1033110

	엔피시 이름 : 오르골

	엔피시가 있는 맵 : 요정의 숲 : 에우렐 (101050000)

	엔피시 설명 : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) {
	   if (cm.getQuestStatus(3507) == 1 && cm.getQuestStatus(3543) == 0 && cm.getPlayer().getJob() == 2312) {
             cm.sendNextS("추억이라니... 데체 언제적 추억을 말하는 거지? 아란, 프리드와 다른 영웅들이 마을로 찾아와 검은 마법사를 잡으러 가기로 했던 때? 검은 마법사를 봉인하던 그 순간? 아니지, 그보다 더 전인가? 막 왕으로 선택받던 그 시절?" ,2);
	} else {
		cm.sendOkS("나에게 잃어버린 추억이란? 과연 존재할까...?", 2)
		cm.dispose();
		}
	} else if (status == 1) {
           cm.sendNextPrevS("설마하니 잠에서 깨어났더니 레벨 10이라 기겁했던 그 순간이 추억은 아닐테고... 대체 언제가 추억이라는 거야?" ,2);
	} else if (status == 2) {
           cm.sendNextPrevS("(옛날 기억을 모두 더듬어 보았지만 정확히 뭐인지 모르겠다... 하지만 마음은 따뜻해졌다. 이걸로 충분하지 않을까?)\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1249000 exp\r\n#fUI/UIWindow.img/QuestIcon/11/0# 감성 40" ,2);
	} else if (status == 3) {
	    cm.playSound(false, "profession/levelup");
	    cm.forceCompleteQuest(3543);
	    cm.forceCompleteQuest(3507);
	    cm.gainExp(1249000);
	    cm.dispose();
        }
    }
}