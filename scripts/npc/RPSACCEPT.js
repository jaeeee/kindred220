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
		cm.sendYesNo(cm.getPlayer().getKeyValue2("RPS") + "�޼Ұ� �ɸ� ������������ �³��Ͻðڽ��ϱ�?");
    	} else if (status == 1) {
		cm.getPlayer().setKeyValue2("RPS", cm.getText());
		cm.acceptdRPS();
		cm.dispose();
	}
}
}