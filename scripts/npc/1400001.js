


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	Defy �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1400001

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ũ����Ż ���� : �߾�Ȧ (150010000)

	���ǽ� ���� : ���� �� ����


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
        cm.sendOk("yes");
        cm.dispose();
        return;
    }
}
