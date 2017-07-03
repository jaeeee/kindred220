/*
	 �� ��ũ��Ʈ�� ��ũ��Ʈ ����Ŀ JS�絹��(gwangyun1)�� �����Ͽ����ϴ�.
	 �� ��ũ��Ʈ�� ���ѹ��� �Ǿ����� ������� �Ұ����մϴ�.
         �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
         Copyright (C) 2009 Script Maker JS�絹�� <gwangyun1@naver.com>
*/

var status = -1;
var itemArray = Array(4004000, 4004001, 4004002, 4004003, 4004004);
var itemQuan = Array(5,5,5,5,5);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
		if (mode == -1) {
			cm.dispose();
		} else {
		if (status == 3 && mode == 0) {
			cm.sendOk("������ ���� ���ٵ�... �ٽ� �ѹ� ������ ���°� �?");
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
			if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			cm.sendSimple("ó�� ���� ���ε�?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n#L0##d����� ��Ź#k#l");
                } else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED) && cm.haveItem(4000236, 48) && cm.haveItem(4000237, 28)) {
			cm.sendSimple("ó�� ���� ���ε�?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d����� ��Ź(�Ϸᰡ��)#k#l");
		} else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED)) {
			cm.sendSimple("ó�� ���� ���ε�?\r\n\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n#L0##d����� ��Ź(������)#k#l");
		} else {	
			cm.sendOk("�� ���ݺ��� ��ħ�븦 ����� �����ؾ߰ھ�. ưư�� ��ħ�븦 ������� ���� �Ϸ����� ���ؾ߰ڴ°�? ");
			cm.dispose();
			}
		} else if (status == 1) {
			if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.NOT_STARTED)) {
			status = 2;
			cm.sendNext("ó�� ���� ���ε�? �ݰ��� �� �������. ������! ��� ��\r\n��? �� ���� ���� ������ �ִ� ���ε� ��ȭ�� ���� ���� ��\r\n�ż� �̷��� ��鸮�� ���� ��������.");
		} else if (cm.getLevel() >= 75 && cm.getQuestStatus(2559009).equals(MapleQuestStatus.Status.STARTED)) {
			if(cm.haveItem(4000236, 48) && cm.haveItem(4000237, 28)) {
			cm.completeQuest(2559009);
			cm.gainItem(4000236, -48);
			cm.gainItem(4000237, -28);
			var randmm = Math.floor(Math.random() * itemArray.length);
			cm.gainItem(itemArray[randmm], itemQuan[randmm]);
			cm.gainExp(42000);
			cm.sendOk("�������̾�~ �¸��� ��ó�����̳�? ��Ʋ�� ���� ��ƿ���\r\n���� �������������? �׷��� ���� ��Ź�� ���� �� ��� ��\r\n�ٴ� ���� ����.\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#   42000 exp\r\n\r\n#fUI/UIWindow.img/QuestIcon/5/0#");
			cm.dispose();
		} else {
			cm.sendOk("���� ���� ��� ��Ʋ�� ��ö���� �ܴ��ϱ�� ��������. �ܴ��ϸ鼭�� ǥ���� �ε巯���� �˹�ħ�븦 ����⿡�� �׸�����. #b��Ʋ�� �� 48��#k�� #b��� ��Ʋ�� �� 28��#k�� �� ���Ѱž�?");
			cm.dispose();
			}
		}
		} else if (status == 2) {
			cm.sendNext("ó�� ���� ���ε�? �ݰ��� �� �������. ������! ��� ��\r\n��? �� ���� ���� ������ �ִ� ���ε� ��ȭ�� ���� ���� ��\r\n�ż� �̷��� ��鸮�� ���� ��������.");
		} else if (status == 3) {
			cm.sendAcceptDecline("�Ʊ� ���� �¾�� ���� ������� �ʹ� ���� ��鸮�� �ٶ�\r\n�� ��������� �����̾�. ưư�� ��ħ��� �ִٸ� ������\r\n�ٵ� ���̾�. �? ��ħ�� ����� ���� �������� �ʰھ�?");
		} else if (status == 4) {
			cm.startQuest(2559009);
			cm.sendOk("�װ� ��Ḧ ���ش� �ָ� ��ħ��� ���� ����� ����������\r\n���� �������� �� ưư�ϰ� ������� ���Ϲ����ص� ��Ʋ\r\n�� ���� �ְ���! ��Ʋ�� ���� ���� ưư�ϰŵ�. #b��Ʋ�� �� 48\r\n��#k�� #b��� ��Ʋ�� �� 28��#k�� ��ƿ� ��~");
			cm.dispose();
			}
		}
	}