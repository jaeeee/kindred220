/*


 ���迩�� ��ũ��Ʈ.
 ������ : River(stlyeboy) , ���ܹ����� ���ܼ��������մϴ�.
 �����ϽǶ� ������ ����� ������ ���ּ���


*/

var status = -1;
var cost, sel;
var name1, name2, name3;
var code1, code2, code3;
var map;
var back = true;

function start() {
    switch (cm.getMapId()) {
 case 800000000:
 case 500000000:
 case 701000000:
 case 740000000:
     map = cm.getSavedLocation("WORLDTOUR");
     cm.sendSimple("������ ��Ű���? ��ſ�Ű���?\n\r #b#L0# �ٸ� ������ ������ �;��.#l \n\r #L1# ������ ��ġ�� ���� �ִ� #m"+map+"#�� ���ư��� �;��.#l");
     break;
 case 950000100:
     map = 193000000;
     cm.sendSimple("#m"+map+"#?#l ����ͳ�?");
     break;
 default:
     back = false;
     if (cm.getJob() == 0) {
  cm.sendNext("\r\n\r\n#r���迩���� �������ðھ��?#k");
  cost = 300;
     } else {
  cm.sendNext("\r\n\r\n#r���迩���� �������ðھ��?#k");
  cost = 3000;
     }
     break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
 cm.dispose();
    } else {
 if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
     cm.dispose();
     return;
 }
 if (mode == 1)
     status++;
 else
     status--;

 if (!back) {
     if (status == 0) {
  cm.sendSimple("�ȳ��ϼ���~ ���ο� ����� ������ �������� ��������? �׷��ٸ� ���� ���迩�� ���񽺸� �̿��غ��ñ� �ٶ��ϴ�! ���� �����غ��� ��������? �ʺ��ڿ��Դ� Ư���� 90% ���ε� ������� �����ص帳�ϴ�.  #r����� "+cost+"�޼� �Դϴ�.#k\r\n\r\n#b#L10#�±� #m500000000#  #l\r\n#L11#�븸 #m740000000# #l\r\n#L12#�Ϻ� #m800000000# #l\r\n#L13#�߱� #m701000000# #l\r\n#L14#��ũ Ÿ�� #m219000000#");
     } else if (selection == 10) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(500000000, 0);
      cm.dispose();
     } else if (selection == 11) {
      cm.warp(740000000, 0);
      cm.dispose();
     } else if (selection == 14) {
      cm.warp(219000000, 0);
      cm.dispose();
     } else if (selection == 12) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(800000000, 0);
      cm.dispose();
     } else if (selection == 13) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(701000000, 0);
      cm.dispose();
     }
 } else {     
     if (status == 0) {
  if (selection == 0) {
      switch (cm.getMapId()) {
   case 740000000:
       code1 = 800000000;
       code2 = 701000000;
       code3 = 500000000;
       name1 = "�Ϻ�";
       name2 = "�߱�";
       name3 = "�븸";
   case 500000000:
       code1 = 800000000;
       code2 = 701000000;
       code3 = 740000000;
       name1 = "�Ϻ�";
       name2 = "�߱�";
       name3 = "�븸";
       break;
   case 800000000:
       code1 = 701000000;
       code2 = 500000000;
       code3 = 740000000;
       name1 = "�߱�";
       name2 = "�±�";
       name3 = "�븸";
       break;
   case 701000000:
       code1 = 500000000;
       code2 = 800000000;
       code3 = 740000000;
       name1 = "�±�";
       name2 = "�Ϻ�";
       name3 = "�븸";
       break;
   default:
       cm.dispose();
       return;
      }
      cm.sendSimple("���� ������ �����Ű���?\n\r #b#L0#"+name1+" #m"+code1+"# (3,000 �޼�)#l \n\r #L1#"+name2+" #m"+code2+"# (3,000 �޼�)#l \n\r #L2#"+name3+" #m"+code3+"# (3,000 �޼�)#l");

  } else if (selection == 1) {
      cm.warp(map == -1 ? 100000000 : map);
      cm.clearSavedLocation("WORLDTOUR");
      cm.dispose();
  }
     } else if (status == 1) {
  sel = selection;
  if (sel == 0) {
      cm.sendNext("���� #b#m"+code1+"##k���� ������ �����Ű���? ����� #b2,000 �޼�#k. ���� �ٷ� �����ڽ��ϱ�?");
  } else if (sel == 1) {
      cm.sendNext("���� #b#m"+code2+"##k���� ������ �����Ű���? ����� #b2,000 �޼�#k. ���� �ٷ� �����ڽ��ϱ�?");
  } else if (sel == 2) {
      cm.sendNext("���� #b#m"+code3+"##k���� ������ �����Ű���? ����� #b2,000 �޼�#k. ���� �ٷ� �����ڽ��ϱ�?");
  }
     } else if (status == 2) {
  if (sel == 0) {
      cm.warp(code1);
      cm.gainMeso(-2000);
  } else if (sel == 1) {
      cm.warp(code2);
      cm.gainMeso(-2000);
  } else if (sel == 2) {
      cm.warp(code3);
      cm.gainMeso(-2000);
  }
  cm.dispose();
     }
 }
    }
}



