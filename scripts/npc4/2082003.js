


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

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
        cm.warp(270000100);
        cm.dispose();
    }
}


