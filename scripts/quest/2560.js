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
	    qm.sendNext("����������! ��! ��!");
        } else if (status == 1) {
            qm.sendNextPrevS("��� á�µ� ������ ������ ����... �� ��Ȳ�� ��ü ����? ���� ���ڸ��� ���̴� �� �����̿�, ����� ��������� �𸣰ڰ�... ��� ��� �� ����? �� ��� �� ���� �˰� �ִ�?",3);
        } else if (status == 2) {
	    qm.askAcceptDecline("����, ����! (�����̰� ���� �����δ�. ���� �� �༮�� ��Ȳ�� �ƴ� �ǰ�? �����̿��� �ڼ��� �����!)");
	} else if (status == 3) {
            qm.forceStartQuest();
            qm.dispose();
	}
    }
}