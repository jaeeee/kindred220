
var status;
var select = -1;
var book  = new Array(2591045,2591046,2591047,2591048,2591049,2591050,2591051,2591052,2591053,2591054,2591085);

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
	    if(!cm.haveItem(2431660, 10)) { 
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
		cm.gainItem(2431660, -10);
		cm.dispose();
			}
    		}
	}
