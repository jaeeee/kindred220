var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("�� ���, ����?");
	} else if (status == 1) {
            qm.sendNextPrevS("#b��... ������ �� �ֹ��̾��?#k",3);
        } else if (status == 2) {
            qm.sendNextPrev("�׷�... �׷��� �� ��° ���� ����� ���� ���� ���̱���. �����㿡 õ���ϰ� ������ ��û���� ����. �׷��� �׷���?");
        } else if (status == 3) {
            qm.sendNextPrevS("#b�ƴ�. �װ� �ƴ϶� ���㿡 �̻��� ���� �㼭��.#k",3);
        } else if (status == 4) {
	    qm.sendNextPrev("�̻��� ��? ���� ���ε� �׷���?");
        } else if (status == 5) {
            qm.sendNextPrevS("#b�׷��ϱ�...#k",3);
        } else if (status == 6) {
            qm.sendNextPrevS("#b(�Ȱ� �ӿ��� �巡���� ������ ���� ��ٰ� �����ߴ�.)#k",3);
        } else if (status == 7) {
            qm.askAcceptDecline("ȣȣȣȣ, �巡���̶��? �װ� �����ѵ�? ��� ������ �ʾƼ� �����̱���. ����ִ� ���̴� ��Ÿ���Ե� �����ַ�. �и� ������ �ž�.");
        } else if (status == 8) {
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
            qm.sendNext("��, �Ͼ��. ����? ��ħ���� �� ���� �� �׷��� ����? �㿡 �����? ��? �̻��� ���� ��ٰ�? ���� ���ε�? ����? �巡���� ������ ���� ��� ���̾�?");
        } else if (status == 1) {
	    qm.gainExp(20);
            qm.forceCompleteQuest();
            qm.sendNextPrev("Ǫ��������~ �巡���̶��? �װ� �����ѵ�? ������ݾ�! �ٵ� Ȥ�� �� �޿� ���� �� ���� �ȳ��Գ�? ��������~\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
        } else if (status == 2) {
            qm.sendNextPrev("��ħ���� ���� �����. ������. ��, �̻��� �Ҹ��� �׸��ϰ� �ҵ����� ��ħ���̳� �� ��.");
        } else if (status == 3) {
            qm.sendNextPrevS("#b��? �װ� ��Ÿ�� �� ����������?#k",3);
        } else if (status == 4) {
            qm.askAcceptDecline("�� �༮! ���̶�� �θ���ϱ�! �ҵ��� ���� �󸶳� �Ⱦ��ϴ����� �ʵ� �� ���ݾ�. �ٰ����� �и��� ������ ���ž�. �ҵ��� �� �����ϴϱ� �װ� ������ ��.");
        } else if (status == 5) {
	    qm.gainItem(4032447,1);
            qm.forceStartQuest(22001);
            qm.dispose();
        }
    }
}