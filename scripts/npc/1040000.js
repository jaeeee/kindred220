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
	    var chat = "#e< ����Ʈ : ���� �� ���� >#n#k\r\n\r\n#n"
                    chat += "#b���� #i4001796##r#t4001796##b �� ���� �� ��Ҵµ� �����ڽ��ϱ�?\r\n\r\n";
	    chat += "#k#L1#��#l";
	    chat += "					#L2#�ƴϿ�\r\n";

	if (cm.getPlayer().haveItem(4001796)){
	    var chat = "#e< ����Ʈ : ���� �� ���� >#n#k\r\n\r\n#n"
	    chat += "#i4001796##r#t4001796##b 40�� �� �����̳���?\r\n\r\n";
	    chat += "#k#L3#��#l";
	}

	    cm.sendSimple(chat);



             } else if (selection == 1) {
	cm.dispose();
	 cm.allPartyWarp(100000000, true);
             } else if (selection == 2) {
              cm.sendOk("���ݸ� �� ���鳻�ּ���.");
             } else if (selection == 3) {
		if (cm.haveItem(4001796, 40)) {
		    if (cm.canHold(4001796)) {
 			cm.allPartyWarp(211042400, true);
			cm.gainItem(4001796, -0);
		                cm.sendOk("�Ƶ��񽺿��� ��ȭ�� �ɾ��ּ���.");
			cm.dispose();
		    } else {
		        cm.sendOk("���ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#i4001796##r#t4001796# ���� ������ �� ��ƿ�");
		    cm.dispose();

}
		}
	}
}

