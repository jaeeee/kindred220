


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Hina Online Development Source Script)

	�ɳ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1043001

	���ǽ� �̸� : ���� ����

	���ǽð� �ִ� �� : �γ��� �� : 5�ܰ� (910130102)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if (!cm.canHold(2430368)) {
		cm.sendOk("�κ������� �����ؿ�.");
		cm.dispose();
		return;
	}
		cm.gainItem(2430026, 1);
	cm.warp(2000100);
	cm.dispose();
    }
}
