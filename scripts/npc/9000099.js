


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	�������� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000099

	���ǽ� �̸� : �����

	���ǽð� �ִ� �� : Ȳ�ݻ�� : ������ ��� (252020000)

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
        cm.sendOk("�Ƶ� �� ���ȸ��� ����");
        cm.dispose();
        return;
    }
}
