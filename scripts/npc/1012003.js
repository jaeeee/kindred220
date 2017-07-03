/*



*/

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
            	
	       var leaf = cm.itemQuantity(4001126);
	       var chat = "안녕하세요 #h0#님! 메소로 확성기를 구매하시겠습니까?.\r\n";
	       chat += "\r\n#L400##i5072000##d고성능 확성기(#r100#k개)　　-　　#r1,000,000 #d메소";
	       chat += "\r\n#L401##i5076000##d아이템 확성기(#r100#k개)　　-　　#r1,000,000 #d메소";
	       cm.sendSimple(chat);


	    }  if (selection == 400) {
		if (cm.getMeso() >= 1000000) {
		    if (cm.canHold(5072000)) {
		        cm.sendOk("아이템을 구매하셨습니다.");
			cm.gainItem(5072000, 100);
			cm.gainMeso(-1000000);
			cm.dispose();
		    } else {
		        cm.sendOk("캐시칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("메소가 부족합니다.");
		    cm.dispose();

}


	    }  if (selection == 401) {
		if (cm.getMeso() >= 1000000) {
		    if (cm.canHold(5076000)) {
		        cm.sendOk("아이템을 구매하셨습니다.");
			cm.gainItem(5076000, 100);
			cm.gainMeso(-1000000);
			cm.dispose();
		    } else {
		        cm.sendOk("캐시칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("메소가 부족합니다.");
		    cm.dispose();

}
	 
		}
	}
}

