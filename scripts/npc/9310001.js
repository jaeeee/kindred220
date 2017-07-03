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

			var ask = "어느 타입의 아이템을 선물하시겠습니까?\r\n";
			ask +="#L1##b[장비]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L2##b[소비]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L4##b[기타]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L3##b[설치]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L5##b[캐시]#k아이템을 선물 하겠습니다.\r\n";
			ask +="#L6##b설명을 듣고 싶습니다.#k"
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
				cm.sendGetText("선물받으실 분의 닉네임을 입력해주세요.");
			} else if (selection == 6) {
				cm.sendOk("선물시스템은 아이템의 종류나 옵션에 관계없이 누구에게나 선물할수 있는 시스템입니다. 선물을 하기 위해선 100만메소가 필요하며, 같은 채널에 접속중이여야 합니다. 잘못된 사용으로 인한 문제는 운영진 측에서 책임지지 않습니다.");
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
		cm.sendOk("현재 접속중이 아니거나 채널이 다릅니다. 혹은 존재하지 않는 아이디일 수도 있습니다.");
		cm.dispose();
		}else{
		var ok = true;
		var selStr = "#b"+conn.getName()+"#k님에게 어떤 아이템을 선물하시겠습니까?\r\n";
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
			cm.sendOk("선물할 아이템이 없습니다.");
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
					cm.sendOk("오류입니다. 운영자에게 보고해주세요.");
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
			conn.getClient().getSession().write(MainPacketCreator.getNPCTalk(9000086, 0, "#b"+cm.getPlayer().getName()+"#k 님에게 #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k을(를) 선물받으셨습니다. 인벤토리를 확인해보세요.", "00 00", 0));
			cm.sendOk("#b"+text + "#k 님에게 #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k을(를) 보냈습니다.");
			cm.gainMeso(-1000000)
			cm.dispose();
			}else {
				cm.sendOk("자기 자신에게는 선물할수 없습니다.");
				cm.dispose();
			}
			}else {
				cm.sendOk("펫은 선물할수 없습니다.");
				cm.dispose();
			}
			}else{
			cm.sendOk("메소가 부족합니다.");
			cm.dispose();
			}
			}else {
				cm.sendGetText("몇개를 선물하시겠습니까?\r\n현재 소지중인 #i"+item.getItemId()+"# #b(#t"+item.getItemId()+"#)#k 갯수 : #b"+item.getQuantity()+"#k");
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
					cm.sendOk("오류입니다. 운영자에게 보고해주세요.");
					cm.dispose();
					return;
				}
			var text = cm.getText();
			var con = cm.getClient().getChannelServer().isMyChannelConnected(name);
	        		var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(name);
	if (item.getQuantity() >= text && cm.getText()>0) {
		if (cm.getMeso()>=1000000){
			if (cm.getPlayer().getName() != name) {
			item.setQuantity(text);
			InventoryManipulator.removeFromSlot(cm.getC(), type, sel%1000, item.getQuantity(), true);
			InventoryManipulator.addFromDrop(conn.getClient(), item, true);
			conn.getClient().getSession().write(MainPacketCreator.getNPCTalk(9000056, 0, "#b"+cm.getPlayer().getName()+"#k 님에게 #i"+item.getItemId()+" "+item.getQuantity()+"개를##b(#t"+item.getItemId()+"#)#k을(를) 선물받으셨습니다. 인벤토리를 확인해보세요.", "00 00", 0));
			cm.sendOk("#b"+name + "#k 님에게 #i"+item.getItemId()+"##b(#t"+item.getItemId()+"#)#k을(를) 보냈습니다.");
			cm.gainMeso(-1000000)
			cm.dispose();
			}else {
				cm.sendOk("자기 자신에게는 선물할수 없습니다.");
				cm.dispose();
			}
			}else {
				cm.sendOk("메소가 부족합니다.");
				cm.dispose();
			}
			}else {
				cm.sendOk("가지고 있는 수 보다 많습니다.");
				cm.dispose();
			}
		}
	}
}	