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
		if (cm.getPlayer().getJob() == 10112) {
			cm.sendYesNo("#e#b#i1562000# #z1562000#   #i1572000# #z1572000##n#k ��\r\n #e#r����#n#k �ްڽ��ϱ�?" +
				     "���� �ش� #e#b������#n#k�� #e#r������#n#k�Ͻ� #e#b������#n#k�� #e�ɼ�#k�� #e#r����#n#k�ǹǷ�" +
				     "#e#b������#n#k�� #e#b�ı�#n#k�� ��쿡�� #e#b�̿�#n#k�Ͻñ� �ٶ��ϴ�.");
		} else {
			cm.sendOk("����� #e#b����#n#k�� �ƴѰ� ������...");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.addEquip2(-10, 1562000);
		cm.addEquip2(-11, 1572000);
		cm.fakeRelog();
		cm.updateChar();
		cm.dispose();
	}
}