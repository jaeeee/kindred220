/*
아야노(riel0216)
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
  cm.sendSimple("#r#e폭업사냥터#n#k이동에 오신것을 환영합니다\r\n필요아이템 #e:#n #b#i4310063# #z4310063# 30개#k　필요레벨 #e:#n #r200LV#k\r\n\r\n#L3##b폭업사냥터로 이동하겠습니다.#k\r\n#L1##b폭업사냥터가 무엇인가요?#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("#b레벨 200이상만 이용가능하십니다#k");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}

      } else if (selection == 1) {
        cm.dispose();
        cm.sendOk("#b폭업사냥터#k설명을 도와드리겠습니다\r\n폭업사냥터는 레벨 200부터 이용이 가능하십니다\r\n고렙 몬스터들이 많이 출현되는 맵으로 이동시켜드립니다\r\n"); // need GMS text
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(1033112);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(2144015);
	return;

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}