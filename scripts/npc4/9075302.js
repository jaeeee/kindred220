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
		if (cm.getPlayer().getMapId() == 350060000) {
			var check = "#L1##e#b<����> ����#r �����ϱ�\r\n";
		} else if (cm.getPlayer().getMapId() >= 350060000 && cm.getPlayer().getMapId() < 350070000) {
			var check = "#L2##e#b��׽ý��� ���ư���\r\n";
		} else {
			var check = "   #e�ȳ��ϼ���. #e#b#h0#��!!!#n#k\r\n   ���� #e#r���¶���#n#k������ #e#b���� ����#n#k�� �̸� #e#rü��#n#k�� ����\r\n   �� �ֵ��� #e#b�غ�#n#k�Ͽ���ϴ�. �ѹ� #e#b����#n#k�� ���ðھ?\r\n\r\n";
			check += "#L0##e#b<����> ����#r ����ϱ�#n#k\r\n";
		}
		cm.sendSimple(check);
	} else if (status == 1) {
		if (selection == 0) {
			cm.warp(350060000);
			cm.dispose();
		} else if (selection == 1) {
			if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
				cm.sendOk("#e#b��Ƽ#n#k ���̴� #e#r����#n#k�� �Ұ����ϸ�, #e#b��Ƽ��#n#k�� ���� #e#b����#n#k�� �� �ֽ��ϴ�.");
				cm.dispose();
			} else if (cm.getClient().getChannelServer().getMapFactory().getMap(350060160).getCharactersSize() > 0 || cm.getClient().getChannelServer().getMapFactory().getMap(350060180).getCharactersSize() > 0 || cm.getClient().getChannelServer().getMapFactory().getMap(350060200).getCharactersSize() > 0) {
				cm.sendOk("�ٸ� #e#b��Ƽ#n#k�� #e#b����#n#k�� �̹� #e#r����#n#k�Ͽ����ϴ�.\r\n#e#b�ٸ� ä��#n#k�� �̿��� �ּ���.");
				cm.dispose();
			} else {
				cm.allPartyWarp(350060160, true);
				cm.dispose();
			}			
		} else if (selection == 2) {
			cm.dispose();
			cm.warp(100000000);
		}
	} 
}
