var status;

function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendGetText("�� �޼Ҹ� �Žðڽ��ϱ�?");
    	} else if (status == 1) {
		if (cm.getText() <= cm.getPlayer().getMeso()) {
		cm.getPlayer().setKeyValue2("RPS", cm.getText());
		cm.invitedRPS();
		cm.dispose();
		} else {
		cm.sendOk("�޼Ұ� �����մϴ�.");
		cm.dispose();
		}
	}
}
}