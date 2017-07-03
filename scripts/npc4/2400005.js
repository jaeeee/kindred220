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
			cm.sendYesNo("#e#b#i1562000# #z1562000#   #i1572000# #z1572000##n#k 을\r\n #e#r지급#n#k 받겠습니까?" +
				     "만약 해당 #e#b아이템#n#k을 #e#r착용중#n#k일시 #e#b아이템#n#k의 #e옵션#k이 #e#r증발#n#k되므로" +
				     "#e#b아이템#n#k이 #e#b파괴#n#k된 경우에만 #e#b이용#n#k하시기 바랍니다.");
		} else {
			cm.sendOk("당신은 #e#b제로#n#k가 아닌거 같군요...");
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