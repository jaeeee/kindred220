/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : �����ǵ��� : �̷ι�
 * ��Ż���� : ù��° �̷ι� ����
 * 
 * ���� : ��ũ��
 * 
 */

function enter(pi) {
    if (pi.haveItem(4001087, 1)) {
        pi.warp(240050101);
        pi.getPlayer().message(5, "ù ��° �̷ι��� ������ ���� ���� ��򰡷� �̵��˴ϴ�.");
        pi.gainItem(4001087, -1);
        return true;
    } else {
        pi.getPlayer().message(5, "�̷ι濡 ���µ� �ʿ��� ���谡 �����ϴ�.");
        return false;
    }
}