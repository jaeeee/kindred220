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
            if (qm.getQuestStatus(1439) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1439) == 1) {
                qm.sendNext("������ ������ ����߱���. #b�ٸ� ������ �ﷹ��#k���� ������ �Ұ��� �����. �������? �̰��� �ٷ� #b�������� ��#k�� ���� ����������. �ٸ� ������ �н��� ��ȯ�� �ο� �� �ְ� �ϴ� ��. �ﷹ������ ����� ���� �غ��� ���̶��ϴ�.");
	    }
        } else if (status == 1) {
            qm.sendYesNo("������ �ü��̽� �ﷹ���԰��� ������ ����� ������ �ü����� ��� �̲���... ����� ������ �������ó���? ���� ���� ���� ���� ���̶��ϴ�. �� ������ �ü�, �������� �� �غ� �Ǿ�����?");
        } else if (status == 2) {
	    qm.changeJob(311);
	    qm.gainItem(4031059,-1);
            qm.forceCompleteQuest();
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� ����� #b������#k�Դϴ�. #bȰ#k�� ������, ������ �������μ� ����� ���� ���� ������ ���ĺ�����.");
            qm.dispose();
        }
    }
}