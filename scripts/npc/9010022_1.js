
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
  cm.sendSimple("�����������ڡ� #e��ᱸ�ϴ� ����� #k#n�ڡ�\r\n\r##L23##r#e[��Ʋ�� �ð��� ����]#n : #b�����ϱ� [24�ð�]#l#k\r\n\r\n#l#k#L21##r#e[���� ����]#n : #b�����ϱ� [24�ð�]#l#k\r\n\r##L11##r#e[������ ��]#n : #b�����ϱ� [24�ð�]#l#k\r\n\r\n#l#k#L12##r#e[���°���]#n : #b�����ϱ� [24�ð�]#l#k\r\n\r\n#L20##r#e[��Ƭ ����]#n : #b�����ϱ� [24�ð�]#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� Ŭ�� ������ �����Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-cost); // �޼� ������Ű��

 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < costs) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� Ŭ�� ������ �����Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
  cm.gainMeso(-costs); // �޼� ������Ű��


 cm.dispose();
 }
  } else if (selection == 23) {
   cm.warp(211060100, 0);
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ������ ��ä 2������ �̵��ϼ̽��ϴ�"));
cm.dispose();
  } else if (selection == 21) {
   cm.warp(211060300, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ������ ��ä 3������ �̵��ϼ̽��ϴ�"));
cm.dispose();
  } else if (selection == 20) {
   cm.warp(913070310, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ��Ʋ�� ���� 1�� �̵��ϼ̽��ϴ�"));
cm.dispose();
  } else if (selection == 19) {
   cm.warp(272020100, 0);
// WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ��Ʋ�� ���� 2�� �̵��ϼ̽��ϴ�"));
cm.dispose();
  } else if (selection == 11) {
   cm.warp(913070300, 0);
 //WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ����� 1������ �̵��ϼ̽��ϴ�"));
cm.dispose();
  } else if (selection == 12) {
   cm.warp(913070320, 0);
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ����� 2������ �̵��ϼ̽��ϴ�"));
cm.dispose();
} else if (selection == 30) {
cm.warp(273000000, 0);
cm.dispose();
} else if (selection == 40) {
cm.warp(105200419, 0);
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}