function enter(pi) {
    if (!pi.haveMonster(9300216)) {
	pi.playerMessage("아직 몬스터가 남아있습니다.");
    } else {
	pi.dojo_getUp();
	pi.getMap().setReactorState();
    }
}