/*
�Ŀ� ��ũ��Ʈ
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
var buymeso = 0;           //20
var meso;



function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.openShop (1012008);
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;             //40
    }

    if (status == 0) {
        var text = "�ȳ��ϼ��� #b#h0##k��. �Ŀ������� ���Ű��� ȯ���մϴ�.\r\n";
	text += "\r\n#e�������� �Ŀ�����Ʈ#n : #r"+cm.getRC()+"#k\r\n\r\n";
	//text += "#L19# �޼� ȯ�� (���� 1 : 40000)\r\n\r\n"
	text += "#L1# #i4001126# 1000��(1000��)����";
	text += "#L2# #i4001126# 2000��(2000��)\r\n";

	text += "#L15# #i4310034# 20�� (2600��)����";
	text += "#L16# #i4310058# 01�� (3500��)\r\n\r\n";

	text += "#L3# #i1002186# (500(+a)��)����";
	text += "#L4# #i1102039# (500(+a)��)\r\n";
	text += "#L5# #i1072153# (500(+a)��)����";
	text += "#L6# #i1082102# (500(+a)��)\r\n";
	text += "#L7# #i1032024# (500(+a)��)����";
	text += "#L8# #i1022079# (500(+a)��)\r\n\r\n";

	text += "#L9# #i1102511# (1500(+a)��)����";       //   60
	text += "#L10# #i1102466# (2000(+a)��)\r\n";
	text += "#L11# #i1102376# (1500(+a)��)����";
	text += "#L12# #i1102377# (1500(+a)��)\r\n";
	text += "#L13# #i1102378# (1500(+a)��)����";
	text += "#L14# #i1102290# (1200(+a)��)\r\n";
	text += "#L17# #i1102307# (1200(+a)��)����";
	text += "#L18# #i1102308# (1200(+a)��)\r\n";

        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 1000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;                 //80
	    quantity = 2000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 500;
	    name = "�������";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 500;
	    name = "�������";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 500;
	    name = "����Ź�";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 500;
	    name = "�����尩";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 500;
	    name = "����Ͱ�";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 500;
	    name = "����Ȱ�";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 1500;
	    name = "�����ɷ��";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 2000;
	    name = "�����Ÿ���ƿ��";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 1500;
	    name = "�������÷ζ�";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 1500;
	    name = "�����ɹ̽�ƽ";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 1500;
	    name = "�����ɸ�ε�";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 1200;
	    name = "�ɺ�ܳ�����";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 20;
	    cost = 2600;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 3500;
	    name = "�ű׳ʽ� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 1200;
	    name = "��Ű���� ����";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 1200;
	    name = "������Ʈ�� ����";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 19) {
	    buymeso = 1
	    cm.sendGetText("���� �Ŀ�����Ʈ�� ȯ���Ͻðڽ��ϱ�? (���� 1 : 40000)");
    }else if (status == 2){
	cost1 = cost;
    if (cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("������ ������ (���� ���� : #b"+cost+"����Ʈ#k)\r\n\r\n#i"+item+"#\r\n���Ͻô� #r�ý���#k�� �Է��ϼ���\r\n#r100 �Ŀ�����Ʈ#k = #b�ý��� 6#k\r\n#r500 �Ŀ�����Ʈ#k = #b���ݷ� 3#k");  //200
	    }else {
	    if (cm.getRC() > cost){
	    cm.gainItem(item,quantity);
	    cm.sendOk("�����ϼ̽��ϴ�.");
	    cm.playerMessage("#r"+(cost)+"#k���� ����Ͽ� #b"+name+"#k "+quantity+"���� �����ϼ̽��ϴ�.");
	    cm.gainRC(-cost);
	    cm.saveToDB(false,false);
	    cm.dispose();		
	    }else{
		cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
		cm.dispose();
	    }
            }
	}else {
	    cm.sendOk("�κ��丮 ������ �����մϴ�.");   
	    cm.dispose();
    }
    }else if (status == 3){
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){         //220
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n��(�Ŀ�����Ʈ 100 = �ý��� 3)");
	    cm.dispose();
	}else{
	cm.sendGetText("������ ������ (���� ���� : #b"+cost2+"����Ʈ#k)\r\n\r\n#i"+item+"#\r\n���Ͻô� #r���ݷ�#k�� �Է��ϼ���\r\n#r100 �Ŀ�����Ʈ#k = #b�ý��� 6 / ("+text1+"����Ʈ (�ý���+"+allstat+"))#k\r\n#r500 �Ŀ�����Ʈ#k = #b���ݷ� 3#k");
        }
	}
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
    }else if(status == 4){
	damage = cm.getText()/500 * 3;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n��(�Ŀ�����Ʈ 500 = ���ݷ� 3)");
	    cm.dispose();
	}else{ //240
	cm.sendYesNo("������ ������ (���� ���� : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n���Ͻô� #r���ݷ�#k�� �Է��ϼ���\r\n#r100 �Ŀ�����Ʈ#k = #b�ý��� 6 / ("+text1+"����Ʈ (�ý���+"+allstat+"))#k\r\n#r500 �Ŀ�����Ʈ#k = #b���ݷ� 3 / ("+text2+"����Ʈ (���ݷ�+"+damage+"))#k\r\n\r\n������ �������� ���� �Ͻðڽ��ϱ�?");
    	}
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getRC() >= cost3){
	cm.sendOk(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.playerMessage(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.gainSponserItem(item,allstat,damage,0);
	cm.gainRC(-cost3);
	cm.saveToDB(false,false);
	cm.dispose();
	}else{
	cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
	cm.dispose();
	}
	}else{
	cm.dispose();  //260
	}

}



