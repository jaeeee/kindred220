


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���ο��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9010013

	���ǽ� �̸� : ��Ű

	���ǽð� �ִ� �� : �̳����� : �ɼ������� �� (240010200)

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
        cm.sendOk("����");
        cm.dispose();
        return;
    }
}
