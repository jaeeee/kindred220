
var status;
var select = -1;
var book  = new Array(1002186,1102039,1082102,1072153,1012289,1022079,1032024);

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
	    var text = "투명 아이템을 골라~ #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("정말이야? ");
	} else if (status == 2) {
	    if (cm.haveItem(2431410, 1)) {
		if (cm.canHold(1002186)) {
		    cm.sendOk("인벤토리를 확인하세요");
		    cm.gainItem(2431410, -1);
		    cm.gainItem(book[select], 1);
		    cm.dispose();
		} else {
		    cm.sendOk("장비칸에 빈 공간이 없습니다.");
		    cm.dispose();
		}
            } else {
		cm.sendOk("부족합니다.");
		cm.dispose();

}
	}
    }
}






