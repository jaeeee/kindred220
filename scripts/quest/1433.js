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
            if (qm.getQuestStatus(1433) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1433) == 1) {
                qm.sendNext("������ ������ ����߱�... ����, #b�ٸ� ������ �ָ���� �Ͼ#k�� �ο�� ���� ��°�. �װ��� #b�������� ��#k�� ���� ���� ���� ������ �ź��� ȯ��... �ָ���� �Ͼ�� �ڳ׸� �� ���� ������ ��� �̲��� ���� ����߱⿡ ��Ÿ�� ������.");
	    }
        } else if (status == 1) {
            qm.sendYesNo("������ ������ #b�ָ���� �Ͼ#k�� �ο����μ� �ڳ� ���� ������ ������ �ڰ��� �����. ���� ���� ���� ������ ����, #b�巡�� ����Ʈ#k�� �����ϴ� �� ��... ��, ���ο� ���� �޾Ƶ��� �غ� �Ǿ���?");
        } else if (status == 2) {
	    qm.changeJob(131);
            qm.forceCompleteQuest();
	    qm.gainItem(4031059,-1); 
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("����! �ڳ״� �������� #b�巡�� ����Ʈ, ����#k���. #bâ�� ����#k�� ������, ������ ����μ� �ڳװ� ���� ���� ������ ���ĺ���.");
            qm.dispose();
        }
    }
}