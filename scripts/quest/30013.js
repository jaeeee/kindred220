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
	qm.sendNext("���� ������ ��� Ǯ������ ������ ���� �� �ְ� �ƾ�!");
} else if (status == 1) {
	qm.sendNextS("(������Ʈ�� ������� ������� ������ ����� �ߴµ� �����? ���� ��Ÿ�񽺸� ��� �� �ְ� �Ǿ ������ �����ϴµ�...)",2);
} else if (status == 2) {
	qm.sendNextS("������ ���� �� �� ������. �׷���... ������ ���տ����� �װ� ������� �� �ֱ� �ٶ�� �־�.",2);
} else if (status == 3) {
	qm.sendNext("�����꿡....?");
} else if (status == 4) {
	qm.sendNextS("��. �ƹ����� �� ���� �븮�� ������ �����ϱ�, �����꿡�� ������ �ż��� ��ȣ�� �޴� ���� ������ �Ŷ�� �Ǵ��� �� ����. ������ �������� ������ �� ���̾�. ������ ���� �ʾƵ� ��. �׵��� �װ� ������ ������ �Ǹ��� ����.",2);
} else if (status == 5) {
	qm.sendNext("....�Ƴ�. ����� ���ƴٴϴٰ��� ���� �༮�鿡�� ���� ���ѱ����� ����. ������ ������ �Ǵ��� �¾�. �ƽ���� ������ ���� ������ ȸ���ϱ� �������� �����꿡 ������.");
} else if (status == 6) {
	qm.sendNextS("���� �����ھ�? �������� �����־ �ٱ������� ���� ���ƴٴϰ� �;� ���ݾ�.",2);
} else if (status == 7) {
	qm.sendNext("������. ���� �� ȸ���Ǹ� �׶� ������ �����ҷ�. �׶�, �� ���� �븮�� �༮����� �� �濡 �������׾�!");
} else if (status == 8) {
	qm.sendNextS("����. �׷� ������� ����. Ȥ�� ���� ���� ���� �� �𸣴ϱ� �ñ׳ʽ� ������ ȣ���� �� �ž�.",2);
} else if (status == 9) {
	qm.getPlayer().getMap().spawnTempNpc(1102003, -195, 215, qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102000, -94, 215, qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102001,145,215,qm.getPlayer().getId());
	qm.getPlayer().getMap().spawnTempNpc(1102002,224,215,qm.getPlayer().getId());
	qm.sendNextS("�غ����? �׷� ����Ѵ�!",2);
} else if (status == 10) {
	qm.getPlayer().getMap().removeTempNpc(1102003,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102000,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102001,qm.getPlayer().getId());
	qm.getPlayer().getMap().removeTempNpc(1102002,qm.getPlayer().getId());
	qm.warp(100000000);
	qm.showEffect(false,"rootabyss/goEreb");
	qm.completeQuest(30013);
	qm.dispose();
}
}
}