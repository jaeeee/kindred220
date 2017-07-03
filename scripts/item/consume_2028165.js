
var status;
var select = -1;
var book  = new Array(1212065,1222060,1232058,1242062,1302276,1312154,1322204,1332226,1342083,1362091,1372178,1382209,1402197,1412136,1422141,1432168,1442224,1452206,1462194,1472215,1482169,1492180,1522095,1532099
);

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
	    var text = "받고 싶은 145제 무기를 선택해줘 #r아참! 제논은 '도적' 이야!.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("받을 145제 무기는 #b#z"+book[select]+"##k 맞아?");
	} else if (status == 2) {
		cm.gainItem(book[select], 1);
		cm.gainItem(2028165, -1);
		cm.dispose();
	}
    }
}






