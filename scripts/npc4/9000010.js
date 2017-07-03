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
		cm.sendSimple("#L0##e#bOX퀴즈맵 입장하기#l\r\n#L1#헤네시스로 돌아가기");
	} if (status == 1) {
		if (selection == 0) {
			if (cm.getPlayerCount(109020001) > 3) {
				cm.sendOk("#e#bOX퀴즈#n#k가 #e#r진행중#n#k이므로 #e#b입장#n#k하실 수 없습니다.");
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

