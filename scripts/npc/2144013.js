
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
  cm.sendSimple("#L1##e#d����� [150��������] (#i4310066# 20��)#l#k#n\r\n(Lv.140�̻� ����)\r\n#L2##e#r������ [150�������] (#i4310066# 20��)#l#k#n\r\n(Lv.140�̻� ����)\r\n#L3##e#b����� [��ȭ ���] (#i4310066# 10��)#l#k#n\r\n(������尡��)");
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
            if (!cm.haveItem(4310066, 20)) {
                cm.sendOk("#e#r��������#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(4310066, -20);
  cm.TimeMoveMap(109060001,303000000,600); // 9302039
            }
cm.dispose();
  } else if (selection == 2) {
            if (!cm.haveItem(4310066, 20)) {	
                cm.sendOk("#e#r��������#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(4310066, -20);
  cm.TimeMoveMap(109060003,303000000,600); // 9303060
            }
cm.dispose();
  } else if (selection == 3) {
            if (!cm.haveItem(4310066, 10)) {
                cm.sendOk("#e#r��������#k�� �����ø� �����ϽǼ������ϴ�."); // need GMS text
            } else {
                cm.gainItem(4310066, -10);
  cm.TimeMoveMap(109060005,303000000,600); // 9303060
            }
cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}