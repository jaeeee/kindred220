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

	       var chat = "#fUI/CashShop.img/CSEffect/event/0##fn������� Extrabold##fs13#�ȳ��ϼ��� #h0#�� ȫ�������Դϴ�.\r\n#r#i4310088##z4310088#�� ��õ�� ������ �����Ǽ��ֽ��ϴ�.#k\r\n";	       
 	       chat += "#L4# #i4310088# (1��)     -  #k#b(�Ŀ�����Ʈ1000)#k\r\n";
 	       chat += "#L3# #i4310088# (2��)     -  #k#b(�Ŀ�����Ʈ2000)#k\r\n";
 	       chat += "#L5# #i4310088# (3��)     -  #k#b(�Ŀ�����Ʈ3000)#k\r\n";
 	       chat += "#L14# #i4310088# (1��)     -  #k#i2048721##z2048721#(10��)\r\n";
               //chat += "#L1# #i4310088# (20��)   -  #k#i1112941##z1112941#\r\n";
	       //chat += "#L2# #i4310088# (20��)   -  #k#i1102699##z1102699#\r\n";
               //chat += "#L7# #i4310088# (20��)   -  #k#i1102630##z1102630#\r\n";
               chat += "#L10# #i4310088# (1��)     -  #k#i4001716##z4001716#\r\n";
               chat += "#L8# #i4310088# (1��)     -  #k#i2591264##z2591264#\r\n";
               chat += "#L9# #i4310088# (1��)     -  #k#i2591088##z2591088#\r\n";
               //chat += "#L10# #i4310088# (1��) -  #k#i4000176##z4000176#\r\n";
	       cm.sendSimple(chat);


	    }  if (selection >= 1000) {
		    cm.dispose();


}  if (selection == 1) {
		if(cm.haveItem(4310088, 20)) { 
		    if (cm.canHold(1112941)) {
			cm.gainItem(4310088, -20);
		        cm.sendOk("�������� ���� �Ͽ����ϴ�.");
	                cm.gainSponserItem(1112941,'[ȫ��]',1000,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 14) {
		if(cm.haveItem(4310088, 1)) { 
		    if (cm.canHold(2048721)) {
			cm.gainItem(4310088, -1);
				cm.gainItem(2048721,10);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 2) {
		if(cm.haveItem(4310088, 20)) { 
		    if (cm.canHold(1102699)) {
			cm.gainItem(4310088, -20);
		        cm.sendOk("�������� ���� �Ͽ����ϴ�.");
	                cm.gainSponserItem(1102699,'[ȫ��]',1000,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 3) {
		if(cm.haveItem(4310088, 2)) { 
			cm.gainItem(4310088, -2);
		    if (cm.gainRC(2000)) {
			cm.gainRC(2000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();

}
}  if (selection == 4) {
		if(cm.haveItem(4310088, 1)) { 
			cm.gainItem(4310088, -1);
		    if (cm.gainRC(1000)) {
			cm.gainRC(1000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();
}
}  if (selection == 5) {
		if(cm.haveItem(4310088, 3)) { 
			cm.gainItem(4310088, -3);
		    if (cm.gainRC(3000)) {
			cm.gainRC(3000);
			cm.dispose();
		    } else {
		        cm.dispose();
		    }
		} else {
		    cm.dispose();

}
}  if (selection == 6) {
		if(cm.haveItem(4310088, 1)) { 
	                     if (cm.canHold(1112663)) {
			cm.gainItem(4310088, -1);
		        cm.sendOk("�������� ���� �Ͽ����ϴ�");
	   	                 cm.gainItem(1112663,1);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 7) {
		if(cm.haveItem(4310088, 20)) { 
	                     if (cm.canHold(1102630)) {
			cm.gainItem(4310088, -20);
		        cm.sendOk("�������� ���� �Ͽ����ϴ�.");
	                cm.gainSponserItem(1102630,'[ȫ��]',1000,0,0);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();


}
}  if (selection == 8) {
		if(cm.haveItem(4310088, 1)) { 
	                     if (cm.canHold(2591264)) {
			cm.gainItem(4310088, -1);
	   	                 cm.gainItem(2591264,1);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();


}
}  if (selection == 9) {
			if(cm.haveItem(4310088, 1)) { 
	                     if (cm.canHold(2591088)) {
			cm.gainItem(4310088, -1);
	   	                 cm.gainItem(2591088,1);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();


}
}  if (selection == 10) {
			if(cm.haveItem(4310088, 1)) { 
	                     if (cm.canHold(4001716)) {
			cm.gainItem(4310088, -1);
	   	                 cm.gainItem(4001716,1);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("������ �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 11) {
		if (cm.getPlayer().getHBPT() >= 20) {
		    if (cm.canHold(2046095)) {
			cm.gainItem(2046095,4);
		        cm.sendOk("ȫ������Ʈ 20���� #i2046095##z2046095# 4���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHBPT(-20);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ȥ�� ���� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 12) {
		if (cm.getPlayer().getHBPT() >= 5) {
		    if (cm.canHold(4001109)) {
			cm.gainItem(4001109,1);
		        cm.sendOk("ȫ������Ʈ 5���� #i4001109##z4001109# 1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHBPT(-5);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ȥ�� ���� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 13) {
		if (cm.getPlayer().getHBPT() >= 40) {
		    if (cm.canHold(4001163)) {
			cm.gainItem(4001163,1);
		        cm.sendOk("ȫ������Ʈ 40���� #i4001163##z4001163# 1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().gainHBPT(-40);
			cm.dispose();
		    } else {
		        cm.sendOk("������ �����մϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ȥ�� ���� �����մϴ�.");
		    cm.dispose();

}
	    

	 
		}
	}
}



