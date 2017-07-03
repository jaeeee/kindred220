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
        if (status == 0) {
	var cube = "안녕하세요. #e#b노블온라인#n#k에서 #e#r큐브#n#k를 #e#b판매#n#k하는 #e#b윌#n#k이라고 합니다. 원하시는 #e#b아이템#n#k을 #e#b선택#n#k해 주세요.\r\n";
	cube += "#L1##e#b#i5062009# 레드 큐브 50개 - 3500000메소\r\n";
	cube += "#L2##e#b#i5062010# 블랙 큐브 50개 - 5000000메소\r\n";
	cm.sendSimple(cube);
	}
    if (status == 1) {
		if (selection == 1){
			if (cm.getMeso() >= 3500000) {
				cm.gainItem(5062009, 50);
				cm.gainMeso(-3500000);
				cm.sendOk("#e#b#i5062009# 레드 큐브 #r50#n#k개로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b3500000메소#n#k가 부족한 건 아닌지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.getMeso() >= 5000000) {
				cm.gainItem(5062010, 50);
				cm.gainMeso(-5000000);
				cm.sendOk("#e#b#i5062010# 블랙 큐브 #r50#n#k개로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b5000000메소#n#k가 부족한 건 아닌지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} 
	}
}