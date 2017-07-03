/* Made By : Pantom_adm@naver.com





소스: hina.client의 HinaPlayer.java에 다음을 추가해주세요.

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
            	
	       var leaf = cm.itemQuantity(4001126);
	       var chat = "#b안녕하세요 #h0#님! 한정 캐시템 상점입니다.#k\r\n";
	       chat += "\r\n#r한정 캐시템을 사기위해서는 홍보하시면 드리는 돌고래섬 기념주화 #i4310021#(이)가 있어야가능합니다.#k";
	       chat += "\r\n#L1##i4310021# (2개)　　 -　#i1702334# (#z1702334#)";
	       chat += "\r\n#L2##i4310021# (2개) 　　-　#i1702336# (#z1702336#)";
	       chat += "\r\n#L3##i4310021# (2개) 　　-　#i1702352# (#z1702352#)";
               chat += "\r\n#L4##i4310021# (2개) 　　-　#i1702304# (#z1702304#)";
               chat += "\r\n#L5##i4310021# (2개) 　　-　#i1000013# (#z1000013#)";
               chat += "\r\n#L6##i4310021# (2개) 　　-　#i1000014# (#z1000014#)";
               chat += "\r\n#L7##i4310021# (2개) 　　-　#i1000015# (#z1000015#)";
               chat += "\r\n#L8##i4310021# (2개) 　　-　#i1002995# (#z1002995#)";
               chat += "\r\n#L9##i4310021# (2개) 　　-　#i1052209# (#z1052209#)";
               chat += "\r\n#L10##i4310021# (2개) 　　-　#i1003776# (#z1003776#)";
               chat += "\r\n#L20##i4310021# (2개) 　　-　#i1052587# (#z1052587#)";
               chat += "\r\n#L11##i4310021# (2개) 　　-　#i1003777# (#z1003777#)";
               chat += "\r\n#L12##i4310021# (2개) 　　-　#i1003778# (#z1003778#)";
               chat += "\r\n#L13##i4310021# (2개) 　　-　#i1003779# (#z1003779#)";
               chat += "\r\n#L14##i4310021# (2개) 　　-　#i1000042# (#z1000042#)";
               chat += "\r\n#L15##i4310021# (2개) 　　-　#i1003492# (#z1003492#)";
               chat += "\r\n#L16##i4310021# (2개) 　　-　#i1003493# (#z1003493#)";
               chat += "\r\n#L17##i4310021# (2개) 　　-　#i1003494# (#z1003494#)";
               chat += "\r\n#L18##i4310021# (2개) 　　-　#i1003495# (#z1003495#)";
               chat += "\r\n#L19##i4310021# (2개) 　　-　#i1003496# (#z1003496#)";

	       cm.sendSimple(chat);


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 1) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1702334, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	    }  if (selection == 2) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1702336, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	    }  if (selection == 3) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1702352, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	    	    }  if (selection == 4) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1702304, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	                
		    }  if (selection == 5) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1000013, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    }  if (selection == 6) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1000014, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    	    }  if (selection == 7) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1000015, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    	    }  if (selection == 8) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1002995, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    	    }  if (selection == 9) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1052209, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    	    }  if (selection == 10) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003776, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();


}	    
	 	    	    }  if (selection == 11) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003777, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 12) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003778, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 13) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003779, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 14) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1000042, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 15) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003492, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 16) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003493, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 17) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003494, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 18) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003495, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 19) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1003496, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	 	    	    }  if (selection == 20) {
		if (cm.haveItem(4310021, 2)) {
		    if (cm.canHold(4310021)) {
		        cm.sendOk("홍보 전용 코인으로 한정템을 구매하였습니다.");
			cm.gainItem(1052587, 1);
			cm.gainItem(4310021, -2);
			cm.dispose();
		    } else {
		        cm.sendOk("장비칸에 빈 공간이 없습니다.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("홍보 전용 코인이 부족합니다.");
		    cm.dispose();

}	    
	  
		}
	}
}



