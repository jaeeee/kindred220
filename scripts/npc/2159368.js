
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
	var st = "�����Ͻ� �������� ����ּ���.\r\n\r\n#b���� �Ŀ�����Ʈ : "+cm.getRC()+"\r\n";
	st += "#L1#���� �������� �������� ���׷��̵� �ϰ� �ͽ��ϴ�.\r\n\r\n";
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
			var str = "�������� ������ ��� �Դϴ�.\r\n";
			for(var i=1;i < cm.getInventory(1).getSlotLimit(); i++){
				if(cm.getEquip(i)){
					for(var k=0;k<arr.length;k++){
						if(cm.haveItem(arr[k])){
							if(cm.getEquip(i).getItemId() == arr[k]){
								str += "#L"+i+"#";
								str += "#i"+cm.getEquip(i).getItemId()+"#";
								str += "\t#b(#z"+cm.getEquip(i).getItemId()+"#)";
								str += "\t#k#e��� : "+cm.getEquip(i).getOwner()+"#n\r\n";
								break;
							}
						}
					}
				}
			}
			if(str.equals("�������� ������ ��� �Դϴ�.\r\n")){
				cm.sendOk("#r���� ���׷��̵� ������ �������� �����ϴ�.");
				cm.dispose();	
			}else{
				cm.sendSimple(str);

			}
		}else{
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
		}
	}else if(status == 1){
		if(sel != 1){
			s==1?name="�Ϲ�":s==2?name="�ϱ�":s==3?name="�߱�":s==4?name="���":s==5?name="�ֻ��":name="�𸮹�Ƽ��";
			stat = s*10;
			s!=10?cost = 10000+(stat*500):cost=65000;
			cm.sendYesNo("#b("+cost+")�Ŀ�����Ʈ#k�� #i"+item+"##b"+(name)+"(#z"+item+"#)#k�� �����Ͻðڽ��ϱ�?");
		}else{
			slot = s*1000;
			grade = cm.getEquip(s).getOwner();
			var itemid = cm.getEquip(s).getItemId();
			grade=="�Ϲ�"?next="�ϱ�":grade=="�ϱ�"?next="�߱�":grade=="�߱�"?next="���":grade=="���"?next="�ֻ��":grade=="�ֻ��"?next="�𸮹�Ƽ��":next="cant";
			var euro = "";
			var ucost;
			next=="�𸮹�Ƽ��"?ucost=30000:ucost=5000;
			next=="�𸮹�Ƽ��"?euro="��":euro="����";
			if(next != "cant"){
				cm.sendYesNo("#b("+grade+")#k#i"+itemid+"# #b(#z"+itemid+"#)#k�� #b("+next+")#k"+euro+" ���׷��̵� �Ͻðڽ��ϱ�?\r\n\r\n#e���׷��̵� ��� #n: #b"+ucost+"#k");
			}else{
				cm.sendOk("���׷��̵尡 �Ұ����� �������Դϴ�.");
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
				cm.sendOk("�����ϼ̽��ϴ�.");
			}else{
				cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
			}
		}else{
			cm.sendOk("���â�� �����մϴ�. Ȥ�� �κ��丮�� �������� ������ Ȯ�����ּ���.");
		}
		}else{
			slot = slot/1000;
			grade=="�ֻ��"?cost=30000:cost=5000;
			grade=="�ֻ��"?stat=50:stat=10;
			setItem(slot,cm.getEquip(slot).getDownLevel()+stat, next);
			if(cm.getRC() >= cost){
				cm.gainRC(-cost);
				cm.fakeRelog();
				cm.updateChar();
				cm.sendOk("�������� ���������� ���׷��̵� �ϼ̽��ϴ�.");
			}else{
				cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
			}
		}
		cm.dispose();
	}else{
		cm.dispose();
	}
}