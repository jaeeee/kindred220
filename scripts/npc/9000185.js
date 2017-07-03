/*
  제작자 우비
*/

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
            
	       var chat = "#b#h0##k님 안녕하세요! 각종만능상점이에요.\r\n";
	       chat += "#L1##b무기 상점#k#L400##b주문서 상점#k#l#L401##b물약 상점#k#l";	       
	       chat += "\r\n#L404##r [HOT] #k#b안드로이드 상점#k#L405##r[HOT]#k#b작템#k";
	       chat += "\r\n#L40##r [HOT] #k#b소울 상점#k";

	       cm.sendSimple(chat);

	     } else if (selection == 1) {
		cm.dispose();
		cm.openNpc(1022000);
	     } else if (selection == 400) {
		cm.dispose();
		cm.openNpc(1010100);
	     } else if (selection == 401) {
		cm.dispose();
		cm.openShop(9020004);
	     } else if (selection == 402) {
		cm.dispose();
		cm.openNpc(9072201);	
	     } else if (selection == 403) {
		cm.dispose();
		cm.openNpc(1033200);	
	     } else if (selection == 404) {
		cm.dispose();
		cm.openShop(10009);		
	     } else if (selection == 405) {
		cm.dispose();
		cm.openShop(1022001);	
	     } else if (selection == 40) {
		cm.dispose();
		cm.openShop(10059);
			}
    	}
}





