
/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : 30000

	��Ż ���� : ���� ���� ǥ��


*/
function enter(pi) {
    if (pi.getPlayer().getKeyValue("tuto_infoAttack") == null) {
        pi.showWZEffect("UI/tutorial.img/20", 1);
        pi.getPlayer().setKeyValue("tuto_infoAttack", "1");
    }
    return false;
}