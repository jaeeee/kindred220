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
		var txt = "�������� �ɼ��� �ʱ�ȭ�ϰ� �����Ű���?\r\n\r\n#r���ʱ�ȭ�� 2000���޼Ұ� �ʿ��մϴ�.#k\r\n";
		txt += "#b#L1#��. �������� �ɼ��� �ʱ�ȭ ���ּ���.\r\n";
		txt += "#L2#�ƴϿ�. ������ �̿��ϰڽ��ϴ�.";
		cm.sendSimple(txt);
	} else if (status == 2) {
		var ok = false;
		var selStr = "�ʱ�ȭ�� ���ϴ� �������� ����ּ���. \r\nȤ�� �����Ͻð� �����ø� ���� �����Ͻ� �Ŀ� �����ɾ��ּ���.\r\n\r\n#r���ʱ�ȭ�� 2000���޼Ұ� �ʿ��մϴ�.#k\r\n";
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
			cm.sendOk("���������� ���µ���? Ȥ�� �����ϰ� ��Ű� �ƴѰ���?");
			cm.dispose();
			return;
		}
 		if (selection == 1){
		if (cm.getMeso()>=20000000){
		cm.sendSimple(selStr + "#k");
		}else{
		cm.sendOk("�޼Ұ� �����մϴ�");
		cm.dispose();
		}
		}else if (selection == 2){
		cm.sendOk("�̿����ּż� �����մϴ�.");
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
		cm.sendOk("ĳ���������� �ʱ�ȭ�� �� �� �����ϴ�.");
		}else{
		cm.sendOk("�ʱ�ȭ �� �������� #b#i"+statsSel.getItemId()+"#(#z"+statsSel.getItemId()+"#)#k �½��ϱ�?");
		}
	} else if (status == 4) {
		cm.gainItem(statsSel.getItemId(),-1);
		cm.gainItem(statsSel.getItemId(),1);
		cm.gainMeso(-20000000);
		cm.sendOk("#b#i"+statsSel.getItemId()+"#(#z"+statsSel.getItemId()+"#)#k �� �ʱ�ȭ�� ���������� �Ϸ�Ǿ����ϴ�.");		
		cm.dispose();
	}
}
