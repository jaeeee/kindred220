


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Script)

	�׽��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1002100

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : �����÷ε� : �������� (10000)

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
        cm.sendOk("�� ���� �̰� ���� ������ �ٴϴ� �Ŷ��ϴ�. �����ڴ�ó�� ������... ������ ���� �ƹ��� �����ϴٸ� ��� ����� �ֽ����� �ʾƿ�...");
        cm.dispose();
        return;
    }
}
