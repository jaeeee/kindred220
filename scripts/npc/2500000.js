importPackage(Packages.packet.creators);

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
		var total = cm.getPlayer().getStat().getStr() + cm.getPlayer().getStat().getDex() + cm.getPlayer().getStat().getLuk() + cm.getPlayer().getStat().getInt() + cm.getPlayer().getRemainingAp() - 16;
		cm.getPlayer().getStat().setStr(4);
		cm.getPlayer().getStat().setInt(4);
		cm.getPlayer().getStat().setLuk(4);
		cm.getPlayer().getStat().setDex(4);
		cm.setAp(total);
		cm.getPlayer().getStat().setStr(4);
		cm.getPlayer().getStat().setInt(4);
		cm.getPlayer().getStat().setLuk(4);
		cm.getPlayer().getStat().setDex(4);
		cm.setAp(total);
		cm.getPlayer().saveToDB(false, false);
		cm.updateChar();
		cm.getPlayer().send(MainPacketCreator.sendHint("#e#b���¶���#n#k�� ���� ���� #e#bȯ��#n#k�մϴ�!\r\n#e#b���¶���#n#k #e#r��ɾ�#n#k�� ���÷���#e#b@��ɾ�#n#k�� #e#r�Է�#n#k���ּ���!\r\n#e#r[TIP] #e#bNPC#n#k�� ������ �����ø� #e#b@����#n#k�� #e#r�Է�#n#k���ּ���!",350,60));
		cm.dispose();
		}
}