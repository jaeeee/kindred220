/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : ��ũ��
 * 
 */

function enter(pi) {
    if (pi.getPlayer().getLevel() < 170) {
        pi.getPlayer().message("���� 170 �̻� ���� �����մϴ�.");
        return false;
    }
    pi.warp(271040000);
    return false;
}