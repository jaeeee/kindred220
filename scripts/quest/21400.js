var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
	    qm.askAcceptDecline("������ �� �ϰ� ��Ű���? �ٻڽŵ� �̾������� � #b����#k���� ���ƿ� �ּ���. #b����#k�� �Ǵٽ� �̻��� ������ ���̰� �־��... �̻��ؿ�. ���� ���� ������ �ƴϿ���. �� �� ��� ��ο�... �׷� �����̿���.");
        } else if (status == 1) {
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}