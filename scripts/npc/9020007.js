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
		cm.sendSimple("#n\r\n#b코어온라인#l#k의 #r[전문기술] 총합이란다#l#k#k\r\n\r\n#L2##r[코어온라인] 전문기술 마을가기#k#l\r\n#L3##b[코어온라인] 전문기술 상점#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#e후원하실분들은 게임접속시 [닉네임 : 끼 룩]과 거래Go~#k#n\r\n[닉네임 : 끼 룩]이 접속하지 않을경우↓↓\r\n네이트온 : kki_look 으로 후원문의주세요\r\n채팅방 1대1 신청 : 끼 룩(kkilook_adm)\r\n[5천원 = 포인트 5000]  [2만원 = 포인트 20000]#k");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 2) {
        cm.dispose();
        cm.warp(910001000, 0);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9031000);
	return;

      } else if (selection == 4) {
        cm.dispose();
        cm.openNpc(9201005);
	return;

      } else if (selection == 10) {
        cm.dispose();
        cm.openNpc(9050009);
	return;

      } else if (selection == 11) {
        cm.dispose();
        cm.openNpc(2159329);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

      } else if (selection == 21) {
        cm.dispose();
        cm.openNpc(1012114);
	return;

      } else if (selection == 100) {
        cm.dispose();
        cm.openNpc(2101018);
	return;
		}
		cm.dispose();
	}
    
}
