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
	    cm.sendNext("������ ��Ÿ� �ٽ� ���� �ɾ��ּ���.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendSimple("������ ���� �����̶� �����Ű���?\r\n#b#L0#������� ����Ʈ�� �㰡�� �ּ���");
	} else if (status == 1) {
             if (selection == 0) {
	    	if (cm.getPlayer().getLevel() >= 50 && cm.getQuestStatus(100000) == 0) {
		cm.sendNext("������� ����Ʈ�� �㰡�� �޶� �װű���... #b�Ƶ���#k�ΰ���... �ƹ�ư �����ϴ�! ����̶�� �� ������ Ž���ϴ� �� ���ڶ��� ���� �� �����ϴ�. �׷� �ƹ��ɷ� �����Ͻñ� �ٶ��ϴ�.");
	    	} else if (cm.getQuestStatus(100000) == 1) {
		cm.sendNext("����� �̹� ������� ����Ʈ�� �㰡���� �����̳���? �ƹ��ɷ� �����Ͻñ� �ٶ��ϴ�.");
	} else {
		cm.sendNext("����� ���� ��������� Ž���ϴ� �� ���ڶ�� �� �����ϴ�. �� �� ������ ���� �� �ٽ� ã�ƿ��ñ� �ٶ��ϴ�");
	    	cm.dispose();
	    }
	}
	} else if (status == 2) {
	    cm.forceStartQuest(100000);
	    cm.dispose();
	}
     }
  }