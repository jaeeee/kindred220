var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var lucky = "#e#b����#k ������������ #e#b1000000�޼�#n#k�� #e#b����#n#k�� ���شٱ�.\r\n �� �� �غ��°� �?\r\n\r\n";
	lucky += "#L1##e#b����#n#k�� �̾ƺ���.\r\n";
	lucky += "#L2##e#b����#n#k�� #e#b�޼�#n#k�� #e#b��ȯ#n#k �޴´�.\r\n";
	cm.sendSimple(lucky);
	}
    if (status == 1) {
	if (selection == 1) {
	if (cm.getPlayer().getMeso() >= 1000000) {
	 var rand = 1 + Math.floor(Math.random() * 15);
	    if (rand > 0 && rand < 6) {
		cm.gainItem(4031069, 1); //��� ���� ����
		cm.sendOk("�״� ������ ���� ������ �� �ѵ�?");
		cm.gainMeso(-1000000);
		cm.dispose(); 
	    } else if (rand > 5 && rand < 10) {
		cm.gainItem(4031068, 1); //��� �� ���� 
		cm.sendOk("����� �ϻ��� �� �� ���� ����..");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 9 && rand < 13) {
		cm.gainItem(4031067, 1); //��� �ұ� ����
		cm.sendOk("�Ҽ��� ����� ã�ƿ�����...");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 12 && rand < 15) {
		cm.gainItem(4031066, 1); //��� �߱� ����
		cm.sendOk("��.. ���� ���� �ҽ��� �����ž�...");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 14) {
		cm.gainItem(4031065, 1); //��� ��� ����
		cm.sendOk("���� ���� ������ �� ���� ��ڳ� �����̶���?");
		cm.gainMeso(-1000000);
		cm.dispose(); 
	    }
	} else {
	  cm.sendOk("����... #e#b1000000�޼�#k �̻�#n ������ �ִ� ���� #e#bȮ��#n#k�غ���...");
	  cm.dispose();
	}
    } if (selection == 2) {
		var paper = "\r\n"
		paper += "#L1##e#b[��� ���� ����]#k ��ȯ#n�ϱ� - #e#b1000000#k�޼�\r\n";
		paper += "#L2##e#b[��� ��   ����]#k ��ȯ#n�ϱ� - #e#b1500000#k�޼�\r\n";
		paper += "#L3##e#b[��� �ұ� ����]#k ��ȯ#n�ϱ� - #e#b2500000#k�޼�\r\n";
		paper += "#L4##e#b[��� �߱� ����]#k ��ȯ#n�ϱ� - #e#b5000000#k�޼�\r\n";
		paper += "#L5##e#b[��� ��� ����]#k ��ȯ#n�ϱ� - #e#b10000000#k�޼�\r\n";
		cm.sendSimple(paper);
   }
} if (status == 2) {
		if (selection == 1){
			if (cm.haveItem(4031069) == true) {
				cm.gainItem(4031069, -1);
				cm.gainMeso(1000000);
				cm.sendOk("#e#b1000000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[��� ���� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.haveItem(4031068) == true) {
				cm.gainItem(4031068, -1);
				cm.gainMeso(1500000);
				cm.sendOk("#e#b1500000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[��� �� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.haveItem(4031067) == true) {
				cm.gainItem(4031067, -1);
				cm.gainMeso(2500000);
				cm.sendOk("#e#b2500000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[��� �ұ� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.haveItem(4031066) == true) {
				cm.gainItem(4031066, -1);
				cm.gainMeso(5000000);
				cm.sendOk("#e#b5000000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[��� �߱� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.haveItem(4031065) == true) {
				cm.gainItem(4031065, -1);
				cm.gainMeso(10000000);
				cm.sendOk("#e#b10000000#k�޼�#n�� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
				cm.dispose();
			} 
			else {
				cm.sendOk("#e#b[��� ��� ����]#k#n�� �ִ��� #e#bȮ��#n#k�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}  
		}
	}
}