var status = -1;

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
            if (qm.getQuestStatus(23012) == 0) {
                qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(23012) == 1) {
                qm.sendYesNo("�⼼ ���� ������ �� ���... ���� ���� ������ �� �³�? �������� �׸�ŭ ����� �� ���ϵ� ���Ͷ��. ���̵��� �����ϸ� ���ÿ� ���� �ϴ� �� �ϳ� ���� ���̵��� ��Ʈ���� ���ϴµ� �װ� �� �� �ְھ�? �����ϰ� ����� �� �����.");
	    }
        } else if (status == 1) {
	    qm.changeJob(3300);
	    qm.gainItem(1462093,1);
	    qm.gainItem(1142242,1);
	    qm.teachSkill(30001061,1,1);
            qm.forceCompleteQuest();
	    qm.showinfoMessage("<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
            qm.sendNext("������! ����! ���� ������������ �� �� ȯ����. ���ݺ��� �ʴ� ���ϵ� ���ʹ�. ���̵��� Ÿ�� ��ǳ���� ���� �����̸� ���� ��ġ���ڰ�.");
        } else if (status == 2) {
	    qm.sendNextPrev("���ϵ����Ͷ�� ���̵��� �ʼ���. ���ϵ����Ͱ� �Ǹ鼭 �ʿ��� ��ȹ�̶�� Ư���� ��ų�� ����������. �� ��ų�� ��Ծ ��鿩�� Ÿ�� �ٴҼ� �־�.");
        } else if (status == 3) {
	    qm.sendNextPrev("��ųâ�� �� ���� ��ų�� ã�� �� ��������. ���� ������ ���� ��Ծ��� HP�� 50%���Ϸ� ����߸� ��, ��ȹ ��ų�� ����ؼ� ��Ծ �����°���. �, ��������?");
        } else if (status == 4) {
	    qm.sendPrev("��Ծ���� ��𿡼� ã�� �� �ֳİ�? �� ���� ������ �ʸ� �׵��� �ִ� ������ �ε��� �� ����.");
            qm.dispose();
        }
    }
}