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
	var chat ="제련 및 아이템을 제작할 수 있는 것 같다….#b\r\n\r\n"
	chat += "#r#e[원석 제작 및 제련]#b#n\r\n";
	chat += "#L2#"+k+" #e광석#n, #e보석#n 및 #e크리스탈#n을 제련한다.#l\r\n\r\n\r\n"

	chat += "#r#e[불릿 및 표창 제작]#b#n\r\n";
	chat += "#L0#"+k+" #e표창#n을 제작 · 제련한다.#l\r\n"
	chat += "#L1#"+k+" #e불릿#n을 제작 · 제련한다.#l\r\n"
	cm.sendSimpleS(chat, 2)
	}
	else if (status == 1 && mode == 1) {
	selectedType = selection;

	if (selectedType == 0){
	var items = new Array (2070000, 2070001, 2070002, 2070003, 2070004, 2070005, 2070006, 2070007, 2070023, 2070024);
	var selStr = "어떤 표창을 만들지 선택하자. 표창의 종류에 따라 제작 횟수가 있는 것 같다.\r\n\r\n#b";
	selStr += "#e#r[일반 제련 표창]#k#n\r\n";
	for (i = 0; i < 8; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[특수 제련 표창]#k#n\r\n";
	for (i = 8; i < 10; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2);
	equip = true;
	}

	else if (selectedType == 1){ //glove upgrade
	var items = new Array (2330000, 2330001, 2330002, 2330003, 2330004, 2330005, 2330008);
	var selStr = "어떤 불릿을 만들지 선택하자. 불릿의 종류에 따라 제작 횟수가 있는 것 같다.\r\n\r\n#b";
	selStr += "#e#r[일반 제련 불릿]#k#n\r\n";
	for (i = 0; i < 6; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[특수 제련 불릿]#k#n\r\n";
	for (i = 6; i < 7; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2);
	equip = true;

	}
	else if (selectedType == 2){ //material refine
	var items = new Array (4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 4005000, 4005001, 4005002, 4005003, 4005004);
	var selStr = "어떤 종류의 광석, 보석 또는 크리스탈을 제련할지 선택하자.\r\n\r\n#b";
	selStr += "#e#r[광석 제련]#k#n\r\n";
	for (i = 0; i < 8; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[보석 제련]#k#n\r\n";
	for (i = 8; i < 17; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	selStr += "#e#r[크리스탈 제련]#k#n\r\n";
	for (i = 17; i < 22; selStr += "#b#L"+i+"##i"+items[i]+"# #z"+items[i]+"##l\r\n",i++); selStr += "\r\n\r\n";
	cm.sendSimpleS(selStr, 2)
		equip = false;
	}
	if (equip)
		status++;
	}
	else if (status == 2 && mode == 1) {
	selectedItem = selection;

		/* 제련 시작 */

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
	cm.sendGetNumber("#b#i"+item+"# #z"+item+"##k을 만드실껀가요? 그렇다면 몇 개를 만드시겠어요?",1,1,1000)
	}
	else if (status == 3 && mode == 1) {
	if (equip)
	{
		selectedItem = selection;
		qty = 1;
	}
	else
		qty = selection;

		/* 표창 제작 */
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

	/* 불릿 제작 */
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

	var prompt = "어디보자…. #b#z"+item+"# "+qty+"개#k를 만드려면 아래에 있는 재료와 수수료를 준비해야 하는군. 모두 준비가 되어있나?\r\n#b";
	if (mats instanceof Array){

		for(var i = 0; i < mats.length; i++){
//				if(cm.itemQuantity(mats[i]) < matQty[i]) {
				prompt += "\r\n#i"+mats[i]+"# #z"+mats[i]+"# (#r"+cm.itemQuantity(mats[i])+"개 #k/#b "+ matQty[i] * qty +"개)";
/*				} else {
				prompt += "\r\n#i"+mats[i]+"# #z"+mats[i]+"# (#b#e"+cm.itemQuantity(mats[i])+"개 #k#n/#b "+ matQty[i] * qty +"개)";
				}
*/		}
	}
	else {
		prompt += "\r\n#i"+mats+"# #z"+mats+"# " + matQty * qty + "개";
	}
		
	if (cost > 0)
			if(cost*qty != 0) {
		prompt += "\r\n#i4031138# #b"+cost * qty / 10000+"만 메소";
			}

	cm.sendYesNoS(prompt, 2);
	} else if (status == 4 && mode == 1) {
	var complete = false;
		
	if (cm.getMeso() < cost * qty) {
		cm.sendOk("메소#k 는 제대로 갖고 있는건가? 다시 한번 확인해보게.")
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
		cm.sendOkS("재료가 모두 없거나, 인벤토리 공간이 부족한 것 같다. 수수료가 부족해도 만들 수 없다고 하는군.", 2);
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
		cm.sendOk("자아.. 다 됐다구. 역시 완벽한 아이템이 탄생했잖아? 다른 작업도 필요하다면 다시 나에게 찾아오라구.");
	}
	cm.dispose();
	}
}