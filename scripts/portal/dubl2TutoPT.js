


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��)

	��Ż�� �ִ� �� : 103050900

	��Ż ���� : �����ϴ°� ����Ʈ üũ (2600)


*/


function enter(pi) {
    if (pi.getQuestStatus(2600) == 1) {
	pi.warp(103050910, 0);
	return true;
    } else {
	pi.getPlayer().dropMessage(5, "ȫ�ƿ��� ����Ʈ�� �޾ƾ� ������ �� �ֽ��ϴ�.");
	return false;
    }
    
}
