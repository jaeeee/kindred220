


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	â���ǰ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9040002

	���ǽ� �̸� : ��

	���ǽð� �ִ� �� : �����߱��� : �����߱���ķ�� (102040200)

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
        cm.sendOk("�������� ����� �̷��� ��������\r\n#b��ŵ� �߱������ �Ǿ� ���ðڽ��ϱ�?");
        cm.dispose();
        return;
    }
}
