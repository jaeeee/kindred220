
/*
����:�� ����:����
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var cost = 50000; // ��ȯ����
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("#e  �ھ�¶����� �������� ���� ����ͷ� �Դϴ�.\r\n������ ���� �� �� 1���� ��󺸼���.  #k#n\r\n\r\n\r\n#L1##e#r[NEW]: ���� �Ϲ� ���� ����͵��� ���캸��#l#k\r\n\r\n#L2##b[NEW]: �����̾� ����͵� ���캸��#l#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("200 �̻��̶�ϱ�?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}

      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(2400025);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(2144015);
	return;

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}