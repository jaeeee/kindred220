


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 1012119
	
	���ǽ� �̸� : �տ���

	���ǽð� �ִ� �� : 

	���ǽ� ���� : �ü� ������ �Ա�


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
        if (cm.getJob() == 300 && cm.getPlayerStat("LVL") < 20) {
            cm.sendYesNo("�ڳ״� �ʺ� ���谡�α�! #b�ü� ������#k�� �� �� �ְھ�. �? �����ڴ°�? �� ���� 20�� �Ǹ� ������ �Ǵ� �����ϰ�~");
        } else {
            cm.sendOk("�̰��� �ü� ������ �Ա����.");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.warp(910060000, "start");
        cm.dispose();
    }
}


