/* ���̽���Ÿ�� ����� ȯ���� �Դϴ�.
   �� ��ũ��Ʈ�� ���۱��� ���̽��Ŵ���(class_adm@nate.com) �����ֽ��ϴ�.
*/

var status = -1;
var selected = 0;

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
	cm.sendSimple("�ȵ��ȵ� �ż��� ����� �ٻ�ϴٿ�~\r\n#r#k#b\r\n\r\n#b#L2##i4001188##z4001188#   �Ѹ����� 20����Ʈ�ٰ�!#I#k");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
	         cm.sendGetText("����� �Ľðڽ��ϱ�?");
	}
    } else if (status == 2) {
	
			if (cm.haveItem(4001188, cm.getText())) {
                                cm.getPlayer().addFPT(cm.getText() * 20);
				cm.gainItem(4001188, -cm.getText());
				cm.sendOk("�׷� ��ſ� �Ϸ�Ǽ���~");
                                cm.dispose();
			} else {
				cm.sendOk("���̰�����! �Ӹ�ī������ �����������־ ���ϰǺ�������! ����ΰ������Ӹ�!");
                                cm.dispose();
			}


    }
}
