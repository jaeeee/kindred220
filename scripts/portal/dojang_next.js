function enter(pi) {
    if (!pi.haveMonster(9300216)) {
		pi.playerMessage("���� ���Ͱ� �����ֽ��ϴ�.");
    } else {
		pi.dojoAgent_NextMap(true, false);
    }
}