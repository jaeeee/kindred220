
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
  cm.sendSimple("#e#b보스 아레나 & 보스 레이드를 진행하시겠습니까?\r\n\r\n#L1##fUI/UIWindow2/aswan/BtStart/normal/0#");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 220) {
  cm.sendOk("220 이상이라니까?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if (selection == 1) {
			if (cm.getClient().getChannelServer().getMapFactory().getMap(932200000).getCharactersSize() > 0) {
				cm.sendOk("누군가가 보스아레나를 이용하고 있습니다.\r\n-제한시간 최대 30분-");
				cm.dispose();
            } else {
  cm.TimeMoveMap(241010000,100000000,600); // 9302039
            }
cm.dispose();
  } else if (selection == 2) {
			if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
				cm.sendOk("누군가가 메소사냥터를 이용하고 있습니다.\r\n-제한시간 최대 10분-");
				cm.dispose();
            } else {
                cm.gainItem(4310034, -0);
  cm.TimeMoveMap(241010000,270010111,600); // 9303060
            }
cm.dispose();

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}