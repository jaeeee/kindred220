


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - asdwdbd�� ���� �ڵ����� ������� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9010008

	���ǽ� �̸� : ��ƼƮ

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý����� (100000200)

	���ǽ� ���� : �����ø����


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
        cm.sendOk("������ ������� ���� ������! �׷��� �ʾ�?");
        cm.dispose();
        return;
    }
}
