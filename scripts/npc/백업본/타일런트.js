


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(10, 1102481, 10), new Array(10, 1102482, 10), new Array(10, 1102483, 10), new Array(10, 1102484, 10), new Array(10, 1102485, 10));
var itemsz1 = new Array(new Array(10, 1072743, 10), new Array(10, 1072744, 10), new Array(10, 1072745, 10), new Array(10, 1072746, 10), new Array(10, 1072747, 10));
var itemsz2 = new Array(new Array(10, 1132174, 10), new Array(10, 1132175, 10), new Array(10, 1132176, 10), new Array(10, 1132177, 10), new Array(10, 1132178, 10));

var itemCategorys = new Array("Ÿ�Ϸ�Ʈ Ŭ��", "Ÿ�Ϸ�Ʈ ����", "Ÿ�Ϸ�Ʈ ��Ʈ");


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
	var leaf = cm.itemQuantity(4310058);
        var trade = "Ÿ�Ϸ�Ʈ ������ �����Դϴ�. � �������� ���ϼ���?\r\n��, ����� Ÿ�Ϸ�Ʈ �������� #b[������ ����]#k 10���� ��ȯ�ϽǼ� �ֽ��ϴ�. #b[������ ����]#k�� #r�Ŀ�#k���� �����Ѵٰ� �ϳ׿�.\r\n";
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
}