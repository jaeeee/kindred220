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
	       var chat = "환생포인트를 구매하고, 여러분들께 아이템을 드리고 있는 #b셀#k이라고 합니다.\r\n";
	       chat += "#h0#님은 현재 환생 포인트 : #r#e"+cm.getPlayer().getReborns()+"#k#n 를 소지하고 계십니다. #n#k\r\n"
	       chat += "\r\n\r\n#Cgray#-----------------------------------------------#n#k"
	       chat += "\r\n#L1# #b#i2049360##t2049360# #Cgray#(500 포인트)";
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 포인트)";	
	       cm.sendSimple(chat);


	    }  if (selection == 1) {
		if (cm.getPlayer().getReborns() >= 500) {
		    if (cm.canHold(2049360)) {
			cm.gainItem(2049360,1);
		        cm.sendOk("환생 포인트 500으로 #i2049360##z2049360#를 구매 하였습니다.");
			cm.getPlayer().tddReborns(500);
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
		if (cm.getPlayer().getReborns() >= 6000) {
		    if (cm.canHold(2048704)) {
			cm.gainItem(2048704,1);
		        cm.sendOk("환생 포인트 600으로 #i2048704##z2048704#를 구매 하였습니다.");
			cm.getPlayer().tddReborns(6000);
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



