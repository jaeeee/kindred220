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

	       var chat = "#r�Ŀ�����Ʈ#k�� ������ ������ #b�Ŀ� ����#k���� ��밡���մϴ�.\r\n";
	       chat += "#h0#���� ���� �Ŀ�����Ʈ #r#e[ "+cm.getPlayer().getHPT()+" ] #n#k�Դϴ�."
	       chat += "\r\n#L3##i4310070#0�� + #i4310027#1�� + #i4310059#2�� �� #r#e[1000P]#n#k"; 
	       chat += "\r\n#L1##i4310070#2�� + #i4310027#5�� + #i4310059#10�� �� #r#e[5000P]#n#k"; 
	       chat += "\r\n#L2##i4310070#5�� + #i4310027#10�� + #i4310059#25�� �� #r#e[10000P]#n#k"; 
	       chat += "\r\n#L4##i4310070#20�� + #i4310027#30�� + #i4310059#80�� �� #r#e[30000P]#n#k";
	       chat += "\r\n#L5##i4310070#40�� + #i4310027#60�� + #i4310059#150�� �� #r#e[50000P]#n#k"; 
	       chat += "\r\n#L6##i4310070#90�� + #i4310027#130�� + #i4310059#320�� �� #r#e[100000P]#n#k"; 
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 1) {
		if (cm.getPlayer().getHPT() >= 5000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,1);
			cm.gainItem(4310027,10);
			cm.gainItem(4310059,5);
		        cm.sendOk("�Ŀ�����Ʈ 5000���� #i4310070#1�� + #i4310027#10�� + #i4310059#5���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-5000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 2) {
		if (cm.getPlayer().getHPT() >= 10000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,2);
			cm.gainItem(4310027,25);
			cm.gainItem(4310059,10);
		        cm.sendOk("�Ŀ�����Ʈ 10000���� #i4310070#2�� + #i4310027#25�� + #i4310059#10���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-10000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 3) {
		if (cm.getPlayer().getHPT() >= 1000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310027,1);
			cm.gainItem(4310059,2);
		        cm.sendOk("�Ŀ�����Ʈ 1000����  #i4310027#1�� + #i4310059#2���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-1000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 4) {
		if (cm.getPlayer().getHPT() >= 30000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,7);
			cm.gainItem(4310027,75);
			cm.gainItem(4310059,30);
		        cm.sendOk("�Ŀ�����Ʈ 30000���� #i4310070#7�� + #i4310027#75�� + #i4310059#30���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-30000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 5) {
		if (cm.getPlayer().getHPT() >= 50000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,13);
			cm.gainItem(4310027,140);
			cm.gainItem(4310059,50);
		        cm.sendOk("�Ŀ�����Ʈ 50000���� #i4310070#13�� + #i4310027#140�� + #i4310059#50���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-50000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 6) {
		if (cm.getPlayer().getHPT() >= 100000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310070,30);
			cm.gainItem(4310027,300);
			cm.gainItem(4310059,100);
		        cm.sendOk("�Ŀ�����Ʈ 100000���� #i4310070#30�� + #i4310027#300�� + #i4310059#100���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHPT(-100000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�Ŀ� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
	    

	 
		}
	}
}



