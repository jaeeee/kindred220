/*
�̺��� �ý��� ��ũ7 ����Ʈ

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
	    qm.sendOk("#e[��ȭ ���α׷�] ��Ȳ ��ó �ɷ�#n\r\n\r\n��ũ7�� #b#e#o9306007# 30����#n#k�� óġ�ϼ���.");
	}
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    if (qm.getQuestStatus(1827) == 0) {
	        qm.sendOk("��ũ7�� #b#o9306007# 30������ óġ#k�ϼ���.\r\n���� �������͵��� ��Ÿ�� ������ �����ϰ� ���״�, ���� ��Ҹ� ���� ��, �ý��� ���͸� óġ�Ͻø� �˴ϴ�.");
	        qm.forceStartQuest();
	        qm.dispose();
	    } else {
		qm.sendYesNo("��Ȳ ��ó �ɷ� ��� ���α׷��� ��� �Ϸ��ϼ̽��ϱ�?");
	    }
	} else if (status == 1) {
	    qm.sendOk("��Ȳ ��ó �ɷ� ����� ���� ��ȭ ���α׷��� ���������� ���ƽ��ϴ�.");
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}