


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	��Ӵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9110007

	���ǽ� �̸� : �κ�

	���ǽð� �ִ� �� :  :  (800000000)

	���ǽ� ���� : ��� �丮��


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
        cm.sendOk("���� ������ ������ ��ȭ �ְ�!");
        cm.dispose();
        return;
    }
}
