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
            if (qm.getQuestStatus(20201) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20201) == 1 && qm.haveItem(4032096,30)) {
		qm.askAcceptDecline("������ ��ǥ�� ��� �����Ա�... ����. �״뿡�Դ� ���ı�簡 �� �ڰ��� ����ϴ�. ���ı���� ���� ���ڴ°�?");
	    }
        } else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.gainItem(1142067,1);
	    qm.getPlayer().changeJob(1110);
	    qm.removeAll(4032096);
	    qm.showinfoMessage("<���ı���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� ���ñ��μ��� �״�� ����. �״�� �ñ׳ʽ� ������ ���ı���.");
        } else if (status == 2) {
            qm.sendNextPrev("�״뿡�� #bSP#k�� �־���. �ҿ� �������� ��ų ��, ���ı�翡�Ը� ����� ��ų�� �� ���� ���������� �ҿ�� �Բ� ���� ����������.");
        } else if (status == 3) {
            qm.sendPrev("�ñ׳ʽ� ������ ���ı��μ� �β����� ���� �������� ���� ������ ���� ���̵���.");
	    qm.dispose();
	}
    }
}