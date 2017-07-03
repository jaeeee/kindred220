
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
  cm.sendSimple("#L1##e#d골드존 [150제무기드롭] (#i4310066# 20개)#l#k#n\r\n(Lv.140이상 입장)\r\n#L2##e#r레드존 [150제방어구드롭] (#i4310066# 20개)#l#k#n\r\n(Lv.140이상 입장)\r\n#L3##e#b블루존 [주화 드롭] (#i4310066# 10개)#l#k#n\r\n(모두입장가능)");
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
            if (!cm.haveItem(4310066, 20)) {
                cm.sendOk("#e#r입장코인#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(4310066, -20);
  cm.TimeMoveMap(109060001,303000000,600); // 9302039
            }
cm.dispose();
  } else if (selection == 2) {
            if (!cm.haveItem(4310066, 20)) {	
                cm.sendOk("#e#r입장코인#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(4310066, -20);
  cm.TimeMoveMap(109060003,303000000,600); // 9303060
            }
cm.dispose();
  } else if (selection == 3) {
            if (!cm.haveItem(4310066, 10)) {
                cm.sendOk("#e#r입장코인#k이 없으시면 입장하실수없습니다."); // need GMS text
            } else {
                cm.gainItem(4310066, -10);
  cm.TimeMoveMap(109060005,303000000,600); // 9303060
            }
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}