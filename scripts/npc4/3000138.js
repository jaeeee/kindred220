/*

������ ����, ����ũ��, ���̳���Ʈ ����� ��ȯ ��ũ��Ʈ.

 

��������ǥ 20�� -> ������ ���� ��ȯ

��������ǥ 50�� -> ����Ŀ�� ��ȯ

��������ǥ 120�� -> ���̳���Ʈ ����� ��ȯ

 

* �̰� �����Ͻø� ���� �� �پ��� �������� ��ȯ�� �� �ֽ��ϴ� '��' 



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
            var chat = "��ǳ���� ���� ���� ��ȯ���ְڴ�..#b\r\n";
	    chat += "\r\n#L1##r��ǳ��#k���� �޼� ��ȭ ��ȯ�ϱ�.";
	    cm.sendSimple(chat);

} if (selection == 1) {
	       var chat = "#e����� ��ȯ�� ��ȭ�� �Ϲݻ����� �ȸ� �ش� �޼ҷ� �ٲܼ��մ�. #n\r\n";
	       chat += "\r\n#L400#[20��] 100�� �޼� ��ȭ";
	       chat += "\r\n#L401#[150��]1000�� �޼� ��ȭ";
	       chat += "\r\n#L402#[450��]3000�� �޼� ��ȭ";
               chat += "\r\n#L403#[750��]5000�� �޼� ��ȭ";
               chat += "\r\n#L404#[1500��]1�� �޼� ��ȭ";
               chat += "\r\n#L405#[2850��]2�� �޼� ��ȭ";
	       cm.sendSimple(chat);


	    }  if (selection == 400) {
		if (cm.haveItem(4001126,20)) {
		    if (cm.canHold(4001550)) {
			cm.gainItem(4001126, -20);
			cm.gainItem(4001550, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}

	    }  if (selection == 401) {
		if (cm.haveItem(4001126,150)) {
		    if (cm.canHold(4001208)) {
			cm.gainItem(4001126, -150);
			cm.gainItem(4001208, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}

	    }  if (selection == 402) {
		if (cm.haveItem(4001126,450)) {
		    if (cm.canHold(4001209)) {
			cm.gainItem(4001126, -450);
			cm.gainItem(4001209, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}

            }  if (selection == 403) {
		if (cm.haveItem(4001210,750)) {
		    if (cm.canHold(1052461)) {
			cm.gainItem(4001126, -750);
			cm.gainItem(4001210, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}

            }  if (selection == 404) {
		if (cm.haveItem(4001126,1500)) {
		    if (cm.canHold(4001211)) {
			cm.gainItem(4001126, -1500);
			cm.gainItem(4001211, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}

	    }  if (selection == 405) {
		if (cm.haveItem(4001126,2850)) {
		    if (cm.canHold(4001212)) {
			cm.gainItem(4001126, -2850);
			cm.gainItem(4001212, 1);
		        cm.sendOk("��ȯ�Ϸ�");
			cm.dispose();
		    } else {
		        cm.sendOk("��Ÿâ�� �� ������ �ִ��� �ٽ� �ѹ� Ȯ���� �ְԳ�!");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("��ǳ���� �����մϴ�.");
		    cm.dispose();

}
		}
	}
}



