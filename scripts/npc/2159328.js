


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Source Script

	�빫�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2159328

	���ǽ� �̸� : ��Ÿ���� ����1

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : ���󽽷��̾��� ���� �� (924020000)

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
        cm.sendOk("������ �߰��޴�!!");
        cm.dispose();
        return;
    }
}
