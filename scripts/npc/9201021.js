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
	cm.sendYesNo("���� �ִ� ������ ���ư��ðڽ��ϱ�?");
	}
else if (status == 1) {
	cm.warp(511000000);
	cm.dispose();
	}
else {
	cm.dispose();
	}
}