var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
        if (status == 0) {
		cm.sendSimple("#n\r\n#bHi, I & P gambling general view\r\n#L1##r[50 million bet - Rock Paper Scissors Gaming#k#l\r\n#L55##bNot available in [your bet - check]#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#eWhen the game is the connection [Nickname: Insert look] and deals Go ~#k#n\r\n[Nickname: Insert look] ???? If you do not connect\r\nNateOn: Please contact kki_look\r\nFun Room 1 1 Application: Insert look (kkilook_adm)\r\n[5000 won points = 5000] ? 20,000 points = 20000]#k");
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(1022002);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(1012112);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9201005);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(2180000);
	return;

      } else if (selection == 6) {
        cm.dispose();
        cm.openNpc(9010018);
	return;

		}
		cm.dispose();
	}
    
}
