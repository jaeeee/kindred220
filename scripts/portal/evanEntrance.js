function enter(pi) {
	if (pi.getPlayer().getJob() != 2001) {
    pi.warp(100030400, "east00");
    return true;
	} else {
	pi.dropMessage("Ʃ�丮���� �Ϸ��ؾ� ���� �� �ֽ��ϴ�.");
	return false;
	}
}  