/*

	         : 

	���ǽþ��̵� : 

	���ǽ� �̸�  : 

	���ǽ� ����  : 


*/

var count;

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
	var sel = 0;
	       var chat = "�ȳ��ϼ��� #h0#��! ���� ���� �޼ҷ� \r\n#e#rȮ����,ť��,��ȣ�ֹ���,�ڹ���#k#n���� �Ȱ��־��\r\n";
	       chat += "\r\n\r\n�Ʒ� ��ǰ�� ����ּ���.\r\n";
	       chat += "\r\n#L1##i5072000# (100��) - 200"; // 
	       chat += "#L2##i5076000# (100��) - 250"; // 
	       chat += "\r\n#L3##i5062000# (50��) - 800"; // 
	       chat += "#L4##i5062002# (50��) - 900"; // 
	       chat += "\r\n#L5##i5062005# (50��) - 1000"; // 
	       chat += "#L12##i5061000# (1��) - 20"; // 
	       chat += "\r\n#L13##i5061001# (1��) - 30"; // 
	       chat += "#L14##i5061002# (1��) - 50"; // 
	       chat += "\r\n#L11##i5064200# (1��) - 250"; // 
	       chat += "#L6##i5064000# (10��) - 500"; // 
	       chat += "\r\n#L7##i5064003# (10��) - 1000"; // 
	       chat += "#L8##i5064300# (10��) - 500"; // 
	       chat += "\r\n#L9##i5064100# (10��) - 500"; // 
	       chat += "#L10##i5063100# (10��) - 1200\r\n\r\n"; // 
	       cm.sendSimple(chat);

	    }  if (selection == 1) {
	if (cm.getPlayer().getMeso() > 2000000) {
	cm.gainItem(5072000, 100);
	cm.gainMeso(-2000000);
	cm.sendOk("#b#i5072000# #z5072000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 2) {
	if (cm.getPlayer().getMeso() > 2500000) {
	cm.gainItem(5076000, 100);
	cm.gainMeso(-2500000);
	cm.sendOk("#b#i5076000# #z5076000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}
	 
	    }  if (selection == 3) {
	if (cm.getPlayer().getMeso() > 8000000) {
	cm.gainItem(5062000, 50);
	cm.gainMeso(-8000000);
	cm.sendOk("#b#i5062000# #z5062000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 4) {
	if (cm.getPlayer().getMeso() > 9000000) {
	cm.gainItem(5062002, 50);
	cm.gainMeso(-9000000);
	cm.sendOk("#b#i5076000# #z5076000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 5) {
	if (cm.getPlayer().getMeso() > 10000000) {
	cm.gainItem(5062005, 50);
	cm.gainMeso(-10000000);
	cm.sendOk("#b#i5062005# #z5062005# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 6) {
	if (cm.getPlayer().getMeso() > 5000000) {
	cm.gainItem(5064000, 10);
	cm.gainMeso(-5000000);
	cm.sendOk("#b#i5064000# #z5064000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 7) {
	if (cm.getPlayer().getMeso() > 10000000) {
	cm.gainItem(5064003, 10);
	cm.gainMeso(-10000000);
	cm.sendOk("#b#i5064003# #z5064003# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 8) {
	if (cm.getPlayer().getMeso() > 5000000) {
	cm.gainItem(5064300, 10);
	cm.gainMeso(-5000000);
	cm.sendOk("#b#i5064300# #z5064300# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 9) {
	if (cm.getPlayer().getMeso() > 5000000) {
	cm.gainItem(5064100, 10);
	cm.gainMeso(-5000000);
	cm.sendOk("#b#i5064100# #z5064100# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 10) {
	if (cm.getPlayer().getMeso() > 12000000) {
	cm.gainItem(5063100, 10);
	cm.gainMeso(-12000000);
	cm.sendOk("#b#i5063100# #z5063100# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 11) {
	if (cm.getPlayer().getMeso() > 2500000) {
	cm.gainItem(5064200, 10);
	cm.gainMeso(-2500000);
	cm.sendOk("#b#i5064200# #z5064200# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 12) {
	if (cm.getPlayer().getMeso() > 200000) {
	cm.gainItem(5064200, 1);
	cm.gainMeso(-200000);
	cm.sendOk("#b#i5061000# #z5061000# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 13) {
	if (cm.getPlayer().getMeso() > 300000) {
	cm.gainItem(5061001, 1);
	cm.gainMeso(-300000);
	cm.sendOk("#b#i5061001# #z5061001# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

	    }  if (selection == 14) {
	if (cm.getPlayer().getMeso() > 500000) {
	cm.gainItem(5061002, 1);
	cm.gainMeso(-500000);
	cm.sendOk("#b#i5061002# #z5061002# ��ȯ �����Ͽ����ϴ�");
	cm.dispose();

}

		}
	}
}



