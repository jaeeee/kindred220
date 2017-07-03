importPackage(Packages.packet.creators);
importPackage(Packages.launch.world);

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
		var dobak = "   #e�޸տ¶��� #b���ڽý���#n#k�� ���Ű��� #e#bȯ��#n#k�մϴ�.\r\n#e#b  �Ŀ�����Ʈ#n#k�� #e#bȫ������#n#k�� �̿��Ͽ� #e#b����#n#k�� ���� ��\r\n   �ֽ��ϴ�.\r\n\r\n";
 		dobak += "#e#b#L0#�Ŀ�����Ʈ#k �����ϱ�#l\r\n";
		dobak += "#e#b#L1#ȫ������(����Ƽ�� ����)#k �����ϱ�#l\r\n";
		dobak += "#e#b#L2#�޼�#k �����ϱ�#l\r\n\r\n\r\n";
		dobak += "   #e#r�� ���ǻ��� : ���ڽý����� �̿��Ͽ� �߻��ϴ� �ս�\r\n   �� ���ؼ��� å������ �ʽ��ϴ�.#k#n";
		cm.sendSimple(dobak);
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendGetText("#e#b" + cm.getPlayer().getName() + "#e#k���� #e#r" + cm.getRC() + " #e#b�Ŀ�����Ʈ#n#k�� #e����#n�ϰ� �ֽ��ϴ�.\r\n#e#b����#n#k�� �Ͻ� #e#b�Ŀ�����Ʈ#n#k�� #e#b�Է�#n#k���ּ���.");
			huwon = 0;
		} else if (selection == 1) {
			  cm.dispose();
			  cm.openNpc(9220071);
			//cm.sendGetText("#e#b����#n#k�� �Ͻ� #e#bȫ������ ����#n#k�� #e#b�Է�#n#k���ּ���.");
			//huwon = 1;
		} else if (selection == 2) {
			cm.sendGetText("#e#b����#n#k�� �Ͻ� #e#b�޼�#n#k�� #e#b�Է�#n#k���ּ���.");
			huwon = 2;
		}
	} else if (status == 2) {
		var random = 1 + Math.floor(Math.random() * 10);
		if (cm.getText() < 1) {
		cm.dispose();
		}
		else if (huwon == 0) {
			if (cm.getText() > cm.getRC()) {
				cm.sendOk("�����ϰ� �ִ� #e#b����Ʈ#n#k���� �� ���� #e#b�Է�#n#k�ϼ˳׿�?");
				cm.dispose();
			} else if (cm.getText() > 50000) {
				cm.sendOk("������ #e#b���ڽý���#n#k�� ���Ͽ� #e#b�Ŀ�����Ʈ#n#k #e#b50000����Ʈ#n#k�� #e#r�ʰ�#n#k�Ͽ� #e#r����#n#k�Ͻ� �� �����ϴ�.");
				cm.dispose();
			} else if (random < 4) {
				cm.getPlayer().gainRC(cm.getText());
				cm.sendOk("�����մϴ�. #e#b�Ŀ�����Ʈ ����#n#k���� #e#b" + cm.getText() + "����Ʈ#n#k�� #e#bȹ��#n#k�ϼ̽��ϴ�. \r\n#e#b" + cm.getPlayer().getName() + "#n#k���� ���� #e#b�Ŀ�����Ʈ#n#k��#e#b" + cm.getRC() + "����Ʈ#n#k�Դϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ �Ŀ�����Ʈ �������� " + cm.getText() + "����Ʈ�� ȹ���ϼ̽��ϴ�."));
				cm.dispose();
			} else {
				cm.getPlayer().gainRC(-cm.getText());
				cm.sendOk("#e#b�Ŀ�����Ʈ ����#n#k�� #e#r����#n#k�Ͽ� #e#r" + cm.getText() + "����Ʈ#n#k�� �����̽��ϴ�. \r\n#e#b" + cm.getPlayer().getName() + "#n#k���� ���� #e#b�Ŀ�����Ʈ#n#k��#e#b" + cm.getRC() + "����Ʈ#n#k�Դϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ �Ŀ�����Ʈ �������� " + cm.getText() + "����Ʈ�� �����̽��ϴ�."));
				cm.dispose();
			}
		} else if (huwon == 1) {
			if (!cm.haveItem(4310034, cm.getText())) {
				cm.sendOk("�����ϰ� �ִ� #e#bȫ������#n#k �������� �� ���� #e#b�Է�#n#k�ϼ˳׿�?");
				cm.dispose();
			// } else if (cm.getText() > 50) {
			//	cm.sendOk("������ #e#b���ڽý���#n#k�� ���Ͽ� #e#bȫ������#n#k #e#b50��#n#k�� #e#r�ʰ�#n#k�Ͽ� #e#r����#n#k�Ͻ� �� �����ϴ�.");
			//	cm.dispose();
			} else if (random < 4) {
				cm.gainItem(4310034, cm.getText());
				cm.sendOk("�����մϴ�. #e#bȫ������ ����#n#k���� #e#b" + cm.getText() + "��#n#k�� #e#b#i4310034#  #z4310034##n#k�� #e#bȹ��#n#k�ϼ̽��ϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ ȫ������ �������� " + cm.getText() + "���� ������ ȹ���ϼ̽��ϴ�."));
				cm.dispose();
			} else {
				cm.gainItem(4310034, -cm.getText());
				cm.sendOk("#e#bȫ������ ����#n#k�� #e#r����#n#k�Ͽ� #e#r" + cm.getText() + "��#n#k�� #e#b#i4310034#  #z4310034##n#k�� �����̽��ϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ ȫ������ �������� " + cm.getText() + "���� ������ �����̽��ϴ�."));
				cm.dispose();
			}
		} else if (huwon == 2) {
			if (cm.getText() > cm.getPlayer().getMeso()) {
				cm.sendOk("�����ϰ� �ִ� #e#b�޼�#n#k���� �� ���� #e#b�Է�#n#k�ϼ˳׿�?");
				cm.dispose();
			} else if (cm.getText() > 2100000000) {
				cm.sendOk("������ #e#b���ڽý���#n#k�� ���Ͽ� #e#b21��޼�#n#k�� #e#r�ʰ�#n#k�Ͽ� #e#r����#n#k�Ͻ� �� �����ϴ�.");
				cm.dispose();
			} else if (random < 4) {
				cm.gainMeso(cm.getText());
				cm.sendOk("�����մϴ�. #e#b�޼� ����#n#k���� #e#b" + cm.getText() + "�޼�#n#k�� #e#bȹ��#n#k�ϼ̽��ϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ �޼ҵ������� " + cm.getText() + "�޼Ҹ� ȹ���ϼ̽��ϴ�."));
				cm.dispose();
			} else {
				cm.gainMeso(-cm.getText());
				cm.sendOk("#e#b�޼� ����#n#k�� #e#r����#n#k�Ͽ� #e#r" + cm.getText() + "�޼�#n#k�� �����̽��ϴ�."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " ������ �޼ҵ������� " + cm.getText() + "�޼Ҹ� �����̽��ϴ�."));
				cm.dispose();
			}
		}
	}
}