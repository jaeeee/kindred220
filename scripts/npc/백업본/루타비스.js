


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(13, 1003797, 13), new Array(13, 1042254, 13), new Array(13, 1062165, 13));
var itemsz1 = new Array(new Array(13, 1003799, 13), new Array(13, 1042256, 13), new Array(13, 1062167, 13));
var itemsz2 = new Array(new Array(13, 1003798, 13), new Array(13, 1042255, 13), new Array(13, 1062166, 13));
var itemsz3 = new Array(new Array(13, 1003800, 13), new Array(13, 1042257, 13), new Array(13, 1062168, 13));
var itemsz4 = new Array(new Array(13, 1003801, 13), new Array(13, 1042258, 13), new Array(13, 1062169, 13));

var itemCategorys = new Array("[����]������", "[�ü�]�̱۾���", "[����]����ġ", "[����]�����", "[����]������");


var status = -1;
var menuSelect = -1;
var select = -1;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
	var leaf = cm.itemQuantity(4310029);
        var trade = "��Ÿ���� �����Դϴ�. � �������� ���ϼ���?\r\n��, ����� ��Ÿ���۵��� #b[������ ����]#k 13���� ��ȯ�ϽǼ� �ֽ��ϴ�. #b[������ ����]#k�� #r�Ŀ����� #k������� �������� �����Ѵٰ� �ϳ׿�.\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "���ϴ� �������� ��󺸼���.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("������ ���� "+itemsArray[select][0]+"���� #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#���� ��ȯ �Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310027, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310027, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("��ȯ�Ϸ�! �κ��丮�� Ȯ���غ�!");
            cm.dispose();
        } else {
            cm.sendOk("�κ��丮�� ���� á�ų� ������ ������ �����Ѱ� ���׿�.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
if (sel==2)return itemsz2;
if (sel==3)return itemsz3;
if (sel==4)return itemsz4;
}