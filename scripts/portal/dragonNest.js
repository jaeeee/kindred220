function enter(pi) {
    if (pi.haveItem(4001094,1)) {
        if (pi.getPlayerCount(240040611) == 0) {
            pi.resetMap(240040611);
            pi.warp(240040611,0);
        } else {
	    pi.showinfoMessage("�̹� �������� �ȿ� �ֽ��ϴ�.");}
    } else {
	pi.showinfoMessage("���ν��Ǹ��� ���� ������ ������ �� �����ϴ�.");
    }
}