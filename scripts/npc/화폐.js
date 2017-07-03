/**/
importPackage(Packages.client.items);


var status = -1;
var itemid = 4033248; // 화폐로 사용할 아이템 코드 입니다.
var price = 10000000; // 화폐아이템 1개당 가격입니다.
var types = 2; // 0 = 설치아이템, 1 = 캐쉬아이템, 2 = 기타아이템, 3 = 소비아이템 (화폐아이템의 유형에 따라 정해줘야함)
var ItemMax = 200; // 아이템이 인벤토리 한공간에서 최대 가질 수 있는 갯수 (보통 200 or 300 개죠)
var count;
var sel;
var max;
var my_max;
var inv = Array(HarmonyInventoryType.SETUP,HarmonyInventoryType.CASH,HarmonyInventoryType.ETC,HarmonyInventoryType.USE,"설치","캐쉬","기타","소비");

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) { 

 flag = 0;
 my_max = 0;
 while (cm.haveItem(itemid,my_max)) {
  my_max += 1;
 }
 my_max -= 1;
       var chat = "#r화폐#k의 1개의 가치는 #r" + price + " #k메소 입니다.\r\n\r\n";
 if (my_max == 0) {
  chat += "\r\n당신은 지금 #i" + itemid + "#를 보유하고 있지않습니다.";
  flag++;
 }
 if (cm.getMeso() < price) {
  chat += "\r\n#e#i" + itemid + "# 를 구입할 메소가 부족합니다.";
  flag++;
 }
 if (my_max != 0) chat += "\r\n#L0##i" + itemid + "#를 메소로 교환하겠습니다.\r\n";
 if (cm.getMeso() >= price) chat += "\r\n#L1#메소를 #i" + itemid + "#으로 교환하겠습니다.";
 if (flag == 2) {
  cm.sendOk(chat);
  cm.dispose();
  return;
 } else {
  cm.sendSimple(chat);
 }
    } else if (status == 1) { 
 sel = selection;
 if (selection == 0) {
  max = Math.floor((2147483647 - cm.getMeso()) / price);  
  if (max > my_max) max = my_max;
  if (max == 0) {
   cm.sendOk("메소가 너무 많습니다.");
   cm.dispose();
   return;
  } else {
    
   cm.sendGetNumber("#i" + itemid + "# 몇개를 판매 하시겠습니까?\r\n최대 : " + max + "개 까지 판매가능",1,1,max);
  }
 } else if (selection == 1) { 
var leftslot = cm.getPlayer().getInventory(inv[types]).getNumFreeSlot();
  max = Math.floor(cm.getMeso() / price);
if (max >= (leftslot*ItemMax)) max=leftslot*ItemMax;
  if (max == 0) {
   cm.sendOk("#b최소 #r" + price + " #b메소이상 가지고 오세요~\r\n혹은 #r" + inv[types+4] + "#b인벤토리가 꽉찼는지 확인해주세요.");
   cm.dispose();
   return;
  } else {
   cm.sendGetNumber("#i" + itemid + "# 몇개를 구입 하시겠습니까?\r\n최대 : " + max + "개 까지 구입가능",1,1,max);
  }
 }
    } else if (status == 2) {
     if (sel == 0) {
  count = selection;
  cm.sendOk("#b#i" + itemid + "# " + count + "개로 총 #r" + (count*price) + "#b 메소를 얻었습니다.");
  cm.gainItem(itemid,-count);
  cm.gainMeso(count*price);
  cm.dispose(); 
  return; 
 } else if (sel == 1) {
  count = selection;
  if (cm.canHold(itemid)) {
   cm.sendOk("#r" + (count*price) + "#b 메소로 총 #b#i" + itemid + "# " + count + "개를 얻었습니다.");
   cm.gainItem(itemid,count);
   cm.gainMeso(-(count*price));
   cm.dispose();
   return;
  } else {
   cm.sendOk("인벤토리를 비워주세요");
   cm.dispose();
   return;
  }
 }
} else {
cm.dispose();
}
}