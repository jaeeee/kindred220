


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000006

	���ǽ� �̸� : ������

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : �̺�Ʈ�����°� (109050001)

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
        cm.sendOk("#e#rOX�����#k ����#n�� #e#r�ǿ�Ʈ��#n#k�� #e#b�̿�#n#k�� �ּ���.");
        cm.dispose();
        return;
    }
}
