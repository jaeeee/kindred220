


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�̷���¶��� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2491000

	���ǽ� �̸� : �ȳ���

	���ǽð� �ִ� �� : ����ġ : ������ �ٴ� (914200000)

	���ǽ� ���� : MISSINGNO


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
        cm.sendOk("���������� <��������>�� �����ϰ�, �̳������ؼ� ���ڸ� Ŭ���ϸ� ���ð� �ȴٳ�...");
        cm.dispose();
        return;
    }
}
