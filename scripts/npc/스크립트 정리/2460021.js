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
	       var chat = "ȯ������Ʈ�� �����ϰ�, �����е鲲 �������� �帮�� �ִ� #b��#k�̶�� �մϴ�.\r\n";
	       chat += "#h0#���� ���� ȯ�� ����Ʈ : #r#e"+cm.getPlayer().getReborns()+"#k#n �� �����ϰ� ��ʴϴ�. #n#k\r\n"
	       chat += "\r\n\r\n#Cgray#-----------------------------------------------#n#k"
	       chat += "\r\n#L1# #b#i2049360##t2049360# #Cgray#(500 ����Ʈ)";
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       chat += "\r\n#L2# #b#i2048704##t2048704# #Cgray#(600 ����Ʈ)";	
	       cm.sendSimple(chat);


	    }  if (selection == 1) {
		if (cm.getPlayer().getReborns() >= 500) {
		    if (cm.canHold(2049360)) {
			cm.gainItem(2049360,1);
		        cm.sendOk("ȯ�� ����Ʈ 500���� #i2049360##z2049360#�� ���� �Ͽ����ϴ�.");
			cm.getPlayer().tddReborns(500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();
		}

	    }  if (selection == 2) {
		if (cm.getPlayer().getReborns() >= 6000) {
		    if (cm.canHold(2048704)) {
			cm.gainItem(2048704,1);
		        cm.sendOk("ȯ�� ����Ʈ 600���� #i2048704##z2048704#�� ���� �Ͽ����ϴ�.");
			cm.getPlayer().tddReborns(6000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();
		    }
		}
	}
}



