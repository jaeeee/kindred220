


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	asdwdbd �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000017

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý����� (100000200)

	���ǽ� ���� : ���ݸ� ��� ����


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
        cm.sendOk("�ľ� ����! �ľ� ����!");
        cm.dispose();
        return;
    }
}
