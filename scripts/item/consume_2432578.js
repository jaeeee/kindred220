
var status;
var select = -1;
var book  = new Array(2591324,2591325,2591326,2591327,2591328,2591329,2591330,2591331,2591332);

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
	    if(!cm.haveItem(2432578, 10)) { 
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
		cm.sendYesNo("���� �ҿ��� #b#t"+book[select]+"##k�� �½��ϱ�?");
	} else if (status == 2) {
		cm.gainItem(book[select], 1);
		cm.gainItem(2432578, -10);
		cm.dispose();
			}
    		}
	}
