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
            if (qm.getQuestStatus(20203) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20203) == 1 && qm.haveItem(4032096,30)) {
		qm.askAcceptDecline("������ ��ǥ... ��� Ȯ���߽��ϴ�. ��ſ��� ���ı�簡 �� �ڰ��� ������ Ȯ���߽��ϴ�. ���ı���� ���� ���ðڽ��ϱ�?");
	    }
        } else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.gainItem(1142067,1);
	    qm.getPlayer().changeJob(1310);
	    qm.removeAll(4032096);
	    qm.showinfoMessage("<���ı���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� ����� �� �̻� ���ñ�簡 �ƴմϴ�. �ñ׳ʽ� ������ ���ı���Դϴ�.");
        } else if (status == 2) {
            qm.sendNextPrev("��Ų� #bSP#k�� ��Ƚ��ϴ�. ���� �극��Ŀ�� ��ų �߿� ���ı�翡�Ը� ����� ��ų�鵵 ������ �������, ����� �Բ� �����Ͻñ�.");
        } else if (status == 3) {
            qm.sendPrev("�׷� �ñ׳ʽ� ������ ���ı��μ� �׻� �̼����� ��� ���� ���ñ�...");
	    qm.dispose();
	}
    }
}