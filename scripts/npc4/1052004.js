


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1052004
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��׽ý������ܰ�

	���ǽ� ���� : �����ܰ� ����


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
        cm.dispose();
	cm.openCS();
    }
}


