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
	cm.sendSimple("���⼭ #e#bĳ�þ�����#n#k, #e#r����#n#k�� �ȵǴ� #e#b������#n#k, #e#b�ñ�� ������#n#k���� #e#r����#n#k�� �� �־��.\r\n#e#b� ����#n#k�� #e#b������#n#k�� #e#r����#n#k�Ͻǰǰ���?\r\n#L100##e#b[���������]#r �����ϱ�#l\r\n#L101##e#b[��������]#r �����ϱ�#l\r\n#L102##e#b[�Һ������]#r �����ϱ�#l\r\n#L103##e#b[��ġ������]#r �����ϱ�#l\r\n#L104##e#b[��Ÿ������]#r �����ϱ�#l\r\n#L105##e#b[ĳ�þ�����]#r �����ϱ�#l");
	} else if (status == 1) {
	if (selection == 100) {
		slot = 0;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
	}
	if (selection == 101) {
		slot = 1;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
	}
	
	else if (selection == 102) {
		slot = 2;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.USE).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
	}
	
	else if (selection == 103) {
		slot = 3;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.SETUP).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
	}
	
	else if (selection == 104) {
		slot = 4;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.ETC).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
	}
	
	else if (selection == 105) {
		slot = 5;
		for (var i = 1; i <= 100; i++) {
			if (cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i) != null) {
				list += "#b#e#L" + i + "##v" + cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i).getItemId() + "##z" + cm.getPlayer().getInventory(MapleInventoryType.CASH).getItem(i).getItemId() + "##k (��ġ" + i + ")#l\r\n";
			}
		}
		cm.sendSimple("#e#r����#n#k�� #e#b������#n#k�� #e#b����#n#k�ϼ���.\r\n" + list);
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
		cm.sendOk("#e#b����#n#k�Ͻ� #e#b������#n#k�� #e#b����#n#k �Ǿ����ϴ�.\r\n#e#b������ â#n#k�� #e#bȮ��#n#k�غ�����.");
		cm.dispose();
	}
}