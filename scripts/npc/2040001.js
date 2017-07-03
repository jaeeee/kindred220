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
		cm.sendSimple("#r 후원누적 20000 = [사냥시 경험치15% 추가지급]\r\n 후원누적 50000 = [사냥시 경험치25% 추가지급]\r\n 후원누적 100000 = [사냥시 경험치50% 추가지급]\r\n 후원누적 200000 = [사냥시 경험치100% 추가지급]#k\r\n#L0##r[Read]#k#b[Life온라인]후원방법 알아보기#k#l\r\n\r\n#L101##r[HOT]#k#b[Life온라인] 후원아이템 보기#k#l\r\n\r\n#L104##r[NEW]#k#g[Life온라인] 후원포인트 상점#k#l\r\n\r\n#L102##r[NEW]#k#b[Life온라인] 장비 올스텟 강화 !!#k#l\r\n\r\n#L103##r[NEW]#k#b[Life온라인] 장비 공/마 강화 !!#k#l");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("상품권후원은 아래양식에 맞게 작성해서 메일로 보내주세요\r\n상품권이름 : \r\n상품권핀번호 : \r\n상품권발행일자(해피머니일경우) : \r\n상품권금액 : \r\n지급받을닉네임 : \r\n kki_looking@naver.com 으로 이렇게 양식에맞춰보내시면\r\n최대한 빨리지급해드리겠습니다.\r\n가격표는 www.coreple.kr.pe 접속후 후원공지보세요\r\n총운영자 외 다른운영자한테는 절대후원이불가능합니다.");
		} else if (selection == 1) {
			cm.openShop(20121125);
		} else if (selection == 5) {
			cm.openShop(9000153);
      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2095000);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(9250006);
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
        cm.openNpc(1012122);
	return;

      } else if (selection == 12) {
        cm.dispose();
        cm.openNpc(9330003);
	return;

      } else if (selection == 20) {
        cm.dispose();
        cm.openNpc(9201014);
	return;

      } else if (selection == 102) {
        cm.dispose();
        cm.openNpc(9000030);
	return;

      } else if (selection == 103) {
        cm.dispose();
        cm.openNpc(9000013);
	return;

      } else if (selection == 104) {
        cm.dispose();
        cm.openNpc(9000175);
	return;

      } else if (selection == 100) {
        cm.dispose();
        cm.openNpc(2101018);
	return;

      } else if (selection == 101) {
        cm.dispose();
        cm.openNpc(1002002);
	return;
		}
		cm.dispose();
	}
    
}
