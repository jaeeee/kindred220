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
		var show = getFever() >= 10 && getFever() < 20 ? "�����������" : 
		getFever() >= 20 && getFever() < 30 ? "�����������" : 
		getFever() >= 30 && getFever() < 40 ? "�����������" :
		getFever() >= 40 && getFever() < 50 ? "�����������" :
		getFever() >= 50 && getFever() < 60 ? "�����������" :
		getFever() >= 60 && getFever() < 70 ? "�����������" :
		getFever() >= 70 && getFever() < 80 ? "�����������" :
		getFever() >= 80 && getFever() < 90 ? "�����������" :
		getFever() >= 90 && getFever() < 100? "�����������" : "�����������";
		var txt = "�� ������ �������� ������ �� �ִ� �� ����. ���ر� �Ʒ����� ���� �޸� ǥ�õǾ� �ִ�.\r\n\r\n#r";
		txt += "��#fs12#��#fs11# Lv.75 �̻��� ��� �����۸� ���� ����.\r\n";
		txt += "��#fs12#��#fs11# Lv.105 �̻��� ��� ������ ���ؽ� #e#z4020009##n ȹ�� ����.\r\n";
		txt += "��#fs12#��#fs11# Lv.140 �̻��� ��� ������ ���ؽ� #e#z4021021##n ȹ�� ����.\r\n#b";
		txt += "��#fs12#��#fs11# #e�ǹ� ���ʽ� ������ : #fs12##n#b"+show+" #fs11#("+percent+"%)#fs12##k";
		txt += "\r\n\r\n��� �ұ�? �������� ������ ����?\r\n";
		txt += "#b#L1#����. ���� ���� ���ظ� �����غ���.\r\n";
		txt += "#L2#������ ���� �ʾ�. ������ ������ ���� �ƴϾ�.";
		cm.sendSimpleS(txt, 2);
	} else if (status == 2) {
		var ok = false;
		var selStr = "������ �������� ��������. #b75���� �̻��� ��� ������#k�� �����ϴ�. ������ �̸����� ���콺�� �÷� ������ ������ �� �� �ִ�.\r\n";
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
			cm.sendOkS("�´١�. �� ��� �������� ������ ���� �ʾ�����!", 2);
			cm.dispose();
			return;
		}
 		if (selection == 1){
		cm.sendSimpleS(selStr + "#k", 2);
		}else if (selection == 2){
		cm.sendOkS("�׷�. �̰� ���� ���ڰ��� ������. ���߿� �غ��߰ڴ�.", 2);
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
		cm.sendOkS("ĳ�� �������� ������ �� ����...", 2);
		cm.dispose();
		} else if (ItemInformation.getInstance().getReqLevel(item) < 75) {
		cm.sendOk("���� ������ 75 �̸��� �������� ������ �� ���ٴ� �޽����� ���´�.");
		cm.dispose();
		}else{
		cm.sendNextS("#b#i"+statsSel.getItemId()+"# #z"+statsSel.getItemId()+"##k �������� ������ �����ұ�? �������� �ɼǿ� ��� ���� ����� �Ȱ��� �����װ�, ����� ������ �� ��������.", 2);
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
		var extract = "#b#i"+statsSel.getItemId()+"# #z"+statsSel.getItemId()+"##k �������� �����Ͽ� �Ʒ��� ������� ���Դ�.";
		extract += "\r\n\r\n#e#b��#fs12#��#fs11# #e���� �� �ǹ� ���ʽ� ������ : #r"+getFever()+"% #b("+gage+"% ���)#n#fs12##k";
		extract += "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n";
			extract += "#b#i"+list_85+"# #z"+list_85+"# "+jw_85+"��\r\n";
			if(ItemInformation.getInstance().getReqLevel(item) >= 105) {
			extract += "#b#i"+list_105+"# #z"+list_105+"# "+jw_105+"��\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 125) {
			extract += "#b#i"+list_125+"# #z"+list_125+"# "+jw_125+"��\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 150) {
			extract += "#b#i"+list_150+"# #z"+list_150+"# "+jw_150+"��\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 105 && chances_hd < 5) {
			extract += "#b#i4020009# #z4020009# "+chance_hd+"��\r\n";
			}
			if(ItemInformation.getInstance().getReqLevel(item) >= 140 && chances_hp < 5) {
			extract += "#b#i4021021# #z4021021# "+chance_hp+"��\r\n";
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
			extract += "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# #e#r[�ǹ� ���ʽ�]#k#n\r\n";
			extract += "#b#i"+list_fvr+"# #z"+list_fvr+"# "+chance_fv+"��\r\n";
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