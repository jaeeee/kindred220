/*
�Ķ�������
*/
importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNextS("\r\n\r\n#b(���鸮���� ���� ���� ������� ��� �����־����� ���縦 ��Ź�޾Ҵ�.)", 2);
        } else if (status == 1) {
            qm.sendNextS("\r\n\r\n#b(������ ������ ��������.)", 2);
            qm.forceStartQuest();
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
            qm.sendNextS("����� �༮�� ������? ���� ���ߴ�. ������ �����̶�� �ϱ⿣ ���� �̻��� ����� �մ� �ڿ���.\r\n#b(������� ��� ��Ȳ���� �����־���.)", 2);
            qm.forceCompleteQuest();
        }
    }
}