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
            qm.askAcceptDecline("���忡 ���Ϸ� ���� #b�ƺ�#k�� �׸� ���ö��� ���� �ذ� ������ ����. �װ� #b���� �߽���#k�� ��� �ƺ����� #b���ö��� ���#k���ַ�. ������?");
        } else if (status == 1) {
	    qm.gainItem(4032448,1);
            qm.forceStartQuest();
	    qm.dispose();
	}
    }
}