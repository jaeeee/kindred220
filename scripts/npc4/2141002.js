


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Aeos Development Source Script

	5�η� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2141002

	���ǽ� �̸� : ������ ����������

	���ǽð� �ִ� �� : �ŵ��� Ȳȥ

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendYesNo("�����븦 ��ġ�� ������ �����ðڽ��ϱ�?");
    } else if (status == 1) {
    	cm.warp(100000000);
        cm.dispose();
    }
    
}
