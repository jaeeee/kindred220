


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	õ�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000269

	���ǽ� �̸� : ��������! ������

	���ǽð� �ִ� �� : �̺�Ʈ : �̴ϰ��� �����̼� (910043000)

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
        cm.sendOk("��������! ������ Ƽ���� �ִٸ� �������� �̿��ϽǼ� �־��.");
        cm.dispose();
        return;
    }
}
