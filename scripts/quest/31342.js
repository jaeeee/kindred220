var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
            qm.sendOk("��.���� �°��⿡ �ö�Ÿ�� �Ϻ��������� ����������!");
            qm.forceCompleteQuest();
        }
    }
}

