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
            if (qm.getQuestStatus(20032) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20032) == 1) {
            	qm.forceCompleteQuest();
		qm.sendNext("�� �̷��� ���� �ɷȾ�? ���߱��~ û�Ҵ� �� �����ž�? ���� ���� ���� ���ٸ��ϱ�. ����? û�ҳ������� ���� �����ϴ°� ���;���!");
	    }
	} else if (status == 1) {
	    qm.gainExp(40);
	    qm.gainExp(92);
	    qm.warp(913070003,0);
	    qm.dispose();
	}
    }
}