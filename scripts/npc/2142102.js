
/*
제작:모름 수정:에덴
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var item = 4310059; // 소환템
var count = 1; //필요한 아이템 갯수
var count2 = 2; //필요한 아이템 갯수
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("루타비스 보스를 소환할 수 있습니다.\r\n#L1##i"+item+"# #r"+count+"개#k로 피에르 소환#l\r\n#L3##i"+item+"# #r"+count2+"개#k로 카오스 피에르 소환#l\r\n#L2#광장으로 가기#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(105200610) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("피에르를 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
 } else {    
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ":::::::["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 피에르 를 소환하셨습니다.::::::::")); 
 cm.gainItem(item,-count); // 차감시키기

 cm.spawnMob(8900100,493,551);
 cm.spawnMob(8900101,357,551);
 cm.spawnMob(8900102,758,551);
 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(105200610) > 0) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
		} else if (!cm.haveItem(item, count2)) {
			cm.sendOk("카오스 피에르를 소환하려면 #i"+item+"#"+count2+"개가 필요합니다.");
			cm.dispose();
 } else {    
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ":::::::["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 카오스 피에르 를 소환하셨습니다.::::::::")); 
 cm.gainItem(item,-count2); // 차감시키기

 cm.spawnMob(8900000,493,551);
 cm.spawnMob(8900001,357,551);
 cm.spawnMob(8900002,758,551);
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

