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
            qm.askAcceptDecline("������ �� �ϰ� ��Ű���? ���, �׷��� ���� ������ ���󺸰� �������̳׿�. ���� ���� ���ֵ��� ������ �������� ���丮�� ���Ϸ���� ���������... ����, �̷� �̾߱� �� ���� �ƴ���. �ٻڽŵ� �˼������� ��� ���� ���ƿ� �ּž� �� �� ���ƿ�.");
        } else if (status == 1) {
            qm.forceStartQuest(21200);
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
            qm.sendNextPrevNPC("����������...",4,1201001);
        } else if (status == 1) {
            qm.sendNextPrevS("#b(�Ŵ��� ������ ���� �︮�� �ִ�. �׷��� ���� �� �ҳ��� ������?)#k",3);
        } else if (status == 2) {
            qm.sendNextPrevS("#b(ó�� ���� ����ε�...? ���� �ΰ� ���� �ʴ�.)#k",3);
        } else if (status == 3) {
            qm.sendNextPrev("��! �ƶ�! ������ �� ��Ҹ��� �� �鸮�� �ž�? �� �鸮�� �ųİ�! �ƾ�, �����!");
        } else if (status == 4) {
            qm.sendNextPrevS("#b(��?! �̰� ���� ��Ҹ���? �� �糪�� �ҳ�ó�� �鸮�µ�...)#k",3);
        } else if (status == 5) {
            qm.sendNextPrev("����... �����̶�� �ϳ� �ִ� �� ���� �ӿ� ������ ���� ���̳� ���⸦ ������ �δ���, ������ ���� �� ����ְ�...");
        } else if (status == 6) {
            qm.sendNextPrevS("�� ������?",3);
        } else if (status == 7) {
            qm.sendNextPrev("��, �ƶ�? ���� �� ��Ҹ��� �鸮�� �ž�? ����, �𸣰ھ�? �� ������ #b���� ����#k�ݾ�?");
        } else if (status == 8) {
            qm.sendNextPrevS("#b(...����? �Ŵ��� ������ ���� �Ѵٰ�?)#k",3);
        } else if (status == 9) {
	    qm.sendNextPrev("����? �� �� �ϰڴٴ� ǥ����? �ƹ��� ����� �Ҿ�� �׷��� ���� ������ ���� �ž�? ��� �̷� �� �־�?");
        } else if (status == 10) {
            qm.sendNextPrevS("�̾��ϴ�. ����� ���� ���� �ʾ�.",3);
        } else if (status == 11) {
	    qm.askAcceptDecline("�̰� �̾��ϴٰ� �� ���̾�?! �� ȥ�� ���� �� ���� �󸶳� �ɽ��ߴ��� �˾�? ��� �ؼ��� ����� ��!");
        } else if (status == 12) {
            qm.sendNextPrevS("#b(�ڽ��� �Ŵ��� ����, ���϶�� ���� ��Ҹ��� ��û���� ȭ�� ���� �ִ�. �� �̻� ��ȭ�ϱ� ����� ���δ�. �ϴ� �������� ���� ����� ����.)#k",3);
            qm.forceCompleteQuest();
	    qm.forceStartQuest(21203,"0");
	    qm.warp(914090200);
            qm.dispose();
        }
    }
}