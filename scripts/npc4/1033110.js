/*

	õ��õ�¶��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1033110

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : ������ �� : ���췼 (101050000)

	���ǽ� ���� : MISSINGNO


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
             cm.sendNextS("�߾��̶��... ��ü ������ �߾��� ���ϴ� ����? �ƶ�, ������� �ٸ� �������� ������ ã�ƿ� ���� �����縦 ������ ����� �ߴ� ��? ���� �����縦 �����ϴ� �� ����? �ƴ���, �׺��� �� ���ΰ�? �� ������ ���ù޴� �� ����?" ,2);
	} else {
		cm.sendOkS("������ �Ҿ���� �߾��̶�? ���� �����ұ�...?", 2)
		cm.dispose();
		}
	} else if (status == 1) {
           cm.sendNextPrevS("�����ϴ� �ῡ�� ������� ���� 10�̶� ����ߴ� �� ������ �߾��� �ƴ��װ�... ��ü ������ �߾��̶�� �ž�?" ,2);
	} else if (status == 2) {
           cm.sendNextPrevS("(���� ����� ��� ����� �������� ��Ȯ�� ������ �𸣰ڴ�... ������ ������ ����������. �̰ɷ� ������� ������?)\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1249000 exp\r\n#fUI/UIWindow.img/QuestIcon/11/0# ���� 40" ,2);
	} else if (status == 3) {
	    cm.playSound(false, "profession/levelup");
	    cm.forceCompleteQuest(3543);
	    cm.forceCompleteQuest(3507);
	    cm.gainExp(1249000);
	    cm.dispose();
        }
    }
}