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
            if (qm.getQuestStatus(23033) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23033) == 1) {
                qm.sendYesNo("�� ������ �ɷ��� �ִٸ� �� �̻� ������ �� ����. �ʹ� �����ؼ� �� �� �Ŀ� ������ �����̾�����... �� ������ ��Ʋ �������� ��ų�� �ʿ��� ������ �ְھ�! �ʶ�� �� ������ ������ �� ���� �� ����!");
	    }
        } else if (status == 1) {
	    qm.changeJob(3211);
	    qm.gainItem(1142244,1);
            qm.forceCompleteQuest();
	    qm.showinfoMessage("<Ư������ ��޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    qm.sendNext("�� �������׾�. ���� �� �̻� ������ �װ� �ƴϾ�. ���⿡ ����� ����õ���� ��ų�� ���谡 ������ �ž�. ��Ʈ���ϱ� ���� �ʰ�����... ����, �� ������ �ӹ��� �س� �ʶ�� ����� �ʰ� �ٷ� �� �������� �Ͼ�.");
        } else if (status == 2) {
	    qm.sendPrev("�׷� ���� ������ ����. �׶����� �����������μ� ������ Ȱ���ϱ� �������.");
            qm.dispose();
        }
    }
}