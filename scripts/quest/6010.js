/*
�Ķ�������
*/

var status = -1;


function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("������ ������ ���������ϴ�.");
        } else if (status == 1) {
            qm.sendNextPrev("�Ǹ����� ���ñ⸦...");
        } else if (status == 2) {
            qm.sendNextPrev("�� ���� ������� �����ϴ�. ������ ���� Ŭ���Ͻø� ���������� �����մϴ�.");
        } else if (status == 3) {
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}