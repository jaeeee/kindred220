


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���۷� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9330013

	���ǽ� �̸� : FAQ ����Ʈ npc 5

	���ǽð� �ִ� �� : Ȳȥ�� �丮�� : Ȳȥ�� �丮�� (273000000)

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
     if (cm.getQuestStatus(31909) == 0) { 
            cm.completeQuest(31909);
            cm.completeQuest(31910);
            cm.completeQuest(31911);
            cm.warp(913050010, 1);
            cm.sendOk("�����帮�ڽ��ϴ�.��ſ�ð��Ǽ���.");
     } else {
        cm.sendOk("�����Ǹ� ���� �����Ͻð� ���� Ŭ�����ּ���.");
        cm.dispose();
        return;
    }
    }
}
