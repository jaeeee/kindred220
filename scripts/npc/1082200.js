


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	llIIlBRAVOlII �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1082200

	���ǽ� �̸� : ������ ���

	���ǽð� �ִ� �� : ��Ʈ�ε� : ���������� (104020000)

	���ǽ� ���� : �̵� NPC


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
        cm.sendOk("�ȵȴ�");
        cm.dispose();
        return;
    }
}
