/*
	? ????? ???? ?????.
	???? KMS ???? ???????.

	??? : ??(seonwoo__@naver.com)
*/

var status = 0;

function start() {
	status = -1;
	action(1,0,0);
}


function action(mode , type , selection){
	if (mode == -1) {
		cm.dispose();
	} else {
	if (mode == 0 && (status == 0)) {
		cm.sendOk("Goodbye.");
		cm.dispose();
	} 
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
            cm.sendYesNo("#bHello! \r\npresent #i1003450##i1052434##i1102450##i1142126##i1702357##i1112135#of\r\n I like to support the sumptuous items as initial. \r\n#e#r(All items (all stats 50 30 Confucius))\r\n#r\r\n#bDo you want to receive the item ??\r\n#r?caution : Equipment leave Cannes Cannes 6 Nonrecoverable")
        } else if (status == 1){
           if (cm.getPlayer().getKeyValue(cm.getNpc()+"_Pure") == null) {
            cm.gainHongboJangbi(1003450, 1); cm.gainItem(1112135, 1);
            cm.gainHongboJangbi(1052434, 1); 
            cm.gainHongboJangbi(1102450, 1); 
            cm.gainHongboJangbi(1142126, 1); 
            cm.gainHongboJangbi(1702357, 1); 
            cm.getPlayer().setKeyValue(cm.getNpc()+"_Pure", "1");
		        cm.sendOk("He received the item.");
			cm.dispose();
		    } else {
		        cm.sendOk("You have already get.");
		        cm.dispose();
		    }
}
}
}