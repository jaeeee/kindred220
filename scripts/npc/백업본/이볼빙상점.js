

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
         
	       var Lcoin = cm.itemQuantity(4310060);
	       var chat = "\r\n#L998#";
	       chat += "#r#e���� #b#h0##k���� �̺������� ������ #r#e"+ Lcoin +" #n#k�� �Դϴ�.#k#n\r\n\r\n"
	       chat += "#L1000#��������#b<�̺��� ���� [#e#r1#k#n] ���� ���� ������ ������>#k\r\n";
	       chat += "\r\n#L2#[ #r�� 5�� �޼�#k �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n#L5#[ #r#i1142134# #r����50 �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n#L50#[ #r#i1112111# #r�ý���300 (����) �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n#L51#[ #r#i1112221# #r�ý���300 (��ǳ��) �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n\r\n#L1001#��������<�̺��� ���� [#e#r2#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L7# #i1052526# #r�ý��� 500#k �� ��ȯ�ϰڽ��ϴ�.������";
	       chat += "\r\n#L8# #i1052527# #r�ý��� 500#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n\r\n#L1002#��������<�̺��� ���� [#e#r3#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L100#[ #r#i1142135# #r����120 �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n#L9# #i1003622# #r�ý��� 900#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n#L13# #i1003621# #r�ý��� 950#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n#L10# #i1112110# #r�ý��� 900 (����)#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n#L11# #i1112220# #r�ý��� 900 (��ǳ��)#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n\r\n#L1006#��������<�̺��� ���� [#e#r5#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L101#[ #r#i1142136# #r����230 �� ��ȯ�ϰڽ��ϴ�.]";
	       chat += "\r\n#L23# #i1112118# #r�ý��� 1600 (����)#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n#L24# #i1112228# #r�ý��� 1600 (��ǳ��)#k �� ��ȯ�ϰڽ��ϴ�.";
	       chat += "\r\n\r\n#L1006#��������<�̺��� ���� [#e#r7#k#n] ���� ���� ������ ������>\r\n";
	       chat += "\r\n#L102#[ #r#i1142335# #r����400 �� ��ȯ�ϰڽ��ϴ�.]";
	       cm.sendSimple(chat);

	    }  if (selection >= 990) {
		    cm.dispose();
	    } else if (selection == 1) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4001126)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i4001126# 20000��#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(4001126, 20000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 2) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4310060)) {
		        cm.sendOk("#r�̺��� ����#k���� #r5�� �޼�#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainMeso(500000000);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 3) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(2049704)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i2049704## 20��#k�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(2049704, 20);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 4) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(2350002)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i2350002## 1��#k �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(2350002, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 5) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1142134)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1142134# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1142134, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 7) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1052526)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1052526# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1052526, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 8) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1052527)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1052527#�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1052527, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 81) {
		if (cm.haveItem(4310060, 2)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112586#�� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -2);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 9) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1003622)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1003622# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1003622, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 10) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1112110)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112110# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1112110, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 11) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1112220)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112220# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1112220, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 12) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1102309)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1102309# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1102309, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 13) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1003621)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1003621# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1003621, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 15) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112586# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112586, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 16) {
		if (cm.haveItem(4310060, 10)) {
		    if (cm.canHold(1112586)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112735# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -10);
			cm.gainItem(1112735, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 20) {
		if (cm.haveItem(4310060, 4)) {
		    if (cm.canHold(1102095)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1102095# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -4);
			cm.gainItem(1102095, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 21) {
		if (cm.haveItem(4310060, 4)) {
		    if (cm.canHold(1102096)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1102096# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(1102451, -4);
			cm.gainItem(1102096, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 22) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1102097)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1102097# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1102097, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 23) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112118)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112118# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112118, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 24) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1112228)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112228# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1112228, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 25) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1102532)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1102532# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1102532, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}

	    } else if (selection == 50) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1112111)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112727# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1112111, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 51) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(1112221)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1112221# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(1112221, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 52) {
		if (cm.haveItem(4310060, 1)) {
		    if (cm.canHold(4310027)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i4310027# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -1);
			cm.gainItem(4310027, 50);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 100) {
		if (cm.haveItem(4310060, 3)) {
		    if (cm.canHold(1142135)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1142135# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -3);
			cm.gainItem(1142135, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 101) {
		if (cm.haveItem(4310060, 5)) {
		    if (cm.canHold(1142136)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1142136# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -5);
			cm.gainItem(1142136, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}
	    } else if (selection == 102) {
		if (cm.haveItem(4310060, 7)) {
		    if (cm.canHold(1142335)) {
		        cm.sendOk("#r�̺��� ����#k���� #r#i1142335# �� ���� �ϼ̽��ϴ�.");
			cm.gainItem(4310060, -7);
			cm.gainItem(1142335, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#r�̺��� ����#k�� �����մϴ�.");
		    cm.dispose();

}

		}
	}
}



