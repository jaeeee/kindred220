function enter(pi) {
    for(var i = 0; i < 6; i++) {
	if (pi.getPlayerCount(105050101 + i) == 0) {
	    pi.setTimer(105050100,105050101 + i,60 * 60);
	    if (pi.getParty()) {
		pi.warpParty(105050101 + i);
	    } else {
		pi.warp(105050101 + i,0);
	    }
	    return;
	} else {
	    pi.playerMessage("���� ��� �̴� ������ ���ǰ� �ֽ��ϴ�.");
	}
    }
}