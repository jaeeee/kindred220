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
		var txt = "�������� ���������ʴ´ٸ� ���� �̿����ּ���.\r\n";
		txt += "#L1##bĳ���������� �����ڽ��ϴ�.\r\n";
		txt += "#L2##b���������� �����ڽ��ϴ�.";
		cm.sendSimple(txt);
	} else if (status == 2) {
		var ok = false;
		var selStr = "��� �������� ����Ͻðھ��?\r\n";
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
				if (selection == 1){
				var itemid = it.getItemId();
				}else if (selection == 2){
				if (cm.isCash(it.getItemId())){
				var itemid = 0;
				}else{
				var itemid = it.getItemId();
				}
				}

				if (selection == 1){
				if (!cm.isCash(itemid)) {
					continue;
				}
				}else if (selection == 2){
				if (!GameConstants.isEquip(itemid)) {
					continue;
				}
				}
				ok = true;
				selStr += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
			}
		}
		if (!ok) {
			cm.sendOk("���� �������� ���°� ��������?");
			cm.dispose();
			return;
		}
		cm.sendSimple(selStr + "#k");
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
		cm.sendGetNumber("���� ������\r\n#v" + statsSel.getItemId() + "##t" + statsSel.getItemId() + "#.\r\n\r\n���� ������ �����ּ���.", 1, 1, statsSel.getQuantity());
	} else if (status == 4) {
		if (!cm.dropItem(selected, invv, selection)) {
			cm.sendOk("Error, please try again!");
		}
		cm.dispose();
	}
}
