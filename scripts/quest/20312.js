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
	    qm.askAcceptDecline("�׷� ���� ���� ����� ���θ� ���� ��, �������� ��Ų� ���ο� ������ �����ϼ̾��. ������ �����ðھ��?");
        } else if (status == 1) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest(20311);
	    qm.gainItem(4032179,-1);
	    qm.gainItem(4032102,-1);
	    qm.gainItem(1142068,1);
	    qm.getPlayer().changeJob(1211);
	    qm.showinfoMessage("<��ޱ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("#h #. ����� ��ޱ��� �Ӹ��մϴ�. ���� �� �ð����� ����� �ñ׳ʽ� ������ ��ޱ��μ� �� ���������� �ڽ��� �ܷ��ϱ� �ٷ���. �� ������ ��ſ��� �η����� �ƴ� ��⸦ �� �ſ���.");
	    qm.dispose();
	}
    }
}