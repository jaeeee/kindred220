

importPackage(Packages.constants);

var status = 0;
var inv_width = Array(1, 5);
var inv_length;
var selected;
var slot_width = Array();
var slot_length = Array();
var statsSel;
var chance = Math.floor(Math.random()*15+1);
var chancea = Math.floor(Math.random()*15+1);
var chanceb = Math.floor(Math.random()*15+1);

var chance_select;
var chanceb_select;
var chancec_select;


var chance_one = Math.random()*17+5;
var chance_two = Math.random()*20+10;
var chance_three = Math.random()*2500+500;
var chance_four = Math.random()*3+2;
var chance_five = Math.random()*80+20;

var chancea_one = Math.random()*17+5;
var chancea_two = Math.random()*20+10;
var chancea_three = Math.random()*2500+500;
var chancea_four = Math.random()*3+2;
var chancea_five = Math.random()*80+20;

var chanceb_one = Math.random()*17+5;
var chanceb_two = Math.random()*20+10;
var chanceb_three = Math.random()*2500+500;
var chanceb_four = Math.random()*3+2;
var chanceb_five = Math.random()*80+20;


var cost = 2800;

if (chance == 1 || chance == 2 || chance == 14 || chance == 15) {
	chance_select = chance_one-chance_one%1;
} else if (chance > 2 && chance < 9) {
	chance_select = chance_two-chance_two%1;
} else if (chance > 8 && chance<11) {
	chance_select = chance_three-chance_three%1;
} else if (chance == 11) {
	chance_select = chance_four-chance_four%1;
} else if (chance == 12 || chance == 13) {
	chance_select = chance_five-chance_five%1;
}

if (chancea == 1 || chancea == 2 ||chancea == 14 || chancea == 15) {
	chancea_select = chancea_one-chancea_one%1;
} else if (chancea > 2 && chancea < 9) {
	chancea_select = chancea_two-chancea_two%1;
} else if (chancea > 8 && chancea<11) {
	chancea_select = chancea_three-chancea_three%1;
} else if (chancea == 11) {
	chancea_select = chancea_four-chancea_four%1;
} else if (chancea == 12 || chancea == 13) {
	chancea_select = chancea_five-chancea_five%1;
}

if (chanceb == 1 || chanceb == 2|| chanceb == 14|| chanceb == 15) {
	chanceb_select = chanceb_one-chanceb_one%1;
} else if (chanceb > 2 && chanceb < 9) {
	chanceb_select = chanceb_two-chanceb_two%1;
} else if (chanceb > 8 && chanceb<11) {
	chanceb_select = chanceb_three-chanceb_three%1;
} else if (chanceb == 11) {
	chanceb_select = chanceb_four-chanceb_four%1;
} else if (chanceb == 12 || chanceb == 13) {
	chanceb_select = chanceb_five-chanceb_five%1;
}

var status = 0;

