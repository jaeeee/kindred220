
var status;
var select = -1;
var book  = new Array(1102476,1102477,1102478,1102479,1102480,1072737,1072738,1072739,1072740,1072741,1132169,1132170,1132171,1132172,1132173);

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
	    var text = "�ް� ���� ������� �����#r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("���� ��� ������ #b#z"+book[select]+"##k �¾�?");
	} else if (status == 2) {
	    if (cm.haveItem(2430456, 1)) {
		if (cm.canHold(1102476)) {
		    cm.sendOk("�κ��丮�� Ȯ���ϼ���");
		    cm.gainItem(2430456, -1);
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






