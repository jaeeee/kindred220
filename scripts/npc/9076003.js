


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9076003

	���ǽ� �̸� : ���ǰֶ�

	���ǽð� �ִ� �� : ù ��° ���� : ���� (933010000)

	���ǽ� ���� : EXP �ν�Ʈ ����


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
        cm.sendOk("�Ŀ��� �ϼ��� �ν�Ʈ�������");
        cm.dispose();
        return;
    }
}
