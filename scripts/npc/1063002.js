


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


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
        if (!cm.canHold(2430026)) {
		cm.sendOk("�κ������� �����ؿ�.");
		cm.dispose();
		return;
	}
		cm.gainItem(2430026, 2);
	cm.warp(2000100);
	cm.dispose();
    }
}


