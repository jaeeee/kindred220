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
            if (qm.getQuestStatus(21301) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(21301) == 1) {
		qm.askAcceptDecline("���ϱ�ʹ� ���� �ž�? ������.. ���� �� �����̱�! ����, �׷� ������ ȫ�ֿ��� ������! �ٽ� ������� ��ü�� �ھ� ���� �״ϱ�... ��...? �� ����� ����? ����... �� ã�� �� �ž�?");
	    }
        } else if (status == 1) {
            qm.sendNext("��?! ȫ�ֿ��� �� ã�� �Դٰ�?! �ƴ� ��?! ����� �ž�?! �ƾ�, �̷�... �ƹ��� ���� �������� ���ֿ� �ɷȰ� �ƹ��� ������ ���� �귶� �� ������ �ٺ��� �� ���̾�...");
        } else if (status == 2) {
            qm.sendNextPrev("�� ��. �����ؼ��� �� ��. �̷� ���ϼ��� ������ ����ؼ� ������ ��������... �Ŀ�... �Ŀ�...");
        } else if (status == 3) {
            qm.sendNextPrev("�ٽ� ������ ������ ������ ���� �������� �ž�. �׷��� ȫ�ֿ��� ���� �����߰ھ�. �������� �� �� ����� �� ���� ������ ���� �˰� ����? �� � ��Ḧ ���...");
	} else if (status == 4) {
	    qm.sendNextPrev("     #i4001173#");
	} else if (status == 5) {
	    qm.sendNextPrev("...�޵� ����� ����. �ƾƾ�!");
	} else if (status == 6) {
            qm.forceCompleteQuest();
	    qm.sendNextPrevS("#b(���ϰ� ��û���� ȭ�� ���� �����ߴ�. �ϴ� �ڸ��� ���� ����. �����̶�� ���� ������ �� �� �������� �𸥴�.)#k",3);
            qm.dispose();
	}
    }
}