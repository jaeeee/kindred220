var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
	    qm.askAcceptDecline("�� ���� ���� ����� ���θ� ���� �缭 �������� ��Ų� ���� ������ �����ϼ̽��ϴ�. ������ �����ðڽ��ϱ�?");
        } else if (status == 1) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest(20311);
	    qm.gainItem(4032179,-1);
	    qm.gainItem(4032103,-1);
	    qm.gainItem(1142068,1);
	    qm.getPlayer().changeJob(1311);
	    qm.showinfoMessage("<��ޱ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.expandInventory(4,4);
            qm.sendNext("#h #. ����� ��ޱ��� �Ӹ��մϴ�. ���� �� �ð����� ����� �ñ׳ʽ� ������ ��ޱ��μ� �� ���� å���� �������� �˴ϴ�. �׻� �����ο� ������ ���踦 �ٶ󺸵�, ����� ���� �ǹ��� ���� ���ñ�...");
	    qm.dispose();
	}
    }
}