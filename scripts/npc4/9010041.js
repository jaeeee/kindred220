


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	G0M���̳� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9010041

	���ǽ� �̸� : Ms. ��ī��Ʈ

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ���������Ա� (910000000)

	���ǽ� ���� : �Ƹ�����Ʈ ����


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
        cm.sendOk("���������� 1���� ������ 2�� ����� ���尡���մϴ�");
        cm.dispose();
        return;
    }
}