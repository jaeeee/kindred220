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
            if (qm.getQuestStatus(1459) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1459) == 1) {
		qm.sendYesNo("�ڳ׿��� ������ ������ �������� ������ �����߱�. �̰Ÿ� �������! �� �̻��� ������ �ʿ����� �ʾ�. ����, ������ ���谡�� �ǰڴ°�?");
	    }
        } else if (status == 1) {
            qm.forceCompleteQuest();
	    qm.gainItem(4031860,-1); 
	    qm.gainItem(4031861,-1);
	    qm.changeJob(qm.getJob() + 1);
	    qm.gainItem(1142110,1);
	    qm.showinfoMessage("<������ ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�� ���� �����ο� ���谡���� �����ߴ� �ڳװ� ������ ���԰� ���� ����, ��⸦ ��� ���� ������ ���谡�� �Ǿ���.");
        } else if (status == 2) {
            qm.sendNext("�� ��� ���� ���� �̸� �����̶� �θ��� ������ ��ü ���� ������ �� �� �ְڴ°�.");
        } else if (status == 3) {
            qm.sendPrev("������ �¾�� ���� �ƴ϶� ������� �̷������ ��... �״�, ������ ������ �Ǿ� ������ ���带 �ùٸ� �������� �̲����ְ�.");
            qm.dispose();
	}
    }
}