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
	    qm.sendNext("���~ ƼƼƼ ������. ƼƼƼ ȭ����. ƼƼƼ ���... �����~");
        } else if (status == 1) {
            qm.sendNextPrevS("��, ���� ���̳�.",3);
        } else if (status == 2) {
            qm.sendNextPrev("ƼƼƼ ���� �������. #b���ó�� ���� ����#k�̴�. �׷��� #r����#k�� ���� ���İ���. ƼƼƼ ���� ����. ƼƼƼ ������...");
    	} else if (status == 3) {
            qm.sendNextPrevS("���� ������ ������ ���İ��ٰ�?",3);
    	} else if (status == 4) {
            qm.askAcceptDecline("�׷���. ƼƼƼ ���� ��ã�� �ʹ�. ƼƼƼ ���� ã���ָ� ����Ѵ�. ���� ����ָ� ����Ѵ�.");
    	} else if (status == 5) {
	    qm.sendNext("������ �������� ����. ������... �� �Դ� ���� ������, �� �� �Դ� ���� �޼�... #b����#k�̴�! �������� ���� ���� ���� �� ���� �Ŵ�.");
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}