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
        cm.sendSimpleS("� ���ø� �����غ���?\r\n#L0##b.\r\n#L1#[������]�����ϱ�#l",2);
    } else if (status == 1) {
	if (selection == 0) {
		cm.getPlayer().����(true,10000);
		cm.dispose();
	} else if (selection == 1) {
		cm.getPlayer().����(false,30000);
		cm.dispose();
	}
    } else {
	cm.dispose();
    }
}


