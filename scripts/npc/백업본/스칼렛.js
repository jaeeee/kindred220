


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(15, 1402197, 15), new Array(15, 1302276, 15), new Array(15, 1442224, 15), new Array(15, 1322204, 15), new Array(15, 1432168, 15), new Array(15, 1212065, 15), new Array(15, 1382209, 15));
var itemsz1 = new Array(new Array(15, 1372178, 15), new Array(15, 1522095, 15), new Array(15, 1452206, 15), new Array(15, 1462194, 15), new Array(15, 1362091, 15), new Array(15, 1332226, 15), new Array(15, 1472215, 15));
var itemsz2 = new Array(new Array(15, 1342083, 15), new Array(15, 1222060, 15), new Array(15, 1482169, 15), new Array(15, 1492180, 15), new Array(15, 1532099, 15), new Array(15, 1242062, 15), new Array(15, 1232058, 15));

var itemCategorys = new Array("��Į�� part.1", "��Į�� part.2", "��Į�� part.3");


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
        var trade = "��Į�� ������ �����Դϴ�. � �������� ���ϼ���?\r\n��, ����� ��Į�� �������� #b[������ ����]#k 15���� ��ȯ�ϽǼ� �ֽ��ϴ�. #b[������ ����]#k�� #r�Ŀ� #k���� �����Ѵٰ� �ϳ׿�.\r\n";
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