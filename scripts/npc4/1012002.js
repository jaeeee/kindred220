


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - asdwdbd�� ���� �ڵ����� ������� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012002

	���ǽ� �̸� : ��Ž�

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý� ���� (100000100)

	���ǽ� ���� : ������ ������


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
        cm.warp(100000003, 0);
        cm.dispose();
        return;
    }
}
