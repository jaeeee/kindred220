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
            if (qm.getQuestStatus(23034) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23034) == 1) {
                qm.sendNext("������ ���� ��ġ�� ���ְ� ���ƿԱ���! ����, ����! �� ���� Ʋ������. �ʶ�� �س� �Ŷ�� �Ͼ���. �̰ɷ� �츮 ������ ������ ���� ���� �ѵ����� ������ �ž�. �� ������ ���� ���� ū ���� ������.");
	    }
        } else if (status == 1) {
            qm.sendYesNo("�� �ɷ��� ���� �Ǿ����� �������� �ʰ� ������ ���� �ܰ�� �ѱ�ھ�. �ٸ� ������� ���� �����ϴٰ� ��������... �ʶ�� ��ų�� ������ �ʰ� ����� �� ���� ���ϵ� ���ͷ� �ŵ쳯 �� ���� �ž�!");
        } else if (status == 2) {
	    qm.changeJob(3311);
	    qm.gainItem(1142244,1);
            qm.forceCompleteQuest();
	    qm.showinfoMessage("<Ư������ ��޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    qm.sendNext("�� �������׾�. ���� �� �̻� ������ �װ� �ƴϾ�. �� �����ϰ� ������ ȭ���� ��ų�� ���谡 ������ �ž�. ���̵����� Ÿ�� �ٴϴ� ����ϱ� ������ �ʰ�����... �̳� �� ���� �ְھ�? �� �ƽ��ƽ��� �ӹ��� �س� ���ε� ���̾�!");
        } else if (status == 2) {
	    qm.sendPrev("�׷� ���� ������ ����. �׶����� �����������μ� ������ Ȱ���ϱ� �������.");
            qm.dispose();
        }
    }
}