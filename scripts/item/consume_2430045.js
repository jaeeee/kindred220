
var status;
var select = -1;
var book  = new Array(1212066,1222061,1232060,1242065,1302277,1312155,1322205,1332227,
1362094,1372179,1382211,1402199,1412137,1422142,1432169,1442225,
1452207,1462195,1472216,1482170,1492181,1522096,1532100);

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
	    var text = "받고 싶은 아이템을 선택해줘 #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("받을 아이템 #b#z"+book[select]+"##k 맞아?");
	} else if (status == 2) {
	    if (cm.haveItem(2430045, 1)) {
		if (cm.canHold(1003946)) {
		    cm.sendOk("인벤토리를 확인하세요");
		    cm.gainItem(2430045, -1);
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






