



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
        cm.sendYesNo("#rȯ���Ϸ����ðڽ��ϱ�?#k#b(200�����̻󰡴�)#k");
    } else if (status == 1) {
	if (cm.getPlayer().getLevel() >= 150)
		{
			cm.warp(340000019,0);
		}
	else cm.sendSimple("#r200�����̾ȵǽñ��䤾��#k");
    }
}


