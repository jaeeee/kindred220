


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	FMK���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2042002

	���ǽ� �̸� : ���ǰָ�

	���ǽð� �ִ� �� : ���� ī�Ϲ� : ī�Ϲ� �ʵ�&lt;����> (980090000)

	���ǽ� ���� : ���� ī�Ϲ�


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
        cm.sendOk("�ʿ� �� ģ�� �߿� ���� �� ������ �ñ����� �ʳ�?");
        cm.dispose();
        return;
    }
}
