


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1033221
	
	���ǽ� �̸� : �ﷹ�� (������ �ﷹ��)

	���ǽð� �ִ� �� : 109040004

	���ǽ� ���� : ������


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
        //cm.sendOk("�̺�Ʈ �������Դϴ�. �˼��ؿ�!");
        ////cm.dispose();
        //return;
        cm.sendYesNo("�����Ͻô� �ǰ���? ���⼭ ���� �����ð� ��������?");
    } else if (status == 1) {
        cm.warp(100000000);
        cm.dispose();
    }
}


