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
	    var chat = "#r���� ���� ����, �� ���� �Դϴ�.#b\r\n"
	    chat += "#b#L1# ����";
	    chat += "#b#L2# �����";
	    chat += "#b#L3# �����";
	    chat += "#b#L4# �Ǽ��縮";

	    cm.sendSimple(chat);



		
             } else if (selection == 1) {
		cm.dispose();
		cm.openShop (1112400);
             } else if (selection == 2) {
		cm.openShop(1112401);
		cm.dispose();
             } else if (selection == 3) {
		cm.openShop(1112402);
		cm.dispose();
             } else if (selection == 4) {
		cm.openShop(1112403);
		cm.dispose();
		}
	}
}