


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1022105
	
	���ǽ� �̸� : �տ���

	���ǽð� �ִ� �� : 

	���ǽ� ���� : ���� ������ �Ա�


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
        if (cm.getJob() == 100 && cm.getPlayerStat("LVL") < 20) {
            cm.sendYesNo("�ڳ״� �ʺ� ���谡�α�! #b���� ������#k�� �� �� �ְھ�. �? �����ڴ°�? �� ���� 20�� �Ǹ� ������ �Ǵ� �����ϰ�~");
        } else {
            cm.sendOk("�̰��� ���� ������ �Ա����.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(910220000, 1);
        cm.dispose();
    }
}


