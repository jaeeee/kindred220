


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�ϸ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1540436

	���ǽ� �̸� : �ù�

	���ǽð� �ִ� �� : ���丮�Ʒε� : ��ȭ�� ���ϰ��� (103050400)

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
        cm.sendOk("Human Online �巩ŷ�� ���� 1���ϱ�?");
        cm.dispose();
        return;
    }
}
