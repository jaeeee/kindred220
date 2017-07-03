importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client.items);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else{
	cm.dispose();
	return;
	}
	if (status == 0 && mode == 1) {
	var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"
	var chat ="���� �� �������� ������ �� �ִ� �� ���١�.#b\r\n\r\n"
	chat += "#r#e[���� ���� �� ����]#b#n\r\n";
	chat += "#L2#"+k+" #e����#n, #e����#n �� #eũ����Ż#n�� �����Ѵ�.#l\r\n\r\n\r\n"

	chat += "#r#e[�Ҹ� �� ǥâ ����]#b#n\r\n";
	chat += "#L0#"+k+" #eǥâ#n�� ���� �� �����Ѵ�.#l\r\n"
	chat += "#L1#"+k+" #e�Ҹ�#n�� ���� �� �����Ѵ�.#l\r\n"
	cm.sendSimpleS(chat, 2)
	}
	else if (status == 1 && mode == 1) {
	selectedType = selection;

	if (selectedType == 0){
	var items = new Array (2070000, 2070001, 2070002, 2070003, 2070004, 2070005, 2070006, 2070007, 2070023, 2070024);
	var selStr = "� ǥâ�� ������ ��������. ǥâ�� ������ ���� ���� Ƚ���� �ִ� �� ����.\r\n\r\n#b";
	selStr += "#e#r[�Ϲ� ���� ǥâ]#k#n\r\n";
	for (i = 0; i < 8; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[Ư�� ���� ǥâ]#k#n\r\n";
	for (i = 8; i < 10; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2);
	equip = true;
	}

	else if (selectedType == 1){ //glove upgrade
	var items = new Array (2330000, 2330001, 2330002, 2330003, 2330004, 2330005, 2330008);
	var selStr = "� �Ҹ��� ������ ��������. �Ҹ��� ������ ���� ���� Ƚ���� �ִ� �� ����.\r\n\r\n#b";
	selStr += "#e#r[�Ϲ� ���� �Ҹ�]#k#n\r\n";
	for (i = 0; i < 6; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[Ư�� ���� �Ҹ�]#k#n\r\n";
	for (i = 6; i < 7; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2);
	equip = true;

	}
	else if (selectedType == 2){ //material refine
	var items = new Array (4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 4005000, 4005001, 4005002, 4005003, 4005004);
	var selStr = "� ������ ����, ���� �Ǵ� ũ����Ż�� �������� ��������.\r\n\r\n#b";
	selStr += "#e#r[���� ����]#k#n\r\n";
	for (i = 0; i < 8; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[���� ����]#k#n\r\n";
	for (i = 8; i < 17; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[ũ����Ż ����]#k#n\r\n";
	for (i = 17; i < 22; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2)
		equip = false;
	}
	if (equip)
		status++;
	}
	else if (status == 2 && mode == 1) {
	selectedItem = selection;

		/* ���� ���� */

	if (selectedType == 2){
		var itemSet   = new Array (4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 4005000, 4005001, 4005002, 4005003, 4005004);
		var matSet    = new Array (4010000, 4010001, 4010002, 4010003, 4010004, 4010005, 4010006, 4010007, 4020000, 4020001, 4021002, 4020003, 4020004, 4020005, 4020006, 4020007, 4020008, 4004000, 4004001, 4004002, 4004003, 4004004);
		var matQtySet = new Array (3,       3,       3,       3,       3,       3,       3,       6,       5,       5,       5,       5,       5,       5,       5,       7,       7,       6,       6,       6,       6,       10);
		var costSet   = new Array (10000,   10000,   10000,   10000,   10000,   10000,   10000,   100000,  10000,   10000,   10000,   10000,   10000,   10000,   10000,   100000,  100000,  80000,   80000,   80000,   80000,   200000)
		item = itemSet[selectedItem];
		mats = matSet[selectedItem];
		matQty = matQtySet[selectedItem];
		cost = costSet[selectedItem];
	}
	cm.sendGetNumber("#b#i"+item+"# #z"+item+"##k�� ����ǲ�����? �׷��ٸ� �� ���� ����ðھ��?",1,1,1000)
	}
	else if (status == 3 && mode == 1) {
	if (equip)
	{
		selectedItem = selection;
		qty = 1;
	}
	else
		qty = selection;

		/* ǥâ ���� */
	if (selectedType == 1){
		var itemSet   = new Array(2330000, 2330001, 2330002, 2330003, 2330004, 2330005, 2330008);
		var matSet    = new Array(
					4011001,
					new Array(2330000, 4011001),
					new Array(2330000, 4011001),
					new Array(2330000, 4011001),
					new Array(2330000, 4005002, 4011002),
					new Array(2330000, 4005002, 4011000),
					new Array(2330005, 4011000, 4011001, 4005004, 4020009, 4310119)
				)

		var matQtySet = new Array(
					1,
					new Array(1, 3),
					new Array(1, 5),
					new Array(1, 10),
					new Array(1, 10, 5),
					new Array(1, 20, 20),
					new Array(1, 50, 50, 30, 50, 300)
				)

		var costSet   = new Array(0,
					  100000,
					  300000,
					  500000,
					  1000000,
					  2000000,
					  10000000
				);
		item = itemSet[selectedItem];
		mats = matSet[selectedItem];
		matQty = matQtySet[selectedItem];
		cost = costSet[selectedItem];
	}

	/* �Ҹ� ���� */
	else if (selectedType == 0){
		var itemSet   = new Array(2070000, 2070001, 2070002, 2070003, 2070004, 2070005, 2070006, 2070007, 2070023, 2070024);
		var matSet    = new Array(
					4011001,
					new Array(2070000, 4011000),
					new Array(2070000, 4011001),
					new Array(2070000, 4011001),
					new Array(2070000, 4011003),
					new Array(2070000, 4011008),
					new Array(2070004, 4011001),
					new Array(2070004, 4011003),
					new Array(2070007, 4005003, 4005004, 4020009, 4310119),
					new Array(2070005, 4005003, 4005004, 4020009)
				)

		var matQtySet = new Array(
					1,
					new Array(1, 3),
					new Array(1, 5),
					new Array(1, 10),
					new Array(1, 10),
					new Array(1, 10),
					new Array(1, 30),
					new Array(1, 20),
					new Array(1, 50, 30, 50, 300),
					new Array(1, 50, 30, 50)
				)

		var costSet   = new Array(0,
					  100000,
					  300000,
					  500000,
					  500000,
					  800000,
					  1000000,
					  1000000,
					  30000000,
					  30000000);
		item = itemSet[selectedItem];
		mats = matSet[selectedItem];
		matQty = matQtySet[selectedItem];
		cost = costSet[selectedItem];
	}

	var prompt = "����ڡ�. #b#z"+item+"# "+qty+"��#k�� ������� �Ʒ��� �ִ� ���� �����Ḧ �غ��ؾ� �ϴ±�. ��� �غ� �Ǿ��ֳ�?\r\n#b";
	if (mats instanceof Array){

		for(var i = 0; i < mats.length; i++){
//				if(cm.itemQuantity(mats[i]) < matQty[i]) {
				prompt += "\r\n#i"+mats[i]+"# #z"+mats[i]+"# (#r"+cm.itemQuantity(mats[i])+"�� #k/#b "+ matQty[i] * qty +"��)";
/*				} else {
				prompt += "\r\n#i"+mats[i]+"# #z"+mats[i]+"# (#b#e"+cm.itemQuantity(mats[i])+"�� #k#n/#b "+ matQty[i] * qty +"��)";
				}
*/		}
	}
	else {
		prompt += "\r\n#i"+mats+"# #z"+mats+"# " + matQty * qty + "��";
	}
		
	if (cost > 0)
			if(cost*qty != 0) {
		prompt += "\r\n#i4031138# #b"+cost * qty / 10000+"�� �޼�";
			}

	cm.sendYesNoS(prompt, 2);
	} else if (status == 4 && mode == 1) {
	var complete = false;
		
	if (cm.getMeso() < cost * qty) {
		cm.sendOk("�޼�#k �� ����� ���� �ִ°ǰ�? �ٽ� �ѹ� Ȯ���غ���.")
		cm.dispose();
		return;
	} else {
		if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++) {
			complete = cm.haveItem(mats[i], matQty[i] * qty);
			if (!complete) {
			break;
			}
		}
		} else {
		complete = cm.haveItem(mats, matQty * qty);
		}	
	}
			
	if (!cm.canHold(item)) {
		complete = false;
	}
	if (!complete)
		cm.sendOkS("��ᰡ ��� ���ų�, �κ��丮 ������ ������ �� ����. �����ᰡ �����ص� ���� �� ���ٰ� �ϴ±�.", 2);
	else {
		if (mats instanceof Array) {
		for (var i = 0; i < mats.length; i++){
			cm.gainItem(mats[i], -matQty[i] * qty);
		}
		}
		else
		cm.gainItem(mats, -matQty * qty);
					
		if (cost > 0)
		cm.gainMeso(-cost * qty);
				
		if (item == 4003000)//screws
		cm.gainItem(4003000, 15 * qty);
		else
		cm.gainItem(item, qty);
		cm.sendOk("�ھ�.. �� �ƴٱ�. ���� �Ϻ��� �������� ź�����ݾ�? �ٸ� �۾��� �ʿ��ϴٸ� �ٽ� ������ ã�ƿ���.");
	}
	cm.dispose();
	}
}