importPackage(Packages.constants);
importPackage(Packages.server.items);
importPackage(Packages.tools.RandomStream);
var status = 0;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();
var slot_2 = Array();
var statsSel;
var jw_85 = Randomizer.rand(1,10);
var jw_105 = Randomizer.rand(1,10);
var jw_125 = Randomizer.rand(1,10);
var jw_150 = Randomizer.rand(1,10);
var gage = Randomizer.rand(5,25);
var pi = Randomizer.rand(1,10);
var chances_hd = Math.floor(Math.random()*100+1);
var chance_hd = Randomizer.rand(1,3);
var chances_hp = Math.floor(Math.random()*100+1);
var chance_hp = Randomizer.rand(1,3);
var chance_fv = Randomizer.rand(1,10);
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
		var percent = getFever() == -1 ? 0 : getFever()
		var show = getFever() >= 10 && getFever() < 20 ? "■□□□□□□□□□" : 
		getFever() >= 20 && getFever() < 30 ? "■■□□□□□□□□" : 
		getFever() >= 30 && getFever() < 40 ? "■■■□□□□□□□" :
		getFever() >= 40 && getFever() < 50 ? "■■■■□□□□□□" :
		getFever() >= 50 && getFever() < 60 ? "■■■■■□□□□□" :
		getFever() >= 60 && getFever() < 70 ? "■■■■■■□□□□" :
		getFever() >= 70 && getFever() < 80 ? "■■■■■■■□□□" :
		getFever() >= 80 && getFever() < 90 ? "■■■■■■■■□□" :
		getFever() >= 90 && getFever() < 100? "■■■■■■■■■□" : "□□□□□□□□□□";
		var txt = "이 곳에서 아이템을 분해할 수 있는 것 같다. 분해기 아래에는 작은 메모가 표시되어 있다.\r\n\r\n#r";
		txt += "　#fs12#①#fs11# Lv.75 이상의 장비 아이템만 분해 가능.\r\n";
		txt += "　#fs12#②#fs11# Lv.105 이상의 장비 아이템 분해시 #e#z4020009##n 획득 가능.\r\n";
		txt += "　#fs12#③#fs11# Lv.140 이상의 장비 아이템 분해시 #e#z4021021##n 획득 가능.\r\n#b";
		txt += "　#fs12#ⓞ#fs11# #e피버 보너스 게이지 : #fs12##n#b"+show+" #fs11#("+percent+"%)#fs12##k";
		txt += "\r\n\r\n어떻게 할까? 아이템을 분해해 볼까?\r\n";
		txt += "#b#L1#음…. 지금 당장 분해를 시작해보자.\r\n";
		txt += "#L2#느낌이 좋지 않아. 지금은 분해할 때가 아니야.";
		cm.sendSimpleS(txt, 2);
	} else if (status == 2) {
		var ok = false;
		var selStr = "분해할 아이템을 선택하자. #b75레벨 이상의 장비 아이템#k만 가능하다. 아이템 이름위에 마우스를 올려 놓으면 툴팁을 볼 수 있다.\r\n";
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
				selStr += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "# #z" + itemid + "##l\r\n";
			}
		}
		if (!ok && selection == 1) {
			cm.sendOkS("맞다…. 나 장비 아이템을 가지고 있지 않았지…!", 2);
			cm.dispose();
			return;
		}
 		if (selection == 1){
		cm.sendSimpleS(selStr + "#k", 2);
		}else if (selection == 2){
		cm.sendOkS("그래. 이건 완전 도박같은 행위야. 나중에 해봐야겠다.", 2);
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
		cm.sendOkS("캐시 아이템은 분해할 수 없군...", 2);
		cm.dispose();
		} else if (ItemInformation.getInstance().getReqLevel(item) < 75) {
		cm.sendOk("착용 레벨이 75 미만인 아이템은 분해할 수 없다는 메시지가 나온다.");
		cm.dispose();
		}else{
		cm.sendNextS("#b#i"+statsSel.getItemId()+"# #z"+statsSel.getItemId()+"##k 아이템을 정말로 분해할까? 아이템의 옵션에 상관 없이 결과는 똑같이 나올테고, 결과를 번복할 순 없겠지….", 2);
		}
	} else if (status == 4) {
		var item = statsSel.getItemId();
		var list = "4010000, 4010001, 4010002, 4010003, 4010004, 4010005, 4010006, 4010007, 4020000, 4020001, 4021002, 4020003, 4020004, 4020005, 4020006, 4020007, 4020008, 4004000, 4004001, 4004002, 4004003, 4004004"
		var list_fv  = "4011000, 4011001, 4011002, 4011003, 4011004, 4011005, 4011006, 4011008, 4021000, 4021001, 4021002, 4021003, 4021004, 4021005, 4021006, 4021007, 4021008, 4005000, 4005001, 4005002, 4005003, 4005004"
		var list_85  = list.split(",")[Math.floor(Math.random()*22)];
		var list_105 = list.split(",")[Math.floor(Math.random()*22)];
		var list_125 = list.split(",")[Math.floor(Math.random()*22)];
		var list_150 = list.split(",")[Math.floor(Math.random()*22)];
		var list_fvr = list_fv.split(",")[Math.floor(Math.random()*22)];
		setFever(getFever() + gage)
		var extract = "#b#i"+statsSel.getItemId()+"# #z"+statsSel.getItemId()+"##k 아이템을 분해하여 아래의 결과물이 나왔다.";
		extract += "\r\n\r\n#e#b　#fs12#ⓞ#fs11# #e분해 후 피버 보너스 게이지 : #r"+getFever()+"% #b("+gage+"% 상승)#n#fs12##k";
		extract += "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n";
			extract += "#b#i"+list_85+"# #z"+list_85+"# "+jw_85+"개\r\n";
			if(ItemInformation.getInstance().getReqLevel(item) >= 105) {
			extract += "#b#i"+list_105+"# #z"+list_105+"# "+jw_105+"개\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 125) {
			extract += "#b#i"+list_125+"# #z"+list_125+"# "+jw_125+"개\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 150) {
			extract += "#b#i"+list_150+"# #z"+list_150+"# "+jw_150+"개\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 105 && chances_hd < 5) {
			extract += "#b#i4020009# #z4020009# "+chance_hd+"개\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 140 && chances_hp < 5) {
			extract += "#b#i4021021# #z4021021# "+chance_hp+"개\r\n";
			}

			cm.gainItem(list_85, jw_85);
			if(ItemInformation.getInstance().getReqLevel(item) >= 105) {
			cm.gainItem(list_105, jw_105);
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 125) {
			cm.gainItem(list_125, jw_125);
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 150) {
			cm.gainItem(list_150, jw_150);
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 105 && chances_hd < 5) {
			cm.gainItem(4020009, chance_hd)
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 140 && chances_hp < 5) {
			cm.gainItem(4021021, chance_hp)
			}
		if (getFever() >= 100) {
			setFever(0);
			extract += "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# #e#r[피버 보너스]#k#n\r\n";
			extract += "#b#i"+list_fvr+"# #z"+list_fvr+"# "+chance_fv+"개\r\n";
			cm.gainItem(list_fvr, chance_fv);		
		};

		cm.gainItem(statsSel.getItemId(),-1);
		cm.sendOkS(extract, 2);		
		cm.dispose();
	}
}

function getFever() {
	return cm.getPlayer().getKeyValue2("fever");
}

function setFever(i) {
	cm.getPlayer().setKeyValue2("fever", i);
}