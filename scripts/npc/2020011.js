/*

���� ���� ����Ʈ ���� ����ȭ
������ : ���� (qor6101@naver.com)

*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
	    cm.sendNext("������ ��ٸ� �ٽ� ���� �ɾ��ְ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendSimple("������ ���� �����̶� �ִ°�?\r\n#b#L0#������� ����Ʈ�� �㰡�� �ּ���");
	} else if (status == 1) {
             if (selection == 0) {
	    	if (cm.getPlayer().getLevel() >= 50 && cm.getQuestStatus(100000) == 0) {
		cm.sendNext("������� ����Ʈ�� �㰡�� �޶� �װű�... #b�Ƶ���#k�ΰ�... �ƹ�ư ����! �ڳ׶�� �� ������ Ž���ϴ� �� ���ڶ��� ������. �׷� �ƹ��ɷ� �����ϱ� �ٶ��.");
	    	} else if (cm.getQuestStatus(100000) == 1) {
		cm.sendNext("�ڳ״� �̹� ������� ����Ʈ�� �㰡���� �ʾҴ°�? �ƹ��ɷ� �����ϱ� �ٶ��.");
	} else {
		cm.sendNext("�ڳ״� ���� ��������� Ž���ϴ� �� ���ڶ�� �� ����. �� �� ������ ���� �� �ٽ� ã�� ���ְԳ�.");
	    	cm.dispose();
	    }
	}
	} else if (status == 2) {
	    cm.forceStartQuest(100000);
	    cm.dispose();
	}
    }
}