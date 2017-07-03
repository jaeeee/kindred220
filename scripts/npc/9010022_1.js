
/*
제작:모름 수정:에덴
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var cost = 50000; // 소환가격
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("　　　　　★★ #e재료구하는 사냥터 #k#n★★\r\n\r##L23##r#e[뒤틀린 시간의 정수]#n : #b입장하기 [24시간]#l#k\r\n\r\n#l#k#L21##r#e[꿈의 조각]#n : #b입장하기 [24시간]#l#k\r\n\r##L11##r#e[현자의 돌]#n : #b입장하기 [24시간]#l#k\r\n\r\n#l#k#L12##r#e[마력결정]#n : #b입장하기 [24시간]#l#k\r\n\r\n#L20##r#e[리튬 원석]#n : #b입장하기 [24시간]#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 클릭 컨텐츠 시작하엿습니다.")); // 게임 채팅서버알림 메세지 
 cm.gainMeso(-cost); // 메소 차감시키기

 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < costs) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 클릭 컨텐츠 시작하엿습니다.")); // 게임 채팅서버알림 메세지 
  cm.gainMeso(-costs); // 메소 차감시키기


 cm.dispose();
 }
  } else if (selection == 23) {
   cm.warp(211060100, 0);
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 폭군의 성채 2층으로 이동하셨습니다"));
cm.dispose();
  } else if (selection == 21) {
   cm.warp(211060300, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 폭군의 성채 3층으로 이동하셨습니다"));
cm.dispose();
  } else if (selection == 20) {
   cm.warp(913070310, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 뒤틀린 신전 1로 이동하셨습니다"));
cm.dispose();
  } else if (selection == 19) {
   cm.warp(272020100, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 뒤틀린 신전 2로 이동하셨습니다"));
cm.dispose();
  } else if (selection == 11) {
   cm.warp(913070300, 0);
 //WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 무기고 1층으로 이동하셨습니다"));
cm.dispose();
  } else if (selection == 12) {
   cm.warp(913070320, 0);
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 무기고 2층으로 이동하셨습니다"));
cm.dispose();
} else if (selection == 30) {
cm.warp(273000000, 0);
cm.dispose();
} else if (selection == 40) {
cm.warp(105200419, 0);
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}