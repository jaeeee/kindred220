var status = 0;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {

	cm.sendSimple ("ĳ�� ��ȯ�� #rLv.10#k���� ���� �ϸ�, �ִ� �ѵ��� 90���� �Դϴ�.#e#d" +
		  "#k\r\n#L100##r"+time+"�޼ҷ� ĳ�� �����ϱ�" +
		  "#k\r\n#L200##b"+time+"ĳ�÷� �޼� �����ϱ�");

 
	  } else if (selection == 100) {
                cm.sendSimple ("ĳ�� ��ȯ�� #rLv.10#k���� ���� �ϸ�, �ִ� �ѵ��� 90���� �Դϴ�.#d" +
                 "#k\r\n#L1##r"+time+"10,000,000 �޼ҷ� 100,000 ĳ�� ��ȯ�ϱ�" +
                 "#k\r\n#L2##r"+time+"5,000,000 �޼ҷ� 50,000 ĳ�� ��ȯ�ϱ�" +
                 "#k\r\n#L3##r"+time+"1,000,000 �޼ҷ� 10,00 ĳ�� ��ȯ�ϱ�" +
                 "#k\r\n#L4##r"+time+"500.000 �޼ҷ� 5,000 ĳ�� ��ȯ�ϱ�" +
                 "#k\r\n#L5##r"+time+"100,000 �޼ҷ� 1,000 ĳ�� ��ȯ�ϱ�");

 
	  } else if (selection == 200) {
                cm.sendSimple ("ĳ�� ��ȯ�� #rLv.10#k���� ���� �ϸ�, �ִ� �ѵ��� 90���� �Դϴ�.#d" +
                 "#k\r\n#L6##b"+time+"100,000 ĳ�÷� 9,000,000 �޼� ��ȯ�ϱ�" +
                 "#k\r\n#L7##b"+time+"50,000 ĳ�÷� 4,500,000 �޼� ��ȯ�ϱ�" +
                 "#k\r\n#L8##b"+time+"10,000 ĳ�÷� 900,000 �޼� ��ȯ�ϱ�" +
                 "#k\r\n#L9##b"+time+"5,000 ĳ�÷� 450,000 �޼� ��ȯ�ϱ�" +
                 "#k\r\n#L10##b"+time+"1,000 ĳ�÷� 90,000 �޼� ��ȯ�ϱ�");

                } else if (selection == 1) {
			 if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayer().getMeso() >= 10000000 && cm.getPlayer().getNX() < 890000) {
				cm.sendOk (" 10,000,000 �޼Ҹ� 100,000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-10000000);
                   		cm.gainNX (100000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.10#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
			        
			}                  	
                } else if (selection == 2) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayer().getMeso() >= 5000000 && cm.getPlayer().getNX() < 890000) {
		 		cm.sendOk ("5,000,000 �޼Ҹ� 50,000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-5000000);
                   		cm.gainNX (50000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.10#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();

                   	}

                } else if (selection == 3) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayer().getMeso() >= 1000000 && cm.getPlayer().getNX() < 895000) {
				cm.sendOk ("1,000,000 �޼Ҹ� 10,000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-1000000);
                   		cm.gainNX (10000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.10#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
                   	}
                } else if (selection == 4) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayer().getMeso() >= 500000 && cm.getPlayer().getNX() < 899500) {
				cm.sendOk ("500,000 �޼Ҹ� 5000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-500000);
                   		cm.gainNX (5000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.10#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();
                   	}
                } else if (selection == 5) {
			if (cm.getPlayerStat("LVL") >= 10 && cm.getPlayer().getMeso() >= 100000 && cm.getPlayer().getNX() < 899950) {
				cm.sendOk ("100,000 �޼Ҹ� 1000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (-100000);
                   		cm.gainNX (1000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ô� #rLv.10#k���� ��ȯ ���� �մϴ�.\r\n�޼Ұ� �����ϰų� ĳ�� �ִ��ѵ����� �Ѿ����ϴ�.(�ִ� 90��)");
                   		cm.dispose();

			}
                } else if (selection == 6) {
			 if (cm.getPlayer().getNX() >= 100000) {
				cm.sendOk ("100,000 ĳ�ø� 9,000,000 �޼ҷ� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (9000000);
                   		cm.gainNX (-100000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ð� �����մϴ�!");
                   		cm.dispose();
			        
			}                  	
                } else if (selection == 7) {
			if (cm.getPlayer().getNX() >= 50000) {
				cm.sendOk ("50,000 ĳ�ø� 4,500,000 �޼ҷ� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (4500000);
                   		cm.gainNX (-50000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ð� �����մϴ�!");
                   		cm.dispose();
                   	}
                } else if (selection == 8) {
			if (cm.getPlayer().getNX() >= 10000) {
				cm.sendOk ("10,000 ĳ�ø� 900,000 �޼ҷ� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (900000);
                   		cm.gainNX (-10000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ð� �����մϴ�!");
                   		cm.dispose();
                   	}
                } else if (selection == 9) {
			if (cm.getPlayer().getNX() >= 5000) {
				cm.sendOk ("5,000 ĳ�ø� 450,000 �޼ҷ� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (450000);
                   		cm.gainNX (-5000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ð� �����մϴ�!");
                   		cm.dispose();
                   	}
                } else if (selection == 10) {
			if (cm.getPlayer().getNX() >= 1000) {
				cm.sendOk ("1000 ĳ�ø� 90,000 �޼ҷ� ��ȯ�Ͽ����ϴ�!");
                   		cm.gainMeso (90000);
                   		cm.gainNX (-1000);
                   		cm.dispose();
                     	} else {
                   		cm.sendOk ("ĳ�ð� �����մϴ�!");
                   		cm.dispose();
             
                		

			}
		}
	}
}


