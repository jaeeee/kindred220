/**/
importPackage(Packages.client.items);


var status = -1;
var itemid = 4033248; // ȭ��� ����� ������ �ڵ� �Դϴ�.
var price = 10000000; // ȭ������� 1���� �����Դϴ�.
var types = 2; // 0 = ��ġ������, 1 = ĳ��������, 2 = ��Ÿ������, 3 = �Һ������ (ȭ��������� ������ ���� ���������)
var ItemMax = 200; // �������� �κ��丮 �Ѱ������� �ִ� ���� �� �ִ� ���� (���� 200 or 300 ����)
var count;
var sel;
var max;
var my_max;
var inv = Array(HarmonyInventoryType.SETUP,HarmonyInventoryType.CASH,HarmonyInventoryType.ETC,HarmonyInventoryType.USE,"��ġ","ĳ��","��Ÿ","�Һ�");

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
       var chat = "#rȭ��#k�� 1���� ��ġ�� #r" + price + " #k�޼� �Դϴ�.\r\n\r\n";
 if (my_max == 0) {
  chat += "\r\n����� ���� #i" + itemid + "#�� �����ϰ� �����ʽ��ϴ�.";
  flag++;
 }
 if (cm.getMeso() < price) {
  chat += "\r\n#e#i" + itemid + "# �� ������ �޼Ұ� �����մϴ�.";
  flag++;
 }
 if (my_max != 0) chat += "\r\n#L0##i" + itemid + "#�� �޼ҷ� ��ȯ�ϰڽ��ϴ�.\r\n";
 if (cm.getMeso() >= price) chat += "\r\n#L1#�޼Ҹ� #i" + itemid + "#���� ��ȯ�ϰڽ��ϴ�.";
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
   cm.sendOk("�޼Ұ� �ʹ� �����ϴ�.");
   cm.dispose();
   return;
  } else {
    
   cm.sendGetNumber("#i" + itemid + "# ��� �Ǹ� �Ͻðڽ��ϱ�?\r\n�ִ� : " + max + "�� ���� �ǸŰ���",1,1,max);
  }
 } else if (selection == 1) { 
var leftslot = cm.getPlayer().getInventory(inv[types]).getNumFreeSlot();
  max = Math.floor(cm.getMeso() / price);
if (max >= (leftslot*ItemMax)) max=leftslot*ItemMax;
  if (max == 0) {
   cm.sendOk("#b�ּ� #r" + price + " #b�޼��̻� ������ ������~\r\nȤ�� #r" + inv[types+4] + "#b�κ��丮�� ��á���� Ȯ�����ּ���.");
   cm.dispose();
   return;
  } else {
   cm.sendGetNumber("#i" + itemid + "# ��� ���� �Ͻðڽ��ϱ�?\r\n�ִ� : " + max + "�� ���� ���԰���",1,1,max);
  }
 }
    } else if (status == 2) {
     if (sel == 0) {
  count = selection;
  cm.sendOk("#b#i" + itemid + "# " + count + "���� �� #r" + (count*price) + "#b �޼Ҹ� ������ϴ�.");
  cm.gainItem(itemid,-count);
  cm.gainMeso(count*price);
  cm.dispose(); 
  return; 
 } else if (sel == 1) {
  count = selection;
  if (cm.canHold(itemid)) {
   cm.sendOk("#r" + (count*price) + "#b �޼ҷ� �� #b#i" + itemid + "# " + count + "���� ������ϴ�.");
   cm.gainItem(itemid,count);
   cm.gainMeso(-(count*price));
   cm.dispose();
   return;
  } else {
   cm.sendOk("�κ��丮�� ����ּ���");
   cm.dispose();
   return;
  }
 }
} else {
cm.dispose();
}
}