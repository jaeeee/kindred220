/*
�ƾ߳�(riel0216)
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
	       var leaf = cm.itemQuantity(4310063);
	       var quan = ((cm.itemQuantity(4310063) - (cm.itemQuantity(4310063) % 80)) / 80);
	       var chat = "#e#r���Ͻô� ��������Ų�� ����ּ���.#k#n\r\n";
	       chat += "< ���� #i4310063# �������� ���� #e:#n #r#e"+ leaf +" #n#k�� >#b"
	       chat += "\r\n#L1##i4310063# (1000��)  ��  -��#i2431965#<-(�̸������)";
	   //   chat += "\r\n#L2##i4310063# (1000��)  ��  -��#i2431966#<-(�̸������)";
	       chat += "\r\n#L3##i4310063# (1000��)  ��  -��#i2431967#<-(�̸������)";
	       chat += "\r\n#L4##i4310063# (1000��)  ��  -��#i2432084#<-(�̸������)";
	       chat += "\r\n#L5##i4310063# (1000��)  ��  -��#i2432131#<-(�̸������)";
	       chat += "\r\n#L6##i4310063# (1000��)  ��  -��#i2432153#<-(�̸������)";
	       chat += "\r\n#L7##i4310063# (1000��)  ��  -��#i2432154#<-(�̸������)";
	       chat += "\r\n#L8##i4310063# (1000��)  ��  -��#i2432207#<-(�̸������)";
	       chat += "\r\n#L9##i4310063# (1000��)  ��  -��#i2432354#<-(�̸������)";
	       chat += "\r\n#L10##i4310063# (1000��)  ��  -  #i2432355#<-(�̸������)";
	       chat += "\r\n#L11##i4310063# (1000��)  ��  -��#i2432465#<-(�̸������)";
	       chat += "\r\n#L12##i4310063# (1000��)  ��  -��#i2432479#<-(�̸������)";
	       chat += "\r\n#L13##i4310063# (1000��)  ��  -��#i2432526#<-(�̸������)";
	       chat += "\r\n#L14##i4310063# (1000��)  ��  -��#i2432532#<-(�̸������)";
	       cm.sendSimple(chat);
	 if (status == 1) {
		cm.gainItem(4310063,1);
		cm.dispose();
	}


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 1) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431965)) {
		        cm.sendOk("������������ #e�⺻ ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2431965, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("���������� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 2) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431966)) {
		        cm.sendOk("�������� ���� #e�����ж����� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4031311, -1000);
			cm.gainItem(2431966, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}	
	    }  if (selection == 3) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2431967)) {
		        cm.sendOk("������������ #eũ��Ƽ�ƽ� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2431967, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}	
	    }  if (selection == 4) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432084)) {
		        cm.sendOk("�������� ���� #e�����ж����� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432084, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 5) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432131)) {
		        cm.sendOk("�������� ���� #e��Ƽ ����Ʈ ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432131, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 6) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432153)) {
		        cm.sendOk("�������� ���� #e����Ƽ�� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432153, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 7) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432154)) {
		        cm.sendOk("�������� ���� #e������ ���� �Ѱ� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432154, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 8) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432207)) {
		        cm.sendOk("�������� ���� #eŬ�� ��׽ý� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432207, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}	
	    }  if (selection == 9) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432354)) {
		        cm.sendOk("�������� ���� #e�޸� ũ�������� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432354, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 10) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432355)) {
		        cm.sendOk("������������ #e�� �ɼ��� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432355, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 11) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432465)) {
		        cm.sendOk("�������� ���� #e�˸����� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432465, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}
	    }  if (selection == 12) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432479)) {
		        cm.sendOk("�������� ���� #e���ν��� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432479, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}	
	    }  if (selection == 13) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432526)) {
		        cm.sendOk("�������� ���� #eŰ���� ������ ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432526, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();

}	
	    }  if (selection == 14) {
		if (cm.haveItem(4310063, 1000)) {
		    if (cm.canHold(2432532)) {
		        cm.sendOk("�������� ���� #e������ ���ٶ� ������ ��Ų#n�� �����Ͽ����ϴ�.");

			cm.gainItem(4310063, -1000);
			cm.gainItem(2432532, 1);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�������� �� �����մϴ�.");
		    cm.dispose();


}	
	
		
		

		}
	}
}



