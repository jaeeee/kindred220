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
            if (qm.getQuestStatus(20204) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20204) == 1 && qm.haveItem(4032096,30)) {
		qm.askAcceptDecline("������ ��ǥ�� ��� �����Ա�. ��������... �ƴ�, �ܿ� �̷� �Ϸ� Ī���� �� �ʿ�� ������. �ʿ��� ���ı�簡 �� �ڰ��� ������ Ȯ���ߴ�. �̴�� ���ı�簡 �ǰڳ�?");
	    }
        } else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.gainItem(1142067,1);
	    qm.getPlayer().changeJob(1410);
	    qm.removeAll(4032096);
	    qm.showinfoMessage("<���ı���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� �� �� �̻� ���ñ�簡 �ƴϴ�. �ñ׳ʽ� ������ ���ı���.");
        } else if (status == 2) {
            qm.sendNextPrev("�ʿ��� #bSP#k�� �� ���. ���� ���� ������ ���� ������ ��ų�� ��� �� ���� �ְ���. ����Ʈ ��Ŀ�� ��ų �� ���ı�翡�� ����� ��ų���� ��� ��ũ�Ͻ��� �Բ� ������ �����.");
        } else if (status == 3) {
            qm.sendPrev("�׷� �ñ׳ʽ� ������ ���ı��μ��� �ǿ� ������ �ʱ⸦. ��� ��� �ӿ� ������ �ִٰ� �ص�.");
	    qm.dispose();
	}
    }
}












