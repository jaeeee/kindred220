


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(18, 1212115, 18), new Array(18, 1222109, 18), new Array(18, 1232109, 18), new Array(18, 1242116, 18), new Array(18, 1302333, 18), new Array(18, 1312199, 18), new Array(18, 1322250, 18), new Array(18, 1332274, 18));
var itemsz1 = new Array(new Array(18, 1342101, 18), new Array(18, 1362135, 18), new Array(18, 1372222, 18), new Array(18, 1382259, 18), new Array(18, 1402251, 18), new Array(18, 1412177, 18), new Array(18, 1422184, 18), new Array(18, 1522138, 18), new Array(18, 1532144, 18));
var itemsz2 = new Array(new Array(18, 1432214, 18), new Array(18, 1442268, 18), new Array(18, 1452252, 18), new Array(18, 1462239, 18), new Array(18, 1472261, 18), new Array(18, 1462193, 18), new Array(18, 1482216, 18), new Array(18, 1492231, 18));

var itemCategorys = new Array("�ۼַ��� ���⸦ ����ͽ��ϴ�[1]", "�ۼַ��� ���⸦ ����ͽ��ϴ�[2]",  "�ۼַ��� ���⸦ ����ͽ��ϴ�[3]");


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
	var leaf = cm.itemQuantity(40310067);
        var trade = "#b�ۼַ��� ������#k �����Դϴ�. � �������� ���ϼ���?\r\n��, ������ �ۼַ��� �������� #b#i4310067##z4310067##k 18���� ��ȯ�ϽǼ� �ֽ��ϴ�. #b#i4310067##z4310067##k�� #r��ɽý��� #k���� ��ȯ�Ѵٰ� �ϳ׿�.\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "#r#e[��!]������ �´� �������� �������� ��ǰ�ȵ˴ϴ�.#n#k\r\n\r\n#b";
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