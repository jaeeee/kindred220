
importPackage(Packages.client.items);
importPackage(Packages.server.items);
importPackage(Packages.constants);

var arr = new Array(1212063,1222058,1232057,1242060,1242061,1302275,1312153,1322203,1332225,1342082,1362090,1382208,1402196,1412135,1422140,1432167,1442223,1452205,1462193,1472214,1482168,1492179,1522094,1532098);

function setItem(slot,stat,name){
	cm.getEquip(slot).setOwner(name);
	cm.getEquip(slot).setDownLevel(stat);;
	cm.getEquip(slot).setBossDamage(stat);
	cm.getEquip(slot).setAllStatP(stat);
	cm.getEquip(slot).setAllDamageP(stat);
}

function start() {
	var st = "구매하실 아이템을 골라주세요.\r\n\r\n#b현재 후원포인트 : "+cm.getRC()+"\r\n";
	st += "#L1#현재 소지중인 아이템을 업그레이드 하고 싶습니다.\r\n\r\n";
	for(var i = 0;i<arr.length;i++){
		st += "#L"+arr[i]+"##b#i"+arr[i]+"# #z"+arr[i]+"#\r\n";
	}
	cm.sendSimple(st);
}

function itemCheck() {
	for(var i=0;arr.length;i++){
		if(cm.haveItem(arr[i])){return true;}			
	}
	for(var i=0;arr.length;i++){
		if(!cm.haveItem(arr[i])){return false;}			
	}
}

var status = -1;
var item;
var stat;
var name;
var cost;
var sel;
var slot = -1;
var upgrade = 0;
var grade;
var next;

function action(m,t,s){
	m==1?status++:m==0?status--||cm.dispose():cm.dispose();
	if(status == 0){
		sel = s;
		if(s == 1){
			var str = "소지중인 아이템 목록 입니다.\r\n";
			for(var i=1;i < cm.getInventory(1).getSlotLimit(); i++){
				if(cm.getEquip(i)){
					for(var k=0;k<arr.length;k++){
						if(cm.haveItem(arr[k])){
							if(cm.getEquip(i).getItemId() == arr[k]){
								str += "#L"+i+"#";
								str += "#i"+cm.getEquip(i).getItemId()+"#";
								str += "\t#b(#z"+cm.getEquip(i).getItemId()+"#)";
								str += "\t#k#e등급 : "+cm.getEquip(i).getOwner()+"#n\r\n";
								break;
							}
						}
					}
				}
			}
			if(str.equals("소지중인 아이템 목록 입니다.\r\n")){
				cm.sendOk("#r현재 업그레이드 가능한 아이템이 없습니다.");
				cm.dispose();	
			}else{
				cm.sendSimple(str);

			}
		}else{
			item = s;
			var t="#b능력치 - (올스텟/보스데미지/총데미지/착용감소레벨)#k\r\n";
			t+="일반 옵션#k#n\t ─  (10% / 10% / 10% / 10)\r\n";
			t+="#b하급 옵션#k#n\t ─  (20% / 20% / 20% / 20)\r\n";
			t+="#r중급 옵션#k#n\t ─  (30% / 30% / 30% / 30)\r\n";
			t+="#e상급 옵션#k#n\t─  (40% / 40% / 40% / 40)\r\n";
			t+="#e#b최상급 옵션#k#n ─  (50% / 50% / 50% / 50)\r\n";
			t+="#e#r언리미티드#k#n  ─  (100% / 100% / 100% / 100)\r\n\r\n";
			t+="원하시는 아이템의 등급을 골라주세요.\r\n"
			t+="#L1#일반";
			t+="#L2##b하급";
			t+="#L3##r중급#k#n";
			t+="#L4##e상급#k";
			t+="#L5##e#b최상급#k#n";
			t+="#L10##e#r언리미티드#k#n";
			cm.sendSimple(t);
		}
	}else if(status == 1){
		if(sel != 1){
			s==1?name="일반":s==2?name="하급":s==3?name="중급":s==4?name="상급":s==5?name="최상급":name="언리미티드";
			stat = s*10;
			s!=10?cost = 10000+(stat*500):cost=65000;
			cm.sendYesNo("#b("+cost+")후원포인트#k로 #i"+item+"##b"+(name)+"(#z"+item+"#)#k를 구매하시겠습니까?");
		}else{
			slot = s*1000;
			grade = cm.getEquip(s).getOwner();
			var itemid = cm.getEquip(s).getItemId();
			grade=="일반"?next="하급":grade=="하급"?next="중급":grade=="중급"?next="상급":grade=="상급"?next="최상급":grade=="최상급"?next="언리미티드":next="cant";
			var euro = "";
			var ucost;
			next=="언리미티드"?ucost=30000:ucost=5000;
			next=="언리미티드"?euro="로":euro="으로";
			if(next != "cant"){
				cm.sendYesNo("#b("+grade+")#k#i"+itemid+"# #b(#z"+itemid+"#)#k를 #b("+next+")#k"+euro+" 업그레이드 하시겠습니까?\r\n\r\n#e업그레이드 비용 #n: #b"+ucost+"#k");
			}else{
				cm.sendOk("업그레이드가 불가능한 아이템입니다.");
				cm.dispose();
			}
		}
	}else if(status == 2){
		if(slot<1000){
		if(cm.canHold(item)){
			if(cm.getRC() >= cost){
				var Item = ItemInformation.getInstance().getEquipById(item);
				Item.setDownLevel(stat);
				Item.setBossDamage(stat);
				Item.setAllStatP(stat);
				Item.setAllDamageP(stat);
				Item.setOwner(name);
				InventoryManipulator.addFromDrop(cm.getC(), Item, false);
				cm.gainRC(-cost);
				cm.sendOk("구매하셨습니다.");
			}else{
				cm.sendOk("후원포인트가 부족합니다.");
			}
		}else{
			cm.sendOk("장비창이 부족합니다. 혹시 인벤토리가 부족하진 않은지 확인해주세요.");
		}
		}else{
			slot = slot/1000;
			grade=="최상급"?cost=30000:cost=5000;
			grade=="최상급"?stat=50:stat=10;
			setItem(slot,cm.getEquip(slot).getDownLevel()+stat, next);
			if(cm.getRC() >= cost){
				cm.gainRC(-cost);
				cm.fakeRelog();
				cm.updateChar();
				cm.sendOk("아이템을 성공적으로 업그레이드 하셨습니다.");
			}else{
				cm.sendOk("후원포인트가 부족합니다.");
			}
		}
		cm.dispose();
	}else{
		cm.dispose();
	}
}