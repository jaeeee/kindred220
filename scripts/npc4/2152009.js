/*
�ƾ߳�(riel0216)
*/
var itemsz0 = new Array(new Array(100, 1003198, 1), new Array(100, 1002254, 1), new Array(100, 1003798, 1) ,new Array(100, 1002777, 1), new Array(100, 1003173, 1));
var itemsz1 = new Array(new Array(100, 1042255, 1));
var itemsz2 = new Array(new Array(100, 1062166, 1));
var itemsz3 = new Array(new Array(100, 1382208, 1), new Array(100, 1212063, 1), new Array(100, 1372177, 1), new Array(100, 1212011, 1), new Array(100, 1372044, 1), new Array(100, 1382057, 1), new Array(100, 1372081, 1), new Array(100, 1372082, 1), new Array(100, 1372084, 1) ,new Array(100, 1382104, 1));
var itemsz4 = new Array(new Array(100, 1052155, 1));
var itemsz5 = new Array(new Array(100, 1082306, 1), new Array(100, 1082100, 1), new Array(100, 1082235, 1), new Array(100, 1082296, 1));
var itemsz6 = new Array(new Array(100, 1092057, 1));
var itemsz7 = new Array(new Array(100, 1072160, 1), new Array(100, 1072356, 1), new Array(100, 1072503, 1));

var itemCategorys = new Array("#b����", "����", "����", "����", "�ѹ���", "�尩\r\n", "����", "�Ź�");


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
        var trade = "#e�����������#n�� ��ȯ�ص帮�ڽ��ϴ�. �� �����۵��� #b�ý���+500 ����+100#k �߰��ɼ��� �پ��ִ� �����۵��Դϴ�. \r\n\r\n������ ���� #e:#n #i4310063# #r#z4310063# 100 ��#k \r\n\r\n";
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
if (sel==1)return itemsz1;
if (sel==2)return itemsz2;
if (sel==3)return itemsz3;
if (sel==4)return itemsz4;
if (sel==5)return itemsz5;
if (sel==6)return itemsz6;
if (sel==7)return itemsz7;
}