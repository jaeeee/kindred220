/*

KMS 1.2.193 ��ǳ��

*/

importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("ȯ���ý����� ���� #b�ҹ�#k �Դϴ�. ȯ���մϴ�!\r\n\r\nȯ���� ���� 220���� �����ؿ� �ڽſ��´� ȯ���ϼ���\r\n(ȯ���� �����Ұ�� ���ǽð� �������ʽ��ϴ�)\r\n#e���� #h0#���� ȯ������Ʈ�� #r#e"+cm.getPlayer().getFame()+" #n#k�Դϴ�.\r\n#e#L3##b[�Ϲ�ȯ��] ȯ�� 0�̻� 5000���� ���� ȯ��#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {//�ݷ��� ��ȯ
   if(cm.getMobQuantity() < 1) {
    cm.sendNotice("[������ȯ] "+cm.c.getPlayer().getName() + "���� "+cm.getChannel()+"ä�ο��� �ݷ����� ��ȯ�Ͽ����ϴ� :                             ")
    cm.spawnMob(8840010, 0, -181);
    cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(-20,-216));
    cm.dispose();
   } else {
    cm.sendOk("�� ��� ��ȯ�� �����!! ")
    cm.dispose();
   }
  } else if (selection == 2) {
		cm.dispose();
                cm.openNpc(1002005);
		return;
  } else if (selection == 4) {
		cm.dispose();
                cm.openNpc(1002007);
		return;
  } else if (selection == 5) {
		cm.dispose();
                cm.openNpc(1002100);
		return;
  } else if (selection == 6) {
		cm.dispose();
                cm.openNpc(1002101);
		return;
 } else if (selection == 7) {
		cm.dispose();
                cm.openNpc(1022004);
		return;
 } else if (selection == 8) {
		cm.dispose();
                cm.openNpc(1022003);
		return;
  } else if (selection == 3) {
		cm.dispose();
                cm.openNpc(1012105);
		return;
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}