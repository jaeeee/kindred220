var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendYesNo("���⼭ �����ðڽ��ϱ�?");
    } else if (status == 1) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getEventInstance() != null) {
            cm.getPlayer().getEventInstance().unregisterPlayer(cm.getPlayer());
        }
            cm.warp(100000000);
            cm.dispose();
}
}