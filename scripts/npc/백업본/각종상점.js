var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
        if (status == 0) {
		cm.sendSimple("[ #r쓸대없는거만 많은 각종 상점#k ] #n\r\n#b단풍잎 온라인#l#k에 #r[각종 상점 기능] 이랍니다#l#k\r\n#L4##b[낚시 포인트]낚시 포인트 상점#k#l\r\n#L5##b[NEW!!!] [윈터리밋 코인] 아이템 상점#k#l\r\n#L20##r[NEW!!!] [보스레이드] 포인트 상점#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000152);
		} else if (selection == 6) {
			cm.openShop(9000152);
      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2020008);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(1012102);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(9000028);
	return;

      } else if (selection == 10) {
        cm.dispose();
        cm.openNpc(1033104);
	return;

      } else if (selection == 11) {
        cm.dispose();
        cm.openNpc(9000017);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(2159000);
	return;

      } else if (selection == 21) {
        cm.dispose();
        cm.openNpc(1002002);
	return;

		}
		cm.dispose();
	}
    
}
