


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	�������� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000076

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : Ȳ�ݻ�� : �������� ��3 (252010200)

	���ǽ� ���� : �⵵�ϴ� �ư���


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
        cm.sendOk("�߾��߾��߾�");
        cm.dispose();
        return;
    }
}
