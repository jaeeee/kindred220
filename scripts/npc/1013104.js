


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���̳� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1013104

	���ǽ� �̸� : �ް���

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
        cm.sendOk("��ϸ��� ���� ���̳� �� �� �ٳడ��");
        cm.dispose();
        return;
    }
}
