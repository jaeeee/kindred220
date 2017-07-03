/*
	연이팩의 후원템 교환 스크립트 입니다.
	(ljw5992@naver.com)

	연이팩 src 구매 문의는 leejw5992@nate.com
	(소스 구매합니다)라고 적어서 친구추가 해주세요
	src는 무한업데이트 해드립니다.
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
            	
	       var Lcoin = cm.itemQuantity(4310027);
	       var chat = "#L998# \r\n";
	       chat += "#L999##r#e※주의! 인벤토리 공간을 꼭 확보해주세요!#k#n\r\n\r\n";
	       chat += "　　안녕하세요 #b#h0##k님! 후원 아이템 상점입니다.\r\n";
	       chat += "　　현재 #b#h0##k님의 레전드코인 갯수는 #r#e"+ Lcoin +" #n#k개 입니다.\r\n\r\n"
	       chat += "#L1000#　　　　<레전드 코인 [#e#r1#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L1# #i4001126# 20000개　　　　　　";
	       chat += "#L2# 3,0000,0000 (3억) 메소";
	       chat += "\r\n#L3# #i2049122# (15장)　　　　　　 ";
	       chat += "#L4# #i4310000# (4개)";
	       chat += "\r\n#L5# #i1112585# (올스텟 700)";
	       chat += "\r\n\r\n#L1001#　　　　<레전드 코인 [#e#r2#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L7# #i1022111# (올스텟 1000)　　　";
	       chat += "#L8# #i4310034# (40개)";
	       chat += "\r\n\r\n#L1002#　　　　<레전드 코인 [#e#r3#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L9# #i1112586# (올스텟 1500)　　　";
	       chat += "#L10# #i1102097# (올스텟 1500)";
	       chat += "\r\n#L11# #i1003596# (올스텟 1300)";
	       chat += "\r\n\r\n#L1003#　　　　<레전드 코인 [#e#r4#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L12# #i1022112# (올스텟 1800)";
	       chat += "\r\n\r\n#L1004#　　　　<레전드 코인 [#e#r5#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L13# #i1102309# (올스텟 2300)";
	       cm.sendSimple(chat);

	    }  if (selection >= 990) {
		    cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i4001126# 20000개#k를 구입 하셨습니다.");
			cm.gainItem(4310027, -1);
			cm.gainItem(4001126, 20000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 2) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("#r레전드 코인#k으로 #r3억 메소#k를 구입 하셨습니다.");
			cm.gainItem(4310027, -1);
			cm.gainMeso(300000000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 3) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(2049122)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i2049122# 15장#k을 구입 하셨습니다.");
			cm.gainItem(4310027, -1);
			cm.gainItem(2049122, 15);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 4) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4310000)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i4310000# 을 구입 하셨습니다.");
			cm.gainItem(4310027, -1);
			cm.gainItem(4310000, 4);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 5) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(1112585)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1112585# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -1);
			cm.gainItem(1112585, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 7) {
		if (cm.haveItem(4310027, 2)) {
		    if (cm.canHold(1022111)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1022111# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -2);
			cm.gainItem(1022111, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 8) {
		if (cm.haveItem(4310027, 2)) {
		    if (cm.canHold(4310034)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i4310034 40개#를 구입 하셨습니다.");
			cm.gainItem(4310027, -2);
			cm.gainItem(4310034, 40);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 9) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1112586# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 10) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1102097# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1102097, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 11) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1003596)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1003596# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1003596, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 12) {
		if (cm.haveItem(4310027, 4)) {
		    if (cm.canHold(1022112)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1022112# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -4);
			cm.gainItem(1022112, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 13) {
		if (cm.haveItem(4310027, 5)) {
		    if (cm.canHold(1102309)) {
		        cm.sendOk("#r레전드 코인#k으로 #r#i1102309# 를 구입 하셨습니다.");
			cm.gainItem(4310027, -5);
			cm.gainItem(1102309, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r레전드 코인#k이 부족합니다.");
		    cm.dispose();

}

		}
	}
}



