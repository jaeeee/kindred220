/*


�ҽ�: Rave.client�� RavePlayer.java�� ������ �߰����ּ���.

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

	       var chat = "�ȳ��ϼ��� #h0#��! ȯ������Ʈ �����Դϴ�.\r\n";
	       chat += "���� #h0#���� ȯ������Ʈ�� #r#e"+cm.getPlayer().getFame()+" #n#k�Դϴ�."
               chat += "\r\n#L7##b (1p�� 100000)- �޼� ȯ��#k";
               //chat += "\r\n#L8# (2000p)-#i4310027#(#z4310027#) 5��#k";
	       chat += "\r\n#L9# (1000p)-#i4310066#(#z4310066#) 50��#k";
               chat += "\r\n#L1# (500p)-#i2430446#(#z2430446#)#k";
	       chat += "\r\n#L2# (500p)-#i2430447#(#z2430447#)#k";
               chat += "\r\n#L3# (500p)-#i2430449#(#z2430449#)#k";
	       chat += "\r\n#L4# (500p)-#i2430451#(#z2430451#)#k";
	       chat += "\r\n#L5# (500p)-#i2430452#(#z2430452#)#k";
	       chat += "\r\n#L6# (20000p)-#i1142076#(�ý���200/����100)#k";
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
		        cm.sendOk("ȯ������Ʈ 500���� #i2430446##z2430446#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-500);
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
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430447)) {
			cm.gainItem(2430447,1);
		        cm.sendOk("ȯ������Ʈ 500���� #i2430447##z2430447#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 3) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430449)) {
			cm.gainItem(2430449,1);
		        cm.sendOk("ȯ������Ʈ 500���� #i2430449##z2430449#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 4) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430451)) {
			cm.gainItem(2430451,1);
		        cm.sendOk("ȯ������Ʈ 500���� #i2430451##z2430451#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 5) {
		if (cm.getPlayer().getFame() >= 500) {
		    if (cm.canHold(2430452)) {
			cm.gainItem(2430452,1);
		        cm.sendOk("ȯ������Ʈ 500���� #i2430452##z2430452#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-500);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 6) {
		if (cm.getPlayer().getFame() >= 20000) {
		    if (cm.canHold(1142076)) {
			cm.gainItem(1142076,1);
		        cm.sendOk("ȯ������Ʈ 20000���� #i1142076##z1142076#1���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-20000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();

}
}  if (selection == 8) {
		if (cm.getPlayer().getFame() >= 2000) {
		    if (cm.canHold(4310027)) {
			cm.gainItem(4310027,5);
		        cm.sendOk("ȯ������Ʈ 2000���� #i4310027##z4310027#5���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-2000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�.");
		    cm.dispose();
}
}  if (selection == 9) {
		if (cm.getPlayer().getFame() >= 1000) {
		    if (cm.canHold(4310066)) {
			cm.gainItem(4310066,50);
		        cm.sendOk("ȯ������Ʈ 1000���� #i4310066##z4310066#50���� ���� �Ͽ����ϴ�.");
			cm.getPlayer().addFame(-1000);
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



