function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.sendOk("참여하시지않겠습니까?\r\n그럼,참여하고싶을때 다시와주세요.");
	cm.dispose();
	return;
	}
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	if (cm.haveItem(4001301) == 0) {
        cm.sendYesNo("#e#h ##n님?\r\n\r\n유물이벤트에 참여하시겠습니까?");
    } else {
	cm.dispose();
	cm.openNpc(1012112);
}
    } else if (status == 1) {
        cm.sendNext("참여해주셔서 감사합니다!!\r\n#i4001301##b #t4001301##k지급되었습니다.\r\n\r\n#e#r다시 대화를걸어주세요!#n#k");
	cm.gainItem(4001301, 1);
	cm.dispose();
    } else if (status == 2) {
        cm.sendNext("그리고 저한테 다시 말걸어주시면 토리 를 불러드릴게요.");
	cm.dispose();
    }
}
/*function start() {
    status = -1;
    action (1, 0, 0);
}

function start() {
 if (true) {
	    var chat = "#fn바탕##r#e[축하 드립니다]#k#n#b\r\n\r\n#fn바탕##e#r피크닉 님께서#k#n#b이번 코디왕 콘테스트 이벤트에서\r\n\r\n1등을 하셨습니다!#k";
	    //chat += "#L4##b[올라올라]고지를 향해서#k#e#r(난이도:★★★☆☆)#k#n\r\n";
   	    cm.sendSimple(chat);
}
}*/