/*



*/

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
            	
	       var leaf = cm.itemQuantity(4001126);
	       var chat = "�ȳ��ϼ��� #h0#��! �޼ҷ� Ȯ���⸦ �����Ͻðڽ��ϱ�?.\r\n";
	       chat += "\r\n#L400##i5072000##d���� Ȯ����(#r100#k��)����-����#r1,000,000 #d�޼�";
	       chat += "\r\n#L401##i5076000##d������ Ȯ����(#r100#k��)����-����#r1,000,000 #d�޼�";
	       cm.sendSimple(chat);


	    }  if (selection == 400) {
		if (cm.getMeso() >= 1000000) {
		    if (cm.canHold(5072000)) {
		        cm.sendOk("�������� �����ϼ̽��ϴ�.");
			cm.gainItem(5072000, 100);
			cm.gainMeso(-1000000);
			cm.dispose();
		    } else {
		        cm.sendOk("ĳ��ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�޼Ұ� �����մϴ�.");
		    cm.dispose();

}


	    }  if (selection == 401) {
		if (cm.getMeso() >= 1000000) {
		    if (cm.canHold(5076000)) {
		        cm.sendOk("�������� �����ϼ̽��ϴ�.");
			cm.gainItem(5076000, 100);
			cm.gainMeso(-1000000);
			cm.dispose();
		    } else {
		        cm.sendOk("ĳ��ĭ�� �� ������ �����ϴ�.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("�޼Ұ� �����մϴ�.");
		    cm.dispose();

}
	 
		}
	}
}

