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
	cm.sendSimple("�ȵ��ȵ� �ż��� ����� �ٻ����\r\n#r#k#b\r\n\r\n#b#L2##i4001187##z4001187#   �Ѹ����� 10����Ʈ�ٰ�!#I#k");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
	         cm.sendGetText("����� �Ȳ�����");
	}
    } else if (status == 2) {
	
			if (cm.haveItem(4001187, cm.getText())) {
                                cm.getPlayer().addFPT(cm.getText() * 10);
				cm.gainItem(4001187, -cm.getText());
				cm.sendOk("�� ��ΰԻ��ذŴ���.");
			} else {
				cm.sendOk("�̾Ļ������� ��� ��⸦ġ������! ����� ����ΰ���������!");
			}


    }
}
