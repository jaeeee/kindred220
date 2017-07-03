
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
  cm.sendSimple("#e  코어온라인의 독자적인 폭업 사냥터류 입니다.\r\n가보고 싶은 것 중 1곳을 골라보세요.  #k#n\r\n\r\n\r\n#L1##e#r[NEW]: 각종 일반 폭업 사냥터들을 살펴보기#l#k\r\n\r\n#L2##b[NEW]: 프리미엄 사냥터들 살펴보기#l#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("200 이상이라니까?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}

      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(2400025);
	return;

      } else if (selection == 2) {
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