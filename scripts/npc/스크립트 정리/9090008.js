importPackage(Packages.client.items);
importPackage(Packages.server.items);

function start() {
	if(cm.getPlayer().getGMLevel()>5){
		var str = "ȯ���մϴ�. #b#h ##k��ڴ�! ���� #e���� �ý���#n�Դϴ�.\r\n#b#h ##k��ڴ��� �����Ͻ� ������ ����Դϴ�.\r\n";
		for(var i=1;i < 100; i++){
			if(cm.getEquip(i)){
				str += "#L"+i+"#";
				str += "#i"+cm.getEquip(i).getItemId()+"#";
				str += " #b#e#z"+cm.getEquip(i).getItemId()+"#";
				str += "#n\r\n";
			}
		}
		if(str.equals("���� NPC�Դϴ�.\r\n�ɼ��� �缳���� �������� �������ּ���.\r\n")){
			cm.askMapSelection("d");
			cm.dispose();
		}else{
			cm.sendSimple(str);
		}
	}else{
		cm.sendOk("��ڷ����� �����մϴ�. #b#h ##k ���� �̿����� ����˴ϴ�.");
		cm.dispose();
	}
}

var sel;

var status = -1;

function action(mode,type,selection) {
	if(mode == 1){
		status++;
	}else{
		status--;
		cm.dispose();
	}
	if(status==0){
		sel = selection;
		var str ="#e#r[�� ���� ����]#k#n\r\n#e��#n(9% #b30041#k / 12% #b40041#k) #e����#n(9% #b30042#k / 12% #b40042#k)\r\n#e��Ʈ#n(9% #b30043#k / 12% #b40043#k) #e��#n(9% #b30044#k / 12% #b40044#k)\r\n#e�ý���#n(6% #b30086#k / 9% #b40086#k)\r\n\r\n#e#r[���� ���� ����]#k#n\r\n#e�� ������#n(6% #b20070#k / 9% 30070 / 12% #b40070#k)\r\n#e���ݷ�#n(6% #b20051#k / 9% #b30051#k / 12% #b40051#k)\r\n#e����#n(6% #b20052#k / 9% #b30052#k / 12% #b40052#k)\r\n#e���� ���ݷ�#n(30#r(+5)#k% #b3#r(+1)#b0602#k / 40% #b40603#k)\r\n#e����� ����#n(30#r(+5)#k% #b3#r(+1)#b0291#k / 40% #b40292#k)\r\n#eũ��Ƽ�� Ȯ��#n(8% #b20055#k / 10% #b30055#k / 12% #b40055#k)\r\n\r\n";

		cm.sendGetText(str+"#e�⺻ �ɼ�#n#b(��,����,��Ʈ,��,���ݷ�,����)#k�� #e[�⺻�� #b-1#k]#n\r\n#e���� �ɼ�#n#b(ù��° ����, �ι�° ����, ����° ����)#k�� �Է��� ��\r\n#e����ų� ���� �ɼ�#n#b(�׹�°, �ټ���°, ������° ����)#k �׸���\r\n#e��Ÿ �ɼ�#n#b(���׷��̵� ���� Ƚ��, ��ȭ ����)#k�� �Է����ּ���.\r\n\r\n");
	}else if(status == 1){
		var text = cm.getText();
		var item = cm.getEquip(sel);
		var origin = ItemInformation.getInstance().getEquipById(item.getItemId());
		var option = text.split(",");
		if(option[0] != -1){
			item.setStr(option[0]);
		}else{
			item.setStr(origin.getStr());
		}
		if(option[1] != -1){
			item.setDex(option[1]);
		}else{
			item.setDex(origin.getDex());
		}
		if(option[2] != -1){
			item.setInt(option[2]);
		}else{
			item.setInt(origin.getInt());
		}
		if(option[3] != -1){
			item.setLuk(option[3]);
		}else{
			item.setLuk(origin.getLuk());
		}
		if(option[4] != -1){
			item.setWatk(option[4]);
		}else{
			item.setWatk(origin.getWatk());
		}
		if(option[5] != -1){
			item.setMatk(option[5]);
		}else{
			item.setMatk(origin.getMatk());
		}
		item.setPotential1(option[6]);
		item.setPotential2(option[7]);
		item.setPotential3(option[8]);
		item.setPotential4(option[9]);
		item.setPotential5(option[10]);
		item.setPotential6(option[11]);
		if(option[12] != -1){
			item.setUpgradeSlots(option[12]);
		}else{
			item.setUpgradeSlots(origin.getUpgradeSlots());
		}
		item.setEnhance(option[13]);
		item.setState(20);
		cm.fakeRelog();
		cm.updateChar();
		cm.dispose();
	}
}

