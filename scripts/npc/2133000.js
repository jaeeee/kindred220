


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���͸� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2133000

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� :  :  (300030300)

	���ǽ� ���� : ���Ȱ��� ��


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
		if(cm.getMapId() != 300030300) {
        cm.sendOk("-");
        cm.dispose();

		} else {
	cm.dispose();
	cm.openNpc(2133006);
		}
        return;
    }
}
