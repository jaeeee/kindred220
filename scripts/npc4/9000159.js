
/* ������ - �������� */


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
        if (cm.getPlayer().getLevel() < 10) {
            cm.getPlayer().message(5, "#b<���� ����>#k�� ���� 10�̻� ���� �����մϴ�.");
            return false;
        }
        cm.sendYesNo("�ٸ� ������� �������� �ŷ��� �� �ִ� #c<���� ����>#���� �̵��Ѵ�.");
    } else if (status == 1) {
        cm.saveLocation("FREE_MARKET_SHOP");
        cm.warp(910000000, 0);
        cm.dispose();
    }
}


