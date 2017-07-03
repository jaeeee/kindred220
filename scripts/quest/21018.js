var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 0) {
            qm.sendNext("���, Ȥ�� 5�����δ� �����Ͻ� �ǰ���? Ȥ�� ������ ���� �� ��ġ�ϰ� �����ôٸ� �ϼŵ� ����� �����. �������� ���� �̹����� ������ �������� �� �� ����ϴ��� �� ���� �帱...");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("��, �׷� �̶����� ���� ü���� �� �� �׽�Ʈ �غ����� �ҰԿ�. ����� �����ؿ�. �� ������ ���� ���ϰ� ������ ����, �������� ��ġ�ϸ� �ſ�! �� #r50����#k��ġ�� �ֽø� ��������...");
        } else if (status == 1) {
            qm.askAcceptDecline("�� ���� ���� �������� �� ��ġ�� ������ �� ���°迡 �������� �� ������ 5������ ��ġ�ϵ��� �ҰԿ�. �ڿ��� ȯ���������ϴ� �ܷ�! ��, �Ƹ���⵵ �ض�...");
        } else if (status == 2) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("������ 5������ ��� ��ġ�ϰ� ���̱���. ���ƿ�. �����Ӱ� ���� ü���� �׿��׿�. ���� �ӿ��� ���� �ִ� ���� �� �����ϱ� ���� ������ Ǯ���̾��. �׷� �������� ������ ����... ���?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1200 exp");
        } else if (status == 1) {
            qm.forceCompleteQuest();
            qm.gainExp(1200);
            qm.sendNext("��, �׷��� ����... ���ݱ��� �������� ���Ե� �𸣰� �־��׿�. �ټ� ���� ������ �� �� ���� �� Ȯ���ѵ�, ��������? ... ����, ����� ��������...");
        } else if (status == 2) {
            qm.sendNextPrev("�������� ���� ������� �ο�� ���� �������� ������ �����ؾ� �ϴµ�, ����� � �������� �˾ƾ� �׿� �´� ������ �� �� �ƴϰھ��? ��ſ��� ���� �ʴ� ����� ���� �ʴ� ��ų�� ������ ����, ���� ������� �ο�⿣ �������� �״ϱ��.");
        } else if (status == 3) {
            qm.sendNext("�׷���... �������� ��ü ��������?");
            qm.dispose();
        }
    }
}