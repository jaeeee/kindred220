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
            if (qm.getQuestStatus(23011) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23011) == 1) {
                qm.sendYesNo("��Ʋ �������� �Ǳ�� ����� �ǰ�? ���� ������ ������ ��ȸ�� �־�. ��ȭ�� ���߰� ����Ʈ�� ������ �� �ٸ� �༮���� ���� �ɸ� ��. �� �����غ�. ���� ��Ʋ �������� ���ϰھ�? �� ������ �� ������������ �濡 ��︰�ٰ� ������?");
	    }
        } else if (status == 1) {
	    qm.changeJob(3200);
	    qm.gainItem(1382100,1);
	    qm.gainItem(1142242,1);
            qm.forceCompleteQuest();
	    qm.showinfoMessage("<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("����! ���� ������������ �� �� ȯ������. ���ݺ��� �ʴ� ��Ʋ ��������. �ο�� ������μ� ���⸦ ǰ�� ������ �տ� ������ ���� �¼��ڰ�.");
        } else if (status == 2) {
	    qm.sendPrev("����� ��Ʋ ��������� ���ϰ� �ٴϸ� ����ϰ���? �������� �ɸ���� �ϸ� �ò������� �ž�. �׷��� ���Ǻ��ʹ� �� �����̶�� �ҷ�. �� Ư������ ������ �� ���ǿ� ���� �ž�. ����... ���� �� Ư�������� ������ �Ǿ� �� �� �̲����ְھ�.");
            qm.dispose();
        }
    }
}