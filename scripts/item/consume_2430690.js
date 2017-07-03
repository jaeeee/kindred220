
var status;
var select = -1;
var book  = new Array(5000023,5000043,5000064,5000065,5000068,5000072,5000083,5000084,5000089,5000090,5000091,5000092,5000093,5000152,5000201,5000202,5000206,5000211,5000215,5000216,5000217,5000221,5000225,5000228,5000229,5000230,5000237,5000239,5000240,5000243,5000244,5000245,5000249,5000250,5000251,5000256,5000257,5000258,5000261,5000271,5000272,5000273,5000275,5000276,5000277,5000290,5000291,5000292,5000293,5000294,5000295,5000299);

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
	    var text = "¹Þ°í ½ÍÀº ÆêÀ» ¼±ÅÃÇØÁà #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("¹ÞÀ» ÆêÀÌ #b#z"+book[select]+"##k ¸Â¾Æ?");
	} else if (status == 2) {
		cm.gainItem(book[select], 1);
		cm.gainItem(2430690, -1);
		cm.dispose();
	}
    }
}






