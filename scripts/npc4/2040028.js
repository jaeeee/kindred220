


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(18, 1212063, 18), new Array(18, 1222058, 18), new Array(18, 1232057, 18), new Array(18, 1242060, 18), new Array(18, 1302275, 18), new Array(18, 1402196, 18), new Array(18, 1482168, 18), new Array(18, 1532098, 18));
var itemsz1 = new Array(new Array(18, 1322203, 18), new Array(18, 1332225, 18), new Array(18, 1342082, 18), new Array(18, 1362090, 18), new Array(18, 1372177, 18), new Array(18, 1382208, 18), new Array(18, 1492179, 18));
var itemsz2 = new Array(new Array(18, 1412135, 18), new Array(18, 1422140, 18), new Array(18, 1432167, 18), new Array(18, 1442223, 18), new Array(18, 1452205, 18), new Array(18, 1462193, 18), new Array(18, 1472214, 18), new Array(18, 1522094, 18));

var itemCategorys = new Array("�����ϸ� ���⸦ ���ͽ��ϴ�[1]", "�����ϸ� ���⸦ ���ͽ��ϴ�[2]",  "�����ϸ� ���⸦ ���ͽ��ϴ�[3]");


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
	var leaf = cm.itemQuantity(4310129);
        var trade = "#b�����ϸ� ������#k �����Դϴ�. � �������� ���ϼ���?\r\n��, ����� �����ϸ� �������� #b#i4310067##z4310067##k 18���� ��ȯ�ϽǼ� �ֽ��ϴ�. #b#i4310067##z4310067##k�� #r �ʱ��ڿ�����500������ �Ŀ����� �����մϴ�.#k\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "#r#e[��!]������ �´� �������� ������ ��ǰ�ȵ˴ϴ�.#n#k\r\n\r\n#b";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("���� "+itemsArray[select][0]+"���� #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#���� ��ȯ �Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310067, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310067, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("��ȯ�Ϸ�! �κ��丮�� Ȯ���غ�!");
            cm.dispose();
        } else {
            cm.sendOk("�κ��丮�� ���� á�ų� �Ŀ� ���� �� �����Ѱ� ���׿�.");
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