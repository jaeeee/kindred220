importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
	qm.sendNext("��, ���⼭ ������ �;�.");
    } else if (status == 1) {
	qm.sendNextS("�����?",2);
} else if (status == 2) {
	qm.sendNext("���⼭ ������ �ʹٱ�.");
} else if (status == 3) {
	qm.sendNextS("��ü ���� �Ҹ��� �ϴ� �ž�? ���� ����? �� ������?",2);
} else if (status == 4) {
	qm.sendNext("����? ����� ��Ÿ�񽺾�.�� ���⼭ ������ �;�. �׷��ϱ� ���� ������.");
} else if (status == 5) {
	qm.sendNextS("(��.... ��� �ڱ� ���� �ϰ����ݾ�? ���� �� ���ϴ±�.)",2);
} else if (status == 6) {
	qm.sendNextS("(�ƹ����� ���� ���� �� ������, �����־�� �ұ�?)",2);
} else if (status == 7) {
	qm.sendNextS("�˾Ҿ�. ���⼭ ���� �� �ִ� ����� ã���ٰ�.",2);
} else if (status == 8) {
	qm.sendNext("���� ���� �����ִ� ����? ����߾�!");
} else if (status == 9) {
	qm.sendNextS("��, ��򰡿� ������ ���� �� �ִ� ���� �����ٵ�....",2);
} else if (status == 10) {
	qm.startQuest(30002);
	qm.dispose();
}
 }
}