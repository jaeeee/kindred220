


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���ѵ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000141

	���ǽ� �̸� : �ñ׳ʽ�

	���ǽð� �ִ� �� : �����ε� : ����� ���� (130000101)

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
        cm.sendOk("��ų�ڵ�� �˾Ƽ� ã�ƽ��ּ���!");
        cm.dispose();
        return;
    }
}
