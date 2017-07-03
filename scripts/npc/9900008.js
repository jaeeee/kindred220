
var count;

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
	var sel = 0;
	       var leaf = cm.itemQuantity(4310034);
	       var quan = ((cm.itemQuantity(4310034) - (cm.itemQuantity(4310034) % 80)) / 80);
	       var chat = "안녕하세요 #h0#님! 로얄캐쉬템상자를 구매할수있는 후원코인 상점입니다~.\r\n";
	       chat += "현재 #h0#님의 저스티스 코인 갯수는 #r#e"+ leaf +" #n#k개 입니다.#b"
	       chat += "\r\n#L1##i4310034##k 200개로 #b#i2430675##z2430675##k 3개 교환"; 
	       cm.sendSimple(chat);
	 if (status == 1) {
		cm.gainItem(4310034,1);
		cm.dispose();
	}


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 1) {
		if (cm.haveItem(4310034, 200)) {
		    if (cm.canHold(4310034)) {
		        cm.sendOk("저스티스코인으로 탐욕의 상자 구매하였습니다.");

			cm.gainItem(4310034, -200);
			cm.gainItem(2430675, 3);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("저스티스코인이 부족합니다.");
		    cm.dispose();

}


		}
	}
}



