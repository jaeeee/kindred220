


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
        cm.sendYesNo("������ ������ �ʿ��ϽŰ���? ���� #b������ ������ ����#k���� �̵��غ��ðھ��?");
    } else if (status == 1) {
	if (cm.getPlayerStat("LVL") < 10) {
	    cm.sendOk("�˼������� ���� 10 �̻��� �е鸸 �̿��Ͻ� �� �ֽ��ϴ�.");
            cm.dispose();
            return;
        }
        cm.saveLocation("GUILD");
        cm.warp(200000301, 0);
        cm.dispose();
    }
}


