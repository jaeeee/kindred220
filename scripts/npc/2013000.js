


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2013000

	���ǽ� �̸� : ���� ��Ű

	���ǽð� �ִ� �� : ��Ƽ����Ʈ ���� : ���ǰָ��� �Խ�Ʈ �Ͽ콺 (910002000)

	���ǽ� ���� : ������ ����


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
        cm.sendOk("�� ������");
        cm.dispose();
        return;
    }
}