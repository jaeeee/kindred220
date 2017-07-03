var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("원래 있던 곳으로 돌아가시겠습니까?");
	}
else if (status == 1) {
	cm.warp(511000000);
	cm.dispose();
	}
else {
	cm.dispose();
	}
}