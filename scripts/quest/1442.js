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
            if (qm.getQuestStatus(1442) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1442) == 1) {
                qm.sendYesNo("������ ������ ��ũ�ε���� ������ �ڳ׸� ������ �������� �������... ������ �� �� ���������� ���̾�. ���� ���� ���� ���� ��. �� ������ ����, ����� �� �غ� �Ǿ���?");
	    }
        } else if (status == 1) {
	    qm.changeJob(411);
	    qm.gainItem(4031059,-1); 
            qm.forceCompleteQuest();
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #b���#k�̴�. #b�ƴ�� ǥâ#k�� ������, ������ ������μ� �ڳװ� ���� ���� ������ ����ϰ�.");
            qm.dispose();
        }
    }
}