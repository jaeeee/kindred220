


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 9070004
	
	���ǽ� �̸� : ���ù���

	���ǽð� �ִ� �� : ���� ����

	���ǽ� ���� : ��Ʋ������


*/


var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendOk("��Ʋ������ #b�볭��#k�� ������ �ִ°ǰ�? ������ ��Ⱑ �����ϴ�! ������ ������ �볭���� �̿��� �� �ִ� �Ⱓ�� �ƴ϶��. ������ �ٽ� �鷯�ְ�.");
        cm.dispose();
        
        //cm.sendYesNo("��Ʋ������ #b�볭��#k�� ������ �ִ°ǰ�? ������ ��Ⱑ �����ϴ�! �ڳ׸� ��Ʋ��������� ������ �ְڳ�. ���� ����ϰڴ°�?");
    } else if (status == 1) {
        cm.saveLocation("BATTLESQUARE");
        cm.warp(960000000, 0);
        cm.dispose();
    }
}


