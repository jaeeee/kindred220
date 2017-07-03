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
            	
	       var leaf = cm.itemQuantity(4310016);
	       var chat = "안녕하세요 #h0#님! 빨간단추 상점입니다.\r\n";
	       chat += "현재 #h0#님의 빨간단추 갯수는 #r#e"+ leaf +" #n#k개 입니다.#b"
	       chat += "\r\n#L400##i4310016# (7개)　　 -　#i4310034##z4310034#(1개)";
	       chat += "\r\n#L401##i4310016# (10개)　  -　#i2046374##z2046374#(1개)";
	       chat += "\r\n#L402##i4310016# (15개)　  -　#i2049122##z2049122#(1개)";
//	       chat += "\r\n#L418##i4001126# (2000개)　　-　환생포인트 (100Point)";
//	       chat += "\r\n#L430##i4001126# (150개)  　  -　#i4031179# (#z4031179#)";
//	       chat += "\r\n#L408##i4001126# (300개) 　　-　#i4001017# (#z4001017#)";
//	       chat += "\r\n#L409##i4001126# (200개) 　　-　#i2460003# (#z2460003#) - (10개)";
//	       chat += "\r\n#L401##i4001126# (120개) 　　-　#i2049301# (#z2049301#)";
//	       chat += "\r\n#L402##i4001126# (200개) 　　-　#i2049300# (#z2049300#)";
//	       chat += "\r\n#L403##i4001126# (280개) 　　-　#i2049100# (#z2049100#)";
//	       chat += "\r\n#L404##i4001126# (360개) 　　-　#i2049116# (#z2049116#)";
//	       chat += "\r\n#L405##i4001126# (120개) 　　-　#i2049401# (#z2049401#)";
//	       chat += "\r\n#L406##i4001126# (280개) 　　-　#i2049400# (#z2049400#)";
//	       chat += "\r\n#L407##i4001126# (360개) 　　-　#i2049700# (#z2049700#)";
//	       chat += "\r\n#L410##i4001126# (7000개)　　-　#i1662002# (#z1662002#)";
//	       chat += "\r\n#L411##i4001126# (7000개)　　-　#i1662003# (#z1662003#)";
//	       chat += "\r\n#L412##i4001126# (4000개)　　-　#i1672000# (#z1672000#)";
//	       chat += "\r\n#L413##i4001126# (5000개)　　-　#i1672001# (#z1672001#)";
//	       chat += "\r\n#L414##i4001126# (6000개)　　-　#i1672002# (#z1672002#)";
//	       chat += "\r\n#L415##i4001126# (7000개)　　-　#i1672003# (#z1672003#)";
//	       chat += "\r\n#L416##i4001126# (8000개)　　-　#i1672004# (#z1672004#)";
//	       chat += "\r\n#L417##i4001126# (9000개)　　-　#i1672005# (#z1672005#)";
	       cm.sendSimple(chat);


	      // chat += "\r\n#L400##i4310016# (10개)　　 -　i#4310034#(1개)";
	      // chat += "\r\n#L401##i4310016# (10개)　　 -　i#2046374#(1개)";
	    }  if (selection == 49999) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("빨간단추로 환생포인트를 구매하였습니다.");
			cm.getPlayer().addFame(10);
			cm.gainItem(4001126, -200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 4412301) {
		if (cm.haveItem(4001126, 2000)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("빨간단추로 환생포인트를 구매하였습니다.");
			cm.getPlayer().addFame(100);
			cm.gainItem(4001126, -2000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 400) {
		if (cm.haveItem(4310016, 7)) {
		    if (cm.canHold(4310016)) {
		        cm.sendOk("빨간단추로 환생포인트를 구매하였습니다.");
			cm.gainItem(4310034, 1);
			cm.gainItem(4310016, -7);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다.");
		    cm.dispose();

}


	    }  if (selection == 401) {
		if (cm.haveItem(4310016, 10)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2046374,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4310016, -10);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 402) {
		if (cm.haveItem(4310016, 15)) {
		    if (cm.canHold(4310016)) {
			cm.gainItem(2049122,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4310016, -15);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 403) {
		if (cm.haveItem(4001126, 280)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2049100,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -280);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 404) {
		if (cm.haveItem(4001126, 360)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2049116,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -360);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 405) {
		if (cm.haveItem(4001126, 120)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2049401,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -120);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 406) {
		if (cm.haveItem(4001126, 280)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2049400,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -280);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 407) {
		if (cm.haveItem(4001126, 360)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2049700,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -360);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
	    }  if (selection == 408) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(4001017,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -300);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 409) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2460003, 10);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 410) {
		if (cm.haveItem(4001126, 7000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1662002,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -7000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 411) {
		if (cm.haveItem(4001126, 7000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1662003,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -7000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 412) {
		if (cm.haveItem(4001126, 4000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672000,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -4000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 413) {
		if (cm.haveItem(4001126, 5000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672001,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -5000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 414) {
		if (cm.haveItem(4001126, 6000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672002,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -6000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 415) {
		if (cm.haveItem(4001126, 7000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672003,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -7000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 416) {
		if (cm.haveItem(4001126, 8000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672004,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -8000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 417) {
		if (cm.haveItem(4001126, 9000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1672005,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -9000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 420) {
		if (cm.haveItem(4001126, 8000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1532018,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -8000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}
}  if (selection == 421) {
		if (cm.haveItem(4001126, 9000)) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1522018,1);
		        cm.sendOk("빨간단추로 아이템을 구매하였습니다.");
			cm.gainItem(4001126, -9000);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("빨간단추가 부족합니다");
		    cm.dispose();

}

	    
	    

	 
		}
	}
}



