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
			cm.sendOk("다음에 또 이용해주세요.")
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
			var ask = "무엇을 하시겠습니까?\r\n";
			ask +="#L1#다른사람에게 #b[장비]#k아이템을 주겠습니다.\r\n";
			ask +="#L2#다른사람에게 #b[소비]#k아이템을 주겠습니다.\r\n";
			ask +="#L3#다른사람에게 #b[기타]#k아이템을 주겠습니다.\r\n";
			ask +="#L4#다른사람에게 #b[설치]#k아이템을 주겠습니다.\r\n";
			ask +="#L5#다른사람에게 #b[캐시]#k아이템을 주겠습니다.\r\n";
			ask +="#L6##r설명을 듣고 싶습니다.#k"
			cm.sendSimple(ask);
		} else if (status == 1) {
			operation = selection;

			if (selection == 0) {
				cm.sendYesNo("당신의 장비 첫번째 칸에 있는 아이템을 삭제합니다.");
			} else if (selection >= 1 && selection <=5) {

				var toSend = "당신의 장비 첫번째 칸에 있는 아이템을 받을 사람은 누구인가요?\r\n같은 맵에 있는 사람만 출력됩니다.#b";
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
				cm.sendOk("설명");
				cm.dispose();
			}
		} else if (status == 2) {
			if (operation == 0) {
				InventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, true);
				cm.sendOk("아이템이 삭제되었습니다.")
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
				cm.sendYesNo("" + sendTarget.getName() + "님에게 #i"+itemid+"##b(#t"+itemid+"#)#k를 보내시겠습니까?");
				}else{
				cm.sendYesNo("" + sendTarget.getName() + "님에게 #i"+itemid+"##b(#t"+itemid+"#)#k를 보내시겠습니까?");
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
				sendTarget.getClient().getPlayer().dropMessage(1, ""+cm.getPlayer().getName()+"님에게 아이템을 받으셨습니다. 창고를 확인해주세요.");
				cm.sendOk(sendTarget.getName() + " 님에게 아이템을 보냈습니다.");
				cm.dispose();
			}else{
				cm.sendOk("펫은 보낼수 없습니다.");
				cm.dispose();
			}
			}else{
				cm.sendOk("자기 자신한테는 아이템을 보낼 수 없습니다.");
				cm.dispose();
			}
		}
	}
}	