function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
    }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	var cube = "�ȳ��ϼ���. #e#b���¶���#n#k���� #e#rť��#n#k�� #e#b�Ǹ�#n#k�ϴ� #e#b��#n#k�̶�� �մϴ�. ���Ͻô� #e#b������#n#k�� #e#b����#n#k�� �ּ���.\r\n";
	cube += "#L1##e#b#i5062009# ���� ť�� 50�� - 3500000�޼�\r\n";
	cube += "#L2##e#b#i5062010# �� ť�� 50�� - 5000000�޼�\r\n";
	cm.sendSimple(cube);
	}
    if (status == 1) {
		if (selection == 1){
			if (cm.getMeso() >= 3500000) {
				cm.gainItem(5062009, 50);
				cm.gainMeso(-3500000);
				cm.sendOk("#e#b#i5062009# ���� ť�� #r50#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b3500000�޼�#n#k�� ������ �� �ƴ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getMeso() >= 5000000) {
				cm.gainItem(5062010, 50);
				cm.gainMeso(-5000000);
				cm.sendOk("#e#b#i5062010# �� ť�� #r50#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b5000000�޼�#n#k�� ������ �� �ƴ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} 
	}
}