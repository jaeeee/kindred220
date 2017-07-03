importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.items);
importPackage(Packages.packet.creators);


var slot;
var list = "";

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
	cm.sendSimple("여기서 #e#b캐시아이템#n#k, #e#r제거#n#k가 안되는 #e#b아이템#n#k, #e#b팅기는 아이템#n#k등을 #e#r제거#n#k할 수 있어요.\r\n#e#b어떤 종류#n#k의 #e#b아이템#n#k을 #e#r제거#n#k하실건가여?\r\n#L100##e#b[착용아이템]#r 제거하기#l\r\n#L101##e#b[장비아이템]#r 제거하기#l\r\n#L102##e#b[소비아이템]#r 제거하기#l\r\n#L103##e#b[설치아이템]#r 제거하기#l\r\n#L104##e#b[기타아이템]#r 제거하기#l\r\n#L105##e#b[캐시아이템]#r 제거하기#l");
	} else if (status == 1) {
	if (selection == 100) {
		slot = 0;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	if (selection == 101) {
		slot = 1;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	
	else if (selection == 102) {
		slot = 2;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	
	else if (selection == 103) {
		slot = 3;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	
	else if (selection == 104) {
		slot = 4;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	
	else if (selection == 105) {
		slot = 5;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i).getItemId() + "##k (위치" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r제거#n#k할 #e#b아이템#n#k을 #e#b선택#n#k하세요.\r\n" + list);
	}
	} else if (status == 2) {
		if (slot == 0) {
			cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else if (slot == 1) {
			cm.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else if (slot == 2) {
			cm.getPlayer().getInventory(MapleInventoryType.USE).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else if (slot == 3) {
			cm.getPlayer().getInventory(MapleInventoryType.SETUP).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else if (slot == 4) {
			cm.getPlayer().getInventory(MapleInventoryType.ETC).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else if (slot == 5) {
			cm.getPlayer().getInventory(MapleInventoryType.CASH).removeSlot(selection);
        		cm.getPlayer().saveToDB(false,false);
        		cm.getPlayer().getMap().removePlayer(cm.getPlayer());
        		cm.getPlayer().getMap().addPlayer(cm.getPlayer());
			cm.fakeRelog();
			cm.updateChar();
		}
		else {
			cm.sendSimple("ERROR");
			cm.dispose();
		}
		cm.sendOk("#e#b선택#n#k하신 #e#b아이템#n#k이 #e#b제거#n#k 되었습니다.\r\n#e#b아이템 창#n#k을 #e#b확인#n#k해보세요.");
		cm.dispose();
	}
}