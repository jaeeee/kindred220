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
            if (qm.getQuestStatus(20320) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20320) == 1) {
		qm.askAcceptDecline("�±޽����� ����Ͻ� ���� ���ϵ帳�ϴ�. �������� ���ı���Դϴ�. ���� �ٷ� �����Ͻðڽ��ϱ�?");
	    }
	} else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.getPlayer().changeJob(5111);
	    qm.gainItem(1142401,1);
	    qm.showinfoMessage("<���� ���� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    qm.dispose();
	}
    }
}