
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
  cm.sendSimple("#e#i4001088##k \r �ι�°���踦 ���ϼ̽��ϱ�?#k \r���ϼ̴ٸ� ���� ���丮��.  �������ֽñ� �ٶ��ϴ�.   #L1##e#r#i3994385#500��#k:#e#bé��1-3#k:#e#d����° ���踦 ����");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 120) {
  cm.sendOk("120 �̻��̶�ϱ�?.");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}
  } else if (selection == 1) {
            if (!cm.haveItem(3994385, 500)) {
                cm.sendOk("#e#rȲ�ݴ�ǳ��#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(3994385, -500);
  cm.TimeMoveMap(940024000,100000000,300); //8860003
            }
cm.dispose();
  } else if (selection == 2) {
            if (!cm.haveItem(4032521, 1)) {
                cm.sendOk("#e#rVIPƼ��#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(4032521, -1);
  cm.TimeMoveMap(109060003,100000000,600); // 9303060
            }
cm.dispose();
  } else if (selection == 3) {
            if (!cm.haveItem(4310034, 10)) {
                cm.sendOk("#e#r����Ƽ�� ����#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(4310034, -10);
  cm.TimeMoveMap(109060005,100000000,600); // 9303060
            }
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}