/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : ��ũ��
 * 
 */
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

function enter(pi) {
	if(pi.getPlayer().getMapId() == 992002000) {
	pi.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	pi.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3�� �� �κ�� �̵��˴ϴ�."));
	pi.TheSidClear();
        GameConstants.setTheSid(GameConstants.getTheSidTower(pi.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(pi.getPlayer().getMapId()) + 1)), pi.getPlayer());
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "[�� �õ�] " + pi.getPlayer().getParty().getLeader().getName() + "���� ��Ƽ�� �� �õ� 2���� ���� �߽��ϴ�."));
        }
}