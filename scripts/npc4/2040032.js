


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	GM���̳� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2040032

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ���긮�� : ��� �� ��å�� (220000006)

	���ǽ� ���� : ���û�


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
        cm.sendOk("�����");
        cm.dispose();
        return;
    }
}
