/*

	����         : [Rain_MS@nate.com]

	���ǽþ��̵� : 9000131

	���ǽ� �̸�  : ������ ����

	���ǽ� ����  : ��� ��ȯ ��ũ��Ʈ


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
	       var leaf = cm.itemQuantity(4001126);
	       var quan = ((cm.itemQuantity(4001126) - (cm.itemQuantity(4001126) % 80)) / 80);
	       var chat = "�ȳ��ϼ��� #h0#��! ���� ���� ��ǳ������ \r\n#e#r���#k#n�� �Ȱ��־��\r\n";
	       chat += "���� #h0#���� ��ǳ�� ������ #r#e"+ leaf +" #n#k�� �Դϴ�.#b"
	       chat += "\r\n\r\n�Ʒ� ��ǰ�� ����ּ���.\r\n";
	       chat += "\r\n#L21##i4001126# (200��)    -    #i1132191# (#z1132191#)"; // ��� ũ����Ʈ ��Ʈ
	       //chat += "\r\n#L20##i4001126# (50��)    -    #i1112762# (#z1112762#)\r\n\r\n"; // ��� ũ����Ʈ ��
	       chat += "\r\n#L1##i4001126# (300��)    -    #i4440000# (#z4440000#)";
	       chat += "\r\n#L2##i4001126# (300��)    -    #i4441000# (#z4441000#)";
	       chat += "\r\n#L3##i4001126# (300��)    -    #i4442000# (#z4442000#)";
	       chat += "\r\n#L4##i4001126# (300��)    -    #i4443000# (#z4443000#)\r\n\r\n"; // S��
	       chat += "\r\n#L5##i4001126# (150��)    -    #i4440100# (#z4440100#)";
	       chat += "\r\n#L6##i4001126# (150��)    -    #i4441100# (#z4441100#)";
	       chat += "\r\n#L7##i4001126# (150��)    -    #i4442100# (#z4442100#)";
	       chat += "\r\n#L8##i4001126# (150��)    -    #i4443100# (#z4443100#)\r\n\r\n"; // A��
	       chat += "\r\n#L9##i4001126# (50��)    -    #i4440200# (#z4440200#)";
	       chat += "\r\n#L10##i4001126# (50��)    -    #i4441200# (#z4441200#)";
	       chat += "\r\n#L11##i4001126# (50��)    -    #i4442200# (#z4442200#)";
	       chat += "\r\n#L12##i4001126# (50��)    -    #i4443200# (#z4443200#)\r\n\r\n"; // B��
	       chat += "\r\n#L13##i4001126# (30��)    -    #i4440300# (#z4440300#)";
	       chat += "\r\n#L14##i4001126# (30��)    -    #i4441300# (#z4441300#)";
	       chat += "\r\n#L15##i4001126# (30��)    -    #i4442300# (#z4442300#)";
	       chat += "\r\n#L16##i4001126# (30��)    -    #i4443300# (#z4443300#)\r\n\r\n"; // C��
	       chat += "\r\n#L17##i4001126# (500��) - #i2049139# (#z2049139#)";
	       chat += "\r\n#L18##i4001126# (300��) - #i2049140# (#z2049140#)";
	       chat += "\r\n#L19##i4001126# (200��) - #i2049141# (#z2049141#)"; // ��� ũ����Ʈ �ֹ���
	       cm.sendSimple(chat);

	    }  if (selection == 21) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(1132191)) {
		        cm.sendOk("��ǳ������ ��� ũ����Ʈ ��Ʈ�� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -200);
			cm.gainItem(1132191, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 200�� �ʿ� ]#l#n");
		    cm.dispose();

}

	    }  if (selection == 20) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(1112762)) {
		        cm.sendOk("��ǳ������ ��� ũ����Ʈ ���� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -50);
			cm.gainItem(1112762, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 50�� �ʿ� ]#l#n");
		    cm.dispose();

}

	    }  if (selection == 1) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4440000)) {
		        cm.sendOk("��ǳ������ S�� ���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4440000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 300�� �ʿ� ]#l#n");
		    cm.dispose();

}	
				
	    }  if (selection == 2) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4441000)) {
		        cm.sendOk("��ǳ������ S�� ����� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4441000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 300�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 3) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4442000)) {
		        cm.sendOk("��ǳ������ S�� ������ ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4442000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 300�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 4) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(4443000)) {
		        cm.sendOk("��ǳ������ S�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -300);
			cm.gainItem(4443000, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 300�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 5) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4440100)) {
		        cm.sendOk("��ǳ������ A�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4440100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 150�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 6) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4441100)) {
		        cm.sendOk("��ǳ������ A�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4441100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 150�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 7) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4442100)) {
		        cm.sendOk("��ǳ������ A�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4442100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 150�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 8) {
		if (cm.haveItem(4001126, 150)) {
		    if (cm.canHold(4443100)) {
		        cm.sendOk("��ǳ������ A�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -150);
			cm.gainItem(4443100, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 150�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 9) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4440200)) {
		        cm.sendOk("��ǳ������ B�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4440200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 50�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 10) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4441200)) {
		        cm.sendOk("��ǳ������ B�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4441200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 50�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 11) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4442200)) {
		        cm.sendOk("��ǳ������ B�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4442200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 50�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 12) {
		if (cm.haveItem(4001126, 50)) {
		    if (cm.canHold(4443200)) {
		        cm.sendOk("��ǳ������ B�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -50);
			cm.gainItem(4443200, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 50�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 13) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4440300)) {
		        cm.sendOk("��ǳ������ C�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4440300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 30�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 14) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4441300)) {
		        cm.sendOk("��ǳ������ C�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4441300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 30�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 15) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4442300)) {
		        cm.sendOk("��ǳ������ C�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4442300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 30�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 16) {
		if (cm.haveItem(4001126, 30)) {
		    if (cm.canHold(4443300)) {
		        cm.sendOk("��ǳ������ C�� ��ø���� ����� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -30);
			cm.gainItem(4443300, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 30�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 17) {
		if (cm.haveItem(4001126, 500)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("��ǳ������ ����� ȥ���� �ֹ��� 60%�� �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -500);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 500�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 18) {
		if (cm.haveItem(4001126, 300)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("��ǳ������ ����� ���� ȥ���� �ֹ��� 40% �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -300);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 300�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	    }  if (selection == 19) {
		if (cm.haveItem(4001126, 200)) {
		    if (cm.canHold(2049139)) {
		        cm.sendOk("��ǳ������ ����� ������ ȥ���� �ֹ��� 30% �����Ͽ����ϴ�.");

			cm.gainItem(4001126, -200);
			cm.gainItem(2049139, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.\r\n#e#r[ ��ǳ�� 200�� �ʿ� ]#l#n ");
		    cm.dispose();

}
	 
		}
	}
}



