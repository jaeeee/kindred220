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
            if (qm.getQuestStatus(23013) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23013) == 1) {
                qm.sendYesNo("��ī���� �Ǳ�� ����Ͻ� �̴ϱ�? ������ ������ ��ȸ�� �ֽ��ϴ�. ��ȭ�� ���߰� ����Ʈ�� ������ �� �ٸ� �в� ���� �ɸ� �˴ϴ�. �� ������ ���ʽÿ�. ���� ��ī���� ���Ͻðڽ��ϱ�? �� ������ ����� ������������ �濡 ��︰�ٰ� �����մϱ�?");
	    }
        } else if (status == 1) {
	    qm.changeJob(3500);
	    qm.gainItem(1492014,1);
	    qm.gainItem(1142242,1);
            qm.forceCompleteQuest();
	    qm.showinfoMessage("<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� ������������ �� �� ȯ���մϴ�. ���ݺ��� ����� ��ī���Դϴ�. ��踦 �ٷ�� �ڷμ� ����� �� �� �ִ� ��� ����� ������ �� �տ� �ִ� ���� ó���Ͻʽÿ�.");
        } else if (status == 2) {
	    qm.sendPrev("��ĩ �������� �츮�� ��ü�� �߰��Ǳ�� �ϸ� ����մϴ�. �׷��� ���ݺ��� �� ���� �������̶�� �θ��ʽÿ�. ����� ����� Ư�������� ������ ���ǿ� �� �л��� �̴ϴ�. �� Ư���������� ����� ������ ��ī������ ����ġ�ڽ��ϴ�.");
            qm.dispose();
        }
    }
}