function enter(pi) {
    if (pi.getQuestStatus(21701) == 1) {
	pi.warp(914010000,0);
    } else if (pi.getQuestStatus(21702) == 1) {
	pi.warp(914010100,0);
    } else if (pi.getQuestStatus(21703) == 1) {
	pi.warp(914010200,0);
    } else {
	pi.playerMessage("Ǫ������ ������ ���� ���� ��� �����忡 ������ �� �ִ�.");
    }
}