


/*

�Ϳ��÷��� (wow_plus)


*/
var itemsz0 = new Array(new Array(100, 3010702, 1), new Array(100, 3010676, 1), new Array(100, 3010681, 1), new Array(100, 3010682, 1), new Array(100, 3010685, 1), new Array(100, 3010690, 1), new Array(100, 3010691, 1), new Array(100, 3010692, 1), new Array(100, 3010693, 1), new Array(100, 3010694, 1), new Array(100, 3010695, 1), new Array(100, 3010700, 1), new Array(100, 3010702, 1), new Array(100, 3010703, 1), new Array(100, 3010704, 1), new Array(100, 3010705, 1), new Array(100, 3010721, 1), new Array(100, 3010722, 1), new Array(100, 3010734, 1) ,new Array(100, 3010742, 1), new Array(100, 3010743, 1), new Array(100, 3010760, 1), new Array(100, 3010761, 1), new Array(100, 3010766, 1), new Array(100, 3010767, 1), new Array(100, 3010798, 1), new Array(100, 3010800, 1), new Array(100, 3010801, 1), new Array(100, 3010802, 1), new Array(100, 3010803, 1), new Array(100, 3010804, 1), new Array(100, 3010810, 1), new Array(100, 3010811, 1) ,new Array(100, 3010812, 1), new Array(100, 3010815, 1));

var itemCategorys = new Array("#b����");


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
	var leaf = cm.itemQuantity(4310063);
        var trade = "#e�ֽž�����#n�� ��ȯ�ص帮�ڽ��ϴ�. �� �����۵��� #b�ý���+500 ����+100#k �߰��ɼ��� �پ��ִ� �����۵��Դϴ�. \r\n\r\n������ ���� #e:#n #i4310063# #r#z4310063# 100 ��#k \r\n\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "���ϴ� �������� ��󺸼���.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##b < �������� 100�� >#l#k\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("#b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"##k ���� �̾����� �����Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310063, 100) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310063, -100);
	    cm.gainSponserItem(itemsArray[select][1],'[�ƾ߳�]',500,100,0);
            cm.sendOk("#i4310063# 100���� #i"+itemsArray[select][1]+"#�� ��ȯ�ϼ˽��ϴ�.");
            cm.dispose();
        } else {
            cm.sendOk("�κ��丮�� ���� á�ų� #i4310063# �� �����մϴ�.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
}