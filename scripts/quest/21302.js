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
            if (qm.getQuestStatus(21302) == 0) {
                qm.forceStartQuest();
	    	qm.forceStartQuest(21203,"1");
                qm.dispose();
	    } else if (qm.getQuestStatus(21303) == 2) {
		qm.sendNext("��! ��, �װ���... ȫ�ֿ� ����� ���� ����س� �ž�? �ƾ�... �ƹ��� �װ� �ٺ��� �Ǹ��� ȯ�ڶ�� �ϴ��� �̷��� �� ���� �� ���ٴϱ�... ��, �̷� ���� �ƴ���! � ������ �ǳ���!");
	    }
        } else if (status == 1) {
            qm.askAcceptDecline("����, ȫ�ֿ��� ���� ��ã�Ұڴ�, �� �ɷ��� �� �� �����ٰ�. �ȱ׷��� ������ ������ ���� �ö����� �� ���� �������� ���� �� ���� �ž�!");
        } else if (status == 2) {
            qm.forceCompleteQuest();
	    qm.removeAll(4032312);
	    qm.changeJob(2111);
	    qm.gainItem(1142131,1);
	    qm.showinfoMessage("<�÷ü��� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("� ������ �ɷ��� ��� ��ã����. ����ó�� �Բ� ������ �ٴ��ڰ�...");
            qm.dispose();
	}
    }
}