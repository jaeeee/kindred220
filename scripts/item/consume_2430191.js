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
            cm.gainSponserItem(1052671,'[Ÿ��]',30,10,0);
            cm.gainSponserItem(1102615,'[Ÿ��]',30,10,0);
            cm.gainSponserItem(1112940,'[Ÿ��]',30,10,0);
            cm.gainSponserItem(1142581,'[Ÿ��]',30,10,0);
	    cm.gainItem(2430091, 1);
	    cm.gainItem(5680157, 1);
	    cm.gainItem(4310113, 1);
	    cm.gainItem(4310066, 20);
	    cm.gainItem(4001832, 5000);
	    cm.gainItem(2431110, 1);
            cm.gainMeso(100000000);
	    cm.gainItem(2430191,-1);
	    cm.dispose();
        } else { 
            cm.dispose();
        }
    }
}