


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	asdwdbd �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1012008

	���ǽ� �̸� : ī����

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý����Ӱ��� (100000203)

	���ǽ� ���� : �̴ϰ��� ������


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
        cm.sendOk("�ʿ��� �̴ϰ����� �־�?");
        cm.dispose();
        return;
    }
}
