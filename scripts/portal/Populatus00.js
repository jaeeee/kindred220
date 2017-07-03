function enter(pi) {
    if (!pi.checkTimeValue("Papulatus_BattleStartTime", 3600 * 4)) {
        pi.getPlayer().message(5, "�ð�ž�� �ٿ����� 4�ð����� �ѹ����� ������ �� �ֽ��ϴ�.");
        return false;
    }
    if (!pi.getPlayer().getMap().isExpiredMapTimer()) {
	pi.playerMessage(5, "������ �ð�ž�� �ٿ��� ������ �� �����ϴ�.");
	return false;
    }
    if (!pi.haveItem(4031179)) {
	pi.playerMessage(5, "���� �տ��� ������ �����ϰ� ���� �ʾ� ��Ǯ�������� ���� �� �����ϴ�.");
	return false;
    }
    pi.setTimeValueCurrent("Papulatus_BattleStartTime");
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 1, "sp");
    return true;
}