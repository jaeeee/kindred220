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
            if (qm.getQuestStatus(20031) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20031) == 1) {
		qm.sendSimple("�� �̷��� ���� �ɷȾ�? ���� �� ���� ���� ����ģ�� �ƴϾ�? ��������� ������ �����Ծ�?#b\r\n#L0#��...����...�׸��� �ٶ����� �� ������ �޾��µ���. ���� �� ���Ű� ���Ƽ���...ũ���̶�� ���� ������ �� ������...");
	    }
        } else if (status == 1) {
	    qm.gainExp(12);
	    qm.gainExp(51);
	    qm.gainItem(4033194,-1);
	    qm.gainItem(4033195,-1);
            qm.forceCompleteQuest();
            qm.sendNext("�����!! �̸�����! �� ���� ���ǿ� ������� ���� ��°ž�?");
        } else if (status == 2) {
	    qm.warp(913070002,0);
            qm.dispose();
	}
    }
}