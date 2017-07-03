var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    cm.gainItem(2450116, 3);
	    cm.gainItem(4310014, 1);
	    cm.gainItem(4310113, 3);
	    cm.sendOk("핫타임아이템이 지급되었습니다!");
	    cm.gainItem(2431156,-1);
            cm.dispose();
        } else { 
            cm.dispose();
        }
    }
}