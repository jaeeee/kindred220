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
            if (qm.getQuestStatus(1447) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1447) == 1) {
                qm.sendNext("������ ������ ����߱�... �����ε�? ���� �нſ� �Ұ��� #b�ٸ� ������ ��ũ�ε�#k������ �׸� �̱� ���� ������. #b�������� ��#k�� ���� �нű��� ��ȯ�� �޶�淡 �󸶳� ����� �ֳ� �ߴ���, ��ũ�ε��� ���� Ʋ������ �ʾұ�.");
	    }
        } else if (status == 1) {
            qm.askAcceptDecline("������ ������ ��ũ�ε���� ������ �ڳ׸� ������ �������� �������... ������ �� �� ���������� ���̾�. ���� ���� ���� ���� ��. �� ������ ����, �����Ű� �� �غ� �Ǿ���?");
        } else if (status == 2) {
	    qm.changeJob(433);
            qm.forceCompleteQuest();
	    qm.gainItem(4031059,-1); 
	    qm.gainItem(1142392,1);
	    qm.showinfoMessage("<�ٶ��� ������ ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #b������#k�̴�. ������ ������ ��, ������ �����ŷμ� �ڳװ� ���� ���� ������ ����ϰ�.");
            qm.dispose();
        }
    }
}