/*
ȫ�� ��ũ��Ʈ
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var upgrade;
var equip = 0;
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var meso;
var buymeso;
var buyrc;
var rc;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var text = "�ȳ��ϼ��� #b#h0##k��. ȫ�������� ���Ű��� ȯ���մϴ�.\r\n";
	text += "\r\n#e�������� ȫ������Ʈ#n : #r"+cm.getPP()+"#k����Ʈ\r\n";
	text += "\r\n#l#e<ȯ�� �ý���>#n\r\n";
	text += "#L1# �޼� ȯ�� (���� 1 : 30000)\r\n"
	text += "#L18# #r#e[�̺�Ʈ]#k�Ŀ�����Ʈ ȯ�� (���� 20 : 1)#n\r\n\r\n";
	text += "\r\n#l#e<ȫ�������� ����>#n\r\n";
	text += "#L2# #i4001126# X 100 (#b300P#k)  ��";
	text += "#L3# #i4001126# X 1000 (#b3000P#k)\r\n";
	text += "#L4# #i4001126# X 5000 (#b15000P#k)";
	text += "#L5# #i4001126# X 10000 (#b30000P#k)\r\n";
	text += "#L6# #i4310034# X 1�� (#b3500P#k) ��";
	text += "#L7# #i4310034# X 3�� (#b10500P#k)\r\n";
	text += "#L8# #i4310034# X 5�� (#b17500P#k)  ";
	text += "#L9# #i4310034# X 10�� (#b35000P#k)\r\n";
	text += "#L10# #i2049122# X 1�� (#b4500P#k)��";
	text += "#L11# #i2049122# X 3�� (#b13500P#k)\r\n";
	text += "#L12# #i2049122# X 5�� (#b22500P#k) ";
	text += "#L13# #i2049122# X 10�� (#b45000P#k)\r\n";
	text += "#L14# #i5530123# X 1�� (#b5000P#k)��";
	text += "#L15# #i5530123# X 3�� (#b15000P#k)\r\n";
	text += "#L16# #i5530123# X 5�� (#b25000P#k) ";
	text += "#L17# #i5530123# X 10�� (#b50000P#k)\r\n";
        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1) {
	    buymeso =1;
	    cm.sendGetText("�޼ҷ� ȯ���� ���Ͻô� ȫ������Ʈ�� �Է����ּ���\r\n������ #b1 : 30000#k�Դϴ�.");
	} else if (sel == 2){
	    item = 4001126;
	    cost = 300;
	    quantity = 100;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 3){
	    item = 4001126;
	    cost = 3000;
	    quantity = 1000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 4){
	    item = 4001126;
	    cost = 15000;
	    quantity = 5000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 5){
	    item = 4001126;
	    cost = 30000;
	    quantity = 10000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 6){
	    item = 4310034;
	    cost = 3500;
	    quantity = 1;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 7){
	    item = 4310034;
	    cost = 10500;
	    quantity = 3;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 8){
	    item = 4310034;
	    cost = 17500;
	    quantity = 5;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 9){
	    item = 4310034;
	    cost = 35000;
	    quantity = 10;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 10){
	    item = 2049122;
	    cost = 4500;
	    quantity = 1;
	    name = "������ ȥ���� �ֹ��� 50%";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 11){
	    item = 2049122;
	    cost = 13500;
	    quantity = 3;
	    name = "������ ȥ���� �ֹ��� 50%";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 12){
	    item = 2049122;
	    cost = 22500;
	    quantity = 5;
	    name = "������ ȥ���� �ֹ��� 50%";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 13){
	    item = 2049122;
	    cost = 45000;
	    quantity = 10;
	    name = "������ ȥ���� �ֹ��� 50%";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 14){
	    item = 5530123;
	    cost = 5000;
	    quantity = 1;
	    name = "8ե �ֹ��� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 15){
	    item = 5530123;
	    cost = 15000;
	    quantity = 3;
	    name = "8ե �ֹ��� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 16){
	    item = 5530123;
	    cost = 25000;
	    quantity = 5;
	    name = "8ե �ֹ��� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 17){
	    item = 5530123;
	    cost = 50000;
	    quantity = 10;
	    name = "8ե �ֹ��� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	} else if (sel == 18){
	    if(cm.getPlayer().getGMLevel() != 2){
	        buyrc = 1;
	        cm.sendGetNumber("�Ŀ�����Ʈ�� ȯ���Ͻ� ȫ������Ʈ�� ���� �Է����ּ���.\r\n#Cgray#(���� = 20 : 1) ex) 200000ȫ������Ʈ - 10000�Ŀ�����Ʈ",20,10000,cm.getPP());
	    }else{
		cm.sendOk("ȫ��GM�� �̿��Ͻ� �� �����ϴ�.");
		cm.dispose();
	    }
	}
	}else if (status == 2){
		if (buymeso == 1 && buyrc != 1){
			meso = cm.getText();
			cm.sendYesNo("ȯ���Ͻô� ȫ������Ʈ�� #b"+meso+"����Ʈ("+meso*30000+"�޼�)#k �½��ϱ�?");
		}else if(buyrc == 1){
			rc = (selection-selection%20)/1;
			cm.sendYesNo("#b"+rc+"#kȫ������Ʈ�� #b"+rc/20+"#k�Ŀ�����Ʈ�� ȯ���Ͻðڽ��ϱ�?");
		}else{
			cost1 = cost;
			if(cm.canHold(item) && buyrc != 1){
				if (equip == 1) {
					cm.sendGetText("������ ������ (���� ���� : #b"+cost+"����Ʈ)#k\r\n\r\n#i"+item+"#\r\n#r�ý� ��#k�� ������ �ݾ��� �Է��ϼ���\r\n#r100 ȫ������Ʈ#k = #b�ý��� 6#k\r\n#r500 ȫ������Ʈ#k = #b���ݷ� 3#k");
				} else {
					if(cm.getPP() >=cost) {
						cm.gainItem(item,quantity);
						cm.sendOk("�����ϼ̽��ϴ�.");
						cm.playerMessage(""+(cost)+" ����Ʈ�� ����Ͽ� "+name+" "+quantity+"���� �����ϼ̽��ϴ�.");
						cm.gainPP(-cost);
						cm.dispose();
						cm.getPlayer().saveToDB(false, false); 
					} else {
						cm.sendOk("ȫ������Ʈ�� �����մϴ�.");   
						cm.dispose();
    					}
				}
			} else {
				cm.sendOk("�κ��丮 ������ �����մϴ�.");
				cm.dispose();
			}
		}

    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getPP() > meso&&cm.getMeso()+(meso*30000) > 9999999999){
		cm.sendOk("�޼Ұ� �ʹ� �����ϴ�.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPP() > meso&&cm.getMeso()+(meso*30000) <= 9999999999){
		cm.gainMeso(meso*30000);
		cm.gainPP(-meso);
		cm.sendOk("ȫ������Ʈ�� �޼ҷ� ȯ���ϼ̽��ϴ�.");
		cm.dispose();
	    }else{
		cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
		cm.dispose();
	    }
	}else if(buyrc = 1){
		cm.gainRC(rc/20);
		cm.sendOk(rc+"ȫ������Ʈ�� "+rc/20+"�Ŀ�����Ʈ�� ȯ���ϼ̽��ϴ�.");
		cm.playerMessage(rc+"ȫ������Ʈ�� "+rc/20+"�Ŀ�����Ʈ�� ȯ���ϼ̽��ϴ�.");
		cm.gainPP(-rc);	
	}else{
	
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("������ ȫ������Ʈ�� ������ ���߾� �����ּ���.\r\n��(ȫ������Ʈ 100 = �ý��� 3)");
	    cm.dispose();
	}else{
	cm.sendGetText("������ ������ (���� ���� : #b"+cost2+"����Ʈ#k)\r\n\r\n#i"+item+"#\r\n����Ʈ�Ͻô� #r���ݷ�#k�� �Է��ϼ���\r\n#r100 ȫ������Ʈ#k = #b�ý��� 6 / ("+text1+"����Ʈ (�ý���+"+allstat+"))#k\r\n#r500 ȫ������Ʈ#k = #b���ݷ� 3#k");
        }
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
}
    }else if(status == 4){
	damage = cm.getText()/500 * 3;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("������ ȫ������Ʈ�� ������ ���߾� �����ּ���.\r\n��(ȫ������Ʈ 500 = ���ݷ� 3)");
	    cm.dispose();
	}else{
	cm.sendYesNo("������ ������ (���� ���� : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n#r100 ȫ������Ʈ#k = #b�ý��� 6 / ("+text1+"����Ʈ (�ý���+"+allstat+"))#k\r\n#r500 ȫ������Ʈ#k = #b���ݷ� 3 / ("+text2+"����Ʈ (���ݷ�+"+damage+"))#k\r\n\r\n������ �������� ���� �Ͻðڽ��ϱ�?");
    	}
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getPP() >= cost3){
	cm.sendOk(""+(cost3)+"����Ʈ�� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.playerMessage(""+(cost3)+" ����Ʈ�� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.gainSponserItem(item,'[ȫ��������]',allstat,damage,0);
	cm.gainPP(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
	}
	}else{
	cm.dispose();
	}
}

