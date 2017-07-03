function enter(pi) {
    if (!pi.getPlayer().getMap().isExpiredMapTimer() && !pi.getPlayer().hasGmLevel(6)) {
	pi.playerMessage(5, "지금은 자쿰의 제단에 입장할 수 없습니다.");
	return false;
    }
    if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "불의 눈을 소지하고 있지 않아 자쿰을 만날 수 없습니다.");
	return false;
    }
    pi.playPortalSE();
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}