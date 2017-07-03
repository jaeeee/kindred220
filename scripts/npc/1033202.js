

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
         
	       var Lcoin = cm.itemQuantity(4310088);
	       var chat = "\r\n#L998#";
	       chat += "#r#e현재 #b#h0##k님의#r#i4310088# 홍보 코인 갯수 #r#e"+ Lcoin +" #n#k#k#n\r\n\r\n"
               chat += "\r\n\r\n#L1005#<홍보 코인 [#e#r30#k#n] 개로 구매 가능한 아이템[#e#r올스텟150#k#n]>\r\n";
	       chat += "#L20# #i1112141#";
	       chat += "#L21# #i1112252#";
	       chat += "#L22# #i1112135#";
	       chat += "#L23# #i1112238#\r\n";
	       chat += "#L24# #i1112150#";
	       chat += "#L25# #i1112262#";
	       chat += "#L26# #i1112146#";
	       chat += "#L27# #i1112258#";
	
	       cm.sendSimple(chat);

	    }  if (selection >= 9999999) {
		    cm.dispose();
    } else if (selection == 1) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(2049361)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i2049361# 10개#k를 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(2049361,10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}	
    } else if (selection == 111) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1102550)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1102550# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1102550,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
    } else if (selection == 110) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1102551)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1102551# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1102551,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 109) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1702455)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1702455# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
                        cm.gndnjs(1702455,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 2) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(2049704)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i2049704# 10개#k를 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(2049704,10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 108) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1052661)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1052661# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1052661,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 107) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1082549)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1082549# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1082549,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 106) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1003965)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1003965# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1003965,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 105) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1702433)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1702433# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
                        cm.gndnjs(1702433,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 104) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1052587)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1052587# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1052587,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 104) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1052587)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1052587# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1052587,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 103) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1082493)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1082493# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1082493,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 102) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1003776)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1003776# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1003776,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 101) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1052527)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1052527# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1052527,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 100) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1052434)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1052434# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1052434,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();
}
	    } else if (selection == 17) {
		if (cm.haveItem(4310088, 40)) {
		    if (cm.canHold(1112585)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112585# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -40);
                        cm.gndnjs(1112585,200,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 52) {
		if (cm.haveItem(4310088, 50)) {
		    if (cm.canHold(1142249)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1142623# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -50);
                        cm.gndnjs(1142623,250,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 51) {
		if (cm.haveItem(4310088, 50)) {
		    if (cm.canHold(1142249)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1142249# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -50);
                        cm.gndnjs(1142249,250,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 50) {
		if (cm.haveItem(4310088, 50)) {
		    if (cm.canHold(1102450)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112558# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -50);
                        cm.gndnjs(1112558,250,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 2) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(4310088)) {
		        cm.sendOk("#r홍보 코인#k으로 #r1억 메소#k를 구입 하셨습니다.");
			cm.gainItem(4310088, -3);
			cm.gainMeso(100000000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 3) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(2049400)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i2049400## 10장#k을 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(2049400, 10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 4) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(4310029)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i4310029# 을 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(4310029, 3);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 5) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(2049300)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i2049300# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -5);
			cm.gainItem(2049300, 5);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 7) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1102450)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1102450# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1102376,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 8) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1102451)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1102451#를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1102451,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 81) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1102452)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1102452#를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1102452,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 9) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1702456)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1702456# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
			
                        cm.gndnjs(1702456,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 10) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1702451)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1702451# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
                        cm.gndnjs(1702451,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 11) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1702457)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1702457# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
                        cm.gndnjs(1702457,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 12) {
		if (cm.haveItem(4310088, 10)) {
		    if (cm.canHold(1003133)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1003133# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -10);
                        cm.gndnjs(1003133,50,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 13) {
		if (cm.haveItem(4310088, 20)) {
		    if (cm.canHold(1003636)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1003636# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -20);
                        cm.gndnjs(1003636,100,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 15) {
		if (cm.haveItem(4310088, 40)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112586# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -40);
                        cm.gndnjs(1112586,250,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 16) {
		if (cm.haveItem(4310088, 40)) {
		    if (cm.canHold(1112663)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112663# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -40);
                        cm.gndnjs(1112663,200,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 20) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112141)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112141# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112141,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 21) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112252)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112252# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112252,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 22) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112135)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112135# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112135,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 23) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112238)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112238# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112238,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 24) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112150)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112150 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112150,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 25) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112262)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112262# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112262,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 26) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112146)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112146# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112146,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 27) {
		if (cm.haveItem(4310088, 30)) {
		    if (cm.canHold(1112258)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i1112258# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -30);
                        cm.gndnjs(1112258,150,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 50) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(5064000)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i5064000# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(5064000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 51) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(5062005)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i5062005# 50개 를 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(5062005, 50);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
	    } else if (selection == 52) {
		if (cm.haveItem(4310088, 1)) {
		    if (cm.canHold(5064100)) {
		        cm.sendOk("#r홍보 코인#k으로 #r#i5064100# 를 구입 하셨습니다.");
			cm.gainItem(4310088, -1);
			cm.gainItem(5064100, 5);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r홍보 코인#k이 부족합니다.");
		    cm.dispose();

}
             } else if (selection == 10001) {
		cm.dispose();
		cm.openNpc(1033221);
		return;

             } else if (selection == 10002) {
		cm.dispose();
		cm.openNpc(1033211);
		return;
             } else if (selection == 10003) {
		cm.dispose();
		cm.openNpc(1033206);
		return;
             } else if (selection == 10004) {
		cm.dispose();
		cm.openNpc(1033205);
		return;
             } else if (selection == 10005) {
		cm.dispose();
		cm.openNpc(1033202);
		return;


		}
	}
}



