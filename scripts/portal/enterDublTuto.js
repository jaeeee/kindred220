


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��)

	��Ż�� �ִ� �� : 103050100

	��Ż ���� : ��ȭ������ (2605)


*/


function enter(pi) {
    if (pi.getQuestStatus(2605) >= 1 && pi.getQuestStatus(2609) <= 1) {
	pi.warp(103050500, 0);
	pi.playPortalSE();
	return true;
    } else {
	pi.getPlayer().dropMessage(5, "���� ����־� ������ �� �����ϴ�.");
	return false;
    }
    
}
