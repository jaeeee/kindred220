/*

KMS 1.2.193 단풍잎

*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("환생시스템을 맡은 #b할배#k 입니다. 환영합니다!\r\n\r\n환생은 레벨 220부터 가능해요 자신에맞는 환생하세요\r\n(환포가 부족할경우 엔피시가 열리지않습니다)\r\n#e현재 #h0#님의 환생포인트는 #r#e"+cm.getPlayer().getFame()+" #n#k입니다.\r\n#e#L3##b[일반환생] 환포 0이상 5000이하 유저 환생#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {//반레온 소환
   if(cm.getMobQuantity() < 1) {
    cm.sendNotice("[보스소환] "+cm.c.getPlayer().getName() + "님이 "+cm.getChannel()+"채널에서 반레온을 소환하였습니다 :                             ")
    cm.spawnMob(8840010, 0, -181);
    cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(-20,-216));
    cm.dispose();
   } else {
    cm.sendOk("다 잡고 소환해 멍충아!! ")
    cm.dispose();
   }
  } else if (selection == 2) {
		cm.dispose();
                cm.openNpc(1002005);
		return;
  } else if (selection == 4) {
		cm.dispose();
                cm.openNpc(1002007);
		return;
  } else if (selection == 5) {
		cm.dispose();
                cm.openNpc(1002100);
		return;
  } else if (selection == 6) {
		cm.dispose();
                cm.openNpc(1002101);
		return;
 } else if (selection == 7) {
		cm.dispose();
                cm.openNpc(1022004);
		return;
 } else if (selection == 8) {
		cm.dispose();
                cm.openNpc(1022003);
		return;
  } else if (selection == 3) {
		cm.dispose();
                cm.openNpc(1012105);
		return;
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}