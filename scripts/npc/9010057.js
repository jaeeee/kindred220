


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9010057

	���ǽ� �̸� : �ٹ�

	���ǽð� �ִ� �� : ���丮�Ʒε� : �����Ͼ� (180000001)

	���ǽ� ���� : ������ �����


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
        cm.sendOk("����� ���� �Ͼ� ���� �� �ھ���");
        cm.dispose();
        return;
    }
}
