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
	qm.sendYesNo("���� ������ ���θ��� ���Ҿ�. ���� �׷��� �� �ۿ� �ִ� ������ ��ȣ�ڸ� óġ����.");
} else if (status == 1) {
	qm.sendNext("���ݱ����� �񱳵� �� �� ���� ������ ��û�� ����� ������. �и� ġ���� ������ ������ �״� ö���� �غ��ϰ� ������ ��.");
} else if (status == 2) {
	qm.startQuest(30012);
	qm.getPlayer().setKeyValue("balum","start");
	qm.dispose();
}
}
}