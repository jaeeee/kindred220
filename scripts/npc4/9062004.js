


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9062004

	���ǽ� �̸� : ������ ���

	���ǽð� �ִ� �� : ���ڿ��� �� : ù��° ž (211060200)

	���ǽ� ���� : Ʃ�丮�� �ȳ�


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
        cm.sendOk("�ý� ���ڷΰ��ּ���~");
        cm.dispose();
        return;
    }
}
