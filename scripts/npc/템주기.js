importPackage(java.util);
importPackage(Packages.client.items);
importPackage(Packages.client);
importPackage(Packages.server.items);
importPackage(Packages.constants);


var status = 0;
var targets = new Array();
var operation = -1;
var sendTarget;
var select = -1;
var type;
var dd = true;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.sendOk("������ �� �̿����ּ���.")
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		//if (status == 0) {
		//	
		if (status == 0) {
			var ask = "������ �Ͻðڽ��ϱ�?\r\n";
			ask +="#L1#�ٸ�������� #b[���]#k�������� �ְڽ��ϴ�.\r\n";
			ask +="#L2#�ٸ�������� #b[�Һ�]#k�������� �ְڽ��ϴ�.\r\n";
			ask +="#L3#�ٸ�������� #b[��Ÿ]#k�������� �ְڽ��ϴ�.\r\n";
			ask +="#L4#�ٸ�������� #b[��ġ]#k�������� �ְڽ��ϴ�.\r\n";
			ask +="#L5#�ٸ�������� #b[ĳ��]#k�������� �ְڽ��ϴ�.\r\n";
			ask +="#L6##r������ ��� �ͽ��ϴ�.#k"
			cm.sendSimple(ask);
		} else if (status == 1) {
			operation = selection;

			if (selection == 0) {
				cm.sendYesNo("����� ��� ù��° ĭ�� �ִ� �������� �����մϴ�.");
			} else if (selection >= 1 && selection <=5) {

				var toSend = "����� ��� ù��° ĭ�� �ִ� �������� ���� ����� �����ΰ���?\r\n���� �ʿ� �ִ� ����� ��µ˴ϴ�.#b";
				var iter = cm.getChar().getMap().getCharacters().iterator();
				var i = 0;
				targets = new Array();

				while (iter.hasNext()) {
					var curChar = iter.next();
					toSend += "\r\n#L" + i + "#" + curChar.getName() + "#l";
					targets[i] = curChar;
					i++;
				}
				toSend += "#k";
				cm.sendSimple(toSend);
			} else if (selection == 6) {
				cm.sendOk("����");
				cm.dispose();
			}
		} else if (status == 2) {
			if (operation == 0) {
				InventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, true);
				cm.sendOk("�������� �����Ǿ����ϴ�.")
				cm.dispose();

			} else if (operation == 1) {
				type = DbgInventoryType.EQUIP;
			} else if (operation == 2) {
				type = DbgInventoryType.USE;
			} else if (operation == 3) {
				type = DbgInventoryType.SETUP;
			} else if (operation == 4) {
				type = DbgInventoryType.ETC;
			} else if (operation == 5) {
				type = DbgInventoryType.CASH;
			}			
		
			select = type;
				var item = cm.getChar().getInventory(type).getItem(1).copy();
				var itemid = item.getItemId();
				sendTarget = targets[selection];
				if (GameConstants.isPet(itemid) == false){
				cm.sendYesNo("" + sendTarget.getName() + "�Կ��� #i"+itemid+"##b(#t"+itemid+"#)#k�� �����ðڽ��ϱ�?");
				}else{
				cm.sendYesNo("" + sendTarget.getName() + "�Կ��� #i"+itemid+"##b(#t"+itemid+"#)#k�� �����ðڽ��ϱ�?");
				dd = false;
				}
		} else if (status == 3) {
				var item = cm.getChar().getInventory(select).getItem(1).copy();
				var itemid = item.getItemId();
		if (cm.getPlayer().getName() != sendTarget.getName()){
			if (operation >= 1 && dd ==true) {
				InventoryManipulator.removeFromSlot(cm.getC(), select, 1, 1, true);
				InventoryManipulator.addFromDrop(sendTarget.getClient(), item, true);
				var itemid = item.getItemId();
				sendTarget.getClient().getPlayer().dropMessage(1, ""+cm.getPlayer().getName()+"�Կ��� �������� �����̽��ϴ�. â�� Ȯ�����ּ���.");
				cm.sendOk(sendTarget.getName() + " �Կ��� �������� ���½��ϴ�.");
				cm.dispose();
			}else{
				cm.sendOk("���� ������ �����ϴ�.");
				cm.dispose();
			}
			}else{
				cm.sendOk("�ڱ� �ڽ����״� �������� ���� �� �����ϴ�.");
				cm.dispose();
			}
		}
	}
}	