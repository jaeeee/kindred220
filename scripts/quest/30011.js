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
	qm.sendYesNo("�̹����� �հ��� �׷��� �� �ۿ� �ִ� ������ ��ȣ�ڸ� óġ����.");
} else if (status == 1) {
	qm.sendNext("�հ��� �׷��� �� �ۿ��� �������� ��� ���� ����ġ �ʾ�. ���� ����ϸ� �ȵ�!");
	qm.startQuest(30011);
	qm.getPlayer().setKeyValue("quean","start");
	qm.dispose();
}
}
}