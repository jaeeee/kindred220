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
		cm.sendSimple("[ #rPromotional events#k : #bJuly 5 - #k ] Progress #n\r\n#bFoxK style#l#kon #r[PR function]#l#kThe treasure entrusted the field.#k\r\n\r\n#b[Up 00 HR's report came formula]\r\n#L10##r[NEW & HOT] #bView list of promotional items shop#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#eIf people are able to promote African airdate you should seek referral to the viewers. For example, the OO's broadcasting came to see this way to join personnel.\r\nIf the operator does not get a reward not connected ????\r\nNateOn : admin@admin.com Please contact us\r\nHard to please#k");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
		} else if (selection == 6) {
			cm.openShop(9000152);
      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2095000);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(1002006);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(1012122);
	return;

      } else if (selection == 10) {
        cm.dispose();
        cm.openNpc(1002002);
	return;

      } else if (selection == 11) {
        cm.dispose();
        cm.openNpc(2159329);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(1012110);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

		}
		cm.dispose();
	}
    
}
