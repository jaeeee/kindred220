/*
 ��Ż
*/
importPackage(Packages.community);
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
        if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� �̷�� �ִ°ǰ�? ��Ƽ ���̴� ������ �� ����.");
            cm.dispose();
            return;
        }
        /*if (!cm.allExpCheckTimeValue("Zakum_BattleStartTime", 3600 * 6) && isChaos(cm) == 0) {
            cm.sendOk("������ 6�ð����� �ѹ����� ������ �� �ֽ��ϴ�. ��������� ���� ������ �� ���� ����� �ֽ��ϴ�.");
            cm.dispose();
            return;
        }
        if (!cm.allExpCheckTimeValue("ZakumHorntail_BattleStartTime", 3600 * 12) && isChaos(cm) == 1) {
            cm.sendOk("ī���������� 12�ð����� �ѹ����� ������ �� �ֽ��ϴ�. ��������� ī�������� ������ �� ���� ����� �ֽ��ϴ�.");
            cm.dispose();
            return;
        }*/
        cm.sendYesNo("������ �������� �̵��ϰ� ������? ���� �ʿ� �ִ� ��� ��������� �ѹ��� �̵��ȴٳ�.");
    } else if (status == 1) {
     /*  if (!cm.getClient().getChannelServer().getMapFactory().getMap(cm.getPlayer().getMapId() - 100).isExpiredMapTimer() && !cm.getPlayer().hasGmLevel(6)) {
            cm.sendOk("������ �̹� ���۵Ǿ� ������ ������ �� ����.");
            cm.dispose();
            return;
        }
        if (cm.getClient().getChannelServer().getMapFactory().getMap(280030000 + isChaos(cm)).getCharactersSize() > 0) {
            cm.sendOk("�̹� �ٸ� �����밡 �����Ͽ���. �̾������� ������ �ٽ� ���ְ�.");
            cm.dispose();
            return;
        }*/
        cm.resetMap(280030100);
        cm.allPartyWarp(280030100, true);
        cm.startEventTimer(2300000);
        cm.dispose();
    }
}

function isChaos(cm) {
    return cm.getClient().getChannel() % 2;
}
