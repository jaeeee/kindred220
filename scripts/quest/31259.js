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
            qm.sendNextS("���Ŀ� ������ ����� ����� �ٽ� �����ϴ°� �����Ͱ���.", 2);
        } else if (status == 1) {
            qm.sendNextS("\r\n\r\n#b(�����׸��Ƹ� ������ Īȣ�� ȸ���Ͽ���.���� ���丮��� ���󿡼� �������� ���� �� �ְ���?)", 2);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}

