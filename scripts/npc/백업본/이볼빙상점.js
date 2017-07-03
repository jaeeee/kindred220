

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
         
	       var Lcoin = cm.itemQuantity(4310060);
	       var chat = "\r\n#L998#";
	       chat += "#r#e현재 #b#h0##k님의 이볼빙코인 갯수는 #r#e"+ Lcoin +" #n#k개 입니다.#k#n\r\n\r\n"
	       chat += "#L1000#　　　　#b<이볼빙 코인 [#e#r1#k#n] 개로 구매 가능한 아이템>#k\r\n";
	       chat += "\r\n#L2#[ #r★ 5억 메소#k 를 교환하겠습니다.]";
	       chat += "\r\n#L5#[ #r#i1142134# #r공마50 을 교환하겠습니다.]";
	       chat += "\r\n#L50#[ #r#i1112111# #r올스탯300 (명찰) 를 교환하겠습니다.]";
	       chat += "\r\n#L51#[ #r#i1112221# #r올스탯300 (말풍선) 를 교환하겠습니다.]";
	       chat += "\r\n\r\n#L1001#　　　　<이볼빙 코인 [#e#r2#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L7# #i1052526# #r올스탯 500#k 을 교환하겠습니다.　　　";
	       chat += "\r\n#L8# #i1052527# #r올스탯 500#k 을 교환하겠습니다.";
	       chat += "\r\n\r\n#L1002#　　　　<이볼빙 코인 [#e#r3#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L100#[ #r#i1142135# #r공마120 을 교환하겠습니다.]";
	       chat += "\r\n#L9# #i1003622# #r올스탯 900#k 을 교환하겠습니다.";
	       chat += "\r\n#L13# #i1003621# #r올스탯 950#k 을 교환하겠습니다.";
	       chat += "\r\n#L10# #i1112110# #r올스탯 900 (명찰)#k 을 교환하겠습니다.";
	       chat += "\r\n#L11# #i1112220# #r올스탯 900 (말풍선)#k 을 교환하겠습니다.";
	       chat += "\r\n\r\n#L1006#　　　　<이볼빙 코인 [#e#r5#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L101#[ #r#i1142136# #r공마230 을 교환하겠습니다.]";
	       chat += "\r\n#L23# #i1112118# #r올스탯 1600 (명찰)#k 을 교환하겠습니다.";
	       chat += "\r\n#L24# #i1112228# #r올스탯 1600 (말풍선)#k 을 교환하겠습니다.";
	       chat += "\r\n\r\n#L1006#　　　　<이볼빙 코인 [#e#r7#k#n] 개로 구매 가능한 아이템>\r\n";
	       chat += "\r\n#L102#[ #r#i1142335# #r공마400 을 교환하겠습니다.]";
	       cm.sendSimple(chat);

	    }  if (selection >= 990) {
		    cm.dispose();
	    } else if (selection == 1) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i4001126# 20000개#k를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(4001126, 20000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 2) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4310060)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r5억 메소#k를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainMeso(500000000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 3) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(2049704)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i2049704## 20장#k을 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(2049704, 20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 4) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(2350002)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i2350002## 1장#k 을 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(2350002, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 5) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1142134)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1142134# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1142134, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 7) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1052526)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1052526# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1052526, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 8) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1052527)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1052527#를 구입 하셨습니다.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1052527, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 81) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112586#를 구입 하셨습니다.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 9) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1003622)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1003622# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1003622, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 10) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1112110)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112110# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1112110, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 11) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1112220)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112220# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1112220, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 12) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1102309)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1102309# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1102309, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 13) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1003621)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1003621# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1003621, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 15) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112586# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 16) {
		if (cm.haveItem(4310060, 10)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112735# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -10);
			cm.gainItem(1112735, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 20) {
		if (cm.haveItem(4310060, 4)) {
		    if (cm.canHold(1102095)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1102095# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -4);
			cm.gainItem(1102095, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 21) {
		if (cm.haveItem(4310060, 4)) {
		    if (cm.canHold(1102096)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1102096# 를 구입 하셨습니다.");
			cm.gainItem(1102451, -4);
			cm.gainItem(1102096, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 22) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1102097)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1102097# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1102097, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 23) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112118)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112118# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112118, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 24) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112228)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112228# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112228, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 25) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1102532)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1102532# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1102532, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}

	    } else if (selection == 50) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1112111)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112727# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1112111, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 51) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1112221)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1112221# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1112221, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 52) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i4310027# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -1);
			cm.gainItem(4310027, 50);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 100) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1142135)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1142135# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1142135, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 101) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1142136)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1142136# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1142136, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 102) {
		if (cm.haveItem(4310060, 7)) {
		    if (cm.canHold(1142335)) {
		        cm.sendOk("#r이볼빙 코인#k으로 #r#i1142335# 를 구입 하셨습니다.");
			cm.gainItem(4310060, -7);
			cm.gainItem(1142335, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r이볼빙 코인#k이 부족합니다.");
		    cm.dispose();

}

		}
	}
}



