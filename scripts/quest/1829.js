/*
�̺��� �ý��� ��ũ9 ����Ʈ

���� ����
*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    qm.sendOk("start");
	    qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1 || mode == 0) {
	if (mode == 0) {
	    qm.sendOk("#e[��ȭ ���α׷�] ������ ��ȭ#n\r\n\r\n������ ���� ü���� ���� #e#b#o9306101# 20���� óġ#k#n�ؾ� �Ѵ�.");
	}
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    if (qm.getQuestStatus(1829) == 0) {
	        qm.sendOk("������ ���� ü���� ���� #e#b#o9306101# 20����#n�� óġ#k�ϼ���.");
	        qm.forceStartQuest();
	        qm.dispose();
	    } else {
		qm.sendYesNo("#o9306101# 20������ óġ�ϼ̽��ϱ�?");
	    }
	} else if (status == 1) {
	    qm.sendOk("������ ��ȭ ���α׷��� ���������� ���ƽ��ϴ�.");
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}