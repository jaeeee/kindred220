


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : �����������

	��Ż ���� : ����������� ������


*/


function enter(pi) {
    pi.playPortalSE();
    try {
        pi.warp(pi.getSavedLocation("PROFESSION"), "profession");
    } catch (e) {
        pi.warp(pi.getSavedLocation("PROFESSION"));
    }
    pi.clearSavedLocation("PROFESSION");
    return true;
}
