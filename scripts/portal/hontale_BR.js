/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : ������ ���� 1
 * ��Ż���� : ���� �� �̵�
 * 
 * ���� : ��ũ��
 * 
 */
function enter(pi) {
    var map = pi.getPlayer().getMap();
    if (pi.getMonsterCount(map.getId()) <= 0 && map.getReactor(2408003).getState() == 1) {
        pi.setLastBossMap(map.getId() + 100);
        pi.warp(map.getId() + 100);
    } else {
        pi.getPlayer().message(5, "���� ȥ������ �Ӹ��� ���� �ֽ��ϴ�.");
    }
    return false;
}
