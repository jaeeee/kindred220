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
            if (qm.getQuestStatus(1448) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1448) == 1) {
		qm.sendNext("������ ������ ����߱�... �����ε�? ������ �װ����� #bī�̸�#k���� �˰� ���� ����? �нſ� �Ұ��� #b�ٸ� ������ ī�̸�#k�������� �׷��ٰ� �ص� ���� ������ �ٵ�... ī�̸����� �ڳ׸� ��Ź�Ѵٴ� ���� ���� �Ͻ� �� �ƴϷα�.");
	    }
        } else if (status == 1) {
            qm.askAcceptDecline("������ ������ ī�̸��԰��� ������ �ڳ׸� ������ �������� �������. �������°�? ���� ���� ���� ���� ��. �� ������ ����, ĳ�� �����Ͱ� �� �غ� �Ǿ���?");
        } else if (status == 2) {
	    qm.changeJob(531);
	    qm.forceCompleteQuest();
	    qm.gainItem(4031059,-1); 
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #bĳ�� ������#k�̴�. #bĳ��#k�� ������, ������ ĳ�� �����ͷμ�  �ڳװ� ���� ���� ������ ����ϰ�.");
	    qm.dispose();
	}
    }
}