// Entrance to Verne Mine

function enter(pi) {
	if (!pi.getPlayer().haveItem(1003134, 1, true, true)) {
		pi.getPlayer().message(5, "������ ¡ǥ�� ���̴� �� �� �����ϴ�.");
		return false;
	} else {
		pi.warp(310050000, 1);
		return true;
	}
}