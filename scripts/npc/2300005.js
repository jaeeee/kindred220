


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	��Ƽ���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000052

	���ǽ� �̸� : �밨�� ���

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ������ ���� (109090100)

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
	if (cm.getPlayer().getMapId() == 100000000) {
        cm.dispose();
        cm.openNpc(2040024);
	return;

	} else if (cm.getPlayer().getMapId() == 109090101) {
	    cm.gainItem(4000313, 10);
	    cm.warp(100000000);
	    cm.dispose();
	}
    }
}
