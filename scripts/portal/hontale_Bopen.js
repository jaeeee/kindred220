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
    var eim = pi.getPlayer().getEventInstance();
    if (pi.getPlayer().getMapId() == 240050101) { //ù��° �̷ι�
        if (eim.getProperty("Maze02open") == null) {
            pi.getPlayer().message(5, "�� �� ���� ������ ��Ż�� �����־� �̵��� �� �����ϴ�.");
            return false;
        } else {
            pi.warp(240050102);
            return true;
        }
    }
    if (pi.getPlayer().getMapId() == 240050102) { //�ι�° �̷ι�
        if (eim.getProperty("Maze03open") == null) {
            pi.getPlayer().message(5, "�� �� ���� ������ ��Ż�� �����־� �̵��� �� �����ϴ�.");
            return false;
        } else {
            pi.warp(240050103);
            return true;
        }
    }
    if (pi.getPlayer().getMapId() == 240050103) { //����° �̷ι�
        if (eim.getProperty("Maze04open") == null) {
            pi.getPlayer().message(5, "�� �� ���� ������ ��Ż�� �����־� �̵��� �� �����ϴ�.");
            return false;
        } else {
            pi.warp(240050104);
            return true;
        }
    }
    if (pi.getPlayer().getMapId() == 240050104) { //�׹�° �̷ι�
        if (eim.getProperty("Maze05open") == null) {
            pi.getPlayer().message(5, "�� �� ���� ������ ��Ż�� �����־� �̵��� �� �����ϴ�.");
            return false;
        } else {
            pi.warp(240050105);
            return true;
        }
    }
    
    if (pi.getPlayer().getMapId() == 240050105) { //�ι�° �̷ι�
        if (pi.haveItem(4001092, 1)) {
            pi.gainItem(4001092, -1);
            eim.broadcastPlayerMsg(5, "���� ������ ������ �̵��Ǿ����ϴ�.");
            pi.allPartyWarp(240050100, false);
            eim.addAchievementRatio(5);
            return true;
        } else {
            pi.getPlayer().message(5, "�� �� ���� ������ ��Ż�� �����־� �̵��� �� �����ϴ�.");
            return false;
        }
    }
}