/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : �ù�

	���ǽð� �ִ� �� : �ʺ� ������ �Ա�

	���ǽ� ���� : ����Ʈ


*/
importPackage(Packages.server.quest);

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
            if (qm.getQuestStatus(2603) == 0) {
		qm.forceStartQuest();
                qm.dispose();
	    } else if (qm.getQuestStatus(2603) == 1) {
		if (qm.getPlayer().getQuest(MapleQuest.getInstance(2603)).getMobKills(100002) == 20) {
		    qm.sendNext("�Ͼ�... ����, �����ٰ�. �̾�������, �� ���� ����� ���� �� ����. �̴�� ������ �غ��� ���� �̵����� ����� ��� �� ������ �𸣰ھ�.");
		} else {
		    qm.sendOk("���� �� ���� ���ߴµ�? �׸���.. ���� ���� �ɸ��� �����̴� ^^ �� �ǽɽ����?");
                    qm.dispose();
                }
	    }
        } else if (status == 1) {
	    qm.sendPrev("....��� ���ϱ���� �ߴµ� ������ ��ǥ��? �� ���� ��մ� �༮�ΰ�? �̺�, ȫ��! ���ͺ�. �� �༮ �ϳ� ��̷Ӵٰ�?");
        } else if (status == 2) {
            qm.gainExp(50);
            qm.spawnNPCTemp(1057001, -932, 152);
	    qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}