


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ����) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2152013

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� :  :  (310000000)

	���ǽ� ���� : MISSINGNO


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
        cm.sendOk("���� ǳ���� ���� ������. üŰ�� ��°͵� ����ֱ���.");
        cm.dispose();
        return;
    }
}