


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���ο��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2131001

	���ǽ� �̸� : �丣��

	���ǽð� �ִ� �� :  :  (300000000)

	���ǽ� ���� : ������ ��ǥ


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
        cm.sendOk("������ ������ ����");
        cm.dispose();
        return;
    }
}