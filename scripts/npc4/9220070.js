var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var lucky = "#e#b서버#k 리뉴얼기념으로 #e#b1000000메소#n#k에 #e#b점괘#n#k를 봐준다구.\r\n 한 번 해보는게 어때?\r\n\r\n";
	lucky += "#L1##e#b점괘#n#k를 뽑아본다.\r\n";
	lucky += "#L2##e#b점괘#n#k를 #e#b메소#n#k로 #e#b교환#n#k 받는다.\r\n";
	cm.sendSimple(lucky);
	}
    if (status == 1) {
	if (selection == 1) {
	if (cm.getPlayer().getMeso() >= 1000000) {
	 var rand = 1 + Math.floor(Math.random() * 15);
	    if (rand > 0 && rand < 6) {
		cm.gainItem(4031069, 1); //운수 말길 쪽지
		cm.sendOk("그닥 나쁘지 않은 점괘인 듯 한데?");
		cm.gainMeso(-1000000);
		cm.dispose(); 
	    } else if (rand > 5 && rand < 10) {
		cm.gainItem(4031068, 1); //운수 길 쪽지 
		cm.sendOk("평범한 일상이 될 것 같은 느낌..");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 9 && rand < 13) {
		cm.gainItem(4031067, 1); //운수 소길 쪽지
		cm.sendOk("소소한 행운이 찾아올지도...");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 12 && rand < 15) {
		cm.gainItem(4031066, 1); //운수 중길 쪽지
		cm.sendOk("음.. 뭔가 좋은 소식이 있을거야...");
		cm.gainMeso(-1000000);
		cm.dispose();
	    } else if (rand > 14) {
		cm.gainItem(4031065, 1); //운수 대길 쪽지
		cm.sendOk("좋은 일이 가득할 것 같은 대박날 느낌이랄까?");
		cm.gainMeso(-1000000);
		cm.dispose(); 
	    }
	} else {
	  cm.sendOk("흐음... #e#b1000000메소#k 이상#n 가지고 있는 건지 #e#b확인#n#k해봐여...");
	  cm.dispose();
	}
    } if (selection == 2) {
		var paper = "\r\n"
		paper += "#L1##e#b[운수 말길 쪽지]#k 교환#n하기 - #e#b1000000#k메소\r\n";
		paper += "#L2##e#b[운수 길   쪽지]#k 교환#n하기 - #e#b1500000#k메소\r\n";
		paper += "#L3##e#b[운수 소길 쪽지]#k 교환#n하기 - #e#b2500000#k메소\r\n";
		paper += "#L4##e#b[운수 중길 쪽지]#k 교환#n하기 - #e#b5000000#k메소\r\n";
		paper += "#L5##e#b[운수 대길 쪽지]#k 교환#n하기 - #e#b10000000#k메소\r\n";
		cm.sendSimple(paper);
   }
} if (status == 2) {
		if (selection == 1){
			if (cm.haveItem(4031069) == true) {
				cm.gainItem(4031069, -1);
				cm.gainMeso(1000000);
				cm.sendOk("#e#b1000000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[운수 말길 쪽지]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.haveItem(4031068) == true) {
				cm.gainItem(4031068, -1);
				cm.gainMeso(1500000);
				cm.sendOk("#e#b1500000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[운수 길 쪽지]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.haveItem(4031067) == true) {
				cm.gainItem(4031067, -1);
				cm.gainMeso(2500000);
				cm.sendOk("#e#b2500000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[운수 소길 쪽지]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.haveItem(4031066) == true) {
				cm.gainItem(4031066, -1);
				cm.gainMeso(5000000);
				cm.sendOk("#e#b5000000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			}
			else {
				cm.sendOk("#e#b[운수 중길 쪽지]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.haveItem(4031065) == true) {
				cm.gainItem(4031065, -1);
				cm.gainMeso(10000000);
				cm.sendOk("#e#b10000000#k메소#n로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
				cm.dispose();
			} 
			else {
				cm.sendOk("#e#b[운수 대길 쪽지]#k#n가 있는지 #e#b확인#n#k하시기 바랍니다.");
				cm.dispose();
			}  
		}
	}
}