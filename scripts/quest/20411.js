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
            if (qm.getQuestStatus(20411) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(20411) == 1) {
                qm.sendNext("ū Ȱ���� ���ּż� �����մϴ�. �����ϴ� ���п� �ñ׳ʽ����� �����Ͻʴϴ�. ��Ȥ�Ǿ��� ���鵵 ��� �������� ���ƿ԰��. ���� ��� ��ſ��� ū �ŷڿ� ������ ������ ������ �ֽ��ϴ�. �׸��� ����� �ڽŵ��� ���������ν� �����߽��ϴ�. ���� ��ġ �����ŵ� ���� ������ �޾Ƶ��̼ž� �� �� �����ϴ�.");
	    }
        } else if (status == 1) {
	    qm.changeJob(5112);
            qm.forceCompleteQuest();
	    qm.gainItem(1142402,1);
	    qm.showinfoMessage("<���� ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.dispose();
        }
    }
}