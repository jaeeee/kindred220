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

	       var chat = "#r후원포인트#k로 구매한 코인은 #b후원 상점#k에서 사용가능합니다.\r\n";
	       chat += "#h0#님의 소지 후원포인트 #r#e[ "+cm.getPlayer().getHPT()+" ] #n#k입니다."
	       chat += "\r\n#L3##i4310070#0개 + #i4310027#1개 + #i4310059#2개 ← #r#e[1000P]#n#k"; 
	       chat += "\r\n#L1##i4310070#2개 + #i4310027#5개 + #i4310059#10개 ← #r#e[5000P]#n#k"; 
	       chat += "\r\n#L2##i4310070#5개 + #i4310027#10개 + #i4310059#25개 ← #r#e[10000P]#n#k"; 
	       chat += "\r\n#L4##i4310070#20개 + #i4310027#30개 + #i4310059#80개 ← #r#e[30000P]#n#k";
	       chat += "\r\n#L5##i4310070#40개 + #i4310027#60개 + #i4310059#150개 ← #r#e[50000P]#n#k"; 
	       chat += "\r\n#L6##i4310070#90개 + #i4310027#130개 + #i4310059#320개 ← #r#e[100000P]#n#k"; 
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 1) {
		if (cm.getPlayer().getHPT() >= 5000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,1);
			cm.gainItem(4310027,10);
			cm.gainItem(4310059,5);
		        cm.sendOk("후원포인트 5000으로 #i4310070#1개 + #i4310027#10개 + #i4310059#5개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-5000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 2) {
		if (cm.getPlayer().getHPT() >= 10000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,2);
			cm.gainItem(4310027,25);
			cm.gainItem(4310059,10);
		        cm.sendOk("후원포인트 10000으로 #i4310070#2개 + #i4310027#25개 + #i4310059#10개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-10000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 3) {
		if (cm.getPlayer().getHPT() >= 1000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310027,1);
			cm.gainItem(4310059,2);
		        cm.sendOk("후원포인트 1000으로  #i4310027#1개 + #i4310059#2개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-1000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 4) {
		if (cm.getPlayer().getHPT() >= 30000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,7);
			cm.gainItem(4310027,75);
			cm.gainItem(4310059,30);
		        cm.sendOk("후원포인트 30000으로 #i4310070#7개 + #i4310027#75개 + #i4310059#30개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-30000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 5) {
		if (cm.getPlayer().getHPT() >= 50000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,13);
			cm.gainItem(4310027,140);
			cm.gainItem(4310059,50);
		        cm.sendOk("후원포인트 50000으로 #i4310070#13개 + #i4310027#140개 + #i4310059#50개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-50000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 6) {
		if (cm.getPlayer().getHPT() >= 100000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,30);
			cm.gainItem(4310027,300);
			cm.gainItem(4310059,100);
		        cm.sendOk("후원포인트 100000으로 #i4310070#30개 + #i4310027#300개 + #i4310059#100개를 구매 하였습니다.");
			cm.getPlayer().gainHPT(-100000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("후원 포인트가 부족합니다.");
		    cm.dispose();

}
	    

	 
		}
	}
}



