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

	       var chat = "안녕하세요 #h0#님! 홍보포인트 상점입니다. 현재 홍보 이벤트중입니다.\r\n";
	       chat += "현재 #h0#님의 홍보포인트는 #r#e"+cm.getPlayer().getHBPT()+" #n#k입니다."
	       chat += "\r\n#L1# (100p)-#i4310027#(15개)"; 
	       chat += "#L14# (100p)-#i4310066#(200개)"; 
	       chat += "\r\n#L2# (20p)-#i2470002#(1개)"; 
	       chat += "#L3# (20p)-#i2049004#(1개)"; 
	       chat += "\r\n#L5# (20p)-#i1012303#(1개)"; 
	       chat += "#L6# (20p)-#i1012304#(1개)"; 
	       chat += "\r\n#L7# (20p)-#i1012305#(1개)"; 
	       chat += "#L8# (20p)-#i1012306#(1개)"; 
	       chat += "\r\n#L12# (5p)-#i4001109#(1병)";
	       chat += "#L13# (40p)-#i4001163#(1개)";
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 1) {
		if (cm.getPlayer().getHBPT() >= 100) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310027,15);
		        cm.sendOk("홍보포인트 100으로 #i4310027##z4310027# 15개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 14) {
		if (cm.getPlayer().getHBPT() >= 100) {
		    if (cm.canHold(4310066)) {
			cm.gainItem(4310066,200);
		        cm.sendOk("홍보포인트 100으로 #i4310066##z4310066# 200개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 2) {
		if (cm.getPlayer().getHBPT() >= 10) {
		    if (cm.canHold(2470002)) {
			cm.gainItem(2470002,6);
		        cm.sendOk("홍보포인트 10으로 #i2470002##z2470002# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 3) {
		if (cm.getPlayer().getHBPT() >= 10) {
		    if (cm.canHold(2049004)) {
			cm.gainItem(2049004,1);
		        cm.sendOk("홍보포인트 10으로 #i2049004##z2049004# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 4) {
		if (cm.getPlayer().getHBPT() >= 30) {
		    if (cm.canHold(4001208)) {
			cm.gainItem(4001208,1);
		        cm.sendOk("홍보포인트 30으로 #i4001208##z4001208# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-30);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 5) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(1012303)) {
			cm.gainItem(1012303,1);
		        cm.sendOk("홍보포인트 20으로 #i1012303##z1012303# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 6) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(1012304)) {
			cm.gainItem(1012304,1);
		        cm.sendOk("홍보포인트 20으로 #i1012304##z1012304# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 7) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(1012305)) {
			cm.gainItem(1012305,1);
		        cm.sendOk("홍보포인트 20000으로 #i1012305##z1012305# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 8) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(1012306)) {
			cm.gainItem(1012306,1);
		        cm.sendOk("홍보포인트 20으로 #i1012306##z1012306# 1개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 9) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(2046162)) {
			cm.gainItem(2046162,4);
		        cm.sendOk("홍보포인트 20으로 #i2046162##z2046162# 4개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 10) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(2046094)) {
			cm.gainItem(2046094,4);
		        cm.sendOk("홍보포인트 20으로 #i2046094##z2046094# 4개를 구매 하였습니다.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 포인트가 부족합니다.");
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
		    cm.sendOk("홍보 포인트가 부족합니다.");
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
		    cm.sendOk("홍보 포인트가 부족합니다.");
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
		    cm.sendOk("홍보 포인트가 부족합니다.");
		    cm.dispose();

}
	    

	 
		}
	}
}



