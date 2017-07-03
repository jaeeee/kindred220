var meso = ["10000000", "15000000", "20000000", "35000000", "50000000", "100000000"];
var random1 = 1 + Math.floor(Math.random() * 5);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if(mode == 1) {
	status++;
    } else {
	status--;
	cm.dispose();
    }
    if (status == 0) {
	var main = "안녕하세요. #e#b홍코도박#n#k을 #e#b담당#n#k하는 #e#b엔피시#n#k입니다.\r\n\r\n#e#b#i4310034#  #e#r저스티스 코인 1개#n#k로 #e#b이용#n#k하실 수 있습니다.\r\n#e#b당첨#n#k 시 #e#b10000000메소#n#k부터 #e#b100000000메소#n#k를 #e#b획득#n#k할 수 있습니다.\r\n\r\n";
	main += "#L0##i4310034#   #e#r도박하기#n#k#l\r\n";
	cm.sendSimple(main);
    } else if (status == 1) {
	if (selection == 0) {
	    var random = "아래 #e#r저스티스 코인#n#k 중 #e#r한 개#n#k를 #e#b선택#n#k해 주세요.\r\n#e#b";
	    random += "#L1##v4310034##l   #L2##v4310034##l   #L3##v4310034##l   #L4##v4310034##l   #L5##v4310034##l";
	    cm.sendSimple(random);
	} else {
	    cm.sendOk("#e#b에러#n#k입니다.");
	    cm.dispose();
	}
    } else if (status == 2) {
	if (cm.haveItem(4310034, 1)) {
	    if (selection == random1) {
		Givemeso = meso[parseInt(Math.random() * meso.length)]
		cm.sendOk("#e#b당첨#n#k되셧습니다.\r\n#e#b당첨금#n#k으로 #b#e"+Givemeso+"메소#n#k를 #e#b획득#n#k하셨습니다.");
		cm.gainItem(4310034, -1);
		cm.gainMeso(Givemeso);
		cm.dispose();
	    } else {
		cm.sendOk("#e#b당첨#n#k되지 않았습니다. 위로금 #e#b300만메소#n#k가 #e#b지급#n#k되었습니다.#e#b다음 기회#n#k를 노려보세요.");
		cm.gainItem(4310034, -1);
		cm.gainMeso(3000000);
		cm.dispose();
	    }
	} else {
	    cm.sendOk("#e#b홍코도박#n#k을 하기 위해 #i4310034#   #e#r저스티스 코인 1개#n#k가 #e#b필요#n#k합니다.");
	    cm.dispose();
	}
    }
}