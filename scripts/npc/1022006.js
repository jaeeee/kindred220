/*
	 �� ��ũ��Ʈ�� ��ũ��Ʈ ����Ŀ JS�絹��(gwangyun1)�� �����Ͽ����ϴ�.
	 �� ��ũ��Ʈ�� ���ѹ��� �Ǿ����� ������� �Ұ����մϴ�.
         �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
         Copyright (C) 2009 Script Maker JS�絹�� <gwangyun1@naver.com>
*/

var status = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 2 && mode == 0) {
			cm.sendOk("#r������ �ϴ� ���� �Է��ϼ���.#k");
			cm.dispose();
			return;
	} else if (status == 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			cm.sendSimple("�ȳ��Ͻð�? ���� ������� #b������#k�̶�� �ϳ�.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d���� �ɱ�#k#l");
                } else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED) && cm.haveItem(4000195, 54)) {
			cm.sendSimple("�ȳ��Ͻð�? ���� ������� #b������#k�̶�� �ϳ�.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d���� �ɱ�(�Ϸᰡ��)#k#l");
		} else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED)) {
			cm.sendSimple("�ȳ��Ͻð�? ���� ������� #b������#k�̶�� �ϳ�.\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d���� �ɱ�(������)#k#l");
		} else {	
			cm.sendOk("�ȳ��Ͻð�? ���� ������� #b������#k�̶�� �ϳ�.");
			cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			status = 2;
			cm.sendAcceptDecline("���� ��� �丮�� ������ ���� �� Ȳ���� ���� �ִٳ�. ����\r\n�� �� ������ ���� ������ ������ �� ��ó���� ��â ������\r\n�߱��ϰ� �־ �� �ӵ��� �� �������� �ִٳ�. �� �ϳ���\r\n���弭�� �丮�� ������ ȯ���� ����ó�� �ǵ����� ������\r\n�ڳװ� �� ������ �� �ְڳ�?");
		} else if (cm.getLevel() >= 20 && cm.getQuestStatus(1568955).equals(MapleQuestStatus.Status.STARTED)) {
			if(cm.haveItem(4000195, 54)) {
			cm.completeQuest(1568955);
			cm.gainItem(4000195, -54);
			cm.gainItem(2000000, 30)
			cm.gainExp(1500);
			cm.sendOk("������ �� ��� �Դ°�?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2000000# ���� ���� 30��\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   1500 exp");
			cm.dispose();
		} else {
			cm.sendOk("���� #b���� 54��#k�� ������ ���� �� �ϳ׿�...");
			cm.dispose();
			}
		}
		} else if (status == 2) {
			cm.sendAcceptDecline("���� ��� �丮�� ������ ���� �� Ȳ���� ���� �ִٳ�. ����\r\n�� �� ������ ���� ������ ������ �� ��ó���� ��â ������\r\n�߱��ϰ� �־ �� �ӵ��� �� �������� �ִٳ�. �� �ϳ���\r\n���弭�� �丮�� ������ ȯ���� ����ó�� �ǵ����� ������\r\n�ڳװ� �� ������ �� �ְڳ�?");
		} else if (status == 3) {
			cm.sendNext("�Ⲩ�� ���� �����ְڴٴ� ������ �����̶��. �丮�� �ֺ�\r\n�� ���� Ȳ���� ���鼭 ���ο� ���͵��� ���ܳ��� �ִٳ�.\r\n�ֱٿ� ����� �ٷδ� ���� �߱� ���� �ֺ��� �������� ����\r\n������ #r������#k�� ���ܳ��ٰ� �ϴ���.");
		} else if (status == 4) {
			cm.sendNextPrev("���� �� �������� ������ �� ��� �������� �Ӹ� �κп�\r\n�ִ� ���������� ���� ������ ���� ū ������ �����ϰ� �ȴ�\r\n�� ���� �˾Ƴ´ٳ�. ������ ������ ������. �ڳװ� ���� ��\r\n���� ������ ���� �������� ��ġ�ϰ� #b54���� ����#k�� ���\r\n�� �ָ� ���ڳ�.");
		} else if (status == 5) {
			cm.startQuest(1568955);	
			cm.sendPrev("�������� ���� �߱������� ���� ����Ѵٳ�. ���� �߱���\r\n�� ���⼭ �������� �� ���ٰ� #r������III#k�� ���� ���ʿ� ��Ż\r\n�� �ϳ� �ִٳ�. �� ������ ���� �ٷ� ���� �߱����� ��\r\n���� �ȴٳ�.");
			cm.dispose();
			}
		}
	}