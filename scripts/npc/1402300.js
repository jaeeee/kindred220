


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Source Script

	�빫�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1402300

	���ǽ� �̸� : �޸�������

	���ǽð� �ִ� �� : ������ ������ : ��Ÿ�� ���� (272000310)

	���ǽ� ���� : ����


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
        cm.sendOk("������ ���� ��Ű���Ӵ�");
        cm.dispose();
        return;
    }
}
