/*
����:�� ����:����
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var cost = 100000; // ��ȯ����
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("�޼ҷ� ������ ��ȯ�� �� �ֽ��ϴ�.\r\n#L1##r" + cost + "#b �޼ҷ� �ӽ��� ��ȯ#l\r\n#L3##r" + cost + "#b �޼ҷ� ���ӽ��� ��ȯ#l\r\n#L4##r" + cost + "#b �޼ҷ� ����ӽ��� ��ȯ#l\r\n#L2#��׽ý��� ����#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� �ӽ����� ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-cost); // �޼� ������Ű��

 cm.spawnMob(6130101,-500,-10);
 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ���ӽ����� ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-cost); // �޼� ������Ű��

 cm.spawnMob(9300209,-500,-10);
 cm.dispose();
}
  } else if(selection == 4) {
 if (cm.getMonsterCount(220080001) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < cost) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ����ӽ����� ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-cost); // �޼� ������Ű��

 cm.spawnMob(6300005,-500,-10);
 cm.dispose();
}
  } else if (selection == 2) {
   cm.warp(100000000, 0);
   cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}


