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
	    qm.askAcceptDecline("#b(���� �����θ� �Ŵ��� ������ ����ϴ� �����̶�� Ȯ���ϰ� �ִ°�? Ȯ���Ѵٸ� ���� �־� �Ŵ��� ������ ����. �и� ���� ������ �� ���̴�.)#k");
        } else if (status == 1) {
	    qm.getPlayer().changeJob(2100);
            qm.forceCompleteQuest();
            qm.gainItem(2000013,50);
            qm.gainItem(2000014,50);
	    qm.resetStats(35,4,4,4);
	    qm.gainItem(1142129,1);
	    qm.showinfoMessage("<��� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("#b(���� ����� �������� �� ����...)#k");
        } else if (status == 2) {
	    qm.warp(914090100);
            qm.dispose();
	}
    }
}