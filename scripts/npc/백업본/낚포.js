/*


소스: Rave.client의 RavePlayer.java에 다음을 추가해주세요.

    public void tddFame(int famechange) {
        this.fame -= famechange;
    }


*/
importPackage(java.lang);
importPackage(Packages.Rave.main.world);
importPackage(Packages.Rave.packet.creators);
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

	       var chat = "안녕하세요 #h0#님! 환생포인트 상점입니다.\r\n";
	       chat += "현재 #h0#님의 환생포인트는 #r#e"+cm.getPlayer().getFame()+" #n#k입니다."
               chat += "\r\n#L7##b (1p당 100000)- 메소 환전#k";
               //chat += "\r\n#L8# (2000p)-#i4310027#(#z4310027#) 5개#k";
	       chat += "\r\n#L9# (1000p)-#i4310066#(#z4310066#) 50개#k";
               chat += "\r\n#L1# (500p)-#i2430446#(#z2430446#)#k";
	       chat += "\r\n#L2# (500p)-#i2430447#(#z2430447#)#k";
               chat += "\r\n#L3# (500p)-#i2430449#(#z2430449#)#k";
	       chat += "\r\n#L4# (500p)-#i2430451#(#z2430451#)#k";
	       chat += "\r\n#L5# (500p)-#i2430452#(#z2430452#)#k";
	       chat += "\r\n#L6# (20000p)-#i1142076#(올스텟200/공마100)#k";
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();

}  if (selection == 7) {
	cm.dispose();
        cm.openNpc(1012009);
		return;
}  if (selection == 1) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430446)) {
			cm.gainItem(2430446,1);
		        cm.sendOk("환생포인트 500으로 #i2430446##z2430446#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 2) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430447)) {
			cm.gainItem(2430447,1);
		        cm.sendOk("환생포인트 500으로 #i2430447##z2430447#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 3) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430449)) {
			cm.gainItem(2430449,1);
		        cm.sendOk("환생포인트 500으로 #i2430449##z2430449#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 4) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430451)) {
			cm.gainItem(2430451,1);
		        cm.sendOk("환생포인트 500으로 #i2430451##z2430451#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 5) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430452)) {
			cm.gainItem(2430452,1);
		        cm.sendOk("환생포인트 500으로 #i2430452##z2430452#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 6) {
		if (cm.getPlayer().getFame() >= 20000) {
		    if (cm.canHold(1142076)) {
			cm.gainItem(1142076,1);
		        cm.sendOk("환생포인트 20000으로 #i1142076##z1142076#1개를 구매 하였습니다.");
			cm.getPlayer().addFame(-20000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 8) {
		if (cm.getPlayer().getFame() >= 2000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310027,5);
		        cm.sendOk("환생포인트 2000으로 #i4310027##z4310027#5개를 구매 하였습니다.");
			cm.getPlayer().addFame(-2000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();
}
}  if (selection == 9) {
		if (cm.getPlayer().getFame() >= 1000) {
		    if (cm.canHold(4310066)) {
			cm.gainItem(4310066,50);
		        cm.sendOk("환생포인트 1000으로 #i4310066##z4310066#50개를 구매 하였습니다.");
			cm.getPlayer().addFame(-1000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();
}

	    

	 
		}
	}
}



