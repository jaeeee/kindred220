


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Source Script

	�ڿ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1055000

	���ǽ� �̸� : ��ä

	���ǽð� �ִ� �� : ���丮�Ʒε� : ��ȭ�� ���� (103050300)

	���ǽ� ���� : ����/�� ����


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
        cm.sendOk("������");
        cm.dispose();
        return;
    }
}
