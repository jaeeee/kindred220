


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	��Ż�� �ִ� �� : 200000301

	��Ż ���� : ��庻�ο��� ����.


*/


function enter(pi) {
    if (pi.getClient().getChannelServer().getMapFactory().getMap(pi.getSavedLocation("GUILD")).getPortal("guildMove00") == null) {
        pi.warp(pi.getSavedLocation("GUILD"));
    } else {
        pi.warp(pi.getSavedLocation("GUILD"), "guildMove00");
    }
    return true;
}
