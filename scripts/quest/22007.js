var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
            if (qm.getQuestStatus(22007) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(22007) == 1) {
		qm.sendNext("��, �ް��� ������ �ž�? �׷� �ް��� �ǳ���. �׷� ��ȭ�⸦ �ٰ�.");
	    }
	} else if (status == 1) {
	    qm.gainExp(360);
	    qm.forceCompleteQuest();
	    qm.sendNext("��, �������. ����ü ��� ������ ������ �𸣰�����...\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
	    qm.dispose();
	}
    }
}