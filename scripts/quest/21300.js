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
	    qm.sendNext("������ �� �ǰ� �ֳ���? ����... ���� 70�̶�... ���� ����������, ó�� ���� �ӿ��� ������ ���� �� ���� ���°��� ��ſ� ���ϸ� ������ �����̳׿�. �̴�� ��� �������� ���� �и� ������ ���� ��ã�� �� ���� �ſ���.");
        } else if (status == 1) {
            qm.askAcceptDecline("������ �� ���� ���� �������� ��� ���ƿ� �ּž߰ھ��. #b����� ������ �Ǵٽ� �̻��� ������ ���̰� �ְŵ��. ���� �� ���� �ִ� ����̿���.#k ��¼�� ����� �ɷ��� ������ �� �������� �𸣴� ���� �� �ּ���.");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}