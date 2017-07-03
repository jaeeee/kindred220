/*


소스: Dbg.client의 DbgPlayer.java에 다음을 추가해주세요.

    public void tddFame(int famechange) {
        this.fame -= famechange;
    }


*/
importPackage(java.lang);
importPackage(Packages.Dbg.main.world);
importPackage(Packages.Dbg.packet.creators);
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
	       chat += "\r\n#L1112#";
	       chat += "\r\n#L1113#　　　　　 <아래 물품들을 골라주세요.>\r\n";
	       chat += "\r\n#L419# (100p)  　-#i4001126#(800개)　";	
	       chat += "#L420# (1000p)-#i2470000#(1개)"; 
               chat += "\r\n#L500# (2800p)-#i1112747#(#z1112747#)";
	       chat += "\r\n#L501# (3200p)-#i1112748#(#z1112748#)";
               chat += "\r\n#L502# (2800p)-#i1022113#(#z1022113#) + #r공10#k";
	       chat += "\r\n#L503# (3400p)-#i1003598#(#z1003598#) + #r공20#k";
	       chat += "\r\n\r\n#L1000#　　　　 <아래 물품들은 #r올스텟 150#k입니다.>\r\n";
               chat += "\r\n#L400# (2500p)-#i1442039#(#z1442039#)";
	       chat += "\r\n#L401# (2500p)-#i1492120#(#z1492120#)";
	       chat += "\r\n#L402# (2500p)-#i1302063#(#z1302063#)";
	       chat += "\r\n#L403# (2500p)-#i1332020#(#z1332020#)";
	       chat += "\r\n#L404# (2500p)-#i1332030#(#z1332030#)";
	       chat += "\r\n#L405# (2500p)-#i1452131#(#z1452131#)";
	       chat += "\r\n#L406# (2500p)-#i1522013#(#z1522013#)";
	       chat += "\r\n#L407# (2500p)-#i1462076#(#z1462076#)";
	       chat += "\r\n#L408# (2500p)-#i1372033#(#z1372033#)";
	       chat += "\r\n#L409# (2500p)-#i1382016#(#z1382016#)";
	       chat += "\r\n#L410# (2500p)-#i1312014#(#z1312014#)";
	       chat += "\r\n#L411# (2500p)-#i1322033#(#z1322033#)";
	       chat += "\r\n#L412# (2500p)-#i1402005#(#z1402005#)";
	       chat += "\r\n#L413# (2500p)-#i1422011#(#z1422011#)";
	       chat += "\r\n#L418# (2500p)-#i1362010#(#z1362010#)";
	       chat += "\r\n#L417# (2500p)-#i1432008#(#z1432008#)";
	       chat += "\r\n#L416# (3000p)-#i1342010#(#z1342010#)(#r올스텟70#k) ";
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 420) {
		if (cm.getPlayer().getFame() >= 1000) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(2470000,1);
		        cm.sendOk("환생포인트 100으로 #i2470000##z2470000#1개를 구매 하였습니다.");
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
}  if (selection == 419) {
		if (cm.getPlayer().getFame() >= 100) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(4001126,800);
		        cm.sendOk("환생포인트 100으로 #i4001126##z4001126#800개를 구매 하였습니다.");
			cm.getPlayer().addFame(-100);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 500) {
		if (cm.getPlayer().getFame() >= 2800) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1112747,1);
		        cm.sendOk("환생포인트 3000으로 #i1112747##z1112747#를 구매 하였습니다.");
			cm.getPlayer().addFame(-2800);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 501) {
		if (cm.getPlayer().getFame() >= 3200) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1112748,1);
		        cm.sendOk("환생포인트 3500으로 #i1112748##z1112748#를 구매 하였습니다.");
			cm.getPlayer().addFame(-3200);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 502) {
		if (cm.getPlayer().getFame() >= 2800) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1022113,1);
		        cm.sendOk("환생포인트 2800으로 #i1022113##z1022113#를 구매 하였습니다.");
			cm.getPlayer().addFame(-2800);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
}  if (selection == 503) {
		if (cm.getPlayer().getFame() >= 3400) {
		    if (cm.canHold(4001126)) {
			cm.gainItem(1003598,1);
		        cm.sendOk("환생포인트 3400으로 #i1003598##z1003598#를 구매 하였습니다.");
			cm.getPlayer().addFame(-3400);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 400) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1442039)) {
			cm.gainItem(1442039,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}



	    }  if (selection == 401) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1492120)) {
			cm.gainItem(1492120,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}

	    }  if (selection == 402) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1302063)) {
			cm.gainItem(1302063,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("당신은 환생 포인트가 부족한거 같군요.");
		    cm.dispose();

}
	    }  if (selection == 403) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1332020)) {
			cm.gainItem(1332020,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 404) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1332030)) {
			cm.gainItem(1332030,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 405) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1452131)) {
			cm.gainItem(1452131,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 406) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1522013)) {
			cm.gainItem(1522013,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 407) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1462076)) {
			cm.gainItem(1462076,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 408) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1372033)) {
			cm.gainItem(1372033,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 409) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1382016)) {
			cm.gainItem(1382016,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 410) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1312014)) {
			cm.gainItem(1312014,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 411) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1322033)) {
			cm.gainItem(1322033,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 412) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1402005)) {
			cm.gainItem(1402005,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 413) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1422011)) {
			cm.gainItem(1422011,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 418) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1362010)) {
			cm.gainItem(1362010,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 417) {
		if (cm.getPlayer().getFame() >= 2500) {
		    if (cm.canHold(1432008)) {
			cm.gainItem(1432008,1);
		        cm.sendOk("환생포인트 2500으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-2500);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("환생 포인트가 부족합니다.");
		    cm.dispose();

}
	    }  if (selection == 416) {
		if (cm.getPlayer().getFame() >= 3000) {
		    if (cm.canHold(1342010)) {
			cm.gainItem(1342010,1);
		        cm.sendOk("환생포인트 3000으로 아이템를 구매 하였습니다.");
			cm.getPlayer().addFame(-3000);
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



