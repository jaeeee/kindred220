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
	if (selection == 0) {
		var skin = "���ϴ� #e#b������ ��Ų#n#k�� �����ϼ���.\r\n#e#b3000 �Ŀ�����Ʈ#n#k�� #e#r����#n#k�˴ϴ�.\r\n"
		skin += "#L1##e#b#i2431965# �⺻ ������ ��Ų\r\n";
		skin += "#L2##e#b#i2431966# �����ж����� ������ ��Ų\r\n";
		skin += "#L3##e#b#i2431967# ũ��Ƽ�ƽ� ������ ��Ų\r\n";
		skin += "#L4##e#b#i2432153# ����Ƽ�� ������ ��Ų\r\n";
		skin += "#L5##e#b#i2432354# �޸� ũ�������� ������ ��Ų\r\n";
		skin += "#L6##e#b#i2432355# �� �ɼ��� ������ ��Ų\r\n";
		skin += "#L7##e#b#i2432465# �⸮���� ������ ��Ų\r\n";
		skin += "#L8##e#b#i2432479# ���ν��� ������ ��Ų\r\n";
		skin += "#L9##e#b#i2432526# Ű���� ������ ������ ��Ų\r\n";
		skin += "#L10##e#b#i2432532# ������ ���ٶ� ������ ��Ų\r\n";
		skin += "#L11##e#b#i2432592# �ַκδ� ������ ��Ų\r\n";
		skin += "#L12##e#b#i2432640# ���̳ʼ��� ������ ��Ų\r\n";
		skin += "#L13##e#b#i2432710# ��Ȳ���� ������ ��Ų\r\n";
		cm.sendSimple(skin);
   } 	if (status == 1) {
		if (selection == 1){
			if (cm.getRC() >= 3000 && !cm.haveItem(2431965)) {
				cm.gainItem(2431965, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431965# �⺻ ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2431966)) {
				cm.gainItem(2431966, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431966# �����ж����� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2431967)) {
				cm.gainItem(2431967, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431967# ũ��Ƽ�ƽ� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432153)) {
				cm.gainItem(2432153, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432153# ����Ƽ�� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432354)) {
				cm.gainItem(2432354, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# �޸� ũ�������� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 6) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432355)) {
				cm.gainItem(2432355, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432355# �� �ɼ��� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 7) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432465)) {
				cm.gainItem(2432465, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i24324654# �⸮���� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 8) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432479)) {
				cm.gainItem(2432479, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# ���ν��� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432526)) {
				cm.gainItem(2432526, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432526# Ű���� ������ ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 10) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432532)) {
				cm.gainItem(2432532, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432532# ������ ���ٶ� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 11) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432592)) {
				cm.gainItem(2432592, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432592# �ַκδ� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 12) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432640)) {
				cm.gainItem(2432640, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432640# ���̳ʼ��� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		} else if (selection == 13) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432710)) {
				cm.gainItem(2432710, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# ��Ȳ���� ������ ��Ų#n#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b�Ŀ�����Ʈ#n#k�� #e#r����#n#k�ϰų� �ش� #e#b������ ��Ų#n#k�� �̹� ������ �ִ��� #e#bȮ��#n#k���ּ���.");
				cm.dispose();
			}
		}
	}
}