importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
qm.sendOk("��ø�, �� �� �� �ð��� ��. ����...");
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
qm.sendOk("��ø�, �� �� �� �ð��� ��. ����...");
} else if (status == 1) {
qm.sendNext("��? �� ������ ���� ���� �Ͼ �ųİ�?\r\n\r\n�װ� ���� ����? ���� ��������... ��! �ƴϾƴ�, #e�����Ͻ� ���� �������#n�� ������ ���� ���� ������� ������ �� ����. �� �ָ����� �������� �ִ� �Ŵ��� ������ ������? �ϰ��ǰ� ���� ��𿡼��� �� �� �ְ� �� �ž�. �丮���� ���丮�� ���Ϸ��忡�� ���� ���� �����̴ϱ� ���̾�.");
} else if (status == 2) {
qm.sendNext("�̹� ���� ��õ ���� �丮�� ���ֹε��� ���⿡�� ���ϰ� �־�. ���� ���� Ž�谡������... �߳뵿�� ���� ������ �� �̻� �԰� �� ���� ����. ������ �ʴ� �ڴ� ���� ���� �����ϱ� ���̾�.");
} else if (status == 3) {

}
}
}