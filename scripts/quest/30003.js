importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNext("��� �ϸ� ���⼭ ���� �� �־�?");
} else if (status == 1) {
qm.sendNextS("���ʿ� ������ ���� �� �ִ� �ⱸ�� �־�.�ⱸ�� ���ؼ� ������ ������ �� �� ����.",2);
} else if (status == 2) {
qm.sendNext("�װ� �̹� �� ���� �� �õ��غþ�. ������ ������ ���� �� �����°�.");
} else if (status == 3) {
qm.sendNextS("������ ���� �� �����ٰ�? �ⱸ�� �����ֳ�? �˾Ҿ�. ���� �� �� Ȯ���غ���.",2);
} else if (status == 4) {
qm.sendNext("���� Ȯ������. �� ���� ���⼭ ������ �ʹ� ����....");
} else if (status == 5) {
qm.getPlayer().setKeyValue("lutat","start");
qm.dispose();
}
}
}