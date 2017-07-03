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
            qm.sendNext("�ڳװ� �ٷ� ���̰� ��õ�� �� ����̷α�. �ü��� �ǰ� �;��Ѵٰ� ����׸�... �´°�? ���� �ٷ� �ü� ������ �ﷹ�����. �ü��μ� �����ϱ� ���ϴ� �ڵ��� �����ְ� ����."); 
        } else if (status == 1) {
	    qm.sendNextPrev("�ü��� ���ؼ��� ��� ���� �˰� �ִ°�? �ü��� ���� ��ø�� ������ �������� ��Ÿ� ���⸦ �ֵѷ� ���� �����߸��� ��������. �� ���� �����̿��� �ο�� �η��� ���� �ڵ�. �ŷ������� �ʴ°�?");
        } else if (status == 2) {
	    qm.sendAcceptDecline("�ڳ״� ������ ����� ���̴±�. �ڳ� ���� ����� �ü��� �ǰڴٸ� ȯ������. �ü��� �ǰڴ°�? �����Ѵٸ� �������� Ư���� ����� ���� �ڳ׸� #b��׽ý�, �ü��� ������#k���� �ʴ��ϰڳ� #r������ �����Ѵٰ� �ؼ� ���� ���� �� �ƴϾ�. �����ϸ� �ٸ� ������ ���� �ȳ�����.");
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
            qm.sendYesNo("���⼭ ������ ���� �ݰ���... �׷� �ڳ׸� �ü��� ����� ����. ������ �غ�� ���� �Ǿ�����? �������� �ڴ� �ü��� �ƴϾ�."); 
        } else if (status == 1) {
	    if (qm.getJobId() == 0) {
                qm.changeJobById(300);
	        qm.gainItem(1452051, 1);
 	        qm.gainItem(2060000, 2000);
		var lv = qm.getPlayer().getLevel();
	        qm.resetStats(4, 25, 4, 4, lv > 10 ? (lv - 10) * 5 + 33 : 33, lv > 10 ? (lv - 10) * 3 + 1 : 1);
		qm.forceCompleteQuest();
	        qm.gainItem(1142107, 1);
		qm.forceCompleteQuest(29900);
	    }
	    qm.sendNext("�ü��� �� �ڳ״� ���� �������ٳ�. �ü��μ� ����� �� �ִ� ���ο� ��ų�� �������� � ���ο� ���� ������ ���Գ�.");
        } else {
            qm.dispose();
        }
    }
}
