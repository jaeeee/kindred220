


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���̹� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2151006

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� :  :  (310010010)

	���ǽ� ���� : ġ�� �����


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
        cm.sendOk("��, ��... ���⼭ �ƴ� �ݰ��׿�!");
        cm.dispose();
        return;
    }
}
