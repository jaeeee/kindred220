importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNextS("(�� ������ ������� ������ �� �ִ� �͵� �뷫 �ľ��� ������ ����. ���� ������ �丮������ ���ư��� �ϸ� ���Ҵ�.)",2);
} else if (status == 1) {
qm.sendNextS("�̷� �̷��� ����� ���ϰ��� �Ǹ����� �۴ٸ� ����� �Ҿ����Ҹ� �� �� ����.",2);
} else if (status == 2) {
qm.sendNextS("���� �׸� �丮������ ���ư���.",2);
} else if (status == 3) {
qm.warp(102000000);
qm.completeQuest(31909);
qm.dispose();
}
}
}