


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ����

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(80, 1003946, 1), new Array(80, 1102612, 1), new Array(80, 1082540, 1), new Array(80, 1052647, 1), new Array(80, 1072853, 1), new Array(20, 1122262, 1), new Array(20, 1132242, 1));
var itemsz1 = new Array(new Array(100, 2430445, 1));

var itemCategorys = new Array("������� �� ����", "������� ���� ���� ����");


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
	var leaf = cm.itemQuantity(4001254);
        var trade = "������� �� �����̿���~ \r\n��, ����� ������� �۵��� #b[������� ����]#k ���� 80��, �Ǽ������� 20��, ���� ���� 200���� ��ȯ�ϽǼ� �ֽ��ϴ�.  #b[������� ����]#k�� #r�� #k���Լ���� �����̶�׿�.\r\n";
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
        cm.sendYesNo("������� ���� "+itemsArray[select][0]+"���� #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#���� ��ȯ �Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4001254, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4001254, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("��ȯ�Ϸ�! �κ��丮�� Ȯ���غ�!");
            cm.dispose();
        } else {
            cm.sendOk("�κ��丮�� ���� á�ų� ��ǳ���� �����Ѱ� ���׿�.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
}