
/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : 10000

	��Ż ���� : �̴ϸ� ���� ǥ��


*/
function enter(pi) {
    if (pi.getPlayer().getKeyValue("tuto_infoMinimap") == null) {
        pi.showWZEffect("UI/tutorial.img/25", 1);
        pi.getPlayer().setKeyValue("tuto_infoMinimap", "1");
    }
    return false;
}