var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 0 && status == 4) {
	    qm.dispose();
	    return;
	}
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("����... �̷� ���� ���� �����̰� ��¾ ���ΰ�?");
	} else if (status == 1) {
	    qm.sendNextPrevS("�ְ��� ������ ���� �ͽ��ϴ�!",3);
	} else if (status == 2) {
	    qm.sendNextPrev("�ְ��� ����? �׷� �� ���� ��� �������� �� �ٵ�...");
	} else if (status == 3) {
	    qm.sendNextPrevS("����� ������ ���� �ְ��� �������̶�� �˰� �ֽ��ϴ�! ����� ���⸦ �ް� �ͽ��ϴ�!",3);    
	} else if (status == 4) {
	    qm.askAcceptDecline("�� �����̴� ���� �ľ ���� ���� ���� ���� �� ����ٳ�. ������ ������ ���� �� �߿� ������ ������ �ֱ� ����... ������ �Ѱ��� ���� ����. �� �༮�� ������ ��ī�ο��� ���θ����� ��ġ�� �� �༮�̰ŵ�. �׷��� �� ���� ������?");
	} else if (status == 5) {
	    qm.forceStartQuest();
	    qm.sendNext("����... �׷��Ա��� ���Ѵٸ�� ��¿ �� ����. �� �����̰� ������ ������ �ϳ� �ϰڳ�. ���� �ִ� #b������#k�� �����ϴ� #r���Ͱ�#k �༮���� �����߸��� #b�ڰ��� ��ǥ#k�� #b30��#k ��������. �׷� �� �Ŵ��� ������ ���ֵ��� ����.");
	} else {
	    qm.dispose();
	}
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 0 && status == 2) {
	    qm.sendNext("�ְ��� ������ ��� ���� �հ�?");
	    qm.dispose();
	    return;
	}
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
	    qm.sendNext("ȣ��~ �ڰ��� ��ǥ�� ��� ���ؿ� �ǰ�? �ڳ�... �������� ���� ����̾�����. ������ �׺��� ������ ��� ��, �ڽ��� ����� �𸣰� ������ ���⸦ �η������� �ʰ� ���� �������ڴٴ� �б� ��ġ�� �µ��ΰ�... ����. �Ŵ��� ������ �ڳ׿��� �ְڳ�.");
	} else if (status == 1) {
	    qm.sendNextPrev("#b(���� ��, ������� õ�� ������ �Ŵ��� ������ ���о���.)#k");
	} else if (status == 2) {
	    qm.sendYesNo("�̰� �ٷ� �ڳ׸� ���� ���� ����. ���϶��... �� ��Ź�ϳ�.");
	} else if (status == 3) {
	    qm.forceCompleteQuest();
	    qm.removeAll(4032311);
	    qm.dispose();
	}
    }
}