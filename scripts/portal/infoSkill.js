
/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : 30000

	��Ż ���� : ��ų ���� ǥ��


*/
function enter(pi) {
    if (pi.getPlayer().getKeyValue("tuto_infoSkill") == null) {
        pi.showWZEffect("UI/tutorial.img/23", 1);
        pi.getPlayer().setKeyValue("tuto_infoSkill", "1");
    }
    return false;
}