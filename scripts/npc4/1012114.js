


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1012114

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : �޸��̲� ��� (910010000)

	���ǽ� ���� : MISSINGNO


*/

var itemsz0 = new Array(new Array(0, 1352220, 1), new Array(0, 1352221, 1), new Array(0, 1352222, 1));
var itemsz1 = new Array(new Array(0, 1352210, 1), new Array(0, 1352211, 1), new Array(0, 1352212, 1));
var itemsz2 = new Array(new Array(0, 1352200, 1), new Array(0, 1352201, 1), new Array(0, 1352202, 1));
var itemsz3 = new Array(new Array(0, 1352260, 1), new Array(0, 1352261, 1), new Array(0, 1352262, 1));
var itemsz4 = new Array(new Array(0, 1352270, 1), new Array(0, 1352271, 1), new Array(0, 1352272, 1));
var itemsz5 = new Array(new Array(0, 1352240, 1), new Array(0, 1352241, 1), new Array(0, 1352242, 1));
var itemsz6 = new Array(new Array(0, 1352230, 1), new Array(0, 1352231, 1), new Array(0, 1352232, 1));
var itemsz7 = new Array(new Array(0, 1352250, 1), new Array(0, 1352251, 1), new Array(0, 1352252, 1));
var itemsz8 = new Array(new Array(0, 1352290, 1), new Array(0, 1352291, 1), new Array(0, 1352292, 1));
var itemsz9 = new Array(new Array(0, 1352280, 1), new Array(0, 1352281, 1), new Array(0, 1352282, 1));
var itemsz10 = new Array(new Array(0, 1352900, 1), new Array(0, 1352901, 1), new Array(0, 1352902, 1));
var itemsz11 = new Array(new Array(0, 1352910, 1), new Array(0, 1352911, 1), new Array(0, 1352912, 1));
var itemsz12 = new Array(new Array(0, 1352920, 1), new Array(0, 1352921, 1), new Array(0, 1352922, 1));
var itemsz13 = new Array(new Array(0, 1352500, 1), new Array(0, 1352501, 1), new Array(0, 1352502, 1), new Array(0, 1352503, 1));
var itemsz14 = new Array(new Array(0, 1352970, 1), new Array(0, 1352971, 1), new Array(0, 1352972, 1));
var itemsz15 = new Array(new Array(0, 1099000, 1), new Array(0, 1099002, 1), new Array(0, 1099003, 1), new Array(0, 1099004, 1));
var itemsz16 = new Array(new Array(0, 1352000, 1), new Array(0, 1352001, 1), new Array(0, 1352002, 1), new Array(0, 1352003, 1));
var itemsz17 = new Array(new Array(0, 1352960, 1), new Array(0, 1352961, 1), new Array(0, 1352962, 1));
var itemsz18 = new Array(new Array(0, 1352940, 1), new Array(0, 1352941, 1), new Array(0, 1352942, 1));
var itemsz19 = new Array(new Array(0, 1352400, 1), new Array(0, 1352401, 1), new Array(0, 1352402, 1), new Array(0, 1352403, 1));
var itemsz20 = new Array(new Array(0, 1352950, 1), new Array(0, 1352951, 1), new Array(0, 1352952, 1));
var itemsz21 = new Array(new Array(0, 1352100, 1), new Array(0, 1352101, 1), new Array(0, 1352102, 1), new Array(0, 1352103, 1));
var itemsz22 = new Array(new Array(0, 1353001, 1), new Array(0, 1353002, 1), new Array(0, 1353003, 1), new Array(0, 1353004, 1));
var itemsz23 = new Array(new Array(0, 1352930, 1), new Array(0, 1352931, 1), new Array(0, 1352932, 1));
var itemsz24 = new Array(new Array(0, 1352601, 1), new Array(0, 1352602, 1), new Array(0, 1352603, 1), new Array(0, 1352604, 1));
var itemsz25 = new Array(new Array(0, 1352700, 1), new Array(0, 1352701, 1), new Array(0, 1352702, 1), new Array(0, 1352703, 1));



var itemCategorys = new Array("��ũ����Ʈ", "�ȶ��", "�����", "���츶����", "�ű�", "��,��", "��,��", "���", "����Ʈ�ε�", "������", "��Ŭ ����", "�� ����", "ĳ����", "ī����", "�ñ׳ʽ�", "���󽽷��̾�", "�޸�������", "���ϵ�����", "����", "��̳ʽ�", "��Ʋ������", "����", "����", "�ƶ�", "������������", "��ī��");


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
        var trade = "�������� �����Դϴ�. � �������� ���ϼ���?\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "���ϴ� �������� ��󺸼���.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##b< ���� >#l#k\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("����� #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#�� �����ðڽ��ϱ�?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if ((cm.getPlayer().getMeso() >= itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("�Ϸ�! �κ��丮�� Ȯ���غ�!");
            cm.dispose();
        } else {
            cm.sendOk("�κ��丮�� �����Դϴ�.");
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
if (sel==8)return itemsz8;
if (sel==9)return itemsz9;
if (sel==10)return itemsz10;
if (sel==11)return itemsz11;
if (sel==12)return itemsz12;
if (sel==13)return itemsz13;
if (sel==14)return itemsz14;
if (sel==15)return itemsz15;
if (sel==16)return itemsz16;
if (sel==17)return itemsz17;
if (sel==18)return itemsz18;
if (sel==19)return itemsz19;
if (sel==20)return itemsz20;
if (sel==21)return itemsz21;
if (sel==22)return itemsz22;
if (sel==23)return itemsz23;
if (sel==24)return itemsz24;
if (sel==25)return itemsz25;
}