
var count;

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
	var sel = 0;
	       var leaf = cm.itemQuantity(4310034);
	       var quan = ((cm.itemQuantity(4310034) - (cm.itemQuantity(4310034) % 80)) / 80);
	       var chat = "�ȳ��ϼ��� #h0#��! �ξ�ĳ���ۻ��ڸ� �����Ҽ��ִ� �Ŀ����� �����Դϴ�~.\r\n";
	       chat += "���� #h0#���� ����Ƽ�� ���� ������ #r#e"+ leaf +" #n#k�� �Դϴ�.#b"
	       chat += "\r\n#L1##i4310034##k 200���� #b#i2430675##z2430675##k 3�� ��ȯ"; 
	       cm.sendSimple(chat);
	 if (status == 1) {
		cm.gainItem(4310034,1);
		cm.dispose();
	}


	    }  if (selection == 9999) {
		    cm.dispose();

	    }  if (selection == 1) {
		if (cm.haveItem(4310034, 200)) {
		    if (cm.canHold(4310034)) {
		        cm.sendOk("����Ƽ���������� Ž���� ���� �����Ͽ����ϴ�.");

			cm.gainItem(4310034, -200);
			cm.gainItem(2430675, 3);
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("����Ƽ�������� �����մϴ�.");
		    cm.dispose();

}


		}
	}
}



