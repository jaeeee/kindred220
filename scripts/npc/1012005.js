



var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendYesNo("#r환생하러가시겠습니까?#k#b(200레벨이상가능)#k");
    } else if (status == 1) {
	if (cm.getPlayer().getLevel() >= 150)
		{
			cm.warp(340000019,0);
		}
	else cm.sendSimple("#r200레벨이안되시군요ㅎㅎ#k");
    }
}


