importPackage(java.util);
importPackage(Packages.client.items);
importPackage(Packages.client);
importPackage(Packages.server.items);
importPackage(Packages.constants);
importPackage(Packages.launch);
importPackage(Packages.packet.creators);


var status = 0;
var operation = -1;
var select = -1;
var type;
var ty;
var gc = GameConstants;
var dd = true;
var yes= 1;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();
var slot_2 = Array();
var statsSel;
var sel;
var name;

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
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {

			var ask = "��� Ÿ���� �������� �����Ͻðڽ��ϱ�?\r\n";
			ask +="#L1##b[���]#k�������� ���� �ϰڽ��ϴ�.\r\n";
			ask +="#L2##b[�Һ�]#k�������� ���� �ϰڽ��ϴ�.\r\n";
			ask +="#L4##b[��Ÿ]#k�������� ���� �ϰڽ��ϴ�.\r\n";
			ask +="#L3##b[��ġ]#k�������� ���� �ϰڽ��ϴ�.\r\n";
			ask +="#L5##b[ĳ��]#k�������� ���� �ϰڽ��ϴ�.\r\n";
			ask +="#L6##b������ ��� �ͽ��ϴ�.#k"
			cm.sendSimple(ask);
		} else if (status == 1) {
			operation = selection;
			if (operation == 1) {
				type = MapleInventoryType.EQUIP;
				yes = 1;
			} else if (operation == 2) {
				type = MapleInventoryType.USE;
				yes = 2;
			} else if (operation == 4) {
				type = MapleInventoryType.SETUP;
				yes = 4;
			} else if (operation == 3) {
				type = MapleInventoryType.ETC;
				yes = 3;
			} else if (operation == 5) {
				type = MapleInventoryType.CASH;
				yes = 5;
			}
			if (selection >= 1 && selection <=5) {
				cm.sendGetText("���������� ���� �г����� �Է����ּ���.");
			} else if (selection == 6) {
				cm.sendOk("�����ý����� �������� ������ �ɼǿ� ������� �������Գ� �����Ҽ� �ִ� �ý����Դϴ�. ������ �ϱ� ���ؼ� 100���޼Ұ� �ʿ��ϸ�, ���� ä�ο� �������̿��� �մϴ�. �߸��� ������� ���� ������ ��� ������ å������ �ʽ��ϴ�.");
				cm.dispose();
			}
		} else if (status == 2) {
			if (operation == 1) {
				type = MapleInventoryType.EQUIP;
			} else if (operation == 2) {
				type = MapleInventoryType.USE;
			} else if (operation == 3) {
				type = MapleInventoryType.SETUP;
			} else if (operation == 4) {
				type = MapleInventoryType.ETC;
			} else if (operation == 5) {
				type = MapleInventoryType.CASH;
			}
				var item = cm.getChar().getInventory(type);
		var text = cm.getText();
		var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(text);
		if (conn == null){
		cm.sendOk("���� �������� �ƴϰų� ä���� �ٸ��ϴ�. Ȥ�� �������� �ʴ� ���̵��� ���� �ֽ��ϴ�.");
		cm.dispose();
		}else{
		var ok = false;
		var selStr = "#b"+conn.getName()+"#k�Կ��� � �������� �����Ͻðڽ��ϱ�?\r\n";
		for (var x = 1; x < 2; x++) {
			var inv = cm.getInventory(yes);
			for (var i = 0; i <= cm.getInventory(yes).getSlotLimit(); i++) {
				if (x == 0) {
					slot_1.push(i);
				} else {
					slot_2.push(i);
				}
				var it = inv.getItem(i);
				if (it == null) {
					continue;
				}
				var itemid = it.getItemId();
				ok = true;
				selStr += "#L" + (yes * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
			}
		}
		if (!ok) {
			cm.sendOk("������ �������� �����ϴ�.");
			cm.dispose();
			return;
		}
		cm.sendSimple(selStr + "#k");
		}
		} else if (status == 3) {
		sel = selection;
			if (operation == 1) {
				type = MapleInventoryType.EQUIP;
			} else if (operation == 2) {
				type = MapleInventoryType.USE;
			} else if (operation == 3) {
				type = MapleInventoryType.SETUP;
			} else if (operation == 4) {
				type = MapleInventoryType.ETC;
			} else if (operation == 5) {
				type = MapleInventoryType.CASH;
			}
			var item = cm.getChar().getInventory(type).getItem(selection%1000).copy();
			var text = cm.getText();
			invv = selection / 1000;
			var inzz = cm.getInventory(invv);
			selected = selection % 1000;
				if (invv == invs[0]) {
					statsSel = inzz.getItem(slot_1[selected]);
				} else {
					statsSel = inzz.getItem(slot_2[selected]);
				}
				if (statsSel == null) {
					cm.sendOk("�����Դϴ�. ��ڿ��� �������ּ���.");
					cm.dispose();
					return;
				}
			var text = cm.getText();
			var con = cm.getClient().getChannelServer().isMyChannelConnected(text);
			var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(text);


	if (item.getQuantity() == 1){
		if (cm.getMeso()>=1000000){
			if (GameConstants.isPet(item.getItemId()) == false) {
				if (cm.getPlayer().getName() != text) {
			InventoryManipulator.removeFromSlot(cm.getC(), type, selection%1000, item.getQuantity(), true);
			InventoryManipulator.addFromDrop(conn.getClient(), item, true);
			conn.getClient().getSession().write(MainPacketCreator.getNPCTalk(9000086, 0, "#b"+cm.getPlayer().getName()+"#k �Կ��� #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k��(��) ���������̽��ϴ�. �κ��丮�� Ȯ���غ�����.", "00 00", 0));
			cm.sendOk("#b"+text + "#k �Կ��� #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k��(��) ���½��ϴ�.");
			cm.gainMeso(-1000000)
			cm.dispose();
			}else {
				cm.sendOk("�ڱ� �ڽſ��Դ� �����Ҽ� �����ϴ�.");
				cm.dispose();
			}
			}else {
				cm.sendOk("���� �����Ҽ� �����ϴ�.");
				cm.dispose();
			}
			}else{
			cm.sendOk("�޼Ұ� �����մϴ�.");
			cm.dispose();
			}
			}else {
				cm.sendGetText("��� �����Ͻðڽ��ϱ�?\r\n���� �������� #i"+item.getItemId()+"# #b(#t"+item.getItemId()+"#)#k ���� : #b"+item.getQuantity()+"#k");
			}
			name = text;
		}else if (status==4){

		var sele = selection%1000;
		var quan = cm.getText();
			if (operation == 1) {
				type = MapleInventoryType.EQUIP;
			} else if (operation == 2) {
				type = MapleInventoryType.USE;
			} else if (operation == 3) {
				type = MapleInventoryType.SETUP;
			} else if (operation == 4) {
				type = MapleInventoryType.ETC;
			} else if (operation == 5) {
				type = MapleInventoryType.CASH;
			}
			var item = cm.getChar().getInventory(type).getItem(sel%1000).copy();
			var text = cm.getText();
			invv = sel / 1000;
			var inzz = cm.getInventory(invv);
			selected = sel % 1000;
				if (invv == invs[0]) {
					statsSel = inzz.getItem(slot_1[selected]);
				} else {
					statsSel = inzz.getItem(slot_2[selected]);
				}
				if (statsSel == null) {
					cm.sendOk("�����Դϴ�. ��ڿ��� �������ּ���.");
					cm.dispose();
					return;
				}
			var text = cm.getText();
			var con = cm.getClient().getChannelServer().isMyChannelConnected(name);
	        		var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(name);
	if (item.getQuantity() >= text && cm.getText()>0) {
		if (cm.getMeso()>=10000000){
			if (cm.getPlayer().getName() != name) {
			item.setQuantity(text);
			InventoryManipulator.removeFromSlot(cm.getC(), type, sel%1000, item.getQuantity(), true);
			InventoryManipulator.addFromDrop(conn.getClient(), item, true);
			conn.getClient().getSession().write(MainPacketCreator.getNPCTalk(9000056, 0, "#b"+cm.getPlayer().getName()+"#k �Կ��� #i"+item.getItemId()+" "+item.getQuantity()+"����##b(#t"+item.getItemId()+"#)#k��(��) ���������̽��ϴ�. �κ��丮�� Ȯ���غ�����.", "00 00", 0));
			cm.sendOk("#b"+name + "#k �Կ��� #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k��(��) ���½��ϴ�.");
			cm.gainMeso(-10000000)
			cm.dispose();
			}else {
				cm.sendOk("�ڱ� �ڽſ��Դ� �����Ҽ� �����ϴ�.");
				cm.dispose();
			}
			}else {
				cm.sendOk("�޼Ұ� �����մϴ�.");
				cm.dispose();
			}
			}else {
				cm.sendOk("������ �ִ� �� ���� �����ϴ�.");
				cm.dispose();
			}
		}
	}
}	