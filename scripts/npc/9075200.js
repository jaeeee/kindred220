var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
	cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
	cm.sendYesNo("�̺��� �ý����� �����Ͻðڽ��ϱ�?");
    } else if (status == 1) {
	cm.sendOk("�̺��� �ý����� �����մϴ�.");
    } else if (status == 2) {
	cm.warp(957000000, "sp");
	cm.dispose();
    }
}