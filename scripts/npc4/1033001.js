


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	��޸� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1033001

	���ǽ� �̸� : ���佺

	���ǽð� �ִ� �� : ������ �� : ���췼 (101050000)

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
        cm.sendOk("�Ӱټ�");
        cm.dispose();
        return;
    }
}
