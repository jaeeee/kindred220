function enter(pi) {
    if (pi.getPlayer().getLevel() < 70) {
	pi.getPlayer().dropMessage(5, "���� ������ ���̴� ���̴�.");
	return false;
    } else if (pi.getPlayerCount(310030210) == 0) {
        pi.TimeMoveMap(310030210, 310060120, 18);
        return true;
    } else {
	pi.getPlayer().dropMessage(5, "�̹� ���������Ϳ� �������� �ִ� �� ����.");
	return false;
    }
}