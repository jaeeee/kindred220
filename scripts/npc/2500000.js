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
		cm.getPlayer().send(MainPacketCreator.sendHint("#e#b노블온라인#n#k에 오신 것을 #e#b환영#n#k합니다!\r\n#e#b노블온라인#n#k #e#r명령어#n#k를 보시려면#e#b@명령어#n#k를 #e#r입력#n#k해주세요!\r\n#e#r[TIP] #e#bNPC#n#k가 보이지 않으시면 #e#b@마을#n#k을 #e#r입력#n#k해주세요!",350,60));
		cm.dispose();
		}
}