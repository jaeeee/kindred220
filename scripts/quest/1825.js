/*
�̺��� �ý��� ��ũ3 ����Ʈ

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
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
	    if (qm.getQuestStatus(1825) == 0) {
	        qm.sendOk("�ý��� ��ַ� ���� ���� ���Ͱ� �����Ǿ����ϴ�. ������ #e#b#o9306005#, #o9306100#�� óġ#k#n�ؼ� ������ �ٷ� ������ �˴ϴ�.\r\n#o9306005#�� #o9306004#�� óġ�� ��� ��Ÿ����, #o9306100#�� #o9306005#�� ��� �����ϸ� ��Ÿ���ϴ�.");
	        qm.forceStartQuest();
	        qm.dispose();
	    } else {
		qm.sendOk("��ũ5�� ������ ����, ���� ��� ��� �Ʒ��� ���������� ���ƽ��ϴ�.");
		qm.forceCompleteQuest();
		qm.dispose();
	    }
	}
    }
}