


/*

	ǻ�� �¶��� �ҽ� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : �Ұ� ����� ����

	��Ż ���� : �׸����� ��


*/

var map = 240020101;

function enter(pi) {
    if (!pi.checkTimeValue("Gryphius_BattleStartTime", 3600 * 6)) {
        pi.getPlayer().message(5, "�׸����� ������ 6�ð����� �ѹ����� ������ �� �ֽ��ϴ�.");
        return false;
    }
    if (!pi.getPlayer().getMap().isExpiredMapTimer()) {
        pi.getPlayer().message(5, "������ �׸����� ���� ������ �� �����ϴ�.");
        return;
    }
    pi.setTimeValueCurrent("Gryphius_BattleStartTime");
    pi.scheduleTimeMoveMap(pi.getPlayer().getMapId(), map, 10000, true);
    pi.playPortalSE();
    
    pi.warp(map, "sp");
    return true;
}