


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	��BRAVO�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2082011

	���ǽ� �̸� : ȣ��

	���ǽð� �ִ� �� : �׿���Ƽ&lt;2230��> : ������Ÿ���κ� (240070500)

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
        cm.sendOk("���Ǵ�Ƽ ȣ���� ����");
        cm.dispose();
        return;
    }
}