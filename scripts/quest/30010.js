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
	qm.sendYesNo("�̹����� �������ڰ� �׷��� �� �ۿ� �ִ� ������ ��ȣ�ڸ� ó������.");
} else if (status == 1) {
	qm.sendNext("�̹����� �� �� ������ ����� �������ϱ� ������ �غ� �ؾ� �Ұž�.");
	qm.getPlayer().setKeyValue("pier","start");
	qm.startQuest(30010);
	qm.dispose();
} 
}
}