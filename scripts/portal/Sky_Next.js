function enter(pi) {
    if (pi.getMonsterCount(pi.getMapId()) == 0) {
	pi.warpParty(pi.getMapId() + 100);
    } else {
	pi.showinfoMessage("���Ͱ� " + pi.getMonsterCount(pi.getMapId()) + "���� ���ҽ��ϴ�.");
    }
}