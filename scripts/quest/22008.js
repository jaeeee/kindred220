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
            qm.askAcceptDecline("�� �̻����� �ʾ�? ��� �ߵ��� ���� ���� ���ݾ�. �������� �ް��� �̰ź��� �ξ� ���� ���Ҵµ� ���� �پ��� �־�. Ȥ�� ���찡 ������ �� �����ϱ�? �׷��ٸ� �� ���� ��� ���ٵ�. �� �׷�?");
        } else if (status == 1) {
	    qm.sendNext("�׷���? �׷� �츮�� ���츦 ��ġ����. �װ� ���� #b�޸���#k���� ���� #r������ ���� 10����#k�� ����� ��. �׷� ���� �ڸ� ġ���� �Ұ�. ��, �׷� �� �޸������� ���~");
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
            qm.sendNext("������ ����� ��ġ�ϰ� �� �ž�?");
        } else if (status == 1) {
            qm.sendNextPrevS("������ �ڸ� ġ�ڴٴ��� ��� �� �ž�?",3);
        } else if (status == 2) {
            qm.sendNextPrev("��, �װ�? �ڸ� �Ѿ� ���� �ߴµ� �߸� �����ٰ� �װ� ������ ���쿡�� ������ ������� �׳� ���� ��.");
        } else if (status == 3) {
            qm.sendNextPrevS("���찡 �������� �����ִ� �� �ƴϰ�?",3);
        } else if (status == 4) {
            qm.sendNextPrev("���� ���̾�?! ���� �� ���츦 �������ϴµ�?! �� ���� ������ �ϳ��� �� ������!");
        } else if (status == 5) {
            qm.sendNextPrevS("...��, ���⿡ ������ ���찡!",3);
        } else if (status == 6) {
            qm.sendNextPrev("����! ����!");
        } else if (status == 7) {
            qm.sendNextPrevS("......",3);
        } else if (status == 8) {
            qm.sendNextPrev("......");
        } else if (status == 9) {
            qm.sendNextPrev("...�� �� �༮. ���� ��� ��! �� ���� ������ ���ؼ� ��� �� �ȴٰ�!");
        } else if (status == 10) {
            qm.sendNextPrevS("(�̷��� ���̶�� �θ��� �ȴٴϱ�.)",3);
        } else if (status == 11) {
	    qm.gainExp(610);
	    qm.gainItem(1372043,1);
	    qm.gainItem(2022621,25);
	    qm.gainItem(2022622,25);
            qm.forceCompleteQuest();
            qm.sendNext("����. �ƹ�ư, ������ ���츦 �� ��ġ�ؼ� �����̾�. ���������� ��� �������� ���� �������� ���谡�� �� ������ �ٰ�. ��, �޾�.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1372043# �ʺ� �������� �ϵ� 1��\r\n#i2022621# ���ִ� ���� 25��\r\n#i2022622# ���ִ� �ֽ� 25��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 610 exp");
        } else if (status == 12) {
	    qm.sendNext("#b��������� ���ݹ����� �ϵ�#k��. ��, ���� ������ �ʿ��� ������ �ƴ� �� ������ ��� �ٴϸ� ������ �� �ž�. ������.");
        } else if (status == 13) {
	    qm.sendPrev("�׳����� ������� �þ �� ����? �̻���. �� �̷��� ���찡 ���� ����? ���� ������ �� �ʿ䰡 �ִ� �� ����.");
            qm.dispose();
        }
    }
}