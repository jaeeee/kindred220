importPackage(Packages.client.items);
importPackage(Packages.server.items);

var arr = new Array(1212065,1222060,1232058,1242062,1242063,1302276,1312154,1322204,1332226,1342083,1362091,1372178,1382209,1402197,1412136,1422141,1432168,1442224,1452206,1462194,1472215,1482169,1492180,1522095,1532099);

function start() {

	var st = "�����Ͻ� �������� ����ּ���.\r\n\r\n#b���� �Ŀ�����Ʈ : "+cm.getRC()+"\r\n";
	if(cm.getPlayer().getGMLevel() == 6){
	st += "#L1#���� �������� ����������� ���׷��̵� �ϰ� �ͽ��ϴ�.\r\n\r\n";
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
		var t="#b�ɷ�ġ - (�ý���/����������/�ѵ�����/���밨�ҷ���)#k\r\n";
		t+="�Ϲ� �ɼ�#k#n\t ��  (10% / 10% / 10% / 10)\r\n";
		t+="#b�ϱ� �ɼ�#k#n\t ��  (20% / 20% / 20% / 20)\r\n";
		t+="#r�߱� �ɼ�#k#n\t ��  (30% / 30% / 30% / 30)\r\n";
		t+="#e��� �ɼ�#k#n\t��  (40% / 40% / 40% / 40)\r\n";
		t+="#e#b�ֻ�� �ɼ�#k#n ��  (50% / 50% / 50% / 50)\r\n";
		t+="#e#r�𸮹�Ƽ��#k#n  ��  (100% / 100% / 100% / 100)\r\n\r\n";
		t+="���Ͻô� �������� ����� ����ּ���.\r\n"
		t+="#L1#�Ϲ�";
		t+="#L2##b�ϱ�";
		t+="#L3##r�߱�#k#n";
		t+="#L4##e���#k";
		t+="#L5##e#b�ֻ��#k#n";
		t+="#L10##e#r�𸮹�Ƽ��#k#n";
		cm.sendSimple(t);
	}else if(status == 1){
		s==1?name="�Ϲ�":s==2?name="�ϱ�":s==3?name="�߱�":s==4?name="���":s==5?name="�ֻ��":name="�𸮹�Ƽ��";
		stat = s*10;
		s!=10?cost = 10000+(stat*500):cost=65000;
		cm.sendYesNo("#b("+cost+")�Ŀ�����Ʈ#k�� #i"+item+"##b"+(name)+"(#z"+item+"#)#k�� �����Ͻðڽ��ϱ�?");
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
				cm.sendOk("�����ϼ̽��ϴ�.");
			}else{
				cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
			}
		}else{
			cm.sendOk("���â�� �����մϴ�. Ȥ�� �κ��丮�� �������� ������ Ȯ�����ּ���.");
		}
		cm.dispose();
	}else{
		cm.dispose();
	}
}