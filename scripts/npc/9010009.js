


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	GM���̳� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9010009

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ����¶��� : ����ý� (100000000)

	���ǽ� ���� : �ù� ��޿�


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
        cm.sendOk("�ù�ý����� ���̻� ����� �ʽ��ϴ�.");
        cm.dispose();
        return;
    }
}