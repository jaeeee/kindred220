
var status;
var select = -1;
var book  = new Array(2431966,2431967,2432131,2432153,2432154,2432354,2432355,2432465,2432479,2432526,2432532);

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
	    var text = "�ް� ���� ������ ��Ų�� �������� ��ȸ�� �� �ѹ��̾�. #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("���� ������ ��Ų  #b#z"+book[select]+"##k �¾�?");
	} else if (status == 2) {
	    if (cm.haveItem(2431994, 1)) {
		if (cm.canHold(2431966)) {
		    cm.sendOk("�κ��丮�� Ȯ���ϼ���");
		    cm.gainItem(2431994, -1);
		    cm.gainItem(book[select], 0);
		    cm.dispose();
		} else {
		    cm.sendOk("�Һ�ĭ�� �� ������ �����ϴ�.");
		    cm.dispose();
		}
            } else {
		cm.sendOk("�̹� �ѹ� ��ȯ�ϼ̽��ϴ�. ���ڸ� �����ֽñ� �ٶ��ϴ�.");
		cm.dispose();

}
	}
    }
}






