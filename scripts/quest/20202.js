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
            if (qm.getQuestStatus(20202) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20202) == 1 && qm.haveItem(4032096,30)) {
		qm.askAcceptDecline("������ ��ǥ�� ��� �������̱���! ���� ����ؿ�! ��Ų��� ���ı�簡 �� �ڰ��� ����ؿ�! ���ı���� ���� ���ðھ��?");
	    }
        } else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.gainItem(1142067,1);
	    qm.getPlayer().changeJob(1210);
	    qm.removeAll(4032096);
	    qm.showinfoMessage("<���ı���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� ����� �� �̻� ���ñ�簡 �ƴϿ���. �ñ׳ʽ� ������ ���ı�翹��!");
        } else if (status == 2) {
            qm.sendNextPrev("��Ų� #bSP#k�� ��Ⱦ��. �÷��� ���ڵ��� ��ų �߿� ���ı�翡�Ը� ����� ��ų�鵵 ������ �������, �÷��Ӱ� �Բ� �� ����������!");
        } else if (status == 3) {
            qm.sendPrev("��, �׷� �ñ׳ʽ� ������ ���ı��μ� ���� ������ ���� ����� �ּ���!");
	    qm.dispose();
	}
    }
}