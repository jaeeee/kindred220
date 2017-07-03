
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
  cm.sendSimple("#e#i4001088##k \r 두번째열쇠를 구하셨습니까?#k \r구하셨다면 다음 스토리를.  진행해주시기 바랍니다.   #L1##e#r#i3994385#500개#k:#e#b챕터1-3#k:#e#d세번째 열쇠를 향해");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 120) {
  cm.sendOk("120 이상이라니까?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if (selection == 1) {
            if (!cm.haveItem(3994385, 500)) {
                cm.sendOk("#e#r황금단풍잎#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(3994385, -500);
  cm.TimeMoveMap(940024000,100000000,300); //8860003
            }
cm.dispose();
  } else if (selection == 2) {
            if (!cm.haveItem(4032521, 1)) {
                cm.sendOk("#e#rVIP티켓#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(4032521, -1);
  cm.TimeMoveMap(109060003,100000000,600); // 9303060
            }
cm.dispose();
  } else if (selection == 3) {
            if (!cm.haveItem(4310034, 10)) {
                cm.sendOk("#e#r저스티스 코인#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(4310034, -10);
  cm.TimeMoveMap(109060005,100000000,600); // 9303060
            }
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}