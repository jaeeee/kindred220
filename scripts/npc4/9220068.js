importPackage(Packages.packet.creators);
importPackage(Packages.launch.world);

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
    }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var dobak = "   #e휴먼온라인 #b도박시스템#n#k에 오신것을 #e#b환영#n#k합니다.\r\n#e#b  후원포인트#n#k와 #e#b홍보코인#n#k을 이용하여 #e#b도박#n#k을 즐기실 수\r\n   있습니다.\r\n\r\n";
 		dobak += "#e#b#L0#후원포인트#k 도박하기#l\r\n";
		dobak += "#e#b#L1#홍보코인(저스티스 코인)#k 도박하기#l\r\n";
		dobak += "#e#b#L2#메소#k 도박하기#l\r\n\r\n\r\n";
		dobak += "   #e#r※ 주의사항 : 도박시스템을 이용하여 발생하는 손실\r\n   에 대해서는 책임지지 않습니다.#k#n";
		cm.sendSimple(dobak);
	} else if (status == 1) {
		if (selection == 0) {
			cm.sendGetText("#e#b" + cm.getPlayer().getName() + "#e#k님은 #e#r" + cm.getRC() + " #e#b후원포인트#n#k를 #e소지#n하고 있습니다.\r\n#e#b도박#n#k을 하실 #e#b후원포인트#n#k를 #e#b입력#n#k해주세요.");
			huwon = 0;
		} else if (selection == 1) {
			  cm.dispose();
			  cm.openNpc(9220071);
			//cm.sendGetText("#e#b도박#n#k을 하실 #e#b홍보코인 갯수#n#k를 #e#b입력#n#k해주세요.");
			//huwon = 1;
		} else if (selection == 2) {
			cm.sendGetText("#e#b도박#n#k을 하실 #e#b메소#n#k를 #e#b입력#n#k해주세요.");
			huwon = 2;
		}
	} else if (status == 2) {
		var random = 1 + Math.floor(Math.random() * 10);
		if (cm.getText() < 1) {
		cm.dispose();
		}
		else if (huwon == 0) {
			if (cm.getText() > cm.getRC()) {
				cm.sendOk("소지하고 있는 #e#b포인트#n#k보다 더 많이 #e#b입력#n#k하셧네요?");
				cm.dispose();
			} else if (cm.getText() > 50000) {
				cm.sendOk("건전한 #e#b도박시스템#n#k을 위하여 #e#b후원포인트#n#k #e#b50000포인트#n#k를 #e#r초과#n#k하여 #e#r도박#n#k하실 수 없습니다.");
				cm.dispose();
			} else if (random < 4) {
				cm.getPlayer().gainRC(cm.getText());
				cm.sendOk("축하합니다. #e#b후원포인트 도박#n#k으로 #e#b" + cm.getText() + "포인트#n#k를 #e#b획득#n#k하셨습니다. \r\n#e#b" + cm.getPlayer().getName() + "#n#k님의 현재 #e#b후원포인트#n#k는#e#b" + cm.getRC() + "포인트#n#k입니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 후원포인트 도박으로 " + cm.getText() + "포인트를 획득하셨습니다."));
				cm.dispose();
			} else {
				cm.getPlayer().gainRC(-cm.getText());
				cm.sendOk("#e#b후원포인트 도박#n#k을 #e#r실패#n#k하여 #e#r" + cm.getText() + "포인트#n#k를 잃으셨습니다. \r\n#e#b" + cm.getPlayer().getName() + "#n#k님의 현재 #e#b후원포인트#n#k는#e#b" + cm.getRC() + "포인트#n#k입니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 후원포인트 도박으로 " + cm.getText() + "포인트를 잃으셨습니다."));
				cm.dispose();
			}
		} else if (huwon == 1) {
			if (!cm.haveItem(4310034, cm.getText())) {
				cm.sendOk("소지하고 있는 #e#b홍보코인#n#k 갯수보다 더 많이 #e#b입력#n#k하셧네요?");
				cm.dispose();
			// } else if (cm.getText() > 50) {
			//	cm.sendOk("건전한 #e#b도박시스템#n#k을 위하여 #e#b홍보코인#n#k #e#b50개#n#k를 #e#r초과#n#k하여 #e#r도박#n#k하실 수 없습니다.");
			//	cm.dispose();
			} else if (random < 4) {
				cm.gainItem(4310034, cm.getText());
				cm.sendOk("축하합니다. #e#b홍보코인 도박#n#k으로 #e#b" + cm.getText() + "개#n#k의 #e#b#i4310034#  #z4310034##n#k을 #e#b획득#n#k하셨습니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 홍보코인 도박으로 " + cm.getText() + "개의 코인을 획득하셨습니다."));
				cm.dispose();
			} else {
				cm.gainItem(4310034, -cm.getText());
				cm.sendOk("#e#b홍보코인 도박#n#k을 #e#r실패#n#k하여 #e#r" + cm.getText() + "개#n#k의 #e#b#i4310034#  #z4310034##n#k을 잃으셨습니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 홍보코인 도박으로 " + cm.getText() + "개의 코인을 잃으셨습니다."));
				cm.dispose();
			}
		} else if (huwon == 2) {
			if (cm.getText() > cm.getPlayer().getMeso()) {
				cm.sendOk("소지하고 있는 #e#b메소#n#k보다 더 많이 #e#b입력#n#k하셧네요?");
				cm.dispose();
			} else if (cm.getText() > 2100000000) {
				cm.sendOk("건전한 #e#b도박시스템#n#k을 위하여 #e#b21억메소#n#k를 #e#r초과#n#k하여 #e#r도박#n#k하실 수 없습니다.");
				cm.dispose();
			} else if (random < 4) {
				cm.gainMeso(cm.getText());
				cm.sendOk("축하합니다. #e#b메소 도박#n#k으로 #e#b" + cm.getText() + "메소#n#k를 #e#b획득#n#k하셨습니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 메소도박으로 " + cm.getText() + "메소를 획득하셨습니다."));
				cm.dispose();
			} else {
				cm.gainMeso(-cm.getText());
				cm.sendOk("#e#b메소 도박#n#k을 #e#r실패#n#k하여 #e#r" + cm.getText() + "메소#n#k를 잃으셨습니다."); 
				WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(2, "[Human online] : " + cm.getPlayer().getName() + " 유저가 메소도박으로 " + cm.getText() + "메소를 잃으셨습니다."));
				cm.dispose();
			}
		}
	}
}