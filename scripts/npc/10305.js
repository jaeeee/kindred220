
	// [time_amd@nate.com]
	// [타임.메인.한국]

	
	importPackage(Packages.client.items);
	importPackage(Packages.server.items);
	importPackage(java.lang);

	function start() { Status = -1; action(1, 0, 0); }

	function action(M, T, S) {

	if (M == -1) { cm.dispose(); } else {
		if (M == 0) {cm.dispose(); return; }
		if (M == 1) Status++; else Status--;    

	if (Status == 0) {
	cm.sendSimple("궁금한게 있으시다면 언제든지 저에게 물어보세요!\r\n\r\n#b"
		+ "#L1#아이템의 옵션을 다른 장비로 전송하고 싶어.\r\n"
		+ "#L2#그냥 안할래.");
	}

	else if (Status == 1) {
		switch(S) {
		case 1:
		gT = "능력치를 전송할 아이템을 선택해주세요.\r\n#b"
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
	선택 = S;
	getSpecial = cm.getPlayer().getName();
	isSpecial  = cm.getEquip(선택).getOwner() == getSpecial ? 1 : 0
	viewText   = isSpecial == 1 ? "#r스페셜 아이템이 선택되었습니다. 같은 스페셜 아이템 끼리의 능력치 이동만 가능합니다.#k\r\n" : "\r\n";
	gT = "#e선택된 아이템 : #b#i"+cm.getEquip(선택).getItemId()+"##n#k\r\n\r\n선택된 아이템의 능력치를 전송받을 아이템을 선택해주세요."+viewText;
		for(var i = 1; i < cm.getInventory(2).getSlotLimit(); i++) {
			if(cm.getEquip(i)) {
			gT += "#b#L"+i+"# #i"+cm.getEquip(i).getItemId()+"# #z"+cm.getEquip(i).getItemId()+"#\r\n";
			}
		}
		cm.sendSimple(gT);
	}

	else if (Status == 3) {
	대상 = S;
	giveItem  = cm.getEquip(선택).getItemId(); 
	IsSpecial = cm.getEquip(대상).getOwner() == getSpecial ? 1 : 0
		if(선택 == 대상) {
		cm.sendOk("능력치를 전송할 #b#z"+cm.getEquip(선택).getItemId()+"##k 아이템은 선택할 수 없습니다. 다른 아이템을 선택해주세요.");
		cm.dispose();
		return;
		}

		if(isSpecial != IsSpecial) {
		cm.sendOk("일반 아이템과 스페셜 아이템 사이에 능력치 전송은 불가능합니다. 다른 아이템을 선택해주세요.");
		cm.dispose();
		return;
		}
	
	gT  = "정말 #r#z"+cm.getEquip(선택).getItemId()+"##k 아이템의 능력치를 #b#z"+cm.getEquip(대상).getItemId()+"##k 아이템으로 옮기시겠습니까? ";
	gT += "전송되는 능력치는 아래와 같습니다.\r\n\r\n";

	gT += "힘　　　　　　　　   │ "+cm.getEquip(선택).getStr()+"\r\n";
	gT += "덱스　　　　　　　   │ "+cm.getEquip(선택).getDex()+"\r\n"
	gT += "인트　　　　　　　   │ "+cm.getEquip(선택).getInt()+"\r\n"
	gT += "럭　　　　　　　　   │ "+cm.getEquip(선택).getLuk()+"\r\n"
	gT += "체력　　　　　　　   │ "+cm.getEquip(선택).getHp()+"\r\n"
	gT += "마나　　　　　　　   │ "+cm.getEquip(선택).getMp()+"\r\n"
	gT += "공격력　　　　　　   │ "+cm.getEquip(선택).getWatk()+"\r\n"
	gT += "마력　　　　　　　   │ "+cm.getEquip(선택).getMatk()+"\r\n"
	gT += "물리방어력　　　　   │ "+cm.getEquip(선택).getWdef()+"\r\n"
	gT += "마법방어력　　　　   │ "+cm.getEquip(선택).getMdef()+"\r\n"
	gT += "명중률　　　　　　   │ "+cm.getEquip(선택).getAcc()+"\r\n"
	gT += "회피치　　　　　　   │ "+cm.getEquip(선택).getAvoid()+"\r\n"
	gT += "스피드　　　　　　   │ "+cm.getEquip(선택).getSpeed()+"\r\n"
	gT += "점프력　　　　　　   │ "+cm.getEquip(선택).getJump()+"\r\n"
	gT += "주문서 성공 횟수　　 │ "+cm.getEquip(선택).getLevel()+"\r\n";
	gT += "장비강화 성공 횟수　 │ "+cm.getEquip(선택).getEnhance()+"\r\n";
	gT += "업그레이드 가능 횟수 │ "+cm.getEquip(선택).getUpgradeSlots()+"\r\n\r\n";

	gT += "보스 공격 시 데미지　│ +"+cm.getEquip(선택).getBossDamage()+"%\r\n";
	gT += "몬스터 방어력 무시　 │ +"+cm.getEquip(선택).getIgnoreWdef()+"%\r\n";
	gT += "총 데미지　　　　　  │ +"+cm.getEquip(선택).getAllDamageP()+"%\r\n";
	gT += "올스탯　　　　　　   │ +"+cm.getEquip(선택).getAllStatP()+"%\r\n";
	gT += "착용 레벨 감소　　　 │ -"+cm.getEquip(선택).getDownLevel()+"\r\n\r\n";

	gT += ""+cm.getEquip(선택).getState() == 17 ? "잠재능력 등급　　　  │ 레어\r\n" : 
		 cm.getEquip(선택).getState() == 18 ? "잠재능력 등급　　　  │ 에픽\r\n" :
		 cm.getEquip(선택).getState() == 19 ? "잠재능력 등급　　　  │ 유니크\r\n" : 
		 cm.getEquip(선택).getState() == 20 ? "잠재능력 등급　　　  │ 레전드리\r\n" : "잠재능력 등급　　　  │ 없음"+"\r\n";
	gT += "첫 번째 잠재능력　　 │ "+cm.getEquip(선택).getPotential1()+"\r\n";
	gT += "두 번째 잠재능력　　 │ "+cm.getEquip(선택).getPotential2()+"\r\n";
	gT += "세 번째 잠재능력　　 │ "+cm.getEquip(선택).getPotential3()+"\r\n";
	gT += "네 번째 잠재능력　　 │ "+cm.getEquip(선택).getPotential4()+"\r\n";
	gT += "다섯 번째 잠재능력　 │ "+cm.getEquip(선택).getPotential5()+"\r\n";
	gT += "여섯 번째 잠재능력　 │ "+cm.getEquip(선택).getPotential6()+"\r\n";

	cm.sendYesNo(gT);
	}

	else if (Status == 4) {
	cm.getEquip(대상).setStr(cm.getEquip(선택).getStr());
	cm.getEquip(대상).setDex(cm.getEquip(선택).getDex());
	cm.getEquip(대상).setInt(cm.getEquip(선택).getInt());
	cm.getEquip(대상).setLuk(cm.getEquip(선택).getLuk());
	cm.getEquip(대상).setHp(cm.getEquip(선택).getHp());
	cm.getEquip(대상).setMp(cm.getEquip(선택).getMp());
	cm.getEquip(대상).setWatk(cm.getEquip(선택).getWatk());
	cm.getEquip(대상).setMatk(cm.getEquip(선택).getMatk());
	cm.getEquip(대상).setWdef(cm.getEquip(선택).getWdef());
	cm.getEquip(대상).setMdef(cm.getEquip(선택).getMdef());
	cm.getEquip(대상).setAcc(cm.getEquip(선택).getAcc());
	cm.getEquip(대상).setAvoid(cm.getEquip(선택).getAvoid());
	cm.getEquip(대상).setSpeed(cm.getEquip(선택).getSpeed());
	cm.getEquip(대상).setJump(cm.getEquip(선택).getJump());
	cm.getEquip(대상).setLevel(cm.getEquip(선택).getLevel());
	cm.getEquip(대상).setEnhance(cm.getEquip(선택).getEnhance());
	cm.getEquip(대상).setUpgradeSlots(cm.getEquip(선택).getUpgradeSlots());
	cm.getEquip(대상).setBossDamage(cm.getEquip(선택).getBossDamage());
	cm.getEquip(대상).setIgnoreWdef(cm.getEquip(선택).getIgnoreWdef());
	cm.getEquip(대상).setAllDamageP(cm.getEquip(선택).getAllDamageP());
	cm.getEquip(대상).setAllStatP(cm.getEquip(선택).getAllStatP());
	cm.getEquip(대상).setDownLevel(cm.getEquip(선택).getDownLevel());
	cm.getEquip(대상).setState(cm.getEquip(선택).getState());
	cm.getEquip(대상).setPotential1(cm.getEquip(선택).getPotential1());
	cm.getEquip(대상).setPotential2(cm.getEquip(선택).getPotential2());
	cm.getEquip(대상).setPotential3(cm.getEquip(선택).getPotential3());
	cm.getEquip(대상).setPotential4(cm.getEquip(선택).getPotential4());
	cm.getEquip(대상).setPotential5(cm.getEquip(선택).getPotential5());
	cm.getEquip(대상).setPotential6(cm.getEquip(선택).getPotential6());
	InventoryManipulator.removeFromSlot(cm.getClient(), MapleInventoryType.EQUIP, 선택, 1, true);
	cm.gainItem(giveItem, 1);
	cm.getChar().saveToDB(false,false);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("아이템 능력치의 전송이 성공적으로 이루어졌습니다. 지금 당장 인벤토리를 확인해보세요.");
	cm.dispose();
	}
	

	

}
}
