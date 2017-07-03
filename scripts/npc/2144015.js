
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
  cm.sendSimple("");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 30) {
  cm.sendOk("Level 10 .");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if (selection == 1) {
            if (!cm.haveItem(4033866, 0)) {
                cm.sendOk("#b코인이 없습니다#k"); // need GMS text
            } else {
                cm.gainItem(4033866, -0);
  cm.TimeMoveMap(910160000 ,100000000,3600); // 9302039
            }
cm.dispose();
 cm.dispose();
  } else if (selection == 2) {
            if (!cm.haveItem(4033866, 0)) {
                cm.sendOk("#b코인이 없습니다#k"); // need GMS text
            } else {
                cm.gainItem(4033866, -0);
  cm.TimeMoveMap( 273060300 ,100000000,1500); // 9303060
            }
 cm.dispose();
  } else if (selection == 3) {
            if (!cm.haveItem(4033866, 0)) {
                cm.sendOk("#b코인이 없습니다#k"); // need GMS text
            } else {
                cm.gainItem(4033866, -0);
  cm.TimeMoveMap( 241020226 ,100000000,1500); // 9303060
            }
cm.dispose();

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}