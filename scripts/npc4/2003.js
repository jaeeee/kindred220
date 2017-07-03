var status = -1;
var select = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendSimpleS("어떤 낚시를 시작해볼까?\r\n#L0##b.\r\n#L1#[잠수모드]낚시하기#l",2);
    } else if (status == 1) {
	if (selection == 0) {
		cm.getPlayer().낚시(true,10000);
		cm.dispose();
	} else if (selection == 1) {
		cm.getPlayer().낚시(false,30000);
		cm.dispose();
	}
    } else {
	cm.dispose();
    }
}


