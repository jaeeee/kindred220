


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2230212

	���ǽ� �̸� : �ɸ�ī����Ÿ

	���ǽð� �ִ� �� : ũ��Ƽ�ƽ� : �������� ������ (241010110)

	���ǽ� ���� : �����̵� ��Ż


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
        cm.sendOk("�̰� �̿�����������");
        cm.dispose();
        return;
    }
}
