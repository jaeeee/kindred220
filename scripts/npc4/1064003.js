


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	GM���̳� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064003

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��Ÿ�� : �Ŵ��� �Ѹ� (105200000)

	���ǽ� ���� : ������ ����


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
        cm.sendOk("�����ϸ� ���� ������ �ǸŰ� �����Ǿ����ϴ�. �����ڿ��� �������ֽʽÿ�.");
        cm.dispose();
        return;
    }
}
