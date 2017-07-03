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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "#e< 퀘스트 : 불의 눈 파편 >#n#k\r\n\r\n#n"
                    chat += "#b아직 #i4001796##r#t4001796##b 한 개도 안 모았는데 나가겠습니까?\r\n\r\n";
	    chat += "#k#L1#예#l";
	    chat += "					#L2#아니오\r\n";

	if (cm.getPlayer().haveItem(4001796)){
	    var chat = "#e< 퀘스트 : 불의 눈 파편 >#n#k\r\n\r\n#n"
	    chat += "#i4001796##r#t4001796##b 40개 다 모으셨나요?\r\n\r\n";
	    chat += "#k#L3#예#l";
	}

	    cm.sendSimple(chat);



             } else if (selection == 1) {
	cm.dispose();
	 cm.allPartyWarp(100000000, true);
             } else if (selection == 2) {
              cm.sendOk("조금만 더 힘들내주세요.");
             } else if (selection == 3) {
		if (cm.haveItem(4001796, 40)) {
		    if (cm.canHold(4001796)) {
 			cm.allPartyWarp(211042400, true);
			cm.gainItem(4001796, -0);
		                cm.sendOk("아도비스에게 대화를 걸어주세요.");
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#i4001796##r#t4001796# 아직 부족해 더 모아와");
		    cm.dispose();

}
		}
	}
}

