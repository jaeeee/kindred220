


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1520030

	���ǽ� �̸� : ���̷��ɴ�

	���ǽð� �ִ� �� : �����÷ε� : ��콺�丮 (2100000)

	���ǽ� ���� : ���� ���谡


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
        cm.sendOk("�̰� �̺�Ʈ����?");
        cm.dispose();
        return;
    }
}