


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	정글러 에 의해 만들어 졌습니다.

	엔피시아이디 : 9330008

	엔피시 이름 : FAQ 퀘스트 npc 1

	엔피시가 있는 맵 : 메이플로드 : 선착장 (2000100)

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
             var chat = "퀘스트 전구를 지우고 싶으세요?#b";
             chat += "\r\n#L0#으아";
             cm.sendSimple(chat);
	  } else if (status == 1) {
             if (selection == 0) {
             if (cm.getQuestStatus(32240) == 0) {
              /* 캐릭터 전구 */
             cm.completeQuest(32240);   
             cm.completeQuest(25710);   
             cm.completeQuest(23612);    
             cm.completeQuest(25711);   
             cm.completeQuest(23616);   
             cm.completeQuest(25512);   
             cm.completeQuest(23220);  
             cm.completeQuest(32241);   
             cm.completeQuest(32246);   
             cm.completeQuest(23610);
             cm.completeQuest(23611);
	     cm.sendOk("완료되었습니다.~");
             } else {
	     cm.sendOk("이미 하신거같아요.");
             }
	 } else if (selection == 1) {
	     cm.sendOk("ㅋㅋㅋㅋㅋ");
         }
    }
}
