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
            if (qm.getQuestStatus(2642) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(2642) == 1) {
	    	qm.forceCompleteQuest();
	    	qm.getPlayer().changeJob(432);
		qm.sendNext("��������... ����� ��� �������Դϴ�.");
	    }
        } else if (status == 1) {
            qm.sendNext("������ ���� ���󺸰� ����������. ȫ�ư� ��ſ� ���� ���ϴ� �� �������׿�... ����̶�� �и� ������ �Ŷ��. ����� �ִٰ�... ��ũ�ε�� �ο� �� ���� �Ŷ��... �׷��� ������.");
        } else if (status == 2) {
            qm.sendNextPrev("����� �̷��� �������µ� ���� ��ȭ���� �����̶�� ���� �������� ���� �� ���ƿ�. �츮�� �ο��� �׻� �����ϴٰ� �Ͼ��µ�... �װ��� �ƴ϶�� ��� �ؾ� �ұ��?");
        } else if (status == 3) {
            qm.sendNextPrev("�ƹ���... ����̶�� ��� �ϼ������? �������� �̲��� ����̶��...");
        } else if (status == 4) {
            qm.sendPrev("�̾��ؿ�. ����� �������... ���� �� �� ������ ������ �ð��� �ʿ��ؿ�.");
	    qm.dispose();
	}
    }
}