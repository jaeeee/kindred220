


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	FMK���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2182003

	���ǽ� �̸� : ���ǿ�

	���ǽð� �ִ� �� : ���丮�Ʒε� : �����Ͼ� (180000001)

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
        cm.sendOk("���⼭ ������ �;�... ������ �ʹٰ�..");
        cm.dispose();
        return;
    }
}
