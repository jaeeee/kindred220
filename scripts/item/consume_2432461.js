var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	if(cm.getPlayer().getMapId() == 992002000) {
	cm.sendYesNo("�ٽ� ���� �ö󰡰ھ�?");
	} else {
	cm.sendOk("���͵� �ƴ� �Ϸ� �θ��� ����!!");
	cm.dispose();
	}
} else if (status == 1) {
cm.warp(992002000);
cm.dispose();
}
}
}