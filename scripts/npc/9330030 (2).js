


/*



*/


var status = -1;

function start() {
	var a1 = cm.itemQuantity(2431965); 
	var a2 = cm.itemQuantity(2431966);
	var a3 = cm.itemQuantity(2431967);
	var a4 = cm.itemQuantity(2432084);
	var a5 = cm.itemQuantity(2432153);
	var a6 = cm.itemQuantity(2432154);
	var a7 = cm.itemQuantity(2432207);
	var s1 = cm.itemQuantity(2432354); 
	var s2 = cm.itemQuantity(2432355);
	var s3 = cm.itemQuantity(2432465);
	var s4 = cm.itemQuantity(2432479);
	var s5 = cm.itemQuantity(2432526);
	var s6 = cm.itemQuantity(2432532);
	var s7 = cm.itemQuantity(2432592);
	var s8 = cm.itemQuantity(4310058);
	    if (a1 >= 1 && a2 >= 1 && a3 >= 1 && a4 >= 1 && a5 >= 1 && a6 >= 1 && a7 >= 1 && s1 >= 1 && s2 >= 1 && s3 >= 1 && s4 >= 1 && s5 >= 1 && s6 >= 1 && s7 >= 1){
		var sel = "#L1##b��� �� ��ƿԽ��ϴ�. ������ ��Ų�� ���� �հ� ��Ḧ �ּ���.#k";
		} else {
		sel = "#L0##b���� ��� ������ ���߽��ϴ�.#k";
		}
	    if (s8 >= 1) {
	       var see = "#L2##b��������Ų�� ���ٽ��ϴ�#k";
		} else {
		sel = "#L0##b���� ��� ������ ���߽��ϴ�.#k";
		}
	    var chat = ""
            chat += "���̱���. ���� ������ ��Ų�̶�� Ư���� ��ų�� �����ϴ� �ӹ��� ���� �ҷ� û�ҳ� �̶�� �մϴ�";
	    chat += "Ȥ�� ������ �����ð� #i2431965#���� Ư����� �����۵��� ���������� �����ʴϱ�?";
	    chat += "�����ÿ��尡 �Ҷ����������� ������ �ľ��ϴ��� ������ ������ ������ �ް� �ֽ��ϴ�.";
	    chat += "������ ������ ��ȭ�� ���� �Ʒ��� �����۵��� �����ø� ������ ������ �ֽñ� �ٶ��ϴ�.\r\n";
	    chat += "����������������������������������������������������";
	    chat += "#i2431965##z2431965#������#b("+a1+"/1)#k\r\n";
	    chat += "#i2431966##z2431966#������ ��#b("+a2+"/1)#k\r\n";
	    chat += "#i2431967##z2431967#������ �� #b("+a3+"/1)#k\r\n";
	    chat += "#i2432084##z2432084#����������#b("+a4+"/1)#k\r\n";
	    chat += "#i2432153##z2432153#���� �� #b("+a5+"/1)#k\r\n";
	    chat += "#i2432154##z2432154#������  ��#b("+a6+"/1)#k\r\n";
	    chat += "#i2432207##z2432207#������#b("+a7+"/1)#k\r\n";
	    chat += "#i2432354##z2432354#������#b("+s1+"/1)#k\r\n";
	    chat += "#i2432355##z2432355#������ ��#b("+s2+"/1)#k\r\n";
	    chat += "#i2432465##z2432465#������ �� #b("+s3+"/1)#k\r\n";
	    chat += "#i2432479##z2432479#����������#b("+s4+"/1)#k\r\n";
	    chat += "#i2432526##z2432526#���� �� #b("+s5+"/1)#k\r\n";
	    chat += "#i2432532##z2432532#������  ��#b("+s6+"/1)#k\r\n";
	    chat += "#i2432592##z2432592#������  ��#b("+s7+"/1)#k\r\n";
	    chat += "����������������������������������������������������";
	    chat += ""+sel+"";
	    chat += ""+see+"";
	    cm.sendSimple(chat);
}

function action(mode, type, selection) {
        cm.dispose();
	if (selection == 0) {
			 cm.sendOk("��� �� ��ƿ� �Ŀ� ���� �ɾ� �ֽʽÿ�");
		         cm.dispose();
	} else if (selection == 1) {
	    	 if (cm.canHold(4310058)) {
		        cm.sendOk("�����մϴ� ���谡 #b#h ##k��. �������� ��������Ų �������� ���� �� �ִ� #i4310058# #z4310058# �� �帮�ڽ��ϴ�.");
			cm.gainItem(2431965, -1);
			cm.gainItem(2431966, -1);
			cm.gainItem(2431967, -1);
			cm.gainItem(2432084, -1);
			cm.gainItem(2432153, -1);
			cm.gainItem(2432154, -1);
			cm.gainItem(2432207, -1);
			cm.gainItem(2432354, -1);
			cm.gainItem(2432355, -1);
			cm.gainItem(2432465, -1);
			cm.gainItem(2432479, -1);
			cm.gainItem(2432526, -1);
			cm.gainItem(2432532, -1);
			cm.gainItem(2432592, -1);
		        cm.gainItem(4310058, 1);
			cm.dispose();
		} else {		         
			 cm.sendOk("�κ��丮�� �� ������ �����ϴ�.");
		         cm.dispose();	
			}
/*	    } else {		         
		 cm.sendOk("�ش�Ǵ� �������� ���� ������ �ִ��� Ȯ�����ּ���");
		 cm.dispose();	
		 }*/
	} else {
	cm.sendOk("������ �ٽ� ���ֽð� ���� �ɾ� �ּ���");
	cm.dispose();
		}
	}