


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	FMK���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064023

	���ǽ� �̸� : �ñ׳ʽ�

	���ǽð� �ִ� �� : ���κ��콺Ʈ��Ʈ : ���㽺Ʈ (1000000)

	���ǽ� ���� : ����


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
        cm.sendOk("�غ��� �Դϴ�.");
        cm.dispose();
        return;
    }
}