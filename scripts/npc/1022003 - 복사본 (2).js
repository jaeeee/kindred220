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
        var text = "�ȳ��ϼ��� #b#h0##k��. �Ŀ������� ���Ű��� ȯ���մϴ�.\r\n";
	text += "\r\n�������� �Ŀ�����Ʈ : "+cm.getRC()+"\r\n";
	text += "#L1# #i4001126# 1000��(1000��)����";
	text += "#L2# #i4001126# 2000��(2000��)\r\n";
	text += "#L3# #i1002186# s:300/d:10 (5000��)����";
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
	    cost = 2000;
	    quantity = 2000;
	    name = "��ǳ��";
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 3) {
	    item = 1002186;
	    cost = 5000;
	    quantity = 1;
	    name = "�������";
	    equip = 1;
	    cm.sendOk("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}

    }else if (status == 2){
	if(cm.getRC() >cost) {
	    if (equip == 1) {
	        cm.sendGetText("���Ͻô� �ý����� �Է��ϼ���\r\n#r100�Ŀ�����Ʈ#k = #b�ý���3p#k\r\n#r500�Ŀ�����Ʈ#k = #b���ݷ�3p#k");
	    }else {
	    cm.gainItem(item,quantity);
	    cm.sendOk("�����ϼ̽��ϴ�.");
	    cm.playerMessage(""+(cost)+"���� ����Ͽ� "+name+" "+quantity+"���� �����ϼ̽��ϴ�.");
	    cm.gainRC(-cost);
	    cm.saveToDB(false,false);
	    cm.dispose();
	    }
	}else {
	    cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");   
	    cm.dispose();
    }
    }else if (status == 3){
	allstat = cm.getText()/100 * 3;
	var text = cm.getText();
	if (!allstat%100 == 0){
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n��(�Ŀ�����Ʈ 100p = �ý���3p)");
	    cm.dispose();
	}else{
	cm.sendGetText("������ ������ "+item+"\r\n�ý��ݿ� ������ �Ŀ�����Ʈ : "+text+"("+allstat+")\r\���Ͻô� ���ݷ��� �Է��ϼ���\r\n#r500�Ŀ�����Ʈ#k = #b���ݷ�3p#k");
    }
    }else if (status == 4){ //90
	damage = cm.getText()/500 * 3;
	var text = cm.getText();
	if (!damage%500 == 0){
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n��(�Ŀ�����Ʈ 500p = ���ݷ�3p)");
	    cm.dispose();
	}
    }else if (status == 5){
	cm.sendOk("�ֹ��Ͻ� �������� ������ �Ϸ�Ǿ����ϴ�.");
	cm.gainSponserItem(item,allstat,damage,0);
    }else{
	cm.dispose();
	}
    }