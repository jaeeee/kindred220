


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	adsif �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000110

	���ǽ� �̸� : ��ǳ�� ���

	���ǽð� �ִ� �� : 9�ֳ� �̺�Ʈ : ��ǳ���� �� �ⱸ (910027100)

	���ǽ� ���� : ���� �ȳ���


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
        cm.sendOk("9000110");
        cm.dispose();
        return;
    }
}
