function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
        	cm.dispose();
        	return;
	}
	if (mode == 0) {
        status --;
	}
	if (mode == 1) {
        status++;
	}
	if (status == 0) {
		cm.sendSimple("#L0##e#bOX����� �����ϱ�#l\r\n#L1#��׽ý��� ���ư���");
	} if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayerCount(109020001) > 3) {
				cm.sendOk("#e#bOX����#n#k�� #e#r������#n#k�̹Ƿ� #e#b����#n#k�Ͻ� �� �����ϴ�.");
				cm.dispose();
			} else {
				cm.dispose();
				cm.warp(109020001);
			}
		} else if (selection == 1) {
			cm.dispose();
			cm.warp(100000000);
		}
	}
}

