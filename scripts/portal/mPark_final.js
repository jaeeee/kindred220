/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : ��ũ��
 * 
 */
importPackage(java.lang);
importPackage(Packages.packet.creators);

function enter(pi) {
    var eim = pi.getPlayer().getEventInstance();
    if (eim == null) {
        pi.warp(951000000);
        return true;
    }
    if (eim.getProperty("CurrentStage").equals("7")) {
        pi.gainItem(4310020, 1);
        eim.unregisterPlayer(pi.getPlayer());
        pi.getPlayer().gainExp(50000, true, true, true);
        pi.warp(951000000);
        return true;
    } else {
        pi.getPlayer().send(UIPacket.showInfo("���� ���� ���͸� ��� ��ƾ� ���� ���������� �̵��� �� �ֽ��ϴ�."));
        pi.getPlayer().message(5, "���͸� ��� ������ �� ���� ��Ż�� �̵��� �ּ���.");
        return false;
    }
}