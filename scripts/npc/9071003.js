var status = 0;

 

function start() {
    status = -1;
    action(1, 0, 0);
}

 

function action(mode, type, selection) {
    if (mode == 1) 
        status++;
    else 
        status--;
    if (status == 0) {
        if (cm.getMapId() != 951000000) {
            cm.sendYesNo("����մϴ� ����. �׻� ���ο� ��ſ��� ������ ���ǰָ��� ���� ��ũ�� �̵��Ͻðڽ��ϱ�?");
        } else {
            cm.sendYesNo("�ȳ��ϼ���. �������� ���� �׻� �ּ��� ���ϰ� �ִ� ������ũ ��Ʋ�Դϴ�. ������ ���ư��ðڽ��ϱ�?");
        }
    } else if (status == 1) {
        if (cm.getMapId() != 951000000) {
            cm.saveLocation("MONSTERPARK");
            cm.warp(951000000,0);
	    cm.dispose();
        } else {
            cm.warp(cm.getSavedLocation("MONSTERPARK"),0);
            cm.clearSavedLocation("MONSTERPARK");
	    cm.dispose();
        }
    }
}
