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
            if (qm.getQuestStatus(1445) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1445) == 1) {
                qm.sendYesNo("������ ������ ī�̸��԰��� ������ �ڳ׸� ������ �������� �������. �������°�? ���� ���� ���� ���� ��. �� ������ ����, ��Ŀ�Ͼ �� �غ� �Ǿ���?");
	    }
        } else if (status == 1) {
	    qm.changeJob(511);
            qm.forceCompleteQuest();
	    qm.gainItem(4031059,-1); 
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #b��Ŀ�Ͼ�#k��. #b��Ŭ#k�� ������, ������ �����۷μ� �ڳװ� ���� ���� ������ ����ϰ�.");
            qm.dispose();
        }
    }
}