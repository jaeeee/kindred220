


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Human Online Development Source Script)

	�㸮���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 3000012

	���ǽ� �̸� : ���� ����Ʈ

	���ǽð� �ִ� �� :  :  (400000001)

	���ǽ� ���� : ������ ���� �̵�


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
        cm.sendOk("");
        cm.dispose();
        return;
    }
}
