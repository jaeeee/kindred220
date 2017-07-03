
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
	    var text = "받고 싶은 데미지 스킨을 선택해줘 기회는 딱 한번이야. #r.#l\r\n\r\n#b";
		for (var i = 0; i < book.length; i++) {
		    text+="#L"+i+"##i"+book[i]+"# #z"+book[i]+"##l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		select = selection;
		cm.sendYesNo("받을 데미지 스킨  #b#z"+book[select]+"##k 맞아?");
	} else if (status == 2) {
	    if (cm.haveItem(2431994, 1)) {
		if (cm.canHold(2431966)) {
		    cm.sendOk("인벤토리를 확인하세요");
		    cm.gainItem(2431994, -1);
		    cm.gainItem(book[select], 0);
		    cm.dispose();
		} else {
		    cm.sendOk("소비칸에 빈 공간이 없습니다.");
		    cm.dispose();
		}
            } else {
		cm.sendOk("이미 한번 교환하셨습니다. 상자를 버려주시기 바랍니다.");
		cm.dispose();

}
	}
    }
}






