
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
  cm.sendSimple("#L23##r#e[110이상]#n : #b성벽 아래 1#l#k#L21##r#e#n#b : 성벽 아래 2 [24시간]#l#k\r\n\r##L100##r#e[150이상]#n : #b후회의 길 1#l#k#L101##r#e#n : #b망각의 길 1 [24시간]#l#k\r\n\r##L11##r#e[200이상]#n : #b기사단 무기고 1#l#k#L12##r#e#n : #b무기고 2 [24시간]#l#k\r\n\r\n#L20##r#e[210이상]#n : #b뒤틀린 신전 1#L19##r#e#n : #b뒤틀린 신전 2 [24시간]#l#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("200 이상이라니까?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if(selection == 1) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
  cm.dispose();
 } else if (cm.getMeso() < 1000000) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.입장하기 위해선 100만 메소가 필요해요");
  cm.dispose();
 } else {    
cm.warp(1000000000, 0);
  cm.gainMeso(-1000000); // 메소 차감시키기


 cm.dispose();
 }
  } else if (selection == 23) {
   cm.warp(211060100, 0);
cm.dispose();
  } else if (selection == 21) {
   cm.warp(211060300, 0);
cm.dispose();
  } else if (selection == 20) {
   cm.warp(272020000, 0);
cm.dispose();
  } else if (selection == 19) {
   cm.warp(272020100, 0);
cm.dispose();
  } else if (selection == 11) {
   cm.warp(271030310, 0);
cm.dispose();
  } else if (selection == 12) {
   cm.warp(271030320, 0);
cm.dispose();
  } else if (selection == 100) {
   cm.warp(270020100, 0);
cm.dispose();
  } else if (selection == 101) {
   cm.warp(270030100, 0);
cm.dispose();
  } else if (selection == 313) {
            if (!cm.haveItem(4310066, 10)|| cm.getPlayer().getMeso() < 10000000) {
                cm.sendOk("윈터코인10개와 메소1천만이 없쟈나"); // need GMS text
            } else {
                cm.gainItem(4310066, -10);
                cm.gainMeso(-10000000)
  cm.TimeMoveMap(910010200,100000000,300);
            }
cm.dispose();
  } else if (selection == 200) {
        if (cm.getPlayerStat("LVL") > 29) {
cm.warp(1000000000, 0);
cm.dispose();
        } else {
            cm.sendOk("자네 레벨 30 이상이 아닌건가? 못들어간다네;;");
            cm.dispose();
        }
  } else if (selection == 201) {
        if (cm.getPlayerStat("LVL") > 109) {
cm.warp(1000000000, 0);
cm.dispose();
        } else {
            cm.sendOk("자네 레벨 110 이상이 아닌건가? 못들어간다네;;");
            cm.dispose();
        }
  } else if (selection == 50) {
        if (cm.getPlayerStat("LVL") > 199) {
cm.warp(1000000000, 0);
        cm.dispose();
        } else {
            cm.sendOk("자네 레벨 200 이상이 아닌건가? 못들어간다네;;");
            cm.dispose();
        }
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}