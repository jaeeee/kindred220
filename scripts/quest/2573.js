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
	    qm.sendNext("�ȳ��ϽŰ�? �����ϱ� �� ���� ������� �������� �ʴ°�? ���ο� ������ ������ ���谡�ΰ� ����.");
        } else if (status == 1) {
            qm.askAcceptDecline("������ ��� �غ� �ϰ� ������ ���ݸ� ��ٷ� �ְ�.");
        } else if (status == 2) {
            qm.sendNext("��~! ��ٸ��� ���̿� ��� �غ� ��� �Ϸ�Ǿ���. �ٷ� ������״� � ž���ϰԳ�. �׷� �ٷ� ��� �ϵ��� ����.");
        } else if (status == 3) {
            qm.forceCompleteQuest();
	    qm.warp(3000000,0);
            qm.dispose();
	}
    }
}