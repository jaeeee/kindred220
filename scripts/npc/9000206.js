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
		cm.sendSimple("#k\r\n#L0##r[Read]#k#b[FoxK style]Learn how to sponsor#k#l\r\n\r\n#L101##r[HOT]#k#b[FoxK style] Use a coin Horn#k#l\r\n\r\n#L105##r[NEW]#k#r[FoxK style] Cash sponsorship shops#k#l\r\n\r\n#L104##r[NEW]#k#g[FoxK style] Coin exchange shop#k#l\r\n\r\n#L102##r[NEW]#k#b[FoxK style] Equipment! Ol strengthen stats#k#l\r\n\r\n#L103##r[NEW]#k#d[FoxK style] Equipment auction strengthened!#k#l\r\n\r\n#L106##r[NEW]#k#d[FoxK style] Nickname change!#k#l\r\n\r\n#L108##r[NEW]#k#d[FoxK style] Store items sponsorship#k#l\r\n\r\n#L109##r[NEW]#k#b[FoxK style] Scarlett items");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("Send by email voucher sponsored by filing suit in the form below\r\nGift Certificates name : \r\nGift Certificate pin number : \r\nGift Certificate Issuing date (if Happy Money) : \r\nVoucher amount : \r\nGet paid nickname : \r\n admin@admin.com So according to the form sent to simyeon\r\nNow we'll soon as possible.\r\nSee price list are sponsored by well-known caf?s and access\r\nTotal operators other operators hanteneun never sponsorship is not possible.");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2095000);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9250006);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(9201005);
	return;

      } else if (selection == 10) {
        cm.dispose();
        cm.openNpc(9050009);
	return;

      } else if (selection == 11) {
        cm.dispose();
        cm.openNpc(1012122);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

      } else if (selection == 102) {
        cm.dispose();
        cm.openNpc(9000030);
	return;

      } else if (selection == 103) {
        cm.dispose();
        cm.openNpc(9000013);
	return;

      } else if (selection == 104) {
        cm.dispose();
        cm.openNpc(9000175);
	return;

      } else if (selection == 105) {
        cm.dispose();
        cm.openNpc(9250007);
	return;

      } else if (selection == 106) {
        cm.dispose();
        cm.openNpc(9110001);
	return;
      } else if (selection == 108) {
        cm.dispose();
        cm.openNpc(9050000);
	return;
 } else if (selection == 109) {
        cm.dispose();
        cm.openNpc(1032206);
	return;

      } else if (selection == 100) {
        cm.dispose();
        cm.openNpc(2101018);
	return;

      } else if (selection == 101) {
        cm.dispose();
        cm.openNpc(1002002);
	return;
		}
		cm.dispose();
	}
    
}
