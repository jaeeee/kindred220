
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
  cm.sendSimple("#r메소사냥터가 뭔지 알려줘??\r\n몰라도 대충은 알거같네,, 그냥 쳐가라\r\n\r\n#L1##e#g[1번째 메소사냥터]#k#l\r\n");
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
			if (cm.getClient().getChannelServer().getMapFactory().getMap(910160000).getCharactersSize() > 0) {
				cm.sendOk("누군가가 메소사냥터를 이용하고 있습니다.\r\n-제한시간 최대 10분-");
				cm.dispose();
            } else {
  cm.TimeMoveMap(910160000,270010111,600); // 9302039
            }
cm.dispose();
  } else if (selection == 2) {
			if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
				cm.sendOk("누군가가 메소사냥터를 이용하고 있습니다.\r\n-제한시간 최대 10분-");
				cm.dispose();
            } else {
                cm.gainItem(4310034, -0);
  cm.TimeMoveMap(950200100,270010111,600); // 9303060
            }
cm.dispose();

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}