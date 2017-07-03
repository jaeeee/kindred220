importPackage(java.util);
importPackage(Packages.client.items);
importPackage(Packages.client);
importPackage(Packages.server.items);
importPackage(Packages.constants);
importPackage(Packages.launch);



var status = 0;
var operation = -1;
var select = -1;
var type;
var ty;
var gc = GameConstants;
var dd = true;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();
var slot_2 = Array();
var statsSel;

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

			var ask = "어느 타입의 아이템을 선물하시겠습니까?\r\n";
			ask +="#L1##b[장비]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L2##b[소비]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L3##b[기타]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L4##b[설치]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L5##b[캐시]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L6##b설명을 듣고 싶습니다.#k"
			cm.sendSimple(ask);
		} else if (status == 1) {
			operation = selection;
			if (operation == 1) {
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
			if (selection >= 1 && selection <=5) {
				cm.sendGetText("선물받으실 분의 아이디를 입력해주세요.");
			} else if (selection == 6) {
				cm.sendOk("선물시스템은 아이템의 종류나 옵션에 관계없이 누구에게나 선물할수 있는 시스템입니다. 선물을 하기 위해선 100만메소가 필요하며, 같은 채널에 접속중이여야 합니다. 잘못된 사용으로 인한 문제는 운영진 측에서 책임지지 않습니다.");
				cm.dispose();
			}
		} else if (status == 2) {
		var text = cm.getText();
		var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(text);
		if (conn == null){
		cm.sendOk("현재 접속중이 아니거나 채널이 다릅니다. 혹은 존재하지 않는 아이디일 수도 있습니다.");
		cm.dispose();
		}else{
		var ok = false;
		var selStr = "#b"+conn.getName()+"#k님에게 어떤 아이템을 선물하시겠습니까?\r\n";
		for (var x = 0; x < invs.length; x++) {
			var inv = cm.getInventory(invs[x]);
			for (var i = 0; i <= inv.getSlotLimit(); i++) {
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
				//if (!gc.isEquip(itemid)) {
				//	continue;
				//}
				ok = true;
				selStr += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
			}
		}
		if (!ok) {
			cm.sendOk("전송할 아이템이 없는것 같은데요?");
			cm.dispose();
			return;
		}
		cm.sendSimple(selStr + "#k");
		}
		} else if (status == 3) {
			var inzz = cm.getInventory(invv);
			var item = cm.getChar().getInventory(DbgInventoryType.EQUIP).getItem(selection%1000).copy();
			var text = cm.getText();
			var curChar = cm.getChar().getMap().getCharacters();
			invv = selection / 1000;
			selected = selection % 1000;
				if (invv == invs[0]) {
					statsSel = inzz.getItem(slot_1[selected]);
				} else {
					statsSel = inzz.getItem(slot_2[selected]);
				}
				if (statsSel == null) {
					cm.sendOk("Error, please try again.");
					cm.dispose();
					return;
				}
			var text = cm.getText();
			var con = cm.getClient().getChannelServer().isMyChannelConnected(text);
			var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(text);
			InventoryManipulator.removeFromSlot(cm.getC(), DbgInventoryType.EQUIP, selection%1000, 1, true);
			InventoryManipulator.addFromDrop(conn.getClient(), item, true);
			conn.getClient().getPlayer().dropMessage(1, ""+cm.getPlayer().getName()+" 님에게 아이템을 받으셨습니다. 인벤토리를 확인해보세요.");
			cm.sendOk(text + " 님에게 아이템을 보냈습니다.");
			cm.dispose();

		}
	}
}	