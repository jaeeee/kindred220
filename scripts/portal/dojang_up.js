function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("���� ���Ͱ� �����ֽ��ϴ�.");
    } else {
	pi.dojo_getUp();
	pi.getMap().setReactorState();
    }
}