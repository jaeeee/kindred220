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
	    var chat = "���� ���� ���α׷��� ����� ��ǻ���Դϴ�.";
	    chat += "\r\n#L0##b�� ���Ա�#k (#Cgray#2��#k)#l";
            chat += "       #L1##b���� ���� ��#k (#Cgray#2��#k)";
	    chat += "\r\n#L2##b���� �ӽ� �귿#k (#Cgray#3��#k)#l";
	    chat += "#L3##b���� ã��#k (#Cgray#���#k)";
    	    cm.sendSimple(chat);

             } else if (selection == 0) {
		cm.dispose();
		cm.openNpc(9200001);
             } else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9220073);
             } else if (selection == 2) {
		cm.dispose();
		cm.openNpc(2470009);
             } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(9001001);
		}
	}
}
