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
	    qm.askAcceptDecline("�� ���� �ذ��� �� ���θ� ���� �缭 �������� �װ� ���ο� ������ ��������. ������ �ްھ�?");
        } else if (status == 1) {
	    qm.forceStartQuest();
	    qm.forceCompleteQuest(20311);
	    qm.gainItem(4032179,-1);
	    qm.gainItem(4032104,-1);
	    qm.gainItem(1142068,1);
	    qm.getPlayer().changeJob(1411);
	    qm.showinfoMessage("<��ޱ���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("#h #. �� ��ޱ��� �Ӹ��Ѵ�. ���� �� �ð����� �� �ñ׳ʽ� ������ ��ޱ��μ� �� ū �ų��� ������ ������ �ȴ�. ��� �ӿ� �ִ� ������ ��Ȥ���� �� �������� �� �ų丸�� ���� ���ư�����.");
	    qm.dispose();
	}
    }
}