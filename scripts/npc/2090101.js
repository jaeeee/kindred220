
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
  cm.sendSimple("#L23##r#e[110�̻�]#n : #b���� �Ʒ� 1#l#k#L21##r#e#n#b : ���� �Ʒ� 2 [24�ð�]#l#k\r\n\r##L100##r#e[150�̻�]#n : #b��ȸ�� �� 1#l#k#L101##r#e#n : #b������ �� 1 [24�ð�]#l#k\r\n\r##L11##r#e[200�̻�]#n : #b���� ����� 1#l#k#L12##r#e#n : #b����� 2 [24�ð�]#l#k\r\n\r\n#L20##r#e[210�̻�]#n : #b��Ʋ�� ���� 1#L19##r#e#n : #b��Ʋ�� ���� 2 [24�ð�]#l#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("200 �̻��̶�ϱ�?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if(selection == 1) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("��� ���͸� ������Ѿ� �մϴ�.");
  cm.dispose();
 } else if (cm.getMeso() < 1000000) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.�����ϱ� ���ؼ� 100�� �޼Ұ� �ʿ��ؿ�");
  cm.dispose();
 } else {    
cm.warp(1000000000, 0);
  cm.gainMeso(-1000000); // �޼� ������Ű��


 cm.dispose();
 }
  } else if (selection == 23) {
   cm.warp(211060100, 0);
cm.dispose();
  } else if (selection == 21) {
   cm.warp(211060300, 0);
cm.dispose();
  } else if (selection == 20) {
   cm.warp(272020000, 0);
cm.dispose();
  } else if (selection == 19) {
   cm.warp(272020100, 0);
cm.dispose();
  } else if (selection == 11) {
   cm.warp(271030310, 0);
cm.dispose();
  } else if (selection == 12) {
   cm.warp(271030320, 0);
cm.dispose();
  } else if (selection == 100) {
   cm.warp(270020100, 0);
cm.dispose();
  } else if (selection == 101) {
   cm.warp(270030100, 0);
cm.dispose();
  } else if (selection == 313) {
            if (!cm.haveItem(4310066, 10)|| cm.getPlayer().getMeso() < 10000000) {
                cm.sendOk("��������10���� �޼�1õ���� ����"); // need GMS text
            } else {
                cm.gainItem(4310066, -10);
                cm.gainMeso(-10000000)
  cm.TimeMoveMap(910010200,100000000,300);
            }
cm.dispose();
  } else if (selection == 200) {
        if (cm.getPlayerStat("LVL") > 29) {
cm.warp(1000000000, 0);
cm.dispose();
        } else {
            cm.sendOk("�ڳ� ���� 30 �̻��� �ƴѰǰ�? �����ٳ�;;");
            cm.dispose();
        }
  } else if (selection == 201) {
        if (cm.getPlayerStat("LVL") > 109) {
cm.warp(1000000000, 0);
cm.dispose();
        } else {
            cm.sendOk("�ڳ� ���� 110 �̻��� �ƴѰǰ�? �����ٳ�;;");
            cm.dispose();
        }
  } else if (selection == 50) {
        if (cm.getPlayerStat("LVL") > 199) {
cm.warp(1000000000, 0);
        cm.dispose();
        } else {
            cm.sendOk("�ڳ� ���� 200 �̻��� �ƴѰǰ�? �����ٳ�;;");
            cm.dispose();
        }
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}