/*
�̺��� �ý��� ��ũ8 ����Ʈ

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
	    qm.sendOk("#e[��ȭ ���α׷�] �к��� ���#n\r\n\r\n#b#e#o9306200# 2����#n#k�� ã�Ƴ���, �׵��� ������� ���� óġ�ؾ� �Ѵ�.");
	}
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    if (qm.getQuestStatus(1828) == 0) {
	        qm.sendOk("#o9306200#�� ã�Ƴ���, ������� ���� óġ�Ͻø� �˴ϴ�. #o9306200#�� #o9306003# ������ ���� �����״�, �� �����ؼ� óġ�ϼ���.");
	        qm.forceStartQuest();
	        qm.dispose();
	    } else {
		qm.sendYesNo("#o9306200#�� ã�Ƽ� óġ�ϼ̽��ϱ�?");
	    }
	} else if (status == 1) {
	    qm.sendOk("�к��� ����� ���� ��ȭ ���α׷��� ���������� ���ƽ��ϴ�.");
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}