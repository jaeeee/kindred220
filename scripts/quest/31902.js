importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendOk("�׷� ��Ź�帱�Կ�. ����ü �̷� �Ǹ��� ������ ���忡 ��������� #r��#k�� ������ �����ϱ��...?\r\n\r\n#e#b(�̷��� �� �ʸ�, Ȳȥ�� �丮������ ������)");
qm.dispose();
}
}
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
qm.sendOk("�� �Գ�, ���� �� �Ծ�. ��𼭺��� �̾߱��ϸ� ������... ������ ������ �״� �ٽ� �� �� ���� �ɾ��ְ�.");
qm.dispose();
}
}
}