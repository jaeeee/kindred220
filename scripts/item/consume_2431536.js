/*
제작자 : ljw5992@naver.com / dbg_yeane@nate.com
*/

importPackage(Packages.client.items);

var status = -1;
var arr = "1082392,1082393,1082394,1003175,1102278,1082298,1052317,1072488,1242042,1332130,1342036,1362019,1472122,1152112,1003173,1102276,1082296,1052315,1072486,1212014,1372084,1382104,1152110,1003174,1102277,1082297,1052316,1072487,1452111,1462099,1522018,1152111,1003172,1102275,1082295,1052314,1072485,1232014,1302152,1312065,1322096,1402095,1412065,1422066,1432086,1442116,1152108,1003176,1102279,1082299,1052318,1072489,1222014,1242014,1482084,1492085,1532018,1152113";

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == 1) {
  status++;
 } else {
  status--;
  cm.dispose();
 }
 if (status == 0) {
  cm.sendYesNo("핫타임 상자를 열겠보겠어? 장비칸을 2칸 이상 비워둬");

 } else if (status == 1) {
  if (cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() > 2){
   var itemid = arr.split(",")[Math.floor(Math.random()*54+1)/1];
   cm.sendOk("#i" + itemid + "##b(#z"+itemid+"##k)를 획득했습니다.");
   cm.gainItem(2431536, -1);
   cm.gainItem(itemid,1);
   cm.dispose();
  } else {
   cm.sendOk("장비창에 공간이 부족해");
   cm.dispose();
  }
 }
}
