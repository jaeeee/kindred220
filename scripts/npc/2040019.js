


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2040019

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ���긮�� : ���긮�������ܰ� (220000003)

	���ǽ� ���� : ���� �ǻ�


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
        cm.sendOk("�����̾�");
        cm.dispose();
        return;
    }
}