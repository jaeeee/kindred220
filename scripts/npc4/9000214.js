


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���Ǹ��Ŵ��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000214

	���ǽ� �̸� : �̴Ϲ���

	���ǽð� �ִ� �� : �Ǹ��ý� : �Ǹ��ý� (100000000)

	���ǽ� ���� : �̰��� â�������


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
        cm.sendOk("�̴Ϲ��� ���� 2�� ã�ƺ˰ڽ��ϴ�. ���ݸ� ��ٷ��ּ���~#e#r��#k#n");
        cm.dispose();
        return;
    }
}
