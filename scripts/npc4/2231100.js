


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	dfddf6 �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2231100

	���ǽ� �̸� : Ŭ����

	���ǽð� �ִ� �� : ũ��Ƽ�ƽ� : ���� (241010100)

	���ǽ� ���� : ��ȭ����


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
        cm.sendOk("�ȳ� �� Ŭ���������");
        cm.dispose();
        return;
    }
}
