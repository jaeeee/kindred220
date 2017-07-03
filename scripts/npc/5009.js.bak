/*


소스: Dbg.client의 DbgPlayer.java에 다음을 추가해주세요.

    public void tddFame(int famechange) {
        this.fame -= famechange;
    }


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
            
	       var chat = "#b#h0##k님 안녕! 절대음감 상점이에요.\r\n";
	       chat += "\r\n#L9999# 아래의 물품을 구매하실수 있습니다..";
	       chat += "\r\n#L400##i4310000# (1개) - 환생포인트　　 (Point #r800#k)";
	       chat += "\r\n#L401##i4310000# (3개) - #i1002367#　　(올스텟 #r300#k)";
	       chat += "\r\n#L402##i4310000# (3개) - #i1002450#　　(올스텟 #r300#k)";
	       chat += "\r\n#L405##i4310000# (3개) - #i1022102#　　(올스텟 #r300#k)";
	       chat += "\r\n#L403##i4310000# (4개) - #i1102307#　　 (올스텟 #r500#k)";
	       chat += "\r\n#L404##i4310000# (4개) - #i1102308# 　　(올스텟 #r500#k)";
	       chat += "\r\n#L411##i4310000# (6개) - #i1302065#　　 (올스텟 #r300#k)";
	       chat += "\r\n#L410##i4310000# (7개) - #i1112750# 　　(올스텟 #r200#k+공격력 #r30#k+업글횟수 #r3#k)";
	      //chat += "\r\n#L405##i4310000# (4개) - #i1102308# (#t1102308#)";
	      // chat += "\r\n#L404##i4310000# (180개) - #i2049116# (#t2049116#)";
	      // chat += "\r\n#L405##i4310000# (60개) - #i2049401# (#t2049401#)";
	      // chat += "\r\n#L406##i4310000# (140개) - #i2049400# (#t2049400#)";
	      // chat += "\r\n#L407##i4310000# (180개) - #i2049700# (#t2049700#)";
	      // chat += "\r\n#L408##i4310000# (200개) - #i4001017# (#t4001017#)";
	       cm.sendSimple(chat);

	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 400) {
		if (cm.haveItem(4310000, 1)) {
		    if (cm.canHold(4310000)) {
		        cm.sendOk("절대음감으로 환생포인트를 구매하였습니다.");
			cm.getPlayer().addFame(800);
			cm.gainItem(4310000, -1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다.");
		    cm.dispose();

}



	    }  if (selection == 401) {
		if (cm.haveItem(4310000, 3)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(1002367,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -3);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 402) {
		if (cm.haveItem(4310000, 3)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(1002450,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -3);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 403) {
		if (cm.haveItem(4310000, 4)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(1102307,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -4);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 404) {
		if (cm.haveItem(4310000, 4)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(1102308,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -4);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 405) {
		if (cm.haveItem(4310000, 3)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(1022102,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -3);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 406) {
		if (cm.haveItem(4310000, 1)) {
		    if (cm.canHold(4310000)) {
			cm.gainMeso(50000000);
		        cm.sendOk("절대음감으로 메소를 구매하였습니다.");
			cm.gainItem(4310000, -1);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 407) {
		if (cm.haveItem(4310000, 180)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(2049700,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -180);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 408) {
		if (cm.haveItem(4310000, 200)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(4001017,1);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
}  if (selection == 409) {
		if (cm.haveItem(4310000, 100)) {
		    if (cm.canHold(4310000)) {
			cm.gainItem(2460003,50);
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(4310000, -100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다");
		    cm.dispose();

}
}  if (selection == 410) {
		if (cm.haveItem(4310000, 7)) {
		    if (cm.canHold(4310000)) {
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(1112750, 1);
			cm.gainItem(4310000, -7);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다.");
		    cm.dispose();

}
}  if (selection == 411) {
		if (cm.haveItem(4310000, 6)) {
		    if (cm.canHold(4310000)) {
		        cm.sendOk("절대음감으로 아이템을 구매하였습니다.");
			cm.gainItem(1302065, 1);
			cm.gainItem(4310000, -6);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("절대음감이 부족합니다.");
		    cm.dispose();

}
	    
	    

	 
		}
	}
}



