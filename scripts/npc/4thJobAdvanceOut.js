


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 4thJobAdvanceOut
	
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
        if (cm.getEventInstance() != null) {
            cm.sendYesNo("���� �̰����� �����ðڽ��ϱ�? �̰����� ������ ó������ �ٽ� �����ؾ� �մϴ�.");
        } else {
            cm.warp(100000000);
            cm.dispose();
        }
    } else if (status == 1) {
        var eim = cm.getEventInstance();
        eim.removePlayer(cm.getPlayer());
        cm.warp(924000002);
        cm.dispose();
    }
}


