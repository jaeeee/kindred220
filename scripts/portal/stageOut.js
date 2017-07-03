/*
 * 퓨어온라인 소스 스크립트 입니다.
 * 
 * 포탈위치 : 
 * 포탈설명 : 
 * 
 * 제작 : 주크블랙
 * 
 */
importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

function enter(pi) {
	if(pi.getPlayer().getMapId() == 992002000) {
	pi.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("Gstar/clearS"));
	pi.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초 뒤 로비로 이동됩니다."));
	pi.TheSidClear();
        GameConstants.setTheSid(GameConstants.getTheSidTower(pi.getPlayer().getMapId()), GameConstants.getTheSidMap((GameConstants.getTheSidTower(pi.getPlayer().getMapId()) + 1)), pi.getPlayer());
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "[더 시드] " + pi.getPlayer().getParty().getLeader().getName() + "님의 파티가 더 시드 2층을 공략 했습니다."));
        }
}