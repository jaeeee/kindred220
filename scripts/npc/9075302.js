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
		if (cm.getPlayer().getMapId() == 350060000) {
			var check = "#L1##e#b<보스> 스우#r 입장하기\r\n";
		} else if (cm.getPlayer().getMapId() >= 350060000 && cm.getPlayer().getMapId() < 350070000) {
			var check = "#L2##e#b헤네시스로 돌아가기\r\n";
		} else {
			var check = "   #e안녕하세요. #e#b#h0#님!!!#n#k\r\n   저희 #e#r노블온라인#n#k에서는 #e#b보스 스우#n#k를 미리 #e#r체험#n#k해 보실\r\n   수 있도록 #e#b준비#n#k하였답니다. 한번 #e#b구경#n#k해 보시겠어여?\r\n\r\n";
			check += "#L0##e#b<보스> 스우#r 사냥하기#n#k\r\n";
		}
		cm.sendSimple(check);
	} else if (status == 1) {
		if (selection == 0) {
			cm.warp(350060000);
			cm.dispose();
		} else if (selection == 1) {
			if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
				cm.sendOk("#e#b파티#n#k 없이는 #e#r입장#n#k이 불가능하며, #e#b파티장#n#k을 통해 #e#b입장#n#k할 수 있습니다.");
				cm.dispose();
			} else if (cm.getClient().getChannelServer().getMapFactory().getMap(350060160).getCharactersSize() > 0 || cm.getClient().getChannelServer().getMapFactory().getMap(350060180).getCharactersSize() > 0 || cm.getClient().getChannelServer().getMapFactory().getMap(350060200).getCharactersSize() > 0) {
				cm.sendOk("다른 #e#b파티#n#k나 #e#b유저#n#k가 이미 #e#r입장#n#k하였습니다.\r\n#e#b다른 채널#n#k을 이용해 주세요.");
				cm.dispose();
			} else {
				cm.allPartyWarp(350060160, true);
				cm.dispose();
			}			
		} else if (selection == 2) {
			cm.dispose();
			cm.warp(100000000);
		}
	} 
}
