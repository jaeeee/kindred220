
var status;
var select = -1;
var book  = new Array(2591031,2591032,2591033,2591034,2591035,2591036,2591037,2591110,2591111,2591112,2591113,2591114,2591115,2591116);

function start() {    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
    	return;
    } else {
        if (mode == 1)
            status++;
        if (status == 0) {
	    if(!cm.haveItem(2431658, 10)) { 
		cm.sendOk("#e�ҿ�����#n�� 10���� ���°Ͱ����ϴ�. #e�ҿ�����#n�� #bī�ν�Ÿ��#k���� �Ŀ�&ȫ�����ϸ� ���� �� �ִٰ� �մϴ�.");
		cm.dispose();
		} else {
	    var text = "#b#h ##k�� ���� #e�ҿ�����#n�� 10���� �����̳׿�!\r\n���ϵ帳�ϴ�, �ް� ���� �ҿ��� �������ּ���.\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
				cm.sendSimple(text);
		}
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("���� �ҿ��� #b#t"+book[select]+"##k �¾�?");
	} else if (status == 2) {
		cm.gainItem(book[select], 1);
		cm.gainItem(2431658, -10);
		cm.dispose();
			}
    		}
	}
