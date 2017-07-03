function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "클라라 저는 모든 상품을 판매하고 있습니다.\r\n\r\n#n"
	    chat += "#e< 잡화 >#n";
	    chat += "\r\n#b#L1#화살,표창,불릿";
	    chat += "#L2#포션#l#k";
	    chat += "\r\n\r\n\r\n\r\n#e < 방어구, 무기 >#n";
	    chat += "\r\n#r#L6#각종 방어구, 무기";
	    cm.sendSimple(chat);



		
             } else if (selection == 1) {
		cm.dispose();
		cm.openShop (10651);
             } else if (selection == 2) {
		cm.openShop(1011100);
		cm.dispose();
             } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(1043001);
             } else if (selection == 4) {
		cm.openShop(10004);
		cm.dispose();
             } else if (selection == 5) {
		cm.openShop(10001);
		cm.dispose();
             } else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9010031);
             } else if (selection == 7) {
		cm.dispose();
		cm.openNpc(9010035);
             } else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1033233);
             } else if (selection == 9) {
		cm.dispose();
		cm.openNpc(1022002);
             } else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9072201);
             } else if (selection == 11) {
		cm.dispose();
		cm.openNpc(1052003);
             } else if (selection == 12) {
		cm.openShop(11);
		cm.dispose();
             } else if (selection == 13) {
		cm.dispose();
		cm.openNpc(1032003);
             } else if (selection == 14) {
		cm.dispose();
		cm.openNpc(1092017);
             } else if (selection == 15) {
		cm.dispose();
		cm.openNpc(1064024);
		}
	} 
}