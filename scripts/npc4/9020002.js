var select = -1;
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
	if (cm.haveItem(4021021,1)) {
	if (cm.haveItem(4021016, 500)) {
	if (cm.haveItem(4021020, 40)) {
	cm.gainItem(4021021, -1);
	cm.gainItem(4021016, -500);
	cm.gainItem(4021020, -400);
	cm.name(1112665, 50,40,40);
	cm.sendOk("���� ���� ����");
	cm.dispose();
        } else {
                cm.sendOk("�������� �ִ°� Ȯ���Ѱ���?" );
}
	}
}
}
}
}

