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
        status++;
    }

    if (status == 0) {
        var text = "�ȳ��ϼ��� #b#h0##k��. ȫ�������� ���Ű��� ȯ���մϴ�.\r\n#r�ؾ����� �߰� ���Ǵ� GM���� ���ּ���.#k\r\n";
	text += "\r\n#r���� ȫ�� �̺�Ʈ�� �������Դϴ�. ī�並 Ȯ�����ּ���.#k\r\n"
	text += "\r\n#e�������� ȫ������Ʈ#n : #r"+cm.getPP()+"#k����Ʈ\r\n\r\n";

	text += "#L19# �޼� ȯ�� (���� 1 : 80000)\r\n\r\n"
	text += "#L20# #i2430218# 1��(400��) - ������ 1 �÷��ش�.\r\n";
	text += "#L23# #i2049129# 5��(3200��)\r\n";

	text += "#L1# #i4001126# 2000��(1000��)#l��";
	text += "#L2# #i4001126# 4000��(2000��)\r\n";

	text += "#L15# #i4310034# 10�� (2600��)����";
	text += "#L16# #i4310058# 01�� (5200��)\r\n\r\n";

	text += "#L24# #i1142593# 1��(4900��)\r\n\r\n";

	text += "#L21# #i3010519# 1��(400��)����������";
	text += "#L22# #i3010520# 1��(400��)\r\n";
        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 2000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;                 //80
	    quantity = 4000;
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
	    quantity = 10;
	    cost = 2600;
	    name = "����Ƽ�� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 5200;
	    name = "�ű׳ʽ� ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
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
	    buymeso =1;
	    cm.sendGetText("�޼ҷ� ȯ���� ���Ͻô� ȫ������Ʈ�� �Է����ּ���\r\n������ #b1 : 80000#k�Դϴ�.");
	}else if (sel == 20) {
	    item = 2430218;
	    quantity = 1;
	    cost = 400;
	    name = "��ǳ������ ���";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��Ƽ����";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��������";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3200;                 //80
	    quantity = 5;
	    name = "������ ȥ�� �ֹ��� 50%";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 4900;
	    name = "�ڡ�13���� ���ڡ�";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 1500;
	    name = "������ũ �ƿ��";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 1500;
	    name = "��ũ�Ͻ� �ƿ��";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}
    }else if (status == 2){
if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("ȯ���� ���Ͻô� ȫ������Ʈ�� #b"+meso+"��("+meso*80000+"�޼�)#k �½��ϱ�?");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("������ ������ (���� ���� : #b"+cost+"����Ʈ)#k\r\n\r\n#i"+item+"#\r\n#r�ý� ��#k�� ������ �ݾ��� �Է��ϼ���\r\n#r100 ȫ������Ʈ#k = #b�ý��� 6#k\r\n#r500 ȫ������Ʈ#k = #b���ݷ� 3#k");
	    }else {
	    if(cm.getPP() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("�����ϼ̽��ϴ�.");
	    cm.playerMessage(""+(cost)+"���� ����Ͽ� "+name+" "+quantity+"���� �����ϼ̽��ϴ�.");
	    cm.gainPP(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("ȫ������Ʈ�� �����մϴ�.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("�κ��丮 ������ �����մϴ�.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getPP() > meso&&cm.getMeso()+(meso*80000) > 2147483647){
		cm.sendOk("�޼Ұ� �ʹ� �����ϴ�.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPP() > meso&&cm.getMeso()+(meso*80000) <= 2147483647){
		cm.gainMeso(meso*80000);
		cm.gainPP(-meso);
		cm.sendOk("ȫ������Ʈ�� �޼ҷ� ȯ���ϼ̽��ϴ�.");
		cm.dispose();
	    }else{
		cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
		cm.dispose();
		}
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
	cm.sendGetText("������ ������ (���� ���� : #b"+cost2+"����Ʈ#k)\r\n\r\n#i"+item+"#\r\n���Ͻô� #r���ݷ�#k�� �Է��ϼ���\r\n#r100 ȫ������Ʈ#k = #b�ý��� 6 / ("+text1+"����Ʈ (�ý���+"+allstat+"))#k\r\n#r500 ȫ������Ʈ#k = #b���ݷ� 3#k");
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
	cm.sendOk(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.playerMessage(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
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

