
/*
제작:모름 수정:에덴
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var cost = 50000000; // 소환가격
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("메소로 보스를 소환할 수 있습니다.\r\n#L1##r" + cost + "#b 메소로 하드힐라를 소환#l\r\n#L2#헤네시스로 가기#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(262030300) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 하드힐라를 소환하였습니다.")); // 게임 채팅서버알림 메세지 

 cm.gainMeso(-cost); // 메소 차감시키기

 cm.spawnMob(8870100,-200,-344);

 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 cm.gainMeso(-cost); // 메소 차감시키기

 cm.spawnMob(9300209,-500,-10);
 cm.dispose();
}
  } else if(selection == 4) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 좀비머쉬맘을 소환하였습니다.")); // 게임 채팅서버알림 메세지 
 cm.gainMeso(-cost); // 메소 차감시키기

 cm.spawnMob(6300005,-500,-10);
 cm.dispose();
}
  } else if (selection == 2) {
   cm.warp(100000000, 0);
   cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}
