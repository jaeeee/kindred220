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
	    qm.askAcceptDecline("����� �̿��� ������ �״��� ���θ� ���� ��, �������� �״뿡�� ���ο� ������ �ο��ϼ̴�. ������ �޾Ƶ��̰ڴ°�?");
        } else if (status == 1) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest(20311);
	    qm.gainItem(4032179,-1);
	    qm.gainItem(4032101,-1);
	    qm.gainItem(1142068,1);
	    qm.getPlayer().changeJob(1111);
	    qm.showinfoMessage("<��ޱ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("#h #. �״븦 ��ޱ��� �Ӹ��Ѵ�. ���� �� �ð����� �״�� �ñ׳ʽ� ������ ��ޱ��μ� ���� �����Ͽ� ������ �ڽſ��� �β����� �ʵ��� ����ؾ� �� ���̴�. �״��� ���� �׻� ������ �ٶ���.");
	    qm.dispose();
	}
    }
}