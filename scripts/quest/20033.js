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
            if (qm.getQuestStatus(20033) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20033) == 1) {
		qm.sendSimple("����� �����°ž�? �������� �ʾҰ���? ��� ���� �� ���� ���� ���� �־���?#b\r\n#L0#����...������ ���ڱ� ������ �ؼ�...�׸��� ��...������ ������ ���Ⱦ��.");
	    }
	} else if (status == 1) {
	    qm.gainExp(135);
	    qm.gainExp(98);
	    qm.gainItem(4033196,-10);
	    qm.forceCompleteQuest();
	    qm.sendNext("�����! ������ ������ ��? �̷� ����ġ ���� �༮ �����϶�!! ���� ���� ���� �� �˾�!! ���࿡ ������ ã�� ���ϸ� �� �༮�� ��������!");
	} else if (status == 2) {
	    qm.warp(913070004,0);
	    qm.dispose();
	}
    }
}