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
            if (qm.getQuestStatus(20205) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20205) == 1 && qm.haveItem(4032096,30)) {
		qm.askAcceptDecline("������ ��ǥ�� ��� �����Գ�? ������! �ʶ�� �� �� �� �˾Ҿ�. �ʿ��� ���ı�簡 �� �ڰ��� ������ Ȯ���Ͽ����! ����. �̴�� ���ı�簡 �ǰھ�?");
	    }
        } else if (status == 1) {
	    qm.forceCompleteQuest();
	    qm.gainItem(1142067,1);
	    qm.getPlayer().changeJob(1510);
	    qm.removeAll(4032096);
	    qm.showinfoMessage("<���ı���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� �� �� �̻� ���ñ�簡 �ƴϾ�. �ñ׳ʽ� ������ ���ı����.");
        } else if (status == 2) {
            qm.sendNextPrev("������ #bSP#k�� ���. ��Ʈ����Ŀ�� ���ı�翡�Ը� ����� ��ų���� �� �� ���� �ž�. ����Ʈ�װ� ���յ� �� ���� ��ų��, �� �÷���.");
        } else if (status == 3) {
            qm.sendPrev("��, �ñ׳ʽ� ������ ���ı���� �ʹ� �ɰ��ϰ� ���������� �������� ���ھ�. �ƹ��� ����� ���̶� ��ſ��� ã�ڰ�.");
	    qm.dispose();
	}
    }
}