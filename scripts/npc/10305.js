
	// [time_amd@nate.com]
	// [Ÿ��.����.�ѱ�]

	
	importPackage(Packages.client.items);
	importPackage(Packages.server.items);
	importPackage(java.lang);

	function start() { Status = -1; action(1, 0, 0); }

	function action(M, T, S) {

	if (M == -1) { cm.dispose(); } else {
		if (M == 0) {cm.dispose(); return; }
		if (M == 1) Status++; else Status--;    

	if (Status == 0) {
	cm.sendSimple("�ñ��Ѱ� �����ôٸ� �������� ������ �������!\r\n\r\n#b"
		+ "#L1#�������� �ɼ��� �ٸ� ���� �����ϰ� �;�.\r\n"
		+ "#L2#�׳� ���ҷ�.");
	}

	else if (Status == 1) {
		switch(S) {
		case 1:
		gT = "�ɷ�ġ�� ������ �������� �������ּ���.\r\n#b"
			for(var i = 1; i < cm.getInventory(2).getSlotLimit(); i++) {
				if(cm.getEquip(i)) {
				gT += "#L"+i+"# #i"+cm.getEquip(i).getItemId()+"# #z"+cm.getEquip(i).getItemId()+"#\r\n";
				}
			}
		cm.sendSimple(gT);
		break;

		default:
		cm.dispose();
		break;
		}
	}

	else if (Status == 2) {
	���� = S;
	getSpecial = cm.getPlayer().getName();
	isSpecial  = cm.getEquip(����).getOwner() == getSpecial ? 1 : 0
	viewText   = isSpecial == 1 ? "#r����� �������� ���õǾ����ϴ�. ���� ����� ������ ������ �ɷ�ġ �̵��� �����մϴ�.#k\r\n" : "\r\n";
	gT = "#e���õ� ������ : #b#i"+cm.getEquip(����).getItemId()+"##n#k\r\n\r\n���õ� �������� �ɷ�ġ�� ���۹��� �������� �������ּ���."+viewText;
		for(var i = 1; i < cm.getInventory(2).getSlotLimit(); i++) {
			if(cm.getEquip(i)) {
			gT += "#b#L"+i+"# #i"+cm.getEquip(i).getItemId()+"# #z"+cm.getEquip(i).getItemId()+"#\r\n";
			}
		}
		cm.sendSimple(gT);
	}

	else if (Status == 3) {
	��� = S;
	giveItem  = cm.getEquip(����).getItemId(); 
	IsSpecial = cm.getEquip(���).getOwner() == getSpecial ? 1 : 0
		if(���� == ���) {
		cm.sendOk("�ɷ�ġ�� ������ #b#z"+cm.getEquip(����).getItemId()+"##k �������� ������ �� �����ϴ�. �ٸ� �������� �������ּ���.");
		cm.dispose();
		return;
		}

		if(isSpecial != IsSpecial) {
		cm.sendOk("�Ϲ� �����۰� ����� ������ ���̿� �ɷ�ġ ������ �Ұ����մϴ�. �ٸ� �������� �������ּ���.");
		cm.dispose();
		return;
		}
	
	gT  = "���� #r#z"+cm.getEquip(����).getItemId()+"##k �������� �ɷ�ġ�� #b#z"+cm.getEquip(���).getItemId()+"##k ���������� �ű�ðڽ��ϱ�? ";
	gT += "���۵Ǵ� �ɷ�ġ�� �Ʒ��� �����ϴ�.\r\n\r\n";

	gT += "������������������   �� "+cm.getEquip(����).getStr()+"\r\n";
	gT += "������������������   �� "+cm.getEquip(����).getDex()+"\r\n"
	gT += "��Ʈ��������������   �� "+cm.getEquip(����).getInt()+"\r\n"
	gT += "������������������   �� "+cm.getEquip(����).getLuk()+"\r\n"
	gT += "ü�¡�������������   �� "+cm.getEquip(����).getHp()+"\r\n"
	gT += "������������������   �� "+cm.getEquip(����).getMp()+"\r\n"
	gT += "���ݷ¡�����������   �� "+cm.getEquip(����).getWatk()+"\r\n"
	gT += "���¡�������������   �� "+cm.getEquip(����).getMatk()+"\r\n"
	gT += "�������¡�������   �� "+cm.getEquip(����).getWdef()+"\r\n"
	gT += "�������¡�������   �� "+cm.getEquip(����).getMdef()+"\r\n"
	gT += "���߷�������������   �� "+cm.getEquip(����).getAcc()+"\r\n"
	gT += "ȸ��ġ������������   �� "+cm.getEquip(����).getAvoid()+"\r\n"
	gT += "���ǵ塡����������   �� "+cm.getEquip(����).getSpeed()+"\r\n"
	gT += "�����¡�����������   �� "+cm.getEquip(����).getJump()+"\r\n"
	gT += "�ֹ��� ���� Ƚ������ �� "+cm.getEquip(����).getLevel()+"\r\n";
	gT += "���ȭ ���� Ƚ���� �� "+cm.getEquip(����).getEnhance()+"\r\n";
	gT += "���׷��̵� ���� Ƚ�� �� "+cm.getEquip(����).getUpgradeSlots()+"\r\n\r\n";

	gT += "���� ���� �� ���������� +"+cm.getEquip(����).getBossDamage()+"%\r\n";
	gT += "���� ���� ���á� �� +"+cm.getEquip(����).getIgnoreWdef()+"%\r\n";
	gT += "�� ����������������  �� +"+cm.getEquip(����).getAllDamageP()+"%\r\n";
	gT += "�ý��ȡ�����������   �� +"+cm.getEquip(����).getAllStatP()+"%\r\n";
	gT += "���� ���� ���ҡ����� �� -"+cm.getEquip(����).getDownLevel()+"\r\n\r\n";

	gT += ""+cm.getEquip(����).getState() == 17 ? "����ɷ� ��ޡ�����  �� ����\r\n" : 
		 cm.getEquip(����).getState() == 18 ? "����ɷ� ��ޡ�����  �� ����\r\n" :
		 cm.getEquip(����).getState() == 19 ? "����ɷ� ��ޡ�����  �� ����ũ\r\n" : 
		 cm.getEquip(����).getState() == 20 ? "����ɷ� ��ޡ�����  �� �����帮\r\n" : "����ɷ� ��ޡ�����  �� ����"+"\r\n";
	gT += "ù ��° ����ɷ¡��� �� "+cm.getEquip(����).getPotential1()+"\r\n";
	gT += "�� ��° ����ɷ¡��� �� "+cm.getEquip(����).getPotential2()+"\r\n";
	gT += "�� ��° ����ɷ¡��� �� "+cm.getEquip(����).getPotential3()+"\r\n";
	gT += "�� ��° ����ɷ¡��� �� "+cm.getEquip(����).getPotential4()+"\r\n";
	gT += "�ټ� ��° ����ɷ¡� �� "+cm.getEquip(����).getPotential5()+"\r\n";
	gT += "���� ��° ����ɷ¡� �� "+cm.getEquip(����).getPotential6()+"\r\n";

	cm.sendYesNo(gT);
	}

	else if (Status == 4) {
	cm.getEquip(���).setStr(cm.getEquip(����).getStr());
	cm.getEquip(���).setDex(cm.getEquip(����).getDex());
	cm.getEquip(���).setInt(cm.getEquip(����).getInt());
	cm.getEquip(���).setLuk(cm.getEquip(����).getLuk());
	cm.getEquip(���).setHp(cm.getEquip(����).getHp());
	cm.getEquip(���).setMp(cm.getEquip(����).getMp());
	cm.getEquip(���).setWatk(cm.getEquip(����).getWatk());
	cm.getEquip(���).setMatk(cm.getEquip(����).getMatk());
	cm.getEquip(���).setWdef(cm.getEquip(����).getWdef());
	cm.getEquip(���).setMdef(cm.getEquip(����).getMdef());
	cm.getEquip(���).setAcc(cm.getEquip(����).getAcc());
	cm.getEquip(���).setAvoid(cm.getEquip(����).getAvoid());
	cm.getEquip(���).setSpeed(cm.getEquip(����).getSpeed());
	cm.getEquip(���).setJump(cm.getEquip(����).getJump());
	cm.getEquip(���).setLevel(cm.getEquip(����).getLevel());
	cm.getEquip(���).setEnhance(cm.getEquip(����).getEnhance());
	cm.getEquip(���).setUpgradeSlots(cm.getEquip(����).getUpgradeSlots());
	cm.getEquip(���).setBossDamage(cm.getEquip(����).getBossDamage());
	cm.getEquip(���).setIgnoreWdef(cm.getEquip(����).getIgnoreWdef());
	cm.getEquip(���).setAllDamageP(cm.getEquip(����).getAllDamageP());
	cm.getEquip(���).setAllStatP(cm.getEquip(����).getAllStatP());
	cm.getEquip(���).setDownLevel(cm.getEquip(����).getDownLevel());
	cm.getEquip(���).setState(cm.getEquip(����).getState());
	cm.getEquip(���).setPotential1(cm.getEquip(����).getPotential1());
	cm.getEquip(���).setPotential2(cm.getEquip(����).getPotential2());
	cm.getEquip(���).setPotential3(cm.getEquip(����).getPotential3());
	cm.getEquip(���).setPotential4(cm.getEquip(����).getPotential4());
	cm.getEquip(���).setPotential5(cm.getEquip(����).getPotential5());
	cm.getEquip(���).setPotential6(cm.getEquip(����).getPotential6());
	InventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, ����, 1, true);
	cm.gainItem(giveItem, 1);
	cm.getChar().saveToDB(false,false);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("������ �ɷ�ġ�� ������ ���������� �̷�������ϴ�. ���� ���� �κ��丮�� Ȯ���غ�����.");
	cm.dispose();
	}
	

	

}
}
