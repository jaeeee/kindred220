


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - asdwdbd�� ���� �ڵ����� ������� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012002

	���ǽ� �̸� : ��Ž�

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý� ���� (100000100)

	���ǽ� ���� : ������ ������


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
	cm.sendSimple("�̽��� ����⸦ �޼ҷ� ��ȯ���ְڳ�\r\n#b#L2#��ȯ�� �ϰڽ��ϴ�.");
    } else if (status == 1) {
	if (selection == 0) {
		cm.sendStorage();
		cm.dispose();
	} else if (selection == 1) {
		cm.sendCompose();
		cm.dispose();
	} else if (selection == 2) {
		cm.sendSimple("�̽��� ����⸦ �޼ҷ� ��ȯ���ְڳ�\r\n#b#L0##i4001187#(��ġ) �� �޼ҷ� ��ȯ (������ 5���޼�)\r\n#L1##i4001188#(��ġ) �� �޼ҷ� ��ȯ (������ 7���޼�)\r\n#L2##i4001189#(��ġ) �� �޼ҷ� ��ȯ (������ 10���޼�)\r\n#k");
	}
    } else if (status == 2) {
		selected = selection;
			cm.sendGetText("����� ������ �Ȱٳ�?");
    } else if (status == 3) {
		if (selected == 0) {
			if (cm.haveItem(4001187,cm.getText())) {
				cm.gainItem(4001187,-cm.getText());
				cm.gainMeso(50000 * cm.getText());
				cm.sendOk("������ ����ϰ� ���ٳ�");
			} else {
				cm.sendOk("������ ��⸦ġ�� ����");
			}
		} else if (selected == 1) {
			if (cm.haveItem(4001188,cm.getText())) {
				cm.gainItem(4001188,-cm.getText());
				cm.gainMeso(70000 * cm.getText());
				cm.sendOk("������ ����ϰ� ���ٳ�");
			} else {
				cm.sendOk("������ ��⸦ġ�� ����");
			}
		} else if (selected == 2) {
			if (cm.haveItem(4001189,cm.getText())) {
				cm.gainItem(4001189,-cm.getText());
				cm.gainMeso(100000 * cm.getText());
				cm.sendOk("������ ����ϰ� ���ٳ�");
			} else {
				cm.sendOk("������ ��⸦ġ�� ����");
			}
		}
		cm.dispose();
    }
}
