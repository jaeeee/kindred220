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
            if (qm.getQuestStatus(1457) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1457) == 1) {
		qm.sendYesNo("��ſ��� ������ ������ �������� ������ �����Ͽ�����. ���� �� �̻��� ������ �ʿ����� �ʰ���... ������ ���谡�� �ǰھ��?");
	    }
        } else if (status == 1) {
            qm.forceCompleteQuest();
	    qm.gainItem(4031517,-1); 
	    qm.gainItem(4031518,-1);
	    qm.changeJob(qm.getJob() + 1);
	    if (qm.getJob() == 434) {
	        qm.gainItem(1142393,1);
	        qm.showinfoMessage("<���� ������ �׸���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    } else {
	        qm.gainItem(1142110,1);
	        qm.showinfoMessage("<������ ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    }
            qm.sendNext("�� ���� �����ο� ���谡���� �����ߴ� ����� ������ ���԰� ���� ����, ��⸦ ��� ���� ������ ���谡�� �Ǿ�����.");
            qm.dispose();
        } else if (status == 2) {
            qm.sendNext("�� ��� ���� ���� �̸� �����̶� �θ��� ������ ��ü ���� ������ �� �� �ְڳ���.");
        } else if (status == 3) {
            qm.sendPrev("������ �¾�� ���� �ƴ϶� ������� �̷������ ��... ������ ������ �Ǿ� ������ ���带 �ùٸ� �������� �̲���...");
            qm.dispose();
	}
    }
}