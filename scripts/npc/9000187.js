


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	llIIlBRAVOlII �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000187

	���ǽ� �̸� : 10���� ��ǳ����

	���ǽð� �ִ� �� : 10�ֳ� �̺�Ʈ : 10�ֳ� ������ ��ũ (910026600)

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
        cm.sendOk("���� 10�ֳ� ����");
        cm.dispose();
        return;
    }
}
