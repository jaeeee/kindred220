/*
������ : ljw5992@naver.com / Harmony_yeane@nate.com
*/

importPackage(Packages.client.items);

var status = -1;
var rand = Math.floor(Math.random()*10);

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
  cm.sendYesNo("��Ÿ�� ���ڸ� ���ں��ھ�? ���ĭ�� 2ĭ �̻� �����\r\n������ ��÷Ȯ���� 30%��.");

 } else if (status == 1) {
if (rand < 3){
  if (cm.getPlayer().getInventory(HarmonyInventoryType.EQUIP).getNumFreeSlot() > 2){
   cm.sendOk("#i1112594##b(#z1112594##k)�� ȹ���߽��ϴ�.");
   cm.gainItem(2431480, -1);
   cm.gainItem(itemid,1);
   cm.dispose();
  } else {
   cm.sendOk("���â�� ������ ������");
   cm.dispose();
  }
}else{
   cm.sendOk("��");
}
 }
}
