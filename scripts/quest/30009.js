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
qm.sendNext("���ƿԳ�. �װ� ���µ��� ��û���� ���� ������� �Ծ�!");
} else if (status == 1) {
qm.sendNextS("�ٵ� �ʸ� ���� ������ Ǯ�� ���� �� ������̾�. ������ ���տ��� �� ���⼭ �����ֱ�� ��������ϱ� ���� ����������.",2);
} else if (status == 2) {
qm.sendNextS("�׷��� �װ� �ɸ� ������ �����ϱ� ���ؼ��� �� �� �ۿ� �ִ� ������ ��ȣ�ڵ��� óġ�ؾ߸� ��. Ȥ�� ���� �ƴ� �� �־�?",2);
} else if (status == 3) {
qm.sendNext("���� ���⸦ ��� �� ��� �ƹ� �͵� ����. ��ġ�� ����� ���� Ȯ���ϰ� ���� �� �־�.");
} else if (status == 4) {
qm.sendYesNo("�ð谡 �׷��� �� �ۿ��� �귯��� ����� ���� ���� ���ϰ� ������. �׷��ϱ� �ð谡 �׷��� �� �ۿ� �ִ� ������ ��ȣ�ڸ� ���� ���� óġ����.");
} else if (status == 5) {
qm.sendNext("�Ƹ� ȥ�ڼ��� ���� �ž�. ���� ���ϰ� �������ٰ�� �ص� �� ���� ���� ������ ��. �׷��ϱ� �� #r������ �´� ����#k�� ���ϵ��� ��!");
qm.getPlayer().setKeyValue("banban","start");
qm.startQuest(30009);
qm.dispose();
}
}
}