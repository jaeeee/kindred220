function enter(pi) {
    if (!pi.getPlayer().getMap().isExpiredMapTimer() && !pi.getPlayer().hasGmLevel(6)) {
	pi.playerMessage(5, "������ ������ ���ܿ� ������ �� �����ϴ�.");
	return false;
    }
    if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "���� ���� �����ϰ� ���� �ʾ� ������ ���� �� �����ϴ�.");
	return false;
    }
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}