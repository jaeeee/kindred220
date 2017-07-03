importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("두려운건가");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
        sel = selection;
		cm.sendYesNo("#r매그너스#k를 소환하시겟습니까?");
     } else if (status == 1) {
  if (sel == 0) {
   if (cm.getMonsterCount(401060100) > 0) {
  cm.sendOk("다시 시도해주십시오.");
  cm.killAllMob();
  cm.dispose();
 } else if (cm.getMeso() < 5000000) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 매그너스를 소환하였습니다.")); // 게임 채팅서버알림 메세지 
 cm.gainMeso(-5000000); // 메소 차감시키기

 cm.spawnMob(8880000,2463,-1347);
 cm.dispose();
}
}
}
}