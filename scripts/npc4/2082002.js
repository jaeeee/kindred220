var status;

function start() {
    status = -1;
	action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode != 1)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		
		cm.sendYesNo("배에서 내려서 정거장으로 돌아가시겠습니까?");

	} else { 
			cm.warp(cm.getMap().getId()-1);
			cm.dispose();
	}
    }
}