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
            if (qm.getQuestStatus(1437) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1437) == 1) {
                qm.sendNext("������ ������ ����߱�... ����, #b�ٸ� ������ ������#k���� ���... ��, �̰��� �ٷ� #b�������� ��#k�� ���� ������. �ٸ� ������ �н��� ��ȯ�� �ο� �� �ְ� �ϴ� ��. ������Բ� �����϶��. �ڳ׸� ���� �̷� �غ� ���ֽ� �Ŵ�...");
	    }
        } else if (status == 1) {
            qm.sendYesNo("������ ��������  ������԰��� ������ �ڳ� ���� ������ �������� �ڰ��� �����. ���� ���� ���� ���� ��. �� ������ ������, ������Ʈ�� �ǰڴ°�?");
        } else if (status == 2) {
	    qm.changeJob(231);
	    qm.gainItem(4031059,-1);
            qm.forceCompleteQuest();
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("���� �ڳ״� #b������Ʈ#k���. #bġ���� �ż�#k�� ������, ������ �������μ� �ڳװ� ���� ���� ������ ���ĺ���.");
            qm.dispose();
        }
    }
}