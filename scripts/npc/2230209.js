


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2230209

	���ǽ� �̸� : ��鵨

	���ǽð� �ִ� �� : ũ��Ƽ�ƽ� �ձ� : �ձ� Ʈ���� (924040000)

	���ǽ� ���� : ���� ���� ��û


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
        cm.sendOk("�� �ù߷þ�;");
        cm.dispose();
        return;
    }
}
