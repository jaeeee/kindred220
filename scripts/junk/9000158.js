importPackage(net.sf.odinms.client);

function start () {
	var tmp_str = "";
	tmp_str += "#L1##r�޼� #e01��#n���� #i4033248# #e01��#n ��ȯ#k#l\r\n";
	tmp_str += "#L2##r�޼� #e05��#n���� #i4001618# #e01��#n ��ȯ#k#l\r\n";
	tmp_str += "#L3##r�޼� #e10��#n���� #i4000313# #e01��#n ��ȯ#k#l\r\n";
	tmp_str += "#L10##b#i4033248# �� �޼�1�ﱳȯ#k#l\r\n";
	tmp_str += "#L11##b#i4001618# �� �޼�5�ﱳȯ#k#l\r\n";
	tmp_str += "#L12##b#i4000313# �� �޼�10�ﱳȯ#k#l\r\n";
	cm.sendSimple(tmp_str);
}

function action (mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	}
		
		if (selection == 1) {
			if (cm.getMeso() < 100000000) {
				cm.sendOk("#r1��޼�#k �� �ʿ��մϴ�"); 
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainMeso(-100000000); 
				cm.gainItem(4033248,1); 
				cm.dispose();
			}
		}
		
		else if (selection == 2) {
			if (cm.getMeso() < 500000000) {
				cm.sendOk("#r5��޼�#k �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainMeso(-500000000);
				cm.gainItem(4001618,1);
				cm.dispose();
			}
		}
		
		else if (selection == 3) {
			if (cm.getMeso() < 1000000000) {
				cm.sendOk("#r10��޼�#k �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainMeso(-1000000000);
				cm.gainItem(4000313,1);
				cm.dispose();
			}
		}
		
		else if (selection == 4) {
			if (cm.haveItem(5200000,5) == false) {
				cm.sendOk("#g��ȭ��5��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200000,-5);
				cm.gainItem(5200001,1);
				cm.dispose();
			}
		}
		
		else if (selection == 5) {
			if (cm.haveItem(5200000,10) == false) {
				cm.sendOk("#g��ȭ��10��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200000,-10);
				cm.gainItem(5200002,1);
				cm.dispose();
			}
		}
		
		else if (selection == 6) {
			if (cm.haveItem(5200001,1) == false) {
				cm.sendOk("#g��ȭ��1��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200001,-1);
				cm.gainItem(5200000,5);
				cm.dispose();
			}
		}
		
		else if (selection == 7) {
			if (cm.haveItem(5200001,2) == false) {
				cm.sendOk("#g��ȭ��2��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200001,-2);
				cm.gainItem(5200002,1);
				cm.dispose();
			}
		}
		
		else if (selection == 8) {
			if (cm.haveItem(5200002,1) == false) {
				cm.sendOk("#g��ȭ��1��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200002,-1);
				cm.gainItem(5200000,10);
				cm.dispose();
			}
		}
		
		else if (selection == 9) {
			if (cm.haveItem(5200002,1) == false) {
				cm.sendOk("#g��ȭ��1��#g �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200002,-1);
				cm.gainItem(5200001,2);
				cm.dispose();
			}
		}
		
		else if (selection == 10) {
			if (cm.haveItem(4033248,1) == false) {
				cm.sendOk("#b#i4033248# 1��#b �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainItem(4033248,-1);
				cm.gainMeso(100000000);
				cm.dispose();
			}
		}
		
		else if (selection == 11) {
			if (cm.haveItem(4001618,1) == false) {
				cm.sendOk("#b#i4001618 #1��#b �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainItem(4001618,-1);
				cm.gainMeso(500000000);
				cm.dispose();
			}
		}
		
		else if (selection == 12) {
			if (cm.haveItem(4000313,1) == false) {
				cm.sendOk("#b#i400313# 1��#b �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
                                cm.sendOk("���������� ��ȯ�ϼ̽��ϴ�");
				cm.gainItem(4000313,-1);
				cm.gainMeso(1000000000);
				cm.dispose();
			}
		}
		
		else if (selection == 13) {
			if (cm.haveItem(5200002,10) == false) {
				cm.sendOk("#d��ȭ��10��#d �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200002,-10);
				cm.gainItem(5200009,1);
				cm.dispose();
			}
		}
		
		else if (selection == 14) {
			if (cm.haveItem(5200002,100) == false) {
				cm.sendOk("#d��ȭ��100��#d �� �ʿ��մϴ�");
				cm.dispose();
			}
			else {
				cm.gainItem(5200002,-100);
				cm.gainItem(5200010,1);
				cm.dispose();
			}
		}
		
		else {
			cm.dispose();
		}
	}
	