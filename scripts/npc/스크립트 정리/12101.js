


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���۷� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9330008

	���ǽ� �̸� : FAQ ����Ʈ npc 1

	���ǽð� �ִ� �� : �����÷ε� : ������ (2000100)

	���ǽ� ���� : MISSINGNO


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
             var chat = "����Ʈ ������ ����� ��������?#b";
             chat += "#b\r\n#L0#����Ʈ ������ ����ڽ��ϴ�.";
             cm.sendSimple(chat);
	  } else if (status == 1) {
             if (selection == 0) {
             if (cm.getQuestStatus(32240) == 0) {
              /* ĳ���� ���� */
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
	     cm.sendOk("�Ϸ�Ǿ����ϴ�.~");
             } else {
	     cm.sendOk("�̹� �ϽŰŰ��ƿ�.");
             }
	 } else if (selection == 1) {
	     cm.sendOk("����������");
         }
    }
}
