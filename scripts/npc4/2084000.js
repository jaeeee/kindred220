importPackage(Packages.constants);
var status = 0;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();
var slot_2 = Array();
var statsSel;

function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 1) {
		var a = Array(1,2,3);
		var b = 4;
		a.push(b);
		var txt = "아이템의 옵션을 초기화하고 싶으신가요?\r\n\r\n#r※초기화는 5000만메소가 필요합니다.#k\r\n";
		txt += "#b#L1#네. 아이템의 옵션을 초기화 해주세요.\r\n";
		txt += "#L2#아니요. 다음에 이용하겠습니다.";
		cm.sendSimple(txt);
	} else if (status == 2) {
		var ok = false;
		var selStr = "초기화를 원하는 아이템을 골라주세요. \r\n혹시 착용하시고 있으시면 착용 해제하신 후에 말을걸어주세요.\r\n\r\n#r※초기화는 1000만메소가 필요합니다.#k\r\n";
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
				if (cm.isCash(it.getItemId())){
				var itemid = 0;
				}else{
				var itemid = it.getItemId();
				}
				
				if (selection == 1){
				if (!GameConstants.isEquip(itemid)) {
					continue;
				}
				}else if (selection == 2){
					continue;
				}
				ok = true;
				selStr += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
			}
		}
		if (!ok && selection == 1) {
			cm.sendOk("장비아이템이 없는데요? 혹시 착용하고 계신건 아닌가요?");
			cm.dispose();
			return;
		}
 		if (selection == 1){
		if (cm.getMeso()>=50000000){
		cm.sendSimple(selStr + "#k");
		}else{
		cm.sendOk("메소가 부족합니다");
		cm.dispose();
		}
		}else if (selection == 2){
		cm.sendOk("이용해주셔서 감사합니다.");
		cm.dispose();
		}
	} else if (status == 3) {
		invv = selection / 1000;
		selected = selection % 1000;
		var inzz = cm.getInventory(invv);
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
		var item = statsSel.getItemId();
		if(cm.isCash(item)){
		cm.sendOk("캐쉬아이템은 초기화를 할 수 없습니다.");
		}else{
		cm.sendOk("초기화 할 아이템이 #b#i"+statsSel.getItemId()+"#(#z"+statsSel.getItemId()+"#)#k 맞습니까?");
		}
	} else if (status == 4) {
		cm.gainItem(statsSel.getItemId(),-1);
		cm.gainItem(statsSel.getItemId(),1);
		//cm.gainPotentialItem(statsSel.getItemId(),1,grade,thing,potential_1,potential_2,potential_3);
		//var option = statsSel;
		//var grade = option.getLines();
		//var thing = option.getState();
		//var potential_1 = option.getPotential1();
		//var potential_2 = option.getPotential2();
		//var potential_3 = option.getPotential3();
		//cm.gainPotentialItem(statsSel.getItemId(),1,grade,thing,potential_1,potential_2,potential_3);
		cm.gainMeso(-50000000);
		cm.sendOk("#b#i"+statsSel.getItemId()+"#(#z"+statsSel.getItemId()+"#)#k 의 초기화가 성공적으로 완료되었습니다.");		
		cm.dispose();
	}
}
