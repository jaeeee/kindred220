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
	    qm.askAcceptDecline("�Գ�? �ڳװ� ���� ���� ���� ���ȿ� ������ ��ȭ��ġ�� ���� �Ǿ��ٳ�. ��, �׷� �� �̻� ��ü�� �ʿ� ������! �ٷ� �������!");
	} else if (status == 1) {
            qm.forceStartQuest();
	    qm.warp(120000202,0);
            qm.dispose();
	}
    }
}