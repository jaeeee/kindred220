
/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : 30000

	��Ż ���� : ������ ���� ���� ǥ��


*/
function enter(pi) {
    if (pi.getPlayer().getKeyValue("tuto_infoPickup") == null) {
        pi.showWZEffect("UI/tutorial.img/21", 1);
        pi.getPlayer().setKeyValue("tuto_infoPickup", "1");
    }
    return false;
}