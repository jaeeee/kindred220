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
            if (qm.getQuestStatus(1446) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1446) == 1) {
                qm.sendYesNo("������ ������ ī�̸��԰��� ������ �ڳ׸� ������ �������� �������. �������°�? ���� ���� ���� ���� ��. �� ������ ����, ��Ű���� �� �غ� �Ǿ���?");
	    }
        } else if (status == 1) {
	    qm.changeJob(521);
            qm.forceCompleteQuest();
	    qm.gainItem(4031059,-1); 
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #b��Ű��#k��. #b��#k�� ������, ������ ��Ű���μ� �ڳװ� ���� ���� ������ ����ϰ�.");
            qm.dispose();
        }
    }
}