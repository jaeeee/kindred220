var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            qm.sendNext("��, �� �� �ž�? �� �� �ž�? ��... �ƽ���.");
            qm.dispose();
        }
        if (status == 0) {
            qm.sendNext("�ڳװ� �ٷ� ���̰� ��õ�� �� ����̷α�. �����簡 �ǰ� �;��Ѵٰ� ����׸�... �´°�? ���� �ٷ� ������ ������ �ָ���� �Ͼ���. ������μ� �����ϱ� ���ϴ� �ڵ��� �����ְ� ����."); 
        } else if (status == 1) {
	    qm.sendNextPrev("�����翡 ���ؼ��� ��� ���� �˰� �ִ°�? ������� ���� ���� ü���� �������� �ٰŸ� ���⸦ �ֵѷ� ���� �����߸��� ��������. �� ���� �����̿��� �ο�� �η��� ���� �ڵ�. �ŷ������� �ʴ°�?");
        } else if (status == 2) {
	    qm.sendAcceptDecline("�ڳ״� ������ ����� ���̴±�. �ڳ� ���� ����� �����簡 �ǰڴٸ� ȯ������. �����簡 �ǰڴ°�? �����Ѵٸ� �������� Ư���� ����� ���� �ڳ׸� #b�丮��, �������� ����#k���� �ʴ��ϰڳ� #r������ �����Ѵٰ� �ؼ� ���� ���� �� �ƴϾ�. �����ϸ� �ٸ� ������ ���� �ȳ�����.");
        } else if (status == 3) {
	    qm.forceStartQuest();
	    qm.dispose();
        } else {
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
        if (status == -1) {
            qm.sendNext("��, �� �� �ž�? �� �� �ž�? ��... �ƽ���.");
            qm.dispose();
        }
        if (status == 0) {
            qm.sendYesNo("���⼭ ������ ���� �ݰ���... �׷� �ڳ׸� ������� ����� ����. ������ �غ�� ���� �Ǿ�����? �������� �ڴ� �����簡 �ƴϾ�."); 
        } else if (status == 1) {
	    if (qm.getJobId() == 0) {
                qm.changeJobById(200);
                qm.gainItem(1372043, 1);
		var lv = qm.getPlayer().getLevel();
	        qm.resetStats(4, 4, 20, 4, lv > 8 ? (lv - 8) * 5 + 28 : 28, lv > 8 ? (lv - 8) * 3 + 1 : 1);
		qm.forceCompleteQuest();
	        qm.gainItem(1142107, 1);
		qm.forceCompleteQuest(29900);
	    }
	    qm.sendNext("�����簡 �� �ڳ״� ���� �������ٳ�. ������μ� ����� �� �ִ� ���ο� ��ų�� �������� � ���ο� ���� ������ ���Գ�.");
        } else {
            qm.dispose();
        }
    }
}