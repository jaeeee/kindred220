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
            qm.sendNextPrev("��ħ���� ���� �����. ������. ��, �̻��� �Ҹ��� �׸��ϰ� �ҵ����� ��ħ���̳� �� ��.");
        } else if (status == 1) {
            qm.sendNextPrevS("#b��? �װ� ��Ÿ�� �� ����������?#k",3);
        } else if (status == 2) {
            qm.askAcceptDecline("�� �༮! ���̶�� �θ���ϱ�! �ҵ��� ���� �󸶳� �Ⱦ��ϴ����� �ʵ� �� ���ݾ�. �ٰ����� �и��� ������ ���ž�. �ҵ��� �� �����ϴϱ� �װ� ������ ��.");
        } else if (status == 3) {
	    qm.gainItem(4032447,1);
            qm.forceStartQuest();
	    qm.dispose();
	}
    }
}