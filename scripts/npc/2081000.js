


/*

	히나 소스 팩의 스크립트 입니다. (제작 : 티썬) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	유저 에 의해 만들어 졌습니다.

	엔피시아이디 : 9900001

	엔피시 이름 : 님아즐

	엔피시가 있는 맵 : 빅토리아로드 : 엘리니아 (180000000)

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
        if(cm.getQuestStatus(31331) <= 1){ 
        cm.completeQuest(31331);
        cm.dispose();
        return;
       } else {
       cm.getPlayer().dropMessage(1, "이미 쾌스트 완료하셨습니다");
cm.dispose();
    }

}
}