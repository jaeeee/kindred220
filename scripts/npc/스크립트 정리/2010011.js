


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 2010011
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��������

	���ǽ� ���� : ��庻�η� �̵�


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
        cm.sendYesNo("�ȳ��ϼ���. ��� ���� ������ ���� �����Դϴ�. ���� ���Ǹ� ����, ������ ������� �̵��� ���� �ֽ��ϴ�. ��� ���� ���� ó���� ���� ������ �������� �̵��Ͻðھ��?");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") < 30) {
	    cm.sendOk("�˼������� ���� 30 �̻��� �е鸸 �̿��Ͻ� �� �ֽ��ϴ�.");
            cm.dispose();
            return;
        }
        cm.setSavedMapId(cm.getMapId());
        cm.warp(200000301, 0);
        cm.dispose();
    }
}


