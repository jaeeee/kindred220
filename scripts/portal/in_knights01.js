/*
 * �λ�¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : Busan_stroy
 * 
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 160) {
        pi.getPlayer().message("���� 160 �̻� ���� �����մϴ�.");
        return false;
    }
    pi.playPortalSE();
    pi.warp(271030100);
    return true;
}