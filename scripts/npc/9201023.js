


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9201023
	
	���ǽ� �̸� : ���

	���ǽð� �ִ� �� : ���� ����

	���ǽ� ���� : ���������� �̵�


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
        cm.sendOk("�׷�����? ���� �ٸ� �Ϸ� �ٻڽŰ�����. ����� ������ �� �ѹ����� �鷯������~");
        cm.dispose();
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendYesNo("���� �Ƹ��ٿ� ��Ⱑ ��������~ ����� ������ ����~ #b����������#k�� ���� ����Ͻðھ��?");
    } else if (status == 1) {
        cm.saveLocation("WEDDING");
        cm.warp(680000000);
        cm.dispose();
    }
}