function start() {									
	status = -1;
	action (1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
	cm.dispose();
	return;
	}										
	if (mode == 0) {
	status --;
	}
	if (mode == 1) {
	status++;
	}

	if (status == 0) {
var j_coin = cm.itemQuantity(4310057);
		var ask = "어서오세요. 강화 시스템을 이용하러 오신건가요?\r\n";
		ask += "#Cgray#강화 한번 시도시 11주년 코인 100개가 소모됩니다.\r\n";
		ask += "#L3##b강화 시스템이란?#k\r\n"			
		ask += "#L1##b강화 시스템 이용#k";
		cm.sendSimple(ask);
	} else if (status == 1){
		sel = selection;
		if (sel == 1){
		var ok = false;
		var option = "강화할 아이템을 선택해 주세요.\r\n#b";
		for (var x = 0; x < inv_width.length; x++) {
			var inv = cm.getInventory(inv_width[x]);
			for (var i = 0; i <= inv.getSlotLimit(); i++) {
				if (x == 0) {
					slot_width.push(i);
				} else {
					slot_length.push(i);
				}
				var it = inv.getItem(i);
				if (it == null) {
					continue;
				}
				
				var itemid = it.getItemId();
				if (cm.isCash(it.getItemId())) {
				var itemid = 0;
				}else{
				var itemid = it.getItemId();
				}
				if (!GameConstants.isEquip(itemid)) {
					continue;
				}
				ok = true;
				option += "#L" + (inv_width[x] * 1000 + i) + "##v" + itemid + "##t" + itemid + "##l\r\n";
			}
		}
		if (!ok) {
			cm.sendOk("아이템이 없네요. 혹시 착용하고 계신건 아닌지요.");
			cm.dispose();
			return;
		}
		cm.sendSimple(option + "#k");
		} else if (sel == 2) {
			cm.sendOk("강화 시스템을 이용해주셔서 감사합니다.");
			cm.dispose();
		} else if (sel == 3) {
			cm.sendOk("페니르스토리의 새로운 강화 시스템은 기존 주문서와는 비교가 안되는 강력한 시스템입니다. 아이템 강화시 ( #e힘, 민첩, 지력, 운#n ) 등 만 강화될 뿐만 아니라, 랜덤 확률로 ( #e공격력, 방어력, 업그레이드 가능 횟수, HP, MP, 회피율, 명즁률, 스피드, 점프력#n )#k 등 부가적인 옵션을 아주 큰 폭으로 3가지를 얻을 수 있습니다.\r\n\r\n아이템 강화에 필요한 10주년 코인은 파티 플레이 컨텐츠를 통해 획득 가능합니다.");
			cm.dispose();
		}
	} else if (status == 2) {
		inv_length = selection / 1000;
		selected = selection % 1000;
		var inzz = cm.getInventory(inv_length);
		if (inv_length == inv_width[0]) {
			statsSel = inzz.getItem(slot_width[selected]);
		} else {
			statsSel = inzz.getItem(slot_length[selected]);
		}
		if (statsSel == null) {
			cm.sendOk("에러입니다. 다시 시도해주세요.");
			cm.dispose();
			return;
		}
		var option = statsSel;
		var options = "#e선택한 아이템\r\n#n\r\n#i" + option.getItemId() + "#(#t" + option.getItemId() + "#)\r\n\r\n#e아이템의 옵션#n#k\r\r\n\n\r\n";
		options += "#e업그레이드 가능 횟수 : #n" + option.getUpgradeSlots() + "\r\n";
		options += "#e착용가능 레벨 : #n" + option.getLevel() + "\r\n";
		if (option.getStr() == 0 && option.getStr()/10 < 1) {
		var Str = "0000";
		} else if (option.getStr()/10 >= 1 && option.getStr()/10 < 10) {
		Str = "00"+option.getStr()+"";
		} else if (option.getStr() != 0 && option.getStr()/10 < 1){
		Str = "000"+option.getStr()+"";
		} else if (option.getStr()/10 >= 10 && option.getStr()/10 < 100){
		Str = "0"+option.getStr()+"";
		} else {
		Str = option.getStr();
		}
		options += "#eＳＴＲ : #n" + Str + "　/　";


		if (option.getDex() == 0 && option.getDex()/10 < 1) {
		var Dex = "0000";
		} else if (option.getDex()/10 >= 1 && option.getDex()/10 < 10) {
		Dex = "00"+option.getDex()+"";
		} else if (option.getDex() != 0 && option.getDex()/10 < 1){
		Dex = "000"+option.getDex()+"";
		} else if (option.getDex()/10 >= 10 && option.getDex()/10 < 100){
		Dex = "0"+option.getDex()+"";
		} else {
		Dex = option.getDex();
		}
		options += "#eＤＥＸ : #n" + Dex + "\r\n";


		if (option.getInt() == 0 && option.getInt()/10 < 1) {
		var Int = "0000";
		} else if (option.getInt()/10 >= 1 && option.getInt()/10 < 10) {
		Int = "00"+option.getInt()+"";
		} else if (option.getInt() != 0 && option.getInt()/10 < 1){
		Int = "000"+option.getInt()+"";
		} else if (option.getInt()/10 >= 10 && option.getInt()/10 < 100){
		Int = "0"+option.getInt()+"";
		} else {
		Int = option.getInt();
		}
		options += "#eＩＮＴ : #n" + Int + "　/　";


		if (option.getLuk() == 0 && option.getLuk()/10 < 1) {
		var Luk = "0000";
		} else if (option.getLuk()/10 >= 1 && option.getLuk()/10 < 10) {
		Luk = "00"+option.getLuk()+"";
		} else if (option.getLuk() != 0 && option.getLuk()/10 < 1){
		Luk = "000"+option.getLuk()+"";
		} else if (option.getLuk()/10 >= 10 && option.getLuk()/10 < 100){
		Luk = "0"+option.getLuk()+"";
		} else {
		Luk = option.getLuk();
		}
		options += "#eＬＵＫ : #n" + Luk + "\r\n";


		if (option.getHp() == 0 && option.getHp()/10 < 1) {
		var Hp = "0000";
		} else if (option.getHp()/10 >= 1 && option.getHp()/10 < 10) {
		Hp = "0"+option.getHp()+"";
		} else if (option.getHp() != 0 && option.getHp()/10 < 1){
		Hp = "00"+option.getHp()+"";
		} else {
		Hp = option.getHp();
		}
		options += "#eＨＰ　 : #n" + Hp + "　/　"; 

		if (option.getMp() == 0 && option.getMp()/10 < 1) {
		var Mp = "0000";
		} else if (option.getMp()/10 >= 1 && option.getMp()/10 < 10) {
		Mp = "0"+option.getMp()+"";
		} else if (option.getMp() != 0 && option.getMp()/10 < 1){
		Mp = "00"+option.getMp()+"";
		} else {
		Mp = option.getMp();
		}
		options += "#eＭＰ　 : #n" + Mp + "\r\n"; 


		if (option.getWatk() == 0 && option.getWatk()/10 < 1) {
		var Watk = "0000";
		} else if (option.getWatk()/10 >= 1 && option.getWatk()/10 < 10) {
		Watk = "00"+option.getWatk()+"";
		} else if (option.getWatk() != 0 && option.getWatk()/10 < 1){
		Watk = "000"+option.getWatk()+"";
		} else if (option.getWatk()/10 >= 10 && option.getWatk()/10 < 100){
		Watk = "0"+option.getWatk()+"";
		} else {
		Watk = option.getWatk();
		}
		options += "#e공격력 : #n" + Watk + "　/　"; 


		if (option.getMatk() == 0 && option.getMatk()/10 < 1) {
		var Matk = "0000";
		} else if (option.getMatk()/10 >= 1 && option.getMatk()/10 < 10) {
		Matk = "00"+option.getMatk()+"";
		} else if (option.getMatk() != 0 && option.getMatk()/10 < 1){
		Matk = "000"+option.getMatk()+"";
		} else if (option.getMatk()/10 >= 10 && option.getMatk()/10 < 100){
		Matk = "0"+option.getMatk()+"";
		} else {
		Matk = option.getMatk();
		}
		options += "#e마력　 : #n" + Matk + "\r\n";

		if (option.getWdef() == 0 && option.getWdef()/10 < 1) {
		var Wdef = "0000";
		} else if (option.getWdef()/10 >= 1 && option.getWdef()/10 < 10) {
		Wdef = "00"+option.getWdef()+"";
		} else if (option.getWdef() != 0 && option.getWdef()/10 < 1){
		Wdef = "000"+option.getWdef()+"";
		} else if (option.getWdef()/10 >= 10 && option.getWdef()/10 < 100){
		Wdef = "0"+option.getWdef()+"";
		} else {
		Wdef = option.getWdef();
		}
		options += "#e물방　 : #n" + Wdef + "　/　";


		if (option.getMdef() == 0 && option.getMdef()/10 < 1) {
		var Mdef = "0000";
		} else if (option.getMdef()/10 >= 1 && option.getMdef()/10 < 10) {
		Mdef = "00"+option.getMdef()+"";
		} else if (option.getMdef() != 0 && option.getMdef()/10 < 1){
		Mdef = "000"+option.getMdef()+"";
		} else if (option.getMdef()/10 >= 10 && option.getMdef()/10 < 100){
		Mdef = "0"+option.getMdef()+"";
		} else {
		Mdef = option.getMdef();
		}
		options += "#e마방　 : #n" + Mdef + "\r\n";


		if (option.getAcc() == 0 && option.getAcc()/10 < 1) {
		var Acc = "0000";
		} else if (option.getAcc()/10 >= 1 && option.getAcc()/10 < 10) {
		Acc = "00"+option.getAcc()+"";
		} else if (option.getAcc() != 0 && option.getAcc()/10 < 1){
		Acc = "000"+option.getAcc()+"";
		} else if (option.getAcc()/10 >= 10 && option.getAcc()/10 < 100){
		Acc = "0"+option.getAcc()+"";
		} else {
		Acc = option.getAcc();
		}
		options += "#e명중률 : #n" + Acc + "　/　";


		if (option.getAvoid() == 0 && option.getAvoid()/10 < 1) {
		var Avoid = "0000";
		} else if (option.getAvoid()/10 >= 1 && option.getAvoid()/10 < 10) {
		Avoid = "00"+option.getAvoid()+"";
		} else if (option.getAvoid() != 0 && option.getAvoid()/10 < 1){
		Avoid = "000"+option.getAvoid()+"";
		} else if (option.getAvoid()/10 >= 10 && option.getAvoid()/10 < 100){
		Avoid = "0"+option.getAvoid()+"";
		} else {
		Avoid = option.getAvoid();
		}
		options += "#e회피율 : #n" + Avoid + "\r\n";


		//options += "#e손재주 : #n" + option.getHands() + "\r\n";


		if (option.getSpeed() == 0 && option.getSpeed()/10 < 1) {
		var Speed = "0000";
		} else if (option.getSpeed()/10 >= 1 && option.getSpeed()/10 < 10) {
		Speed = "00"+option.getSpeed()+"";
		} else if (option.getSpeed() != 0 && option.getSpeed()/10 < 1){
		Speed = "000"+option.getSpeed()+"";
		} else if (option.getSpeed()/10 >= 10 && option.getSpeed()/10 < 100){
		Speed = "0"+option.getSpeed()+"";
		} else {
		Speed = option.getSpeed();
		}
		options += "#e이속　 : #n" + Speed + "　/　";


		if (option.getJump() == 0 && option.getJump()/10 < 1) {
		var Jump = "0000";
		} else if (option.getJump()/10 >= 1 && option.getJump()/10 < 10) {
		Jump = "00"+option.getJump()+"";
		} else if (option.getJump() != 0 && option.getJump()/10 < 1){
		Jump = "000"+option.getJump()+"";
		} else if (option.getJump()/10 >= 10 && option.getJump()/10 < 100){
		Jump = "0"+option.getJump()+"";
		} else {
		Jump = option.getJump();
		}
		options += "#e점프력 : #n" + Jump + "\r\n\r\n";



		if (option.getViciousHammer() == 1) {
		var vicious = "재련";
		} else {
		vicious = "미재련";
		} 
		options += "#e황망재련 여부 : #n" +vicious + "\r\n";
		options += "#e가위 사용 가능 횟수 : #n" + option.getFire() + "\r\n";
		cm.sendNext(options);	
	} else if (status == 3){

		option = statsSel;
		var na = option.getOwner();
		var whatup;
		if (cm.haveItem(4310119, 100)) {
			option.setOwner(na=="일반"?na:na=="하급"?na:na=="중급"?na:na=="상급"?na:na=="최상급"?na:na=="언리미티드"?na:cm.getPlayer().getName());
		if (option.getFire() < 18) {
		option.setFire(option.getFire() + 3);
		} else {
		option.setFire(20);
		}
		switch(chance){
       			case 1:
       				option.setWatk(option.getWatk() + chance_one);
				var whatup = "공격력";
 				break;
       			case 2:
 				option.setMatk(option.getMatk() +chance_one);
				var whatup = "마력";
 				break;
 			case 3:
 				option.setStr(option.getStr() + chance_two);
				var whatup = "ＳＴＲ";
 				break;
 			case 4:
 				option.setDex(option.getDex() + chance_two);
				var whatup = "ＤＥＸ";
 				break;
 			case 5:
 				option.setLuk(option.getLuk() + chance_two);
				var whatup = "ＬＵＫ";
 				break;
 			case 6:
 				option.setInt(option.getInt() + chance_two);
				var whatup = "ＩＮＴ";
 				break;
 			case 7:
 				option.setJump(option.getJump() + chance_two);
				var whatup = "점프력";
 				break;
 			case 8:
 				option.setSpeed(option.getSpeed() + chance_two);
				var whatup = "스피드";
 				break;
 			case 9:
 				option.setMp(option.getMp() + chance_three);
				var whatup = "ＭＰ";
 				break;
 			case 10:
 				option.setHp(option.getHp() + chance_three);
				var whatup = "ＨＰ";
 				break;
 			case 11:
 				option.setUpgradeSlots(option.getUpgradeSlots() + chance_four);
				var whatup = "업그레이드 가능 횟수";
 				break;
 			case 12:
 				option.setAcc(option.getAcc() + chance_five);
				var whatup = "명중치";
 				break;
 			case 13:
 				option.setAvoid(option.getAvoid() + chance_five);
				var whatup = "회피치";
 				break;
       			case 14:
       				option.setWatk(option.getWatk() + chance_one);
				var whatup = "공격력";
 				break;
       			case 15:
 				option.setMatk(option.getMatk() +chance_one);
				var whatup = "마력";
 				break;
 			default:
				
   		}
		switch(chancea){
       			case 1:
       				option.setWatk(option.getWatk() + chancea_one);
				var whatupa = "공격력";
 				break;
       			case 2:
 				option.setMatk(option.getMatk() +chancea_one);
				var whatupa = "마력";
 				break;
 			case 3:
 				option.setStr(option.getStr() + chancea_two);
				var whatupa = "ＳＴＲ";
 				break;
 			case 4:
 				option.setDex(option.getDex() + chancea_two);
				var whatupa = "ＤＥＸ";
 				break;
 			case 5:
 				option.setLuk(option.getLuk() + chancea_two);
				var whatupa = "ＬＵＫ";
 				break;
 			case 6:
 				option.setInt(option.getInt() + chancea_two);
				var whatupa = "ＩＮＴ";
 				break;
 			case 7:
 				option.setJump(option.getJump() + chancea_two);
				var whatupa = "점프력";
 				break;
 			case 8:
 				option.setSpeed(option.getSpeed() + chancea_two);
				var whatupa = "스피드";
 				break;
 			case 9:
 				option.setMp(option.getMp() + chancea_three);
				var whatupa = "ＭＰ";
 				break;
 			case 10:
 				option.setHp(option.getHp() + chancea_three);
				var whatupa = "ＨＰ";
 				break;
 			case 11:
 				option.setUpgradeSlots(option.getUpgradeSlots() + chancea_four);
				var whatupa = "업그레이드 가능 횟수";
 				break;
 			case 12:
 				option.setAcc(option.getAcc() + chancea_five);
				var whatupa = "명중치";
 				break;
 			case 13:
 				option.setAvoid(option.getAvoid() + chancea_five);
				var whatupa = "회피치";
 				break;
       			case 14:
       				option.setWatk(option.getWatk() + chancea_one);
				var whatupa = "공격력";
 				break;
       			case 15:
 				option.setMatk(option.getMatk() +chancea_one);
				var whatupa = "마력";
 				break;
 			default:
				
   		}
		switch(chanceb){
       			case 1:
       				option.setWatk(option.getWatk() + chanceb_one);
				var whatupb = "공격력";
 				break;
       			case 2:
 				option.setMatk(option.getMatk() +chanceb_one);
				var whatupb = "마력";
 				break;
 			case 3:
 				option.setStr(option.getStr() + chanceb_two);
				var whatupb = "ＳＴＲ";
 				break;
 			case 4:
 				option.setDex(option.getDex() + chanceb_two);
				var whatupb = "ＤＥＸ";
 				break;
 			case 5:
 				option.setLuk(option.getLuk() + chanceb_two);
				var whatupb = "ＬＵＫ";
 				break;
 			case 6:
 				option.setInt(option.getInt() + chanceb_two);
				var whatupb = "ＩＮＴ";
 				break;
 			case 7:
 				option.setJump(option.getJump() + chanceb_two);
				var whatupb = "점프력";
 				break;
 			case 8:
 				option.setSpeed(option.getSpeed() + chanceb_two);
				var whatupb = "스피드";
 				break;
 			case 9:
 				option.setMp(option.getMp() + chanceb_three);
				var whatupb = "ＭＰ";
 				break;
 			case 10:
 				option.setHp(option.getHp() + chanceb_three);
				var whatupb = "ＨＰ";
 				break;
 			case 11:
 				option.setUpgradeSlots(option.getUpgradeSlots() + chanceb_four);
				var whatupb = "업그레이드 가능 횟수";
 				break;
 			case 12:
 				option.setAcc(option.getAcc() + chanceb_five);
				var whatupb = "명중치";
 				break;
 			case 13:
 				option.setAvoid(option.getAvoid() + chanceb_five);
				var whatupb = "회피치";
 				break;
       			case 14:
       				option.setWatk(option.getWatk() + chanceb_one);
				var whatupb = "공격력";
 				break;
       			case 15:
 				option.setMatk(option.getMatk() +chanceb_one);
				var whatupb = "마력";
 				break;
 			default:
				
   		}

				cm.fakeRelog();
				cm.updateChar();
			if (chance < 16){
				cm.sendOk("#e강화가 적용된 아이템#n\r\n\r\n#i"+statsSel.getItemId()+"#\r\n\r\n#e강화된 옵션\r\n\r\n#n#e"+whatup+"#n : "+chance_select+"\r\n#n#e"+whatupa+"#n : "+chancea_select+"\r\n#n#e"+whatupb+"#n : "+chanceb_select+"");
				cm.getPlayer().dropMessage(5, "축하합니다! 아이템 강화를 성공했습니다!");
				cm.getPlayer().dropMessage(5, ""+whatup+"이(가) "+chance_select+"만큼 증가했습니다!");
				cm.getPlayer().dropMessage(5, ""+whatupa+"이(가) "+chancea_select+"만큼 증가했습니다!");
				cm.getPlayer().dropMessage(5, ""+whatupb+"이(가) "+chanceb_select+"만큼 증가했습니다!");
				cm.gainItem(4310119, -100);
				cm.dispose();
			} else if (chance >= 16){
				cm.sendOk("아쉽게도 아이템 강화를 실패하셨습니다.");
				cm.getPlayer().dropMessage(5, "아이템 강화를 실패했습니다!");
				cm.gainItem(4310119, -100);
				cm.dispose();
			}
			} else {
				cm.sendOk("#b10주년 코인#k이 부족합니다.");
				cm.dispose();
			}

		} else {
		cm.dispose();
	}
}





