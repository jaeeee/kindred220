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
            if (qm.getQuestStatus(1443) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1443) == 1) {
                qm.sendYesNo("������ ������ ��ũ�ε���� ������ �ڳ׸� ������ �������� �������... ������ �� �� ���������� ���̾�. ���� ���� ���� ���� ��. �� ������ ����, ���� �����Ͱ� �� �غ� �Ǿ���?");
	    }
        } else if (status == 1) {
	    qm.changeJob(421);
	    qm.gainItem(4031059,-1);
            qm.forceCompleteQuest();
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("�������� �ڳ״� #b���� ������#k��. #b�ܵ�#k�� ������, ������ ���� �����ͷμ� �ڳװ� ���� ���� ������ ����ϰ�.");
            qm.dispose();
        }
    }
}