importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendNextS("���� �ٱ����� ��������. �ϴ� #r������ ������#k 20���� ������ ����غ��� �� �� ����.",2);
qm.dispose();
}
}
}