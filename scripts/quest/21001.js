var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            qm.sendNext("���ƾ�! �ƶ����� �����߾�!");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.askAcceptDecline("����... �������� ȥ�����... ��½. � �ﷹ���Բ� ������ �ּ���!");
        } else if (status == 1) {
            qm.forceStartQuest();
            qm.gainItem(4001271,1);
            qm.warp(914000300);
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            qm.sendNext("�ѽð� ���ؿ�! ���� ���̸� �������ּ���!");
            qm.dispose();
            return;
        }
        if (mode > 0)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendYesNo("�ƾ�, �����ϼ̱���? ���̴�? ���̴� �������̳���?");
        } else if (status == 1) {
            if (!qm.forceCompleteQuest(21001)) {
                qm.gainItem(4001271,-1);
                qm.forceCompleteQuest();
            }
            qm.sendNext("�����̿���... ���� �����̴�...");
        } else if (status == 2) {
            qm.sendNextPrevS("� ���༱�� Ÿ! �� �̻� �ð��� ����!",3);
        } else if (status == 3) {
            qm.sendNextPrev("��, �¾ƿ�. �̷� ���� �ƴ���. ���� �������� ����� ���� ��������� �־��! �ƹ����� ������ ��ġ�� �˾Ƴ� ����̿���! ���� ������� ������ ���ع����� �� �ſ���!");
        } else if (status == 4) {
            qm.sendNextPrevS("���� �����!",3);
        } else if (status == 5) {
            qm.sendNextPrev("�ƶ�! ��ŵ� ���ֿ� Ÿ����! �ο�� ���� ����� ������ ������... �̹� �ʾ����! �ο��� ����鿡�� �ñ�� �Բ� ���丮�� ���Ϸ���� ����!");
        } else if (status == 6) {
            qm.sendNextPrevS("�׷� �� ����!",3);
        } else if (status == 7) {
            qm.sendNextPrevS("�ﷹ��, ����� ���� ���丮�� ���Ϸ���� ����, ���� �����ʰ� ���߿� �� �շ��Ұ�. �� ������ ���� ������� �ο�ھ�!",3);
        } else if (status == 8) {
            qm.warp(914090010);
            qm.dispose();
        }
    }
}