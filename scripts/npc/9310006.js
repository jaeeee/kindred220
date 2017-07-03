importPackage(java.lang);
importPackage(Packages.hina.main.world);
importPackage(Packages.hina.packet.creators);
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
               var chat = "#fn궁서체##fs 14# #e[유화온라인 낚시]#k\r\n";
 	       chat += "#L1##fn굴림##fs 12# #i3010432# #r낚시터 의자를 받겠습니다.#k\r\n";
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 1) {
		if(cm.haveMeso(0)) { 
		    if (cm.canHold(3010432)) {
				cm.gainItem(3010432,1);
		        cm.sendOk("#i3010432##z3010432##k 성공적으로 구매가 됐습니다.");
			cm.dispose();
		    } else {
		        cm.sendOk("설치칸에 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 14) {
		if(cm.haveItem(4310113, 1)) { 
		    if (cm.canHold(2048721)) {
			cm.gainItem(4310113, -1);
				cm.gainItem(2048721,10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 2) {
		if(cm.haveItem(4310113, 20)) { 
		    if (cm.canHold(1102699)) {
			cm.gainItem(4310113, -20);
		        cm.sendOk("아이템을 구매 하였습니다.");
	                cm.gainSponserItem(1102699,'[홍보]',1000,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 3) {
		if(cm.haveItem(4310113, 2)) { 
			cm.gainItem(4310113, -2);
		    if (cm.gainRC(2000)) {
			cm.gainRC(2000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();

}
}  if (selection == 4) {
		if(cm.haveItem(3010432, 1)) { 
			cm.gainItem(4310113, -1);
		    if (cm.gainRC(1000)) {
			cm.gainRC(1000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();
}
}  if (selection == 5) {
		if(cm.haveItem(4310113, 3)) { 
			cm.gainItem(4310113, -3);
		    if (cm.gainRC(3000)) {
			cm.gainRC(3000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();

}
}  if (selection == 6) {
		if(cm.haveItem(4310113, 1)) { 
	                     if (cm.canHold(1112663)) {
			cm.gainItem(4310113, -1);
		        cm.sendOk("아이템을 구매 하였습니다");
	   	                 cm.gainItem(1112663,1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 7) {
		if(cm.haveItem(4310113, 20)) { 
	                     if (cm.canHold(1102630)) {
			cm.gainItem(4310113, -20);
		        cm.sendOk("아이템을 구매 하였습니다.");
	                cm.gainSponserItem(1102630,'[홍보]',1000,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();


}
}  if (selection == 8) {
		if(cm.haveItem(4310113, 1)) { 
	                     if (cm.canHold(2591264)) {
			cm.gainItem(4310113, -1);
	   	                 cm.gainItem(2591264,1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();


}
}  if (selection == 9) {
			if(cm.haveItem(4310113, 1)) { 
	                     if (cm.canHold(2591088)) {
			cm.gainItem(4310113, -1);
	   	                 cm.gainItem(2591088,1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();


}
}  if (selection == 10) {
		if(cm.haveItem(4310113, 1)) { 
	                     if (cm.canHold(4000176)) {
			cm.gainItem(4031868, -1);
	   	                 cm.gainItem(4310113,1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("코인이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 11) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(2046095)) {
			cm.gainItem(2046095,4);
		        cm.sendOk("홍보포인트 20으로 #i2046095##z2046095# 4개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("영혼의 돌이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 12) {
		if (cm.getPlayer().getHBPT() >= 5) {
		    if (cm.canHold(4001109)) {
			cm.gainItem(4001109,1);
		        cm.sendOk("홍보포인트 5으로 #i4001109##z4001109# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-5);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("영혼의 돌이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 13) {
		if (cm.getPlayer().getHBPT() >= 40) {
		    if (cm.canHold(4001163)) {
			cm.gainItem(4001163,1);
		        cm.sendOk("홍보포인트 40으로 #i4001163##z4001163# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-40);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("영혼의 돌이 부족합니다.");
		    cm.dispose();

}
	    

	 
		}
	}
}



