


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�ݽ�ƶ �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9001105

	���ǽ� �̸� : �Ҿƹ��� ����

	���ǽð� �ִ� �� : ���罺Ʈ��Ʈ : �޳��� (910196002)

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
        cm.sendOk("������");
        cm.dispose();
        return;
    }
}