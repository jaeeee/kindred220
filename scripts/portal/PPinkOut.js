/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : Ȳȥ�� ���� ����
 * ��Ż���� : ��ũ�� ������ �ⱸ
 * 
 * ���� : ��ũ��
 * 
 */

function enter(pi) {
    if (pi.getPlayer().getParty() == null) {
        pi.warp(270050000);
        return true;
    }
    if (pi.getPlayer().getParty().getExpedition() == null) {
        pi.warp(270050000);
        return true;
    }
    if (pi.getPlayer().getParty().getExpedition().getLeader() != pi.getPlayer().getId()) {
        pi.warp(270050000);
        pi.getParty().getExpedition().addDeadChar(pi.getPlayer().getId());
    } else {
        pi.allExpeditionWarp(270050000, true);
    }
    return true;
}