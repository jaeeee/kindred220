var status;
var select;
function start() {
    status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendSimple("����.. �ϰ� ������ �ִ°�?\r\n\r\n#b#L0#���ڿ��� �޴ް� ��ȭ���� 50�� ��ȯ#l\r\n#L1#���ڿ��� �޴ް� ��ȭ���� 100�� ��ȯ#l");
	} else if (status == 1) {
		select = selection;
		if (selection == 0) {
			cm.sendYesNo("��ȭ���� 50���� ���ڿ��� �޴� 1���� #b��� ���ڿ��� �޴�#k �� ��ȯ�� �ְڳ�. ���� ��ȯ�Ͻðڴ°�?");
		} else if (selection == 1) {
			cm.sendYesNo("��ȭ���� 100���� ���ڿ��� �޴� 1���� #b�ξ� ���ڿ��� �޴�#k �� ��ȯ�� �ְڳ�. ���� ��ȯ�Ͻðڴ°�?");
		}
	} else if (status == 2) {
		if (select == 0) {
			if (cm.haveItem(4000630,50) && cm.haveItem(2430158,1) && cm.canHold(4310009)) {
				cm.gainItem(4000630,-50);
				cm.gainItem(2430158,-1);
				cm.gainItem(4310009,1);
				cm.sendOk("��ȯ�� ��ȴٳ�. ���� ��Ʈ���� �ݷ��� ��Ʈ ���� ������ �� �����ɼ�.");
				cm.dispose();
			} else {
				cm.sendOk("�ڳ�... �и� �ʿ��� �������� ����� ���� �ִ°ǰ�? �Ǵ� �κ��丮�� �����Ѱ� �ƴ��� Ȯ���� �ֽð�.");
				cm.dispose();
			}
		} else if (select == 1) {
			if (cm.haveItem(4000630,100) && cm.haveItem(2430158,1) && cm.canHold(4310009)) {
				cm.gainItem(4000630,-100);
				cm.gainItem(2430158,-1);
				cm.gainItem(4310010,1);
				cm.sendOk("��ȯ�� ��ȴٳ�. ���� ��Ʈ���� �ݷ��� ��Ʈ ���⸦ ������ �� �����ɼ�.");
				cm.dispose();
			} else {
				cm.sendOk("�ڳ�... �и� �ʿ��� �������� ����� ���� �ִ°ǰ�? �Ǵ� �κ��丮�� �����Ѱ� �ƴ��� Ȯ���� �ֽð�.");
				cm.dispose();
			}
		}
	}


else { 
		cm.dispose();
	}
    }
}