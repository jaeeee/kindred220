var select = -1;
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	cm.sendSimple("������ ���忡�� �׶��𽺸� ħ���߳�. ������ ���� ħ���� ������ ���� ��������.....\r\n\r\n#b#L0#���� �κ��̵忡 �����Ѵ�.\r\n#L1#�� ���� ����ǰ�� �޴´�.\r\n#L2#���� �κ��̵忡 ���� ������ ��´�.#l");
		} else if (status == 1) {
	if(selection == 0) {
	if(cm.getParty() == null) {
	cm.sendOk("��Ƽ�� ���� ���� �κ��̵忡 �����ҷ��� �ǰ�?");
	cm.dispose();
	return;
	}
	if(!cm.isLeader()) {
	cm.sendOk("��Ƽ�� ���� ���� �κ��̵忡 �����û�� �Ҽ��ִٳ�.");
	cm.dispose();
	return;
	}
	if(cm.getPlayerCount(940021000) > 0) {
	cm.sendOk("�̹� �ٸ��ڰ� ���� �κ��̵忡 ������ �ִٳ�.");
	cm.dispose();
	return;
	}
	cm.resetMap(940021000);
	cm.PartyTimeMove(940020000,940021000,1500);
	cm.getPlayer().getMap().���µ����κ��̵�();
	cm.getPlayer().getMap().�����κ��̵�(1,cm.getPlayer());
	cm.dispose();

	}
		}
	}
}