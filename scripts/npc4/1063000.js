


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1063000

	���ǽ� �̸� : ��ȫ�� �� ������

	���ǽð� �ִ� �� : �ѽ� ��Ÿ�� : �ѽ� ��Ÿ�� ���� (101000100)

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
	cm.gainItem(4031025, 1);
	cm.warp(100000000);
        cm.dispose();
        cm.sendOk("#r�ѽ�#k���� #e��Ź���޾�#n ���� ã�����Ա���...? ���� �帮�ھ��.");
        return;
    }
}
