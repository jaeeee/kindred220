/*

	õ��õ�¶��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1033110

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : ������ �� : ���췼 (101050000)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) {
	   if (cm.getQuestStatus(3507) == 1 && cm.getQuestStatus(3544) == 0 && cm.getPlayer().getJob() == 3112) {
             cm.sendNext("�ֱ�, Ȥ�� ���� ����̶� �����Ű���?");
	} else {
		cm.sendOk("�ʴ� ������? �츮���̾�? ���̾�? �� �츮���� �ƴ� �ڿ��� ���� ����.")
		cm.dispose();
		}
	} else if (status == 1) {
           cm.sendNextPrevS("�ƴϿ���. �׳� �����׸����� ���� �;��� ���̶� �ұ��? ���� �������� �ƴ� �� ���׿�. �߾��̶�..�߾�....." ,2);
	} else if (status == 2) {
           cm.sendNextPrevS("�߾��̶��... ��ü ������ �߾��� ���ϴ� ����? ���� �����縦 ������� �� �� ��? �ƴϸ� ���� �����翡�� �����ϴ� �� ��? �װ͵� �ƴϸ� �ֱ� ���꿡�� ����� ���� ���ϴ� ���ΰ�?" ,2);
	} else if (status == 3) {
           cm.sendNextPrevS("������ �߾��̶�� ���� ������ ���� ���ϴ� ���̰���. ������ ������ �߾��� ������? �׷�... ���� �����縦 ������ ���� ������� ���� ���´� �ñⰡ ���� ������ �������̾��� �� ����. ��Ӵ�... �׸��� ���̾�." ,2);
	} else if (status == 4) {
           cm.sendNextPrevS("�׷����� �����׸��� ������ �ߴ� ���� �� ��ſ���. ������ �ٽ� �׷� ������ ���ƿñ�?." ,2);
	} else if (status == 5) {
           cm.sendNextPrevS("(�ູ�ϰ� ��ſ��� �߾��� ȸ���ϴ� ���� ������ ����������.)\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1249000 exp\r\n#fUI/UIWindow.img/QuestIcon/11/0# ���� 40" ,2);
	} else if (status == 6) {
	    cm.playSound(false, "profession/levelup");
	    cm.forceCompleteQuest(3544);
	    cm.forceCompleteQuest(3507);
	    cm.gainExp(1249000);
	    cm.dispose();
        }
    }
}