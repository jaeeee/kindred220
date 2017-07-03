


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	정글러 에 의해 만들어 졌습니다.

	엔피시아이디 : 9330013

	엔피시 이름 : FAQ 퀘스트 npc 5

	엔피시가 있는 맵 : 황혼의 페리온 : 황혼의 페리온 (273000000)

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
     if (cm.getQuestStatus(31909) == 0) { 
            cm.completeQuest(31909);
            cm.completeQuest(31910);
            cm.completeQuest(31911);
            cm.warp(913050010, 1);
            cm.sendOk("보내드리겠습니다.즐거운시간되세요.");
     } else {
        cm.sendOk("스텀피를 먼저 조사하시고 저를 클릭해주세요.");
        cm.dispose();
        return;
    }
    }
}
