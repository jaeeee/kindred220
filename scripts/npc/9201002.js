


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	��ũ�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9201002

	���ǽ� �̸� : ��������4��

	���ǽð� �ִ� �� :  :  (680000000)

	���ǽ� ���� : �źδ�


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
        cm.sendOk("���� ���� �ʹ� ������");
        cm.dispose();
        return;
    }
}
