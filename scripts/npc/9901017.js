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
             var chat = "飴尽陥.#b";
             chat += "\r\n#L0#生焼";
             chat += "\r\n#L1#生焦";
             cm.sendSimple(chat);
	  } else if (status == 1) {
             if (selection == 0) {
             if (cm.getQuestStatus(32240) == 0) {
              /* 蝶遣斗 穿姥 */
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
	     cm.sendOk("せせせせ");
             } else {
	     cm.sendOk("せせせせせ!");
             }
	 } else if (selection == 1) {
	     cm.sendOk("せせせせせ");
         }
    }
}
