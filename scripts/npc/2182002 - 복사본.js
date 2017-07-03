importPackage(Packages.client.items);
importPackage(Packages.server.items);

var arr = new Array(1212065,1222060,1232058,1242062,1242063,1302276,1312154,1322204,1332226,1342083,1362091,1372178,1382209,1402197,1412136,1422141,1432168,1442224,1452206,1462194,1472215,1482169,1492180,1522095,1532099);

function start() {

	var st = "구매하실 아이템을 골라주세요.\r\n\r\n#b현재 후원포인트 : "+cm.getRC()+"\r\n";
	if(cm.getPlayer().getGMLevel() == 6){
	st += "#L1#현재 아이템을 다음등급으로 업그레이드 하고 싶습니다.\r\n\r\n";
	}
	for(var i = 0;i<arr.length;i++){
		st += "#L"+arr[i]+"##b#i"+arr[i]+"# #z"+arr[i]+"#\r\n";
	}
	cm.sendSimple(st);
}

var status = -1;
var item;
var stat;
var name;
var cost;

function action(m,t,s){
	m==1?status++:m==0?status--||cm.dispose():cm.dispose();
	if(status == 0){
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
	}else if(status == 1){
		s==1?name="일반":s==2?name="하급":s==3?name="중급":s==4?name="상급":s==5?name="최상급":name="언리미티드";
		stat = s*10;
		s!=10?cost = 10000+(stat*500):cost=65000;
		cm.sendYesNo("#b("+cost+")후원포인트#k로 #i"+item+"##b"+(name)+"(#z"+item+"#)#k를 구매하시겠습니까?");
	}else if(status == 2){
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
		cm.dispose();
	}else{
		cm.dispose();
	}
}