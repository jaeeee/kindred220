
/*
����:�� ����:����
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var item = 4310059; // ��ȯ��
var count = 1; //�ʿ��� ������ ����
var count2 = 2; //�ʿ��� ������ ����
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("��Ÿ�� ������ ��ȯ�� �� �ֽ��ϴ�.\r\n#L1##i"+item+"# #r"+count+"��#k�� �ǿ��� ��ȯ#l\r\n#L3##i"+item+"# #r"+count2+"��#k�� ī���� �ǿ��� ��ȯ#l\r\n#L2#�������� ����#l#k\r\n");
 } else if(status == 1) {
  if(selection == 1) {
 if (cm.getMonsterCount(105200610) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("�ǿ����� ��ȯ�Ϸ��� #i"+item+"#"+count+"���� �ʿ��մϴ�.");
			cm.dispose();
 } else {    
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ":::::::["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� �ǿ��� �� ��ȯ�ϼ̽��ϴ�.::::::::")); 
 cm.gainItem(item,-count); // ������Ű��

 cm.spawnMob(8900100,493,551);
 cm.spawnMob(8900101,357,551);
 cm.spawnMob(8900102,758,551);
 cm.dispose();
}
  } else if(selection == 3) {
 if (cm.getMonsterCount(105200610) > 0) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
		} else if (!cm.haveItem(item, count2)) {
			cm.sendOk("ī���� �ǿ����� ��ȯ�Ϸ��� #i"+item+"#"+count2+"���� �ʿ��մϴ�.");
			cm.dispose();
 } else {    
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ":::::::["+ cm.getPlayer().getName()+"] �Բ��� "+(cm.getClient().getChannel()+1) +" ä�ο��� ī���� �ǿ��� �� ��ȯ�ϼ̽��ϴ�.::::::::")); 
 cm.gainItem(item,-count2); // ������Ű��

 cm.spawnMob(8900000,493,551);
 cm.spawnMob(8900001,357,551);
 cm.spawnMob(8900002,758,551);
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

