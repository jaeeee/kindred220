/*
	�������� �Ŀ��� ��ȯ ��ũ��Ʈ �Դϴ�.
	(ljw5992@naver.com)

	������ src ���� ���Ǵ� leejw5992@nate.com
	(�ҽ� �����մϴ�)��� ��� ģ���߰� ���ּ���
	src�� ���Ѿ�����Ʈ �ص帳�ϴ�.
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
            	
	       var Lcoin = cm.itemQuantity(4310027);
	       var chat = "#L998# \r\n";
	       chat += "#L999##r#e������! �κ��丮 ������ �� Ȯ�����ּ���!#k#n\r\n\r\n";
	       chat += "�����ȳ��ϼ��� #b#h0##k��! �Ŀ� ������ �����Դϴ�.\r\n";
	       chat += "�������� #b#h0##k���� ���������� ������ #r#e"+ Lcoin +" #n#k�� �Դϴ�.\r\n\r\n"
	       chat += "#L1000#��������<������ ���� [#e#r1#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L1# #i4001126# 20000��������������";
	       chat += "#L2# 3,0000,0000 (3��) �޼�";
	       chat += "\r\n#L3# #i2049122# (15��)������������ ";
	       chat += "#L4# #i4310000# (4��)";
	       chat += "\r\n#L5# #i1112585# (�ý��� 700)";
	       chat += "\r\n\r\n#L1001#��������<������ ���� [#e#r2#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L7# #i1022111# (�ý��� 1000)������";
	       chat += "#L8# #i4310034# (40��)";
	       chat += "\r\n\r\n#L1002#��������<������ ���� [#e#r3#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L9# #i1112586# (�ý��� 1500)������";
	       chat += "#L10# #i1102097# (�ý��� 1500)";
	       chat += "\r\n#L11# #i1003596# (�ý��� 1300)";
	       chat += "\r\n\r\n#L1003#��������<������ ���� [#e#r4#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L12# #i1022112# (�ý��� 1800)";
	       chat += "\r\n\r\n#L1004#��������<������ ���� [#e#r5#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L13# #i1102309# (�ý��� 2300)";
	       cm.sendSimple(chat);

	    }  if (selection >= 990) {
		    cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("#r������ ����#k���� #r#i4001126# 20000��#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -1);
			cm.gainItem(4001126, 20000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 2) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("#r������ ����#k���� #r3�� �޼�#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -1);
			cm.gainMeso(300000000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 3) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(2049122)) {
		        cm.sendOk("#r������ ����#k���� #r#i2049122# 15��#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -1);
			cm.gainItem(2049122, 15);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 4) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(4310000)) {
		        cm.sendOk("#r������ ����#k���� #r#i4310000# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -1);
			cm.gainItem(4310000, 4);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 5) {
		if (cm.haveItem(4310027, 1)) {
		    if (cm.canHold(1112585)) {
		        cm.sendOk("#r������ ����#k���� #r#i1112585# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -1);
			cm.gainItem(1112585, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 7) {
		if (cm.haveItem(4310027, 2)) {
		    if (cm.canHold(1022111)) {
		        cm.sendOk("#r������ ����#k���� #r#i1022111# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -2);
			cm.gainItem(1022111, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 8) {
		if (cm.haveItem(4310027, 2)) {
		    if (cm.canHold(4310034)) {
		        cm.sendOk("#r������ ����#k���� #r#i4310034 40��#�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -2);
			cm.gainItem(4310034, 40);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 9) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r������ ����#k���� #r#i1112586# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 10) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r������ ����#k���� #r#i1102097# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1102097, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 11) {
		if (cm.haveItem(4310027, 3)) {
		    if (cm.canHold(1003596)) {
		        cm.sendOk("#r������ ����#k���� #r#i1003596# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -3);
			cm.gainItem(1003596, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 12) {
		if (cm.haveItem(4310027, 4)) {
		    if (cm.canHold(1022112)) {
		        cm.sendOk("#r������ ����#k���� #r#i1022112# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -4);
			cm.gainItem(1022112, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 13) {
		if (cm.haveItem(4310027, 5)) {
		    if (cm.canHold(1102309)) {
		        cm.sendOk("#r������ ����#k���� #r#i1102309# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310027, -5);
			cm.gainItem(1102309, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r������ ����#k�� �����մϴ�.");
		    cm.dispose();

}

		}
	}
}



