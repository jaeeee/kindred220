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
            if (qm.getQuestStatus(1431) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(1431) == 1) {
                qm.sendNext("������ ������ ����߱�... ����, #b�ٸ� ������ �ָ���� �Ͼ#k�� �ο�� ���� ��°�. �װ��� #b�������� ��#k�� ���� ���� ���� ������ �ź��� ȯ��... �ָ���� �Ͼ�� �ڳ׸� �� ���� ������ ��� �̲��� ���� ����߱⿡ ��Ÿ�� ������.");
	    }
        } else if (status == 1) {
            qm.sendYesNo("������ ������ #b�ָ���� �Ͼ#k�� �ο����μ� �ڳ� ���� ������ ������ �ڰ��� �����. ���� ���� ���� ������ ����, #bũ�缼�̴�#k�� �����ϴ� �� ��... ��, ���ο� ���� �޾Ƶ��� �غ� �Ǿ���?");
        } else if (status == 2) {
	    qm.changeJob(111);
	    qm.gainItem(4031059,-1); 
            qm.forceCompleteQuest();
	    qm.gainItem(1142109,1);
	    qm.showinfoMessage("<���׶� ���谡�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("����! �ڳ״� �������� #bũ�缼�̴�#k���. #b�˰� ����#k�� ������, ������ ����μ� �ڳװ� ���� ���� ������ ���ĺ���.");
            qm.dispose();
        }
    }
}