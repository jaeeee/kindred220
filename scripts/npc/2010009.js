
/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	�빫�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2010009

	���ǽ� �̸� : ��������

	���ǽð� �ִ� �� :  :  (680000000)

	���ǽ� ���� : ��忬�� �����


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
        cm.sendOk("�ȳ��ϼ���? #b��������#k��� �ؿ�.\r\n���� ��忬�սý����� �غ� ���Դϴ�.");
        cm.dispose();
        return;
    }
}
