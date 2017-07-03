function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
    }
        if (mode == 1)
            status++;
        else
            status--;
	if (selection == 0) {
		var skin = "원하는 #e#b데미지 스킨#n#k을 선택하세요.\r\n#e#b3000 후원포인트#n#k가 #e#r차감#n#k됩니다.\r\n"
		skin += "#L1##e#b#i2431965# 기본 데미지 스킨\r\n";
		skin += "#L2##e#b#i2431966# 디지털라이즈 데미지 스킨\r\n";
		skin += "#L3##e#b#i2431967# 크리티아스 데미지 스킨\r\n";
		skin += "#L4##e#b#i2432153# 임팩티브 데미지 스킨\r\n";
		skin += "#L5##e#b#i2432354# 메리 크리스마스 데미지 스킨\r\n";
		skin += "#L6##e#b#i2432355# 눈 꽃송이 데미지 스킨\r\n";
		skin += "#L7##e#b#i2432465# 얄리샤의 데미지 스킨\r\n";
		skin += "#L8##e#b#i2432479# 도로시의 데미지 스킨\r\n";
		skin += "#L9##e#b#i2432526# 키보드 워리어 데미지 스킨\r\n";
		skin += "#L10##e#b#i2432532# 살랑살랑 봄바람 데미지 스킨\r\n";
		skin += "#L11##e#b#i2432592# 솔로부대 데미지 스킨\r\n";
		skin += "#L12##e#b#i2432640# 레미너선스 데미지 스킨\r\n";
		skin += "#L13##e#b#i2432710# 주황버섯 데미지 스킨\r\n";
		cm.sendSimple(skin);
   } 	if (status == 1) {
		if (selection == 1){
			if (cm.getRC() >= 3000 && !cm.haveItem(2431965)) {
				cm.gainItem(2431965, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431965# 기본 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2431966)) {
				cm.gainItem(2431966, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431966# 디지털라이즈 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2431967)) {
				cm.gainItem(2431967, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2431967# 크리티아스 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432153)) {
				cm.gainItem(2432153, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432153# 임팩티브 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432354)) {
				cm.gainItem(2432354, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# 메리 크리스마스 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 6) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432355)) {
				cm.gainItem(2432355, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432355# 눈 꽃송이 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 7) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432465)) {
				cm.gainItem(2432465, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i24324654# 얄리샤의 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 8) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432479)) {
				cm.gainItem(2432479, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# 도로시의 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 9) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432526)) {
				cm.gainItem(2432526, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432526# 키보드 워리어 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 10) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432532)) {
				cm.gainItem(2432532, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432532# 살랑살랑 봄바람 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 11) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432592)) {
				cm.gainItem(2432592, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432592# 솔로부대 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 12) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432640)) {
				cm.gainItem(2432640, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432640# 레미너선스 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		} else if (selection == 13) {
			if (cm.getRC() >= 3000 && !cm.haveItem(2432710)) {
				cm.gainItem(2432710, 1);
				cm.gainRC(-3000);
				cm.sendOk("#e#b#i2432354# 주황버섯 데미지 스킨#n#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b후원포인트#n#k가 #e#r부족#n#k하거나 해당 #e#b데미지 스킨#n#k을 이미 가지고 있는지 #e#b확인#n#k해주세요.");
				cm.dispose();
			}
		}
	}
}