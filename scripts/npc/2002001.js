


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012102
	
	���ǽ� �̸� : �Ǿ�

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : �ֹ��� ��ȯ


*/

var itemsz0 = new Array(new Array(5, 1004422, 5), new Array(5, 1102775, 5), new Array(5, 1082636, 5), new Array(5, 1052882, 5), new Array(5, 1073030, 5), new Array(5, 1152174, 5));
var itemsz1 = new Array(new Array(5, 1004424, 5), new Array(5, 1102795, 5), new Array(5, 1082638, 5), new Array(5, 1052888, 5), new Array(5, 1073033, 5), new Array(5, 1152177, 5));
var itemsz2 = new Array(new Array(5, 1004425, 5), new Array(5, 1102796, 5), new Array(5, 1082639, 5), new Array(5, 1052889, 5), new Array(5, 1073034, 5), new Array(5, 1152178, 5));
var itemsz3 = new Array(new Array(5, 1004423, 5), new Array(5, 1102794, 5), new Array(5, 1082637, 5), new Array(5, 1052887, 5), new Array(5, 1073032, 5), new Array(5, 1152176, 5));
var itemsz4 = new Array(new Array(5, 1004426, 5), new Array(5, 1102797, 5), new Array(5, 1082640, 5), new Array(5, 1052890, 5), new Array(5, 1073035, 5), new Array(5, 1152179, 5));


var itemCategorys = new Array("#r#i2022575# ���� ��\r\n", "#b#i2022577# �ü� ��\r\n", "#r#i2022578# ���� ��\r\n", "#b#i2022576# ������ ��\r\n", "#r#i2022579# ���� ��#k");


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
	var leaf = cm.itemQuantity(4310067);
        var trade = "#b�ۼַ��� ��#k �����Դϴ�\r\n�ۼַ��� ���� #b#i4310067##z4310067##k���� ��ȯ�ϽǼ����ֽ��ϴ�\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "#b���Ͻô� �������� ��󺸼���#k\r\n#e#r[��!]�� �������� ��ȯ�� ȯ�ҹ� ��Ұ� �Ұ����մϴ�#k#n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("#bPC������ "+itemsArray[select][0]+"���� #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#���� ��ȯ �Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310067, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310067, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("#b��ȯ �Ϸ� �κ��丮�� Ȯ�����ּ���#k");
            cm.dispose();
        } else {
            cm.sendOk("#b�κ��丮�� ���� ã�ų� ������ ���׿�#k");
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