
var status;
var select = -1;
var book  = new Array(1003946,1102612,1082540,1052647,1072853,1122262,1132242);

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
	    var text = "�ް� ���� �������� �������� #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("���� ������ #b#z"+book[select]+"##k �¾�?");
	} else if (status == 2) {
	    if (cm.haveItem(2430041, 1)) {
		if (cm.canHold(1003946)) {
		    cm.sendOk("�κ��丮�� Ȯ���ϼ���");
		    cm.gainItem(2430041, -1);
		    cm.gainItem(book[select], 1);
		    cm.dispose();
		} else {
		    cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		    cm.dispose();
		}
            } else {
		cm.sendOk("�����մϴ�.");
		cm.dispose();

}
	}
    }
}






