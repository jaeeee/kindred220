
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
  cm.sendSimple("#r�޼һ���Ͱ� ���� �˷���??\r\n���� ������ �˰Ű���,, �׳� �İ���\r\n\r\n#L1##e#g[1��° �޼һ����]#k#l\r\n");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 220) {
  cm.sendOk("220 �̻��̶�ϱ�?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if (selection == 1) {
			if (cm.getClient().getChannelServer().getMapFactory().getMap(910160000).getCharactersSize() > 0) {
				cm.sendOk("�������� �޼һ���͸� �̿��ϰ� �ֽ��ϴ�.\r\n-���ѽð� �ִ� 10��-");
				cm.dispose();
            } else {
  cm.TimeMoveMap(910160000,270010111,600); // 9302039
            }
cm.dispose();
  } else if (selection == 2) {
			if (cm.getClient().getChannelServer().getMapFactory().getMap(950200100).getCharactersSize() > 0) {
				cm.sendOk("�������� �޼һ���͸� �̿��ϰ� �ֽ��ϴ�.\r\n-���ѽð� �ִ� 10��-");
				cm.dispose();
            } else {
                cm.gainItem(4310034, -0);
  cm.TimeMoveMap(950200100,270010111,600); // 9303060
            }
cm.dispose();

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}