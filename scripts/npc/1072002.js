


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���ò� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000008

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : Ŀ�׽�Ƽ : Ŀ�׽�Ƽ (103000000)

	���ǽ� ���� : �ڹ��� ���� ����


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
        cm.sendOk("Can I eat ta");
        cm.dispose();
        return;
    }
}
