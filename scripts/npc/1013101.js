


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	�пջ���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1013101

	���ǽ� �̸� : ��Ÿ

	���ǽð� �ִ� �� : ��Ÿ�� �� : �ո��� (100030102)

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
        cm.sendOk("�츮������ ��� �԰�����?");
        cm.dispose();
        return;
    }
}
