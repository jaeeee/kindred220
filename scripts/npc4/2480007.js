


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���Ǹ��Ŵ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2480007

	���ǽ� �̸� : ��Ÿ

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ���� ���� ��� (910141101)

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
	if (!cm.getPlayer().getMap().is����()) {
		cm.sendNextS("�ǽ��� ����̳�, �켱 ������ ��� óġ�ؾ߰ھ�",2);
		cm.dispose();
	} else {
		if (!cm.canHold(1302007)) {
			cm.sendOk("�κ��丮�� ���������� ������ �ٽ� ��ȭ�� �ɾ� �ּ���.");
			cm.dispose();
			return;
		}
		var itemid = cm.����();
		cm.warp(100000000);
		cm.sendNext("���� �����ֽŰ� �������� ����帳�ϴ�.\r\n��������� #i" + itemid + "##b#t" + itemid + "##k�� �帮�ڽ��ϴ�..");
		cm.dispose();
	}
    }
}
